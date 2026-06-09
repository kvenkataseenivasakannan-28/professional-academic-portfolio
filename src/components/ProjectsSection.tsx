/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_DATA } from "../constants";
import { Code2, ExternalLink, Github } from "lucide-react";

interface ProjectActionProps {
  href: string;
  icon: any;
  label: string;
}

function ProjectAction({ href, icon: Icon, label }: ProjectActionProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative flex items-center justify-center">
      <motion.a 
        href={href} 
        target="_blank" 
        rel="noreferrer" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="p-2.5 bg-white/5 text-gray-500 hover:text-blue-400 hover:bg-blue-900/30 rounded-xl transition-all duration-300 border border-white/10 hover:border-blue-400/40 shadow-sm hover:shadow-md"
      >
        <Icon size={18} />
      </motion.a>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: -45, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            className="absolute z-10 px-2.5 py-1.5 bg-white text-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider rounded-lg whitespace-nowrap pointer-events-none shadow-xl shadow-black/20"
          >
            {label}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS_DATA.forEach(project => {
      project.tags?.forEach(tag => tags.add(tag));
    });
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS_DATA;
    return PROJECTS_DATA.filter(project => 
      project.tags?.includes(activeFilter)
    );
  }, [activeFilter]);

  if (PROJECTS_DATA.length === 0) return null;
  
  return (
    <section className="px-8 lg:px-16 py-12 flex flex-col items-center" id="projects">
      <div className="flex flex-col items-center gap-10 mb-16 w-full">
        <div className="flex items-center justify-center gap-3 bg-blue-600/10 border border-blue-500/20 px-6 py-2.5 rounded-full">
           <div className="p-1 bg-blue-500/20 rounded text-blue-400">
             <Code2 size={18} />
           </div>
           <span className="font-bold text-sm text-blue-200">Featured Projects</span>
        </div>

        {allTags.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === tag
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-white/5 text-gray-500 hover:bg-white/10 border border-white/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      <motion.div 
        layout
        className="flex flex-wrap justify-center gap-8 w-full max-w-6xl"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ 
                duration: 0.3,
                layout: { duration: 0.3 }
              }}
              onClick={() => {
                const primaryLink = project.link || project.github;
                if (primaryLink && primaryLink !== "#") {
                  window.open(primaryLink, "_blank", "noreferrer");
                }
              }}
              className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-sm hover:shadow-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center group hover:bg-linear-to-br hover:from-white/10 hover:to-blue-900/10 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer relative overflow-hidden min-w-[280px] max-w-[340px]"
            >
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              {project.image && (
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg relative z-10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              
              <div className="flex flex-col items-center mb-4 relative z-10">
                <h3 className="text-lg font-bold text-blue-400 uppercase tracking-tight mb-3 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                  {project.link && (
                    <ProjectAction 
                      href={project.link} 
                      icon={ExternalLink} 
                      label="Live Demo" 
                    />
                  )}
                </div>
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed mb-4 flex-grow max-w-md relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-auto mb-4 relative z-10">
                {project.tags?.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-blue-900/40 text-blue-400 font-mono text-[9px] uppercase tracking-wider rounded border border-blue-400/20">
                    {tag}
                  </span>
                ))}
              </div>

              {project.github && (
                <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
                  <ProjectAction 
                    href={project.github} 
                    icon={Github} 
                    label="View Source" 
                  />
                </div>
              )}


            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
