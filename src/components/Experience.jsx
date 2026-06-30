import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

export default function Experience() {
  const timelineData = portfolioConfig.timeline;

  const getTimelineIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'experience':
        return <Briefcase className="w-5 h-5 text-purple-400" />;
      default:
        return <Trophy className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-[92%] max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3" id="experience-section-subtitle">
            04 . Experience
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight" id="experience-section-title">
            My Professional Journey
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 md:ml-1/2 space-y-12 pb-8" id="experience-timeline">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={item.id} className="relative" id={item.id}>
                {/* Connector Node Dot */}
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)] z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                </div>

                {/* Content Box */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`md:w-[45%] md:ml-auto ml-8 ${
                    isEven ? 'md:mr-auto md:ml-0 md:text-right md:-translate-x-8' : 'md:ml-8 translate-x-0'
                  }`}
                >
                  <div className="glass-card hover:glass-card-hover p-6 rounded-2xl transition-all duration-300 relative">
                    {/* Floating Info Header */}
                    <div className={`flex flex-col sm:flex-row gap-3 sm:items-center justify-between mb-4 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/5 text-purple-300 w-fit">
                        <Calendar className="w-3 h-3" />
                        {item.year}
                      </span>
                      <div className={`p-2 rounded-xl bg-white/5 border border-white/10 w-fit text-purple-400 flex items-center justify-center`}>
                        {getTimelineIcon(item.type)}
                      </div>
                    </div>

                    {/* Title Details */}
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-sm font-semibold text-purple-400/90 mb-3">{item.institution}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
