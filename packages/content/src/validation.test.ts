import { describe, expect, it } from 'vitest';
import { ALL_CARDS, DOMAINS } from './index';
import type { Card } from './types';
import { validateCards } from './validation';

describe('content validation', () => {
  it('accepts the bundled card catalog', () => {
    expect(validateCards(ALL_CARDS, DOMAINS)).toEqual([]);
  });

  it('includes at least 50 cards for every domain', () => {
    for (const domain of DOMAINS) {
      const count = ALL_CARDS.filter((card) => card.domain === domain.id).length;

      expect(count, `${domain.id} card count`).toBeGreaterThanOrEqual(50);
    }
  });

  it('includes the first meeting-prep focus domains', () => {
    expect(DOMAINS.map((domain) => domain.id)).toEqual(
      expect.arrayContaining(['observability', 'identity', 'architecture', 'appsec']),
    );
  });

  it('reports duplicate card ids', () => {
    const duplicate = { ...ALL_CARDS[0] };

    expect(validateCards([ALL_CARDS[0], duplicate], DOMAINS)).toContain(
      `Duplicate card id "${duplicate.id}"`,
    );
  });

  it('reports cards with invalid domain ids', () => {
    const card = {
      ...ALL_CARDS[0],
      id: 'bad-domain',
      domain: 'security',
    } as unknown as Card;

    expect(validateCards([card], DOMAINS)).toContain(
      'Card "bad-domain" has invalid domain "security"',
    );
  });

  it('reports missing mobile-critical fields', () => {
    const card = { ...ALL_CARDS[0], id: 'missing-copy', definition: '   ', tags: [] };

    expect(validateCards([card], DOMAINS)).toEqual(
      expect.arrayContaining([
        'Card "missing-copy" is missing definition',
        'Card "missing-copy" must have at least one tag',
      ]),
    );
  });
});
