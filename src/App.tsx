/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { ProfileHeader } from "./components/ProfileHeader";
import { EducationSection } from "./components/MainSections";
import { SkillsSection } from "./components/SkillsSection";
import { FaceRecognitionSection } from "./components/FaceRecognitionSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EventsSection } from "./components/EventsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

// 1. Import Vercel Analytics specifically for React/Vite
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <ThemeProvider>
      <div className="max-w-7xl mx-auto md:px-4">
        <div className="main-container shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <main>
            <ProfileHeader />
            <SkillsSection />
            <FaceRecognitionSection />
            <EducationSection />
            <EventsSection />
            <ProjectsSection />
            <AchievementsSection />
            <CertificatesSection />
          </main>
          <Footer />
        </div>
      </div>
      
      {/* 2. Add the Analytics component here */}
      <Analytics />
      
    </ThemeProvider>
  );
}