/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../constants";
import { Trophy, Award } from "lucide-react";
import { useMemo } from "react";

export function AchievementsSection() {
  if (ACHIEVEMENTS.length === 0) return null;

  const groupedAchievements = useMemo(() => {
    return ACHIEVEMENTS.reduce(
      (acc, achievement) => {
        if (!acc[achievement.category]) {
          acc[achievement.category] = [];
        }
        acc[achievement.category].push(achievement);
        return acc;
      },
      {} as Record<string, typeof ACHIEVEMENTS>
    );
  }, []);

  const categoryIcons: Record<string, any> = {
    "Awards": Trophy,
    "Volunteer & Leadership": Award,
  };

  const categoryColors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
    "Awards": {
      bg: "bg-amber-600/10",
      border: "border-amber-500/20",
      text: "text-amber-200",
      icon: "text-amber-400"
    },
    "Volunteer & Leadership": {
      bg: "bg-green-600/10",
      border: "border-green-500/20",
      text: "text-green-200",
      icon: "text-green-400"
    }
  };

  return (
    <section className="px-8 lg:px-16 py-12 flex flex-col items-center" id="achievements">
      <div className="flex items-center gap-3 mb-12 bg-amber-600/10 border border-amber-500/20 px-6 py-2.5 rounded-full">
        <div className="p-1 bg-amber-500/20 rounded text-amber-400">
          <Trophy size={18} />
        </div>
        <span className="font-bold text-sm text-amber-200">Achievements & Awards</span>
      </div>

      <div className="w-full space-y-16">
        {Object.entries(groupedAchievements).map(([category, achievements], categoryIndex) => {
          const Icon = categoryIcons[category] || Trophy;
          const colors = categoryColors[category];

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="w-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 ${colors.bg} rounded-lg border ${colors.border}`}>
                  <Icon size={20} className={colors.icon} />
                </div>
                <h2 className={`text-lg font-bold uppercase tracking-wide ${colors.text}`}>
                  {category}
                </h2>
                <div className={`flex-grow h-px ${colors.border} bg-gradient-to-r from-transparent to-transparent`} />
              </div>

              {/* Achievement Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-sm hover:shadow-xl hover:bg-white/10 transition-all duration-300 flex flex-col h-full group"
                  >
                    {/* Date Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-wider text-white/60 group-hover:border-white/20 transition-colors">
                        {achievement.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white/90 mb-3 leading-tight group-hover:text-white transition-colors">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/70 leading-relaxed mb-4 flex-grow">
                      {achievement.description}
                    </p>

                    {/* Tags */}
                    {achievement.tags && achievement.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {achievement.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/5 text-white/60 font-mono text-[8px] uppercase tracking-wider rounded border border-white/10 group-hover:border-white/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
