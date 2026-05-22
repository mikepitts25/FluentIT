import { useCallback, useEffect, useState } from 'react';
import type { Domain } from '../content';
import {
  DEFAULT_PREFERENCES,
  loadPreferences,
  savePreferences,
  toggleSelectedDomain,
  type UserPreferences,
} from '../store/preferences-store';

export interface PreferencesStore {
  preferences: UserPreferences;
  isLoaded: boolean;
  toggleDomain: (domain: Domain) => Promise<void>;
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

  return { preferences, isLoaded, toggleDomain };
}
