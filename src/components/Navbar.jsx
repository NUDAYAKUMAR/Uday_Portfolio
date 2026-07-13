import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTerminal } from 'react-icons/fa';
import { personalData, navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section finder
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'hero';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the top of viewport, mark it active
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-6 md:px-12 ${
          scrolled
            ? 'background-blur-md bg-opacity-70 border-b border-border shadow-2xl bg-primary py-3'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ backdropFilter: scrolled ? 'blur(16px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none' }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity magnet-target"
          >
            {/* <FaTerminal className="text-accent-cyan text-base" /> */}
            <span>
              Fresher<span className="text-accent-blue"></span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {navLinks.map(({ label, href }) => {
                const isCurrent = activeSection === href.substring(1);
                return (
                  <li key={label} className="relative">
                    <a
                      href={href}
                      className={`relative z-10 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 block ${
                        isCurrent ? 'text-white' : 'text-text-secondary hover:text-white'
                      }`}
                    >
                      {label}
                    </a>
                    {isCurrent && (
                      <motion.div
                        layoutId="activeNavHighlight"
                        className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/30 rounded-full z-0 pointer-events-none"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Resume Button */}
            <a
              href={personalData.resumeUrl}
              download
              className="magnet-target flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-accent-blue to-accent-cyan hover:from-accent-cyan hover:to-accent-blue text-white rounded-full transition-all duration-300 shadow-md hover:shadow-cyan-500/20"
            >
              <FaDownload className="text-[10px]" /> Resume
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile navigation menu"
            className="md:hidden flex flex-col justify-between w-6 h-4 bg-transparent border-none cursor-pointer focus:outline-none z-50"
          >
            <span
              className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[8px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Slides from Top / Fade in) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 bg-primary/95 border-b border-border p-6 z-30 shadow-2xl flex flex-col gap-4 md:hidden"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-text-secondary hover:text-white font-medium py-3 border-b border-white/5 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={personalData.resumeUrl}
              download
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-sm font-semibold rounded-lg shadow-lg"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
