'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

const DUMMY_PROJECTS = [
  { 
    id: 1, 
    title: 'Infinite Studio', 
    stack: 'Next.js, Tailwind CSS, Supabase, Vercel',
    description: 'A website for a content studio, currently live at infinitestudio.space. Features full content management and optimized deployment.',
    link: 'https://infinitestudio.space'
  },
  { 
    id: 2, 
    title: 'BookUp (Mobile App)', 
    stack: 'Android Studio, Java, Firebase',
    description: 'A powerful student tutor mobile platform featuring a community feed, real-time chatting system, and comprehensive tutoring features natively built for Android.'
  },
  { 
    id: 3, 
    title: 'iCOINified', 
    stack: 'Figma, UI/UX, Glassmorphism',
    description: 'A crypto application design showcasing modern aesthetic principles, specifically leveraging advanced glassmorphism techniques for a premium look and feel.'
  }
];

export default function ProjectsGrid() {
  const [projects, setProjects] = useState(DUMMY_PROJECTS);

  useEffect(() => {
    async function fetchProjects() {
      if (!supabase.supabaseUrl) return; // Supabase not configured yet
      const { data, error } = await supabase.from('projects').select('*').order('id', { ascending: false });
      if (data && data.length > 0) {
        setProjects(data as any);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="projects" style={{ padding: '5rem 5%' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#38bdf8', marginBottom: '3rem', textAlign: 'center' }}>Selected Works</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(56,189,248,0.1)' }}
            style={{ 
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '12px', height: '100%', minHeight: '300px', padding: '2rem', 
              display: 'flex', flexDirection: 'column', backdropFilter: 'blur(10px)', cursor: 'pointer' 
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#f8fafc' }}>{project.title}</h3>
            <p style={{ fontFamily: "'Fira Code', monospace", color: '#38bdf8', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{project.stack}</p>
            <p style={{ color: '#cbd5e1', lineHeight: 1.6, flexGrow: 1 }}>{project.description}</p>
            
            {project.link && (
              <a 
                href={project.link} target="_blank" rel="noopener noreferrer"
                style={{ marginTop: '1.5rem', display: 'inline-block', color: '#818cf8', fontWeight: 600, textDecoration: 'underline' }}
              >
                Visit Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
