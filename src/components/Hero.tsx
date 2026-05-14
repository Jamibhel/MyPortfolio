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
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 5% 4rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Scattered decorative elements */}
      <div className="coffee-stain" style={{ top: '15%', right: '8%' }} />
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ delay: 1 }} style={{ position: 'absolute', top: '12%', right: '5%', fontFamily: "'Caveat', cursive", fontSize: '6rem', color: '#e8913a', transform: 'rotate(12deg)', pointerEvents: 'none', fontWeight: 700 }}>
        01
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '4rem', maxWidth: '1200px', width: '100%', margin: '0 auto', alignItems: 'center' }} className="board-grid">
        
        {/* LEFT — Main intro on paper */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Paper card with torn top */}
          <div className="paper-card" style={{ padding: '3rem 2.5rem 2.5rem', position: 'relative' }}>
            {/* Washi tape */}
            <div className="washi-tape washi-pink" style={{ width: '100px', top: '-12px', left: '40px', transform: 'rotate(-4deg)' }} />
            <div className="tape tape-sm" style={{ top: '-12px', right: '50px', transform: 'rotate(5deg)' }} />
            
            {/* Paper clip */}
            <div className="paper-clip" style={{ top: '-15px', right: '20px' }} />

            <p style={{ fontFamily: "var(--handwritten)", fontSize: '1.4rem', color: 'var(--ink-light)', marginBottom: '0.3rem' }}>Hello, I&apos;m</p>
            
            <h1 style={{ fontFamily: "var(--serif)", fontSize: 'clamp(2.8rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--ink-black)', marginBottom: '0.75rem' }}>
              Bello Jamiu<br/>Muhammad
            </h1>
            
            {/* Highlighted role */}
            <p style={{ fontFamily: "var(--handwritten)", fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              <span style={{ background: 'linear-gradient(transparent 50%, rgba(245,200,66,0.4) 50%)', padding: '0 4px' }}>UI/UX Designer</span>
              {' '}&amp;{' '}
              <span style={{ background: 'linear-gradient(transparent 50%, rgba(74,143,231,0.3) 50%)', padding: '0 4px' }}>Full-Stack Developer</span>
            </p>

            <p style={{ color: 'var(--ink-gray)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '2rem', maxWidth: '500px' }}>
              I blend creative design with technical engineering to craft beautiful, user-centered digital experiences — from intuitive interfaces to robust mobile and web platforms.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="/resume.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--ink-black)', color: 'var(--paper-white)', padding: '0.75rem 1.6rem', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseOver={(e) => { e.currentTarget.style.background = '#e8913a'; }} onMouseOut={(e) => { e.currentTarget.style.background = '#1a1a1a'; }}>
                <Download size={15} /> Download CV
              </a>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <SocialPill href="mailto:jamibelbhello0104@gmail.com"><Mail size={16} /></SocialPill>
                <SocialPill href="https://github.com/Jamibhel"><GithubIcon /></SocialPill>
                <SocialPill href="https://www.linkedin.com/in/bello-muh-jamiu-ishola-10371724a"><LinkedinIcon /></SocialPill>
                <SocialPill href="tel:+2349050955981"><Phone size={16} /></SocialPill>
              </div>
            </div>
          </div>

          {/* Handwritten annotation below */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            style={{ fontFamily: "var(--handwritten)", fontSize: '1.2rem', color: 'var(--accent-red)', marginTop: '1rem', marginLeft: '2rem', transform: 'rotate(-2deg)' }}>
            ↑ that&apos;s me! ✨
          </motion.p>
        </motion.div>

        {/* RIGHT — Scattered elements */}
        <div style={{ position: 'relative', minHeight: '500px' }} className="hero-right">
          
          {/* Photo placeholder */}
          <motion.div initial={{ opacity: 0, rotate: 8 }} animate={{ opacity: 1, rotate: 4 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="photo-frame" style={{ position: 'absolute', top: '0', right: '10px', width: '220px', zIndex: 2 }}>
            <div style={{ width: '100%', aspectRatio: '3/4', background: '#e8e0d4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '2.5rem' }}>📷</span>
              <span style={{ fontFamily: "var(--handwritten)", color: '#999', fontSize: '1.1rem' }}>Your Photo Here</span>
            </div>
            <p style={{ fontFamily: "var(--handwritten)", fontSize: '1rem', color: '#888', textAlign: 'center', padding: '6px 0 4px' }}>Jamiu — 2024</p>
          </motion.div>

          {/* Contact sticky */}
          <motion.div initial={{ opacity: 0, rotate: -8 }} animate={{ opacity: 1, rotate: -3 }} transition={{ delay: 0.5 }}
            className="sticky-note sticky-orange" style={{ position: 'absolute', top: '80px', left: '0', width: '170px', zIndex: 1 }}>
            <p style={{ fontWeight: 700, marginBottom: '0.3rem', fontSize: '1.2rem' }}>📮 Reach out!</p>
            <p style={{ fontSize: '0.95rem' }}>Open for freelance<br/>& collaborations</p>
          </motion.div>

          {/* Skill stickers */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ position: 'absolute', bottom: '100px', left: '10px', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', maxWidth: '200px' }}>
            <span className="sticker" style={{ color: '#e8913a', fontSize: '0.75rem' }}>🎨 Figma</span>
            <span className="sticker" style={{ color: '#4a8fe7', fontSize: '0.75rem' }}>⚛️ React</span>
            <span className="sticker" style={{ color: '#5cb270', fontSize: '0.75rem' }}>📱 Android</span>
          </motion.div>

          {/* Doodle arrow */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            style={{ position: 'absolute', bottom: '30px', right: '30px', fontFamily: "var(--handwritten)", fontSize: '1.5rem', color: '#e8913a', transform: 'rotate(-8deg)' }}>
            ← my portfolio ★
          </motion.p>

          {/* Pin */}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: 'spring' }}
            className="pin" style={{ top: '-6px', right: '120px' }} />
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: 'spring' }}
            className="pin pin-yellow" style={{ top: '200px', left: '-10px' }} />
        </div>
      </div>
    </section>
  );
}

function SocialPill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', border: '2px solid #ddd', borderRadius: '50%', color: '#777', transition: 'all 0.2s', cursor: 'pointer' }}
      onMouseOver={(e) => { e.currentTarget.style.borderColor = '#e8913a'; e.currentTarget.style.color = '#e8913a'; }}
      onMouseOut={(e) => { e.currentTarget.style.borderColor = '#ddd'; e.currentTarget.style.color = '#777'; }}>
      {children}
    </a>
  );
}
