import { describe, expect, it } from 'vitest';
import {
  DEFAULT_PREFERENCES,
  setColorModePreference,
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
});
