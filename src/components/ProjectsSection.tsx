/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { FEATURED_PROJECTS } from "../constants";
import { Github, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const displayProjects = FEATURED_PROJECTS.slice(0, 3);

  return (
    <section className="relative py-24 px-8 lg:px-32 bg-gradient-to-b from-[#050B18] to-[#0a1628] text-white" id="projects">
      {/* Section Header */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <h2 className="text-3xl lg:text-5xl font-black mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-400">Check out some of my recent work</p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-12 mb-12">
        {displayProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group relative"
          >
            {/* Project Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image Side */}
              <div className={`relative overflow-hidden rounded-2xl ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative h-80 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-2xl overflow-hidden">
                  <img
                    src={project.image || "/project-placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/60 to-transparent" />
                </div>
              </div>

              {/* Content Side */}
              <div className={`flex flex-col ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {/* Title and Description */}
                <h3 className="text-3xl lg:text-4xl font-black mb-4 text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                {project.tags && project.tags.length > 0 && (
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-600/20 border border-blue-500/50 text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-600/20 border border-blue-500/50 text-blue-300">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-8 space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300">{highlight.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all hover:scale-105 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all hover:bg-white/5"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all hover:bg-white/5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-blue-500/50 hover:border-blue-400 text-white font-bold hover:bg-blue-600/10 transition-all group"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
