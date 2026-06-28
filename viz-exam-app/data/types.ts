export type QuestionType = 'single' | 'multiple' | 'statement';

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswers: number[]; // indices of correct answers
  explanation: string;
  optionExplanations?: string[]; // why each option is correct/incorrect
}

export interface Exam {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // lucide icon name
  questions: Question[];
  color: string;
}

export interface ChartInfo {
  id: string;
  nameEn: string;
  nameHe: string;
  description: string;
  whenToUse: string[];
  whenNotToUse: string[];
  dataType: string;
  taskType: string;
  svgType: string; // key for rendering the right SVG
}

export interface Term {
  id: string;
  titleEn: string;
  titleHe: string;
  category: string;
  definition: string;
  details: string[];
  relatedTerms?: string[];
}
