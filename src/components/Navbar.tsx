'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
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
        initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
          padding: '0.8rem 5%',
          background: scrolled ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
          transition: 'all 0.3s',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}
      >
        <a onClick={() => handleNav('#home')} style={{ cursor: 'pointer', fontFamily: "'Caveat', cursive", fontSize: '2rem', fontWeight: 700, color: '#1a1a1a' }}>
          Jamiu<span style={{ color: '#e8913a' }}>.</span>
        </a>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <a key={link.href} onClick={() => handleNav(link.href)}
              style={{ cursor: 'pointer', color: '#777', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#1a1a1a')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#777')}
            >{link.label}</a>
          ))}
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle" style={{ display: 'none', background: 'none', border: 'none', color: '#1a1a1a', cursor: 'pointer' }}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', zIndex: 99, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
            {NAV_LINKS.map((link, i) => (
              <motion.a key={link.href} onClick={() => handleNav(link.href)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                style={{ cursor: 'pointer', color: '#1a1a1a', fontSize: '2rem', fontFamily: "'Caveat', cursive", fontWeight: 700 }}>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
