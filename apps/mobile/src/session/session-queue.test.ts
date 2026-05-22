import { describe, expect, it } from 'vitest';
import { createNewCardState, type SRSStateMap } from '@fluentit/srs';
import type { Card } from '../content';
import { buildSessionQueue } from './session-queue';

const baseCard: Card = {
  id: 'card-1',
  domain: 'cloud',
  title: 'Card 1',
  subtitle: 'Subtitle',
  difficulty: 'beginner',
  tags: ['tag'],
  definition: 'Definition',
  whyItMatters: 'Why',
  analogy: 'Analogy',
  soundsSmartToSay: 'Smart phrase',
  commonConfusions: ['Confusion'],
  relatedTerms: [],
};

function card(id: string, domain: Card['domain'] = 'cloud'): Card {
  return { ...baseCard, id, domain, title: id };
}

function reviewedState(cardId: string, due: Date): SRSStateMap[string] {
  const state = createNewCardState(cardId);
  state.fsrsCard.due = due;
  return state;
}

describe('buildSessionQueue', () => {
  it('orders due cards before new cards', () => {
    const now = new Date('2026-05-08T10:00:00.000Z');
    const states: SRSStateMap = {
      due: reviewedState('due', new Date('2026-05-08T09:00:00.000Z')),
    };

    const queue = buildSessionQueue({
      cards: [card('new-1'), card('due'), card('new-2')],
      states,
      now,
    });

    expect(queue.map((item) => [item.card.id, item.kind])).toEqual([
      ['due', 'review'],
      ['new-1', 'new'],
      ['new-2', 'new'],
    ]);
  });

  it('does not include reviewed cards that are not due', () => {
    const now = new Date('2026-05-08T10:00:00.000Z');
    const states: SRSStateMap = {
      later: reviewedState('later', new Date('2026-05-09T10:00:00.000Z')),
    };

    const queue = buildSessionQueue({
      cards: [card('later'), card('new')],
      states,
      now,
    });

    expect(queue.map((item) => item.card.id)).toEqual(['new']);
  });

  it('can scope a session to one domain', () => {
    const queue = buildSessionQueue({
      cards: [card('cloud-1', 'cloud'), card('cyber-1', 'cyber')],
      states: {},
      domain: 'cyber',
    });

    expect(queue.map((item) => item.card.id)).toEqual(['cyber-1']);
  });

  it('uses selected domains for an unscoped session', () => {
    const queue = buildSessionQueue({
      cards: [
        card('cloud-1', 'cloud'),
        card('cyber-1', 'cyber'),
        card('data-1', 'data'),
      ],
      states: {},
      selectedDomains: ['cloud', 'data'],
    });

    expect(queue.map((item) => item.card.id)).toEqual(['cloud-1', 'data-1']);
  });

  it('uses all domains when no focus domains are selected', () => {
    const queue = buildSessionQueue({
      cards: [card('cloud-1', 'cloud'), card('cyber-1', 'cyber')],
      states: {},
      selectedDomains: [],
    });

    expect(queue.map((item) => item.card.id)).toEqual(['cloud-1', 'cyber-1']);
  });

  it('explicit domain scope overrides selected domains', () => {
    const queue = buildSessionQueue({
      cards: [card('cloud-1', 'cloud'), card('cyber-1', 'cyber')],
      states: {},
      domain: 'cyber',
      selectedDomains: ['cloud'],
    });

    expect(queue.map((item) => item.card.id)).toEqual(['cyber-1']);
  });

  it('caps the queue to the requested session size', () => {
    const queue = buildSessionQueue({
      cards: [card('one'), card('two'), card('three')],
      states: {},
      limit: 2,
    });

    expect(queue.map((item) => item.card.id)).toEqual(['one', 'two']);
  });
});
