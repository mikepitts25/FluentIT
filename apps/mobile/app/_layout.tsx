import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useThemeColors } from '../src/hooks/useThemeColors';
import type { ThemeColors } from '../src/theme';

export default function RootLayout() {
  const { colorMode, colors } = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <StatusBar style={colorMode === 'light' ? 'dark' : 'light'} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.bgPrimary },
          headerTintColor: colors.textPrimary,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.bgPrimary },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="domain/[id]" options={{ title: '', headerBackTitle: 'Back' }} />
        <Stack.Screen name="card/[id]" options={{ title: '', headerBackTitle: 'Back' }} />
        <Stack.Screen name="session" options={{ title: 'Session', headerBackTitle: 'Back' }} />
        <Stack.Screen name="meeting-prep" options={{ title: 'Meeting Prep', headerBackTitle: 'Back' }} />
        <Stack.Screen name="pro" options={{ title: 'Get Pro', headerBackTitle: 'Back' }} />
      </Stack>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bgPrimary },
  });
}
