import { describe, expect, it } from 'vitest';
import {
  cachePreferences,
  DEFAULT_PREFERENCES,
  setColorModePreference,
  subscribePreferences,
  type UserPreferences,
} from './preferences-store';

describe('preferences store', () => {
  it('defaults the app color mode to dark', () => {
    expect(DEFAULT_PREFERENCES.colorMode).toBe('dark');
  });

  it('updates the color mode without changing other preferences', () => {
    const preferences: UserPreferences = {
      selectedDomains: ['ai', 'cloud'],
      dailySessionSize: 10,
      colorMode: 'dark',
    };

    expect(setColorModePreference(preferences, 'light')).toEqual({
      selectedDomains: ['ai', 'cloud'],
      dailySessionSize: 10,
      colorMode: 'light',
    });
  });

  it('notifies subscribers when cached preferences change', () => {
    const updates: UserPreferences[] = [];
    const unsubscribe = subscribePreferences((preferences) => {
      updates.push(preferences);
    });

    const preferences = setColorModePreference(DEFAULT_PREFERENCES, 'light');
    cachePreferences(preferences);
    unsubscribe();
    cachePreferences(setColorModePreference(DEFAULT_PREFERENCES, 'dark'));

    expect(updates).toEqual([preferences]);
  });
});
