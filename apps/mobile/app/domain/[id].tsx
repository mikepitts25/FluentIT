import { useLocalSearchParams, useRouter, useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
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
import { C, GRAD_GREEN_CYAN } from '../../src/theme';

const DIFFICULTY_COLOR: Record<string, string> = {
  beginner:     C.green,
  intermediate: C.amber,
  advanced:     C.red,
};

const STATUS_COLOR: Record<string, string> = {
  New:      C.textMuted,
  Learning: C.amber,
  Familiar: C.cyan,
  Mastered: C.green,
};

export default function DomainScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const navigation = useNavigation();
  const { states } = useSRSStore();

  const domain = DOMAINS.find((d) => d.id === id);
  const cards = getCardsByDomain(id as any);

  useEffect(() => {
    if (domain) navigation.setOptions({ title: domain.label });
  }, [domain]);

  if (!domain) return null;

  const masteredCount = cards.filter((c) => {
    const s = states[c.id];
    return s && getStabilityLabel(s) === 'Mastered';
  }).length;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: domain.color + '44' }]}>
        <View style={styles.headerMain}>
          <View style={[styles.headerDot, { backgroundColor: domain.color }]} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.headerCat, { color: domain.color + 'AA' }]}>
              {domain.label.toUpperCase()}
            </Text>
            <Text style={styles.headerDesc}>{domain.description}</Text>
          </View>
        </View>

        {/* Mini progress */}
        <View style={styles.headerStats}>
          <Text style={styles.headerStatText}>
            <Text style={{ color: domain.color, fontWeight: '800' }}>{masteredCount}</Text>
            <Text style={{ color: C.textMuted }}> / {cards.length} mastered</Text>
          </Text>
          <View style={styles.miniTrack}>
            <View
              style={[
                styles.miniFill,
                { width: `${Math.round((masteredCount / cards.length) * 100)}%`, backgroundColor: domain.color },
              ]}
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push({ pathname: '/session', params: { domain: domain.id } })}
        >
          <LinearGradient
            colors={[domain.color, domain.color + 'BB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.startBtn}
          >
            <Text style={styles.startBtnText}>▶  Start Session</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cards}
        keyExtractor={(c: Card) => c.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }: { item: Card }) => {
          const stabilityLabel = states[item.id] ? getStabilityLabel(states[item.id]!) : 'New';
          return (
            <ConceptRow
              card={item}
              stabilityLabel={stabilityLabel}
              domainColor={domain.color}
              onPress={() => router.push(`/card/${item.id}`)}
            />
          );
        }}
      />
    </View>
  );
}

function ConceptRow({
  card,
  stabilityLabel,
  domainColor,
  onPress,
}: {
  card: Card;
  stabilityLabel: string;
  domainColor: string;
  onPress: () => void;
}) {
  const diffColor = DIFFICULTY_COLOR[card.difficulty] ?? C.textMuted;
  const statusColor = STATUS_COLOR[stabilityLabel] ?? C.textMuted;

  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.8}>
      <View style={{ flex: 1, gap: 4 }}>
        <Text style={styles.cardTitle}>{card.title}</Text>
        <Text style={styles.cardSubtitle} numberOfLines={1}>{card.subtitle}</Text>
        <View style={styles.tags}>
          <View style={[styles.diffTag, { backgroundColor: diffColor + '18', borderColor: diffColor + '44' }]}>
            <Text style={[styles.diffTagText, { color: diffColor }]}>{card.difficulty}</Text>
          </View>
          {card.tags.slice(0, 2).map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: statusColor + '18', borderColor: statusColor + '33' }]}>
        <Text style={[styles.statusText, { color: statusColor }]}>{stabilityLabel}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bgPrimary },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    backgroundColor: C.bgCard,
    gap: 14,
  },
  headerMain: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headerDot: { width: 10, height: 10, borderRadius: 5, marginTop: 2 },
  headerCat: { fontSize: 11, fontWeight: '700', letterSpacing: 2.5 },
  headerDesc: { color: C.textSecondary, fontSize: 15, marginTop: 2 },
  headerStats: { gap: 6 },
  headerStatText: { fontSize: 14 },
  miniTrack: { height: 4, backgroundColor: C.bgCardAlt, borderRadius: 2, overflow: 'hidden' },
  miniFill: { height: '100%', borderRadius: 2 },
  startBtn: { borderRadius: 12, paddingVertical: 12, paddingHorizontal: 20, alignItems: 'center' },
  startBtnText: { color: '#000000', fontWeight: '800', fontSize: 16 },

  list: { padding: 14, gap: 10 },
  row: {
    backgroundColor: C.bgCard,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: C.borderCard,
  },
  cardTitle: { color: C.textPrimary, fontSize: 17, fontWeight: '700' },
  cardSubtitle: { color: C.textSecondary, fontSize: 14 },
  tags: { flexDirection: 'row', gap: 6, flexWrap: 'wrap', marginTop: 2 },
  diffTag: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3, borderWidth: 1 },
  diffTagText: { fontSize: 12, fontWeight: '700' },
  tag: { backgroundColor: C.bgPrimary, borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  tagText: { color: C.textMuted, fontSize: 12 },
  statusBadge: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusText: { fontSize: 13, fontWeight: '700' },
});
