import { describe, expect, it } from 'vitest';
import {
  ROBOT_ACCESSORIES,
  getRobotAchievementProgress,
  getRobotAvatarMilestonePercent,
  getUnlockedRobotAccessories,
} from './robot-achievements';

describe('robot achievements', () => {
  it('keeps cosmetic unlocks on 5 percent intervals', () => {
    expect(ROBOT_ACCESSORIES.map((item) => item.unlockPercent)).toEqual([
      5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
      55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
    ]);
  });

  it('keeps all accessories locked until Pro is active', () => {
    expect(getUnlockedRobotAccessories({ percentExplored: 100, isPro: false })).toEqual([]);
  });

  it('unlocks accessories up to the explored percent for Pro users', () => {
    const unlocked = getUnlockedRobotAccessories({ percentExplored: 16, isPro: true });

    expect(unlocked.map((item) => item.unlockPercent)).toEqual([5, 10, 15]);
  });

  it('reports the next unlock target', () => {
    expect(getRobotAchievementProgress({ percentExplored: 16, isPro: true })).toMatchObject({
      unlockedCount: 3,
      totalCount: 20,
      nextUnlockPercent: 20,
      percentToNextUnlock: 4,
    });
  });

  it('does not report a next unlock after all cosmetics are unlocked', () => {
    expect(getRobotAchievementProgress({ percentExplored: 100, isPro: true })).toMatchObject({
      unlockedCount: 20,
      totalCount: 20,
      nextUnlockPercent: null,
      percentToNextUnlock: null,
    });
  });

  it('keeps free users on the base robot avatar', () => {
    expect(getRobotAvatarMilestonePercent({ percentExplored: 100, isPro: false })).toBe(0);
  });

  it('selects the highest unlocked robot avatar milestone for Pro users', () => {
    expect(getRobotAvatarMilestonePercent({ percentExplored: 16, isPro: true })).toBe(15);
    expect(getRobotAvatarMilestonePercent({ percentExplored: 101, isPro: true })).toBe(100);
  });
});
