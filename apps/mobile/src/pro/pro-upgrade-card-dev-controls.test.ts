import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('pro upgrade dev controls', () => {
  it('keeps the Pro unlock test button behind the React Native dev flag', () => {
    const source = readFileSync(join(__dirname, 'pro-upgrade-card.tsx'), 'utf8');

    expect(source).toContain("const SHOW_PRO_TEST_CONTROLS = typeof __DEV__ !== 'undefined' && __DEV__;");
    expect(source).toContain('{SHOW_PRO_TEST_CONTROLS && (');
    expect(source).toContain("void onGrantPro('local');");
  });
});
