import { useCallback, useEffect, useRef, useState } from 'react';
import type { Grade } from 'ts-fsrs';
import {
  loadSRSStates,
  loadStreak,
  saveSRSStates,
  saveStreak,
  getDueCardIds,
  getOrCreateCardState,
  performReview,
  updateStreak,
  type SRSStateMap,
  type StreakData,
  type CardSRSState,
} from '../store/srs-store';

export interface SRSStore {
  states: SRSStateMap;
  streak: StreakData;
  isLoaded: boolean;
  dueCardIds: string[];
  review: (cardId: string, grade: Grade) => Promise<void>;
  startStudy: () => Promise<void>;
  getCardState: (cardId: string) => CardSRSState;
}

export function useSRSStore(): SRSStore {
  const [states, setStates] = useState<SRSStateMap>({});
  const [streak, setStreak] = useState<StreakData>({
    lastStudyDate: '',
    currentStreak: 0,
    longestStreak: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const statesRef = useRef(states);
  statesRef.current = states;

  useEffect(() => {
    Promise.all([loadSRSStates(), loadStreak()]).then(([s, k]) => {
      setStates(s);
      setStreak(k);
      setIsLoaded(true);
    });
  }, []);

  const review = useCallback(async (cardId: string, grade: Grade) => {
    const { states: newStates } = performReview(statesRef.current, cardId, grade);
    setStates(newStates);
    await saveSRSStates(newStates);
  }, []);

  const startStudy = useCallback(async () => {
    const newStreak = updateStreak(streak);
    if (newStreak.lastStudyDate !== streak.lastStudyDate) {
      setStreak(newStreak);
      await saveStreak(newStreak);
    }
  }, [streak]);

  const getCardState = useCallback(
    (cardId: string) => getOrCreateCardState(statesRef.current, cardId),
    [],
  );

  const dueCardIds = getDueCardIds(states);

  return { states, streak, isLoaded, dueCardIds, review, startStudy, getCardState };
}
