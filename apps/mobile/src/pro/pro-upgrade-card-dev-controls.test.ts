import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('pro upgrade dev controls', () => {
  it('does not include Pro unlock dev controls in the app UI', () => {
    const source = readFileSync(join(__dirname, 'pro-upgrade-card.tsx'), 'utf8');

    expect(source).not.toContain('SHOW_PRO_TEST_CONTROLS');
    expect(source).not.toContain('DEV:');
    expect(source).not.toContain("void onGrantPro('local');");
  });
});
