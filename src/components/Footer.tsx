/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROFILE } from "../constants";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="px-8 lg:px-16 py-8 border-t border-[#1A1A1A]/5 dark:border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row gap-4 items-center opacity-30 dark:opacity-40 font-mono text-[10px] uppercase tracking-widest dark:text-white">
          <p>© {new Date().getFullYear()} {PROFILE.name}</p>
          <p>Designed and Built by Venkata Seenivasa K</p>
        </div>

        <div className="flex items-center gap-5">
          {PROFILE.socials.github && PROFILE.socials.github !== "#" && (
            <motion.a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
          )}
          {PROFILE.socials.linkedin && PROFILE.socials.linkedin !== "#" && (
            <motion.a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
          )}
          {PROFILE.socials.instagram && PROFILE.socials.instagram !== "#" && (
            <motion.a
              href={PROFILE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 dark:text-gray-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </motion.a>
          )}
          {PROFILE.socials.whatsapp && PROFILE.socials.whatsapp !== "#" && (
            <motion.a
              href={PROFILE.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 dark:text-gray-500 hover:text-green-500 dark:hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </footer>
  );
}
