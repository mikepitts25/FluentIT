import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Rating, type Grade } from '@fluentit/srs';
import { ALL_CARDS, DOMAINS, type Card, type Domain } from '../src/content';
import { useSRSStore } from '../src/hooks/useSRSStore';
import { usePreferencesStore } from '../src/hooks/usePreferencesStore';
import { SessionCompleteNativeAd } from '../src/ads/session-complete-native-ad';
import { buildSessionQueue, type SessionItem } from '../src/session/session-queue';
import { C, GRAD_GREEN_CYAN } from '../src/theme';

const RATING_CONFIG: { rating: Grade; label: string; color: string; key: string }[] = [
  { rating: Rating.Again, label: 'Again', color: C.red,   key: 'again' },
  { rating: Rating.Hard,  label: 'Hard',  color: C.amber, key: 'hard' },
  { rating: Rating.Good,  label: 'Good',  color: C.green, key: 'good' },
  { rating: Rating.Easy,  label: 'Easy',  color: C.cyan,  key: 'easy' },
];

export default function SessionScreen() {
  const router = useRouter();
  const { domain: domainParam } = useLocalSearchParams<{ domain?: string }>();
  const { states, isLoaded, review, startStudy, streak } = useSRSStore();
  const { preferences, isLoaded: arePreferencesLoaded } = usePreferencesStore();
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
    if (isLoaded && arePreferencesLoaded) startStudy();
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
        <Text style={styles.doneIcon}>◈</Text>
        <Text style={styles.doneTitle}>No cards waiting</Text>
        <Text style={styles.doneSub}>
          You're caught up{domain ? ` in ${domain.label}` : ''}. Pick another domain or come back later.
        </Text>
        <TouchableOpacity activeOpacity={0.85} onPress={() => router.replace('/(tabs)')}>
          <LinearGradient colors={GRAD_GREEN_CYAN} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradBtn}>
            <Text style={styles.gradBtnText}>Back to Learn</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  if (index >= queue.length) {
    return (
      <View style={styles.center}>
        <Text style={styles.doneIcon}>✓</Text>
        <Text style={styles.doneTitle}>Session Complete</Text>
        <Text style={styles.doneSub}>
          {reviewedCount} reviewed · {learnedCount} new · {streak.currentStreak} day streak
        </Text>
        <SessionCompleteNativeAd />
        <View style={styles.doneActions}>
          <TouchableOpacity activeOpacity={0.85} onPress={() => router.replace('/(tabs)')}>
            <LinearGradient colors={GRAD_GREEN_CYAN} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradBtn}>
              <Text style={styles.gradBtnText}>Back to Learn</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ghostBtn}
            onPress={() => router.replace('/(tabs)/progress')}
          >
            <Text style={styles.ghostBtnText}>Progress →</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const item = queue[index];
  const card = item.card;
  const cardDomain = DOMAINS.find((d) => d.id === card.domain)!;
  const progress = index + 1;
  const total = queue.length;

  const handleRate = async (grade: Grade) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    await review(card.id, grade);
    if (item.kind === 'review') setReviewedCount((n) => n + 1);
    else setLearnedCount((n) => n + 1);
    setRevealed(false);
    setIndex((n) => n + 1);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Progress header */}
      <View style={styles.progressHeader}>
        <View style={styles.progressMeta}>
          <Text style={[styles.progressEyebrow, { color: cardDomain.color + 'AA' }]}>
            {item.kind === 'review' ? '◎ REVIEW' : '⊞ NEW CONCEPT'}
          </Text>
          <Text style={styles.progressCount}>{progress} of {total}</Text>
        </View>
        <View style={styles.progressTrack}>
          {Array.from({ length: total }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.progressPip,
                i < progress ? styles.progressPipDone : styles.progressPipEmpty,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Concept card */}
      <ConceptCard card={card} domainColor={cardDomain.color} domainLabel={cardDomain.label} />

      {!revealed ? (
        <TouchableOpacity activeOpacity={0.85} onPress={() => setRevealed(true)}>
          <LinearGradient
            colors={GRAD_GREEN_CYAN}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.revealBtn}
          >
            <Text style={styles.revealBtnText}>Reveal Analogy & Rate</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <>
          <Section label="Analogy" accent={C.purple}>
            <Text style={styles.bodyText}>{card.analogy}</Text>
          </Section>

          <Section label="Sounds smart to say" accent={C.cyan}>
            <View style={styles.quoteBox}>
              <Text style={styles.quoteText}>{card.soundsSmartToSay}</Text>
            </View>
          </Section>

          <Section label="Common confusions" accent={C.amber}>
            {card.commonConfusions.map((confusion) => (
              <View key={confusion} style={styles.bulletRow}>
                <Text style={[styles.bullet, { color: C.amber }]}>›</Text>
                <Text style={styles.bulletText}>{confusion}</Text>
              </View>
            ))}
          </Section>

          <View style={styles.ratingBox}>
            <Text style={styles.ratingTitle}>HOW WELL DID YOU KNOW THIS?</Text>
            <View style={styles.ratingRow}>
              {RATING_CONFIG.map((r) => (
                <TouchableOpacity
                  key={r.key}
                  style={[styles.ratingBtn, { borderColor: r.color + '66' }]}
                  onPress={() => handleRate(r.rating)}
                  activeOpacity={0.75}
                >
                  <View style={[styles.ratingDot, { backgroundColor: r.color + '22' }]} />
                  <Text style={[styles.ratingLabel, { color: r.color }]}>{r.label}</Text>
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
  domainLabel,
}: {
  card: Card;
  domainColor: string;
  domainLabel: string;
}) {
  return (
    <>
      <View style={[styles.domainChip, { backgroundColor: domainColor + '18', borderColor: domainColor + '44' }]}>
        <View style={[styles.chipDot, { backgroundColor: domainColor }]} />
        <Text style={[styles.chipLabel, { color: domainColor }]}>
          {domainLabel.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.cardTitle}>{card.title}</Text>
      <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
      <Section label="What it is" accent={C.green}>
        <Text style={styles.bodyText}>{card.definition}</Text>
      </Section>
      <Section label="Why it matters" accent={C.cyan}>
        <Text style={styles.bodyText}>{card.whyItMatters}</Text>
      </Section>
    </>
  );
}

function Section({
  label,
  accent,
  children,
}: {
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <View style={[styles.section, { borderColor: accent + '22' }]}>
      <Text style={[styles.sectionLabel, { color: accent }]}>
        {label.toUpperCase()}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bgPrimary },
  content: { padding: 16, paddingBottom: 48, gap: 14 },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
    padding: 28,
    backgroundColor: C.bgPrimary,
  },
  loadingText: { color: C.textMuted, fontSize: 16, letterSpacing: 1 },
  doneIcon: { color: C.green, fontSize: 54, fontWeight: '800' },
  doneTitle: { color: C.textPrimary, fontSize: 26, fontWeight: '800', textAlign: 'center' },
  doneSub: { color: C.textSecondary, fontSize: 16, textAlign: 'center', lineHeight: 25 },
  doneActions: { gap: 10, alignItems: 'center' },
  gradBtn: { borderRadius: 14, paddingHorizontal: 28, paddingVertical: 14, minWidth: 200, alignItems: 'center' },
  gradBtnText: { color: '#000000', fontWeight: '800', fontSize: 17 },
  ghostBtn: {
    borderRadius: 14,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: C.borderCard,
    minWidth: 200,
    alignItems: 'center',
  },
  ghostBtnText: { color: C.textSecondary, fontWeight: '700', fontSize: 17 },

  progressHeader: {
    backgroundColor: C.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: C.borderCard,
    padding: 14,
    gap: 10,
  },
  progressMeta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progressEyebrow: { fontSize: 12, fontWeight: '700', letterSpacing: 2 },
  progressCount: { color: C.textSecondary, fontSize: 14, fontWeight: '600' },
  progressTrack: { flexDirection: 'row', gap: 3, flexWrap: 'wrap' },
  progressPip: { height: 4, flex: 1, borderRadius: 2, minWidth: 8 },
  progressPipDone: { backgroundColor: C.green },
  progressPipEmpty: { backgroundColor: C.bgCardAlt },

  domainChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    alignSelf: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  chipDot: { width: 6, height: 6, borderRadius: 3 },
  chipLabel: { fontSize: 12, fontWeight: '700', letterSpacing: 1.5 },
  cardTitle: { color: C.textPrimary, fontSize: 30, fontWeight: '800' },
  cardSubtitle: { color: C.textSecondary, fontSize: 16, marginTop: 2 },

  section: {
    backgroundColor: C.bgCard,
    borderRadius: 14,
    padding: 16,
    gap: 10,
    borderWidth: 1,
  },
  sectionLabel: { fontSize: 11, fontWeight: '700', letterSpacing: 2.5 },
  bodyText: { color: C.textSecondary, fontSize: 17, lineHeight: 26 },

  revealBtn: { borderRadius: 14, padding: 16, alignItems: 'center' },
  revealBtnText: { color: '#000000', fontSize: 18, fontWeight: '800' },

  quoteBox: {
    backgroundColor: C.bgPrimary,
    borderRadius: 10,
    padding: 14,
    borderLeftWidth: 3,
    borderLeftColor: C.cyan,
  },
  quoteText: { color: C.textSecondary, fontSize: 16, fontStyle: 'italic', lineHeight: 24 },
  bulletRow: { flexDirection: 'row', gap: 8, marginBottom: 6 },
  bullet: { fontSize: 17, lineHeight: 26 },
  bulletText: { color: C.textSecondary, fontSize: 16, lineHeight: 24, flex: 1 },

  ratingBox: {
    backgroundColor: C.bgCard,
    borderRadius: 16,
    padding: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: C.borderCard,
  },
  ratingTitle: { color: C.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 2.5, textAlign: 'center' },
  ratingRow: { flexDirection: 'row', gap: 8 },
  ratingBtn: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    gap: 6,
    backgroundColor: C.bgPrimary,
  },
  ratingDot: { width: 20, height: 20, borderRadius: 10 },
  ratingLabel: { fontSize: 13, fontWeight: '700' },
});
