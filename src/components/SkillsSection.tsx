/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../constants";
import { Zap } from "lucide-react";

export function SkillsSection() {
  return (
    <section className="px-8 lg:px-16 py-16 flex flex-col items-center bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" id="skills">
      {/* Header */}
      <div className="text-center mb-16 w-full max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-6 bg-violet-600/10 border border-violet-500/20 px-6 py-2.5 rounded-full w-fit mx-auto">
          <div className="p-1 bg-violet-500/20 rounded text-violet-400">
            <Zap size={18} />
          </div>
          <span className="font-bold text-sm text-violet-200">Technical Skills</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 text-lg">
          A comprehensive overview of my technical proficiency and professional competencies
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {SKILL_CATEGORIES.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <div className="relative h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
              {/* Category Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-1 h-6 rounded-full ${category.color}`} />
                  <h3 className="text-lg font-bold text-white">{category.name}</h3>
                </div>
                {category.description && (
                  <p className="text-sm text-gray-400 ml-4">{category.description}</p>
                )}
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 group/skill"
                  >
                    <div className={`w-2 h-2 rounded-full ${category.color} opacity-0 group-hover/skill:opacity-100 transition-opacity`} />
                    <span className="text-sm text-gray-300 group-hover/skill:text-gray-100 transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: "Skill Categories", value: SKILL_CATEGORIES.length },
          { label: "Total Skills", value: SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0) },
          { label: "Years Experience", value: "3+" },
          { label: "Expertise Level", value: "Advanced" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="text-center p-4 rounded-xl border border-white/10 bg-white/5"
          >
            <div className="text-2xl lg:text-3xl font-bold text-violet-400 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
