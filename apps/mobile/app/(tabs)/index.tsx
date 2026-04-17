import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DOMAINS, getCardsByDomain } from '../../src/content';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import type { DomainMeta } from '../../src/content';

export default function HomeScreen() {
  const router = useRouter();
  const { streak, dueCardIds, isLoaded } = useSRSStore();

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

      {/* Domain Grid */}
      <Text style={styles.sectionTitle}>Pick a Domain</Text>
      <Text style={styles.sectionSub}>5 minutes a day across every IT discipline</Text>

      <View style={styles.grid}>
        {DOMAINS.map((d) => (
          <DomainCard
            key={d.id}
            domain={d}
            onPress={() => router.push(`/domain/${d.id}`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

function DomainCard({
  domain,
  onPress,
}: {
  domain: DomainMeta;
  onPress: () => void;
}) {
  const cardCount = getCardsByDomain(domain.id).length;

  return (
    <TouchableOpacity style={[styles.domainCard, { borderColor: domain.color }]} onPress={onPress}>
      <Text style={styles.domainIcon}>{domain.icon}</Text>
      <Text style={[styles.domainLabel, { color: domain.color }]}>{domain.label}</Text>
      <Text style={styles.domainDesc}>{domain.description}</Text>
      <Text style={styles.domainCount}>{cardCount} concepts</Text>
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
  domainIcon: { fontSize: 28 },
  domainLabel: { fontSize: 15, fontWeight: '700' },
  domainDesc: { color: '#94A3B8', fontSize: 12, lineHeight: 16 },
  domainCount: { color: '#475569', fontSize: 11, marginTop: 4 },
});
