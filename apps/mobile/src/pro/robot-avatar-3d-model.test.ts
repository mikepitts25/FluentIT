import { describe, expect, it } from 'vitest';
import { ROBOT_ACCESSORIES } from './robot-achievements';
import { buildRobotAvatarModel } from './robot-avatar-3d-model';

describe('robot avatar 3D model spec', () => {
  function partById(id: string) {
    const model = buildRobotAvatarModel([]);
    const part = model.parts.find((item) => item.id === id);
    expect(part, `${id} should exist`).toBeDefined();
    expect(part?.size, `${id} should have box size`).toBeDefined();
    return part!;
  }

  function front(part: ReturnType<typeof partById>) {
    return part.position[2] + (part.size?.[2] ?? 0) / 2;
  }

  function back(part: ReturnType<typeof partById>) {
    return part.position[2] - (part.size?.[2] ?? 0) / 2;
  }

  it('builds the base robot from real centered 3D block parts', () => {
    const model = buildRobotAvatarModel([]);
    const head = model.parts.find((part) => part.id === 'head');
    const faceplate = model.parts.find((part) => part.id === 'faceplate');
    const leftEye = model.parts.find((part) => part.id === 'eye-left');
    const rightEye = model.parts.find((part) => part.id === 'eye-right');

    expect(head?.geometry).toBe('box');
    expect(head?.size?.[2]).toBeGreaterThan(0.1);
    expect(faceplate?.geometry).toBe('box');
    expect(faceplate?.size?.[2]).toBeGreaterThan(0.05);

    expect(leftEye?.position[0]).toBeCloseTo(-(rightEye?.position[0] ?? 999), 5);
    expect(leftEye?.position[1]).toBeCloseTo(rightEye?.position[1] ?? 999, 5);
    expect(faceplate?.position[0]).toBe(0);
    expect(head?.position[0]).toBe(0);
  });

  it('keeps front surface details outside their host meshes to prevent z-fighting while spinning', () => {
    const head = partById('head');
    const faceplate = partById('faceplate');
    const leftEye = partById('eye-left');
    const rightEye = partById('eye-right');
    const body = partById('body');
    const corePanel = partById('core-panel');
    const coreGem = partById('core-gem');
    const minimumGap = 0.01;

    expect(back(faceplate)).toBeGreaterThan(front(head) + minimumGap);
    expect(back(leftEye)).toBeGreaterThan(front(faceplate) + minimumGap);
    expect(back(rightEye)).toBeGreaterThan(front(faceplate) + minimumGap);
    expect(back(corePanel)).toBeGreaterThan(front(body) + minimumGap);
    expect(back(coreGem)).toBeGreaterThan(front(corePanel) + minimumGap);
  });

  it('adds visible 3D accessories only for unlocked achievements', () => {
    const unlockedToShield = ROBOT_ACCESSORIES.filter((accessory) => accessory.unlockPercent <= 70);
    const model = buildRobotAvatarModel(unlockedToShield);
    const ids = model.parts.map((part) => part.id);

    expect(ids).toContain('accessory-antenna');
    expect(ids).toContain('accessory-visor');
    expect(ids).toContain('accessory-wrench');
    expect(ids).toContain('accessory-shield');
    expect(ids).not.toContain('accessory-headphones-left');
    expect(ids).not.toContain('accessory-halo');

    const shield = model.parts.find((part) => part.id === 'accessory-shield');
    expect(shield?.geometry).toBe('box');
    expect(shield?.size?.[2]).toBeGreaterThan(0.05);
  });
});
