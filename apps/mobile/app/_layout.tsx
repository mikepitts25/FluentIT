import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { C } from '../src/theme';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: C.bgPrimary },
          headerTintColor: C.textPrimary,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: C.bgPrimary },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="domain/[id]" options={{ title: '' }} />
        <Stack.Screen name="card/[id]" options={{ title: '' }} />
        <Stack.Screen name="session" options={{ title: 'Session' }} />
        <Stack.Screen name="meeting-prep" options={{ title: 'Meeting Prep' }} />
        <Stack.Screen name="review" options={{ title: 'Daily Review' }} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bgPrimary },
});
