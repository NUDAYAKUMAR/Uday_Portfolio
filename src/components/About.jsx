import { motion } from 'framer-motion';
import { personalData, statsData, coreSkillTags } from '../data/portfolioData';
import profileImg from "../assets/profile1.jpeg";
import RadarChart from './RadarChart';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent-blue mb-3">// bio_metrics</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* LEFT: Profile & Stats Grid */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Profile Avatar Card */}
            <motion.div
              variants={itemVariants}
              className="relative group overflow-hidden rounded-2xl border border-glass-border p-2 bg-card"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                <img
                  src={profileImg}
                  alt={personalData.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback in case profile image is missing
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            </motion.div>

            {/* Stats Metric Blocks */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {statsData.map(({ num, label }) => (
                <div
                  key={label}
                  className="glass-panel rounded-xl p-5 text-center flex flex-col justify-center border border-glass-border hover:border-accent-blue/30"
                >
                  <div className="text-2xl font-bold font-mono text-accent-blue">{num || "—"}</div>
                  <div className="text-xs text-text-secondary mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* MIDDLE: Text Biography & Tags */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              Information Science & Engineering Graduate &{' '}
              <span className="gradient-text">Java Full-Stack Innovator</span>
            </h3>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              {personalData.bio1}
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              {personalData.bio2}
            </p>

            {/* Core Expertise Tags */}
            <div className="mt-4">
              <h4 className="text-xs uppercase font-mono tracking-widest text-text-muted mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {coreSkillTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent-blue/5 border border-accent-blue/20 text-accent-blue hover:bg-accent-blue/10 hover:border-accent-blue/40 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Skill Distribution Radar Chart */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <RadarChart />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
