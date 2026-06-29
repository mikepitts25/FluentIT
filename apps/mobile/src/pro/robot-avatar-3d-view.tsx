import { useEffect, useMemo, useRef, type ComponentType } from 'react';
import { PanResponder, StyleSheet, Text, View } from 'react-native';
import { GLView, type ExpoWebGLRenderingContext, type GLViewProps } from 'expo-gl';
import * as THREE from 'three';
import type { ThemeColors } from '../theme';
import type { RobotAccessory } from './robot-achievements';
import { buildRobotAvatarModel, type RobotPartSpec } from './robot-avatar-3d-model';

const NativeGLView = GLView as unknown as ComponentType<GLViewProps>;
const ROBOT_CAMERA_DISTANCE = 9.2;
const ROBOT_CAMERA_FOCUS_Y = 0.42;

interface RobotAvatar3DViewProps {
  colors: ThemeColors;
  unlockedAccessories: RobotAccessory[];
}

interface SceneRefs {
  group: THREE.Group;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
}

export function RobotAvatar3DView({ colors, unlockedAccessories }: RobotAvatar3DViewProps) {
  const styles = createStyles(colors);
  const model = useMemo(() => buildRobotAvatarModel(unlockedAccessories), [unlockedAccessories]);
  const modelRef = useRef(model);
  const sceneRefs = useRef<SceneRefs | null>(null);
  const rotationRef = useRef(0.28);
  const dragStartRotationRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    modelRef.current = model;
    if (sceneRefs.current) {
      syncRobotGroup(sceneRefs.current.group, model.parts);
    }
  }, [model]);

  useEffect(() => {
    return () => {
      if (sceneRefs.current) {
        disposeObject(sceneRefs.current.scene);
        sceneRefs.current.renderer.dispose();
        sceneRefs.current = null;
      }
    };
  }, []);

  const panResponder = useMemo(
    () => PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        isDraggingRef.current = true;
        dragStartRotationRef.current = rotationRef.current;
      },
      onPanResponderMove: (_event, gestureState) => {
        rotationRef.current = dragStartRotationRef.current + gestureState.dx * 0.012;
      },
      onPanResponderRelease: () => {
        isDraggingRef.current = false;
      },
      onPanResponderTerminate: () => {
        isDraggingRef.current = false;
      },
    }),
    [],
  );

  return (
    <View
      style={[styles.shell, { borderColor: colors.borderCard, backgroundColor: colors.bgPrimary }]}
      {...panResponder.panHandlers}
    >
      <NativeGLView
        style={StyleSheet.absoluteFill}
        msaaSamples={4}
        onContextCreate={(gl: ExpoWebGLRenderingContext) => {
          createRobotScene(gl, modelRef.current.parts, rotationRef, isDraggingRef, sceneRefs);
        }}
      />
      <View pointerEvents="none" style={styles.badge}>
        <Text style={styles.badgeText}>DRAG TO SPIN</Text>
      </View>
    </View>
  );
}

function createRobotScene(
  gl: ExpoWebGLRenderingContext,
  parts: RobotPartSpec[],
  rotationRef: { current: number },
  isDraggingRef: { current: boolean },
  sceneRefs: { current: SceneRefs | null },
) {
  if (sceneRefs.current) {
    disposeObject(sceneRefs.current.scene);
    sceneRefs.current.renderer.dispose();
    sceneRefs.current = null;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    38,
    gl.drawingBufferWidth / gl.drawingBufferHeight,
    0.1,
    100,
  );
  camera.position.set(0, ROBOT_CAMERA_FOCUS_Y + 0.04, ROBOT_CAMERA_DISTANCE);
  camera.lookAt(0, ROBOT_CAMERA_FOCUS_Y, 0);

  const renderer = createExpoRenderer(gl, {
    antialias: true,
    alpha: true,
  });
  renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = false;

  scene.add(new THREE.AmbientLight(0xffffff, 1.45));

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
  keyLight.position.set(3.5, 4.2, 5);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x00d4ff, 1.8);
  rimLight.position.set(-3.5, 2.6, -2.2);
  scene.add(rimLight);

  const robotGroup = new THREE.Group();
  robotGroup.position.y = -0.08;
  scene.add(robotGroup);

  const floor = new THREE.Mesh(
    new THREE.CylinderGeometry(1.55, 1.55, 0.08, 24),
    new THREE.MeshStandardMaterial({
      color: 0x0f1320,
      emissive: 0x071722,
      roughness: 0.72,
      metalness: 0.12,
    }),
  );
  floor.position.set(0, -1.78, 0);
  scene.add(floor);

  syncRobotGroup(robotGroup, parts);
  sceneRefs.current = { group: robotGroup, renderer, scene };

  let previousTime = Date.now();
  let frameId = 0;
  let isAlive = true;

  const render = () => {
    if (!isAlive) return;

    const now = Date.now();
    const delta = now - previousTime;
    previousTime = now;

    if (!isDraggingRef.current) {
      rotationRef.current += delta * 0.00022;
    }

    robotGroup.rotation.y = rotationRef.current;
    robotGroup.rotation.x = -0.08;
    renderer.render(scene, camera);
    gl.endFrameEXP();
    frameId = requestAnimationFrame(render);
  };

  render();

  const previousRefs = sceneRefs.current;
  sceneRefs.current = {
    ...previousRefs,
    renderer,
    scene,
    group: robotGroup,
  };

  const originalDispose = renderer.dispose.bind(renderer);
  renderer.dispose = () => {
    isAlive = false;
    if (frameId) cancelAnimationFrame(frameId);
    originalDispose();
  };
}

