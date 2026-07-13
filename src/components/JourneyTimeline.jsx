import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData, educationData, achievementsData } from '../data/portfolioData';

export default function JourneyTimeline() {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Key Milestones' },
  ];

  return (
    <section id="journey" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] bg-accent-purple/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          {/* <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent-purple mb-3">// timeline_tracker</p> */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Developer Journey</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mx-auto md:mx-0" />
        </motion.div>

        {/* Tab Selection Bar */}
        <div className="flex justify-center md:justify-start border-b border-glass-border mb-12 relative pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-4">
            {tabs.map((tab) => {
              const isCurrent = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wider transition-colors duration-300 ${
                    isCurrent ? 'text-white' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {tab.label}
                  {isCurrent && (
                    <motion.div
                      layoutId="activeTimelineTab"
                      className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple to-accent-blue"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Content Grid */}
        <div className="relative">
          {/* Vertical central path line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-purple/50 via-accent-blue/30 to-transparent transform -translate-x-1/2 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-10"
            >
              {/* EXPERIENCE TAB */}
              {activeTab === 'experience' &&
                experienceData.map((exp, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Central timeline marker dot */}
                      <div className="absolute left-[15px] md:left-1/2 top-[24px] md:top-1/2 w-4 h-4 rounded-full bg-accent-purple border-[3px] border-primary transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#8b5cf6]" />

                      {/* Content panel spacing */}
                      <div className="w-full md:w-1/2 pl-10 md:px-10">
                        <div className="glass-panel border border-glass-border p-6 rounded-2xl relative hover:border-accent-purple/30 group">
                          {/* Inner pointer arrow */}
                          <div className={`hidden md:block absolute top-[28px] w-3 h-3 bg-[#0d1727] border-t border-l border-glass-border transform rotate-45 ${
                            isEven ? 'right-[-7px] rotate-[135deg]' : 'left-[-7px] rotate-[-45deg]'
                          }`} />

                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <span className="font-mono text-xs text-accent-purple font-semibold">{exp.period}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                              {exp.type}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-purple transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-accent-blue text-sm font-semibold mb-4">
                            🏢 {exp.company}
                          </p>

                          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                            {exp.achievements.map((ach, idx) => (
                              <li key={idx} className="text-xs text-text-secondary flex items-start gap-2">
                                <span className="text-accent-purple mt-0.5">▸</span>
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="hidden md:block w-1/2" />
                    </div>
                  );
                })}

              {/* EDUCATION TAB */}
              {activeTab === 'education' &&
                educationData.map((edu, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className="absolute left-[15px] md:left-1/2 top-[24px] md:top-1/2 w-4 h-4 rounded-full bg-accent-blue border-[3px] border-primary transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#3b82f6]" />

                      <div className="w-full md:w-1/2 pl-10 md:px-10">
                        <div className="glass-panel border border-glass-border p-6 rounded-2xl relative hover:border-accent-blue/30 group">
                          <div className={`hidden md:block absolute top-[28px] w-3 h-3 bg-[#0d1727] border-t border-l border-glass-border transform rotate-45 ${
                            isEven ? 'right-[-7px] rotate-[135deg]' : 'left-[-7px] rotate-[-45deg]'
                          }`} />

                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <span className="font-mono text-xs text-accent-blue font-semibold">{edu.year}</span>
                            <span className="text-xs font-bold text-accent-green font-mono flex items-center gap-1">
                              ⭐ {edu.grade}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">{edu.icon}</span>
                            <div>
                              <h3 className="text-lg font-bold text-white leading-tight">{edu.degree}</h3>
                              <p className="text-text-secondary text-sm">{edu.school}</p>
                            </div>
                          </div>

                          <p className="text-xs text-text-secondary leading-relaxed border-t border-glass-border pt-3">
                            {edu.desc}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block w-1/2" />
                    </div>
                  );
                })}

              {/* ACHIEVEMENTS TAB */}
              {activeTab === 'achievements' &&
                achievementsData.map((ach, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className="absolute left-[15px] md:left-1/2 top-[24px] md:top-1/2 w-4 h-4 rounded-full bg-accent-green border-[3px] border-primary transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#10b981]" />

                      <div className="w-full md:w-1/2 pl-10 md:px-10">
                        <div
                          style={{
                            boxShadow: `0 8px 32px 0 ${ach.accentColor}`,
                            borderColor: ach.borderColor,
                          }}
                          className="glass-panel border p-6 rounded-2xl relative hover:scale-[1.01] transition-transform duration-300"
                        >
                          <div className={`hidden md:block absolute top-[28px] w-3 h-3 bg-[#0d1727] border-t border-l border-glass-border transform rotate-45 ${
                            isEven ? 'right-[-7px] rotate-[135deg]' : 'left-[-7px] rotate-[-45deg]'
                          }`} />

                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                              {ach.icon}
                            </div>
                            <div>
                              <h3 className="text-base font-bold text-white mb-0.5">{ach.title}</h3>
                              <p className="text-xs text-text-secondary leading-relaxed">{ach.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block w-1/2" />
                    </div>
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
