import type { Card, DomainMeta } from '../content';

export interface LearnSearchCardResult {
  card: Card;
  isLocked: boolean;
}

function normalizeSearchText(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function cardMatchesQuery(card: Card, query: string): boolean {
  const haystack = normalizeSearchText([
    card.title,
    card.subtitle,
    ...card.tags,
  ].join(' '));

  return haystack.includes(query);
}

export function getVisibleLearnDomains({
  domains,
  cards,
  query,
}: {
  domains: readonly DomainMeta[];
  cards: readonly Card[];
  query: string;
}): DomainMeta[] {
  const sortedDomains = [...domains].sort((a, b) => a.label.localeCompare(b.label));
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) return sortedDomains;

  return sortedDomains.filter((domain) => {
    const domainText = normalizeSearchText(`${domain.label} ${domain.description}`);
    if (domainText.includes(normalizedQuery)) return true;

    return cards.some((card) => (
      card.domain === domain.id && cardMatchesQuery(card, normalizedQuery)
    ));
  });
}

export function getLearnSearchCardResults({
  cards,
  accessibleCardIds,
  query,
}: {
  cards: readonly Card[];
  accessibleCardIds: ReadonlySet<Card['id']>;
  query: string;
}): LearnSearchCardResult[] {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];

  return [...cards]
    .filter((card) => cardMatchesQuery(card, normalizedQuery))
    .sort((a, b) => {
      const titleCompare = a.title.localeCompare(b.title);
      if (titleCompare !== 0) return titleCompare;
      return a.id.localeCompare(b.id);
    })
    .map((card) => ({
      card,
      isLocked: !accessibleCardIds.has(card.id),
    }));
}
