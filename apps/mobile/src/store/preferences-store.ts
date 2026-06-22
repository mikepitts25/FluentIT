import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Domain } from '../content';

const STORAGE_KEY = '@fluentit:preferences';

export type ColorMode = 'dark' | 'light';

export interface UserPreferences {
  selectedDomains: Domain[];
  dailySessionSize: number;
  colorMode: ColorMode;
}

export const DEFAULT_PREFERENCES: UserPreferences = {
  selectedDomains: [],
  dailySessionSize: 5,
  colorMode: 'dark',
};

type PreferencesListener = (preferences: UserPreferences) => void;

const preferenceListeners = new Set<PreferencesListener>();
let cachedPreferences = DEFAULT_PREFERENCES;
let hasLoadedCachedPreferences = false;
let loadCachedPreferencesPromise: Promise<UserPreferences> | null = null;
let preferenceRevision = 0;

export async function loadPreferences(): Promise<UserPreferences> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    return { ...DEFAULT_PREFERENCES, ...(JSON.parse(raw) as Partial<UserPreferences>) };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export async function savePreferences(preferences: UserPreferences): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
}

export function getCachedPreferences(): UserPreferences {
  return cachedPreferences;
}

export function isPreferenceCacheLoaded(): boolean {
  return hasLoadedCachedPreferences;
}

export function subscribePreferences(listener: PreferencesListener): () => void {
  preferenceListeners.add(listener);
  return () => {
    preferenceListeners.delete(listener);
  };
}

export function cachePreferences(preferences: UserPreferences): UserPreferences {
  preferenceRevision += 1;
  cachedPreferences = preferences;
  hasLoadedCachedPreferences = true;
  preferenceListeners.forEach((listener) => listener(preferences));
  return preferences;
}

export async function loadCachedPreferences(): Promise<UserPreferences> {
  if (hasLoadedCachedPreferences) return cachedPreferences;
  if (loadCachedPreferencesPromise) return loadCachedPreferencesPromise;

  const loadRevision = preferenceRevision;
  loadCachedPreferencesPromise = loadPreferences()
    .then((preferences) => {
      if (hasLoadedCachedPreferences && preferenceRevision !== loadRevision) {
        return cachedPreferences;
      }

      return cachePreferences(preferences);
    })
    .finally(() => {
      loadCachedPreferencesPromise = null;
    });

  return loadCachedPreferencesPromise;
}

export async function updateCachedPreferences(
  updater: (preferences: UserPreferences) => UserPreferences,
): Promise<UserPreferences> {
  const next = cachePreferences(updater(cachedPreferences));
  await savePreferences(next);
  return next;
}

export function toggleSelectedDomain(
  preferences: UserPreferences,
  domain: Domain,
): UserPreferences {
  const selected = new Set(preferences.selectedDomains);
  if (selected.has(domain)) {
    selected.delete(domain);
  } else {
    selected.add(domain);
  }

  return {
    ...preferences,
    selectedDomains: Array.from(selected),
  };
}

export function setColorModePreference(
  preferences: UserPreferences,
  colorMode: ColorMode,
): UserPreferences {
  return {
    ...preferences,
    colorMode,
  };
}
