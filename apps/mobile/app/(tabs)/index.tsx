import { useRouter } from 'expo-router';
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
import type { DomainMeta } from '../../src/content';

export default function HomeScreen() {
  const router = useRouter();
  const { streak, dueCardIds, isLoaded } = useSRSStore();
  const { preferences, toggleDomain } = usePreferencesStore();
  const selectedCount = preferences.selectedDomains.length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Streak Banner */}
      <View style={styles.streakBanner}>
        <Text style={styles.streakFire}>🔥</Text>
        <View>
          <Text style={styles.streakCount}>{streak.currentStreak} day streak</Text>
          <Text style={styles.streakSub}>
            {dueCardIds.length > 0
              ? `${dueCardIds.length} cards due for review`
              : 'All caught up! Great work.'}
          </Text>
        </View>
        {dueCardIds.length > 0 && (
          <TouchableOpacity
            style={styles.reviewButton}
            onPress={() => router.push('/(tabs)/review')}
          >
            <Text style={styles.reviewButtonText}>Review</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        style={styles.meetingPrepButton}
        onPress={() => router.push('/meeting-prep')}
      >
        <Text style={styles.meetingPrepButtonText}>Prep for a meeting</Text>
        <Text style={styles.meetingPrepButtonSub}>Turn agenda terms into a concept pack</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sessionButton} onPress={() => router.push('/session')}>
        <Text style={styles.sessionButtonText}>Start 5-min session</Text>
        <Text style={styles.sessionButtonSub}>
          {selectedCount > 0
            ? `${selectedCount} focus ${selectedCount === 1 ? 'domain' : 'domains'}`
            : 'Reviews first, then new concepts'}
        </Text>
      </TouchableOpacity>

      {/* Domain Grid */}
      <Text style={styles.sectionTitle}>Pick a Domain</Text>
      <Text style={styles.sectionSub}>
        Tap a card to browse. Use Focus to shape daily sessions.
      </Text>

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
        { borderColor: isFocused ? domain.color : '#334155' },
      ]}
      onPress={onPress}
    >
      <Image
        source={getDomainIconImage(domain.id)}
        style={styles.domainIcon}
        resizeMode="contain"
      />
      <Text style={[styles.domainLabel, { color: domain.color }]}>{domain.label}</Text>
      <Text style={styles.domainDesc}>{domain.description}</Text>
      <View style={styles.domainFooter}>
        <Text style={styles.domainCount}>{cardCount} concepts</Text>
        <TouchableOpacity
          style={[
            styles.focusButton,
            isFocused && { backgroundColor: domain.color, borderColor: domain.color },
          ]}
          onPress={onToggleFocus}
        >
          <Text style={[styles.focusButtonText, isFocused && styles.focusButtonTextActive]}>
            {isFocused ? 'Focused' : 'Focus'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  content: { padding: 20, paddingBottom: 40 },
  streakBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 16,
    marginBottom: 28,
    gap: 12,
  },
  streakFire: { fontSize: 32 },
  streakCount: { color: '#F8FAFC', fontSize: 17, fontWeight: '700' },
  streakSub: { color: '#94A3B8', fontSize: 13, marginTop: 2 },
  reviewButton: {
    marginLeft: 'auto',
    backgroundColor: '#38BDF8',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  reviewButtonText: { color: '#0F172A', fontWeight: '700', fontSize: 13 },
  meetingPrepButton: {
    backgroundColor: '#0F766E',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2DD4BF',
    padding: 18,
    marginBottom: 14,
  },
  meetingPrepButtonText: { color: '#F0FDFA', fontSize: 18, fontWeight: '800' },
  meetingPrepButtonSub: { color: '#99F6E4', fontSize: 13, marginTop: 4 },
  sessionButton: {
    backgroundColor: '#1D4ED8',
    borderRadius: 16,
    padding: 18,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#38BDF8',
  },
  sessionButtonText: { color: '#F8FAFC', fontSize: 18, fontWeight: '800' },
  sessionButtonSub: { color: '#BFDBFE', fontSize: 13, marginTop: 4 },
  sectionTitle: {
    color: '#F8FAFC',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 4,
  },
  sectionSub: {
    color: '#64748B',
    fontSize: 14,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
  domainCard: {
    width: '47%',
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1.5,
    gap: 6,
  },
  domainIcon: { width: 40, height: 40 },
  domainLabel: { fontSize: 15, fontWeight: '700' },
  domainDesc: { color: '#94A3B8', fontSize: 12, lineHeight: 16 },
  domainCount: { color: '#475569', fontSize: 11, marginTop: 4 },
  domainFooter: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  focusButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#475569',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  focusButtonText: { color: '#94A3B8', fontSize: 11, fontWeight: '700' },
  focusButtonTextActive: { color: '#0F172A' },
});
