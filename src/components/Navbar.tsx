/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-scroll";
import { PROFILE } from "../constants";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Certificates", to: "certificates" },
  ];

  return (
    <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md lg:backdrop-blur-none bg-black/20 lg:bg-transparent transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs">
          {PROFILE.name.charAt(0)}
        </div>
        <span className="font-bold text-sm tracking-tight text-white">{PROFILE.name}</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            className="text-[13px] font-medium text-white/70 hover:text-white cursor-pointer transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* Contact button or empty if not needed */}
      </div>
    </div>
  );
}
