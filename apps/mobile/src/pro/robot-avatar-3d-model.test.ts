import { describe, expect, it } from 'vitest';
import { ROBOT_ACCESSORIES } from './robot-achievements';
import { buildRobotAvatarModel, type RobotAvatarModel, type RobotPartSpec } from './robot-avatar-3d-model';

describe('robot avatar 3D model spec', () => {
  function partById(id: string, model: RobotAvatarModel = buildRobotAvatarModel([])) {
    const part = model.parts.find((item) => item.id === id);
    expect(part, `${id} should exist`).toBeDefined();
    return part!;
  }

  function extent(part: RobotPartSpec, axis: 0 | 1 | 2) {
    if (part.size) return part.size[axis];
    if (part.geometry === 'sphere') return (part.radius ?? 0.15) * 2;
    if (part.geometry === 'torus') {
      return axis === 2
        ? (part.tube ?? 0.04) * 2
        : ((part.radius ?? 0.5) + (part.tube ?? 0.04)) * 2;
    }
    if (part.geometry === 'cone') {
      return axis === 1 ? part.size?.[1] ?? 0.4 : (part.radius ?? 0.18) * 2;
    }
    if (part.geometry === 'cylinder') {
      return axis === 1 ? part.size?.[1] ?? 0.4 : (part.radius ?? 0.2) * 2;
    }
    return 0;
  }

  function front(part: RobotPartSpec) {
    return part.position[2] + extent(part, 2) / 2;
  }

  function back(part: RobotPartSpec) {
    return part.position[2] - extent(part, 2) / 2;
  }

  function top(part: RobotPartSpec) {
    return part.position[1] + extent(part, 1) / 2;
  }

  function bottom(part: RobotPartSpec) {
    return part.position[1] - extent(part, 1) / 2;
  }

  function expectInFrontOf(frontPart: RobotPartSpec, backPart: RobotPartSpec) {
    const minimumGap = 0.01;
    expect(back(frontPart), `${frontPart.id} should sit in front of ${backPart.id}`).toBeGreaterThan(
      front(backPart) + minimumGap,
    );
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

  it('keeps the fully unlocked loadout from intersecting stacked face and torso accessories', () => {
    const model = buildRobotAvatarModel(ROBOT_ACCESSORIES);
    const head = partById('head', model);
    const helmetCap = partById('helmet-cap', model);
    const antennaStem = partById('accessory-antenna-stem', model);
    const helmetLeftHorn = partById('accessory-helmet-left-horn', model);
    const helmetRightHorn = partById('accessory-helmet-right-horn', model);
    const crownCenter = partById('accessory-crown-center', model);
    const faceplate = partById('faceplate', model);
    const leftEye = partById('eye-left', model);
    const rightEye = partById('eye-right', model);
    const visor = partById('accessory-visor', model);
    const monocle = partById('accessory-monocle', model);
    const body = partById('body', model);
    const suitPanel = partById('accessory-pro-suit-panel', model);
    const tie = partById('accessory-tie', model);
    const corePanel = partById('core-panel', model);
    const coreGem = partById('core-gem', model);
    const toolbelt = partById('accessory-toolbelt', model);
    const toolbeltBuckle = partById('accessory-toolbelt-buckle', model);
    const handLeft = partById('hand-left', model);
    const handRight = partById('hand-right', model);
    const gloveLeft = partById('accessory-glove-left', model);
    const gloveRight = partById('accessory-glove-right', model);
    const wrench = partById('accessory-wrench', model);
    const wrenchHead = partById('accessory-wrench-head', model);
    const shield = partById('accessory-shield', model);
    const shieldCore = partById('accessory-shield-core', model);
    const minimumGap = 0.01;

    expect(bottom(helmetCap), 'helmet cap should rest above the head instead of cutting through it')
      .toBeGreaterThan(top(head) + minimumGap);
    expect(bottom(antennaStem), 'antenna should mount above the cap instead of piercing it')
      .toBeGreaterThan(top(helmetCap) + minimumGap);
    expect(bottom(helmetLeftHorn), 'left helmet horn should mount above the cap instead of piercing it')
      .toBeGreaterThan(top(helmetCap) + minimumGap);
    expect(bottom(helmetRightHorn), 'right helmet horn should mount above the cap instead of piercing it')
      .toBeGreaterThan(top(helmetCap) + minimumGap);
    expect(bottom(crownCenter), 'crown should sit above the cap instead of piercing it')
      .toBeGreaterThan(top(helmetCap) + minimumGap);
    expectInFrontOf(leftEye, faceplate);
    expectInFrontOf(rightEye, faceplate);
    expectInFrontOf(visor, leftEye);
    expectInFrontOf(visor, rightEye);
    expectInFrontOf(monocle, visor);
    expectInFrontOf(suitPanel, body);
    expectInFrontOf(tie, suitPanel);
    expectInFrontOf(corePanel, tie);
    expectInFrontOf(coreGem, corePanel);
    expectInFrontOf(toolbeltBuckle, toolbelt);
    expectInFrontOf(gloveLeft, handLeft);
    expectInFrontOf(gloveRight, handRight);
    expectInFrontOf(wrench, gloveLeft);
    expectInFrontOf(wrenchHead, gloveLeft);
    expectInFrontOf(shield, gloveRight);
    expectInFrontOf(shieldCore, shield);
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
