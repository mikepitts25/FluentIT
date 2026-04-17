import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import { Rating, type Grade } from 'ts-fsrs';
import { getCardById, DOMAINS } from '../../src/content';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { getStabilityLabel } from '../../src/store/srs-store';

const RATING_CONFIG: { rating: Grade; label: string; color: string; emoji: string }[] = [
  { rating: Rating.Again, label: 'Again', color: '#EF4444', emoji: '😬' },
  { rating: Rating.Hard, label: 'Hard', color: '#F59E0B', emoji: '😅' },
  { rating: Rating.Good, label: 'Good', color: '#10B981', emoji: '👍' },
  { rating: Rating.Easy, label: 'Easy', color: '#38BDF8', emoji: '⚡' },
];

export default function CardScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const router = useRouter();
  const { review, getCardState, startStudy } = useSRSStore();

  const card = getCardById(id);
  const [revealed, setReveal] = useState(false);
  const [done, setDone] = useState(false);

  const domain = card ? DOMAINS.find((d) => d.id === card.domain) : null;
  const state = card ? getCardState(card.id) : null;

  useEffect(() => {
    if (card) navigation.setOptions({ title: card.title });
    startStudy();
  }, [card]);

  if (!card || !domain) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Card not found</Text>
      </View>
    );
  }

  if (done) {
    return (
      <View style={styles.center}>
        <Text style={{ fontSize: 48 }}>✅</Text>
        <Text style={styles.doneTitle}>Card reviewed!</Text>
        <Text style={styles.doneSub}>
          Stability: {state ? getStabilityLabel(state) : '—'}
        </Text>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>Back to Domain</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleRate = async (grade: Grade) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    await review(card.id, grade);
    setDone(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Domain chip */}
      <View style={[styles.domainChip, { backgroundColor: domain.color + '22' }]}>
        <Text style={{ fontSize: 14 }}>{domain.icon}</Text>
        <Text style={[styles.domainLabel, { color: domain.color }]}>{domain.label}</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.subtitle}>{card.subtitle}</Text>

      {/* Definition */}
      <Section label="What it is" icon="📖">
        <Text style={styles.bodyText}>{card.definition}</Text>
      </Section>

      {/* Why it matters */}
      <Section label="Why it matters" icon="💡">
        <Text style={styles.bodyText}>{card.whyItMatters}</Text>
      </Section>

      {/* Reveal button or full content */}
      {!revealed ? (
        <TouchableOpacity style={styles.revealButton} onPress={() => setReveal(true)}>
          <Text style={styles.revealButtonText}>Reveal Analogy & Quiz →</Text>
        </TouchableOpacity>
      ) : (
        <>
          <Section label="Analogy" icon="🧠">
            <Text style={styles.bodyText}>{card.analogy}</Text>
          </Section>

          <Section label="Sounds smart to say" icon="🗣️">
            <View style={styles.quoteBox}>
              <Text style={styles.quoteText}>{card.soundsSmartToSay}</Text>
            </View>
          </Section>

          <Section label="Common confusions" icon="⚠️">
            {card.commonConfusions.map((c, i) => (
              <View key={i} style={styles.bulletRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{c}</Text>
              </View>
            ))}
          </Section>

          {card.relatedTerms.length > 0 && (
            <Section label="Related terms" icon="🔗">
              <View style={styles.pills}>
                {card.relatedTerms.map((t) => (
                  <View key={t} style={styles.pill}>
                    <Text style={styles.pillText}>{t}</Text>
                  </View>
                ))}
              </View>
            </Section>
          )}

          {/* SRS Rating */}
          <View style={styles.ratingBox}>
            <Text style={styles.ratingTitle}>How well did you know this?</Text>
            <View style={styles.ratingRow}>
              {RATING_CONFIG.map((r) => (
                <TouchableOpacity
                  key={r.label}
                  style={[styles.ratingBtn, { borderColor: r.color }]}
                  onPress={() => handleRate(r.rating)}
                >
                  <Text style={{ fontSize: 20 }}>{r.emoji}</Text>
                  <Text style={[styles.ratingLabel, { color: r.color }]}>{r.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </>
      )}

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

function Section({
  label,
  icon,
  children,
}: {
  label: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionIcon}>{icon}</Text>
        <Text style={styles.sectionLabel}>{label}</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  content: { padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  errorText: { color: '#94A3B8', fontSize: 16 },
  domainChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 16,
  },
  domainLabel: { fontSize: 13, fontWeight: '600' },
  title: { color: '#F8FAFC', fontSize: 30, fontWeight: '800', marginBottom: 4 },
  subtitle: { color: '#64748B', fontSize: 15, marginBottom: 24 },
  section: {
    marginBottom: 20,
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 16,
  },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 },
  sectionIcon: { fontSize: 16 },
  sectionLabel: { color: '#94A3B8', fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },
  bodyText: { color: '#CBD5E1', fontSize: 15, lineHeight: 23 },
  quoteBox: {
    backgroundColor: '#0F172A',
    borderRadius: 10,
    padding: 14,
    borderLeftWidth: 3,
    borderLeftColor: '#38BDF8',
  },
  quoteText: { color: '#E2E8F0', fontSize: 14, fontStyle: 'italic', lineHeight: 21 },
  bulletRow: { flexDirection: 'row', gap: 8, marginBottom: 10 },
  bullet: { color: '#38BDF8', fontSize: 15, lineHeight: 23 },
  bulletText: { color: '#CBD5E1', fontSize: 14, lineHeight: 21, flex: 1 },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pill: { backgroundColor: '#0F172A', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5 },
  pillText: { color: '#38BDF8', fontSize: 13 },
  revealButton: {
    backgroundColor: '#1D4ED8',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  revealButtonText: { color: '#F8FAFC', fontSize: 16, fontWeight: '700' },
  ratingBox: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
  },
  ratingTitle: { color: '#94A3B8', fontSize: 13, fontWeight: '600', textAlign: 'center', marginBottom: 16 },
  ratingRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  ratingBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#0F172A',
  },
  ratingLabel: { fontSize: 12, fontWeight: '700' },
  doneTitle: { color: '#F8FAFC', fontSize: 22, fontWeight: '800' },
  doneSub: { color: '#94A3B8', fontSize: 15 },
  backBtn: {
    marginTop: 8,
    backgroundColor: '#1D4ED8',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backBtnText: { color: '#F8FAFC', fontWeight: '700', fontSize: 15 },
});
