import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
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
import { ALL_CARDS, getCardById, getCardByTitle, DOMAINS } from '../../src/content';
import { useProStore } from '../../src/hooks/useProStore';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { useThemeColors } from '../../src/hooks/useThemeColors';
import { FREE_TERMS_PER_CATEGORY, isCardAccessible } from '../../src/pro/pro-access';
import { getStabilityLabel } from '../../src/store/srs-store';
import { GRAD_GREEN_CYAN, type ThemeColors } from '../../src/theme';

type CardStyles = ReturnType<typeof createStyles>;

export default function CardScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const router = useRouter();
  const { review, getCardState, startStudy, isLoaded } = useSRSStore();
  const { entitlement, isLoaded: isProLoaded } = useProStore();
  const { colors } = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const ratingConfig = useMemo(
    (): { rating: Grade; label: string; color: string; key: string }[] => [
      { rating: Rating.Again, label: 'Again', color: colors.red,   key: 'again' },
      { rating: Rating.Hard,  label: 'Hard',  color: colors.amber, key: 'hard' },
      { rating: Rating.Good,  label: 'Good',  color: colors.green, key: 'good' },
      { rating: Rating.Easy,  label: 'Easy',  color: colors.cyan,  key: 'easy' },
    ],
    [colors],
  );

  const card = getCardById(id);
  const [revealed, setReveal] = useState(false);
  const [done, setDone] = useState(false);

  const domain = card ? DOMAINS.find((d) => d.id === card.domain) : null;
  const state = card ? getCardState(card.id) : null;
  const canAccessCard = card ? isCardAccessible({
    cardId: card.id,
    cards: ALL_CARDS,
    isPro: entitlement.isPro,
  }) : false;

  useEffect(() => {
    if (card) navigation.setOptions({ title: card.title });
  }, [card, navigation]);

  useEffect(() => {
    if (card && isLoaded && isProLoaded && canAccessCard) {
      void startStudy();
    }
  }, [canAccessCard, card, isLoaded, isProLoaded, startStudy]);

  if (!card || !domain) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Card not found</Text>
      </View>
    );
  }

  if (!isLoaded || !isProLoaded) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Loading card...</Text>
      </View>
    );
  }

  if (!canAccessCard) {
    return (
      <View style={styles.center}>
        <View style={styles.lockedBadge}>
          <Text style={styles.lockedBadgeText}>PRO</Text>
        </View>
        <Text style={styles.doneTitle}>{card.title} is locked</Text>
        <Text style={styles.doneSub}>
          The first {FREE_TERMS_PER_CATEGORY} terms in each category are free. Pro unlocks the full library and removes ads.
        </Text>
        <TouchableOpacity activeOpacity={0.85} onPress={() => router.push('/pro')}>
          <LinearGradient
            colors={['#A78BFA', '#7C3AED']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.proBtn}
          >
            <Text style={styles.proBtnText}>Go Pro</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
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

      <Text style={styles.subtitle}>{card.subtitle}</Text>

      <Section label="What it is" accent={colors.green} styles={styles}>
        <Text style={styles.bodyText}>{card.definition}</Text>
      </Section>

      <Section label="Why it matters" accent={colors.cyan} styles={styles}>
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
            <Text style={styles.revealBtnText}>Reveal Analogy & Rate →</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <>
          <Section label="Analogy" accent={colors.purple} styles={styles}>
            <Text style={styles.bodyText}>{card.analogy}</Text>
          </Section>

          <Section label="Sounds smart to say" accent={colors.cyan} styles={styles}>
            <View style={styles.quoteBox}>
              <Text style={styles.quoteText}>{card.soundsSmartToSay}</Text>
            </View>
          </Section>

          <Section label="Common confusions" accent={colors.amber} styles={styles}>
            {card.commonConfusions.map((c, i) => (
              <View key={i} style={styles.bulletRow}>
                <Text style={[styles.bullet, { color: colors.amber }]}>›</Text>
                <Text style={styles.bulletText}>{c}</Text>
              </View>
            ))}
          </Section>

          {card.relatedTerms.length > 0 && (
            <Section label="Related terms" accent={colors.purple} styles={styles}>
              <View style={styles.pills}>
                {card.relatedTerms.map((term) => {
                  const relatedCard = getCardByTitle(term);
                  return (
                    <RelatedTermPill
                      key={term}
                      term={term}
                      onPress={() => {
                        if (relatedCard) router.push(`/card/${relatedCard.id}`);
                      }}
                      isLinked={Boolean(relatedCard)}
                      styles={styles}
                    />
                  );
                })}
              </View>
            </Section>
          )}

          <View style={styles.ratingBox}>
            <Text style={styles.ratingTitle}>HOW WELL DID YOU KNOW THIS?</Text>
            <View style={styles.ratingRow}>
              {ratingConfig.map((r) => (
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

function RelatedTermPill({
  term,
  isLinked,
  onPress,
  styles,
}: {
  term: string;
  isLinked: boolean;
  onPress: () => void;
  styles: CardStyles;
}) {
  if (!isLinked) {
    return (
      <View style={[styles.pill, styles.pillDisabled]}>
        <Text style={[styles.pillText, styles.pillTextDisabled]}>{term}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.pill}
      onPress={onPress}
      activeOpacity={0.75}
      accessibilityRole="button"
      accessibilityLabel={`Open ${term}`}
    >
      <Text style={styles.pillText}>{term}</Text>
    </TouchableOpacity>
  );
}

function Section({
  label,
  accent,
  children,
  styles,
}: {
  label: string;
  accent: string;
  children: React.ReactNode;
  styles: CardStyles;
}) {
  return (
    <View style={[styles.section, { borderColor: accent + '22' }]}>
      <Text style={[styles.sectionLabel, { color: accent }]}>{label.toUpperCase()}</Text>
      {children}
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgPrimary },
  content: { padding: 16, gap: 14 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 14, backgroundColor: colors.bgPrimary },
  errorText: { color: colors.textMuted, fontSize: 18 },

  doneIconWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.green + '18',
    borderWidth: 1,
    borderColor: colors.green + '44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneIconText: { color: colors.green, fontSize: 34, fontWeight: '800' },
  doneTitle: { color: colors.textPrimary, fontSize: 24, fontWeight: '800' },
  doneSub: { color: colors.textSecondary, fontSize: 16 },
  backBtn: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderCard,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 4,
  },
  backBtnText: { color: colors.textSecondary, fontWeight: '700', fontSize: 16 },
  lockedBadge: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.purple + '55',
    backgroundColor: colors.purple + '18',
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  lockedBadgeText: { color: colors.purple, fontSize: 13, fontWeight: '900', letterSpacing: 1.4 },
  proBtn: {
    borderRadius: 12,
    paddingHorizontal: 36,
    paddingVertical: 13,
    alignItems: 'center',
  },
  proBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },

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
  subtitle: { color: colors.textSecondary, fontSize: 16 },

  section: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    padding: 16,
    gap: 10,
    borderWidth: 1,
  },
  sectionLabel: { fontSize: 11, fontWeight: '700', letterSpacing: 2.5 },
  bodyText: { color: colors.textSecondary, fontSize: 17, lineHeight: 26 },

  revealBtn: { borderRadius: 14, padding: 16, alignItems: 'center' },
  revealBtnText: { color: '#000000', fontSize: 18, fontWeight: '800' },

  quoteBox: {
    backgroundColor: colors.bgPrimary,
    borderRadius: 10,
    padding: 14,
    borderLeftWidth: 3,
    borderLeftColor: colors.cyan,
  },
  quoteText: { color: colors.textSecondary, fontSize: 16, fontStyle: 'italic', lineHeight: 24 },
  bulletRow: { flexDirection: 'row', gap: 8, marginBottom: 6 },
  bullet: { fontSize: 17, lineHeight: 26 },
  bulletText: { color: colors.textSecondary, fontSize: 16, lineHeight: 24, flex: 1 },

  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pill: {
    backgroundColor: colors.bgPrimary,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.purple + '44',
  },
  pillText: { color: colors.purple, fontSize: 14 },
  pillDisabled: { borderColor: colors.borderCard },
  pillTextDisabled: { color: colors.textMuted },

  ratingBox: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    padding: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: colors.borderCard,
    marginTop: 4,
  },
  ratingTitle: { color: colors.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 2.5, textAlign: 'center' },
  ratingRow: { flexDirection: 'row', gap: 8 },
  ratingBtn: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.bgPrimary,
  },
  ratingDot: { width: 20, height: 20, borderRadius: 10 },
  ratingLabel: { fontSize: 13, fontWeight: '700' },
  });
}
