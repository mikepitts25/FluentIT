# Pro Locked Search Design

## Goal

The Learn search should search the full catalog, including Pro-locked cards. Free users should be able to discover that a matching term exists, see the locked term title, and go to the Pro screen when they tap it. Locked card bodies remain unavailable.

## Behavior

- The search text is matched against domain label, domain description, card title, card subtitle, and card tags.
- When there is no search query, the Learn tab keeps the existing alphabetized domain grid behavior.
- When there is a search query, the Learn tab shows matching card titles grouped in the normal result flow.
- Accessible matched cards open their card detail screen.
- Locked matched cards show a Pro locked state and open `/pro` instead of `/card/[id]`.
- Pro users see all matching cards as accessible.

## Architecture

`apps/mobile/src/learn/domain-search.ts` will expose a richer search result helper that receives all cards plus the accessible card id set. The helper owns normalization, matching, sorting, and locked metadata so the screen does not duplicate access logic. `apps/mobile/app/(tabs)/index.tsx` will keep using existing Pro access helpers to compute accessible ids, then render title-level search rows only while a query is active.

## Testing

`apps/mobile/src/learn/domain-search.test.ts` will cover:

- Locked matching card titles appear in search results with `isLocked: true`.
- Accessible matching cards appear with `isLocked: false`.
- Pro users can mark the same matching card as unlocked by passing the full accessible id set.
- Empty queries still return the existing domain grid behavior.

## Out Of Scope

- Revealing definitions or other locked card details in search results.
- Changing domain page locking behavior.
- Changing Pro entitlement storage or purchase behavior.
