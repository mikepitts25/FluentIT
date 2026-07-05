import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('robot avatar dev controls', () => {
  it('does not include robot preview dev controls in the app UI', () => {
    const source = readFileSync(join(__dirname, 'robot-avatar-card.tsx'), 'utf8');

    expect(source).not.toContain('EXPO_PUBLIC_SHOW_ROBOT_TEST_CONTROLS');
    expect(source).not.toContain('DEV:');
    expect(source).not.toContain('Development preview only');
    expect(source).not.toContain('getNextRobotAvatarTestMilestone');
  });

  it('does not enable dev/test env flags for the TestFlight build profile', () => {
    const easJson = JSON.parse(readFileSync(join(__dirname, '../../eas.json'), 'utf8'));

    expect(easJson.build.testflight.env).toBeUndefined();
  });

  it('centers the test loadout copy and wrapped percentage indicators', () => {
    const source = readFileSync(join(__dirname, 'robot-avatar-card.tsx'), 'utf8');

    expect(source).toContain("avatarTitle: { color: colors.textPrimary, fontSize: 16, fontWeight: '800', textAlign: 'center' }");
    expect(source).toContain("avatarText: { color: colors.textSecondary, fontSize: 13, lineHeight: 19, textAlign: 'center' }");
    expect(source).toContain("accessoryGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }");
    expect(source).toContain("accessoryText: { color: colors.textMuted, fontSize: 10, fontWeight: '800', textAlign: 'center', width: '100%' }");
  });
});
