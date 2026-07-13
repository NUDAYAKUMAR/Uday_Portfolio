import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { personalData } from '../data/portfolioData';

// Custom typewriter hook
function useTypewriter(words, speed = 120, delay = 1500) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const word = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === word) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return currentText;
}

export default function Hero() {
  const terminalRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const typewriterText = useTypewriter([
    "Java Full Stack Developer",
    "Java Backend Specialist",
    "Information Science Graduate"
  ]);

  // Track mouse coordinates on terminal block to make it tilt
  const handleMouseMove = (e) => {
    if (!terminalRef.current) return;
    const rect = terminalRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates from -0.5 to 0.5
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    // Scale values to rotate degree limits (max 15 degrees)
    setRotateX(-y * 15);
    setRotateY(x * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-32"
    >
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] bg-accent-blue/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent-purple/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Columns (Left) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent-blue/10 border border-accent-blue/30 px-4 py-1.5 rounded-full text-xs md:text-sm text-accent-blue font-mono font-medium mb-6 animate-pulse-ring"
            >
              <span className="w-2.5 h-2.5 bg-accent-green rounded-full shadow-[0_0_8px_#10b981]" />
              Available for Software Engineer Roles
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-2 leading-none"
            >
              Hi, I'm <span className="gradient-text">{personalData.name}</span>
            </motion.h1>

            {/* Typewriter subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl sm:text-3xl font-semibold text-text-secondary h-12 mb-6"
            >
              <span className="text-white border-r-2 border-accent-cyan pr-1 font-mono">{typewriterText}</span>
            </motion.div>

            {/* Short Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-lg"
            >
              {personalData.tagline} Passionate about building secure, scalable full-stack applications using Java Spring Boot, React, Node.js, Express.js,  MySQL, MongoDB, REST APIs, JWT authentication, Socket.io, and WebRTC.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href={personalData.resumeUrl}
                download
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-blue to-accent-cyan text-white px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-accent-blue/20 magnet-target"
              >
                <FaDownload /> Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border border-accent-blue/40 text-white hover:bg-accent-blue/10 px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] magnet-target"
              >
                Let's Connect <FaArrowRight className="text-xs" />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: <FaGithub />, href: personalData.github, label: "GitHub" },
                { icon: <FaLinkedin />, href: personalData.linkedin, label: "LinkedIn" },
                { icon: <SiGmail />, href: `mailto:uday.ise.rymec@gmail.com`, label: "Email" }
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-lg border border-border bg-card flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-cyan hover:bg-accent-blue/10 transition-all duration-300 magnet-target text-lg"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Visual Column - Tilting 3D Terminal Card (Right) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              ref={terminalRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
              }}
              className="w-full max-w-[420px] cursor-pointer"
            >
              <motion.div
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: 'preserve-3d',
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="glass-panel rounded-2xl border border-glass-border p-6 shadow-2xl relative"
              >
                {/* Glow ring in card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 to-accent-cyan/5 rounded-2xl pointer-events-none" />

                {/* macOS control dots */}
                <div className="flex gap-1.5 mb-5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>

                {/* Terminal Content */}
                <div className="font-mono text-xs sm:text-sm leading-relaxed text-text-secondary" style={{ transform: 'translateZ(25px)' }}>
                  <div>
                    <span className="text-accent-purple">const</span> <span className="text-accent-blue">developer</span> = <span className="text-white">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    name: <span className="text-accent-green">"N UdayaKumar"</span>,
                  </div>
                  <div className="pl-4">
                    education: <span className="text-accent-green">"B.E. ISE"</span>,
                  </div>
                  <div className="pl-4">
                    cgpa: <span className="text-accent-cyan">8.74</span>,
                  </div>
                  <div className="pl-4">
                    stack: <span className="text-white">[</span>
                    <span className="text-accent-green">"Java"</span>, <span className="text-accent-green">"Spring Boot"</span>
                    <span className="text-white">]</span>,
                  </div>
                  <div className="pl-4">
                    seeking: <span className="text-accent-green">"Software Engineer roles"</span>,
                  </div>
                  <div className="pl-4">
                    codeQuality: <span className="text-accent-green">"Clean & Scalable"</span>
                  </div>
                  <div><span className="text-white">{'}'};</span></div>

                  <div className="mt-4 text-text-muted">
                    {`// → uday.ise.rymec@gmail.com`}
                  </div>
                </div>

                {/* Interactive 3D tag overlays floating off the card */}
                <div
                  className="absolute -top-4 -right-4 bg-primary/90 border border-accent-blue/30 rounded-xl px-3 py-1.5 text-xs font-semibold text-accent-blue font-mono shadow-lg flex items-center gap-1.5"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <span>⚡</span> Java
                </div>
                <div
                  className="absolute -bottom-4 -left-4 bg-primary/90 border border-accent-green/30 rounded-xl px-3 py-1.5 text-xs font-semibold text-accent-green font-mono shadow-lg flex items-center gap-1.5"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <span>📈</span> CGPA 8.74
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
