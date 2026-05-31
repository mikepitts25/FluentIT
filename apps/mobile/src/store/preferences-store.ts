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
