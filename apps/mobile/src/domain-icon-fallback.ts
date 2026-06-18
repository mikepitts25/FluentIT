import type { DomainMeta } from './content';

export function getDomainIconFallbackLabel(domain: DomainMeta): string {
  return domain.label
    .replace(/&/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}
