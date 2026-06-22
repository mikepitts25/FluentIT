import { describe, expect, it } from 'vitest';
import type { Card } from '../content';
import {
  FREE_TERMS_PER_CATEGORY,
  getAccessibleCardIds,
  getAccessibleCards,
  getLockedCardCount,
  isCardAccessible,
  shouldShowAds,
} from './pro-access';

const baseCard: Card = {
  id: 'card-a',
  domain: 'cloud',
  title: 'Alpha',
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

function card(id: string, title: string, domain: Card['domain'] = 'cloud'): Card {
  return { ...baseCard, id, title, domain };
}

describe('pro access', () => {
  it('keeps the free catalog alphabetized and capped per category', () => {
    const cards = [
      card('cloud-z', 'Zero Trust', 'cloud'),
      card('cloud-a', 'Agile', 'cloud'),
      card('cloud-d', 'Docker', 'cloud'),
      card('cyber-b', 'Bug Bounty', 'cyber'),
      card('cyber-a', 'Access Review', 'cyber'),
      card('cyber-c', 'Cloud SIEM', 'cyber'),
    ];

    expect(
      getAccessibleCards({ cards, isPro: false, freeTermsPerCategory: 2 }).map((item) => item.title),
    ).toEqual([
      'Access Review',
      'Agile',
      'Bug Bounty',
      'Docker',
    ]);
  });

  it('does not let one category consume another category free allowance', () => {
    const cards = [
      card('cloud-a', 'Agile', 'cloud'),
      card('cloud-c', 'Cloud IAM', 'cloud'),
      card('cloud-z', 'Zero Trust', 'cloud'),
      card('cyber-s', 'SIEM', 'cyber'),
    ];

    expect(
      getAccessibleCards({ cards, isPro: false, freeTermsPerCategory: 2 }).map((item) => item.title),
    ).toEqual([
      'Agile',
      'Cloud IAM',
      'SIEM',
    ]);
  });

  it('allows Pro users to access every card', () => {
    const cards = [
      card('z', 'Zero Trust'),
      card('a', 'Agile'),
      card('d', 'Docker'),
    ];

    expect(getAccessibleCards({ cards, isPro: true, freeTermsPerCategory: 1 }).map((item) => item.id)).toEqual([
      'a',
      'd',
      'z',
    ]);
  });

  it('reports locked cards for free users only', () => {
    const cards = [
      card('cloud-one', 'One', 'cloud'),
      card('cloud-two', 'Two', 'cloud'),
      card('cyber-three', 'Three', 'cyber'),
    ];

    expect(getLockedCardCount({ cards, isPro: false, freeTermsPerCategory: 1 })).toBe(1);
    expect(getLockedCardCount({ cards, isPro: true, freeTermsPerCategory: 1 })).toBe(0);
  });

  it('can check access for a specific card id', () => {
    const cards = [card('b', 'Beta'), card('a', 'Alpha')];

    expect(isCardAccessible({ cardId: 'a', cards, isPro: false, freeTermsPerCategory: 1 })).toBe(true);
    expect(isCardAccessible({ cardId: 'b', cards, isPro: false, freeTermsPerCategory: 1 })).toBe(false);
    expect(isCardAccessible({ cardId: 'b', cards, isPro: true, freeTermsPerCategory: 1 })).toBe(true);
  });

  it('can precompute accessible ids for repeated row checks', () => {
    const cards = [card('b', 'Beta'), card('a', 'Alpha'), card('c', 'Cloud IAM')];

    expect([...getAccessibleCardIds({ cards, isPro: false, freeTermsPerCategory: 2 })]).toEqual(['a', 'b']);
    expect([...getAccessibleCardIds({ cards, isPro: true, freeTermsPerCategory: 2 })]).toEqual(['a', 'b', 'c']);
  });

  it('shows ads only when the user has not purchased Pro', () => {
    expect(shouldShowAds({ isPro: false })).toBe(true);
    expect(shouldShowAds({ isPro: true })).toBe(false);
  });

  it('defaults the free catalog to 20 terms per category', () => {
    expect(FREE_TERMS_PER_CATEGORY).toBe(20);
  });
});
