import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import type { DomainMeta } from './content';
import { getDomainIconFallbackLabel } from './domain-icon-fallback';
import { getDomainIconImage } from './domain-icons';
import { useThemeColors } from './hooks/useThemeColors';
import type { ThemeColors } from './theme';

type DomainIconBadgeProps = {
  domain: DomainMeta;
};

export function DomainIconBadge({ domain }: DomainIconBadgeProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const { colors } = useThemeColors();
  const styles = createStyles(colors);

  useEffect(() => {
    setHasImageError(false);
  }, [domain.id]);

  return (
    <View
      style={[
        styles.wrap,
        {
          borderColor: domain.color + '66',
        },
      ]}
    >
      {hasImageError ? (
        <Text style={[styles.fallbackLabel, { color: domain.color }]}>
          {getDomainIconFallbackLabel(domain)}
        </Text>
      ) : (
        <Image
          source={getDomainIconImage(domain.id)}
          style={styles.icon}
          resizeMode="contain"
          onError={() => setHasImageError(true)}
        />
      )}
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    wrap: {
    width: 42,
    height: 42,
    borderRadius: 10,
    borderCurve: 'continuous',
    borderWidth: 1,
    backgroundColor: colors.bgCardAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { width: 32, height: 32 },
  fallbackLabel: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0,
  },
  });
}
