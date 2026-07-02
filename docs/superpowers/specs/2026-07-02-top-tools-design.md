# Top Tools Per Topic Design

## Goal

Add a concise "Top tools" list to every FluentIT topic/domain so learners can connect each knowledge area with practical tools they are likely to encounter at work.

Each topic will show exactly five tools. Every tool entry will include:

- Tool name
- Short practical description

## Recommended Approach

Store the tool lists directly on each `DomainMeta` entry in `packages/content/src/domains.ts`.

This keeps the content close to the existing topic metadata, avoids a separate lookup table, and makes the mobile domain page simple to render. If tool data later grows into richer records, it can be extracted to a dedicated catalog then.

## Data Model

Extend `DomainMeta` in `packages/content/src/types.ts`:

```ts
export interface DomainTool {
  name: string;
  description: string;
}

export interface DomainMeta {
  id: Domain;
  label: string;
  icon: string;
  color: string;
  description: string;
  tools: DomainTool[];
}
```

Rules:

- Every domain must have exactly five tools.
- Every tool must have a non-empty `name`.
- Every tool must have a non-empty `description`.
- Descriptions should be one short sentence fragment focused on practical use.

## Mobile UI

Update `apps/mobile/app/domain/[id].tsx` to render a compact "Top tools" section below the topic header and above the term list.

The section should use existing domain screen styling patterns:

- Card-like background matching `colors.bgCard`
- Domain color as a subtle accent
- Tool name in stronger text
- Description in secondary text
- No navigation behavior in this pass

The list should be useful at a glance without pushing the term list too far down. Keep rows compact and avoid large decorative elements.

## Search

Do not include tools in learn search for this pass.

Search currently focuses on domains and learning cards. Adding tool search would change result behavior and may need a separate result type. The top-tools feature can ship cleanly without that extra scope.

## Validation And Tests

Add content validation coverage so regressions are caught:

- Bundled domain catalog remains valid.
- Every domain has exactly five tools.
- Missing tool names or descriptions report validation errors.

Add or update targeted tests in `packages/content/src/validation.test.ts`.

## Out Of Scope

- Tool detail pages
- Links to vendor sites
- User-customizable tool lists
- Search results for tools
- SRS cards for individual tools
