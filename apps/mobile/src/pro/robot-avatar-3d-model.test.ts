import { describe, expect, it } from 'vitest';
import { ROBOT_ACCESSORIES } from './robot-achievements';
import { buildRobotAvatarModel } from './robot-avatar-3d-model';

describe('robot avatar 3D model spec', () => {
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
