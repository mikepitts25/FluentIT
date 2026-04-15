import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createEmptyCard,
  fsrs,
  generatorParameters,
  Rating,
  type Card as FSRSCard,
  type ReviewLog,
  type Grade,
} from 'ts-fsrs';

const f = fsrs(generatorParameters({ enable_fuzz: true }));

export type { Grade };
export { Rating };

export interface CardSRSState {
  cardId: string;
  fsrsCard: FSRSCard;
  logs: ReviewLog[];
}

export interface StreakData {
  lastStudyDate: string;
  currentStreak: number;
  longestStreak: number;
}

export type SRSStateMap = Record<string, CardSRSState>;

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
    if (!raw) return { lastStudyDate: '', currentStreak: 0, longestStreak: 0 };
    return JSON.parse(raw) as StreakData;
  } catch {
    return { lastStudyDate: '', currentStreak: 0, longestStreak: 0 };
  }
}

export async function saveStreak(data: StreakData): Promise<void> {
  await AsyncStorage.setItem('@fluentit:streak', JSON.stringify(data));
}

// ---------- Operations ----------

export function getOrCreateCardState(states: SRSStateMap, cardId: string): CardSRSState {
  return states[cardId] ?? { cardId, fsrsCard: createEmptyCard(), logs: [] };
}

export function performReview(
  states: SRSStateMap,
  cardId: string,
  grade: Grade,
): { states: SRSStateMap; nextReviewDate: Date } {
  const current = getOrCreateCardState(states, cardId);
  const now = new Date();
  const item = f.next(current.fsrsCard, now, grade);
  const newState: CardSRSState = {
    cardId,
    fsrsCard: item.card,
    logs: [...current.logs, item.log],
  };
  return {
    states: { ...states, [cardId]: newState },
    nextReviewDate: item.card.due,
  };
}

export function getDueCardIds(states: SRSStateMap, now = new Date()): string[] {
  return Object.values(states)
    .filter((s) => s.fsrsCard.due <= now)
    .map((s) => s.cardId);
}

export function updateStreak(streak: StreakData): StreakData {
  const today = new Date().toISOString().split('T')[0];
  if (streak.lastStudyDate === today) return streak;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const newStreak = streak.lastStudyDate === yesterday ? streak.currentStreak + 1 : 1;
  return {
    lastStudyDate: today,
    currentStreak: newStreak,
    longestStreak: Math.max(newStreak, streak.longestStreak),
  };
}

export function getStabilityLabel(state: CardSRSState): string {
  const s = state.fsrsCard.stability;
  if (!s || s < 1) return 'New';
  if (s < 7) return 'Learning';
  if (s < 30) return 'Familiar';
  return 'Mastered';
}
