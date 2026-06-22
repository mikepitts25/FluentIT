import type { Card } from '../content';

export const FREE_TERMS_PER_CATEGORY = 20;

export interface ProAccessOptions {
  cards: readonly Card[];
  freeTermsPerCategory?: number;
  isPro: boolean;
}

export function sortCardsForAccess(cards: readonly Card[]): Card[] {
  return [...cards].sort((a, b) => {
    const titleCompare = a.title.localeCompare(b.title);
    if (titleCompare !== 0) return titleCompare;
    return a.id.localeCompare(b.id);
  });
}

export function getAccessibleCards({
  cards,
  freeTermsPerCategory = FREE_TERMS_PER_CATEGORY,
  isPro,
}: ProAccessOptions): Card[] {
  const sortedCards = sortCardsForAccess(cards);
  if (isPro) return sortedCards;

  const countsByDomain = new Map<Card['domain'], number>();
  return sortedCards.filter((card) => {
    const domainCount = countsByDomain.get(card.domain) ?? 0;
    if (domainCount >= freeTermsPerCategory) return false;

    countsByDomain.set(card.domain, domainCount + 1);
    return true;
  });
}

export function getAccessibleCardIds(options: ProAccessOptions): Set<string> {
  return new Set(getAccessibleCards(options).map((card) => card.id));
}

export function getLockedCardCount(options: ProAccessOptions): number {
  if (options.isPro) return 0;
  return Math.max(0, options.cards.length - getAccessibleCards(options).length);
}

export function isCardAccessible({
  cardId,
  cards,
  freeTermsPerCategory = FREE_TERMS_PER_CATEGORY,
  isPro,
}: ProAccessOptions & { cardId: string }): boolean {
  if (isPro) return true;
  return getAccessibleCards({ cards, freeTermsPerCategory, isPro: false }).some((card) => (
    card.id === cardId
  ));
}

export function shouldShowAds({ isPro }: { isPro: boolean }): boolean {
  return !isPro;
}
