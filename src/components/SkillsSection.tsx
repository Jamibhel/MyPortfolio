'use client';

import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  { title: 'Design', color: 'sticky-yellow', rotate: -2, skills: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Glassmorphism', 'Design Systems'] },
  { title: 'Frontend', color: 'sticky-blue', rotate: 1.5, skills: ['React / Next.js', 'HTML / CSS', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Three.js'] },
  { title: 'Mobile', color: 'sticky-pink', rotate: -1, skills: ['Android Studio', 'Java', 'Firebase', 'Kotlin', 'Mobile UI', 'REST APIs'] },
  { title: 'Backend & Tools', color: 'sticky-green', rotate: 2, skills: ['Supabase', 'Firebase', 'Node.js', 'Git / GitHub', 'Vercel', 'Networking'] },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '5rem 5%', maxWidth: '1100px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '3rem', color: '#f5f0e8', display: 'inline' }}>
          <span style={{ background: 'linear-gradient(transparent 55%, rgba(231,76,60,0.4) 55%)', display: 'inline' }}>Skills & Tools</span>
        </h2>
        <div style={{ width: '80px', height: '3px', background: '#e74c3c', marginTop: '0.5rem' }} />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
        {SKILL_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30, rotate: cat.rotate * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: cat.rotate }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12, duration: 0.5 }}
            className={`sticky-note ${cat.color}`}
            style={{ '--rotate': `${cat.rotate}deg`, padding: '1.5rem', minHeight: '240px' } as React.CSSProperties}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', borderBottom: '2px dashed currentColor', paddingBottom: '0.5rem', opacity: 0.7 }}>
              {cat.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {cat.skills.map(skill => (
                <li key={skill} style={{ fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ opacity: 0.5 }}>✦</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
