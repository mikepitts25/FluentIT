import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Card } from '../content';
import { matchAgendaCards } from './agenda-matcher';

const STORAGE_KEY = '@fluentit:prep_packs';
const DEFAULT_PACK_LIMIT = 8;
const DEFAULT_HISTORY_LIMIT = 10;

export interface PrepPack {
  id: string;
  title: string;
  agenda: string;
  cardIds: string[];
  createdAt: string;
}

export function createPrepPack({
  agenda,
  cards,
  now = new Date(),
  limit = DEFAULT_PACK_LIMIT,
}: {
  agenda: string;
  cards: Card[];
  now?: Date;
  limit?: number;
}): PrepPack | null {
  const trimmedAgenda = agenda.trim();
  if (!trimmedAgenda) return null;

  const createdAt = now.toISOString();
  const matchedCards = matchAgendaCards(trimmedAgenda, cards, limit);

  return {
    id: `prep-${createdAt.replace(/[:.]/g, '-')}`,
    title: derivePrepPackTitle(trimmedAgenda),
    agenda: trimmedAgenda,
    cardIds: matchedCards.map((card) => card.id),
    createdAt,
  };
}

export function addPrepPack(
  existing: PrepPack[],
  pack: PrepPack,
  limit = DEFAULT_HISTORY_LIMIT,
): PrepPack[] {
  return [pack, ...existing.filter((candidate) => candidate.id !== pack.id)]
    .sort((left, right) => right.createdAt.localeCompare(left.createdAt))
    .slice(0, limit);
}

export function removePrepPack(existing: PrepPack[], packId: string): PrepPack[] {
  return existing.filter((pack) => pack.id !== packId);
}

export function getPrepPackCards(pack: PrepPack, cards: Card[]): Card[] {
  const cardsById = new Map(cards.map((card) => [card.id, card]));
  return pack.cardIds.flatMap((cardId) => {
    const card = cardsById.get(cardId);
    return card ? [card] : [];
  });
}

export async function loadPrepPacks(): Promise<PrepPack[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isPrepPack);
  } catch {
    return [];
  }
}

export async function savePrepPacks(packs: PrepPack[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(packs));
}

function derivePrepPackTitle(agenda: string): string {
  const firstLine = agenda
    .split('\n')
    .map((line) => line.trim())
    .find(Boolean);
  if (!firstLine) return 'Untitled prep pack';

  const withoutPrefix = firstLine.replace(/^(meeting|agenda|topic|title)\s*:\s*/i, '').trim();
  return withoutPrefix.slice(0, 72) || 'Untitled prep pack';
}

function isPrepPack(value: unknown): value is PrepPack {
  if (!value || typeof value !== 'object') return false;
  const pack = value as Partial<PrepPack>;
  return (
    typeof pack.id === 'string' &&
    typeof pack.title === 'string' &&
    typeof pack.agenda === 'string' &&
    typeof pack.createdAt === 'string' &&
    Array.isArray(pack.cardIds) &&
    pack.cardIds.every((cardId) => typeof cardId === 'string')
  );
}
