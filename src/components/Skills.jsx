import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, Database } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

export default function Skills() {
  const skillsData = portfolioConfig.skills;

  const getIcon = (category) => {
    switch (category) {
      case 'Backend Development':
        return <Server className="w-6 h-6 text-blue-400" />;
      case 'Frontend Development':
        return <Globe className="w-6 h-6 text-purple-400" />;
      default:
        return <Database className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3" id="skills-section-subtitle">
            02 . Expertise
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight" id="skills-section-title">
            My Tech Stack
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((categoryObj, catIdx) => (
            <motion.div
              key={categoryObj.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-card rounded-3xl p-8 space-y-6 flex flex-col justify-between"
              id={`skills-category-${catIdx}`}
            >
              {/* Category Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    {getIcon(categoryObj.category)}
                  </div>
                  <h4 className="text-lg font-bold text-white">{categoryObj.category}</h4>
                </div>
                <div className="h-[1px] w-full bg-white/5" />
              </div>

              {/* Skills List */}
              <div className="space-y-5 flex-grow pt-2">
                {categoryObj.items.map((skill, skillIdx) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-400 font-semibold">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
