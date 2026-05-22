import type { Card } from '../content';

type Candidate = {
  phrase: string;
  weight: number;
};

const GENERIC_TERMS = new Set(['beginner', 'intermediate', 'advanced', 'meeting prep']);

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function containsPhrase(text: string, phrase: string): boolean {
  if (phrase.length < 3) return false;
  return ` ${text} `.includes(` ${phrase} `);
}

function candidatesForCard(card: Card): Candidate[] {
  const candidates = [
    { phrase: card.title, weight: 8 },
    { phrase: card.subtitle, weight: 3 },
    ...card.relatedTerms.map((phrase) => ({ phrase, weight: 4 })),
    ...card.tags.map((phrase) => ({ phrase, weight: 2 })),
  ];
  const seen = new Set<string>();

  return candidates.filter((candidate) => {
    const phrase = normalize(candidate.phrase);
    if (!phrase || seen.has(phrase) || GENERIC_TERMS.has(phrase)) return false;
    seen.add(phrase);
    candidate.phrase = phrase;
    return true;
  });
}

export function matchAgendaCards(agenda: string, cards: Card[], limit = 8): Card[] {
  const normalizedAgenda = normalize(agenda);
  if (!normalizedAgenda) return [];

  return cards
    .map((card, index) => ({
      card,
      index,
      score: candidatesForCard(card).reduce(
        (score, candidate) =>
          containsPhrase(normalizedAgenda, candidate.phrase)
            ? score + candidate.weight
            : score,
        0,
      ),
    }))
    .filter((candidate) => candidate.score > 0)
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .slice(0, limit)
    .map((candidate) => candidate.card);
}
