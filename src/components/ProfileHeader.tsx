/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { PROFILE } from "../constants";
import { Github, Linkedin, Twitter, Mail, Download, ExternalLink, ArrowRight } from "lucide-react";

export function ProfileHeader() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    if (PROFILE.roles.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % PROFILE.roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row items-center gap-16 pt-40 pb-24 px-8 lg:px-32 bg-gradient-to-br from-[#050B18] via-[#0a1628] to-[#050B18] text-white min-h-[100vh] overflow-hidden" id="about">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 opacity-10 hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow text-blue-500">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" />
        </svg>
      </div>

      {/* Left: Content */}
      <motion.div 
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full lg:w-1/2"
      >
        <div className="mb-8 tracking-tighter">
          <p className="text-sm lg:text-base font-bold text-blue-400/80 leading-none mb-4 tracking-widest uppercase">Hello, I'm</p>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-2">
            {PROFILE.name.split(" ").slice(0, -1).join(" ")}
          </h1>
          <h1 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            {PROFILE.name.split(" ").slice(-1)[0]}
          </h1>
        </div>

        {/* Animated Role Titles */}
        <div className="h-16 mb-8 flex items-center">
          {PROFILE.roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={
                idx === activeRoleIndex
                  ? { y: 0, opacity: 1 }
                  : { y: -20, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
              className={`absolute text-2xl lg:text-4xl font-bold ${
                idx === activeRoleIndex
                  ? "text-white"
                  : "text-gray-500"
              }`}
            >
              {role.text}
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl">
          {PROFILE.about}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6 items-center mb-12">
          <a 
            href="#projects"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-full font-bold text-sm tracking-widest transition-all hover:scale-105 hover:shadow-[0_15px_40px_-5px_rgba(37,99,235,0.4)] group"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {PROFILE.resumeUrl && PROFILE.resumeUrl !== "#" && (
            <a 
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-blue-500/50 hover:border-blue-400 text-white px-7 py-4 rounded-full font-bold text-sm tracking-widest transition-all hover:scale-105 hover:bg-blue-600/10 group"
            >
              <span>Resume</span>
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4">
          {PROFILE.socials.github && PROFILE.socials.github !== "#" && (
            <SocialLink icon={<Github size={20} />} href={PROFILE.socials.github} label="GitHub" />
          )}
          {PROFILE.socials.linkedin && PROFILE.socials.linkedin !== "#" && (
            <SocialLink icon={<Linkedin size={20} />} href={PROFILE.socials.linkedin} label="LinkedIn" />
          )}
          {PROFILE.socials.email && PROFILE.socials.email !== "#" && (
            <SocialLink icon={<Mail size={20} />} href={`mailto:${PROFILE.socials.email}`} label="Email" />
          )}
          {PROFILE.socials.phone && PROFILE.socials.phone !== "#" && (
            <SocialLink icon={<ExternalLink size={20} />} href={`tel:${PROFILE.socials.phone}`} label="Phone" />
          )}
        </div>
      </motion.div>

      {/* Right: Image Container */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="relative z-10 w-full lg:w-1/2 flex justify-center"
      >
        <div className="relative group">
          {/* Glass Effect Card for Image */}
          <div className="relative p-4 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02]">
            <div className="relative w-full max-w-[350px] aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <img 
                src={PROFILE.image || "/my.png"} 
                alt={PROFILE.name}
                className="w-full h-full object-cover scale-130 transition-transform duration-1000 group-hover:scale-[1.6]"
              />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#050B18]/40 to-transparent pointer-events-none rounded-[3rem]" />
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/30 blur-3xl rounded-full mix-blend-screen animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={label}
      className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-blue-400 hover:border-blue-400/50 transition-all hover:scale-110 hover:bg-blue-600/10"
    >
      {icon}
    </a>
  );
}
