import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DOMAINS, getCardsByDomain } from '../../src/content';
import { getDomainIconImage } from '../../src/domain-icons';
import { useSRSStore } from '../../src/hooks/useSRSStore';
import { usePreferencesStore } from '../../src/hooks/usePreferencesStore';
import { GRAD_GREEN_CYAN, getThemeColors, type ThemeColors } from '../../src/theme';
import type { DomainMeta } from '../../src/content';

type HomeStyles = ReturnType<typeof createStyles>;

export default function HomeScreen() {
  const router = useRouter();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { streak, dueCardIds } = useSRSStore();
  const { preferences, toggleDomain, setColorMode } = usePreferencesStore();
  const colors = getThemeColors(preferences.colorMode);
  const styles = useMemo(() => createStyles(colors), [colors]);
  const isLightMode = preferences.colorMode === 'light';
  const selectedCount = preferences.selectedDomains.length;
  const xpEarned = Object.keys(useSRSStore().states).length * 40;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.homeHeader}>
        <TouchableOpacity
          accessibilityLabel="Open settings menu"
          accessibilityRole="button"
          activeOpacity={0.8}
          style={styles.settingsButton}
          onPress={() => setSettingsOpen((open) => !open)}
        >
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </TouchableOpacity>

        {settingsOpen && (
          <View style={styles.settingsMenu}>
            <Text style={styles.settingsMenuTitle}>Settings</Text>
            <View style={styles.settingsOptionRow}>
              <View style={styles.settingsOptionTextBlock}>
                <Text style={styles.settingsOptionLabel}>Light mode</Text>
                <Text style={styles.settingsOptionSub}>
                  {isLightMode ? 'Light theme active' : 'Dark theme active'}
                </Text>
              </View>
              <Switch
                value={isLightMode}
                onValueChange={(enabled) => {
                  void setColorMode(enabled ? 'light' : 'dark');
                }}
                trackColor={{ false: colors.bgCardAlt, true: colors.borderActive }}
                thumbColor={isLightMode ? colors.green : colors.textMuted}
                ios_backgroundColor={colors.bgCardAlt}
              />
            </View>
          </View>
        )}
      </View>

      {/* XP / Streak Banner */}
      <View style={styles.statsBanner}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{streak.currentStreak}</Text>
          <Text style={styles.statLabel}>DAY STREAK</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{dueCardIds.length}</Text>
          <Text style={styles.statLabel}>DUE TODAY</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: colors.green }]}>{xpEarned}</Text>
          <Text style={styles.statLabel}>TOTAL XP</Text>
        </View>
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
        style={styles.secondaryCta}
        onPress={() => router.push('/meeting-prep')}
        activeOpacity={0.8}
      >
        <View>
          <Text style={styles.secondaryCtaTitle}>Prep for a Meeting</Text>
          <Text style={styles.secondaryCtaSub}>Turn agenda terms into a concept pack</Text>
        </View>
        <Text style={styles.secondaryCtaArrow}>→</Text>
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

      {/* Domain grid */}
      <Text style={styles.sectionLabel}>KNOWLEDGE BASE</Text>
      <View style={styles.grid}>
        {DOMAINS.map((d) => {
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
  const cardCount = getCardsByDomain(domain.id).length;

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
        <Text style={styles.domainCount}>{cardCount} concepts</Text>
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

  homeHeader: {
    alignItems: 'flex-end',
    minHeight: 42,
    position: 'relative',
    zIndex: 5,
  },
  settingsButton: {
    width: 42,
    height: 42,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderCard,
    backgroundColor: colors.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  hamburgerLine: {
    width: 18,
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.textPrimary,
  },
  settingsMenu: {
    position: 'absolute',
    top: 48,
    right: 0,
    width: 250,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderCard,
    backgroundColor: colors.bgPrimary,
    padding: 14,
    gap: 12,
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.22)',
  },
  settingsMenuTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '800',
  },
  settingsOptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  settingsOptionTextBlock: { flex: 1, gap: 2 },
  settingsOptionLabel: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: '700',
  },
  settingsOptionSub: { color: colors.textSecondary, fontSize: 15 },

  statsBanner: {
    flexDirection: 'row',
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderCard,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  statItem: { flex: 1, alignItems: 'center', gap: 4 },
  statValue: { color: colors.textPrimary, fontSize: 25, fontWeight: '800' },
  statLabel: { color: colors.textMuted, fontSize: 13, fontWeight: '700', letterSpacing: 1.5 },
  statDivider: { width: 1, backgroundColor: colors.borderCard, marginVertical: 4 },

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
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderCard,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondaryCtaTitle: { color: colors.textPrimary, fontSize: 19, fontWeight: '700' },
  secondaryCtaSub: { color: colors.textSecondary, fontSize: 16, marginTop: 3 },
  secondaryCtaArrow: { color: colors.textMuted, fontSize: 23 },

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

  sectionLabel: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2.5,
    marginTop: 4,
    marginBottom: 2,
  },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },

  domainCard: {
    width: '47.5%',
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    gap: 8,
  },
  domainCatRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  domainDot: { width: 6, height: 6, borderRadius: 3 },
  domainCat: { fontSize: 12, fontWeight: '700', letterSpacing: 1.5 },
  domainIcon: { width: 36, height: 36 },
  domainDesc: { color: colors.textSecondary, fontSize: 15, lineHeight: 21 },
  domainCount: { color: colors.textMuted, fontSize: 14 },
  domainFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
