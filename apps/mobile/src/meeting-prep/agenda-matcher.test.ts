import { describe, expect, it } from 'vitest';
import type { Card } from '../content';
import { matchAgendaCards } from './agenda-matcher';

const baseCard: Card = {
  id: 'base-card',
  domain: 'architecture',
  title: 'Base Card',
  subtitle: 'Subtitle',
  difficulty: 'beginner',
  tags: ['tag'],
  definition: 'Definition',
  whyItMatters: 'Why it matters',
  analogy: 'Analogy',
  soundsSmartToSay: 'Smart phrase',
  commonConfusions: ['Confusion'],
  relatedTerms: [],
};

function card(id: string, fields: Partial<Card>): Card {
  return { ...baseCard, ...fields, id };
}

describe('matchAgendaCards', () => {
  it('ranks cards that match agenda phrases and acronyms', () => {
    const results = matchAgendaCards(
      'Review SLO burn rate and the OpenID Connect token path before the design review.',
      [
        card('slo', {
          domain: 'observability',
          title: 'Service Level Objective',
          relatedTerms: ['SLO', 'Burn Rate'],
        }),
        card('oidc', {
          domain: 'identity',
          title: 'OpenID Connect',
          relatedTerms: ['OIDC', 'ID Token'],
        }),
        card('queue', {
          domain: 'architecture',
          title: 'Queue',
          relatedTerms: ['Backpressure'],
        }),
      ],
    );

    expect(results.map((result) => result.id)).toEqual(['slo', 'oidc']);
  });

  it('returns each matched card once and respects the limit', () => {
    const results = matchAgendaCards(
      'Threat model this trust boundary and threat model the auth path.',
      [
        card('threat-model', {
          domain: 'appsec',
          title: 'Threat Modeling',
          relatedTerms: ['Trust Boundary'],
        }),
        card('auth', {
          domain: 'identity',
          title: 'Authentication',
          relatedTerms: ['Auth'],
        }),
      ],
      1,
    );

    expect(results.map((result) => result.id)).toEqual(['threat-model']);
  });
});
