import type { Card, Difficulty, DomainMeta } from './types';

const REQUIRED_TEXT_FIELDS = [
  'id',
  'title',
  'subtitle',
  'definition',
  'whyItMatters',
  'analogy',
  'soundsSmartToSay',
] as const;

const DIFFICULTIES: Difficulty[] = ['beginner', 'intermediate', 'advanced'];

export function validateCards(cards: Card[], domains: DomainMeta[]): string[] {
  const errors: string[] = [];
  const domainIds = new Set(domains.map((domain) => domain.id));
  const seenIds = new Set<string>();

  for (const card of cards) {
    const label = card.id?.trim() || '<missing id>';

    for (const field of REQUIRED_TEXT_FIELDS) {
      if (!card[field]?.trim()) {
        errors.push(`Card "${label}" is missing ${field}`);
      }
    }

    if (seenIds.has(card.id)) {
      errors.push(`Duplicate card id "${card.id}"`);
    }
    seenIds.add(card.id);

    if (!domainIds.has(card.domain)) {
      errors.push(`Card "${label}" has invalid domain "${card.domain}"`);
    }

    if (!DIFFICULTIES.includes(card.difficulty)) {
      errors.push(`Card "${label}" has invalid difficulty "${card.difficulty}"`);
    }

    if (!card.tags.length) {
      errors.push(`Card "${label}" must have at least one tag`);
    }

    if (!card.commonConfusions.length) {
      errors.push(`Card "${label}" must have at least one common confusion`);
    }
  }

  return errors;
}
