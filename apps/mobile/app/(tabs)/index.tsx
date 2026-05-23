import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DOMAINS, getCardsByDomain } from '../../src/content';
import { getDomainIconImage } from '../../src/domain-icons';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { usePreferencesStore } from '../../src/hooks/usePreferencesStore';
import { C, GRAD_GREEN_CYAN } from '../../src/theme';
import type { DomainMeta } from '../../src/content';

export default function HomeScreen() {
  const router = useRouter();
  const { streak, dueCardIds } = useSRSStore();
  const { preferences, toggleDomain } = usePreferencesStore();
  const selectedCount = preferences.selectedDomains.length;
  const xpEarned = Object.keys(useSRSStore().states).length * 40;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* XP / Streak Banner */}
      <View style={styles.statsBanner}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{streak.currentStreak}</Text>
          <Text style={styles.statLabel}>DAY STREAK</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{dueCardIds.length}</Text>
          <Text style={styles.statLabel}>DUE TODAY</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: C.green }]}>{xpEarned}</Text>
          <Text style={styles.statLabel}>TOTAL XP</Text>
        </View>
      </View>

      {/* Primary CTA */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => router.push('/session')}
      >
        <LinearGradient
          colors={GRAD_GREEN_CYAN}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.primaryCta}
        >
          <View>
            <Text style={styles.primaryCtaTitle}>Start 5-min Session</Text>
            <Text style={styles.primaryCtaSub}>
              {selectedCount > 0
                ? `${selectedCount} focus ${selectedCount === 1 ? 'domain' : 'domains'}`
                : 'Reviews first, then new concepts'}
            </Text>
          </View>
          <Text style={styles.primaryCtaArrow}>▶</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Meeting Prep */}
      <TouchableOpacity
        style={styles.secondaryCta}
        onPress={() => router.push('/meeting-prep')}
        activeOpacity={0.8}
      >
        <View>
          <Text style={styles.secondaryCtaTitle}>Prep for a Meeting</Text>
          <Text style={styles.secondaryCtaSub}>Turn agenda terms into a concept pack</Text>
        </View>
        <Text style={styles.secondaryCtaArrow}>→</Text>
      </TouchableOpacity>

      {/* Due review nudge */}
      {dueCardIds.length > 0 && (
        <TouchableOpacity
          style={styles.reviewNudge}
          onPress={() => router.push('/(tabs)/review')}
          activeOpacity={0.8}
        >
          <View style={styles.reviewNudgeDot} />
          <Text style={styles.reviewNudgeText}>
            {dueCardIds.length} cards due for review
          </Text>
          <Text style={styles.reviewNudgeArrow}>→</Text>
        </TouchableOpacity>
      )}

      {/* Domain grid */}
      <Text style={styles.sectionLabel}>KNOWLEDGE BASE</Text>
      <View style={styles.grid}>
        {DOMAINS.map((d) => {
          const isFocused = preferences.selectedDomains.includes(d.id);
          return (
            <DomainCard
              key={d.id}
              domain={d}
              isFocused={isFocused}
              onPress={() => router.push(`/domain/${d.id}`)}
              onToggleFocus={() => toggleDomain(d.id)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

function DomainCard({
  domain,
  isFocused,
  onPress,
  onToggleFocus,
}: {
  domain: DomainMeta;
  isFocused: boolean;
  onPress: () => void;
  onToggleFocus: () => void;
}) {
  const cardCount = getCardsByDomain(domain.id).length;

  return (
    <TouchableOpacity
      style={[
        styles.domainCard,
        { borderColor: isFocused ? domain.color + '66' : C.borderCard },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Category label */}
      <View style={styles.domainCatRow}>
        <View style={[styles.domainDot, { backgroundColor: domain.color }]} />
        <Text style={[styles.domainCat, { color: domain.color + 'AA' }]}>
          {domain.label.toUpperCase()}
        </Text>
      </View>

      <Image
        source={getDomainIconImage(domain.id)}
        style={styles.domainIcon}
        resizeMode="contain"
      />
      <Text style={styles.domainDesc} numberOfLines={2}>{domain.description}</Text>

      <View style={styles.domainFooter}>
        <Text style={styles.domainCount}>{cardCount} concepts</Text>
        <TouchableOpacity
          style={[
            styles.focusButton,
            isFocused && { backgroundColor: domain.color + '22', borderColor: domain.color + '66' },
          ]}
          onPress={onToggleFocus}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={[styles.focusButtonText, isFocused && { color: domain.color }]}>
            {isFocused ? 'Focused' : 'Focus'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bgPrimary },
  content: { padding: 16, paddingBottom: 48, gap: 12 },

  statsBanner: {
    flexDirection: 'row',
    backgroundColor: C.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.borderCard,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  statItem: { flex: 1, alignItems: 'center', gap: 4 },
  statValue: { color: C.textPrimary, fontSize: 22, fontWeight: '800' },
  statLabel: { color: C.textMuted, fontSize: 9, fontWeight: '700', letterSpacing: 1.5 },
  statDivider: { width: 1, backgroundColor: C.borderCard, marginVertical: 4 },

  primaryCta: {
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  primaryCtaTitle: { color: '#000000', fontSize: 18, fontWeight: '800' },
  primaryCtaSub: { color: '#00000066', fontSize: 13, marginTop: 3 },
  primaryCtaArrow: { color: '#000000', fontSize: 22, fontWeight: '300' },

  secondaryCta: {
    backgroundColor: C.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.borderCard,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondaryCtaTitle: { color: C.textPrimary, fontSize: 16, fontWeight: '700' },
  secondaryCtaSub: { color: C.textSecondary, fontSize: 13, marginTop: 3 },
  secondaryCtaArrow: { color: C.textMuted, fontSize: 20 },

  reviewNudge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: C.bgCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.borderActive,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  reviewNudgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.green,
  },
  reviewNudgeText: { flex: 1, color: C.green, fontSize: 13, fontWeight: '600' },
  reviewNudgeArrow: { color: C.green, fontSize: 16 },

  sectionLabel: {
    color: C.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
    marginTop: 4,
    marginBottom: 2,
  },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },

  domainCard: {
    width: '47.5%',
    backgroundColor: C.bgCard,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    gap: 8,
  },
  domainCatRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  domainDot: { width: 6, height: 6, borderRadius: 3 },
  domainCat: { fontSize: 8, fontWeight: '700', letterSpacing: 1.5 },
  domainIcon: { width: 36, height: 36 },
  domainDesc: { color: C.textSecondary, fontSize: 11, lineHeight: 15 },
  domainCount: { color: C.textMuted, fontSize: 10 },
  domainFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  focusButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: C.borderCard,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  focusButtonText: { color: C.textMuted, fontSize: 10, fontWeight: '700' },
});
