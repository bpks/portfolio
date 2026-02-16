
export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced';
  progress: number;
}

export interface SkillCategory {
  icon: string;
  title: string;
  subtitle: string;
  skills: Skill[];
}

export interface ExperienceItem {
  date: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
  isPrimary?: boolean;
}

export interface CertificationItem {
  issuer: string;
  issuerColor: string;
  name: string;
  logo: string;
  validated: number;
  glowClass: string;
}
