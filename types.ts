export interface Persona {
  title: string;
  problem: string;
  solution: string;
}

export interface Service {
  title: string;
  description: string;
  points: string[];
  deployment: string;
}

export interface CaseStudy {
  clientType: string;
  problem: string;
  built: string;
  result: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
