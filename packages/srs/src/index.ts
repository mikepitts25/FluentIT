import {
  createEmptyCard,
  fsrs,
  generatorParameters,
  Rating,
  type Card as FSRSCard,
  type ReviewLog,
  type Grade,
} from 'ts-fsrs';

export { Rating };
export type { Grade };

export interface CardSRSState {
  cardId: string;
  fsrsCard: FSRSCard;
  logs: ReviewLog[];
}

const f = fsrs(generatorParameters({ enable_fuzz: true }));

export function createNewCardState(cardId: string): CardSRSState {
  return { cardId, fsrsCard: createEmptyCard(), logs: [] };
}

export interface ReviewResult {
  state: CardSRSState;
  nextReviewDate: Date;
}

export function reviewCard(
  state: CardSRSState,
  grade: Grade,
  now: Date = new Date(),
): ReviewResult {
  const item = f.next(state.fsrsCard, now, grade);
  return {
    state: {
      cardId: state.cardId,
      fsrsCard: item.card,
      logs: [...state.logs, item.log],
    },
    nextReviewDate: item.card.due,
  };
}

export function isDue(state: CardSRSState, now: Date = new Date()): boolean {
  return state.fsrsCard.due <= now;
}

export function getDueCards(
  states: CardSRSState[],
  now: Date = new Date(),
): CardSRSState[] {
  return states.filter((s) => isDue(s, now));
}

export function getStabilityLabel(state: CardSRSState): string {
  const stability = state.fsrsCard.stability;
  if (!stability || stability < 1) return 'New';
  if (stability < 7) return 'Learning';
  if (stability < 30) return 'Familiar';
  return 'Mastered';
}
