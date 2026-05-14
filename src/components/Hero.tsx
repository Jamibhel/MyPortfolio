'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Phone } from 'lucide-react';
import CanvasBackground from '@/components/CanvasBackground';

// Inline SVG brand icons (lucide-react doesn't include brand logos)
function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

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
          Hi, I&apos;m Bello Jamiu Muhammad
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, fontWeight: 700, background: 'linear-gradient(135deg, #f8fafc, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}
        >
          UI/UX Designer &amp;<br/>Full-Stack Developer
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
            <SocialIcon href="https://github.com/Jamibhel" icon={<GithubIcon />} />
            <SocialIcon href="https://www.linkedin.com/in/bello-muh-jamiu-ishola-10371724a" icon={<LinkedinIcon />} />
            <SocialIcon href="tel:+2349050955981" icon={<Phone size={20} />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
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
