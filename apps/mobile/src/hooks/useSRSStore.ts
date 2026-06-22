import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Grade } from '@fluentit/srs';
import {
  getCachedSRS,
  isSRSCacheLoaded,
  loadCachedSRS,
  subscribeSRS,
  updateCachedSRS,
  getDueCardIds,
  getOrCreateCardState,
  performReview,
  updateStreak,
  type SRSCache,
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
  const [cache, setCache] = useState<SRSCache>(() => getCachedSRS());
  const [isLoaded, setIsLoaded] = useState(() => isSRSCacheLoaded());

  useEffect(() => {
    let isMounted = true;
    const unsubscribe = subscribeSRS((nextCache) => {
      setCache(nextCache);
      setIsLoaded(true);
    });

    loadCachedSRS().then((nextCache) => {
      if (!isMounted) return;
      setCache(nextCache);
      setIsLoaded(true);
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const review = useCallback(async (cardId: string, grade: Grade) => {
    await loadCachedSRS();
    await updateCachedSRS((current) => {
      const { states: newStates } = performReview(current.states, cardId, grade);
      return { ...current, states: newStates };
    }, { states: true, streak: false });
  }, []);

  const startStudy = useCallback(async () => {
    await loadCachedSRS();
    await updateCachedSRS((current) => {
      const newStreak = updateStreak(current.streak);
      if (newStreak === current.streak) return current;
      return { ...current, streak: newStreak };
    }, { states: false, streak: true });
  }, []);

  const getCardState = useCallback(
    (cardId: string) => getOrCreateCardState(getCachedSRS().states, cardId),
    [],
  );

  const states = cache.states;
  const streak = cache.streak;
  const dueCardIds = useMemo(() => getDueCardIds(states), [states]);

  return { states, streak, isLoaded, dueCardIds, review, startStudy, getCardState };
}
