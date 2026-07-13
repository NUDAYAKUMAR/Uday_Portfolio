import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSent(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/uday.ise.rymec@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.message || "Failed to send message. Please try again later.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-1/2 right-1/4 w-[35vw] h-[35vw] bg-accent-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {/* <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent-blue mb-3">// connection_terminal</p> */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact details & cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              I am actively looking for Java Full Stack Developer and Software Engineer roles. If you have an opening, a project to collaborate on, or simply want to say hello — drop a message!
            </p>

            {/* Quick contact cards */}
            <div className="flex flex-col gap-4">
              {[
                { icon: <SiGmail />, label: 'Email', value: personalData.email, href: `mailto:uday.ise.rymec@gmail.com` },
                { icon: <FaPhone />, label: 'Phone', value: personalData.phone, href: `tel:8431683119` },
                { icon: <FaMapMarkerAlt />, label: 'Location', value: personalData.location, href: null },
              ].map(({ icon, label, value, href }, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={label}
                  className="glass-panel border border-glass-border rounded-xl p-5 flex items-center gap-5 hover:border-accent-blue/30 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-semibold text-white hover:text-accent-blue transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-white">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social profiles */}
            <div className="flex items-center gap-3 mt-4">
              {[
                { icon: <FaGithub />, href: personalData.github, label: "GitHub" },
                { icon: <FaLinkedin />, href: personalData.linkedin, label: "LinkedIn" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-lg border border-border bg-card flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue hover:bg-accent-blue/10 transition-all duration-300 magnet-target text-lg"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Input Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel border border-glass-border p-8 rounded-2xl relative overflow-hidden">
              <h3 className="text-lg font-bold text-white mb-6">Send Message</h3>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent-green/10 border border-accent-green/30 rounded-xl p-4 mb-6 text-accent-green text-sm font-semibold flex items-center gap-2"
                >
                  <FaCheckCircle className="text-lg flex-shrink-0" />
                  <span>Message delivered successfully! I will reply shortly.</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 text-red-400 text-sm font-semibold flex items-center gap-2"
                >
                  <span className="text-lg flex-shrink-0">⚠️</span>
                  <span>{error}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="relative">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-text-secondary mb-2">Name</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange('name')}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Your name"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted outline-none transition-all duration-300 ${
                        focusedField === 'name' ? 'border-accent-blue bg-accent-blue/5 shadow-[0_0_8px_rgba(59,130,246,0.2)]' : 'border-glass-border'
                      }`}
                    />
                  </div>
                  {/* Email field */}
                  <div className="relative">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-text-secondary mb-2">Email</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder="your@email.com"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted outline-none transition-all duration-300 ${
                        focusedField === 'email' ? 'border-accent-blue bg-accent-blue/5 shadow-[0_0_8px_rgba(59,130,246,0.2)]' : 'border-glass-border'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="relative">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-text-secondary mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    name="subject"
                    value={form.subject}
                    onChange={handleChange('subject')}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Job opening / Project / Collaboration"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted outline-none transition-all duration-300 ${
                      focusedField === 'subject' ? 'border-accent-blue bg-accent-blue/5 shadow-[0_0_8px_rgba(59,130,246,0.2)]' : 'border-glass-border'
                    }`}
                  />
                </div>

                {/* Message field */}
                <div className="relative">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-text-secondary mb-2">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Describe your role requirements or details..."
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-text-muted outline-none transition-all duration-300 resize-none min-h-[120px] ${
                      focusedField === 'message' ? 'border-accent-blue bg-accent-blue/5 shadow-[0_0_8px_rgba(59,130,246,0.2)]' : 'border-glass-border'
                    }`}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 w-full py-3.5 mt-2 bg-gradient-to-r from-accent-blue to-accent-cyan hover:from-accent-cyan hover:to-accent-blue text-white rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-accent-blue/20 magnet-target disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className="text-xs" /> {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
