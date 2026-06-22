import { describe, expect, it } from 'vitest';
import { C } from '../theme';
import { STATUS_COLORS } from './status-colors';

describe('progress status colors', () => {
  it('uses green for new cards', () => {
    expect(STATUS_COLORS.New).toBe(C.green);
  });

  it('uses purple for learning cards', () => {
    expect(STATUS_COLORS.Learning).toBe(C.purple);
  });

  it('uses amber for mastered cards so it differs from new cards', () => {
    expect(STATUS_COLORS.Mastered).toBe(C.amber);
    expect(STATUS_COLORS.Mastered).not.toBe(STATUS_COLORS.New);
  });
});
