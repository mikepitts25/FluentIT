import { describe, expect, it } from 'vitest';
import type { Card, DomainMeta } from '../content';
import { getVisibleLearnDomains } from './domain-search';

const domains: DomainMeta[] = [
  {
    id: 'cyber',
    label: 'Cybersecurity',
    icon: 'shield',
    color: '#ff0000',
    description: 'Threats and defenses',
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: 'bot',
    color: '#00ff00',
    description: 'Machine learning concepts',
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: 'cloud',
    color: '#0000ff',
    description: 'Cloud-native patterns',
  },
];

const baseCard: Card = {
  id: 'card-1',
  domain: 'cloud',
  title: 'Object Storage',
  subtitle: 'Flat file storage',
  difficulty: 'beginner',
  tags: ['storage'],
  definition: 'Definition',
  whyItMatters: 'Why',
  analogy: 'Analogy',
  soundsSmartToSay: 'Smart phrase',
  commonConfusions: ['Confusion'],
  relatedTerms: [],
};

function card(overrides: Partial<Card>): Card {
  return { ...baseCard, ...overrides };
}

describe('getVisibleLearnDomains', () => {
  it('sorts domains alphabetically when there is no search query', () => {
    const visible = getVisibleLearnDomains({
      domains,
      cards: [],
      query: '',
    });

    expect(visible.map((domain) => domain.label)).toEqual([
      'AI & ML',
      'Cloud',
      'Cybersecurity',
    ]);
  });

  it('matches search text against domain labels and descriptions', () => {
    const visible = getVisibleLearnDomains({
      domains,
      cards: [],
      query: 'machine',
    });

    expect(visible.map((domain) => domain.id)).toEqual(['ai']);
  });

  it('matches search text against topics inside each domain', () => {
    const visible = getVisibleLearnDomains({
      domains,
      cards: [
        card({
          id: 'zero-trust',
          domain: 'cyber',
          title: 'Zero Trust',
          subtitle: 'Never trust, always verify',
          tags: ['identity'],
        }),
      ],
      query: 'zero trust',
    });

    expect(visible.map((domain) => domain.id)).toEqual(['cyber']);
  });

  it('normalizes case and extra whitespace in search text', () => {
    const visible = getVisibleLearnDomains({
      domains,
      cards: [
        card({
          id: 'guardrails',
          domain: 'ai',
          title: 'AI Guardrails',
          subtitle: 'Runtime safety controls',
          tags: ['llm safety'],
        }),
      ],
      query: '  LLM   SAFETY ',
    });

    expect(visible.map((domain) => domain.id)).toEqual(['ai']);
  });
});
