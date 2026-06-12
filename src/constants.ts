/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Education, Certificate, Event, Achievement, Profile, Skill, Project, SkillCategory, Recommendation } from './types';

export const PROFILE: Profile = {
  name: "Venkata Seenivasa K",
  pronouns: "(he/him)",
  title: "Aspiring MBA Student & Freelancer",
  roles: [
    { text: "Digital Marketing Professional" },
    { text: "Canva Designer" },
    { text: "Content Creator" },
    { text: "AI Enthusiast" }
  ],
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

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Face Recognition Attendance System",
    description: "Developed a real-time attendance system using Python and OpenCV. Automated student attendance tracking using facial recognition and stored data directly into a database, reducing manual errors.",
    github: "https://github.com/kvenkataseenivasakannan-28/Face-Recognition-Attendance-System",
    demo: "#",
    image: "/face-recognition.webp",
    tags: ["Python", "OpenCV", "AI/ML", "Database"],
    featured: true,
    highlights: [
      { icon: "✓", text: "Real-time facial recognition with 98% accuracy" },
      { icon: "✓", text: "Automated database integration for instant record-keeping" },
      { icon: "✓", text: "Reduced manual attendance errors by 95%" }
    ]
  },
  {
    id: "p2",
    title: "Digital Marketing Campaign Suite",
    description: "Comprehensive suite of marketing tools and templates for modern digital campaigns with analytics integration.",
    github: "#",
    demo: "#",
    image: "/marketing-suite.webp",
    tags: ["Marketing", "Analytics", "Canva", "Content Strategy"],
    featured: true,
    highlights: [
      { icon: "✓", text: "Created 50+ reusable design templates" },
      { icon: "✓", text: "Integrated with Google Analytics for real-time tracking" },
      { icon: "✓", text: "Achieved 3x engagement improvement for clients" }
    ]
  },
  {
    id: "p3",
    title: "AI-Powered Content Generator",
    description: "Leveraging AI tools and GPT integration to automate content creation and enhance design workflows.",
    github: "#",
    demo: "#",
    image: "/ai-content.webp",
    tags: ["AI/ML", "GPT", "Content Creation", "Automation"],
    featured: true,
    highlights: [
      { icon: "✓", text: "Automated content generation reducing time by 60%" },
      { icon: "✓", text: "Integrated GPT-4 for intelligent copywriting" },
      { icon: "✓", text: "Deployed across 10+ client projects" }
    ]
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

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "a1",
    title: "Best Digital Campaign",
    description: "Award for creating the most engaging digital marketing campaign",
    category: "Hackathon Winner",
    image: "/achievement-1.jpg"
  },
  {
    id: "a2",
    title: "Content Creator of the Year",
    description: "Recognition for outstanding content creation and visual design",
    category: "Technical Leadership",
    image: "/achievement-2.jpg"
  },
  {
    id: "a3",
    title: "AI Innovation Award",
    description: "Award for innovative use of AI tools in marketing and design",
    category: "Research",
    image: "/achievement-3.jpg"
  },
  {
    id: "a4",
    title: "Marketing Excellence",
    description: "Recognition for exceptional marketing strategy and execution",
    category: "Technical Leadership",
    image: "/achievement-4.jpg"
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "r1",
    text: "Venkata is an exceptional digital marketing professional with outstanding creative abilities. His attention to detail and innovative approach to content creation sets him apart.",
    author: "Anil Nigam",
    title: "Marketing Director",
    role: "Mentor & Manager",
    date: "July 1, 2024",
    image: "/profile-1.jpg"
  },
  {
    id: "r2",
    text: "Working with Venkata on our AI integration project was a pleasure. His technical skills combined with creative thinking delivered impressive results.",
    author: "Revathi B",
    title: "Associate Director",
    role: "Manager • SRM AP",
    date: "May 23, 2024",
    image: "/profile-2.jpg"
  }
];



export const SKILLS: Skill[] = [
  // Languages
  { name: "Python", level: 85, category: "Technical", icon: "🐍" },
  { name: "JavaScript", level: 75, category: "Technical", icon: "⚡" },
  { name: "HTML/CSS", level: 90, category: "Technical", icon: "🎨" },
  { name: "SQL", level: 80, category: "Technical", icon: "📊" },
  
  // Tools
  { name: "Canva", level: 95, category: "Technical", icon: "🎭" },
  { name: "Adobe Suite", level: 85, category: "Technical", icon: "🖼️" },
  { name: "Google Analytics", level: 80, category: "Technical", icon: "📈" },
  
  // Digital Marketing
  { name: "Content Strategy", level: 90, category: "Soft", icon: "📝" },
  { name: "SEO", level: 85, category: "Technical", icon: "🔍" },
  { name: "Social Media Marketing", level: 88, category: "Technical", icon: "📱" },
  
  // Soft Skills
  { name: "Communication", level: 92, category: "Soft", icon: "💬" },
  { name: "Problem Solving", level: 88, category: "Soft", icon: "🧩" },
  { name: "Creativity", level: 95, category: "Soft", icon: "✨" }
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
    skills: [
      { name: "Canva", level: 95, note: "Brand templates & marketing assets" },
      { name: "Figma", level: 90, note: "UI prototypes & component systems" },
      { name: "Adobe Firefly", level: 85, note: "AI-assisted creative generation" },
      { name: "Adobe Creative Suite", level: 88, note: "Photoshop, Illustrator, Premiere Pro" },
      { name: "Graphic Design", level: 95, note: "Print & digital collateral" },
      { name: "UI/UX Design", level: 90, note: "User-centered interfaces" }
    ]
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
