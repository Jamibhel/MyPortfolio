'use client';

import { motion } from 'framer-motion';

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
        style={{ fontFamily: "'Fira Code', monospace", color: '#94a3b8', fontSize: '1.2rem', marginTop: '1rem' }}
      >
        Building elegant interfaces with robust architecture.
      </motion.p>
    </section>
  );
}
