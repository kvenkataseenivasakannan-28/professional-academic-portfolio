/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ACHIEVEMENTS_DATA } from "../constants";
import { Award } from "lucide-react";

export function AchievementsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(ACHIEVEMENTS_DATA.map(a => a.category));
    return Array.from(cats);
  }, []);

  // Filter achievements
  const filteredAchievements = useMemo(() => {
    if (!activeCategory) return ACHIEVEMENTS_DATA;
    return ACHIEVEMENTS_DATA.filter(a => a.category === activeCategory);
  }, [activeCategory]);

  if (!ACHIEVEMENTS_DATA || ACHIEVEMENTS_DATA.length === 0) return null;

  const getCategoryEmoji = (category: string) => {
    const emojiMap: Record<string, string> = {
      "Technical Leadership": "🎯",
      "Hackathon Winner": "🏆",
      "Research": "🔬",
      "Gaming": "🎮",
      "Awards": "⭐",
      "Volunteer & Leadership": "🤝"
    };
    return emojiMap[category] || "✨";
  };

  return (
    <section className="relative py-24 px-8 lg:px-32 bg-gradient-to-b from-[#050B18] to-[#0a1628] text-white" id="achievements">
      {/* Section Header */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <h2 className="text-3xl lg:text-5xl font-black mb-4">Achievements</h2>
        <p className="text-xl text-gray-400">Recognition and milestones from my technical journey</p>
      </motion.div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {filteredAchievements.map((achievement, idx) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group relative"
          >
            <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center hover:bg-white/10">
              {/* Image or Icon */}
              {achievement.image ? (
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="text-5xl mb-2">{getCategoryEmoji(achievement.category)}</div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/80 via-[#050B18]/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex-1 flex flex-col justify-end">
                  <p className="font-bold text-sm text-white mb-1">{achievement.title}</p>
                  <p className="text-xs text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Category Filter Tags */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3"
      >
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
            activeCategory === null
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
              activeCategory === category
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }`}
          >
            {getCategoryEmoji(category)} {category}
          </button>
        ))}
      </motion.div>
    </section>
  );
}
