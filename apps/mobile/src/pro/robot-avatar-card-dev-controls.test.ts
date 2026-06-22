import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('robot avatar dev controls', () => {
  it('keeps the robot build test button behind the React Native dev flag', () => {
    const source = readFileSync(join(__dirname, 'robot-avatar-card.tsx'), 'utf8');

    expect(source).toContain("const SHOW_ROBOT_TEST_CONTROLS = typeof __DEV__ !== 'undefined' && __DEV__;");
    expect(source).toContain('{SHOW_ROBOT_TEST_CONTROLS && (');
  });
});
