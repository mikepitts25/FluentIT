import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useProPurchase } from '../hooks/useProPurchase';
import type { ThemeColors } from '../theme';
import { PRO_PRODUCT_TITLE } from './pro-config';

type ProUpgradeCardStyles = ReturnType<typeof createStyles>;

export function ProUpgradeCard({
  colors,
  freeTermsPerCategory,
  isPro,
  lockedCount,
  onGrantPro,
  styles: parentStyles,
}: {
  colors: ThemeColors;
  freeTermsPerCategory: number;
  isPro: boolean;
  lockedCount: number;
  onGrantPro: (source: 'purchase' | 'restore') => Promise<void>;
  styles?: { card: object; cardLabel: object };
}) {
  const styles = createStyles(colors);
  const purchase = useProPurchase({ grantPro: onGrantPro, isPro });

  return (
    <View style={[parentStyles?.card, styles.card]}>
      <View style={styles.headerRow}>
        <View style={{ flex: 1, gap: 4 }}>
          <Text style={[parentStyles?.cardLabel, styles.cardLabel]}>PRO MODE</Text>
          <Text style={styles.title}>
            {isPro ? `${PRO_PRODUCT_TITLE} active` : `Unlock ${lockedCount} more terms`}
          </Text>
          <Text style={styles.body}>
            {isPro
              ? 'Full library access is enabled and session ads are hidden.'
              : `The first ${freeTermsPerCategory} terms in each category are free. Pro unlocks the full catalog and removes session ads.`}
          </Text>
        </View>
        <View style={[styles.badge, isPro && styles.badgeActive]}>
          <Text style={[styles.badgeText, isPro && styles.badgeTextActive]}>
            {isPro ? 'ACTIVE' : 'IAP'}
          </Text>
        </View>
      </View>

      {!isPro && (
        <View style={styles.actions}>
          <TouchableOpacity
            activeOpacity={0.85}
            disabled={!purchase.isAvailable || purchase.isProcessing}
            onPress={purchase.buyPro}
            style={!purchase.isAvailable || purchase.isProcessing ? styles.disabledAction : null}
          >
            <LinearGradient
              colors={['#A78BFA', '#7C3AED']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buyButton}
            >
              <Text style={styles.buyButtonText}>
                {purchase.isProcessing ? 'Opening Store...' : `Go Pro · ${purchase.displayPrice}`}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.restoreButton}
            activeOpacity={0.75}
            disabled={purchase.isProcessing}
            onPress={purchase.restorePro}
          >
            <Text style={styles.restoreButtonText}>Restore Purchase</Text>
          </TouchableOpacity>
        </View>
      )}

      {purchase.statusMessage && !isPro && (
        <Text style={styles.statusText}>{purchase.statusMessage}</Text>
      )}
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    card: { gap: 14 },
    headerRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
    cardLabel: {
      color: colors.textMuted,
      fontSize: 11,
      fontWeight: '700',
      letterSpacing: 2.5,
    },
    title: { color: colors.textPrimary, fontSize: 20, fontWeight: '800' },
    body: { color: colors.textSecondary, fontSize: 14, lineHeight: 20 },
    badge: {
      borderRadius: 999,
      borderWidth: 1,
      borderColor: colors.purple + '44',
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: colors.purple + '12',
    },
    badgeActive: {
      borderColor: colors.green + '66',
      backgroundColor: colors.green + '18',
    },
    badgeText: { color: colors.purple, fontSize: 11, fontWeight: '800', letterSpacing: 1.2 },
    badgeTextActive: { color: colors.green },
    actions: { gap: 10 },
    buyButton: {
      borderRadius: 12,
      paddingVertical: 13,
      paddingHorizontal: 16,
      alignItems: 'center',
    },
    disabledAction: { opacity: 0.55 },
    buyButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
    restoreButton: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.borderCard,
      paddingVertical: 11,
      alignItems: 'center',
    },
    restoreButtonText: { color: colors.textSecondary, fontSize: 14, fontWeight: '700' },
    statusText: { color: colors.textMuted, fontSize: 13, lineHeight: 18 },
  });
}
