'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5%' }}>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 700, background: 'linear-gradient(135deg, #f8fafc, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}
      >
        DESIGN ENGINEER
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{ fontFamily: "'Fira Code', monospace", color: '#94a3b8', fontSize: '1.2rem', marginTop: '1rem', marginBottom: '2.5rem' }}
      >
        Building elegant interfaces with robust architecture.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a 
          href="/resume.pdf" 
          download
          style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem', 
            background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', 
            border: '1px solid rgba(56, 189, 248, 0.4)', padding: '0.8rem 1.5rem', 
            borderRadius: '30px', fontWeight: 600, fontSize: '1rem',
            transition: 'all 0.2s', cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Download size={18} />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
