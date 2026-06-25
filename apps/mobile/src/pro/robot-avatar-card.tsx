import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { ThemeColors } from '../theme';
import {
  ROBOT_ACCESSORIES,
  getNextRobotAvatarTestMilestone,
  getRobotAchievementProgress,
  getRobotAvatarMilestonePercent,
  getUnlockedRobotAccessories,
  type RobotAccessory,
  type RobotAvatarMilestone,
} from './robot-achievements';
import { RobotAvatar3DView } from './robot-avatar-3d-view';

const SHOW_ROBOT_TEST_CONTROLS =
  process.env.EXPO_PUBLIC_SHOW_ROBOT_TEST_CONTROLS === 'true'
  || (typeof __DEV__ !== 'undefined' && __DEV__);

export function RobotAvatarCard({
  colors,
  isPro,
  percentExplored,
  styles: parentStyles,
}: {
  colors: ThemeColors;
  isPro: boolean;
  percentExplored: number;
  styles?: { card: object; cardLabel: object };
}) {
  const styles = createStyles(colors);
  const [testMilestonePercent, setTestMilestonePercent] = useState<RobotAvatarMilestone | null>(null);
  const unlocked = getUnlockedRobotAccessories({ percentExplored, isPro });
  const progress = getRobotAchievementProgress({ percentExplored, isPro });
  const milestonePercent = getRobotAvatarMilestonePercent({ percentExplored, isPro });
  const displayMilestonePercent = testMilestonePercent ?? milestonePercent;
  const displayUnlocked = testMilestonePercent === null
    ? unlocked
    : ROBOT_ACCESSORIES.filter((accessory) => accessory.unlockPercent <= testMilestonePercent);
  const displayUnlockedCount = testMilestonePercent === null
    ? progress.unlockedCount
    : displayUnlocked.length;
  const isTestingRobot = testMilestonePercent !== null;
  const testButtonLabel = !isTestingRobot
    ? 'DEV: Start robot build test'
    : displayMilestonePercent >= 100
      ? 'DEV: Reset robot preview'
      : 'DEV: Unlock next cosmetic';

  return (
    <View style={[parentStyles?.card, styles.card]}>
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={[parentStyles?.cardLabel, styles.cardLabel]}>ROBOT LOADOUT</Text>
          <Text style={styles.title}>{isPro ? 'Evolving robot avatar' : 'Basic robot avatar'}</Text>
        </View>
        <Text style={styles.unlockCount}>
          {displayUnlockedCount}/{progress.totalCount}
        </Text>
      </View>

      <View style={styles.avatarStage}>
        <RobotFigure colors={colors} unlockedAccessories={displayUnlocked} />
      </View>

      <View style={styles.avatarCopy}>
        <Text style={styles.avatarTitle}>
          {isTestingRobot
            ? `Test loadout ${displayMilestonePercent}%`
            : isPro
              ? `${displayMilestonePercent}% robot loadout`
              : 'Pro cosmetics locked'}
        </Text>
        <Text style={styles.avatarText}>
          {isTestingRobot
            ? 'Development preview only. Remove this control before any production build.'
            : isPro
            ? progress.nextUnlockPercent
              ? `${progress.percentToNextUnlock}% more library progress unlocks the ${progress.nextUnlockPercent}% accessory.`
              : 'All cosmetics unlocked.'
            : 'Upgrade to Pro to unlock a new robot cosmetic every 5% of library progress.'}
        </Text>
      </View>

      {SHOW_ROBOT_TEST_CONTROLS && (
        <TouchableOpacity
          accessibilityLabel="Test unlock next robot achievement"
          accessibilityRole="button"
          activeOpacity={0.78}
          style={styles.testButton}
          onPress={() => {
            setTestMilestonePercent((current) => getNextRobotAvatarTestMilestone(current));
          }}
        >
          <Text style={styles.testButtonText}>{testButtonLabel}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.accessoryGrid}>
        {ROBOT_ACCESSORIES.map((accessory) => {
          const isUnlocked = displayUnlocked.some((item) => item.id === accessory.id);
          return (
            <View
              key={accessory.id}
              style={[
                styles.accessoryChip,
                isUnlocked && styles.accessoryChipUnlocked,
              ]}
            >
              <Text style={[styles.accessoryIcon, isUnlocked && styles.accessoryIconUnlocked]}>
                {accessory.icon}
              </Text>
              <Text
                style={[styles.accessoryText, isUnlocked && styles.accessoryTextUnlocked]}
                numberOfLines={1}
              >
                {accessory.unlockPercent}%
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

function RobotFigure({
  colors,
  unlockedAccessories,
}: {
  colors: ThemeColors;
  unlockedAccessories: RobotAccessory[];
}) {
  return <RobotAvatar3DView colors={colors} unlockedAccessories={unlockedAccessories} />;
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    card: { gap: 14 },
    headerRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    cardLabel: {
      color: colors.textMuted,
      fontSize: 11,
      fontWeight: '700',
      letterSpacing: 2.5,
    },
    title: { color: colors.textPrimary, fontSize: 20, fontWeight: '800', marginTop: 4 },
    unlockCount: { color: colors.purple, fontSize: 18, fontWeight: '900' },
    avatarStage: { width: '100%' },
    avatarCopy: { gap: 6 },
    avatarTitle: { color: colors.textPrimary, fontSize: 16, fontWeight: '800' },
    avatarText: { color: colors.textSecondary, fontSize: 13, lineHeight: 19 },
    testButton: {
      alignSelf: 'flex-start',
      borderRadius: 999,
      borderWidth: 1,
      borderColor: colors.amber + '66',
      backgroundColor: colors.amber + '18',
      paddingHorizontal: 13,
      paddingVertical: 8,
    },
    testButtonText: { color: colors.amber, fontSize: 12, fontWeight: '900', letterSpacing: 0.5 },
    accessoryGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
    accessoryChip: {
      width: 42,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.borderCard,
      backgroundColor: colors.bgPrimary,
      paddingVertical: 6,
      alignItems: 'center',
      gap: 2,
    },
    accessoryChipUnlocked: {
      borderColor: colors.purple + '66',
      backgroundColor: colors.purple + '18',
    },
    accessoryIcon: { color: colors.textMuted, fontSize: 13, fontWeight: '800' },
    accessoryIconUnlocked: { color: colors.purple },
    accessoryText: { color: colors.textMuted, fontSize: 10, fontWeight: '800' },
    accessoryTextUnlocked: { color: colors.textPrimary },
  });
}
