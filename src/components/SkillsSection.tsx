/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../constants";

// Static class maps — fully visible to Tailwind IntelliSense
const CARD_CLASSES = [
  {
    card: "bg-gradient-to-br from-violet-600/20 to-purple-900/20 border-violet-500/30 shadow-violet-500/10",
    dot: "bg-violet-400",
    badge: "bg-violet-500/15 text-violet-300 border border-violet-500/30 hover:bg-violet-500/30 hover:border-violet-400/60",
    icon: "🎨",
    wide: true,
  },
  {
    card: "bg-gradient-to-br from-purple-600/20 to-pink-900/20 border-purple-500/30 shadow-purple-500/10",
    dot: "bg-purple-400",
    badge: "bg-purple-500/15 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-400/60",
    icon: "📢",
    wide: false,
  },
  {
    card: "bg-gradient-to-br from-pink-600/20 to-rose-900/20 border-pink-500/30 shadow-pink-500/10",
    dot: "bg-pink-400",
    badge: "bg-pink-500/15 text-pink-300 border border-pink-500/30 hover:bg-pink-500/30 hover:border-pink-400/60",
    icon: "🎬",
    wide: false,
  },
  {
    card: "bg-gradient-to-br from-blue-600/20 to-cyan-900/20 border-blue-500/30 shadow-blue-500/10",
    dot: "bg-blue-400",
    badge: "bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400/60",
    icon: "💻",
    wide: true,
  },
  {
    card: "bg-gradient-to-br from-emerald-600/20 to-teal-900/20 border-emerald-500/30 shadow-emerald-500/10",
    dot: "bg-emerald-400",
    badge: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 hover:border-emerald-400/60",
    icon: "🤝",
    wide: false,
  },
  {
    card: "bg-gradient-to-br from-orange-600/20 to-amber-900/20 border-orange-500/30 shadow-orange-500/10",
    dot: "bg-orange-400",
    badge: "bg-orange-500/15 text-orange-300 border border-orange-500/30 hover:bg-orange-500/30 hover:border-orange-400/60",
    icon: "📊",
    wide: false,
  },
] as const;

export function SkillsSection() {
  return (
    <section
      className="relative py-24 px-6 lg:px-20 bg-gradient-to-b from-[#0a1628] to-[#050B18] text-white overflow-hidden"
      id="skills"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-gray-400">
          Expertise
        </span>
        <h2 className="text-4xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          A comprehensive view of my expertise across design, marketing,
          development, and beyond.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {SKILL_CATEGORIES.map((category, idx) => {
          const style = CARD_CLASSES[idx % CARD_CLASSES.length];
          const isWide = style.wide && (idx === 0 || idx === 3);

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
              className={[
                "relative group rounded-2xl border backdrop-blur-sm p-6 flex flex-col gap-4 cursor-default shadow-xl transition-all duration-300",
                style.card,
                isWide ? "lg:col-span-2" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Card top row */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2.5 h-2.5 rounded-full shadow-lg ${style.dot}`}
                  />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.name}
                  </h3>
                </div>
                <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {style.icon}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-relaxed -mt-1">
                {category.description}
              </p>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {(
                  category.skills as Array<
                    string | { name: string; level?: number; note?: string }
                  >
                ).map((skill, sIdx) => {
                  const skillName =
                    typeof skill === "string" ? skill : skill.name;
                  return (
                    <motion.span
                      key={skillName}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.25,
                        delay: idx * 0.06 + sIdx * 0.04,
                      }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-default select-none ${style.badge}`}
                    >
                      {skillName}
                    </motion.span>
                  );
                })}
              </div>

              {/* Subtle inner glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
