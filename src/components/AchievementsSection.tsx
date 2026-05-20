/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../constants";
import { Trophy } from "lucide-react";

export function AchievementsSection() {
  if (ACHIEVEMENTS.length === 0) return null;
  return (
    <section className="p-8 lg:p-16 flex flex-col items-center border-b border-[#1A1A1A]/5 dark:border-white/5" id="achievements">
      <div className="flex items-center justify-center gap-3 mb-8 bg-amber-600/10 border border-amber-500/20 w-fit px-6 py-2.5 rounded-full">
         <div className="p-1 bg-amber-500/20 rounded text-amber-400">
           <Trophy size={18} />
         </div>
         <span className="font-bold text-sm text-amber-200">Distinctions</span>
      </div>
      
      <div className="space-y-6 w-full flex flex-col items-center">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-sm hover:shadow-xl hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center w-full max-w-md"
          >
            <span className="font-mono text-[10px] opacity-40 uppercase block mb-2 dark:text-white/40">{achievement.date}</span>
            <h3 className="font-bold mb-2 dark:text-white/90 uppercase tracking-tight text-amber-400">{achievement.title}</h3>
            <p className="text-sm text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
