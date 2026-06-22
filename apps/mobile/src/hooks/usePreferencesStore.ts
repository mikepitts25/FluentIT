import { useCallback, useEffect, useState } from 'react';
import type { Domain } from '../content';
import {
  type ColorMode,
  getCachedPreferences,
  isPreferenceCacheLoaded,
  loadCachedPreferences,
  setColorModePreference,
  subscribePreferences,
  toggleSelectedDomain,
  updateCachedPreferences,
  type UserPreferences,
} from '../store/preferences-store';

export interface PreferencesStore {
  preferences: UserPreferences;
  isLoaded: boolean;
  toggleDomain: (domain: Domain) => Promise<void>;
  setColorMode: (colorMode: ColorMode) => Promise<void>;
}

export function usePreferencesStore(): PreferencesStore {
  const [preferences, setPreferences] = useState<UserPreferences>(getCachedPreferences());
  const [isLoaded, setIsLoaded] = useState(isPreferenceCacheLoaded());

  useEffect(() => {
    const unsubscribe = subscribePreferences((next) => {
      setPreferences(next);
      setIsLoaded(true);
    });

    loadCachedPreferences().then((loaded) => {
      setPreferences(loaded);
      setIsLoaded(true);
    });

    return unsubscribe;
  }, []);

  const toggleDomain = useCallback(async (domain: Domain) => {
    await updateCachedPreferences((current) => toggleSelectedDomain(current, domain));
  }, []);

  const setColorMode = useCallback(async (colorMode: ColorMode) => {
    await updateCachedPreferences((current) => setColorModePreference(current, colorMode));
  }, []);

  return { preferences, isLoaded, toggleDomain, setColorMode };
}
