import { describe, expect, it } from 'vitest';
import type { Card } from '../content';
import {
  addPrepPack,
  createPrepPack,
  getPrepPackCards,
  removePrepPack,
  type PrepPack,
} from './prep-pack-store';

const baseCard: Card = {
  id: 'base-card',
  domain: 'architecture',
  title: 'Base Card',
  subtitle: 'Subtitle',
  difficulty: 'beginner',
  tags: ['tag'],
  definition: 'Definition',
  whyItMatters: 'Why it matters',
  analogy: 'Analogy',
  soundsSmartToSay: 'Smart phrase',
  commonConfusions: ['Confusion'],
  relatedTerms: [],
};

function card(id: string, fields: Partial<Card>): Card {
  return { ...baseCard, ...fields, id };
}

function pack(id: string, createdAt: string): PrepPack {
  return {
    id,
    title: `Pack ${id}`,
    agenda: `Agenda ${id}`,
    cardIds: [id],
    createdAt,
  };
}

describe('prep pack store', () => {
  it('creates a named prep pack from matched agenda cards', () => {
    const cards = [
      card('slo', {
        domain: 'observability',
        title: 'Service Level Objective',
        relatedTerms: ['SLO', 'Burn Rate'],
      }),
      card('oidc', {
        domain: 'identity',
        title: 'OpenID Connect',
        relatedTerms: ['OIDC', 'ID Token'],
      }),
    ];

    const result = createPrepPack({
      agenda:
        'Meeting: API Integration Planning\n\nReview SLO burn rate and OpenID Connect token path.',
      cards,
      now: new Date('2026-05-31T12:00:00.000Z'),
    });

    expect(result).toEqual({
      id: 'prep-2026-05-31T12-00-00-000Z',
      title: 'API Integration Planning',
      agenda:
        'Meeting: API Integration Planning\n\nReview SLO burn rate and OpenID Connect token path.',
      cardIds: ['slo', 'oidc'],
      createdAt: '2026-05-31T12:00:00.000Z',
    });
  });

  it('keeps generated packs newest first and caps history', () => {
    const existing = [
      pack('one', '2026-05-01T10:00:00.000Z'),
      pack('two', '2026-05-02T10:00:00.000Z'),
    ];
    const next = pack('three', '2026-05-03T10:00:00.000Z');

    const results = addPrepPack(existing, next, 2);

    expect(results.map((result) => result.id)).toEqual(['three', 'two']);
  });

  it('resolves saved card ids back to current card records', () => {
    const cards = [
      card('slo', { title: 'Service Level Objective' }),
      card('oidc', { title: 'OpenID Connect' }),
    ];
    const saved = {
      ...pack('saved', '2026-05-03T10:00:00.000Z'),
      cardIds: ['missing', 'oidc'],
    };

    expect(getPrepPackCards(saved, cards).map((result) => result.id)).toEqual(['oidc']);
  });

  it('removes a generated prep pack by id', () => {
    const results = removePrepPack(
      [
        pack('one', '2026-05-01T10:00:00.000Z'),
        pack('two', '2026-05-02T10:00:00.000Z'),
        pack('three', '2026-05-03T10:00:00.000Z'),
      ],
      'two',
    );

    expect(results.map((result) => result.id)).toEqual(['one', 'three']);
  });
});
