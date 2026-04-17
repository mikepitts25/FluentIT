export type { Card, Domain, Difficulty, DomainMeta } from './types';
export { DOMAINS } from './domains';
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
];

export function getCardsByDomain(domain: Domain): Card[] {
  return ALL_CARDS.filter((c) => c.domain === domain);
}

export function getCardById(id: string): Card | undefined {
  return ALL_CARDS.find((c) => c.id === id);
}
