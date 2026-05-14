'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

const EXPERIENCES = [
  { id: 1, role: 'UI/UX Designer', company: 'ForteSofte Niit', period: '1 Year', description: 'Designed intuitive user interfaces applying modern principles like glassmorphism and ensuring seamless interactions.', tags: ['Figma', 'UI/UX', 'Prototyping'] },
  { id: 2, role: 'Mobile App Developer', company: 'ForteSofte Niit', period: 'Concurrent', description: 'Developed mobile applications with complex features including chatting systems and community feeds.', tags: ['Android Studio', 'Java', 'Firebase'] },
  { id: 3, role: 'Network Engineer', company: 'V2D Convergence', period: '6 Months', description: 'Managed on-site and off-site home automation and networking for smart home systems.', tags: ['Networking', 'Hardware', 'IoT'] }
];

export default function ExperienceTimeline() {
  const [experiences, setExperiences] = useState(EXPERIENCES);

  useEffect(() => {
    async function fetchExperiences() {
      const { data } = await supabase.from('experiences').select('*').order('id', { ascending: false });
      if (data && data.length > 0) {
        const parsed = data.map(exp => ({ ...exp, tags: typeof exp.tags === 'string' ? exp.tags.split(',') : (exp.tags || []) }));
        setExperiences(parsed as any);
      }
    }
    fetchExperiences();
  }, []);

  const cardStyles = [
    { rotate: -1.5, tapeClass: 'washi-pink', tapePos: { left: '30px' } },
    { rotate: 1, tapeClass: 'washi-blue', tapePos: { right: '30px' } },
    { rotate: -0.5, tapeClass: 'washi-green', tapePos: { left: '50px' } },
  ];

  return (
    <section id="about" style={{ padding: '5rem 5%', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
      {/* Big faded number */}
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 0.08 }} viewport={{ once: true }}
        style={{ position: 'absolute', top: '-20px', right: '0', fontFamily: "var(--serif)", fontSize: '12rem', fontWeight: 900, color: '#1a1a1a', pointerEvents: 'none', lineHeight: 1 }}>02</motion.p>

      {/* Section header on notebook paper */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="notebook-paper" style={{ display: 'inline-block', padding: '1rem 3rem 1rem 4rem', marginBottom: '3rem' }}>
        <div className="tape tape-sm" style={{ top: '-12px', left: '20px', transform: 'rotate(-3deg)' }} />
        <h2 style={{ fontFamily: "var(--serif)", fontSize: '2.2rem', fontWeight: 900, color: 'var(--ink-black)' }}>
          Work Experience
        </h2>
        <p style={{ fontFamily: "var(--handwritten)", color: 'var(--ink-light)', fontSize: '1.2rem', marginTop: '0.25rem' }}>
          Places I&apos;ve worked & roles I&apos;ve held
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
        {experiences.map((exp, i) => {
          const style = cardStyles[i % cardStyles.length];
          return (
            <motion.div key={exp.id}
              initial={{ opacity: 0, y: 20, rotate: style.rotate * 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: style.rotate }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="paper-card"
              style={{ padding: '2rem 1.8rem', position: 'relative' }}>

              {/* Washi tape */}
              <div className={`washi-tape ${style.tapeClass}`} style={{ width: '90px', top: '-12px', transform: `rotate(${style.rotate * -2}deg)`, ...style.tapePos }} />

              {/* Period tag */}
              <span style={{ fontFamily: "var(--mono)", fontSize: '0.7rem', background: 'var(--ink-black)', color: 'var(--paper-white)', padding: '0.2rem 0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '0.75rem' }}>
                {exp.period}
              </span>

              <h3 style={{ fontFamily: "var(--serif)", fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink-black)', marginBottom: '0.2rem' }}>{exp.role}</h3>
              <p style={{ fontFamily: "var(--handwritten)", fontSize: '1.3rem', color: 'var(--accent-orange)', marginBottom: '1rem' }}>{exp.company}</p>
              <p style={{ color: 'var(--ink-gray)', lineHeight: 1.65, fontSize: '0.9rem', marginBottom: '1.25rem' }}>{exp.description}</p>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {exp.tags.map(tag => (
                  <span key={tag} className="sticker" style={{ color: 'var(--accent-blue)', fontSize: '0.7rem' }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
