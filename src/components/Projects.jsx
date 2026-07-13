import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChartBar } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
      className="glass-panel border border-glass-border rounded-2xl overflow-hidden flex flex-col group h-full"
    >
      {/* Cover Gradient/Image */}
      <div
        style={{ background: project.gradient }}
        className="h-44 flex items-center justify-center text-5xl relative overflow-hidden"
      >
        {/* Decorative Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Floating gradient glow behind icon */}
        <div className="absolute w-20 h-20 bg-white/20 rounded-full filter blur-md animate-pulse-ring" />

        <span className="relative z-10 transition-transform duration-500 group-hover:scale-125 select-none">{project.icon}</span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        
        {/* Text content */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {project.desc}
          </p>

          {/* Bullet points (recruiter/ATS focused) */}
          <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2">
            {project.bullets.map((b, idx) => (
              <li key={idx} className="text-xs text-text-secondary flex items-start gap-2">
                <span className="text-accent-cyan flex-shrink-0 mt-0.5">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Metrics Section */}
        <div>
          <div className="border-t border-glass-border pt-4 mb-5">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-cyan mb-3">
              <FaChartBar className="text-[10px]" />
              <span>Project Impact Metrics</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-primary/50 border border-glass-border/40 rounded-lg p-2 text-center"
                >
                  <div className="text-xs font-bold text-white font-mono leading-none">{metric.value}</div>
                  <div className="text-[9px] text-text-secondary mt-1 leading-none truncate" title={metric.label}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-semibold px-2 py-0.5 rounded bg-accent-blue/10 border border-accent-blue/20 text-accent-blue"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-accent-blue to-accent-cyan hover:from-accent-cyan hover:to-accent-blue text-white transition-all duration-300 shadow-md hover:shadow-cyan-500/10"
            >
              <FaExternalLinkAlt className="text-[9px]" /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold border border-border bg-card text-text-secondary hover:text-white hover:border-accent-cyan transition-colors duration-300"
            >
              <FaGithub className="text-[11px]" /> Codebase
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-accent-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent-blue mb-3">// featured_work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineering Solutions</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
