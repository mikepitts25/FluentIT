# Pro Locked Search Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let Learn search find Pro-locked catalog cards, display locked titles, and route locked title taps to the Pro screen.

**Architecture:** Add a title-level search result helper beside the existing domain helper in `apps/mobile/src/learn/domain-search.ts`. The Learn tab will compute accessible card ids through existing Pro helpers and render search result rows only while a query is active.

**Tech Stack:** TypeScript, React Native, Expo Router, Vitest.

---

## File Structure

- Modify `apps/mobile/src/learn/domain-search.ts`: add `LearnSearchCardResult`, `getLearnSearchCardResults`, and reuse existing normalization/matching.
- Modify `apps/mobile/src/learn/domain-search.test.ts`: add red tests for locked and accessible search results.
- Modify `apps/mobile/app/(tabs)/index.tsx`: render card title search rows and route locked rows to `/pro`.

### Task 1: Search Result Helper

**Files:**
- Modify: `apps/mobile/src/learn/domain-search.ts`
- Test: `apps/mobile/src/learn/domain-search.test.ts`

- [ ] **Step 1: Write the failing tests**

Add tests that call `getLearnSearchCardResults` with all cards and an accessible id set:

```ts
expect(
  getLearnSearchCardResults({
    cards: [
      card({ id: 'free-cloud', title: 'Cloud IAM', domain: 'cloud' }),
      card({ id: 'locked-cyber', title: 'Zero Trust', domain: 'cyber' }),
    ],
    accessibleCardIds: new Set(['free-cloud']),
    query: 'trust',
  }),
).toEqual([
  expect.objectContaining({
    card: expect.objectContaining({ id: 'locked-cyber', title: 'Zero Trust' }),
    isLocked: true,
  }),
]);
```

- [ ] **Step 2: Run the helper tests to verify red**

Run: `npm test -- apps/mobile/src/learn/domain-search.test.ts`

Expected: FAIL because `getLearnSearchCardResults` is not exported.

- [ ] **Step 3: Implement the helper**

Add a result type and helper that returns an empty array for blank queries, sorts matching cards by title, and sets `isLocked` from `accessibleCardIds.has(card.id)`.

- [ ] **Step 4: Run the helper tests to verify green**

Run: `npm test -- apps/mobile/src/learn/domain-search.test.ts`

Expected: PASS.

### Task 2: Learn Tab Search UI

**Files:**
- Modify: `apps/mobile/app/(tabs)/index.tsx`

- [ ] **Step 1: Wire search data**

Import `getAccessibleCardIds` and `getLearnSearchCardResults`. Compute accessible card ids from `ALL_CARDS` and pass `ALL_CARDS`, the id set, and `searchQuery` into the search helper.

- [ ] **Step 2: Render result rows while searching**

When `isSearching` is true, render one row per matching card title. The row shows the title, subtitle, domain label, and existing difficulty/tags style. Locked rows show a `PRO` badge and muted locked copy.

- [ ] **Step 3: Route row presses**

Accessible row press: `router.push(`/card/${item.card.id}`)`.

Locked row press: `router.push('/pro')`.

- [ ] **Step 4: Preserve existing empty state**

When search has no matching domains and no matching cards, show the existing "No matching topics" empty state.

### Task 3: Verification

- [ ] **Step 1: Run focused tests**

Run: `npm test -- apps/mobile/src/learn/domain-search.test.ts`

Expected: PASS.

- [ ] **Step 2: Run typecheck**

Run: `npm run typecheck`

Expected: exit code 0.
