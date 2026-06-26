/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { RecommendationsSection } from "./components/RecommendationsSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

// 1. Import Vercel Analytics specifically for React/Vite
import { Analytics } from "@vercel/analytics/react";
// Import Vercel Speed Insights for React/Vite
import { SpeedInsights } from "@vercel/speed-insights/react";

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
            <ProjectsSection />
            <SkillsSection />
            <AchievementsSection />
            <RecommendationsSection />
            <Footer />
          </main>
        </div>
      </div>
      
      {/* 2. Add the Analytics component here */}
      <Analytics />
      
      {/* Add Speed Insights component */}
      <SpeedInsights />
      
    </ThemeProvider>
  );
}