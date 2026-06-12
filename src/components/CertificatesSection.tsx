/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CERTIFICATES } from "../constants";
import { Award } from "lucide-react";

export function CertificatesSection() {
  if (CERTIFICATES.length === 0) return null;
  return (
    <section className="p-8 lg:p-16 flex flex-col items-center border-b border-white/5" id="certificates">
      <div className="flex items-center justify-center gap-3 mb-12 bg-indigo-600/10 border border-indigo-500/20 px-6 py-2.5 rounded-full">
         <div className="p-1 bg-indigo-500/20 rounded text-indigo-400">
           <Award size={18} />
         </div>
         <span className="font-bold text-sm text-indigo-200">Certifications</span>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-sm hover:shadow-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center group hover:bg-gradient-to-br hover:from-white/10 hover:to-indigo-900/10 hover:border-indigo-400/30 hover:shadow-2xl hover:shadow-indigo-500/20 cursor-pointer relative overflow-hidden min-w-[280px] max-w-[340px]"
          >
            <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            {cert.image && (
              <div className="w-full rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:border-indigo-500/20 transition-colors shadow-lg relative z-10">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <div className="flex flex-col items-center w-full relative z-10">
              <div className="flex flex-col items-center gap-2 mb-4">
                <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest text-white">{cert.date}</span>
                <h3 className="font-bold text-lg leading-tight text-indigo-400 uppercase tracking-tight transition-colors">{cert.name}</h3>
                <p className="text-xs italic text-white/60 font-serif">{cert.issuer}</p>
              </div>
              
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noreferrer" className="mb-4 text-[10px] uppercase tracking-widest font-bold text-indigo-400 border border-indigo-400/30 px-6 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                  Verify
                </a>
              )}
              
              {cert.description && (
                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl px-4">
                  {cert.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
