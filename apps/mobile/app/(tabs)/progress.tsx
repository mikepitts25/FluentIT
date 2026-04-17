import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ALL_CARDS, DOMAINS } from '../../src/content';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { getStabilityLabel } from '../../src/store/srs-store';

const STATUS_COLOR: Record<string, string> = {
  New: '#475569',
  Learning: '#F59E0B',
  Familiar: '#3B82F6',
  Mastered: '#10B981',
};

export default function ProgressScreen() {
  const { states, streak, dueCardIds } = useSRSStore();

  const totalStudied = Object.keys(states).length;
  const totalCards = ALL_CARDS.length;

  const stabilityBreakdown = useMemo(() => {
    const counts: Record<string, number> = {
      New: 0,
      Learning: 0,
      Familiar: 0,
      Mastered: 0,
    };
    ALL_CARDS.forEach((c) => {
      const s = states[c.id];
      const label = s ? getStabilityLabel(s) : 'New';
      counts[label] = (counts[label] ?? 0) + 1;
    });
    return counts;
  }, [states]);

  const domainStats = useMemo(
    () =>
      DOMAINS.map((domain) => {
        const cards = ALL_CARDS.filter((c) => c.domain === domain.id);
        const studied = cards.filter((c) => states[c.id]).length;
        return { domain, total: cards.length, studied };
      }),
    [states],
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Streak */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔥 Streak</Text>
        <View style={styles.statRow}>
          <StatBox label="Current" value={streak.currentStreak} unit="days" />
          <StatBox label="Longest" value={streak.longestStreak} unit="days" />
          <StatBox label="Due today" value={dueCardIds.length} unit="cards" />
        </View>
      </View>

      {/* Overall progress */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📊 Overall Progress</Text>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBar,
              { width: `${Math.round((totalStudied / totalCards) * 100)}%` },
            ]}
          />
        </View>
        <Text style={styles.progressLabel}>
          {totalStudied} / {totalCards} concepts studied (
          {Math.round((totalStudied / totalCards) * 100)}%)
        </Text>

        {/* Stability breakdown */}
        <View style={styles.breakdownRow}>
          {Object.entries(stabilityBreakdown).map(([label, count]) => (
            <View key={label} style={styles.breakdownItem}>
              <View style={[styles.breakdownDot, { backgroundColor: STATUS_COLOR[label] }]} />
              <Text style={styles.breakdownLabel}>{label}</Text>
              <Text style={[styles.breakdownCount, { color: STATUS_COLOR[label] }]}>
                {count}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Domain breakdown */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📚 By Domain</Text>
        {domainStats.map(({ domain, total, studied }) => (
          <View key={domain.id} style={styles.domainRow}>
            <Text style={{ fontSize: 18 }}>{domain.icon}</Text>
            <View style={{ flex: 1, gap: 4 }}>
              <View style={styles.domainLabelRow}>
                <Text style={styles.domainName}>{domain.label}</Text>
                <Text style={styles.domainCount}>
                  {studied}/{total}
                </Text>
              </View>
              <View style={styles.miniBarBg}>
                <View
                  style={[
                    styles.miniBar,
                    {
                      width: `${Math.round((studied / total) * 100)}%`,
                      backgroundColor: domain.color,
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function StatBox({ label, value, unit }: { label: string; value: number; unit: string }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statUnit}>{unit}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  content: { padding: 20, gap: 16, paddingBottom: 40 },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardTitle: { color: '#F8FAFC', fontSize: 16, fontWeight: '700' },
  statRow: { flexDirection: 'row', justifyContent: 'space-around' },
  statBox: { alignItems: 'center', gap: 2 },
  statValue: { color: '#38BDF8', fontSize: 28, fontWeight: '800' },
  statUnit: { color: '#64748B', fontSize: 12 },
  statLabel: { color: '#94A3B8', fontSize: 13 },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#0F172A',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: { height: '100%', backgroundColor: '#38BDF8', borderRadius: 5 },
  progressLabel: { color: '#94A3B8', fontSize: 13, textAlign: 'center' },
  breakdownRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 4 },
  breakdownItem: { alignItems: 'center', gap: 4 },
  breakdownDot: { width: 10, height: 10, borderRadius: 5 },
  breakdownLabel: { color: '#94A3B8', fontSize: 12 },
  breakdownCount: { fontSize: 16, fontWeight: '700' },
  domainRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  domainLabelRow: { flexDirection: 'row', justifyContent: 'space-between' },
  domainName: { color: '#E2E8F0', fontSize: 14, fontWeight: '600' },
  domainCount: { color: '#64748B', fontSize: 13 },
  miniBarBg: {
    height: 6,
    backgroundColor: '#0F172A',
    borderRadius: 3,
    overflow: 'hidden',
  },
  miniBar: { height: '100%', borderRadius: 3 },
});
