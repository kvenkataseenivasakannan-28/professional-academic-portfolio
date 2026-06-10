/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  grade?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
  description?: string;
}

export interface Event {
  id: string;
  title: string;
  role: string;
  organization: string;
  date: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  date?: string;
  description: string;
  category: 'Technical Leadership' | 'Hackathon Winner' | 'Research' | 'Gaming' | 'Awards' | 'Volunteer & Leadership';
  tags?: string[];
  image?: string;
  icon?: string;
}

export interface ProjectHighlight {
  icon: string;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
  demo?: string;
  image?: string;
  tags?: string[];
  highlights?: ProjectHighlight[];
  featured?: boolean;
}

export interface Recommendation {
  id: string;
  text: string;
  author: string;
  title: string;
  role: string;
  date: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Technical' | 'Soft' | 'Other';
  icon?: string;
}

export interface SkillCategory {
  name: string;
  color: string;
  description?: string;
  skills: Array<string | { name: string; level?: number; note?: string; icon?: string }>;
}

export interface RoleTitle {
  text: string;
}

export interface Socials {
  email: string;
  phone?: string;
  twitter?: string;
  github: string;
  linkedin: string;
  scholar?: string;
  orcid?: string;
  instagram?: string;
  whatsapp?: string;
}

export interface Profile {
  name: string;
  pronouns: string;
  title: string;
  roles: RoleTitle[];
  company: string;
  about: string;
  socials: Socials;
  image?: string;
  resumeUrl?: string;
}