function syncRobotGroup(group: THREE.Group, parts: RobotPartSpec[]) {
  clearGroup(group);

  for (const part of parts) {
    const mesh = createMesh(part);
    mesh.name = part.id;
    group.add(mesh);
  }
}

function createExpoRenderer(
  gl: ExpoWebGLRenderingContext,
  options: { antialias: boolean; alpha: boolean },
) {
  const canvas = {
    width: gl.drawingBufferWidth,
    height: gl.drawingBufferHeight,
    clientWidth: gl.drawingBufferWidth,
    clientHeight: gl.drawingBufferHeight,
    style: {},
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    getContext: () => gl,
  } as unknown as HTMLCanvasElement;

  return new THREE.WebGLRenderer({
    canvas,
    context: gl as unknown as WebGLRenderingContext,
    ...options,
  });
}

function createMesh(part: RobotPartSpec) {
  const geometry = createGeometry(part);
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(part.color),
    emissive: getEmissiveColor(part.color),
    emissiveIntensity: isNeon(part.color) ? 0.62 : 0.08,
    metalness: part.color === '#F59E0B' ? 0.42 : 0.12,
    roughness: 0.58,
    transparent: part.opacity !== undefined && part.opacity < 1,
    opacity: part.opacity ?? 1,
    depthWrite: part.opacity === undefined || part.opacity >= 1,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...part.position);
  if (part.rotation) mesh.rotation.set(...part.rotation);
  return mesh;
}

function createGeometry(part: RobotPartSpec) {
  switch (part.geometry) {
    case 'sphere':
      return new THREE.SphereGeometry(part.radius ?? 0.15, 12, 10);
    case 'cylinder':
      return new THREE.CylinderGeometry(part.radius ?? 0.2, part.radius ?? 0.2, part.size?.[1] ?? 0.4, 12);
    case 'cone':
      return new THREE.ConeGeometry(part.radius ?? 0.18, part.size?.[1] ?? 0.4, 4);
    case 'torus':
      return new THREE.TorusGeometry(part.radius ?? 0.5, part.tube ?? 0.04, 8, 24);
    case 'box':
    default: {
      const size = part.size ?? [0.4, 0.4, 0.4];
      return new THREE.BoxGeometry(size[0], size[1], size[2]);
    }
  }
}

function clearGroup(group: THREE.Group) {
  for (const child of [...group.children]) {
    group.remove(child);
    disposeObject(child);
  }
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    mesh.geometry?.dispose?.();
    const material = mesh.material;
    if (Array.isArray(material)) {
      for (const item of material) item.dispose();
    } else {
      material?.dispose?.();
    }
  });
}

function isNeon(color: string) {
  return color === '#00FF88' || color === '#00D4FF' || color === '#7C3AED' || color === '#F59E0B';
}

function getEmissiveColor(color: string) {
  return isNeon(color) ? new THREE.Color(color) : new THREE.Color('#050711');
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    shell: {
      width: '100%',
      height: 320,
      borderRadius: 18,
      borderWidth: 1,
      overflow: 'hidden',
    },
    badge: {
      position: 'absolute',
      right: 12,
      top: 12,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: colors.purple + '66',
      backgroundColor: colors.bgPrimary + 'CC',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    badgeText: {
      color: colors.purple,
      fontSize: 10,
      fontWeight: '900',
      letterSpacing: 1.2,
    },
  });
}
