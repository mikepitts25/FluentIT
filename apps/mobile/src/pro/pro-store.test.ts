import { describe, expect, it } from 'vitest';
import { createGrantedProEntitlement } from './pro-store';

describe('pro store', () => {
  it('can create a local Pro entitlement for development testing', () => {
    expect(createGrantedProEntitlement('local', new Date('2026-06-22T12:00:00.000Z'))).toEqual({
      isPro: true,
      unlockedAt: '2026-06-22T12:00:00.000Z',
      source: 'local',
    });
  });
});
