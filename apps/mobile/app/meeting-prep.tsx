import { useMemo, useState } from 'react';
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
import { matchAgendaCards } from '../src/meeting-prep/agenda-matcher';

const PREP_PACK_LIMIT = 8;

export default function MeetingPrepScreen() {
  const router = useRouter();
  const [agenda, setAgenda] = useState('');
  const [submittedAgenda, setSubmittedAgenda] = useState('');
  const results = useMemo(
    () => matchAgendaCards(submittedAgenda, ALL_CARDS, PREP_PACK_LIMIT),
    [submittedAgenda],
  );
  const canBuild = agenda.trim().length > 0;
  const hasPack = submittedAgenda.trim().length > 0;

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
          onPress={() => setSubmittedAgenda(agenda)}
        >
          <Text style={styles.buildButtonText}>Build Prep Pack</Text>
        </TouchableOpacity>
      </View>

      {hasPack && (
        <View style={styles.pack}>
          <View style={styles.packHeader}>
            <Text style={styles.packTitle}>Prep pack</Text>
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
  inputLabel: { color: '#94A3B8', fontSize: 12, fontWeight: '800', textTransform: 'uppercase' },
  input: {
    minHeight: 184,
    borderRadius: 12,
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#334155',
    color: '#E2E8F0',
    fontSize: 15,
    lineHeight: 22,
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
  buildButtonText: { color: '#082F49', fontSize: 15, fontWeight: '800' },
  pack: { gap: 12 },
  packHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  packTitle: { color: '#F8FAFC', fontSize: 20, fontWeight: '800' },
  packCount: { color: '#64748B', fontSize: 12, fontWeight: '700' },
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
  cardTitle: { color: '#F8FAFC', fontSize: 16, fontWeight: '700' },
  cardSubtitle: { color: '#94A3B8', fontSize: 12, lineHeight: 16 },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  domainLabel: { fontSize: 12, fontWeight: '800' },
  difficulty: {
    color: '#64748B',
    fontSize: 11,
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
  emptyTitle: { color: '#F8FAFC', fontSize: 15, fontWeight: '700' },
  emptyText: { color: '#94A3B8', fontSize: 13, lineHeight: 18 },
});
