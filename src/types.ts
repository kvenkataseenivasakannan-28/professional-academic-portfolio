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
  date: string;
  description: string;
  category: 'Awards' | 'Volunteer & Leadership';
  tags?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
  tags?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Technical' | 'Soft' | 'Other';
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
  company: string;
  about: string;
  socials: Socials;
  image?: string;
  resumeUrl?: string;
}
