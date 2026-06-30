import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../portfolioConfig';
import { BookOpen, Target, Award } from 'lucide-react';

export default function About() {
  const { description, stats } = portfolioConfig.about;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3" id="about-section-subtitle">
            01 . Discover
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight" id="about-section-title">
            About Me
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8 space-y-6"
            >
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-400" />
                My Passion & Mission
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div className="flex gap-4">
                  <div className="p-3 h-fit rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Education</h5>
                    <p className="text-sm text-slate-400">B.Tech Computer Science</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 h-fit rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Focus</h5>
                    <p className="text-sm text-slate-400">Enterprise Java & Modern UIs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Stats Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card hover:glass-card-hover rounded-2xl p-6 text-center transition-all duration-300"
                id={stat.id}
              >
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
