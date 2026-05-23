import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { C } from '../../src/theme';

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  const icons: Record<string, string> = {
    Learn: '⊞',
    Review: '◎',
    Progress: '◉',
  };
  return (
    <Text style={{ fontSize: 18, opacity: focused ? 1 : 0.3 }}>
      {icons[label] ?? label}
    </Text>
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
          paddingBottom: 10,
          paddingTop: 6,
        },
        tabBarActiveTintColor: C.green,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.3)',
        tabBarLabelStyle: { fontSize: 10, fontWeight: '700', letterSpacing: 0.5 },
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
          tabBarIcon: ({ focused }: { focused: boolean }) => <TabIcon label="Learn" focused={focused} />,
          headerTitle: '// FluentIT',
          headerTitleAlign: 'left',
          headerTitleStyle: { fontWeight: '800', color: C.green, letterSpacing: 1 },
        }}
      />
      <Tabs.Screen
        name="review"
        options={{
          title: 'Review',
          tabBarIcon: ({ focused }: { focused: boolean }) => <TabIcon label="Review" focused={focused} />,
          headerTitle: 'Daily Review',
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ focused }: { focused: boolean }) => <TabIcon label="Progress" focused={focused} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
