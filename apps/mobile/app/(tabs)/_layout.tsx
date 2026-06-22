import { Tabs } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeColors } from '../../src/hooks/useThemeColors';
import type { ThemeColors } from '../../src/theme';

type TabIconName = 'learn' | 'review' | 'stats';
type TabsStyles = ReturnType<typeof createStyles>;

function TabIcon({
  name,
  focused,
  color,
  colors,
  styles,
}: {
  name: TabIconName;
  focused: boolean;
  color: string;
  colors: ThemeColors;
  styles: TabsStyles;
}) {
  const ink = focused ? colors.bgPrimary : color;

  return (
    <View
      style={[
        styles.iconFrame,
        focused && {
          backgroundColor: colors.green,
          borderColor: colors.green,
          shadowColor: colors.green,
          shadowOpacity: 0.28,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 0 },
          elevation: 4,
        },
      ]}
    >
      {name === 'learn' && <LearnIcon color={ink} focused={focused} styles={styles} />}
      {name === 'review' && <ReviewIcon color={ink} focused={focused} styles={styles} />}
      {name === 'stats' && <StatsIcon color={ink} focused={focused} styles={styles} />}
    </View>
  );
}

function LearnIcon({
  color,
  focused,
  styles,
}: {
  color: string;
  focused: boolean;
  styles: TabsStyles;
}) {
  return (
    <View style={styles.learnGrid}>
      {[0, 1, 2, 3].map((cell) => (
        <View
          key={cell}
          style={[
            styles.learnCell,
            { borderColor: color },
            focused && cell === 0 && { backgroundColor: color },
          ]}
        />
      ))}
    </View>
  );
}

function ReviewIcon({
  color,
  focused,
  styles,
}: {
  color: string;
  focused: boolean;
  styles: TabsStyles;
}) {
  return (
    <View style={[styles.reviewRing, { borderColor: color }]}>
      <View style={[styles.reviewDot, { backgroundColor: color }]} />
      <View
        style={[
          styles.reviewNeedle,
          { backgroundColor: color },
          focused && styles.reviewNeedleActive,
        ]}
      />
    </View>
  );
}

function StatsIcon({
  color,
  focused,
  styles,
}: {
  color: string;
  focused: boolean;
  styles: TabsStyles;
}) {
  return (
    <View style={styles.statsBars}>
      {[9, 14, 19].map((height, index) => (
        <View
          key={height}
          style={[
            styles.statsBar,
            {
              height,
              borderColor: color,
              backgroundColor: focused || index === 1 ? color : 'transparent',
            },
          ]}
        />
      ))}
    </View>
  );
}

export default function TabsLayout() {
  const { colorMode, colors, setColorMode } = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const isLightMode = colorMode === 'light';
  const screenHeaderTitleStyle = {
    fontSize: 22,
    fontWeight: '800' as const,
    color: colors.green,
    letterSpacing: 1,
  };

  return (
    <View style={styles.navigator}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.tabBg,
            borderTopColor: colors.tabBorder,
            borderTopWidth: 1,
            height: 68,
            paddingBottom: 8,
            paddingTop: 7,
          },
          tabBarActiveTintColor: colors.green,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarLabelStyle: styles.tabLabel,
          tabBarItemStyle: styles.tabItem,
          headerStyle: { backgroundColor: colors.bgPrimary },
          headerTintColor: colors.textPrimary,
          headerTitleStyle: { fontWeight: '700', letterSpacing: 0.5 },
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Learn',
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <TabIcon name="learn" color={color} focused={focused} colors={colors} styles={styles} />
            ),
            headerTitle: '// FluentOps',
            headerTitleAlign: 'left',
            headerTitleStyle: screenHeaderTitleStyle,
          }}
        />
        <Tabs.Screen
          name="review"
          options={{
            title: 'Review',
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <TabIcon name="review" color={color} focused={focused} colors={colors} styles={styles} />
            ),
            headerTitle: '// Daily Review',
            headerTitleAlign: 'left',
            headerTitleStyle: screenHeaderTitleStyle,
          }}
        />
        <Tabs.Screen
          name="progress"
          options={{
            title: 'Stats',
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <TabIcon name="stats" color={color} focused={focused} colors={colors} styles={styles} />
            ),
            headerTitle: '// Operative File',
            headerTitleAlign: 'left',
            headerTitleStyle: screenHeaderTitleStyle,
          }}
        />
      </Tabs>

      <TouchableOpacity
        accessibilityLabel={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
        accessibilityRole="button"
        activeOpacity={0.82}
        style={styles.floatingThemeToggle}
        onPress={() => {
          void setColorMode(isLightMode ? 'dark' : 'light');
        }}
      >
        <Text
          style={[
            styles.floatingThemeIcon,
            { color: isLightMode ? colors.amber : colors.cyan },
          ]}
        >
          {isLightMode ? '☀' : '☾'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  tabItem: {
    paddingTop: 2,
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0,
  },
  iconFrame: {
    width: 34,
    height: 28,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.borderCardAlt,
  },
  learnGrid: {
    width: 17,
    height: 17,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  learnCell: {
    width: 7,
    height: 7,
    borderRadius: 2,
    borderWidth: 1.5,
  },
  reviewRing: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
  },
  reviewNeedle: {
    position: 'absolute',
    width: 7,
    height: 2,
    borderRadius: 1,
    right: -3,
    top: 3,
    transform: [{ rotate: '-28deg' }],
  },
  reviewNeedleActive: {
    right: -2,
  },
  statsBars: {
    height: 20,
    width: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  statsBar: {
    width: 4,
    borderRadius: 2,
    borderWidth: 1.4,
  },
  floatingThemeToggle: {
    position: 'absolute',
    right: 18,
    bottom: 84,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.borderCard,
    backgroundColor: colors.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    zIndex: 20,
  },
  floatingThemeIcon: { fontSize: 26, fontWeight: '800', lineHeight: 28 },
  });
}
