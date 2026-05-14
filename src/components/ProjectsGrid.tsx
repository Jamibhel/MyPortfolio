'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

const DUMMY_PROJECTS = [
  { id: 1, title: 'Enterprise Dashboard', stack: 'Next.js, Supabase, Tailwind' },
  { id: 2, title: 'AI Art Platform', stack: 'React, Three.js, WebGL' }
];

export default function ProjectsGrid() {
  const [projects, setProjects] = useState(DUMMY_PROJECTS);

  useEffect(() => {
    async function fetchProjects() {
      if (!supabase.supabaseUrl) return; // Supabase not configured yet
      const { data, error } = await supabase.from('projects').select('*').order('id', { ascending: false });
      if (data && data.length > 0) {
        setProjects(data);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section style={{ padding: '5rem 5%' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#38bdf8', marginBottom: '3rem' }}>Selected Works</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(56,189,248,0.1)' }}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', height: '300px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backdropFilter: 'blur(10px)', cursor: 'pointer' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ fontFamily: "'Fira Code', monospace", color: '#94a3b8', fontSize: '0.9rem' }}>{project.stack}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
