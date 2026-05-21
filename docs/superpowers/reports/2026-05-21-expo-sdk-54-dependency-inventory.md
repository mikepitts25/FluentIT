# Expo SDK 54 Dependency Inventory

## Scope

- Mobile workspace: `apps/mobile`
- Full resolved dependency record: `package-lock.json`
- Inventory command: `npm ls --workspace mobile --depth=0`

## SDK 55 Before

| Package | Version |
| --- | --- |
| `@fluentit/content` | `0.1.0` |
| `@fluentit/srs` | `0.1.0` |
| `@react-native-async-storage/async-storage` | `2.2.0` |
| `@types/react` | `19.2.15` |
| `babel-preset-expo` | `55.0.22` |
| `expo` | `55.0.26` |
| `expo-constants` | `55.0.16` |
| `expo-haptics` | `55.0.14` |
| `expo-linking` | `55.0.15` |
| `expo-router` | `55.0.16` |
| `expo-status-bar` | `55.0.6` |
| `react` | `19.2.0` |
| `react-native` | `0.83.6` |
| `react-native-gesture-handler` | `2.27.2` |
| `react-native-reanimated` | `4.2.3` |
| `react-native-safe-area-context` | `5.6.2` |
| `react-native-screens` | `4.23.0` |
| `react-native-worklets` | `0.8.3` |
| `react-refresh` | `0.14.2` |
| `ts-fsrs` | `5.3.2` |
| `typescript` | `5.9.3` |

## SDK 54 After

| Package | Version |
| --- | --- |
| `@fluentit/content` | `0.1.0` |
| `@fluentit/srs` | `0.1.0` |
| `@react-native-async-storage/async-storage` | `2.2.0` |
| `@types/react` | `19.1.17` |
| `expo` | `54.0.34` |
| `expo-haptics` | `15.0.8` |
| `expo-linking` | `8.0.12` |
| `expo-router` | `6.0.23` |
| `expo-status-bar` | `3.0.9` |
| `react` | `19.1.0` |
| `react-native` | `0.81.5` |
| `react-native-gesture-handler` | `2.28.0` |
| `react-native-reanimated` | `4.1.7` |
| `react-native-safe-area-context` | `5.6.2` |
| `react-native-screens` | `4.16.0` |
| `react-native-worklets` | `0.5.1` |
| `react-refresh` | `0.14.2` |
| `ts-fsrs` | `5.3.2` |
| `typescript` | `5.9.3` |

## Validation

| Command | Result | Notes |
| --- | --- | --- |
| `npm exec --workspace mobile -- expo install --check` | Pass | Reported `Dependencies are up to date`. |
| `npx expo-doctor apps/mobile` | Fail | `15/18` checks passed. Doctor flagged preserved Metro config overrides, missing direct `expo-constants` peer dependency required by `expo-router`, and duplicate native module dependencies visible from another `node_modules` tree. |
| `npm test` | Fail | Vitest found no test files and exited `1`. |
| `npm run typecheck` | Fail | TypeScript exited `2` on three implicit `focused` bindings in `apps/mobile/app/(tabs)/_layout.tsx`. |
| `npm exec --workspace mobile -- expo export -p ios --clear` | Pass | Exported the iOS bundle to ignored `apps/mobile/dist/`; Node emitted repeated `NO_COLOR` ignored because `FORCE_COLOR` is set warnings during bundling. |

The repository checks remain non-clean after migration verification: the test and typecheck failures match the known pre-migration branch baseline described for this task.
