import { Image, StyleSheet, Text, View } from 'react-native';
import type { ThemeColors } from '../theme';
import {
  ROBOT_ACCESSORIES,
  getRobotAchievementProgress,
  getRobotAvatarMilestonePercent,
  getUnlockedRobotAccessories,
  type RobotAvatarMilestone,
} from './robot-achievements';
import { getRobotAvatarImage } from './robot-avatar-assets';

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
  const unlocked = getUnlockedRobotAccessories({ percentExplored, isPro });
  const progress = getRobotAchievementProgress({ percentExplored, isPro });
  const milestonePercent = getRobotAvatarMilestonePercent({ percentExplored, isPro });

  return (
    <View style={[parentStyles?.card, styles.card]}>
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={[parentStyles?.cardLabel, styles.cardLabel]}>ROBOT LOADOUT</Text>
          <Text style={styles.title}>{isPro ? 'Evolving robot avatar' : 'Basic robot avatar'}</Text>
        </View>
        <Text style={styles.unlockCount}>
          {progress.unlockedCount}/{progress.totalCount}
        </Text>
      </View>

      <View style={styles.avatarRow}>
        <RobotFigure colors={colors} milestonePercent={milestonePercent} />
        <View style={styles.avatarCopy}>
          <Text style={styles.avatarTitle}>
            {isPro ? `${milestonePercent}% robot loadout` : 'Pro cosmetics locked'}
          </Text>
          <Text style={styles.avatarText}>
            {isPro
              ? progress.nextUnlockPercent
                ? `${progress.percentToNextUnlock}% more library progress unlocks the ${progress.nextUnlockPercent}% accessory.`
                : 'All cosmetics unlocked.'
              : 'Upgrade to Pro to unlock a new robot cosmetic every 5% of library progress.'}
          </Text>
        </View>
      </View>

      <View style={styles.accessoryGrid}>
        {ROBOT_ACCESSORIES.map((accessory) => {
          const isUnlocked = unlocked.some((item) => item.id === accessory.id);
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
  milestonePercent,
}: {
  colors: ThemeColors;
  milestonePercent: RobotAvatarMilestone;
}) {
  return (
    <View style={[stylesForFigure.shell, { borderColor: colors.borderCard, backgroundColor: colors.bgPrimary }]}>
      <Image
        accessibilityIgnoresInvertColors
        resizeMode="contain"
        source={getRobotAvatarImage(milestonePercent)}
        style={stylesForFigure.avatarImage}
      />
    </View>
  );
}

const stylesForFigure = StyleSheet.create({
  shell: {
    width: 144,
    height: 180,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
});

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
    avatarRow: { flexDirection: 'row', gap: 14, alignItems: 'center' },
    avatarCopy: { flex: 1, gap: 6 },
    avatarTitle: { color: colors.textPrimary, fontSize: 16, fontWeight: '800' },
    avatarText: { color: colors.textSecondary, fontSize: 13, lineHeight: 19 },
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
