'use client';

import { motion } from 'framer-motion';

const SKILLS = [
  { name: 'Figma', icon: '🎨', color: '#e8913a' },
  { name: 'UI/UX', icon: '✏️', color: '#d94f4f' },
  { name: 'React', icon: '⚛️', color: '#4a8fe7' },
  { name: 'Next.js', icon: '▲', color: '#1a1a1a' },
  { name: 'TypeScript', icon: '📘', color: '#3178c6' },
  { name: 'Tailwind', icon: '🌊', color: '#38bdf8' },
  { name: 'Android Studio', icon: '📱', color: '#5cb270' },
  { name: 'Java', icon: '☕', color: '#e8913a' },
  { name: 'Firebase', icon: '🔥', color: '#f5c842' },
  { name: 'Supabase', icon: '⚡', color: '#5cb270' },
  { name: 'Node.js', icon: '🟢', color: '#5cb270' },
  { name: 'Three.js', icon: '🧊', color: '#1a1a1a' },
  { name: 'Framer Motion', icon: '💫', color: '#e884a8' },
  { name: 'Git', icon: '🔀', color: '#d94f4f' },
  { name: 'Vercel', icon: '🚀', color: '#1a1a1a' },
  { name: 'HTML/CSS', icon: '🌐', color: '#e8913a' },
  { name: 'Prototyping', icon: '🖼️', color: '#4a8fe7' },
  { name: 'Wireframing', icon: '📐', color: '#777' },
];

const SOFT_SKILLS = [
  'Problem-Solving', 'Communication', 'Collaboration', 'Adaptability', 'Teamwork', 'Creativity'
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '5rem 5%', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
      {/* Faded number */}
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 0.08 }} viewport={{ once: true }}
        style={{ position: 'absolute', top: '-30px', left: '0', fontFamily: "var(--serif)", fontSize: '12rem', fontWeight: 900, color: '#1a1a1a', pointerEvents: 'none', lineHeight: 1 }}>03</motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '3rem', alignItems: 'start' }} className="board-grid">
        
        {/* LEFT: Technical skills as sticker board */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: '2.2rem', fontWeight: 900, color: 'var(--ink-black)', display: 'inline' }}>
              <span style={{ background: 'linear-gradient(transparent 55%, rgba(92,178,112,0.3) 55%)' }}>Software Skills</span>
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-green)', marginTop: '0.5rem' }} />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="paper-card" style={{ padding: '2rem', position: 'relative' }}>
            <div className="tape tape-md" style={{ top: '-12px', left: '40%', transform: 'rotate(-2deg)' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }} className="skills-grid">
              {SKILLS.map((skill, i) => (
                <motion.div key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.08, rotate: Math.random() > 0.5 ? 3 : -3 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.5rem 1rem', background: 'var(--bg-cream)',
                    border: `2px solid ${skill.color}20`, borderRadius: '8px',
                    fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink-black)',
                    cursor: 'default', transition: 'border-color 0.2s',
                    boxShadow: '1px 2px 4px rgba(0,0,0,0.04)'
                  }}>
                  <span style={{ fontSize: '1.1rem' }}>{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Soft skills on sticky note */}
        <div>
          <motion.div initial={{ opacity: 0, rotate: 5, y: 30 }} whileInView={{ opacity: 1, rotate: 2, y: 0 }} viewport={{ once: true }}
            className="sticky-note sticky-yellow" style={{ padding: '1.5rem', marginTop: '4rem', position: 'relative' }}>
            <div className="pin" style={{ top: '-7px', right: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', borderBottom: '2px dashed rgba(0,0,0,0.15)', paddingBottom: '0.5rem' }}>
              ✦ Skills
            </h3>
            {SOFT_SKILLS.map(skill => (
              <p key={skill} style={{ fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--accent-orange)' }}>→</span> {skill}
              </p>
            ))}
          </motion.div>

          {/* Handwritten note */}
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontFamily: "var(--handwritten)", fontSize: '1.1rem', color: 'var(--accent-red)', marginTop: '1rem', transform: 'rotate(-3deg)', textAlign: 'center' }}>
            always learning new things! 📚
          </motion.p>
        </div>
      </div>
    </section>
  );
}
