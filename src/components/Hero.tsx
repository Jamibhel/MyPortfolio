'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Phone } from 'lucide-react';
import CanvasBackground from '@/components/CanvasBackground';

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5%', overflow: 'hidden' }}>
      <CanvasBackground />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ color: '#38bdf8', fontSize: '1.2rem', fontFamily: "'Fira Code', monospace", marginBottom: '1rem' }}
        >
          Hi, I am Bello Jamiu Muhammad
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, fontWeight: 700, background: 'linear-gradient(135deg, #f8fafc, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}
        >
          UI/UX Designer &<br/>Full-Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ color: '#94a3b8', fontSize: '1.15rem', marginTop: '1.5rem', marginBottom: '2.5rem', maxWidth: '650px', lineHeight: 1.7 }}
        >
          I blend creative design with technical engineering to craft beautiful, user-centered digital experiences. From designing intuitive interfaces to building robust mobile and web platforms, I focus on turning complex problems into seamless, human-friendly solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a 
            href="/resume.pdf" 
            download
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
              background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', 
              border: '1px solid rgba(56, 189, 248, 0.4)', padding: '0.8rem 1.5rem', 
              borderRadius: '30px', fontWeight: 600, fontSize: '1rem',
              transition: 'all 0.2s', cursor: 'pointer'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <Download size={18} /> Resume
          </a>

          <div style={{ display: 'flex', gap: '0.75rem', marginLeft: '1rem' }}>
            <SocialIcon href="mailto:jamibelbhello0104@gmail.com" icon={<Mail size={20} />} />
            <SocialIcon href="https://github.com/Jamibhel" icon={<Github size={20} />} />
            <SocialIcon href="https://www.linkedin.com/in/bello-muh-jamiu-ishola-10371724a" icon={<Linkedin size={20} />} />
            <SocialIcon href="tel:+2349050955981" icon={<Phone size={20} />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '45px', height: '45px', borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1',
        border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'all 0.2s', cursor: 'pointer'
      }}
      onMouseOver={(e) => { e.currentTarget.style.color = '#38bdf8'; e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseOut={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {icon}
    </a>
  );
}
