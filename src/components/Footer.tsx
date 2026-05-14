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
    <footer id="contact" style={{ padding: '5rem 5% 3rem', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Contact paper card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
        viewport={{ once: true }}
        className="paper-card"
        style={{ padding: '3rem', textAlign: 'center', position: 'relative', marginBottom: '3rem' }}
      >
        <div className="tape tape-top-center" />
        <div className="pin" style={{ top: '-8px', right: '40px' }} />

        <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '2.8rem', color: '#1a1a1a', marginBottom: '0.75rem' }}>
          Let&apos;s Work Together!
        </h2>
        <p style={{ color: '#555', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          Got a project in mind or just want to connect? I&apos;m always open to discussing design, development, and new creative opportunities.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <ContactPill href="mailto:jamibelbhello0104@gmail.com" icon={<Mail size={16} />} label="Email Me" />
          <ContactPill href="tel:+2349050955981" icon={<Phone size={16} />} label="+234 905 095 5981" />
          <ContactPill href="https://github.com/Jamibhel" icon={<GithubIcon />} label="GitHub" />
          <ContactPill href="https://www.linkedin.com/in/bello-muh-jamiu-ishola-10371724a" icon={<LinkedinIcon />} label="LinkedIn" />
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '1rem 0' }}>
        <p style={{ color: '#666', fontSize: '0.85rem', fontFamily: "'Caveat', cursive", fontSize: '1rem' }}>
          © {new Date().getFullYear()} Bello Jamiu Muhammad ✦ Crafted with passion
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.08)', color: '#999', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer', fontFamily: "'Caveat', cursive", fontSize: '1rem', transition: 'all 0.2s' }}
          onMouseOver={(e) => { e.currentTarget.style.color = '#f5c842'; e.currentTarget.style.borderColor = '#f5c842'; }}
          onMouseOut={(e) => { e.currentTarget.style.color = '#999'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >
          <ArrowUp size={14} /> Back to top
        </button>
      </div>
    </footer>
  );
}

function ContactPill({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1a1a1a', color: '#f5f0e8', padding: '0.6rem 1.2rem', fontWeight: 600, fontSize: '0.85rem', transition: 'all 0.2s', cursor: 'pointer' }}
      onMouseOver={(e) => { e.currentTarget.style.background = '#f5c842'; e.currentTarget.style.color = '#1a1a1a'; }}
      onMouseOut={(e) => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.color = '#f5f0e8'; }}
    >
      {icon} {label}
    </a>
  );
}
