# Expo SDK 54 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the `apps/mobile` Expo workspace fully from SDK 55 to SDK 54 so it can run with the SDK 54 Expo Go iOS app.

**Architecture:** Keep the app in Expo's generated-native-project workflow and let Expo tooling align SDK-coupled package versions in the npm workspace. Limit code and config cleanup to SDK-related files that Expo guidance identifies as default-only or implicit, then prove the downgrade with Expo diagnostics plus repo checks and an iOS bundle export.

**Tech Stack:** Expo SDK 54, React Native, Expo Router, npm workspaces, TypeScript, Vitest

---

## File Map

- Modify `apps/mobile/package.json` for the SDK 54 Expo dependency set.
- Modify `package-lock.json` through npm and Expo tooling so workspace resolution matches the mobile package.
- Create `docs/superpowers/reports/2026-05-21-expo-sdk-54-dependency-inventory.md` to capture the before/after mobile dependency inventory and dependency validation commands.
- Delete `apps/mobile/package-lock.json` so the npm workspace has one canonical resolved dependency record at the repository root.
- Delete `apps/mobile/babel.config.js` after removing the default-only `babel-preset-expo` dependency entry.
- Delete `apps/mobile/metro.config.js` after Expo doctor confirms its manual monorepo Metro overrides conflict with Expo's SDK 52+ Metro defaults.
- Keep product code unchanged unless diagnostics identify a concrete SDK 54 compatibility break.

### Task 1: Align the Mobile Workspace to SDK 54

**Files:**
- Modify: `apps/mobile/package.json`
- Modify: `package-lock.json`
- Create: `docs/superpowers/reports/2026-05-21-expo-sdk-54-dependency-inventory.md`

- [ ] **Step 1: Capture the current SDK dependency diagnosis**

Run:

```bash
npm exec --workspace mobile -- expo install --check
npm ls --workspace mobile --depth=0
```

Expected: Expo reports SDK 55 dependency state before the downgrade, and npm prints the current direct mobile dependency inventory without modifying files.

- [ ] **Step 2: Record the SDK 55 dependency inventory**

Create `docs/superpowers/reports/2026-05-21-expo-sdk-54-dependency-inventory.md` with this structure and the current `npm ls --workspace mobile --depth=0` output transcribed into the SDK 55 section:

```markdown
# Expo SDK 54 Dependency Inventory

## Scope

- Mobile workspace: `apps/mobile`
- Full resolved dependency record: `package-lock.json`
- Inventory command: `npm ls --workspace mobile --depth=0`

## SDK 55 Before

| Package | Version |
| --- | --- |
| `expo` | `~55.0.0` |

## SDK 54 After

Pending until Expo dependency alignment completes.

## Validation

Pending until SDK 54 verification completes.
```

- [ ] **Step 3: Install the SDK 54 Expo package in the mobile workspace**

Run:

```bash
npm exec --workspace mobile -- expo install expo@~54.0.0
```

Expected: `apps/mobile/package.json` changes the `expo` dependency to SDK 54 and `package-lock.json` updates workspace dependency resolution.

- [ ] **Step 4: Let Expo align SDK-coupled dependencies**

Run:

```bash
npm exec --workspace mobile -- expo install --fix
```

Expected: React, React Native, Expo Router, Expo modules, Reanimated, Worklets, and compatible native peer packages resolve to the SDK 54-compatible versions.

- [ ] **Step 5: Confirm the package diff is limited to SDK alignment**

Run:

```bash
git diff -- apps/mobile/package.json package-lock.json
```

Expected: the diff changes dependency versions and lockfile resolution for the mobile Expo stack without product-code edits.

### Task 2: Remove Expo Default-Only SDK Config

**Files:**
- Modify: `apps/mobile/package.json`
- Delete: `apps/mobile/package-lock.json`
- Delete: `apps/mobile/babel.config.js`
- Inspect: `apps/mobile/metro.config.js`
- Modify: `package-lock.json`
- Modify: `docs/superpowers/reports/2026-05-21-expo-sdk-54-dependency-inventory.md`

- [ ] **Step 1: Re-read Expo config files before deleting them**

Run:

```bash
sed -n '1,120p' apps/mobile/babel.config.js
sed -n '1,120p' apps/mobile/metro.config.js
```

Expected Babel config:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

Metro config may still contain manual monorepo overrides. If it does, preserve it until Expo diagnostics can validate whether those overrides should be removed for SDK 54.

```js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);
```

- [ ] **Step 2: Delete stale nested mobile package metadata and default-only Babel config**

Delete `apps/mobile/package-lock.json` and `apps/mobile/babel.config.js` with a focused patch. The repository-root `package-lock.json` remains the full workspace dependency record. Keep a non-default Metro config until verification decides whether it can be removed safely.

