import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('robot avatar dev controls', () => {
  it('keeps the robot build test button behind the React Native dev flag or explicit TestFlight flag', () => {
    const source = readFileSync(join(__dirname, 'robot-avatar-card.tsx'), 'utf8');

    expect(source).toContain("process.env.EXPO_PUBLIC_SHOW_ROBOT_TEST_CONTROLS === 'true'");
    expect(source).toContain("typeof __DEV__ !== 'undefined' && __DEV__");
    expect(source).toContain('{SHOW_ROBOT_TEST_CONTROLS && (');
  });

  it('enables robot test controls only for the TestFlight build profile', () => {
    const easJson = JSON.parse(readFileSync(join(__dirname, '../../eas.json'), 'utf8'));

    expect(easJson.build.testflight.env.EXPO_PUBLIC_SHOW_ROBOT_TEST_CONTROLS).toBe('true');
    expect(easJson.build.production.env?.EXPO_PUBLIC_SHOW_ROBOT_TEST_CONTROLS).toBeUndefined();
  });

  it('centers the test loadout copy and wrapped percentage indicators', () => {
    const source = readFileSync(join(__dirname, 'robot-avatar-card.tsx'), 'utf8');

    expect(source).toContain("avatarTitle: { color: colors.textPrimary, fontSize: 16, fontWeight: '800', textAlign: 'center' }");
    expect(source).toContain("avatarText: { color: colors.textSecondary, fontSize: 13, lineHeight: 19, textAlign: 'center' }");
    expect(source).toContain("accessoryGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }");
    expect(source).toContain("accessoryText: { color: colors.textMuted, fontSize: 10, fontWeight: '800', textAlign: 'center', width: '100%' }");
  });
});
