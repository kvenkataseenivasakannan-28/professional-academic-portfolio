/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Camera } from "lucide-react";

export function FaceRecognitionSection() {
  return (
    <section className="px-8 lg:px-16 py-12 flex flex-col items-center" id="face-recognition">
      <div className="flex items-center gap-3 mb-12 bg-purple-600/10 border border-purple-500/20 px-6 py-2.5 rounded-full">
        <div className="p-1 bg-purple-500/20 rounded text-purple-400">
          <Camera size={18} />
        </div>
        <span className="font-bold text-sm text-purple-200">Face Recognition</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="relative group">
          {/* Glass Effect Card */}
          <div className="relative p-6 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02]">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
              <img
                src="/face-recognition.webp"
                alt="Face Recognition"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#050B18]/40 to-transparent pointer-events-none rounded-3xl" />

            {/* Title */}
            <div className="mt-6 text-center">
              <h3 className="text-lg font-bold text-white/90 mb-2">
                Face Detection & Recognition
              </h3>
              <p className="text-sm text-gray-400">
                Advanced facial analysis and recognition capabilities
              </p>
            </div>
          </div>

          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-600/30 blur-3xl rounded-full mix-blend-screen animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
