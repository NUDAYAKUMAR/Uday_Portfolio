import { FaGithub, FaLinkedin, FaChevronRight } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { personalData, navLinks } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-glass-border pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Segment */}
          <div>
            <a href="#hero" className="font-mono text-xl font-bold text-white tracking-tight hover:opacity-90 block mb-4">
              N Udayakumar<span className="text-accent-blue">.</span>dev
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
             A premium developer showcase featuring enterprise-grade Java Spring Boot and MERN Stack applications, secure REST APIs, JWT authentication, real-time chat and video calling with Socket.io & WebRTC, and optimized MySQL and MongoDB database solutions powering modern web experiences.  </p>
            <div className="flex gap-3">
              {[
                { icon: <FaGithub />, href: personalData.github, label: "GitHub" },
                { icon: <FaLinkedin />, href: personalData.linkedin, label: "LinkedIn" },
                { icon: <SiGmail />, href: `mailto:${personalData.email}`, label: "Email" }
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue hover:bg-accent-blue/5 transition-all duration-300 text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-4">Quick Links</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-text-secondary hover:text-white text-sm transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <FaChevronRight className="text-[8px] text-accent-blue" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-4">Get In Touch</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-text-secondary hover:text-white text-sm transition-colors duration-300 flex items-center gap-2"
                >
                  <SiGmail className="text-xs text-accent-blue" />
                  <span className="truncate">{personalData.email}</span>
                </a>
              </li>
              <li className="text-text-secondary text-sm flex items-center gap-2">
                <span className="text-xs">📞</span>
                <span>{personalData.phone}</span>
              </li>
              <li className="text-text-secondary text-sm flex items-center gap-2">
                <span className="text-xs">📍</span>
                <span>{personalData.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom segment */}
        <div className="border-t border-glass-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center sm:text-left">
            N UdayaKumar Designed & built with ❤️
          </p>
          <p className="text-xs text-text-muted text-center sm:text-right font-mono">
            React.js · Tailwind CSS · Framer Motion
          </p>
        </div>

      </div>
    </footer>
  );
}
