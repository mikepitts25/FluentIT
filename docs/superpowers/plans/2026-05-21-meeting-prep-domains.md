# Meeting Prep Domains Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the first four meeting-prep focus domains, ship a first agenda-to-card prep surface, and record the remaining candidate domains for later prioritization.

**Architecture:** Extend the existing `packages/content` domain catalog with four new typed domain IDs, metadata entries, exports, and card collections that satisfy the existing minimum-card validation. Keep mobile rendering aligned with the current icon contract by adding PNG assets and `Record<Domain, ...>` mappings for each new domain. Track deferred product directions in a focused markdown backlog note rather than adding more domains before the meeting-prep flow is validated.

**Tech Stack:** TypeScript content package, Expo React Native mobile app, Vitest validation tests, local PNG domain icon assets.

---

## File Map

- Modify `packages/content/src/types.ts` to add the four new domain IDs.
- Modify `packages/content/src/domains.ts` to expose metadata for the new domain cards shown in the mobile grid.
- Create `packages/content/src/cards/meeting-prep.ts` to house the new card catalogs and a compact card seed helper.
- Modify `packages/content/src/index.ts` and `apps/mobile/src/content.ts` to export and include the new card catalogs.
- Modify `packages/content/src/validation.test.ts` to guard the new product-facing domain IDs.
- Modify `apps/mobile/src/domain-icon-files.ts` and `apps/mobile/src/domain-icons.ts` for mobile icon coverage.
- Create PNG files under `apps/mobile/assets/domain-icons/` for `observability`, `identity`, `architecture`, and `appsec`.
- Create `apps/mobile/src/meeting-prep/agenda-matcher.ts` and its test for deterministic local agenda matching.
- Create `apps/mobile/app/meeting-prep.tsx` and update mobile navigation/home routing for the first prep-pack screen.
- Create `docs/product/meeting-prep-domain-backlog.md` to track deferred domains.

### Task 1: Domain Regression Coverage

**Files:**
- Modify: `packages/content/src/validation.test.ts`

- [ ] **Step 1: Write the failing domain test**

```ts
it('includes the first meeting-prep focus domains', () => {
  expect(DOMAINS.map((domain) => domain.id)).toEqual(
    expect.arrayContaining(['observability', 'identity', 'architecture', 'appsec']),
  );
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- packages/content/src/validation.test.ts`

Expected: FAIL because the four new domain IDs are not yet present.

### Task 2: Typed Content Domains

**Files:**
- Modify: `packages/content/src/types.ts`
- Modify: `packages/content/src/domains.ts`
- Create: `packages/content/src/cards/meeting-prep.ts`
- Modify: `packages/content/src/index.ts`
- Modify: `apps/mobile/src/content.ts`

- [ ] **Step 1: Add the typed domain IDs**

```ts
  | 'observability'
  | 'identity'
  | 'architecture'
  | 'appsec';
```

- [ ] **Step 2: Add domain metadata**

```ts
{
  id: 'observability',
  label: 'Observability & SRE',
  icon: 'pulse',
  color: '#22C55E',
  description: 'Telemetry, reliability, incidents, and SLO trade-offs',
}
```

Repeat with matching metadata for Identity & Access, Architecture & System Design, and Application Security & DevSecOps.

- [ ] **Step 3: Add compact new card catalogs**

Create card seeds in `meeting-prep.ts` for 50 concepts per new domain, map them into the existing `Card` shape, and export:

```ts
export const observabilityCards: Card[] = buildCards('observability', observabilitySeeds);
export const identityCards: Card[] = buildCards('identity', identitySeeds);
export const architectureCards: Card[] = buildCards('architecture', architectureSeeds);
export const appsecCards: Card[] = buildCards('appsec', appsecSeeds);
```

- [ ] **Step 4: Wire cards into shared exports and `ALL_CARDS`**

```ts
export { observabilityCards, identityCards, architectureCards, appsecCards } from './cards/meeting-prep';
```

and append the four arrays to `ALL_CARDS`.

- [ ] **Step 5: Run content tests**

Run: `npm test -- packages/content/src/validation.test.ts`

Expected: PASS once each new domain has at least 50 valid cards.

### Task 3: Mobile Icon Coverage

**Files:**
- Modify: `apps/mobile/src/domain-icon-files.ts`
- Modify: `apps/mobile/src/domain-icons.ts`
- Create: `apps/mobile/assets/domain-icons/observability.png`
- Create: `apps/mobile/assets/domain-icons/identity.png`
- Create: `apps/mobile/assets/domain-icons/architecture.png`
- Create: `apps/mobile/assets/domain-icons/appsec.png`

- [ ] **Step 1: Generate four domain icon assets**

Use four 512x512 PNG icons matching the current domain asset usage:

```text
observability.png
identity.png
architecture.png
appsec.png
```

- [ ] **Step 2: Add icon file mappings**

```ts
observability: 'observability.png',
identity: 'identity.png',
architecture: 'architecture.png',
appsec: 'appsec.png',
```

- [ ] **Step 3: Add React Native image requires**

```ts
observability: require('../assets/domain-icons/observability.png'),
identity: require('../assets/domain-icons/identity.png'),
architecture: require('../assets/domain-icons/architecture.png'),
appsec: require('../assets/domain-icons/appsec.png'),
```

- [ ] **Step 4: Run icon tests**

Run: `npm test -- apps/mobile/src/domain-icon-files.test.ts`

Expected: PASS with a PNG file for every domain.

### Task 4: Agenda Prep Entry Point

**Files:**
- Create: `apps/mobile/src/meeting-prep/agenda-matcher.ts`
- Create: `apps/mobile/src/meeting-prep/agenda-matcher.test.ts`
- Create: `apps/mobile/app/meeting-prep.tsx`
- Modify: `apps/mobile/app/_layout.tsx`
- Modify: `apps/mobile/app/(tabs)/index.tsx`

- [ ] **Step 1: Write the failing agenda matching tests**

```ts
expect(matchAgendaCards('Review SLO burn rate and OpenID Connect.', cards)).toHaveLength(2);
```

- [ ] **Step 2: Add deterministic title and related-term matching**

Score normalized title, subtitle, related-term, and tag phrase matches and return a capped card list in score order.

- [ ] **Step 3: Add the mobile route**

Create a scrollable paste surface that builds a prep-pack list and pushes matched cards into the existing `/card/[id]` route.

- [ ] **Step 4: Add the home entry point**

Expose the meeting-prep route before the daily session CTA.

### Task 5: Deferred Domain Tracker

**Files:**
- Create: `docs/product/meeting-prep-domain-backlog.md`

- [ ] **Step 1: Record deferred domains**

```md
## Deferred Domains

| Domain | Why Later |
| --- | --- |
| IT Operations & Service Management | Useful for incident/change meetings after the meeting-prep loop is proven. |
```

Include Storage, Backup & Disaster Recovery; Enterprise SaaS & Business Systems; Workplace & Endpoint IT; FinOps & Vendor Management; and AI Governance & AI Security.

- [ ] **Step 2: Record the product filter**

State that future domains should be promoted when they materially improve agenda/JD term extraction, prep packs, role tracks, or meeting-question generation.

### Task 6: Verification

**Files:**
- Verify changed content, mobile icon mappings, and docs.

- [ ] **Step 1: Run tests**

Run: `npm test`

Expected: all Vitest files pass.

- [ ] **Step 2: Run typecheck**

Run: `npm run typecheck`

Expected: TypeScript exits successfully.

- [ ] **Step 3: Confirm domain counts**

Run a local count script over `packages/content/src/cards/*.ts`.

Expected: every domain in the current catalog has at least 50 cards.
