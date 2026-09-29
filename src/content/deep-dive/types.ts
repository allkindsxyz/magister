export type DeepDiveLevel = 'Story' | 'Context' | 'Nuances';

export type DeepDiveOptionId = 'A' | 'B' | 'C';

export type DeepDiveOption = {
  id: DeepDiveOptionId;
  text: string;
};

export type DeepDiveQuestion = {
  level: DeepDiveLevel;
  question: string;
  options: [DeepDiveOption, DeepDiveOption, DeepDiveOption];
  correct_answer: DeepDiveOptionId;
  feedback_correct: {
    headline: string;
    answer: string;
    detail: string;
  };
  feedback_incorrect: {
    headline: string;
    answer: string;
    why: string;
  };
  difficulty_rationale: string;
  needs_review: boolean;
  needs_review_reason?: string;
};

export type DeepDiveCard = {
  card_id: string;
  card_title: string;
  questions: [DeepDiveQuestion, DeepDiveQuestion, DeepDiveQuestion];
};
