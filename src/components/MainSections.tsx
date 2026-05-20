/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { EDUCATION_DATA } from "../constants";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section className="px-8 lg:px-16 py-12 flex flex-col items-center" id="education">
      <div className="flex items-center gap-3 mb-12 bg-cyan-600/10 border border-cyan-500/20 px-6 py-2.5 rounded-full">
         <div className="p-1 bg-cyan-500/20 rounded text-cyan-400">
           <GraduationCap size={18} />
         </div>
         <span className="font-bold text-sm text-cyan-200">Education</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {EDUCATION_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="section-card flex flex-col items-center text-center gap-4 group"
          >
            <div className="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg overflow-hidden relative group-hover:scale-110 transition-transform">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 leading-tight text-white/90">{item.degree}</h3>
              <p className="text-sm opacity-60 mb-2 text-white/60">{item.institution}</p>
              <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest text-white/40">{item.period}</p>
              {item.grade && (
                <p className="mt-2 text-[10px] font-bold text-cyan-400 uppercase tracking-tighter opacity-80">{item.grade}</p>
              )}
              <div className="mt-auto pt-4 border-t border-white/5 hidden">
                 {/* Place for additional info if needed */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
