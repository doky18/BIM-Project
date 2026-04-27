export type GuardianType = 'wit' | 'jiguk' | 'jeung' | 'gwangmok' | 'damun';

export type ScoreMap = Partial<Record<GuardianType, number>>;

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  scores: ScoreMap;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

export interface ResultProfile {
  type: GuardianType;
  name: string;
  title: string;
  summary: string;
  description: string[];
  strengths: string[];
  shadows: string[];
  item: string;
  animal: string;
}

export interface CalculatedResult {
  mainType: GuardianType;
  subType: GuardianType;
  scores: Record<GuardianType, number>;
}
