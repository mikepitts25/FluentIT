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

  it('includes requested current terms in the catalog', () => {
    expect(getCardByTitle('Data Fabric')?.domain).toBe('data');
    expect(getCardByTitle('Data Engineering')?.domain).toBe('data');
    expect(getCardByTitle('Agentic Engineering')?.domain).toBe('ai');
  });

  it('includes foundational quantum computing terms in the catalog', () => {
    expect(getCardByTitle('Quantum Computing')?.domain).toBe('quantum');
    expect(getCardByTitle('Qubit')?.domain).toBe('quantum');
    expect(getCardByTitle('Quantum Entanglement')?.domain).toBe('quantum');
    expect(getCardByTitle('Post-Quantum Cryptography')?.domain).toBe('quantum');
  });
});
