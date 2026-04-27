import type { CalculatedResult, GuardianType, QuestionOption } from '../types/test';

export const guardianTypes: GuardianType[] = [
  'wit',
  'jiguk',
  'jeung',
  'gwangmok',
  'damun',
];

export function createEmptyScores(): Record<GuardianType, number> {
  return {
    wit: 0,
    jiguk: 0,
    jeung: 0,
    gwangmok: 0,
    damun: 0,
  };
}

export function calculateResult(selectedOptions: QuestionOption[]): CalculatedResult {
  const scores = createEmptyScores();

  selectedOptions.forEach((option) => {
    Object.entries(option.scores).forEach(([type, score]) => {
      scores[type as GuardianType] += score ?? 0;
    });
  });

  const [mainType, subType] = [...guardianTypes]
    .sort((a, b) => scores[b] - scores[a])
    .slice(0, 2);

  return {
    mainType,
    subType,
    scores,
  };
}
