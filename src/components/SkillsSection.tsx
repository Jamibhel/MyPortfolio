'use client';

import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: 'Design',
    skills: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Glassmorphism', 'Design Systems']
  },
  {
    title: 'Frontend',
    skills: ['React / Next.js', 'HTML / CSS', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Three.js']
  },
  {
    title: 'Mobile',
    skills: ['Android Studio', 'Java', 'Firebase', 'Kotlin', 'Mobile UI Patterns', 'REST APIs']
  },
  {
    title: 'Backend & Tools',
    skills: ['Supabase', 'Firebase', 'Node.js', 'Git / GitHub', 'Vercel', 'Networking']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '5rem 5%', maxWidth: '1100px', margin: '0 auto' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '2.5rem', color: '#38bdf8', marginBottom: '3rem' }}
      >
        Skills & Tools
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '12px', padding: '2rem'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#818cf8', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              {category.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {category.skills.map(skill => (
                <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                  <div style={{ width: '6px', height: '6px', background: '#38bdf8', borderRadius: '50%', flexShrink: 0 }} />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
