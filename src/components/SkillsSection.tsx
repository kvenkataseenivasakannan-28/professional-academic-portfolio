/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../constants";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-24 px-8 lg:px-32 bg-gradient-to-b from-[#0a1628] to-[#050B18] text-white" id="skills">
      {/* Section Header */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <h2 className="text-3xl lg:text-5xl font-black mb-4">Technical Skills</h2>
        <p className="text-xl text-gray-400">My expertise across various technologies and tools</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-white/10">
        {SKILL_CATEGORIES.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
              activeTab === idx
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => {
            const skillName = typeof skill === "string" ? skill : skill.name;
            const level = typeof skill === "string" ? undefined : skill.level;

            return (
              <motion.div
                key={skillName}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-blue-600/10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl mb-2">
                    {SKILL_CATEGORIES[activeTab].skills[idx].icon || "💻"}
                  </div>
                  <p className="font-semibold text-sm text-white mb-2">{skillName}</p>
                  
                  {level && (
                    <div className="w-full">
                      <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${level}%` }}
                          transition={{ duration: 1, delay: idx * 0.05 }}
                          className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{level}%</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
