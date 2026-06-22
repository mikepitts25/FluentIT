import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ALL_CARDS, DOMAINS, type Card } from '../src/content';
import { getDomainIconImage } from '../src/domain-icons';
import { useThemeColors } from '../src/hooks/useThemeColors';
import {
  addPrepPack,
  createPrepPack,
  getPrepPackCards,
  loadPrepPacks,
  removePrepPack,
  savePrepPacks,
  type PrepPack,
} from '../src/meeting-prep/prep-pack-store';
import type { ThemeColors } from '../src/theme';

const PREP_PACK_LIMIT = 8;
type MeetingPrepStyles = ReturnType<typeof createStyles>;

export default function MeetingPrepScreen() {
  const router = useRouter();
  const { colors } = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [agenda, setAgenda] = useState('');
  const [activePack, setActivePack] = useState<PrepPack | null>(null);
  const [packs, setPacks] = useState<PrepPack[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const results = useMemo(
    () => (activePack ? getPrepPackCards(activePack, ALL_CARDS) : []),
    [activePack],
  );
  const canBuild = agenda.trim().length > 0;
  const hasPack = activePack !== null;

  useEffect(() => {
    let isMounted = true;

    loadPrepPacks().then((loadedPacks) => {
      if (!isMounted) return;
      setPacks(loadedPacks);
      setActivePack(loadedPacks[0] ?? null);
      setIsLoaded(true);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleBuildPack = useCallback(() => {
    const pack = createPrepPack({
      agenda,
      cards: ALL_CARDS,
      limit: PREP_PACK_LIMIT,
    });
    if (!pack) return;

    setActivePack(pack);
    setPacks((currentPacks) => {
      const nextPacks = addPrepPack(currentPacks, pack);
      void savePrepPacks(nextPacks);
      return nextPacks;
    });
  }, [agenda]);

  const handleDeletePack = useCallback(
    (packId: string) => {
      setPacks((currentPacks) => {
        const nextPacks = removePrepPack(currentPacks, packId);
        void savePrepPacks(nextPacks);

        if (activePack?.id === packId) {
          setActivePack(nextPacks[0] ?? null);
        }

        return nextPacks;
      });
    },
    [activePack?.id],
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.inputPanel}>
        <Text style={styles.inputLabel}>Agenda or thread</Text>
        <TextInput
          style={styles.input}
          value={agenda}
          onChangeText={setAgenda}
          multiline
          textAlignVertical="top"
          placeholder="Paste a technical agenda, Slack thread, or job-to-be-done."
          placeholderTextColor={colors.textMuted}
        />
        <TouchableOpacity
          style={[styles.buildButton, !canBuild && styles.buildButtonDisabled]}
          disabled={!canBuild}
          onPress={handleBuildPack}
        >
          <Text style={styles.buildButtonText}>Build Prep Pack</Text>
        </TouchableOpacity>

        {activePack && (
          <View style={styles.currentPackNotice}>
            <Text style={styles.currentPackLabel}>Pack built and saved</Text>
            <Text style={styles.currentPackTitle} numberOfLines={1}>
              {activePack.title}
            </Text>
            <Text style={styles.currentPackMeta}>
              {activePack.cardIds.length} concepts in Generated prep packs below
            </Text>
          </View>
        )}
      </View>

      {(isLoaded || packs.length > 0) && (
        <View style={styles.history}>
          <View style={styles.historyHeader}>
            <View style={styles.packTitleBlock}>
              <Text style={styles.historyTitle}>Generated prep packs</Text>
              <Text style={styles.historySubtitle}>Saved packs stay here until deleted.</Text>
            </View>
            <Text style={styles.packCount}>{packs.length} saved</Text>
          </View>

          {packs.length > 0 ? (
            packs.map((pack) => (
              <PrepPackRow
                key={pack.id}
                pack={pack}
                isActive={activePack?.id === pack.id}
                onPress={() => setActivePack(pack)}
                onDelete={() => handleDeletePack(pack.id)}
                styles={styles}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No saved prep packs yet</Text>
              <Text style={styles.emptyText}>
                Paste an agenda and build a pack to keep it here for later.
              </Text>
            </View>
          )}
        </View>
      )}

      {hasPack && (
        <View style={styles.pack}>
          <View style={styles.packHeader}>
            <View style={styles.packTitleBlock}>
              <Text style={styles.packTitle}>{activePack.title}</Text>
              <Text style={styles.packDate}>{formatPackDate(activePack.createdAt)}</Text>
            </View>
            <Text style={styles.packCount}>{results.length} concepts</Text>
          </View>

          {results.length > 0 ? (
            results.map((card) => (
              <PrepCard
                key={card.id}
                card={card}
                onPress={() => router.push(`/card/${card.id}`)}
                styles={styles}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No matching concepts yet</Text>
              <Text style={styles.emptyText}>
                Keep the technical terms in the agenda text and build the pack again.
              </Text>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}

function PrepPackRow({
  pack,
  isActive,
  onPress,
  onDelete,
  styles,
}: {
  pack: PrepPack;
  isActive: boolean;
  onPress: () => void;
  onDelete: () => void;
  styles: MeetingPrepStyles;
}) {
  return (
    <TouchableOpacity
      style={[styles.packRow, isActive && styles.packRowActive]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.packRowText}>
        <Text style={styles.packRowTitle} numberOfLines={1}>
          {pack.title}
        </Text>
        <Text style={styles.packRowMeta}>
          {formatPackDate(pack.createdAt)} - {pack.cardIds.length} concepts
        </Text>
      </View>
      <View style={styles.packRowActions}>
        <Text style={[styles.activeBadge, !isActive && styles.activeBadgeHidden]}>Open</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={(event) => {
            event.stopPropagation();
            onDelete();
          }}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function PrepCard({
  card,
  onPress,
  styles,
}: {
  card: Card;
  onPress: () => void;
  styles: MeetingPrepStyles;
}) {
  const domain = DOMAINS.find((candidate) => candidate.id === card.domain)!;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardTop}>
        <Image
          source={getDomainIconImage(domain.id)}
          style={styles.domainIcon}
          resizeMode="contain"
        />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
        </View>
      </View>
      <View style={styles.cardMeta}>
        <Text style={[styles.domainLabel, { color: domain.color }]}>{domain.label}</Text>
        <Text style={styles.difficulty}>{card.difficulty}</Text>
      </View>
    </TouchableOpacity>
  );
}

function formatPackDate(createdAt: string): string {
  const date = new Date(createdAt);
  if (Number.isNaN(date.getTime())) return 'Saved pack';
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgPrimary },
  content: { padding: 20, paddingBottom: 48, gap: 18 },
  inputPanel: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderCard,
    padding: 16,
    gap: 12,
  },
  inputLabel: { color: colors.textSecondary, fontSize: 14, fontWeight: '800', textTransform: 'uppercase' },
  input: {
    minHeight: 184,
    borderRadius: 12,
    backgroundColor: colors.bgInput,
    borderWidth: 1,
    borderColor: colors.borderCard,
    color: colors.textPrimary,
    fontSize: 17,
    lineHeight: 25,
    padding: 14,
  },
  buildButton: {
    backgroundColor: colors.cyan,
    borderRadius: 12,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buildButtonDisabled: { backgroundColor: colors.bgCardAlt },
  buildButtonText: { color: '#082F49', fontSize: 17, fontWeight: '800' },
  currentPackNotice: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.cyan + '66',
    backgroundColor: colors.cyan + '18',
    padding: 12,
    gap: 3,
  },
  currentPackLabel: { color: colors.cyan, fontSize: 13, fontWeight: '900', textTransform: 'uppercase' },
  currentPackTitle: { color: colors.textPrimary, fontSize: 17, fontWeight: '800' },
  currentPackMeta: { color: colors.textSecondary, fontSize: 14, fontWeight: '700' },
  pack: { gap: 12 },
  packHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  packTitleBlock: { flex: 1, gap: 2 },
  packTitle: { color: colors.textPrimary, fontSize: 22, fontWeight: '800' },
  packDate: { color: colors.textMuted, fontSize: 14, fontWeight: '700' },
  packCount: { color: colors.textMuted, fontSize: 14, fontWeight: '700' },
  history: { gap: 12, marginTop: 4 },
  historyHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  historyTitle: { color: colors.textPrimary, fontSize: 19, fontWeight: '800' },
  historySubtitle: { color: colors.textSecondary, fontSize: 14, fontWeight: '700', marginTop: 2 },
  packRow: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borderCard,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  packRowActive: { borderColor: colors.cyan },
  packRowText: { flex: 1, gap: 4 },
  packRowTitle: { color: colors.textPrimary, fontSize: 17, fontWeight: '800' },
  packRowMeta: { color: colors.textSecondary, fontSize: 14, fontWeight: '700' },
  packRowActions: { alignItems: 'flex-end', gap: 8 },
  activeBadge: { color: colors.cyan, fontSize: 13, fontWeight: '900', textTransform: 'uppercase' },
  activeBadgeHidden: { color: 'transparent' },
  deleteButton: {
    minHeight: 32,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.red + '66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: { color: colors.red, fontSize: 14, fontWeight: '800' },
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borderCard,
    padding: 14,
    gap: 10,
  },
  cardTop: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  domainIcon: { width: 40, height: 40 },
  cardText: { flex: 1, gap: 2 },
  cardTitle: { color: colors.textPrimary, fontSize: 18, fontWeight: '700' },
  cardSubtitle: { color: colors.textSecondary, fontSize: 14, lineHeight: 19 },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  domainLabel: { fontSize: 14, fontWeight: '800' },
  difficulty: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  emptyState: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borderCard,
    padding: 16,
    gap: 4,
  },
  emptyTitle: { color: colors.textPrimary, fontSize: 17, fontWeight: '700' },
  emptyText: { color: colors.textSecondary, fontSize: 15, lineHeight: 21 },
  });
}
