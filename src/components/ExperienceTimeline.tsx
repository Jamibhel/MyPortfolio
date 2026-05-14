'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

const EXPERIENCES = [
  { id: 1, role: 'UI/UX Designer', company: 'ForteSofte Niit', period: '1 Year', description: 'Designed intuitive user interfaces applying modern principles like glassmorphism and ensuring seamless interactions.', tags: ['Figma', 'UI/UX', 'Prototyping', 'Wireframing'] },
  { id: 2, role: 'Mobile App Developer', company: 'ForteSofte Niit', period: 'Concurrent', description: 'Developed mobile applications with complex features including chatting systems and community feeds.', tags: ['Android Studio', 'Java', 'Firebase', 'Mobile Dev'] },
  { id: 3, role: 'Network Engineer', company: 'V2D Convergence', period: '6 Months', description: 'Managed on-site and off-site home automation and networking. Smart home systems convergence.', tags: ['Networking', 'Hardware', 'Home Automation'] }
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

  const rotations = [-1.5, 1, -0.5];
  const stickyColors = ['sticky-yellow', 'sticky-pink', 'sticky-green'];

  return (
    <section id="experience" style={{ padding: '5rem 5%', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Section header */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem', position: 'relative' }}>
        <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '3rem', color: '#f5f0e8', display: 'inline' }}>
          <span className="highlight" style={{ background: 'linear-gradient(transparent 55%, rgba(245,200,66,0.5) 55%)' }}>Work Experience</span>
        </h2>
        <div style={{ width: '80px', height: '3px', background: '#f5c842', marginTop: '0.5rem' }} />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40, rotate: rotations[i % 3] * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: rotations[i % 3] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="paper-card"
            style={{ padding: '2rem', borderRadius: '2px', position: 'relative' }}
          >
            <div className="tape tape-top-center" />
            
            {/* Period badge */}
            <span className={`sticky-note ${stickyColors[i % 3]}`} style={{ position: 'absolute', top: '-14px', right: '15px', padding: '0.3rem 0.8rem', fontSize: '0.9rem', transform: 'rotate(3deg)', boxShadow: '2px 2px 6px rgba(0,0,0,0.15)' }}>
              {exp.period}
            </span>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem', marginTop: '0.5rem' }}>{exp.role}</h3>
            <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.2rem', color: '#e74c3c', marginBottom: '1rem' }}>{exp.company}</p>
            <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.9rem', marginBottom: '1.5rem' }}>{exp.description}</p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {exp.tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.75rem', fontFamily: "'Fira Code', monospace", background: '#1a1a1a', color: '#f5f0e8', padding: '0.25rem 0.6rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
