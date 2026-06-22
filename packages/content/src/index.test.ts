import { describe, expect, it } from 'vitest';
import { getCardByTitle } from './index';

describe('content lookup helpers', () => {
  it('finds a card by exact title', () => {
    expect(getCardByTitle('Zero Trust')?.id).toBe('cyber-zero-trust');
  });

  it('normalizes case and whitespace when finding a card by title', () => {
    expect(getCardByTitle('  zero   trust ')?.id).toBe('cyber-zero-trust');
  });

  it('returns undefined when no card has the requested title', () => {
    expect(getCardByTitle('Not A Real FluentIT Term')).toBeUndefined();
  });
});
