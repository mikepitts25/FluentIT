import { useNavigation, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ALL_CARDS } from '../src/content';
import { useProStore } from '../src/hooks/useProStore';
import { useThemeColors } from '../src/hooks/useThemeColors';
import { FREE_TERMS_PER_CATEGORY, getLockedCardCount } from '../src/pro/pro-access';
import { ProUpgradeCard } from '../src/pro/pro-upgrade-card';
import type { ThemeColors } from '../src/theme';

export default function ProScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { entitlement, grantPro, isLoaded } = useProStore();
  const { colors } = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const isPro = entitlement.isPro;
  const lockedCount = getLockedCardCount({ cards: ALL_CARDS, isPro });

  const goBack = () => {
    if (navigation.canGoBack()) {
      router.back();
      return;
    }

    router.replace('/(tabs)');
  };

  if (!isLoaded) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading Pro...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Back"
        activeOpacity={0.75}
        style={styles.backButton}
        onPress={goBack}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>PRO MODE</Text>
        <Text style={styles.title}>Unlock the full library</Text>
        <Text style={styles.body}>
          Keep the first {FREE_TERMS_PER_CATEGORY} terms in each category free. Pro opens every term, removes session ads, and unlocks robot cosmetics as you progress.
        </Text>
      </View>

      <ProUpgradeCard
        colors={colors}
        freeTermsPerCategory={FREE_TERMS_PER_CATEGORY}
        isPro={isPro}
        lockedCount={lockedCount}
        onGrantPro={grantPro}
        styles={styles}
      />
    </ScrollView>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bgPrimary },
    content: { padding: 16, paddingBottom: 40, gap: 14 },
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.bgPrimary,
    },
    loadingText: { color: colors.textMuted, fontSize: 16 },
    backButton: {
      alignSelf: 'flex-start',
      borderRadius: 999,
      borderWidth: 1,
      borderColor: colors.borderCard,
      backgroundColor: colors.bgCard,
      paddingHorizontal: 14,
      paddingVertical: 9,
    },
    backButtonText: { color: colors.textSecondary, fontSize: 15, fontWeight: '800' },
    hero: {
      backgroundColor: colors.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.purple + '44',
      padding: 18,
      gap: 8,
    },
    eyebrow: {
      color: colors.purple,
      fontSize: 11,
      fontWeight: '900',
      letterSpacing: 2.4,
    },
    title: { color: colors.textPrimary, fontSize: 26, fontWeight: '900' },
    body: { color: colors.textSecondary, fontSize: 15, lineHeight: 22 },
    card: {
      backgroundColor: colors.bgCard,
      borderRadius: 16,
      padding: 18,
      borderWidth: 1,
      borderColor: colors.borderCard,
      gap: 12,
    },
    cardLabel: {
      color: colors.textMuted,
      fontSize: 11,
      fontWeight: '700',
      letterSpacing: 2.5,
    },
  });
}
