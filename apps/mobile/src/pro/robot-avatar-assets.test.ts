import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { ROBOT_AVATAR_MILESTONES } from './robot-achievements';

describe('robot avatar assets', () => {
  it('provides a PNG for every robot milestone', () => {
    for (const milestone of ROBOT_AVATAR_MILESTONES) {
      const fileName = `robot-${String(milestone).padStart(3, '0')}.png`;
      expect(existsSync(join(__dirname, '..', '..', 'assets', 'robot-avatar', fileName))).toBe(true);
    }
  });

  it('keeps the curated final robot concept available for the 100 percent asset', () => {
    expect(
      existsSync(join(__dirname, '..', '..', 'assets', 'robot-avatar', 'source', 'robot-100-concept.png')),
    ).toBe(true);
  });
});
