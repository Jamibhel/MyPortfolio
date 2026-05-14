'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Phone } from 'lucide-react';

function GithubIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
}
function LinkedinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 5% 4rem', position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1100px', width: '100%', alignItems: 'center' }} className="board-grid">
        
        {/* Left: Main intro card */}
        <motion.div
          initial={{ opacity: 0, rotate: -3, y: 30 }}
          animate={{ opacity: 1, rotate: -1.5, y: 0 }}
          transition={{ duration: 0.8 }}
          className="paper-card"
          style={{ padding: '3rem 2.5rem', borderRadius: '2px', position: 'relative' }}
        >
          {/* Tape decoration */}
          <div className="tape tape-top-left" />
          <div className="tape tape-top-right" />

          <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3rem', color: '#888', marginBottom: '0.5rem' }}>Hello, I&apos;m</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
            Bello Jamiu<br/>Muhammad
          </h1>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.6rem', color: '#e74c3c', fontWeight: 600, marginBottom: '1.5rem' }}>
            UI/UX Designer &amp; Full-Stack Developer
          </p>
          <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '2rem' }}>
            I blend creative design with technical engineering to craft beautiful, user-centered digital experiences — from intuitive interfaces to robust mobile and web platforms.
          </p>

          {/* CTA */}
          <a href="/resume.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1a1a1a', color: '#f5f0e8', padding: '0.8rem 1.8rem', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseOver={(e) => { e.currentTarget.style.background = '#f5c842'; e.currentTarget.style.color = '#1a1a1a'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.color = '#f5f0e8'; }}
          >
            <Download size={16} /> Download CV
          </a>
        </motion.div>

        {/* Right: Scattered elements */}
        <div style={{ position: 'relative', minHeight: '450px' }}>
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 3, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="photo-frame"
            style={{ position: 'absolute', top: '0', right: '0', width: '240px', zIndex: 2 }}
          >
            <div style={{ width: '100%', aspectRatio: '3/4', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontFamily: "'Caveat', cursive", fontSize: '1.2rem' }}>
              Your Photo Here
            </div>
            <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem', color: '#888', textAlign: 'center', marginTop: '6px' }}>Jamiu — 2024</p>
          </motion.div>

          {/* Sticky note - contact */}
          <motion.div
            initial={{ opacity: 0, rotate: -8, y: 20 }}
            animate={{ opacity: 1, rotate: -4, y: 0 }}
            transition={{ delay: 0.4 }}
            className="sticky-note sticky-yellow"
            style={{ position: 'absolute', top: '60px', left: '0', width: '180px', zIndex: 1 }}
          >
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>📧 Contact me!</p>
            <p style={{ fontSize: '0.95rem' }}>jamibelbhello0104<br/>@gmail.com</p>
          </motion.div>

          {/* Social links sticky */}
          <motion.div
            initial={{ opacity: 0, rotate: 4 }}
            animate={{ opacity: 1, rotate: 2 }}
            transition={{ delay: 0.6 }}
            className="sticky-note sticky-blue"
            style={{ position: 'absolute', bottom: '40px', left: '20px', width: '160px', zIndex: 3 }}
          >
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🔗 Find me</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/Jamibhel" target="_blank" rel="noopener noreferrer" style={{ color: '#1e3a5f' }}><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/bello-muh-jamiu-ishola-10371724a" target="_blank" rel="noopener noreferrer" style={{ color: '#1e3a5f' }}><LinkedinIcon /></a>
              <a href="tel:+2349050955981" style={{ color: '#1e3a5f' }}><Phone size={18} /></a>
              <a href="mailto:jamibelbhello0104@gmail.com" style={{ color: '#1e3a5f' }}><Mail size={18} /></a>
            </div>
          </motion.div>

          {/* Red pin */}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: 'spring' }} className="pin" style={{ top: '-5px', right: '120px' }} />

          {/* Handwritten label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ position: 'absolute', bottom: '0', right: '20px', fontFamily: "'Caveat', cursive", fontSize: '1.8rem', color: '#f5c842', transform: 'rotate(-5deg)' }}
          >
            ← my portfolio ✨
          </motion.p>
        </div>
      </div>
    </section>
  );
}
