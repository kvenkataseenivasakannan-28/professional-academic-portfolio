/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { EVENTS } from "../constants";
import { Briefcase } from "lucide-react";

export function EventsSection() {
  if (EVENTS.length === 0) return null;
  return (
    <section className="px-8 lg:px-16 py-12 flex flex-col items-center" id="experience">
      <div className="flex items-center gap-3 mb-12 bg-emerald-600/10 border border-emerald-500/20 px-6 py-2.5 rounded-full">
         <div className="p-1 bg-emerald-500/20 rounded text-emerald-400">
           <Briefcase size={18} />
         </div>
         <span className="font-bold text-sm text-emerald-200">Work Experience</span>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-4xl">
        {EVENTS.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-sm hover:shadow-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center group hover:bg-gradient-to-br hover:from-white/10 hover:to-emerald-900/10 hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-500/20 cursor-default relative overflow-hidden min-w-[280px] max-w-[340px]"
          >
            <div className="flex flex-col items-center mb-4">
              <span className="font-sans font-medium text-lg text-emerald-400 mb-2">{event.organization}</span>
              <h3 className="text-xl font-bold text-white/90 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{event.title}</h3>
            </div>
            
            <div className="flex flex-col items-center gap-4 mb-4">
              <span className="px-4 py-1.5 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold text-[11px] uppercase tracking-widest rounded-full">
                {event.role}
              </span>
              <span className="font-mono text-xs opacity-60 text-white/60 tracking-widest uppercase">{event.date}</span>
            </div>

            <div className="w-12 h-px bg-emerald-500/20 mb-4" />

            <p className="text-sm text-white/70 leading-relaxed">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
