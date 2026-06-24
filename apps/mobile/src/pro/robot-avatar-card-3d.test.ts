import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('robot avatar card 3D integration', () => {
  it('renders the avatar through the native 3D viewer instead of milestone PNGs', () => {
    const source = readFileSync(join(__dirname, 'robot-avatar-card.tsx'), 'utf8');

    expect(source).toContain("import { RobotAvatar3DView } from './robot-avatar-3d-view';");
    expect(source).toContain('<RobotAvatar3DView');
    expect(source).not.toContain("import { getRobotAvatarImage } from './robot-avatar-assets';");
  });
});
