import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createNewCardState,
  getDueCardIds as getSharedDueCardIds,
  getStabilityLabel,
  Rating,
  reviewCard,
  type CardSRSState,
  type Grade,
  type SRSStateMap,
} from '@fluentit/srs';

export type { Grade };
export { Rating };
export type { CardSRSState, SRSStateMap };

export interface StreakData {
  lastStudyDate: string;
  currentStreak: number;
  longestStreak: number;
}

export interface SRSCache {
  states: SRSStateMap;
  streak: StreakData;
}

export const DEFAULT_STREAK: StreakData = {
  lastStudyDate: '',
  currentStreak: 0,
  longestStreak: 0,
};

type SRSListener = (cache: SRSCache) => void;

const srsListeners = new Set<SRSListener>();
let cachedSRS: SRSCache = { states: {}, streak: DEFAULT_STREAK };
let hasLoadedCachedSRS = false;
let loadCachedSRSPromise: Promise<SRSCache> | null = null;
let srsRevision = 0;

// ---------- Persistence ----------

export async function loadSRSStates(): Promise<SRSStateMap> {
  try {
    const raw = await AsyncStorage.getItem('@fluentit:srs_states');
    if (!raw) return {};
    const parsed = JSON.parse(raw) as SRSStateMap;
    const result: SRSStateMap = {};
    for (const [id, state] of Object.entries(parsed)) {
      result[id] = {
        ...state,
        fsrsCard: {
          ...state.fsrsCard,
          due: new Date(state.fsrsCard.due as unknown as string),
          last_review: state.fsrsCard.last_review
            ? new Date(state.fsrsCard.last_review as unknown as string)
            : undefined,
        },
      };
    }
    return result;
  } catch {
    return {};
  }
}

export async function saveSRSStates(states: SRSStateMap): Promise<void> {
  await AsyncStorage.setItem('@fluentit:srs_states', JSON.stringify(states));
}

export async function loadStreak(): Promise<StreakData> {
  try {
    const raw = await AsyncStorage.getItem('@fluentit:streak');
    if (!raw) return { ...DEFAULT_STREAK };
    return { ...DEFAULT_STREAK, ...(JSON.parse(raw) as Partial<StreakData>) };
  } catch {
    return { ...DEFAULT_STREAK };
  }
}

export async function saveStreak(data: StreakData): Promise<void> {
  await AsyncStorage.setItem('@fluentit:streak', JSON.stringify(data));
}

export function getCachedSRS(): SRSCache {
  return cachedSRS;
}

export function isSRSCacheLoaded(): boolean {
  return hasLoadedCachedSRS;
}

export function subscribeSRS(listener: SRSListener): () => void {
  srsListeners.add(listener);
  return () => {
    srsListeners.delete(listener);
  };
}

export function cacheSRS(cache: SRSCache): SRSCache {
  srsRevision += 1;
  cachedSRS = cache;
  hasLoadedCachedSRS = true;
  srsListeners.forEach((listener) => listener(cache));
  return cache;
}

export async function loadCachedSRS(): Promise<SRSCache> {
  if (hasLoadedCachedSRS) return cachedSRS;
  if (loadCachedSRSPromise) return loadCachedSRSPromise;

  const loadRevision = srsRevision;
  loadCachedSRSPromise = Promise.all([loadSRSStates(), loadStreak()])
    .then(([states, streak]) => {
      if (hasLoadedCachedSRS && srsRevision !== loadRevision) {
        return cachedSRS;
      }

      return cacheSRS({ states, streak });
    })
    .finally(() => {
      loadCachedSRSPromise = null;
    });

  return loadCachedSRSPromise;
}

export async function updateCachedSRS(
  updater: (cache: SRSCache) => SRSCache,
  persistence: { states?: boolean; streak?: boolean } = { states: true, streak: true },
): Promise<SRSCache> {
  const previous = cachedSRS;
  const next = updater(cachedSRS);

  if (next !== previous) {
    cacheSRS(next);
  }

  const writes: Promise<void>[] = [];
  if (persistence.states && next.states !== previous.states) {
    writes.push(saveSRSStates(next.states));
  }
  if (persistence.streak && next.streak !== previous.streak) {
    writes.push(saveStreak(next.streak));
  }

  await Promise.all(writes);
  return next;
}

// ---------- Operations ----------

export function getOrCreateCardState(states: SRSStateMap, cardId: string): CardSRSState {
  return states[cardId] ?? createNewCardState(cardId);
}

export function performReview(
  states: SRSStateMap,
  cardId: string,
  grade: Grade,
): { states: SRSStateMap; nextReviewDate: Date } {
  const current = getOrCreateCardState(states, cardId);
  const result = reviewCard(current, grade);
  return {
    states: { ...states, [cardId]: result.state },
    nextReviewDate: result.nextReviewDate,
  };
}

export function getDueCardIds(states: SRSStateMap, now = new Date()): string[] {
  return getSharedDueCardIds(states, now);
}

export function getLocalDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getPreviousLocalDateKey(date: Date): string {
  const previous = new Date(date);
  previous.setDate(previous.getDate() - 1);
  return getLocalDateKey(previous);
}

export function updateStreak(streak: StreakData, now = new Date()): StreakData {
  const today = getLocalDateKey(now);
  if (streak.lastStudyDate === today) return streak;

  const yesterday = getPreviousLocalDateKey(now);
  const newStreak = streak.lastStudyDate === yesterday
    ? Math.max(streak.currentStreak + 1, 1)
    : 1;

  return {
    lastStudyDate: today,
    currentStreak: newStreak,
    longestStreak: Math.max(newStreak, streak.longestStreak),
  };
}

export { getStabilityLabel };
