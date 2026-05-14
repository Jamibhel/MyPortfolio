'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
          padding: '0.8rem 5%',
          background: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
          transition: 'all 0.3s',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}
      >
        <a onClick={() => handleNav('#home')} style={{ cursor: 'pointer', fontFamily: "'Caveat', cursive", fontSize: '1.8rem', fontWeight: 700, color: '#f5f0e8' }}>
          Jamiu<span style={{ color: '#f5c842' }}>.</span>
        </a>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{ cursor: 'pointer', color: '#999', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s', fontFamily: "'Space Grotesk', sans-serif" }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#f5c842')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#999')}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle" style={{ display: 'none', background: 'none', border: 'none', color: '#f5f0e8', cursor: 'pointer' }}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(26,26,26,0.97)', zIndex: 99, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a key={link.href} onClick={() => handleNav(link.href)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} style={{ cursor: 'pointer', color: '#f5f0e8', fontSize: '2rem', fontFamily: "'Caveat', cursive", fontWeight: 700 }}>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
