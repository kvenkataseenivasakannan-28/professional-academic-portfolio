/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Education, Certificate, Event, Achievement, Profile, Skill, Project } from './types';

export const PROFILE: Profile = {
  name: "Venkata Seenivasa K",
  pronouns: "(he/him)",
  title: "Aspiring MBA Student & Freelancer",
  company: "Solamalai College of Engineering",
  about: "Detail-oriented Digital Marketing professional and Canva Designer with hands-on experience in content creation, visual design, and video editing. Currently pursuing an MBA to strengthen business strategy, analytics, and management skills. Passionate about leveraging AI tools to improve design efficiency and engagement.",
  socials: {
    email: "kvenkataseenivasakannan@gmail.com",
    phone: "+91 8248908247",
    twitter: "https://x.com/Seenivasa280305",
    github: "https://github.com/kvenkataseenivasakannan-28",
    linkedin: "https://www.linkedin.com/in/venktaseenivasa",
    scholar: "#",
    orcid: "#",
    instagram: "https://www.instagram.com/seenivasa.builds?igsh=ZnNmcHY2MHltdXpn",
    whatsapp: "https://api.whatsapp.com/send?phone=918248908247"
  },
  image: "/my.png",
  resumeUrl: "https://drive.google.com/file/d/1w68iGAdEg-YbLfMTnHV-vqQWHqpXOFig/view?usp=drive_link" 
};

export const EDUCATION_DATA: Education[] = [
  {
    id: "1",
    degree: "MBA",
    institution: "Solamalai College of Engineering",
    period: "2025 — 2027",
    description: "Specializing in business strategy, analytics, and management. Pursuing academic excellence and practical integration of AI in business.",
    grade: "Status: Pursuing"
  },
  {
    id: "2",
    degree: "B.Com(IT)",
    institution: "Yadava College, Madurai",
    period: "2022 — 2025",
    description: "Comprehensive study of commerce principles infused with IT frameworks.",
    grade: "Aggregate: 61%"
  },
  {
    id: "3",
    degree: "H.S.C",
    institution: "V.H.N Boys Higher Secondary School, Madurai",
    period: "2021 — 2022",
    grade: "Percentage: 55%"
  },
  {
    id: "4",
    degree: "S.S.L.C",
    institution: "V.H.N Boys Higher Secondary School, Madurai",
    period: "2019 — 2020",
    grade: "Percentage: 50%"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "c1",
    name: "Search Engine Optimization and Content Marketing",
    issuer: "IBM (Coursera)",
    date: "Dec 2, 2025",
    url: "https://coursera.org/share/69ab935f4c3a48ea5111802ca90f8066",
    image: "/SEO.jpg"
  },
  {
    id: "c2",
    name: "Foundations of Digital Marketing and E-commerce",
    issuer: "Google (Coursera)",
    date: "Jul 5, 2025",
    url: "https://coursera.org/share/7bbf3fb539e11b0b518a19e15ae5026d",
    image: "/Certificate-2.jpg"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "p1",
    title: "Face Recognition Attendance System",
    description: "Developed a real-time attendance system using Python and OpenCV. Automated student attendance tracking using facial recognition and stored data directly into a database, reducing manual errors.",
    github: "https://github.com/kvenkataseenivasakannan-28/Face-Recognition-Attendance-System",
    tags: []
  }
];

export const EVENTS: Event[] = [
  {
    id: "e1",
    title: "Medicals Purchase Entry",
    role: "Part-time",
    organization: "Arumugam Medicals",
    date: "JAN 2025 – MAR 2025",
    description: "Managed purchase entries and handled data inventory for medical supplies."
  }
];

export const ACHIEVEMENTS: Achievement[] = [];

export const SKILLS_DATA: Skill[] = [
  { name: "Canva, Figma, Adobe Firefly", level: 95, category: 'Technical' },
  { name: "Visual Design (Flyer, Brochure, Logo)", level: 90, category: 'Technical' },
  { name: "SEO & Digital Marketing", level: 85, category: 'Technical' },
  { name: "Python & Video Editing", level: 80, category: 'Technical' },
  { name: "Attention to Detail", level: 95, category: 'Soft' },
  { name: "Communication & Teamwork", level: 90, category: 'Soft' },
  { name: "Creativity & Problem Solving", level: 85, category: 'Soft' },
  { name: "Quick Learner", level: 90, category: 'Soft' },
];
