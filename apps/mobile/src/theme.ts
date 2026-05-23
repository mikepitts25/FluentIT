export const C = {
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

// Gradient stops reused across screens
export const GRAD_BG = ['#0A0A0F', '#0D1A2E'] as const;
export const GRAD_GREEN_CYAN = ['#00FF88', '#00D4FF'] as const;
