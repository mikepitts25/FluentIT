import { useLocalSearchParams, useRouter, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DOMAINS, getCardsByDomain, type Card } from '../../src/content';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { getStabilityLabel } from '../../src/store/srs-store';

const DIFFICULTY_COLOR: Record<string, string> = {
  beginner: '#10B981',
  intermediate: '#F59E0B',
  advanced: '#EF4444',
};

export default function DomainScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const navigation = useNavigation();
  const { states } = useSRSStore();

  const domain = DOMAINS.find((d) => d.id === id);
  const cards = getCardsByDomain(id as any);

  useEffect(() => {
    if (domain) {
      navigation.setOptions({ title: domain.label });
    }
  }, [domain]);

  if (!domain) return null;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: domain.color }]}>
        <Text style={styles.headerIcon}>{domain.icon}</Text>
        <View style={{ flex: 1 }}>
          <Text style={[styles.headerTitle, { color: domain.color }]}>{domain.label}</Text>
          <Text style={styles.headerDesc}>{domain.description}</Text>
        </View>
      </View>

      <FlatList
        data={cards}
        keyExtractor={(c: Card) => c.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }: { item: Card }) => (
          <ConceptRow
            card={item}
            stabilityLabel={states[item.id] ? getStabilityLabel(states[item.id]!) : 'New'}
            onPress={() => router.push(`/card/${item.id}`)}
          />
        )}
      />
    </View>
  );
}

function ConceptRow({
  card,
  stabilityLabel,
  onPress,
}: {
  card: Card;
  stabilityLabel: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{card.title}</Text>
        <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
        <View style={styles.tags}>
          <View
            style={[
              styles.diffTag,
              { backgroundColor: DIFFICULTY_COLOR[card.difficulty] + '22' },
            ]}
          >
            <Text
              style={[styles.diffTagText, { color: DIFFICULTY_COLOR[card.difficulty] }]}
            >
              {card.difficulty}
            </Text>
          </View>
          {card.tags.slice(0, 2).map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>{stabilityLabel}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 20,
    borderBottomWidth: 1,
    backgroundColor: '#1E293B',
  },
  headerIcon: { fontSize: 36 },
  headerTitle: { fontSize: 20, fontWeight: '800' },
  headerDesc: { color: '#94A3B8', fontSize: 13, marginTop: 2 },
  list: { padding: 16, gap: 12 },
  row: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardTitle: { color: '#F8FAFC', fontSize: 16, fontWeight: '700', marginBottom: 2 },
  cardSubtitle: { color: '#94A3B8', fontSize: 12, marginBottom: 8 },
  tags: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  diffTag: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  diffTagText: { fontSize: 11, fontWeight: '600' },
  tag: {
    backgroundColor: '#0F172A',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  tagText: { color: '#64748B', fontSize: 11 },
  statusBadge: {
    backgroundColor: '#0F172A',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  statusText: { color: '#38BDF8', fontSize: 12, fontWeight: '600' },
});
