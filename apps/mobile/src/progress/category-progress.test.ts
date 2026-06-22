import { describe, expect, it } from 'vitest';
import type { Card, DomainMeta } from '../content';
import type { SRSStateMap } from '../store/srs-store';
import { getCategoryProgress } from './category-progress';

const domains: DomainMeta[] = [
  {
    id: 'cyber',
    label: 'Cybersecurity',
    icon: 'shield',
    color: '#ff0000',
    description: 'Threats and defenses',
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: 'bot',
    color: '#00ff00',
    description: 'Machine learning concepts',
  },
];

const baseCard: Card = {
  id: 'card-1',
  domain: 'cyber',
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

function card(id: string, domain: Card['domain']): Card {
  return { ...baseCard, id, domain, title: id };
}

describe('getCategoryProgress', () => {
  it('returns per-domain studied progress in alphabetical order', () => {
    const states = {
      'ai-1': {},
      'cyber-1': {},
    } as unknown as SRSStateMap;

    const progress = getCategoryProgress({
      domains,
      cards: [
        card('cyber-1', 'cyber'),
        card('cyber-2', 'cyber'),
        card('ai-1', 'ai'),
      ],
      states,
    });

    expect(progress).toEqual([
      {
        domain: domains[1],
        studiedCount: 1,
        totalCount: 1,
        percent: 100,
      },
      {
        domain: domains[0],
        studiedCount: 1,
        totalCount: 2,
        percent: 50,
      },
    ]);
  });

  it('returns zero percent for domains with no cards', () => {
    const progress = getCategoryProgress({
      domains,
      cards: [],
      states: {},
    });

    expect(progress.map((item) => [item.domain.id, item.percent])).toEqual([
      ['ai', 0],
      ['cyber', 0],
    ]);
  });
});
