import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

export default function Footer() {
  const { name, github, linkedin, email } = portfolioConfig.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-12 overflow-hidden bg-slate-950/40">
      <div className="w-[92%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Brand Details */}
        <div className="text-center md:text-left">
          <p className="text-slate-200 font-semibold tracking-wider">
            HEMANT<span className="text-purple-400">.</span>DEV
          </p>
          <p className="text-xs text-slate-400 mt-1">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>

        {/* Center Social links */}
        <div className="flex gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-300" id="footer-social-github">
            <Github className="w-4 h-4" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-300" id="footer-social-linkedin">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${email}`} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-300" id="footer-social-email">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center justify-center p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 text-purple-400 hover:scale-105 transition-all duration-300 cursor-pointer"
          aria-label="Back to top"
          id="footer-back-to-top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
