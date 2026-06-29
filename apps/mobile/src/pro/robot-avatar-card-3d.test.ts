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

  it('keeps transparent avatar meshes from writing depth over underlying parts', () => {
    const source = readFileSync(join(__dirname, 'robot-avatar-3d-view.tsx'), 'utf8');

    expect(source).toContain('depthWrite: part.opacity === undefined || part.opacity >= 1');
  });

  it('frames the 3D robot far enough back to fit the full loadout in the preview window', () => {
    const source = readFileSync(join(__dirname, 'robot-avatar-3d-view.tsx'), 'utf8');

    expect(source).toContain('const ROBOT_CAMERA_DISTANCE = 9.2;');
    expect(source).toContain('const ROBOT_CAMERA_FOCUS_Y = 0.42;');
    expect(source).toContain('camera.position.set(0, ROBOT_CAMERA_FOCUS_Y + 0.04, ROBOT_CAMERA_DISTANCE);');
    expect(source).toContain('camera.lookAt(0, ROBOT_CAMERA_FOCUS_Y, 0);');
  });
});
