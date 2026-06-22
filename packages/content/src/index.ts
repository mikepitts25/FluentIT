export type { Card, Domain, Difficulty, DomainMeta } from './types';
export { DOMAINS } from './domains';
export { validateCards } from './validation';
export { cyberCards } from './cards/cyber';
export { devopsCards } from './cards/devops';
export { cloudCards } from './cards/cloud';
export { networkingCards } from './cards/networking';
export { dataCards } from './cards/data';
export { aiCards } from './cards/ai';
export { sysengCards } from './cards/syseng';
export { codingCards } from './cards/coding';
export { integrationCards } from './cards/integration';
export { agileCards } from './cards/agile';
export { governanceCards } from './cards/governance';
export { expansionCards } from './cards/expansions';
export { deepExpansionCards } from './cards/deep-expansions';
export {
  observabilityCards,
  identityCards,
  architectureCards,
  appsecCards,
} from './cards/meeting-prep';

import { cyberCards } from './cards/cyber';
import { devopsCards } from './cards/devops';
import { cloudCards } from './cards/cloud';
import { networkingCards } from './cards/networking';
import { dataCards } from './cards/data';
import { aiCards } from './cards/ai';
import { sysengCards } from './cards/syseng';
import { codingCards } from './cards/coding';
import { integrationCards } from './cards/integration';
import { agileCards } from './cards/agile';
import { governanceCards } from './cards/governance';
import { expansionCards } from './cards/expansions';
import { deepExpansionCards } from './cards/deep-expansions';
import {
  observabilityCards,
  identityCards,
  architectureCards,
  appsecCards,
} from './cards/meeting-prep';
import type { Card, Domain } from './types';

export const ALL_CARDS: Card[] = [
  ...cyberCards,
  ...devopsCards,
  ...cloudCards,
  ...networkingCards,
  ...dataCards,
  ...aiCards,
  ...sysengCards,
  ...codingCards,
  ...integrationCards,
  ...agileCards,
  ...governanceCards,
  ...expansionCards,
  ...deepExpansionCards,
  ...observabilityCards,
  ...identityCards,
  ...architectureCards,
  ...appsecCards,
];

export function getCardsByDomain(domain: Domain): Card[] {
  return ALL_CARDS.filter((c) => c.domain === domain);
}

export function getCardById(id: string): Card | undefined {
  return ALL_CARDS.find((c) => c.id === id);
}

function normalizeCardTitle(title: string): string {
  return title.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function getCardByTitle(title: string): Card | undefined {
  const normalizedTitle = normalizeCardTitle(title);
  if (!normalizedTitle) return undefined;

  return ALL_CARDS.find((card) => normalizeCardTitle(card.title) === normalizedTitle);
}
