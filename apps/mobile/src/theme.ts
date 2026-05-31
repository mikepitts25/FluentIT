export const DARK_COLORS = {
  // Backgrounds
  bgPrimary: '#0A0A0F',
  bgSecondary: '#0D1A2E',
  bgCard: '#FFFFFF08',
  bgCardAlt: '#FFFFFF12',
  bgInput: '#FFFFFF0A',

  // Borders
  borderCard: '#FFFFFF15',
  borderCardAlt: '#FFFFFF0A',
  borderActive: '#00FF8844',

  // Accents
  green: '#00FF88',
  cyan: '#00D4FF',
  red: '#FF4466',
  amber: '#F59E0B',
  purple: '#A78BFA',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255,255,255,0.55)',
  textMuted: 'rgba(255,255,255,0.3)',
  textLabel: 'rgba(255,255,255,0.4)',

  // Tab bar
  tabBg: '#0D0D1A',
  tabBorder: 'rgba(255,255,255,0.06)',
} as const;

export const LIGHT_COLORS = {
  // Backgrounds
  bgPrimary: '#F6F8FB',
  bgSecondary: '#EAF2F6',
  bgCard: '#FFFFFF',
  bgCardAlt: '#EEF3F8',
  bgInput: '#E7EDF3',

  // Borders
  borderCard: '#D8E0EA',
  borderCardAlt: '#E6ECF2',
  borderActive: '#00A66A44',

  // Accents
  green: '#008F5A',
  cyan: '#007EA7',
  red: '#D72F4B',
  amber: '#B7791F',
  purple: '#7C5CC4',

  // Text
  textPrimary: '#111827',
  textSecondary: 'rgba(17,24,39,0.65)',
  textMuted: 'rgba(17,24,39,0.42)',
  textLabel: 'rgba(17,24,39,0.52)',

  // Tab bar
  tabBg: '#FFFFFF',
  tabBorder: 'rgba(17,24,39,0.1)',
} as const;

export type ThemeColors = { [K in keyof typeof DARK_COLORS]: string };
export type ThemeMode = 'dark' | 'light';

export function getThemeColors(mode: ThemeMode): ThemeColors {
  return mode === 'light' ? LIGHT_COLORS : DARK_COLORS;
}

export const C = DARK_COLORS;

// Gradient stops reused across screens
export const GRAD_BG = ['#0A0A0F', '#0D1A2E'] as const;
export const GRAD_GREEN_CYAN = ['#00FF88', '#00D4FF'] as const;
