/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PROFILE } from "../constants";
import { Github, Linkedin, Twitter, Mail, GraduationCap, Globe, Instagram, MessageCircle, Download } from "lucide-react";

export function ProfileHeader() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center gap-16 pt-40 pb-24 px-8 lg:px-32 bg-[#050B18] text-white min-h-[90vh] overflow-hidden" id="about">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 opacity-10 hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow text-blue-500">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" />
        </svg>
      </div>

      {/* Left: Image Container */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full lg:w-1/2 flex justify-center"
      >
        <div className="relative group">
          {/* Glass Effect Card for Image */}
          <div className="relative p-4 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02]">
            <div className="relative w-full max-w-[300px] aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <img 
                src={PROFILE.image || "/input_file_2.png"} 
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

      {/* Right: Content */}
      <motion.div 
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full lg:w-1/2"
      >
        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 px-5 py-2 rounded-lg text-[11px] font-black tracking-[0.25em] mb-10 uppercase">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
          About Me
        </div>
        
        <div className="mb-8 tracking-tighter">
          <p className="text-xl lg:text-3xl font-bold text-white/80 leading-none mb-3">HELLO, I'M</p>
          <h1 className="text-2xl lg:text-4xl font-black text-blue-500 uppercase tracking-tight">
            {PROFILE.name}
          </h1>
        </div>
        
        <h2 className="text-xl lg:text-2xl font-medium text-gray-300 mb-6">
          {PROFILE.title}
        </h2>

        <div className="flex items-center gap-2 text-blue-400/80 mb-10 font-bold text-sm tracking-widest uppercase">
          <GraduationCap size={18} />
          <span>{PROFILE.company}</span>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
          {PROFILE.about}
        </p>


        <div className="flex flex-wrap gap-6 items-center">
          {PROFILE."/resume.pdf" && PROFILE."/resume.pdf" !== "#" && (
            <a 
              href={PROFILE."/resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold text-xs tracking-widest transition-all hover:scale-105 hover:shadow-[0_15px_40px_-5px_rgba(37,99,235,0.4)] group"
            >
              <span>Resume</span>
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          )}
          
          <div className="flex flex-wrap gap-3">
             {PROFILE.socials.linkedin && PROFILE.socials.linkedin !== "#" && (
                <SocialLink icon={<Linkedin size={22} />} href={PROFILE.socials.linkedin} />
             )}
             {PROFILE.socials.github && PROFILE.socials.github !== "#" && (
                <SocialLink icon={<Github size={22} />} href={PROFILE.socials.github} />
             )}
             {PROFILE.socials.twitter && PROFILE.socials.twitter !== "#" && (
                <SocialLink icon={<Twitter size={22} />} href={PROFILE.socials.twitter} />
             )}
             {PROFILE.socials.instagram && PROFILE.socials.instagram !== "#" && (
                <SocialLink icon={<Instagram size={22} />} href={PROFILE.socials.instagram} />
             )}
             {PROFILE.socials.whatsapp && PROFILE.socials.whatsapp !== "#" && (
                <SocialLink icon={<MessageCircle size={22} />} href={PROFILE.socials.whatsapp} />
             )}
             {PROFILE.socials.email && (
                <SocialLink icon={<Mail size={22} />} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.socials.email}`} />
             )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}


function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-gray-400 hover:text-white"
    >
      {icon}
    </a>
  );
}
