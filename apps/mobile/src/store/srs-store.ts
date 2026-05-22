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

export { getStabilityLabel };
