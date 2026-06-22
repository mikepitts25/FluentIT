import { useMemo } from 'react';
import { getThemeColors } from '../theme';
import { usePreferencesStore } from './usePreferencesStore';

export function useThemeColors() {
  const { preferences, setColorMode } = usePreferencesStore();
  const colors = useMemo(
    () => getThemeColors(preferences.colorMode),
    [preferences.colorMode],
  );

  return {
    colorMode: preferences.colorMode,
    colors,
    setColorMode,
  };
}
