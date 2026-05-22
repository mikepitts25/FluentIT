import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Rating, type Grade } from '@fluentit/srs';
import { ALL_CARDS, DOMAINS, type Card, type Domain } from '../src/content';
import { getDomainIconImage } from '../src/domain-icons';
import { useSRSStore } from '../src/hooks/useSRSStore';
import { usePreferencesStore } from '../src/hooks/usePreferencesStore';
import { buildSessionQueue, type SessionItem } from '../src/session/session-queue';

const RATING_CONFIG: { rating: Grade; label: string; color: string; emoji: string }[] = [
  { rating: Rating.Again, label: 'Again', color: '#EF4444', emoji: '😬' },
  { rating: Rating.Hard, label: 'Hard', color: '#F59E0B', emoji: '😅' },
  { rating: Rating.Good, label: 'Good', color: '#10B981', emoji: '👍' },
  { rating: Rating.Easy, label: 'Easy', color: '#38BDF8', emoji: '⚡' },
];

export default function SessionScreen() {
  const router = useRouter();
  const { domain: domainParam } = useLocalSearchParams<{ domain?: string }>();
  const { states, isLoaded, review, startStudy, streak } = useSRSStore();
  const {
    preferences,
    isLoaded: arePreferencesLoaded,
  } = usePreferencesStore();
  const [queue, setQueue] = useState<SessionItem[] | null>(null);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [learnedCount, setLearnedCount] = useState(0);

  const domain = useMemo(
    () => DOMAINS.find((item) => item.id === domainParam),
    [domainParam],
  );
  const sessionDomain = domain?.id as Domain | undefined;

  useEffect(() => {
    if (isLoaded && arePreferencesLoaded) {
      startStudy();
    }
  }, [arePreferencesLoaded, isLoaded, startStudy]);

  useEffect(() => {
    if (isLoaded && arePreferencesLoaded && queue === null) {
      setQueue(
        buildSessionQueue({
          cards: ALL_CARDS,
          states,
          domain: sessionDomain,
          selectedDomains: preferences.selectedDomains,
          limit: preferences.dailySessionSize,
        }),
      );
    }
  }, [arePreferencesLoaded, isLoaded, preferences, queue, sessionDomain, states]);

  if (!isLoaded || !arePreferencesLoaded || queue === null) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading session...</Text>
      </View>
    );
  }

  if (queue.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={{ fontSize: 52 }}>🎉</Text>
        <Text style={styles.doneTitle}>No cards waiting</Text>
        <Text style={styles.doneSub}>
          You are caught up{domain ? ` in ${domain.label}` : ''}. Pick another domain
          or come back later.
        </Text>
        <TouchableOpacity style={styles.primaryButton} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.primaryButtonText}>Back to Learn</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (index >= queue.length) {
    return (
      <View style={styles.center}>
        <Text style={{ fontSize: 52 }}>✅</Text>
        <Text style={styles.doneTitle}>Session complete</Text>
        <Text style={styles.doneSub}>
          {reviewedCount} reviewed · {learnedCount} new · {streak.currentStreak} day streak
        </Text>
        <View style={styles.doneActions}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => router.replace('/(tabs)')}>
            <Text style={styles.primaryButtonText}>Back to Learn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.replace('/(tabs)/progress')}
          >
            <Text style={styles.secondaryButtonText}>Progress</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const item = queue[index];
  const card = item.card;
  const cardDomain = DOMAINS.find((candidate) => candidate.id === card.domain)!;
  const progress = `${index + 1} of ${queue.length}`;

  const handleRate = async (grade: Grade) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    await review(card.id, grade);
    if (item.kind === 'review') {
      setReviewedCount((count) => count + 1);
    } else {
      setLearnedCount((count) => count + 1);
    }
    setRevealed(false);
    setIndex((current) => current + 1);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.sessionHeader}>
        <View>
          <Text style={styles.sessionEyebrow}>
            {item.kind === 'review' ? 'Review' : 'New concept'}
          </Text>
          <Text style={styles.sessionProgress}>{progress}</Text>
        </View>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${Math.round(((index + 1) / queue.length) * 100)}%` },
            ]}
          />
        </View>
      </View>

      <ConceptCard
        card={card}
        domainColor={cardDomain.color}
        domainId={cardDomain.id}
        domainLabel={cardDomain.label}
      />

      {!revealed ? (
        <TouchableOpacity style={styles.revealButton} onPress={() => setRevealed(true)}>
          <Text style={styles.revealButtonText}>Reveal Analogy & Rating</Text>
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
            {card.commonConfusions.map((confusion) => (
              <View key={confusion} style={styles.bulletRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{confusion}</Text>
              </View>
            ))}
          </Section>

          <View style={styles.ratingBox}>
            <Text style={styles.ratingTitle}>How well did you know this?</Text>
            <View style={styles.ratingRow}>
              {RATING_CONFIG.map((rating) => (
                <TouchableOpacity
                  key={rating.label}
                  style={[styles.ratingButton, { borderColor: rating.color }]}
                  onPress={() => handleRate(rating.rating)}
                >
                  <Text style={{ fontSize: 20 }}>{rating.emoji}</Text>
                  <Text style={[styles.ratingLabel, { color: rating.color }]}>
                    {rating.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

function ConceptCard({
  card,
  domainColor,
  domainId,
  domainLabel,
}: {
  card: Card;
  domainColor: string;
  domainId: Domain;
  domainLabel: string;
}) {
  return (
    <>
      <View style={[styles.domainChip, { backgroundColor: domainColor + '22' }]}>
        <Image
          source={getDomainIconImage(domainId)}
          style={styles.domainChipIcon}
          resizeMode="contain"
        />
        <Text style={[styles.domainLabel, { color: domainColor }]}>{domainLabel}</Text>
      </View>
      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.subtitle}>{card.subtitle}</Text>
      <Section label="What it is" icon="📖">
        <Text style={styles.bodyText}>{card.definition}</Text>
      </Section>
      <Section label="Why it matters" icon="💡">
        <Text style={styles.bodyText}>{card.whyItMatters}</Text>
      </Section>
    </>
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
  content: { padding: 20, paddingBottom: 48 },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
    padding: 28,
    backgroundColor: '#0F172A',
  },
  loadingText: { color: '#94A3B8', fontSize: 16 },
  sessionHeader: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 14,
    gap: 12,
    marginBottom: 20,
  },
  sessionEyebrow: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sessionProgress: { color: '#F8FAFC', fontSize: 18, fontWeight: '800', marginTop: 2 },
  progressTrack: {
    height: 8,
    backgroundColor: '#0F172A',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: '#38BDF8', borderRadius: 4 },
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
  domainChipIcon: { width: 20, height: 20 },
  domainLabel: { fontSize: 13, fontWeight: '600', textTransform: 'capitalize' },
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
  sectionLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  bodyText: { color: '#CBD5E1', fontSize: 15, lineHeight: 23 },
  revealButton: {
    backgroundColor: '#1D4ED8',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  revealButtonText: { color: '#F8FAFC', fontSize: 16, fontWeight: '700' },
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
  ratingBox: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
  },
  ratingTitle: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  ratingRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  ratingButton: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#0F172A',
  },
  ratingLabel: { fontSize: 12, fontWeight: '700' },
  doneTitle: { color: '#F8FAFC', fontSize: 24, fontWeight: '800', textAlign: 'center' },
  doneSub: { color: '#94A3B8', fontSize: 15, textAlign: 'center', lineHeight: 22 },
  doneActions: { flexDirection: 'row', gap: 10, marginTop: 6 },
  primaryButton: {
    backgroundColor: '#1D4ED8',
    borderRadius: 12,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  primaryButtonText: { color: '#F8FAFC', fontWeight: '700', fontSize: 15 },
  secondaryButton: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  secondaryButtonText: { color: '#CBD5E1', fontWeight: '700', fontSize: 15 },
});
