import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { FaLaptopCode } from 'react-icons/fa';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  // Define orbit nodes based on skills
  const innerRing = skillsData.filter(s => ['Java', 'JavaScript', 'React.js'].includes(s.name));
  const middleRing = skillsData.filter(s => ['Node.js', 'Express.js', 'MongoDB', 'SQL & MySQL'].includes(s.name));
  const outerRing = skillsData.filter(s => ['Python', 'Socket.io', 'JWT Auth', 'Git & GitHub'].includes(s.name));

  const getOrbitStyle = (index, total, radius, duration) => {
    const startAngle = (index * 360) / total;
    return {
      '--orbit-radius': `${radius}px`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-20px',
      marginLeft: '-20px',
      animation: `orbit ${duration}s linear infinite`,
      animationDelay: `-${(startAngle / 360) * duration}s`,
    };
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent-cyan mb-3">// technology_stack</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Skills & Core Expertise</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Category filter & Skill Cards Grid */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-accent-blue to-accent-cyan border-transparent text-white shadow-lg shadow-accent-blue/15'
                      : 'bg-card border-glass-border text-text-secondary hover:text-white hover:border-accent-blue/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* List of Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={skill.name}
                    className="glass-panel border border-glass-border rounded-xl p-4 flex flex-col hover:border-accent-cyan/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                        >
                          <span style={{ color: skill.color }}>{skill.icon}</span>
                        </div>
                        <span className="font-semibold text-white text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-accent-cyan">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Skills Galaxy orbit visualization */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center items-center h-[420px] relative">
            <div className="relative w-[360px] h-[360px] flex items-center justify-center">
              
              {/* Inner Orbit Circle Line */}
              <div className="absolute w-[140px] h-[140px] border border-dashed border-accent-blue/10 rounded-full pointer-events-none" />
              {/* Middle Orbit Circle Line */}
              <div className="absolute w-[250px] h-[250px] border border-dashed border-accent-cyan/10 rounded-full pointer-events-none" />
              {/* Outer Orbit Circle Line */}
              <div className="absolute w-[360px] h-[360px] border border-dashed border-accent-purple/10 rounded-full pointer-events-none" />

              {/* Center Core Node */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent-blue to-accent-cyan flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.5)] z-20 animate-pulse-ring cursor-pointer group">
                <FaLaptopCode className="text-white text-2xl group-hover:scale-110 transition-transform" />
              </div>

              {/* Inner orbit nodes */}
              {innerRing.map((skill, i) => (
                <div
                  key={skill.name}
                  style={getOrbitStyle(i, innerRing.length, 70, 20)}
                  className="group z-10"
                >
                  <div
                    style={{ border: `1px solid ${skill.color}40`, background: 'rgba(17, 24, 39, 0.95)' }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg group-hover:scale-125 group-hover:border-white transition-all cursor-pointer relative"
                    title={skill.name}
                  >
                    <span>{skill.icon}</span>
                    {/* Tooltip */}
                    <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-primary border border-glass-border text-[10px] text-white rounded font-mono pointer-events-none whitespace-nowrap transition-opacity">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}

              {/* Middle orbit nodes */}
              {middleRing.map((skill, i) => (
                <div
                  key={skill.name}
                  style={getOrbitStyle(i, middleRing.length, 125, 30)}
                  className="group z-10"
                >
                  <div
                    style={{ border: `1px solid ${skill.color}40`, background: 'rgba(17, 24, 39, 0.95)' }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg group-hover:scale-125 group-hover:border-white transition-all cursor-pointer relative"
                    title={skill.name}
                  >
                    <span>{skill.icon}</span>
                    {/* Tooltip */}
                    <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-primary border border-glass-border text-[10px] text-white rounded font-mono pointer-events-none whitespace-nowrap transition-opacity">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}

              {/* Outer orbit nodes */}
              {outerRing.map((skill, i) => (
                <div
                  key={skill.name}
                  style={getOrbitStyle(i, outerRing.length, 180, 45)}
                  className="group z-10"
                >
                  <div
                    style={{ border: `1px solid ${skill.color}40`, background: 'rgba(17, 24, 39, 0.95)' }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg group-hover:scale-125 group-hover:border-white transition-all cursor-pointer relative"
                    title={skill.name}
                  >
                    <span>{skill.icon}</span>
                    {/* Tooltip */}
                    <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-primary border border-glass-border text-[10px] text-white rounded font-mono pointer-events-none whitespace-nowrap transition-opacity">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* Stop orbit rotations on galaxy hover */
        .lg\\:col-span-6:hover div[style*="animation"] {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
