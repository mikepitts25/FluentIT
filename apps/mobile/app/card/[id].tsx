import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Rating, type Grade } from '@fluentit/srs';
import { getCardById, DOMAINS } from '../../src/content';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { getStabilityLabel } from '../../src/store/srs-store';
import { C, GRAD_GREEN_CYAN } from '../../src/theme';

const RATING_CONFIG: { rating: Grade; label: string; color: string; key: string }[] = [
  { rating: Rating.Again, label: 'Again', color: C.red,   key: 'again' },
  { rating: Rating.Hard,  label: 'Hard',  color: C.amber, key: 'hard' },
  { rating: Rating.Good,  label: 'Good',  color: C.green, key: 'good' },
  { rating: Rating.Easy,  label: 'Easy',  color: C.cyan,  key: 'easy' },
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
        <View style={styles.doneIconWrap}>
          <Text style={styles.doneIconText}>✓</Text>
        </View>
        <Text style={styles.doneTitle}>Card Reviewed</Text>
        <Text style={styles.doneSub}>
          Stability: {state ? getStabilityLabel(state) : '—'}
        </Text>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>← Back to Domain</Text>
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
      <View style={[styles.domainChip, { backgroundColor: domain.color + '18', borderColor: domain.color + '44' }]}>
        <View style={[styles.chipDot, { backgroundColor: domain.color }]} />
        <Text style={[styles.chipLabel, { color: domain.color }]}>
          {domain.label.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.subtitle}>{card.subtitle}</Text>

      <Section label="What it is" accent={C.green}>
        <Text style={styles.bodyText}>{card.definition}</Text>
      </Section>

      <Section label="Why it matters" accent={C.cyan}>
        <Text style={styles.bodyText}>{card.whyItMatters}</Text>
      </Section>

      {!revealed ? (
        <TouchableOpacity activeOpacity={0.85} onPress={() => setReveal(true)}>
          <LinearGradient
            colors={GRAD_GREEN_CYAN}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.revealBtn}
          >
            <Text style={styles.revealBtnText}>Reveal Analogy & Quiz →</Text>
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
            {card.commonConfusions.map((c, i) => (
              <View key={i} style={styles.bulletRow}>
                <Text style={[styles.bullet, { color: C.amber }]}>›</Text>
                <Text style={styles.bulletText}>{c}</Text>
              </View>
            ))}
          </Section>

          {card.relatedTerms.length > 0 && (
            <Section label="Related terms" accent={C.purple}>
              <View style={styles.pills}>
                {card.relatedTerms.map((t) => (
                  <View key={t} style={styles.pill}>
                    <Text style={styles.pillText}>{t}</Text>
                  </View>
                ))}
              </View>
            </Section>
          )}

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

      <View style={{ height: 40 }} />
    </ScrollView>
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
      <Text style={[styles.sectionLabel, { color: accent }]}>{label.toUpperCase()}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bgPrimary },
  content: { padding: 16, gap: 14 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 14, backgroundColor: C.bgPrimary },
  errorText: { color: C.textMuted, fontSize: 16 },

  doneIconWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: C.green + '18',
    borderWidth: 1,
    borderColor: C.green + '44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneIconText: { color: C.green, fontSize: 32, fontWeight: '800' },
  doneTitle: { color: C.textPrimary, fontSize: 22, fontWeight: '800' },
  doneSub: { color: C.textSecondary, fontSize: 14 },
  backBtn: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.borderCard,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 4,
  },
  backBtnText: { color: C.textSecondary, fontWeight: '700', fontSize: 14 },

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
  chipLabel: { fontSize: 10, fontWeight: '700', letterSpacing: 1.5 },
  title: { color: C.textPrimary, fontSize: 28, fontWeight: '800' },
  subtitle: { color: C.textSecondary, fontSize: 14 },

  section: {
    backgroundColor: C.bgCard,
    borderRadius: 14,
    padding: 16,
    gap: 10,
    borderWidth: 1,
  },
  sectionLabel: { fontSize: 9, fontWeight: '700', letterSpacing: 2.5 },
  bodyText: { color: C.textSecondary, fontSize: 15, lineHeight: 23 },

  revealBtn: { borderRadius: 14, padding: 16, alignItems: 'center' },
  revealBtnText: { color: '#000000', fontSize: 16, fontWeight: '800' },

  quoteBox: {
    backgroundColor: C.bgPrimary,
    borderRadius: 10,
    padding: 14,
    borderLeftWidth: 3,
    borderLeftColor: C.cyan,
  },
  quoteText: { color: C.textSecondary, fontSize: 14, fontStyle: 'italic', lineHeight: 21 },
  bulletRow: { flexDirection: 'row', gap: 8, marginBottom: 6 },
  bullet: { fontSize: 15, lineHeight: 23 },
  bulletText: { color: C.textSecondary, fontSize: 14, lineHeight: 21, flex: 1 },

  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pill: {
    backgroundColor: C.bgPrimary,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: C.purple + '44',
  },
  pillText: { color: C.purple, fontSize: 12 },

  ratingBox: {
    backgroundColor: C.bgCard,
    borderRadius: 16,
    padding: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: C.borderCard,
    marginTop: 4,
  },
  ratingTitle: { color: C.textMuted, fontSize: 9, fontWeight: '700', letterSpacing: 2.5, textAlign: 'center' },
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
  ratingLabel: { fontSize: 11, fontWeight: '700' },
});
