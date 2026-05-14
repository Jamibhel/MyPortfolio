'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

const DUMMY_PROJECTS = [
  { 
    id: 1, title: 'Infinite Studio', 
    stack: 'Next.js · Tailwind CSS · Supabase · Vercel',
    description: 'A full-featured website for a content studio — currently live in production with booking systems and content management.',
    image: '/project-infinitestudio.png',
    link: 'https://infinitestudio.space',
    category: 'Web Development'
  },
  { 
    id: 2, title: 'BookUp', 
    stack: 'Android Studio · Java · Firebase',
    description: 'A powerful student-tutor mobile platform with community feed, real-time messaging, and comprehensive academic features.',
    image: '/project-bookup.png',
    category: 'Mobile App'
  },
  { 
    id: 3, title: 'iCOINified', 
    stack: 'Figma · Glassmorphism · UI/UX',
    description: 'A premium crypto application design exploring advanced glassmorphism techniques for an elegant financial interface.',
    image: '/project-icoinified.png',
    category: 'UI/UX Design'
  }
];

export default function ProjectsGrid() {
  const [projects, setProjects] = useState(DUMMY_PROJECTS);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase.from('projects').select('*').order('id', { ascending: false });
      if (data && data.length > 0) setProjects(data as any);
    }
    fetchProjects();
  }, []);

  const rotations = [2, -1.5, 1];

  return (
    <section id="projects" style={{ padding: '5rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '3rem', color: '#f5f0e8', display: 'inline' }}>
          <span style={{ background: 'linear-gradient(transparent 55%, rgba(59,130,246,0.4) 55%)', display: 'inline' }}>Selected Works</span>
        </h2>
        <div style={{ width: '80px', height: '3px', background: '#3b82f6', marginTop: '0.5rem' }} />
        <p style={{ fontFamily: "'Caveat', cursive", color: '#999', fontSize: '1.3rem', marginTop: '0.75rem' }}>
          Projects I&apos;ve designed, developed, or both ↓
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="project-editorial"
            style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}
          >
            {/* Photo frame with project image */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="photo-frame"
              style={{ flex: '1 1 55%', transform: `rotate(${rotations[i % 3]}deg)`, position: 'relative' }}
            >
              <div className="pin" style={{ top: '-8px', left: '50%', marginLeft: '-8px' }} />
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', background: '#ddd', overflow: 'hidden' }}>
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 55vw" />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Caveat', cursive", fontSize: '1.5rem', color: '#999' }}>
                    Project Screenshot
                  </div>
                )}
              </div>
              <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem', color: '#888', textAlign: 'center', marginTop: '4px' }}>
                {project.category}
              </p>
            </motion.div>

            {/* Details on paper card */}
            <motion.div
              initial={{ rotate: i % 2 === 0 ? 1 : -1 }}
              className="paper-card"
              style={{ flex: '1 1 40%', padding: '2rem', position: 'relative', transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)` }}
            >
              <div className="tape tape-top-left" />

              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.7rem', background: '#e74c3c', color: 'white', padding: '0.2rem 0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem', display: 'inline-block' }}>
                {project.category || 'Project'}
              </span>

              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                {project.title}
              </h3>
              <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
                {project.description}
              </p>
              <p style={{ fontFamily: "'Fira Code', monospace", color: '#888', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                {project.stack}
              </p>

              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Caveat', cursive", fontSize: '1.2rem', color: '#3b82f6', fontWeight: 700, borderBottom: '2px solid #3b82f6', paddingBottom: '2px' }}>
                  Visit Live →
                </a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
