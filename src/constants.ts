/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Education, Certificate, Event, Achievement, Profile, Skill, Project, SkillCategory } from './types';

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
  resumeUrl: "https://drive.google.com/file/d/1w68iGAdEg-YbLfMTnHV-vqQWHqpXOFig/view?usp=sharing" 
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
    image: "/face-recognition.webp",
    tags: ["Python", "OpenCV", "AI/ML"]
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

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    title: "Best Disciplined Student Award",
    date: "2024–2025",
    category: "Awards",
    description: "Awarded for outstanding discipline, conduct, and commitment to academic excellence.",
    tags: ["Discipline", "Excellence"]
  },
  {
    id: "a2",
    title: "College Day Appreciation Award",
    date: "2025–2026",
    category: "Awards",
    description: "Received appreciation for administrative support and contributions to institutional activities.",
    tags: ["College", "Leadership"]
  },
  {
    id: "a3",
    title: "Innovative Project Expo 2025 – Participant",
    date: "2025",
    category: "Awards",
    description: "Presented the Face Recognition Attendance System during the Engineer's Day Innovation Expo at STEM Club, Solamalai College of Engineering.",
    tags: ["Innovation", "STEM", "Project"]
  },
  {
    id: "a4",
    title: "Business Quiz 2025 – Participant",
    date: "2025",
    category: "Awards",
    description: "Competed in an intercollegiate business quiz organized by the National Institute of Personnel Management (NIPM) Madurai Chapter.",
    tags: ["Business", "Competition"]
  },
  {
    id: "a5",
    title: "Data Analytics Training Program",
    date: "2026",
    category: "Awards",
    description: "Completed a two-day on-campus training in Data Analytics and Business Intelligence at IIM Bangalore through E-Cell IIM Bangalore & Make Intern.",
    tags: ["Data Analytics", "Training", "IIM"]
  },
  {
    id: "v1",
    title: "Mega Job Fair 2026 Volunteer",
    date: "2026",
    category: "Volunteer & Leadership",
    description: "Coordinated recruitment activities and supported industry-student engagement throughout the event organized by TNATPO at Solamalai College of Engineering. Commended for dedicated service.",
    tags: ["Recruitment", "Volunteer", "Leadership"]
  },
  {
    id: "v2",
    title: "Industry Leadership Connect – HCLTech",
    date: "2026",
    category: "Volunteer & Leadership",
    description: "Contributed to the successful execution of the 3rd Edition Industry Leadership Connect Program in Madurai.",
    tags: ["Leadership", "Industry", "HCLTech"]
  },
  {
    id: "v3",
    title: "Karuppu Audio Launch Event Volunteer",
    date: "2026",
    category: "Volunteer & Leadership",
    description: "Appreciated for exceptional contribution and volunteer service during the movie audio launch event at Solamalai College of Engineering.",
    tags: ["Event", "Volunteer"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Design & Visual Tools",
    color: "bg-violet-500",
    description: "Professional design software expertise",
    skills: ["Canva", "Figma", "Adobe Firefly", "Adobe Creative Suite", "Graphic Design", "UI/UX Design"]
  },
  {
    name: "Digital Marketing",
    color: "bg-purple-500",
    description: "Marketing & content strategies",
    skills: ["SEO Optimization", "Content Marketing", "Social Media Marketing", "Email Marketing", "Google Analytics", "Campaign Management"]
  },
  {
    name: "Video & Media Production",
    color: "bg-pink-500",
    description: "Multimedia creation & editing",
    skills: ["Video Editing", "Motion Graphics", "Audio Engineering", "Video Production", "Thumbnail Design", "Content Creation"]
  },
  {
    name: "Programming & Development",
    color: "bg-blue-500",
    description: "Software development skills",
    skills: ["Python", "JavaScript", "Web Development", "Data Analysis", "API Integration", "Database Design"]
  },
  {
    name: "Professional Competencies",
    color: "bg-emerald-500",
    description: "Core soft skills",
    skills: ["Communication", "Problem Solving", "Teamwork", "Leadership", "Creativity", "Project Management"]
  },
  {
    name: "Business & Analytics",
    color: "bg-orange-500",
    description: "Business intelligence tools",
    skills: ["Data Analytics", "Business Intelligence", "Financial Analysis", "Market Research", "Strategic Planning", "Dashboard Development"]
  }
];
