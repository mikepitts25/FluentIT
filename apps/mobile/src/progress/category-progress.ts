import type { Card, DomainMeta } from '../content';
import type { SRSStateMap } from '../store/srs-store';

export interface CategoryProgress {
  domain: DomainMeta;
  studiedCount: number;
  totalCount: number;
  percent: number;
}

export function getCategoryProgress({
  domains,
  cards,
  states,
}: {
  domains: readonly DomainMeta[];
  cards: readonly Card[];
  states: SRSStateMap;
}): CategoryProgress[] {
  return [...domains]
    .sort((a, b) => a.label.localeCompare(b.label))
    .map((domain) => {
      const domainCards = cards.filter((card) => card.domain === domain.id);
      const studiedCount = domainCards.filter((card) => Boolean(states[card.id])).length;
      const percent = domainCards.length > 0
        ? Math.round((studiedCount / domainCards.length) * 100)
        : 0;

      return {
        domain,
        studiedCount,
        totalCount: domainCards.length,
        percent,
      };
    });
}
