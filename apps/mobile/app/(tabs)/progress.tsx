import { useMemo } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ALL_CARDS } from '../../src/content';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { getStabilityLabel } from '../../src/store/srs-store';
import { C, GRAD_GREEN_CYAN } from '../../src/theme';

const STATUS: Record<string, { color: string; label: string }> = {
  New:      { color: C.textMuted,  label: 'New' },
  Learning: { color: C.amber,      label: 'Learning' },
  Familiar: { color: C.cyan,       label: 'Familiar' },
  Mastered: { color: C.green,      label: 'Mastered' },
};

export default function ProgressScreen() {
  const { states, streak } = useSRSStore();

  const totalStudied = Object.keys(states).length;
  const totalCards = ALL_CARDS.length;
  const pct = Math.round((totalStudied / totalCards) * 100);

  const breakdown = useMemo(() => {
    const counts: Record<string, number> = { New: 0, Learning: 0, Familiar: 0, Mastered: 0 };
    ALL_CARDS.forEach((c) => {
      const s = states[c.id];
      const label = s ? getStabilityLabel(s) : 'New';
      counts[label] = (counts[label] ?? 0) + 1;
    });
    return counts;
  }, [states]);

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

      {/* Streak stats */}
      <View style={styles.statsRow}>
        <StatBox
          value={streak.currentStreak}
          unit="days"
          label="STREAK"
          color={C.amber}
          icon="🔥"
        />
        <StatBox
          value={totalStudied}
          unit="cards"
          label="STUDIED"
          color={C.cyan}
          icon="✓"
        />
        <StatBox
          value={streak.longestStreak}
          unit="days"
          label="BEST RUN"
          color={C.purple}
          icon="◈"
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
    </ScrollView>
  );
}

function StatBox({
  value, unit, label, color, icon,
}: {
  value: number; unit: string; label: string; color: string; icon: string;
}) {
  return (
    <View style={[styles.statBox, { borderColor: color + '33' }]}>
      <Text style={{ fontSize: 22, marginBottom: 4 }}>{icon}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statUnit}>{unit}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bgPrimary },
  content: { padding: 16, paddingBottom: 48, gap: 12 },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 8,
  },
  levelText: { color: C.textPrimary, fontSize: 18, fontWeight: '700', marginTop: 2 },

  card: {
    backgroundColor: C.bgCard,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: C.borderCard,
    gap: 12,
  },
  cardLabel: {
    color: C.textMuted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.5,
  },
  xpTrack: {
    height: 8,
    backgroundColor: C.bgCardAlt,
    borderRadius: 4,
    overflow: 'hidden',
  },
  xpFill: { height: '100%', borderRadius: 4 },
  xpSub: { color: C.textMuted, fontSize: 14, textAlign: 'center' },

  statsRow: { flexDirection: 'row', gap: 10 },
  statBox: {
    flex: 1,
    backgroundColor: C.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    alignItems: 'center',
    gap: 2,
  },
  statValue: { fontSize: 26, fontWeight: '800' },
  statUnit: { color: C.textMuted, fontSize: 12 },
  statLabel: { color: C.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 1.5 },

  breakdownGrid: { gap: 10 },
  breakdownItem: { gap: 6 },
  breakdownHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  breakdownDot: { width: 8, height: 8, borderRadius: 4 },
  breakdownLabel: { flex: 1, fontSize: 14, fontWeight: '600' },
  breakdownCount: { fontSize: 15, fontWeight: '700' },
  breakdownTrack: {
    height: 4,
    backgroundColor: C.bgCardAlt,
    borderRadius: 2,
    overflow: 'hidden',
  },
  breakdownFill: { height: '100%', borderRadius: 2 },
});
