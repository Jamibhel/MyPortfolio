'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Senior Design Engineer',
    company: 'Tech Innovators Inc.',
    period: '2024 - Present',
    description: 'Bridging the gap between design and engineering. Leading the UI architecture for a suite of enterprise AI products, ensuring pixel-perfect implementation of complex Figma prototypes while optimizing React rendering performance.',
    tags: ['React', 'Next.js', 'Framer Motion', 'Figma']
  },
  {
    id: 2,
    role: 'Frontend Developer & UI Designer',
    company: 'Creative Web Agency',
    period: '2022 - 2024',
    description: 'Designed and developed highly interactive marketing websites. Specialized in WebGL experiences and micro-interactions that increased user engagement by 40%.',
    tags: ['Three.js', 'WebGL', 'GSAP', 'UI/UX']
  },
  {
    id: 3,
    role: 'Software Engineer',
    company: 'StartupX',
    period: '2020 - 2022',
    description: 'Built scalable backend services and responsive frontend dashboards. Streamlined the CI/CD pipelines and introduced modern testing practices.',
    tags: ['TypeScript', 'Node.js', 'React', 'Jest']
  }
];

export default function ExperienceTimeline() {
  const [experiences, setExperiences] = useState(EXPERIENCES);

  useEffect(() => {
    async function fetchExperiences() {
      if (!supabase.supabaseUrl) return; // Supabase not configured yet
      const { data, error } = await supabase.from('experiences').select('*').order('id', { ascending: false });
      if (data && data.length > 0) {
        // Parse tags if they are stored as JSON/comma-separated strings
        const parsedData = data.map(exp => ({
          ...exp,
          tags: typeof exp.tags === 'string' ? exp.tags.split(',') : (exp.tags || [])
        }));
        setExperiences(parsedData as any);
      }
    }
    fetchExperiences();
  }, []);
  return (
    <section style={{ padding: '5rem 5%', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '2.5rem', color: '#38bdf8', marginBottom: '4rem' }}
      >
        Experience
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
        {/* Timeline Line */}
        <div style={{ position: 'absolute', left: '19px', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.1)' }} />

        {experiences.map((exp, i) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}
          >
            {/* Timeline Dot */}
            <div style={{ 
              width: '40px', height: '40px', borderRadius: '50%', background: '#0f172a', border: '2px solid #38bdf8', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.3)'
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#38bdf8' }} />
            </div>

            {/* Content Card */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', 
              borderRadius: '12px', padding: '2rem', backdropFilter: 'blur(10px)', flexGrow: 1
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: '#f8fafc', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <h4 style={{ fontSize: '1.1rem', color: '#818cf8', fontWeight: 500 }}>{exp.company}</h4>
                </div>
                <span style={{ fontFamily: "'Fira Code', monospace", color: '#94a3b8', fontSize: '0.9rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px' }}>
                  {exp.period}
                </span>
              </div>
              
              <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {exp.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.85rem', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontFamily: "'Fira Code', monospace" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
