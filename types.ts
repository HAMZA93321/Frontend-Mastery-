export enum TechPillar {
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'JavaScript',
  TAILWIND = 'Tailwind CSS',
  REACT = 'React'
}

export interface LearningResponse {
  title: string;
  explanation: string;
  codeExample: string;
  keyTakeaways: string[];
}

export interface SocialLinks {
  linkedin: string;
  facebook: string;
  instagram: string;
}

export interface CategoryData {
  id: TechPillar;
  name: string;
  description: string;
  svgPath: string; // SVG path data
  viewBox: string; // SVG viewbox
  color: string; // Brand color
  gradient: string;
}