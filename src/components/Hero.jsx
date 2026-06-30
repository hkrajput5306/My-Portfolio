import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

export default function Hero() {
  const { name, title, subtitle, intro, github, linkedin, email } = portfolioConfig.personalInfo;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-blob-reverse" />

      <div className="w-[92%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        {/* Text Details */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Available for Internships & Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-gradient font-extrabold">{name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-slate-300"
          >
            {title} &bull; <span className="text-purple-400">{subtitle}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            {intro}
          </motion.p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/5 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300" id="hero-social-github">
              <Github className="w-5 h-5" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/5 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300" id="hero-social-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${email}`} className="p-2.5 rounded-xl border border-white/5 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300" id="hero-social-email">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3.5 px-6 rounded-xl shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              id="hero-cta-projects"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#resume"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 hover:border-purple-500/50 bg-white/5 hover:bg-purple-500/10 text-white font-medium py-3.5 px-6 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              id="hero-cta-resume"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Profile Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Glowing Border Background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Image Frame */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 p-2">
              <img
                src="/developer-avatar.png"
                alt="Hemant Rajput"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
                id="hero-avatar-img"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
