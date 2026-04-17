import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import {
  FlatList,
  type ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ALL_CARDS, DOMAINS, type Card } from '../../src/content';
import { useSRSStore } from '../../src/hooks/useSRSStore';

export default function ReviewScreen() {
  const router = useRouter();
  const { dueCardIds, isLoaded, states } = useSRSStore();

  const dueCards = useMemo(
    () => ALL_CARDS.filter((c) => dueCardIds.includes(c.id)),
    [dueCardIds],
  );

  if (!isLoaded) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (dueCards.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={{ fontSize: 56 }}>🎉</Text>
        <Text style={styles.emptyTitle}>All caught up!</Text>
        <Text style={styles.emptySub}>
          No cards due for review. Come back later or learn new concepts.
        </Text>
        <TouchableOpacity style={styles.learnBtn} onPress={() => router.push('/(tabs)')}>
          <Text style={styles.learnBtnText}>Browse Domains →</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.dueCount}>{dueCards.length} due today</Text>
        <Text style={styles.dueHint}>Tap to study each card</Text>
      </View>

      <FlatList
        data={dueCards}
        keyExtractor={(c: Card) => c.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }: { item: Card }) => {
          const domain = DOMAINS.find((d) => d.id === item.domain)!;
          return (
            <TouchableOpacity
              style={styles.row}
              onPress={() => router.push(`/card/${item.id}`)}
            >
              <View style={[styles.domainDot, { backgroundColor: domain.color }]} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDomain}>
                  {domain.icon} {domain.label}
                </Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 12,
    backgroundColor: '#0F172A',
  },
  loadingText: { color: '#64748B', fontSize: 16 },
  emptyTitle: { color: '#F8FAFC', fontSize: 24, fontWeight: '800', textAlign: 'center' },
  emptySub: { color: '#94A3B8', fontSize: 15, textAlign: 'center', lineHeight: 22 },
  learnBtn: {
    marginTop: 8,
    backgroundColor: '#1D4ED8',
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  learnBtnText: { color: '#F8FAFC', fontWeight: '700', fontSize: 16 },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
  },
  dueCount: { color: '#F8FAFC', fontSize: 18, fontWeight: '700' },
  dueHint: { color: '#475569', fontSize: 13 },
  list: { padding: 16, gap: 10 },
  row: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 1,
    borderColor: '#334155',
  },
  domainDot: { width: 10, height: 10, borderRadius: 5 },
  cardTitle: { color: '#F8FAFC', fontSize: 16, fontWeight: '600', marginBottom: 3 },
  cardDomain: { color: '#64748B', fontSize: 13 },
  arrow: { color: '#334155', fontSize: 24, fontWeight: '300' },
});
