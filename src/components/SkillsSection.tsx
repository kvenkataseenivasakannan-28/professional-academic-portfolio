/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { SKILLS_DATA } from "../constants";
import { Zap } from "lucide-react";

export function SkillsSection() {
  const technicalSkills = SKILLS_DATA.filter(s => s.category === 'Technical');
  const softSkills = SKILLS_DATA.filter(s => s.category === 'Soft');

  return (
    <section className="px-8 lg:px-16 py-12 flex flex-col items-center" id="skills">
      <div className="flex items-center gap-3 mb-12 bg-violet-600/10 border border-violet-500/20 px-6 py-2.5 rounded-full">
         <div className="p-1 bg-violet-500/20 rounded text-violet-400">
           <Zap size={18} />
         </div>
         <span className="font-bold text-sm text-violet-200">Skills & Expertise</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
        {/* Technical Skills */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-8 flex items-center justify-center gap-2 text-white/90">
            <span className="w-1 h-6 bg-violet-500 rounded-full" />
            Technical Proficiency
          </h3>
          <div className="space-y-8">
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-8 flex items-center justify-center gap-2 text-white/90">
            <span className="w-1 h-6 bg-purple-400 rounded-full" />
            Core Competencies
          </h3>
          <div className="space-y-8">
            {softSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index }: { skill: any; index: number }) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-violet-400">{skill.name}</span>
        <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden transition-colors">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full rounded-full ${skill.category === 'Technical' ? 'bg-violet-600' : 'bg-purple-400'}`}
        />
      </div>
    </div>
  );
}
