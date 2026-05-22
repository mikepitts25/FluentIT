import { describe, expect, it } from 'vitest';
import {
  Rating,
  createNewCardState,
  getDueCardIds,
  getStabilityLabel,
  reviewCard,
} from './index';

describe('srs scheduling', () => {
  it('creates new card state with the requested card id', () => {
    const state = createNewCardState('cloud-vpc');

    expect(state.cardId).toBe('cloud-vpc');
    expect(state.logs).toEqual([]);
    expect(state.fsrsCard.due).toBeInstanceOf(Date);
  });

  it('records review history and keeps the card id stable', () => {
    const now = new Date('2026-05-08T10:00:00.000Z');
    const initial = createNewCardState('cloud-vpc');

    const result = reviewCard(initial, Rating.Good, now);

    expect(result.state.cardId).toBe('cloud-vpc');
    expect(result.state.logs).toHaveLength(1);
    expect(result.nextReviewDate).toBeInstanceOf(Date);
  });

  it('returns due ids using the same ten minute review window as mobile', () => {
    const now = new Date('2026-05-08T10:00:00.000Z');
    const dueSoon = createNewCardState('due-soon');
    const notDue = createNewCardState('not-due');
    dueSoon.fsrsCard.due = new Date('2026-05-08T10:09:00.000Z');
    notDue.fsrsCard.due = new Date('2026-05-08T10:11:00.000Z');

    expect(getDueCardIds({ 'due-soon': dueSoon, 'not-due': notDue }, now)).toEqual([
      'due-soon',
    ]);
  });

  it('labels cards by stability band', () => {
    const state = createNewCardState('cloud-vpc');

    expect(getStabilityLabel(state)).toBe('New');

    state.fsrsCard.stability = 3;
    expect(getStabilityLabel(state)).toBe('Learning');

    state.fsrsCard.stability = 10;
    expect(getStabilityLabel(state)).toBe('Familiar');

    state.fsrsCard.stability = 30;
    expect(getStabilityLabel(state)).toBe('Mastered');
  });
});
