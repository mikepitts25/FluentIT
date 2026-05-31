import { useCallback, useEffect, useState } from 'react';
import type { Domain } from '../content';
import {
  type ColorMode,
  DEFAULT_PREFERENCES,
  loadPreferences,
  savePreferences,
  setColorModePreference,
  toggleSelectedDomain,
  type UserPreferences,
} from '../store/preferences-store';

export interface PreferencesStore {
  preferences: UserPreferences;
  isLoaded: boolean;
  toggleDomain: (domain: Domain) => Promise<void>;
  setColorMode: (colorMode: ColorMode) => Promise<void>;
}

export function usePreferencesStore(): PreferencesStore {
  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadPreferences().then((loaded) => {
      setPreferences(loaded);
      setIsLoaded(true);
    });
  }, []);

  const toggleDomain = useCallback(async (domain: Domain) => {
    setPreferences((current) => {
      const next = toggleSelectedDomain(current, domain);
      savePreferences(next);
      return next;
    });
  }, []);

  const setColorMode = useCallback(async (colorMode: ColorMode) => {
    setPreferences((current) => {
      const next = setColorModePreference(current, colorMode);
      savePreferences(next);
      return next;
    });
  }, []);

  return { preferences, isLoaded, toggleDomain, setColorMode };
}
