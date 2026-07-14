export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  demoLabel: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
  highlight?: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
  value?: string;
}

export interface CommunityItem {
  title: string;
  description: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}
