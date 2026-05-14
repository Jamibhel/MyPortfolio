'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

const DUMMY_PROJECTS = [
  { 
    id: 1, 
    title: 'Infinite Studio', 
    stack: 'Next.js · Tailwind CSS · Supabase · Vercel',
    description: 'A full-featured website for a content studio — currently live in production. Complete with content management, booking systems, and optimized deployment on Vercel.',
    image: '/project-infinitestudio.png',
    link: 'https://infinitestudio.space',
    category: 'Web Development'
  },
  { 
    id: 2, 
    title: 'BookUp', 
    stack: 'Android Studio · Java · Firebase',
    description: 'A powerful student-tutor mobile platform with a community feed, real-time messaging, and comprehensive academic features — built natively for Android.',
    image: '/project-bookup.png',
    category: 'Mobile App'
  },
  { 
    id: 3, 
    title: 'iCOINified', 
    stack: 'Figma · Glassmorphism · UI/UX Design',
    description: 'A premium crypto application design exploring advanced glassmorphism techniques. Focused on creating an elegant, trust-inspiring financial interface.',
    image: '/project-icoinified.png',
    category: 'UI/UX Design'
  }
];

export default function ProjectsGrid() {
  const [projects, setProjects] = useState(DUMMY_PROJECTS);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase.from('projects').select('*').order('id', { ascending: false });
      if (data && data.length > 0) {
        setProjects(data as any);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="projects" style={{ padding: '6rem 5% 4rem' }}>
      {/* Editorial section header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 4rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <p style={{ color: '#818cf8', fontSize: '0.85rem', fontFamily: "'Fira Code', monospace", letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Selected Works
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f8fafc', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Featured Projects
          </h2>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.9rem', maxWidth: '400px' }}>
          A curated selection of work spanning UI/UX design, mobile development, and full-stack web applications.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', maxWidth: '1200px', margin: '0 auto' }}>
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: i % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
              gap: '3rem', alignItems: 'center'
            }}
            className="project-article"
          >
            {/* Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{ 
                order: i % 2 === 0 ? 0 : 1,
                position: 'relative', borderRadius: '8px', overflow: 'hidden',
                aspectRatio: '16/11', background: '#1e293b'
              }}
            >
              {project.image && (
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              )}
            </motion.div>

            {/* Content */}
            <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
              <p style={{ color: '#818cf8', fontSize: '0.8rem', fontFamily: "'Fira Code', monospace", letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {project.category || 'Project'}
              </p>
              <h3 style={{ fontSize: '2rem', color: '#f8fafc', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                {project.title}
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                {project.description}
              </p>
              <p style={{ fontFamily: "'Fira Code', monospace", color: '#64748b', fontSize: '0.85rem', marginBottom: '2rem' }}>
                {project.stack}
              </p>
              
              {project.link && (
                <a 
                  href={project.link} target="_blank" rel="noopener noreferrer"
                  style={{ 
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    color: '#38bdf8', fontWeight: 600, fontSize: '0.95rem',
                    borderBottom: '1px solid transparent', paddingBottom: '2px',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderBottomColor = '#38bdf8'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderBottomColor = 'transparent'; }}
                >
                  View Live Project <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
