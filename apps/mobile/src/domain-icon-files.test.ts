import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { DOMAINS } from './content';
import { DOMAIN_ICON_FILES } from './domain-icon-files';

describe('domain icon files', () => {
  it('provides a generated icon file for every domain', () => {
    const domainIds = DOMAINS.map((domain) => domain.id);

    expect(Object.keys(DOMAIN_ICON_FILES).sort()).toEqual([...domainIds].sort());

    for (const domain of DOMAINS) {
      const iconFile = DOMAIN_ICON_FILES[domain.id];
      expect(iconFile).toMatch(new RegExp(`^${domain.id}\\.png$`));
      expect(existsSync(join(__dirname, '..', 'assets', 'domain-icons', iconFile))).toBe(true);
    }
  });
});
