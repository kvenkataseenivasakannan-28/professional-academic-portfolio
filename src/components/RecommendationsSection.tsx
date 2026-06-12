/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { RECOMMENDATIONS } from "../constants";
import { Quote } from "lucide-react";

export function RecommendationsSection() {
  if (!RECOMMENDATIONS || RECOMMENDATIONS.length === 0) return null;

  return (
    <section className="relative py-24 px-8 lg:px-32 bg-gradient-to-b from-[#0a1628] to-[#050B18] text-white">
      {/* Section Header */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <h2 className="text-3xl lg:text-5xl font-black mb-4">Recommendations</h2>
        <p className="text-xl text-gray-400">What mentors and colleagues say about my work</p>
      </motion.div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RECOMMENDATIONS.map((rec, idx) => (
          <motion.div
            key={rec.id}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group relative"
          >
            {/* Recommendation Card */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-12 h-12 text-blue-400" />
              </div>

              {/* Recommendation Text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                "{rec.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {rec.image && (
                  <img
                    src={rec.image}
                    alt={rec.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div className="flex-1">
                  <p className="font-bold text-white">{rec.author}</p>
                  <p className="text-sm text-gray-400">{rec.title}</p>
                  <p className="text-xs text-gray-500">{rec.role}</p>
                </div>
              </div>

              {/* Date */}
              <p className="text-xs text-gray-500 mt-4">{rec.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
