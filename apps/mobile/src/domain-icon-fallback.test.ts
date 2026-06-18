import { describe, expect, it } from 'vitest';
import { DOMAINS } from './content';
import { getDomainIconFallbackLabel } from './domain-icon-fallback';

describe('domain icon fallback labels', () => {
  it('provides a visible short label for every domain', () => {
    for (const domain of DOMAINS) {
      const label = getDomainIconFallbackLabel(domain);

      expect(label.length).toBeGreaterThan(0);
      expect(label.length).toBeLessThanOrEqual(3);
      expect(label).toMatch(/^[A-Z0-9]+$/);
    }
  });
});
