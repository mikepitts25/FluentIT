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
import {
  addPrepPack,
  createPrepPack,
  getPrepPackCards,
  loadPrepPacks,
  removePrepPack,
  savePrepPacks,
  type PrepPack,
} from '../src/meeting-prep/prep-pack-store';

const PREP_PACK_LIMIT = 8;

export default function MeetingPrepScreen() {
  const router = useRouter();
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
          placeholderTextColor="#64748B"
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
}: {
  pack: PrepPack;
  isActive: boolean;
  onPress: () => void;
  onDelete: () => void;
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

function PrepCard({ card, onPress }: { card: Card; onPress: () => void }) {
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  content: { padding: 20, paddingBottom: 48, gap: 18 },
  inputPanel: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 16,
    gap: 12,
  },
  inputLabel: { color: '#94A3B8', fontSize: 14, fontWeight: '800', textTransform: 'uppercase' },
  input: {
    minHeight: 184,
    borderRadius: 12,
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#334155',
    color: '#E2E8F0',
    fontSize: 17,
    lineHeight: 25,
    padding: 14,
  },
  buildButton: {
    backgroundColor: '#38BDF8',
    borderRadius: 12,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buildButtonDisabled: { backgroundColor: '#334155' },
  buildButtonText: { color: '#082F49', fontSize: 17, fontWeight: '800' },
  currentPackNotice: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#38BDF866',
    backgroundColor: '#082F4933',
    padding: 12,
    gap: 3,
  },
  currentPackLabel: { color: '#38BDF8', fontSize: 13, fontWeight: '900', textTransform: 'uppercase' },
  currentPackTitle: { color: '#F8FAFC', fontSize: 17, fontWeight: '800' },
  currentPackMeta: { color: '#94A3B8', fontSize: 14, fontWeight: '700' },
  pack: { gap: 12 },
  packHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  packTitleBlock: { flex: 1, gap: 2 },
  packTitle: { color: '#F8FAFC', fontSize: 22, fontWeight: '800' },
  packDate: { color: '#64748B', fontSize: 14, fontWeight: '700' },
  packCount: { color: '#64748B', fontSize: 14, fontWeight: '700' },
  history: { gap: 12, marginTop: 4 },
  historyHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  historyTitle: { color: '#F8FAFC', fontSize: 19, fontWeight: '800' },
  historySubtitle: { color: '#94A3B8', fontSize: 14, fontWeight: '700', marginTop: 2 },
  packRow: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  packRowActive: { borderColor: '#38BDF8' },
  packRowText: { flex: 1, gap: 4 },
  packRowTitle: { color: '#F8FAFC', fontSize: 17, fontWeight: '800' },
  packRowMeta: { color: '#94A3B8', fontSize: 14, fontWeight: '700' },
  packRowActions: { alignItems: 'flex-end', gap: 8 },
  activeBadge: { color: '#38BDF8', fontSize: 13, fontWeight: '900', textTransform: 'uppercase' },
  activeBadgeHidden: { color: 'transparent' },
  deleteButton: {
    minHeight: 32,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7F1D1D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: { color: '#FCA5A5', fontSize: 14, fontWeight: '800' },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 14,
    gap: 10,
  },
  cardTop: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  domainIcon: { width: 40, height: 40 },
  cardText: { flex: 1, gap: 2 },
  cardTitle: { color: '#F8FAFC', fontSize: 18, fontWeight: '700' },
  cardSubtitle: { color: '#94A3B8', fontSize: 14, lineHeight: 19 },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  domainLabel: { fontSize: 14, fontWeight: '800' },
  difficulty: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  emptyState: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 16,
    gap: 4,
  },
  emptyTitle: { color: '#F8FAFC', fontSize: 17, fontWeight: '700' },
  emptyText: { color: '#94A3B8', fontSize: 15, lineHeight: 21 },
});
