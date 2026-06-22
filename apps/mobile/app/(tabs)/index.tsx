import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ALL_CARDS, DOMAINS } from '../../src/content';
import { getDomainIconImage } from '../../src/domain-icons';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { useProStore } from '../../src/hooks/useProStore';
import { usePreferencesStore } from '../../src/hooks/usePreferencesStore';
import { getVisibleLearnDomains } from '../../src/learn/domain-search';
import { FREE_TERMS_PER_CATEGORY, getAccessibleCards, getLockedCardCount } from '../../src/pro/pro-access';
import { GRAD_GREEN_CYAN, getThemeColors, type ThemeColors } from '../../src/theme';
import type { DomainMeta } from '../../src/content';

type HomeStyles = ReturnType<typeof createStyles>;

const AGENDA_PREP_GRADIENT = ['#A78BFA', '#7C3AED'] as const;

export default function HomeScreen() {
  const router = useRouter();
  const { dueCardIds } = useSRSStore();
  const { entitlement, isLoaded: isProLoaded } = useProStore();
  const { preferences, toggleDomain } = usePreferencesStore();
  const [searchQuery, setSearchQuery] = useState('');
  const colors = getThemeColors(preferences.colorMode);
  const styles = useMemo(() => createStyles(colors), [colors]);
  const selectedCount = preferences.selectedDomains.length;
  const isPro = entitlement.isPro;
  const accessibleCards = useMemo(
    () => getAccessibleCards({ cards: ALL_CARDS, isPro }),
    [isPro],
  );
  const lockedCount = getLockedCardCount({ cards: ALL_CARDS, isPro });
  const visibleDomains = useMemo(
    () => getVisibleLearnDomains({
      domains: DOMAINS,
      cards: accessibleCards,
      query: searchQuery,
    }),
    [accessibleCards, searchQuery],
  );
  const isSearching = searchQuery.trim().length > 0;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.searchWrap}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          accessibilityLabel="Search keyword or topic"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
          placeholder="Search keyword or topic"
          placeholderTextColor={colors.textMuted}
          returnKeyType="search"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Primary CTA */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => router.push('/session')}
      >
        <LinearGradient
          colors={GRAD_GREEN_CYAN}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.primaryCta}
        >
          <View>
            <Text style={styles.primaryCtaTitle}>Start 5-min Session</Text>
            <Text style={styles.primaryCtaSub}>
              {selectedCount > 0
                ? `${selectedCount} focus ${selectedCount === 1 ? 'domain' : 'domains'}`
                : 'Reviews first, then new concepts'}
            </Text>
          </View>
          <Text style={styles.primaryCtaArrow}>▶</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Meeting Prep */}
      <TouchableOpacity
        onPress={() => router.push('/meeting-prep')}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={AGENDA_PREP_GRADIENT}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.secondaryCta}
        >
          <View>
            <Text style={styles.secondaryCtaTitle}>Agenda Prep</Text>
            <Text style={styles.secondaryCtaSub}>Turn agenda terms into a concept pack</Text>
          </View>
          <Text style={styles.secondaryCtaArrow}>→</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Due review nudge */}
      {dueCardIds.length > 0 && (
        <TouchableOpacity
          style={styles.reviewNudge}
          onPress={() => router.push('/(tabs)/review')}
          activeOpacity={0.8}
        >
          <View style={styles.reviewNudgeDot} />
          <Text style={styles.reviewNudgeText}>
            {dueCardIds.length} cards due for review
          </Text>
          <Text style={styles.reviewNudgeArrow}>→</Text>
        </TouchableOpacity>
      )}

      {isProLoaded && !isPro && (
        <TouchableOpacity
          style={styles.proNudge}
          activeOpacity={0.8}
          onPress={() => router.push('/pro')}
        >
          <View style={styles.proNudgeIcon}>
            <Text style={styles.proNudgeIconText}>PRO</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.proNudgeTitle}>
              {FREE_TERMS_PER_CATEGORY} free terms per category
            </Text>
            <Text style={styles.proNudgeText}>
              Go Pro to unlock {lockedCount} more and remove ads.
            </Text>
          </View>
          <Text style={styles.proNudgeArrow}>→</Text>
        </TouchableOpacity>
      )}

      {/* Domain grid */}
      <Text style={styles.sectionLabel}>
        {isSearching ? 'MATCHING TOPICS' : 'KNOWLEDGE BASE'}
      </Text>
      {visibleDomains.length > 0 ? (
        <View style={styles.grid}>
          {visibleDomains.map((d) => {
            const isFocused = preferences.selectedDomains.includes(d.id);
            return (
              <DomainCard
                key={d.id}
                domain={d}
                isFocused={isFocused}
                onPress={() => router.push(`/domain/${d.id}`)}
                onToggleFocus={() => toggleDomain(d.id)}
                colors={colors}
                styles={styles}
              />
            );
          })}
        </View>
      ) : (
        <View style={styles.emptySearch}>
          <Text style={styles.emptySearchTitle}>No matching topics</Text>
          <Text style={styles.emptySearchText}>
            Try another keyword, topic, or category name.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

function DomainCard({
  domain,
  isFocused,
  onPress,
  onToggleFocus,
  colors,
  styles,
}: {
  domain: DomainMeta;
  isFocused: boolean;
  onPress: () => void;
  onToggleFocus: () => void;
  colors: ThemeColors;
  styles: HomeStyles;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.domainCard,
        { borderColor: isFocused ? domain.color + '66' : colors.borderCard },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Category label */}
      <View style={styles.domainCatRow}>
        <View style={[styles.domainDot, { backgroundColor: domain.color }]} />
        <Text style={[styles.domainCat, { color: domain.color + 'AA' }]}>
          {domain.label.toUpperCase()}
        </Text>
      </View>

      <Image
        source={getDomainIconImage(domain.id)}
        style={styles.domainIcon}
        resizeMode="contain"
      />
      <Text style={styles.domainDesc} numberOfLines={2}>{domain.description}</Text>

      <View style={styles.domainFooter}>
        <TouchableOpacity
          style={[
            styles.focusButton,
            isFocused && { backgroundColor: domain.color + '22', borderColor: domain.color + '66' },
          ]}
          onPress={onToggleFocus}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={[styles.focusButtonText, isFocused && { color: domain.color }]}>
            {isFocused ? 'Focused' : 'Focus'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgPrimary },
  content: { padding: 16, paddingBottom: 48, gap: 12 },

  searchWrap: {
    minHeight: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borderCard,
    backgroundColor: colors.bgInput,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 8,
  },
  searchIcon: {
    color: colors.textMuted,
    fontSize: 21,
    fontWeight: '800',
  },
  searchInput: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 16,
    minHeight: 46,
    paddingVertical: 0,
  },

  primaryCta: {
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  primaryCtaTitle: { color: '#000000', fontSize: 21, fontWeight: '800' },
  primaryCtaSub: { color: '#00000066', fontSize: 16, marginTop: 3 },
  primaryCtaArrow: { color: '#000000', fontSize: 25, fontWeight: '300' },

  secondaryCta: {
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondaryCtaTitle: { color: '#FFFFFF', fontSize: 19, fontWeight: '800' },
  secondaryCtaSub: { color: 'rgba(255,255,255,0.76)', fontSize: 16, marginTop: 3 },
  secondaryCtaArrow: { color: '#FFFFFF', fontSize: 23, fontWeight: '700' },

  reviewNudge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.bgCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderActive,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  reviewNudgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.green,
  },
  reviewNudgeText: { flex: 1, color: colors.green, fontSize: 16, fontWeight: '600' },
  reviewNudgeArrow: { color: colors.green, fontSize: 19 },

  proNudge: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.purple + '44',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  proNudgeIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.purple + '20',
    borderWidth: 1,
    borderColor: colors.purple + '55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  proNudgeIconText: { color: colors.purple, fontSize: 11, fontWeight: '900' },
  proNudgeTitle: { color: colors.textPrimary, fontSize: 15, fontWeight: '800' },
  proNudgeText: { color: colors.textSecondary, fontSize: 13, marginTop: 2 },
  proNudgeArrow: { color: colors.purple, fontSize: 18, fontWeight: '900' },

  sectionLabel: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2.5,
    marginTop: 4,
    marginBottom: 2,
  },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },

  emptySearch: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borderCard,
    padding: 16,
    gap: 4,
  },
  emptySearchTitle: { color: colors.textPrimary, fontSize: 17, fontWeight: '800' },
  emptySearchText: { color: colors.textSecondary, fontSize: 15, lineHeight: 21 },

  domainCard: {
    width: '47.5%',
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    gap: 8,
    alignItems: 'center',
  },
  domainCatRow: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  domainDot: { width: 6, height: 6, borderRadius: 3 },
  domainCat: { fontSize: 12, fontWeight: '700', letterSpacing: 1.5, textAlign: 'center' },
  domainIcon: { width: 48, height: 48 },
  domainDesc: {
    alignSelf: 'stretch',
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
  },
  domainFooter: {
    alignSelf: 'stretch',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  focusButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderCard,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  focusButtonText: { color: colors.textMuted, fontSize: 14, fontWeight: '700' },
  });
}
