import { useMemo } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ALL_CARDS, DOMAINS } from '../../src/content';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { useProStore } from '../../src/hooks/useProStore';
import { useThemeColors } from '../../src/hooks/useThemeColors';
import { FREE_TERMS_PER_CATEGORY, getLockedCardCount } from '../../src/pro/pro-access';
import { getCategoryProgress } from '../../src/progress/category-progress';
import { STATUS_COLORS } from '../../src/progress/status-colors';
import { ProUpgradeCard } from '../../src/pro/pro-upgrade-card';
import { RobotAvatarCard } from '../../src/pro/robot-avatar-card';
import { getStabilityLabel } from '../../src/store/srs-store';
import { GRAD_GREEN_CYAN, type ThemeColors } from '../../src/theme';

const STATUS: Record<string, { color: string; label: string }> = {
  New:      { color: STATUS_COLORS.New,      label: 'New' },
  Learning: { color: STATUS_COLORS.Learning, label: 'Learning' },
  Familiar: { color: STATUS_COLORS.Familiar, label: 'Familiar' },
  Mastered: { color: STATUS_COLORS.Mastered, label: 'Mastered' },
};

export default function ProgressScreen() {
  const { states, streak } = useSRSStore();
  const { entitlement, grantPro } = useProStore();
  const { colors } = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const isPro = entitlement.isPro;

  const totalStudied = Object.keys(states).length;
  const totalCards = ALL_CARDS.length;
  const pct = Math.round((totalStudied / totalCards) * 100);
  const lockedCount = getLockedCardCount({ cards: ALL_CARDS, isPro });

  const breakdown = useMemo(() => {
    const counts: Record<string, number> = { New: 0, Learning: 0, Familiar: 0, Mastered: 0 };
    ALL_CARDS.forEach((c) => {
      const s = states[c.id];
      const label = s ? getStabilityLabel(s) : 'New';
      counts[label] = (counts[label] ?? 0) + 1;
    });
    return counts;
  }, [states]);
  const categoryProgress = useMemo(
    () => getCategoryProgress({
      domains: DOMAINS,
      cards: ALL_CARDS,
      states,
    }),
    [states],
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      {/* Identity row */}
      <View style={styles.profileRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.levelText}>Level {Math.floor(totalStudied / 10) + 1} · IT Learner</Text>
        </View>
      </View>

      {/* Library progress */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>LIBRARY EXPLORED</Text>
        <View style={styles.xpTrack}>
          <LinearGradient
            colors={GRAD_GREEN_CYAN}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.xpFill, { width: `${pct}%` }]}
          />
        </View>
        <Text style={styles.xpSub}>{pct}% of library explored</Text>
      </View>

      <ProUpgradeCard
        colors={colors}
        freeTermsPerCategory={FREE_TERMS_PER_CATEGORY}
        isPro={isPro}
        lockedCount={lockedCount}
        onGrantPro={grantPro}
        styles={styles}
      />

      <RobotAvatarCard
        colors={colors}
        isPro={isPro}
        percentExplored={pct}
        styles={styles}
      />

      {/* Streak stats */}
      <View style={styles.statsRow}>
        <StatBox
          value={streak.currentStreak}
          unit="days"
          label="STREAK"
          color={colors.amber}
          icon="🔥"
          styles={styles}
        />
        <StatBox
          value={totalStudied}
          unit="cards"
          label="STUDIED"
          color={colors.cyan}
          icon="✓"
          styles={styles}
        />
        <StatBox
          value={streak.longestStreak}
          unit="days"
          label="BEST RUN"
          color={colors.purple}
          icon="◈"
          styles={styles}
        />
      </View>

      {/* Knowledge breakdown */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>KNOWLEDGE MAP</Text>
        <View style={styles.breakdownGrid}>
          {Object.entries(breakdown).map(([label, count]) => {
            const s = STATUS[label]!;
            const bPct = Math.round((count / totalCards) * 100);
            return (
              <View key={label} style={styles.breakdownItem}>
                <View style={styles.breakdownHeader}>
                  <View style={[styles.breakdownDot, { backgroundColor: s.color }]} />
                  <Text style={[styles.breakdownLabel, { color: s.color }]}>{s.label}</Text>
                  <Text style={[styles.breakdownCount, { color: s.color }]}>{count}</Text>
                </View>
                <View style={styles.breakdownTrack}>
                  <View style={[styles.breakdownFill, { width: `${bPct}%`, backgroundColor: s.color }]} />
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>CATEGORY PROGRESS</Text>
        <View style={styles.categoryGrid}>
          {categoryProgress.map((item) => (
            <View key={item.domain.id} style={styles.categoryItem}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryLabel}>{item.domain.label}</Text>
                <Text style={[styles.categoryCount, { color: item.domain.color }]}>
                  {item.studiedCount}/{item.totalCount}
                </Text>
              </View>
              <View style={styles.categoryTrack}>
                <View
                  style={[
                    styles.categoryFill,
                    {
                      width: `${item.percent}%`,
                      backgroundColor: item.domain.color,
                    },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

function StatBox({
  value, unit, label, color, icon, styles,
}: {
  value: number;
  unit: string;
  label: string;
  color: string;
  icon: string;
  styles: ProgressStyles;
}) {
  return (
    <View style={[styles.statBox, { borderColor: color + '33' }]}>
      <Text style={[styles.statIcon, { color }]}>{icon}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statUnit}>{unit}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

type ProgressStyles = ReturnType<typeof createStyles>;

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgPrimary },
  content: { padding: 16, paddingBottom: 48, gap: 12 },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 8,
  },
  levelText: { color: colors.textPrimary, fontSize: 18, fontWeight: '700', marginTop: 2 },

  card: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.borderCard,
    gap: 12,
  },
  cardLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.5,
  },
  xpTrack: {
    height: 8,
    backgroundColor: colors.bgCardAlt,
    borderRadius: 4,
    overflow: 'hidden',
  },
  xpFill: { height: '100%', borderRadius: 4 },
  xpSub: { color: colors.textMuted, fontSize: 14, textAlign: 'center' },

  statsRow: { flexDirection: 'row', gap: 10 },
  statBox: {
    flex: 1,
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    alignItems: 'center',
    gap: 2,
  },
  statIcon: { fontSize: 22, marginBottom: 4, fontWeight: '800' },
  statValue: { fontSize: 26, fontWeight: '800' },
  statUnit: { color: colors.textMuted, fontSize: 12 },
  statLabel: { color: colors.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 1.5 },

  breakdownGrid: { gap: 10 },
  breakdownItem: { gap: 6 },
  breakdownHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  breakdownDot: { width: 8, height: 8, borderRadius: 4 },
  breakdownLabel: { flex: 1, fontSize: 14, fontWeight: '600' },
  breakdownCount: { fontSize: 15, fontWeight: '700' },
  breakdownTrack: {
    height: 4,
    backgroundColor: colors.bgCardAlt,
    borderRadius: 2,
    overflow: 'hidden',
  },
  breakdownFill: { height: '100%', borderRadius: 2 },

  categoryGrid: { gap: 12 },
  categoryItem: { gap: 6 },
  categoryHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  categoryLabel: { flex: 1, color: colors.textSecondary, fontSize: 14, fontWeight: '700' },
  categoryCount: { fontSize: 14, fontWeight: '800' },
  categoryTrack: {
    height: 6,
    backgroundColor: colors.bgCardAlt,
    borderRadius: 3,
    overflow: 'hidden',
  },
  categoryFill: { height: '100%', borderRadius: 3 },
  });
}
