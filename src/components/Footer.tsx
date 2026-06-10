/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROFILE } from "../constants";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative py-16 px-8 lg:px-32 border-t border-white/10 bg-gradient-to-b from-[#0a1628] to-[#050B18] text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-black mb-4">{PROFILE.name}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Software professional based in Madurai. Building products and leveraging AI tools to solve real problems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm">
                Skills
              </a>
            </li>
            {PROFILE.resumeUrl && PROFILE.resumeUrl !== "#" && (
              <li>
                <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  Resume <ExternalLink size={14} />
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-bold mb-4">Connect</h3>
          <div className="flex flex-wrap gap-3">
            {PROFILE.socials.github && PROFILE.socials.github !== "#" && (
              <motion.a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-lg bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </motion.a>
            )}
            {PROFILE.socials.linkedin && PROFILE.socials.linkedin !== "#" && (
              <motion.a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-lg bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
            )}
            {PROFILE.socials.email && PROFILE.socials.email !== "#" && (
              <motion.a
                href={`mailto:${PROFILE.socials.email}`}
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-lg bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all"
                title="Email"
              >
                <Mail size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div>
          <h3 className="text-lg font-bold mb-4">Keyboard Shortcuts</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-white/10 border border-white/20 text-xs font-mono">⌘</kbd>
              <span className="text-gray-400">Open command menu</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-white/10 border border-white/20 text-xs font-mono">T</kbd>
              <span className="text-gray-400">Toggle theme</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Built with</span>
          <span>React</span>
          <span>&</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
