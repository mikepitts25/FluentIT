import type { Card, Domain } from '../content';
import type { SRSStateMap } from '@fluentit/srs';
import { getDueCardIds } from '@fluentit/srs';

export type SessionItemKind = 'review' | 'new';

export interface SessionItem {
  card: Card;
  kind: SessionItemKind;
}

export interface BuildSessionQueueOptions {
  cards: Card[];
  states: SRSStateMap;
  domain?: Domain;
  selectedDomains?: Domain[];
  limit?: number;
  now?: Date;
}

const DEFAULT_SESSION_LIMIT = 5;

export function buildSessionQueue({
  cards,
  states,
  domain,
  selectedDomains = [],
  limit = DEFAULT_SESSION_LIMIT,
  now = new Date(),
}: BuildSessionQueueOptions): SessionItem[] {
  const focusDomains = new Set(selectedDomains);
  const scopedCards = cards.filter((card) => {
    if (domain) return card.domain === domain;
    if (focusDomains.size > 0) return focusDomains.has(card.domain);
    return true;
  });
  const scopedCardIds = new Set(scopedCards.map((card) => card.id));
  const dueIds = new Set(
    getDueCardIds(states, now).filter((cardId) => scopedCardIds.has(cardId)),
  );

  const reviewItems = scopedCards
    .filter((card) => dueIds.has(card.id))
    .map((card): SessionItem => ({ card, kind: 'review' }));

  const newItems = scopedCards
    .filter((card) => !states[card.id] && !dueIds.has(card.id))
    .map((card): SessionItem => ({ card, kind: 'new' }));

  return [...reviewItems, ...newItems].slice(0, limit);
}
