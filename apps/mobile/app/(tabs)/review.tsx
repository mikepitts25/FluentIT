import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ALL_CARDS, DOMAINS, type Card } from '../../src/content';
import { DomainIconBadge } from '../../src/domain-icon-badge';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { C, GRAD_GREEN_CYAN } from '../../src/theme';

export default function ReviewScreen() {
  const router = useRouter();
  const { dueCardIds, isLoaded } = useSRSStore();

  const dueCards = useMemo(
    () => ALL_CARDS.filter((c) => dueCardIds.includes(c.id)),
    [dueCardIds],
  );

  if (!isLoaded) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Initializing...</Text>
      </View>
    );
  }

  if (dueCards.length === 0) {
    return (
      <View style={styles.center}>
        <View style={styles.emptyIconBg}>
          <Text style={{ fontSize: 46 }}>✓</Text>
        </View>
        <Text style={styles.emptyTitle}>All caught up!</Text>
        <Text style={styles.emptySub}>
          No cards due for review. Come back later or learn new concepts.
        </Text>
        <TouchableOpacity activeOpacity={0.85} onPress={() => router.push('/(tabs)')}>
          <LinearGradient
            colors={GRAD_GREEN_CYAN}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.learnBtn}
          >
            <Text style={styles.learnBtnText}>Browse Domains →</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.dueCount}>{dueCards.length} cards due</Text>
          <Text style={styles.dueHint}>Tap a card to study</Text>
        </View>
        <View style={styles.dueBadge}>
          <Text style={styles.dueBadgeText}>{dueCards.length}</Text>
        </View>
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
              activeOpacity={0.8}
            >
              <DomainIconBadge domain={domain} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={[styles.cardDomain, { color: domain.color + 'AA' }]}>
                  {domain.label.toUpperCase()}
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
  container: { flex: 1, backgroundColor: C.bgPrimary },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 14,
    backgroundColor: C.bgPrimary,
  },
  loadingText: { color: C.textMuted, fontSize: 16, letterSpacing: 1 },
  emptyIconBg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: C.green + '18',
    borderWidth: 1,
    borderColor: C.green + '44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: { color: C.textPrimary, fontSize: 24, fontWeight: '800' },
  emptySub: { color: C.textSecondary, fontSize: 16, textAlign: 'center', lineHeight: 25 },
  learnBtn: { borderRadius: 14, paddingHorizontal: 28, paddingVertical: 14 },
  learnBtnText: { color: '#000000', fontWeight: '800', fontSize: 17 },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: C.borderCardAlt,
  },
  dueCount: { color: C.textPrimary, fontSize: 22, fontWeight: '800' },
  dueHint: { color: C.textMuted, fontSize: 14, marginTop: 2 },
  dueBadge: {
    backgroundColor: C.green + '22',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.green + '44',
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  dueBadgeText: { color: C.green, fontSize: 18, fontWeight: '800' },

  list: { padding: 16, gap: 10 },
  row: {
    backgroundColor: C.bgCard,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 1,
    borderColor: C.borderCard,
  },
  cardTitle: { color: C.textPrimary, fontSize: 17, fontWeight: '600', marginBottom: 3 },
  cardDomain: { fontSize: 11, fontWeight: '700', letterSpacing: 1.5 },
  arrow: { color: C.textMuted, fontSize: 24, fontWeight: '300' },
});
