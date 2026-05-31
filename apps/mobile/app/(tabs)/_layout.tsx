import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { C } from '../../src/theme';

type TabIconName = 'learn' | 'review' | 'stats';

function TabIcon({
  name,
  focused,
  color,
}: {
  name: TabIconName;
  focused: boolean;
  color: string;
}) {
  const ink = focused ? C.bgPrimary : color;

  return (
    <View style={[styles.iconFrame, focused && styles.iconFrameActive]}>
      {name === 'learn' && <LearnIcon color={ink} focused={focused} />}
      {name === 'review' && <ReviewIcon color={ink} focused={focused} />}
      {name === 'stats' && <StatsIcon color={ink} focused={focused} />}
    </View>
  );
}

function LearnIcon({ color, focused }: { color: string; focused: boolean }) {
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

function ReviewIcon({ color, focused }: { color: string; focused: boolean }) {
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

function StatsIcon({ color, focused }: { color: string; focused: boolean }) {
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
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: C.tabBg,
          borderTopColor: C.tabBorder,
          borderTopWidth: 1,
          height: 68,
          paddingBottom: 8,
          paddingTop: 7,
        },
        tabBarActiveTintColor: C.green,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.3)',
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
        headerStyle: { backgroundColor: C.bgPrimary },
        headerTintColor: C.textPrimary,
        headerTitleStyle: { fontWeight: '700', letterSpacing: 0.5 },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Learn',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabIcon name="learn" color={color} focused={focused} />
          ),
          headerTitle: '// FluentOps',
          headerTitleAlign: 'left',
          headerTitleStyle: { fontWeight: '800', color: C.green, letterSpacing: 1 },
        }}
      />
      <Tabs.Screen
        name="review"
        options={{
          title: 'Review',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabIcon name="review" color={color} focused={focused} />
          ),
          headerTitle: '// Daily Review',
          headerTitleAlign: 'left',
          headerTitleStyle: { fontWeight: '800', color: C.green, letterSpacing: 1 },
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabIcon name="stats" color={color} focused={focused} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
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
    borderColor: 'rgba(255,255,255,0.08)',
  },
  iconFrameActive: {
    backgroundColor: C.green,
    borderColor: C.green,
    shadowColor: C.green,
    shadowOpacity: 0.28,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    elevation: 4,
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
});