- [ ] **Step 3: Remove implicit Expo package entries**

Edit `apps/mobile/package.json` so:

- `babel-preset-expo` is removed from `devDependencies`.

Run:

```bash
npm install
```

Expected: `package-lock.json` removes the direct mobile `babel-preset-expo` edge while preserving transitive SDK dependencies required by Expo.

- [ ] **Step 4: Update the SDK 54 dependency inventory**

Run:

```bash
npm ls --workspace mobile --depth=0
```

Replace the pending SDK 54 section in `docs/superpowers/reports/2026-05-21-expo-sdk-54-dependency-inventory.md` with the direct mobile dependency inventory after Expo alignment and cleanup. Keep the report explicit that `package-lock.json` is the full resolved dependency record.

- [ ] **Step 5: Check the cleanup diff**

Run:

```bash
git diff -- apps/mobile/package.json apps/mobile/package-lock.json apps/mobile/babel.config.js apps/mobile/metro.config.js package-lock.json
```

Expected: only SDK-aligned dependencies, lockfile updates, and the default config removals appear.

### Task 3: Verify the SDK 54 Migration

**Files:**
- Inspect: `apps/mobile/package.json`
- Inspect: `package-lock.json`
- Modify: `docs/superpowers/reports/2026-05-21-expo-sdk-54-dependency-inventory.md`

- [ ] **Step 1: Run Expo package validation**

Run:

```bash
npm exec --workspace mobile -- expo install --check
```

Expected: Expo reports dependencies are aligned with the installed SDK.

- [ ] **Step 2: Run Expo doctor**

Run:

```bash
npx expo-doctor apps/mobile
```

Expected: Expo doctor reports no blocking SDK dependency mismatch. Any non-blocking warning must be captured in the final report.

- [ ] **Step 3: Run repository checks**

Run:

```bash
npm test
npm run typecheck
```

Expected: Vitest and TypeScript checks exit successfully or expose concrete compatibility issues to fix before continuing.

- [ ] **Step 4: Export an iOS bundle with a cleared Expo cache**

Run:

```bash
npm exec --workspace mobile -- expo export -p ios --clear
```

Expected: Expo produces the iOS export without SDK 54 bundling failures.

- [ ] **Step 5: Review the final migration diff**

Run:

```bash
git diff --stat
git diff -- apps/mobile/package.json apps/mobile/package-lock.json apps/mobile/babel.config.js apps/mobile/metro.config.js package-lock.json
```

Expected: the final diff is attributable to the SDK 54 downgrade and default Expo config cleanup.

- [ ] **Step 6: Record dependency validation results**

Update the Validation section in `docs/superpowers/reports/2026-05-21-expo-sdk-54-dependency-inventory.md` with the executed dependency-validation commands and whether each completed successfully:

```markdown
## Validation

| Command | Result |
| --- | --- |
| `npm exec --workspace mobile -- expo install --check` | Pass |
| `npx expo-doctor apps/mobile` | Pass |
```

### Task 4: Resolve Expo Doctor Migration Blockers

**Files:**
- Modify: `apps/mobile/package.json`
- Delete: `apps/mobile/metro.config.js`
- Modify: `package-lock.json`
- Modify: `docs/superpowers/reports/2026-05-21-expo-sdk-54-dependency-inventory.md`

- [ ] **Step 1: Add the missing Expo Router native peer dependency**

Run:

```bash
npm exec --workspace mobile -- expo install expo-constants
```

Expected: `apps/mobile/package.json` adds the SDK 54-compatible direct `expo-constants` dependency and root `package-lock.json` records it for the mobile workspace.

- [ ] **Step 2: Remove manual Metro monorepo overrides flagged by Expo doctor**

Delete `apps/mobile/metro.config.js`. Expo SDK 52+ configures Metro for npm workspaces automatically, and doctor reports this file's `watchFolders` and `resolver.nodeModulesPaths` overrides do not include Expo defaults.

- [ ] **Step 3: Re-run migration diagnostics and bundle verification**

Run:

```bash
npm exec --workspace mobile -- expo install --check
npx expo-doctor apps/mobile
npm exec --workspace mobile -- expo export -p ios --clear
```

Expected: dependency alignment remains clean and iOS export still bundles. If Expo doctor still reports duplicate native dependencies because this project-local worktree can see the parent checkout's SDK 55 `node_modules`, record that environment-specific result in the dependency inventory report.

- [ ] **Step 4: Refresh the dependency inventory report**

Run:

```bash
npm ls --workspace mobile --depth=0
```

Update the SDK 54 After table and Validation notes so they reflect the direct `expo-constants` dependency and the latest doctor result after Metro cleanup.
