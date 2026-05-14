'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" style={{ padding: '5rem 5% 3rem', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '2.5rem', color: '#38bdf8', marginBottom: '1rem', textAlign: 'center' }}
      >
        Let&apos;s Work Together
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{ color: '#94a3b8', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 3rem' }}
      >
        Got a project in mind or just want to connect? I&apos;m always open to discussing design, development, and new creative opportunities.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}
      >
        <ContactCard href="mailto:jamibelbhello0104@gmail.com" icon={<Mail size={20} />} label="jamibelbhello0104@gmail.com" />
        <ContactCard href="tel:+2349050955981" icon={<Phone size={20} />} label="+234 905 095 5981" />
        <ContactCard href="https://github.com/Jamibhel" icon={<Github size={20} />} label="GitHub" />
        <ContactCard href="https://www.linkedin.com/in/bello-muh-jamiu-ishola-10371724a" icon={<Linkedin size={20} />} label="LinkedIn" />
      </motion.div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '2rem' }} />

      {/* Bottom bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Bello Jamiu Muhammad. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.05)', color: '#94a3b8',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px',
            padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.85rem',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.color = '#38bdf8'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)'; }}
          onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >
          <ArrowUp size={14} /> Back to top
        </button>
      </div>
    </footer>
  );
}

function ContactCard({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px', padding: '1rem 1.5rem', color: '#cbd5e1',
        transition: 'all 0.2s', cursor: 'pointer', textDecoration: 'none'
      }}
      onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <span style={{ color: '#38bdf8' }}>{icon}</span>
      {label}
    </a>
  );
}
