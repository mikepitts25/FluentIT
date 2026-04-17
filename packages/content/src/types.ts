export type Domain =
  | 'cyber'
  | 'devops'
  | 'cloud'
  | 'networking'
  | 'data'
  | 'ai';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Card {
  id: string;
  domain: Domain;
  title: string;
  subtitle: string;
  difficulty: Difficulty;
  tags: string[];
  definition: string;
  whyItMatters: string;
  analogy: string;
  soundsSmartToSay: string;
  commonConfusions: string[];
  relatedTerms: string[];
}

export interface DomainMeta {
  id: Domain;
  label: string;
  icon: string;
  color: string;
  description: string;
}
