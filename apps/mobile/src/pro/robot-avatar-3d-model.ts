import type { RobotAccessory } from './robot-achievements';

export type RobotGeometry = 'box' | 'sphere' | 'cylinder' | 'cone' | 'torus';

export interface RobotPartSpec {
  id: string;
  geometry: RobotGeometry;
  color: string;
  position: [number, number, number];
  size?: [number, number, number];
  radius?: number;
  tube?: number;
  rotation?: [number, number, number];
  opacity?: number;
}

export interface RobotAvatarModel {
  parts: RobotPartSpec[];
}

function has(unlocked: RobotAccessory[], id: string) {
  return unlocked.some((accessory) => accessory.id === id);
}

export function buildRobotAvatarModel(unlockedAccessories: RobotAccessory[]): RobotAvatarModel {
  const parts: RobotPartSpec[] = [
    { id: 'cape-shadow', geometry: 'box', color: '#2B145F', position: [0, -0.34, -0.33], size: [2.42, 2.2, 0.18], opacity: has(unlockedAccessories, 'cape') ? 1 : 0 },
    { id: 'helmet-cap', geometry: 'box', color: '#1C2232', position: [0, 1.58, -0.02], size: [1.95, 0.42, 1.18] },
    { id: 'head', geometry: 'box', color: '#F8FAFC', position: [0, 1.18, 0], size: [1.96, 1.08, 1.14] },
    { id: 'faceplate', geometry: 'box', color: '#050711', position: [0, 1.17, 0.6], size: [1.42, 0.54, 0.12] },
    { id: 'eye-left', geometry: 'box', color: '#00FF88', position: [-0.35, 1.18, 0.69], size: [0.16, 0.3, 0.08] },
    { id: 'eye-right', geometry: 'box', color: '#00FF88', position: [0.35, 1.18, 0.69], size: [0.16, 0.3, 0.08] },
    { id: 'neck', geometry: 'box', color: '#CBD5E1', position: [0, 0.48, 0], size: [0.48, 0.28, 0.46] },
    { id: 'body', geometry: 'box', color: '#F8FAFC', position: [0, -0.18, 0], size: [1.36, 1.34, 0.92] },
    { id: 'body-side-shadow', geometry: 'box', color: '#CBD5E1', position: [0.5, -0.18, 0.48], size: [0.18, 1.06, 0.08] },
    { id: 'core-panel', geometry: 'box', color: '#080B12', position: [0, -0.16, 0.52], size: [0.56, 0.56, 0.1] },
    { id: 'core-gem', geometry: 'box', color: '#00D4FF', position: [0, -0.16, 0.61], size: [0.3, 0.3, 0.1], rotation: [0, 0, Math.PI / 4] },
    { id: 'arm-left', geometry: 'box', color: '#CBD5E1', position: [-0.94, -0.2, 0.03], size: [0.28, 1.0, 0.36], rotation: [0, 0, -0.16] },
    { id: 'arm-right', geometry: 'box', color: '#CBD5E1', position: [0.94, -0.2, 0.03], size: [0.28, 1.0, 0.36], rotation: [0, 0, 0.16] },
    { id: 'hand-left', geometry: 'box', color: '#171923', position: [-1.03, -0.8, 0.07], size: [0.34, 0.34, 0.36] },
    { id: 'hand-right', geometry: 'box', color: '#171923', position: [1.03, -0.8, 0.07], size: [0.34, 0.34, 0.36] },
    { id: 'leg-left', geometry: 'box', color: '#CBD5E1', position: [-0.34, -1.16, 0], size: [0.34, 0.64, 0.4] },
    { id: 'leg-right', geometry: 'box', color: '#CBD5E1', position: [0.34, -1.16, 0], size: [0.34, 0.64, 0.4] },
    { id: 'foot-left', geometry: 'box', color: has(unlockedAccessories, 'boots-gold') ? '#F59E0B' : has(unlockedAccessories, 'boots') ? '#242938' : '#8B95A3', position: [-0.34, -1.55, 0.12], size: [0.58, 0.28, 0.58] },
    { id: 'foot-right', geometry: 'box', color: has(unlockedAccessories, 'boots-gold') ? '#F59E0B' : has(unlockedAccessories, 'boots') ? '#242938' : '#8B95A3', position: [0.34, -1.55, 0.12], size: [0.58, 0.28, 0.58] },
  ];

  if (has(unlockedAccessories, 'antenna')) {
    parts.push(
      { id: 'accessory-antenna-stem', geometry: 'box', color: '#00FF88', position: [-0.72, 2.12, 0], size: [0.08, 0.78, 0.08], rotation: [0, 0, -0.28] },
      { id: 'accessory-antenna', geometry: 'sphere', color: '#00FF88', position: [-0.82, 2.54, 0.02], radius: 0.16 },
    );
  }

  if (has(unlockedAccessories, 'visor')) {
    parts.push({ id: 'accessory-visor', geometry: 'box', color: '#7C3AED', position: [0, 1.24, 0.73], size: [1.58, 0.42, 0.08], opacity: 0.72 });
  }

  if (has(unlockedAccessories, 'badge')) {
    parts.push({ id: 'accessory-badge', geometry: 'box', color: '#F59E0B', position: [0.48, 0.2, 0.57], size: [0.28, 0.28, 0.1], rotation: [0, 0, Math.PI / 4] });
  }

  if (has(unlockedAccessories, 'wrench')) {
    parts.push(
      { id: 'accessory-wrench', geometry: 'box', color: '#CBD5E1', position: [-1.34, -0.18, 0.24], size: [0.16, 1.36, 0.16], rotation: [0, 0, -0.2] },
      { id: 'accessory-wrench-head', geometry: 'box', color: '#CBD5E1', position: [-1.46, 0.58, 0.24], size: [0.48, 0.32, 0.16], rotation: [0, 0, -0.2] },
    );
  }

  if (has(unlockedAccessories, 'helmet')) {
    parts.push(
      { id: 'accessory-helmet-left-horn', geometry: 'cone', color: '#F59E0B', position: [-0.86, 1.93, 0], radius: 0.18, size: [0.18, 0.34, 0.18], rotation: [0, 0, -0.36] },
      { id: 'accessory-helmet-right-horn', geometry: 'cone', color: '#F59E0B', position: [0.86, 1.93, 0], radius: 0.18, size: [0.18, 0.34, 0.18], rotation: [0, 0, 0.36] },
    );
  }

  if (has(unlockedAccessories, 'gloves')) {
    parts.push(
      { id: 'accessory-glove-left', geometry: 'box', color: '#171923', position: [-1.03, -0.8, 0.26], size: [0.42, 0.42, 0.24] },
      { id: 'accessory-glove-right', geometry: 'box', color: '#171923', position: [1.03, -0.8, 0.26], size: [0.42, 0.42, 0.24] },
    );
  }

  if (has(unlockedAccessories, 'jetpack')) {
    parts.push(
      { id: 'accessory-jetpack-left', geometry: 'box', color: '#94A3B8', position: [-0.62, -0.28, -0.58], size: [0.3, 1.02, 0.3] },
      { id: 'accessory-jetpack-right', geometry: 'box', color: '#94A3B8', position: [0.62, -0.28, -0.58], size: [0.3, 1.02, 0.3] },
    );
  }

  if (has(unlockedAccessories, 'tie')) {
    parts.push({ id: 'accessory-tie', geometry: 'box', color: '#7C3AED', position: [0, 0.25, 0.62], size: [0.24, 0.72, 0.1], rotation: [0, 0, Math.PI / 4] });
  }

  if (has(unlockedAccessories, 'monocle')) {
    parts.push({ id: 'accessory-monocle', geometry: 'torus', color: '#F59E0B', position: [0.35, 1.18, 0.78], radius: 0.22, tube: 0.035 });
  }

  if (has(unlockedAccessories, 'toolbelt')) {
    parts.push(
      { id: 'accessory-toolbelt', geometry: 'box', color: '#171923', position: [0, -0.62, 0.58], size: [1.32, 0.18, 0.12] },
      { id: 'accessory-toolbelt-buckle', geometry: 'box', color: '#F59E0B', position: [0, -0.62, 0.68], size: [0.28, 0.22, 0.08] },
    );
  }

  if (has(unlockedAccessories, 'crown')) {
    parts.push(
      { id: 'accessory-crown-center', geometry: 'cone', color: '#F59E0B', position: [0, 2.04, 0.02], radius: 0.24, size: [0.24, 0.48, 0.24] },
      { id: 'accessory-crown-left', geometry: 'cone', color: '#F59E0B', position: [-0.42, 2.0, 0.02], radius: 0.18, size: [0.18, 0.36, 0.18] },
      { id: 'accessory-crown-right', geometry: 'cone', color: '#F59E0B', position: [0.42, 2.0, 0.02], radius: 0.18, size: [0.18, 0.36, 0.18] },
    );
  }

  if (has(unlockedAccessories, 'shield')) {
    parts.push(
      { id: 'accessory-shield', geometry: 'box', color: '#111827', position: [1.44, -0.28, 0.52], size: [0.6, 0.9, 0.16] },
      { id: 'accessory-shield-core', geometry: 'box', color: '#00D4FF', position: [1.44, -0.28, 0.64], size: [0.32, 0.4, 0.08] },
    );
  }

  if (has(unlockedAccessories, 'headphones')) {
    parts.push(
      { id: 'accessory-headphones-left', geometry: 'box', color: '#1F2432', position: [-1.13, 1.18, 0.05], size: [0.28, 0.62, 0.46] },
      { id: 'accessory-headphones-right', geometry: 'box', color: '#1F2432', position: [1.13, 1.18, 0.05], size: [0.28, 0.62, 0.46] },
    );
  }

  if (has(unlockedAccessories, 'satchel')) {
    parts.push({ id: 'accessory-satchel', geometry: 'box', color: '#171923', position: [0.76, -0.82, 0.72], size: [0.5, 0.68, 0.2], rotation: [0, 0, -0.12] });
  }

  if (has(unlockedAccessories, 'rocket')) {
    parts.push(
      { id: 'accessory-rocket-body', geometry: 'box', color: '#F8FAFC', position: [1.32, 0.8, -0.3], size: [0.34, 0.9, 0.34], rotation: [0, 0, -0.28] },
      { id: 'accessory-rocket-nose', geometry: 'cone', color: '#7C3AED', position: [1.45, 1.29, -0.3], radius: 0.2, size: [0.2, 0.34, 0.2], rotation: [0, 0, -0.28] },
      { id: 'accessory-rocket-flame', geometry: 'cone', color: '#F59E0B', position: [1.16, 0.28, -0.3], radius: 0.16, size: [0.16, 0.36, 0.16], rotation: [Math.PI, 0, -0.28] },
    );
  }

  if (has(unlockedAccessories, 'halo')) {
    parts.push({ id: 'accessory-halo', geometry: 'torus', color: '#F59E0B', position: [0, 2.36, 0], radius: 0.72, tube: 0.04, rotation: [Math.PI / 2, 0, 0] });
  }

  if (has(unlockedAccessories, 'suit')) {
    parts.push({ id: 'accessory-pro-suit-panel', geometry: 'box', color: '#151723', position: [0, -0.04, 0.63], size: [0.74, 0.92, 0.08], opacity: 0.86 });
  }

  return {
    parts: parts.filter((part) => part.opacity !== 0),
  };
}
