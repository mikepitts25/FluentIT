import { useLocalSearchParams, useRouter, useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ALL_CARDS, DOMAINS, getCardsByDomain, type Card } from '../../src/content';
import { useProStore } from '../../src/hooks/useProStore';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { useThemeColors } from '../../src/hooks/useThemeColors';
import { getAccessibleCardIds, sortCardsForAccess } from '../../src/pro/pro-access';
import { STATUS_COLORS } from '../../src/progress/status-colors';
import { getStabilityLabel } from '../../src/store/srs-store';
import type { ThemeColors } from '../../src/theme';

type DomainStyles = ReturnType<typeof createStyles>;

export default function DomainScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const navigation = useNavigation();
  const { states } = useSRSStore();
  const { entitlement, isLoaded: isProLoaded } = useProStore();
  const { colors } = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const isPro = entitlement.isPro;

  const domain = DOMAINS.find((d) => d.id === id);
  const cards = useMemo(() => getCardsByDomain(id as any), [id]);
  const accessibleCardIds = useMemo(
    () => getAccessibleCardIds({ cards: ALL_CARDS, isPro }),
    [isPro],
  );
  const accessibleCards = useMemo(
    () => sortCardsForAccess(cards).filter((card) => (
      accessibleCardIds.has(card.id)
    )),
    [accessibleCardIds, cards],
  );
  const lockedCount = Math.max(0, cards.length - accessibleCards.length);

  useEffect(() => {
    if (domain) navigation.setOptions({ title: domain.label });
  }, [domain]);

  if (!domain) return null;

  if (!isProLoaded) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading topic...</Text>
      </View>
    );
  }

  const masteredCount = accessibleCards.filter((c) => {
    const s = states[c.id];
    return s && getStabilityLabel(s) === 'Mastered';
  }).length;
  const startIsLocked = !isPro && accessibleCards.length === 0;

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
            <Text style={{ color: colors.textMuted }}> / {accessibleCards.length} mastered</Text>
          </Text>
          <View style={styles.miniTrack}>
            <View
              style={[
                styles.miniFill,
                {
                  width: `${accessibleCards.length > 0 ? Math.round((masteredCount / accessibleCards.length) * 100) : 0}%`,
                  backgroundColor: domain.color,
                },
              ]}
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => {
            if (startIsLocked) router.push('/pro');
            else router.push({ pathname: '/session', params: { domain: domain.id } });
          }}
        >
          <LinearGradient
            colors={startIsLocked ? ['#A78BFA', '#7C3AED'] : [domain.color, domain.color + 'BB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.startBtn}
          >
            <Text style={styles.startBtnText}>
              {startIsLocked ? 'Unlock with Pro' : '▶  Start Session'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <FlatList
        data={accessibleCards}
        keyExtractor={(c: Card) => c.id}
        contentContainerStyle={styles.list}
        ListFooterComponent={
          lockedCount > 0 ? (
            <ProLockedFooter
              colors={colors}
              lockedCount={lockedCount}
              onPress={() => router.push('/pro')}
              styles={styles}
            />
          ) : null
        }
        renderItem={({ item }: { item: Card }) => {
          const stabilityLabel = states[item.id] ? getStabilityLabel(states[item.id]!) : 'New';
          return (
            <ConceptRow
              card={item}
              stabilityLabel={stabilityLabel}
              domainColor={domain.color}
              colors={colors}
              styles={styles}
              onPress={() => router.push(`/card/${item.id}`)}
            />
          );
        }}
      />
    </View>
  );
}

function ProLockedFooter({
  colors,
  lockedCount,
  onPress,
  styles,
}: {
  colors: ThemeColors;
  lockedCount: number;
  onPress: () => void;
  styles: DomainStyles;
}) {
  return (
    <TouchableOpacity style={styles.lockedFooter} activeOpacity={0.82} onPress={onPress}>
      <View style={styles.lockedIcon}>
        <Text style={styles.lockedIconText}>PRO</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.lockedTitle}>{lockedCount} terms locked in this topic</Text>
        <Text style={styles.lockedText}>Go Pro to unlock the full catalog and remove ads.</Text>
      </View>
      <Text style={[styles.lockedArrow, { color: colors.purple }]}>→</Text>
    </TouchableOpacity>
  );
}

function ConceptRow({
  card,
  stabilityLabel,
  domainColor,
  colors,
  styles,
  onPress,
}: {
  card: Card;
  stabilityLabel: string;
  domainColor: string;
  colors: ThemeColors;
  styles: DomainStyles;
  onPress: () => void;
}) {
  const difficultyColor: Record<string, string> = {
    beginner: colors.green,
    intermediate: colors.amber,
    advanced: colors.red,
  };
  const diffColor = difficultyColor[card.difficulty] ?? colors.textMuted;
  const statusColor = STATUS_COLORS[stabilityLabel] ?? colors.textMuted;

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

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgPrimary },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgPrimary,
  },
  loadingText: { color: colors.textMuted, fontSize: 16 },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    backgroundColor: colors.bgCard,
    gap: 14,
  },
  headerMain: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headerDot: { width: 10, height: 10, borderRadius: 5, marginTop: 2 },
  headerCat: { fontSize: 11, fontWeight: '700', letterSpacing: 2.5 },
  headerDesc: { color: colors.textSecondary, fontSize: 15, marginTop: 2 },
  headerStats: { gap: 6 },
  headerStatText: { fontSize: 14 },
  miniTrack: { height: 4, backgroundColor: colors.bgCardAlt, borderRadius: 2, overflow: 'hidden' },
  miniFill: { height: '100%', borderRadius: 2 },
  startBtn: { borderRadius: 12, paddingVertical: 12, paddingHorizontal: 20, alignItems: 'center' },
  startBtnText: { color: '#000000', fontWeight: '800', fontSize: 16 },

  list: { padding: 14, gap: 10 },
  lockedFooter: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.purple + '44',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 2,
  },
  lockedIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.purple + '20',
    borderWidth: 1,
    borderColor: colors.purple + '55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockedIconText: { color: colors.purple, fontSize: 11, fontWeight: '900' },
  lockedTitle: { color: colors.textPrimary, fontSize: 15, fontWeight: '800' },
  lockedText: { color: colors.textSecondary, fontSize: 13, marginTop: 2 },
  lockedArrow: { fontSize: 18, fontWeight: '900' },
  row: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.borderCard,
  },
  cardTitle: { color: colors.textPrimary, fontSize: 17, fontWeight: '700' },
  cardSubtitle: { color: colors.textSecondary, fontSize: 14 },
  tags: { flexDirection: 'row', gap: 6, flexWrap: 'wrap', marginTop: 2 },
  diffTag: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3, borderWidth: 1 },
  diffTagText: { fontSize: 12, fontWeight: '700' },
  tag: { backgroundColor: colors.bgPrimary, borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  tagText: { color: colors.textMuted, fontSize: 12 },
  statusBadge: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusText: { fontSize: 13, fontWeight: '700' },
  });
}
