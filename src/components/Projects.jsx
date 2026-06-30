import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const projects = portfolioConfig.projects;

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Spring Boot / Java', value: 'Spring Boot' },
    { label: 'React / Frontend', value: 'React' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tech.includes(filter));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3" id="projects-section-subtitle">
            03 . Portfolios
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight" id="projects-section-title">
            Featured Projects
          </h3>
          <p className="text-slate-400 mt-2">A collection of full-stack services, enterprise solutions, and immersive web apps.</p>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex justify-center items-center gap-3 flex-wrap mb-12" id="project-filters">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                filter === f.value
                  ? 'bg-purple-500/20 border border-purple-500/40 text-purple-300 shadow-md shadow-purple-900/10'
                  : 'bg-white/5 border border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                key={project.id}
                className="glass-card hover:glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between h-[450px] group transition-all duration-300"
                id={project.id}
              >
                <div>
                  {/* Project Image Header */}
                  <div className="h-44 w-full overflow-hidden relative border-b border-white/5 bg-slate-950">
                    <img 
                      src={`/${project.id}.png`} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Decorative Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c15]/90 to-transparent" />
                  </div>
                  
                  <div className="p-6 space-y-3">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                        <Code className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 space-y-6">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] sm:text-xs font-semibold text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-white/10 hover:border-purple-500/50 bg-white/5 hover:bg-purple-500/10 text-white font-semibold text-xs transition-all duration-300"
                      id={`${project.id}-github`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Repository</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md shadow-purple-950/20 transition-all duration-300"
                      id={`${project.id}-live`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
