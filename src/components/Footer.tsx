'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUp } from 'lucide-react';

function GithubIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
}
function LinkedinIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}

export default function Footer() {
  return (
    <footer id="contact" style={{ padding: '5rem 5% 3rem', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
      {/* Faded number */}
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 0.08 }} viewport={{ once: true }}
        style={{ position: 'absolute', top: '-30px', left: '0', fontFamily: "var(--serif)", fontSize: '12rem', fontWeight: 900, color: '#1a1a1a', pointerEvents: 'none', lineHeight: 1 }}>05</motion.p>

      {/* Main contact card */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="paper-card" style={{ padding: '3rem', position: 'relative', textAlign: 'center', marginBottom: '2rem' }}>
        <div className="washi-tape washi-pink" style={{ width: '120px', top: '-12px', left: '50%', marginLeft: '-60px', transform: 'rotate(-1deg)' }} />
        <div className="paper-clip" style={{ top: '-18px', right: '30px' }} />
        <div className="coffee-stain" style={{ bottom: '-30px', left: '-20px' }} />

        <p style={{ fontFamily: "var(--handwritten)", fontSize: '1.3rem', color: 'var(--ink-light)', marginBottom: '0.5rem' }}>
          Got a project? Let&apos;s talk!
        </p>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: '2.5rem', fontWeight: 900, color: 'var(--ink-black)', marginBottom: '1rem' }}>
          Let&apos;s Work <span style={{ background: 'linear-gradient(transparent 55%, rgba(232,145,58,0.3) 55%)' }}>Together</span>
        </h2>
        <p style={{ color: 'var(--ink-gray)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          I&apos;m always open to discussing design, development, and new creative opportunities. Don&apos;t hesitate to reach out!
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          <ContactBtn href="mailto:jamibelbhello0104@gmail.com" icon={<Mail size={16} />} label="Email Me" bg="#d94f4f" />
          <ContactBtn href="https://wa.me/2349050955981" icon={<Phone size={16} />} label="WhatsApp Me" bg="#5cb270" />
          <ContactBtn href="https://github.com/Jamibhel" icon={<GithubIcon />} label="GitHub" bg="#1a1a1a" />
          <ContactBtn href="https://www.linkedin.com/in/bello-muh-jamiu-ishola-10371724a" icon={<LinkedinIcon />} label="LinkedIn" bg="#4a8fe7" />
        </div>
      </motion.div>

      {/* Handwritten note */}
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ fontFamily: "var(--handwritten)", fontSize: '1.2rem', color: 'var(--accent-orange)', textAlign: 'center', transform: 'rotate(-1deg)', marginBottom: '2.5rem' }}>
        Please don&apos;t hesitate to reach out if this portfolio doesn&apos;t provide enough info! ✌️
      </motion.p>

      {/* Bottom bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '1.5rem 0', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <p style={{ fontFamily: "var(--handwritten)", color: 'var(--ink-gray)', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>© {new Date().getFullYear()} Bello Jamiu Muhammad ✦ Crafted with passion</span>
          <a href="/🚫☠️🏴☠️" style={{ color: 'var(--accent-blue)', textDecoration: 'none', borderBottom: '1px dashed var(--accent-blue)', fontSize: '1rem' }}>Admin Panel</a>
        </p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--ink-black)', color: 'var(--paper-white)', border: 'none', padding: '0.5rem 1rem', fontFamily: "var(--handwritten)", fontSize: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseOver={(e) => { e.currentTarget.style.background = '#e8913a'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = '#1a1a1a'; }}>
          <ArrowUp size={14} /> Back to top
        </button>
      </div>
    </footer>
  );
}

function ContactBtn({ href, icon, label, bg }: { href: string; icon: React.ReactNode; label: string; bg: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: bg, color: 'white', padding: '0.65rem 1.3rem', fontWeight: 600, fontSize: '0.85rem', borderRadius: '4px', transition: 'all 0.2s', cursor: 'pointer', opacity: 0.9 }}
      onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseOut={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(0)'; }}>
      {icon} {label}
    </a>
  );
}
