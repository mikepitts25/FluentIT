import { afterEach, describe, expect, it } from 'vitest';
import {
  cacheSRS,
  DEFAULT_STREAK,
  getLocalDateKey,
  subscribeSRS,
  updateStreak,
  type SRSCache,
  type StreakData,
} from './srs-store';

function streak(data: Partial<StreakData>): StreakData {
  return { ...DEFAULT_STREAK, ...data };
}

describe('SRS streaks', () => {
  afterEach(() => {
    cacheSRS({ states: {}, streak: { ...DEFAULT_STREAK } });
  });

  it('formats streak dates using the local calendar day', () => {
    expect(getLocalDateKey(new Date(2026, 0, 5, 23, 45))).toBe('2026-01-05');
  });

  it('does not increment twice on the same day', () => {
    const current = streak({
      lastStudyDate: '2026-06-21',
      currentStreak: 3,
      longestStreak: 4,
    });

    expect(updateStreak(current, new Date(2026, 5, 21, 12))).toBe(current);
  });

  it('increments the current streak and best run on consecutive local days', () => {
    expect(
      updateStreak(
        streak({
          lastStudyDate: '2026-06-20',
          currentStreak: 1,
          longestStreak: 1,
        }),
        new Date(2026, 5, 21, 12),
      ),
    ).toEqual({
      lastStudyDate: '2026-06-21',
      currentStreak: 2,
      longestStreak: 2,
    });
  });

  it('resets the current streak after a skipped day but preserves best run', () => {
    expect(
      updateStreak(
        streak({
          lastStudyDate: '2026-06-18',
          currentStreak: 4,
          longestStreak: 4,
        }),
        new Date(2026, 5, 21, 12),
      ),
    ).toEqual({
      lastStudyDate: '2026-06-21',
      currentStreak: 1,
      longestStreak: 4,
    });
  });

  it('notifies subscribers when the shared SRS cache changes', () => {
    const updates: SRSCache[] = [];
    const nextCache: SRSCache = {
      states: {},
      streak: streak({
        lastStudyDate: '2026-06-21',
        currentStreak: 3,
        longestStreak: 3,
      }),
    };

    const unsubscribe = subscribeSRS((cache) => {
      updates.push(cache);
    });

    cacheSRS(nextCache);
    unsubscribe();
    cacheSRS({ states: {}, streak: { ...DEFAULT_STREAK } });

    expect(updates).toEqual([nextCache]);
  });
});
