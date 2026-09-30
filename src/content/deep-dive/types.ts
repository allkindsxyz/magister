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

export type DeepDiveLocale = {
  card_title: string;
  questions: [DeepDiveQuestion, DeepDiveQuestion, DeepDiveQuestion];
};

/** Source card with full question packs per site locale. */
export type DeepDiveCard = {
  card_id: string;
  locales: {
    en: DeepDiveLocale;
    ru: DeepDiveLocale;
    be: DeepDiveLocale;
    zh: DeepDiveLocale;
  };
};

/** Resolved pack shipped into the playstage for one locale. */
export type DeepDiveResolved = {
  card_id: string;
  card_title: string;
  questions: [DeepDiveQuestion, DeepDiveQuestion, DeepDiveQuestion];
};

export type DeepDiveLang = 'en' | 'ru' | 'be' | 'zh';

export function resolveDeepDive(card: DeepDiveCard, lang: DeepDiveLang): DeepDiveResolved {
  const locale = card.locales[lang];
  return {
    card_id: card.card_id,
    card_title: locale.card_title,
    questions: locale.questions,
  };
}
