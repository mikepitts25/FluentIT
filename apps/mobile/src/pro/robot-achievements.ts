export interface RobotAccessory {
  id: string;
  label: string;
  unlockPercent: number;
  slot: 'head' | 'face' | 'body' | 'hand' | 'feet' | 'back';
  icon: string;
}

export const ROBOT_AVATAR_MILESTONES = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
  55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
] as const;

export type RobotAvatarMilestone = typeof ROBOT_AVATAR_MILESTONES[number];

export const ROBOT_ACCESSORIES: RobotAccessory[] = [
  { id: 'antenna', label: 'Signal Antenna', unlockPercent: 5, slot: 'head', icon: '⌁' },
  { id: 'visor', label: 'Purple Visor', unlockPercent: 10, slot: 'face', icon: '▭' },
  { id: 'badge', label: 'Ops Badge', unlockPercent: 15, slot: 'body', icon: '◆' },
  { id: 'boots', label: 'Sprint Boots', unlockPercent: 20, slot: 'feet', icon: '▰' },
  { id: 'wrench', label: 'Debug Wrench', unlockPercent: 25, slot: 'hand', icon: '⌐' },
  { id: 'cape', label: 'Deploy Cape', unlockPercent: 30, slot: 'back', icon: '◒' },
  { id: 'helmet', label: 'Incident Helmet', unlockPercent: 35, slot: 'head', icon: '⌂' },
  { id: 'gloves', label: 'Patch Gloves', unlockPercent: 40, slot: 'hand', icon: '◖' },
  { id: 'jetpack', label: 'Cloud Jetpack', unlockPercent: 45, slot: 'back', icon: '⇧' },
  { id: 'tie', label: 'Meeting Tie', unlockPercent: 50, slot: 'body', icon: '◇' },
  { id: 'monocle', label: 'Risk Monocle', unlockPercent: 55, slot: 'face', icon: '⊙' },
  { id: 'toolbelt', label: 'Tool Belt', unlockPercent: 60, slot: 'body', icon: '▱' },
  { id: 'crown', label: 'Governance Crown', unlockPercent: 65, slot: 'head', icon: '♔' },
  { id: 'shield', label: 'Zero Trust Shield', unlockPercent: 70, slot: 'hand', icon: '⬡' },
  { id: 'headphones', label: 'Focus Headphones', unlockPercent: 75, slot: 'head', icon: '◠' },
  { id: 'satchel', label: 'Data Satchel', unlockPercent: 80, slot: 'body', icon: '▣' },
  { id: 'boots-gold', label: 'Golden Boots', unlockPercent: 85, slot: 'feet', icon: '▰' },
  { id: 'rocket', label: 'Launch Rocket', unlockPercent: 90, slot: 'back', icon: '↟' },
  { id: 'halo', label: 'Mastery Halo', unlockPercent: 95, slot: 'head', icon: '○' },
  { id: 'suit', label: 'Pro Suit', unlockPercent: 100, slot: 'body', icon: '▦' },
];

export function getUnlockedRobotAccessories({
  percentExplored,
  isPro,
}: {
  percentExplored: number;
  isPro: boolean;
}): RobotAccessory[] {
  if (!isPro) return [];
  return ROBOT_ACCESSORIES.filter((accessory) => accessory.unlockPercent <= percentExplored);
}

export function getRobotAchievementProgress({
  percentExplored,
  isPro,
}: {
  percentExplored: number;
  isPro: boolean;
}) {
  const unlocked = getUnlockedRobotAccessories({ percentExplored, isPro });
  const nextUnlock = ROBOT_ACCESSORIES.find((accessory) => accessory.unlockPercent > percentExplored);

  return {
    unlocked,
    unlockedCount: unlocked.length,
    totalCount: ROBOT_ACCESSORIES.length,
    nextUnlockPercent: nextUnlock?.unlockPercent ?? null,
    percentToNextUnlock: nextUnlock ? Math.max(0, nextUnlock.unlockPercent - percentExplored) : null,
  };
}

export function getRobotAvatarMilestonePercent({
  percentExplored,
  isPro,
}: {
  percentExplored: number;
  isPro: boolean;
}): RobotAvatarMilestone {
  if (!isPro) return 0;

  const clamped = Math.max(0, Math.min(100, percentExplored));
  const milestone = Math.floor(clamped / 5) * 5;
  return milestone as RobotAvatarMilestone;
}
