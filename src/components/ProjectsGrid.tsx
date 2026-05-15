'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Polaroid3D from './Polaroid3D';

interface Project {
  id: number;
  title: string;
  stack: string;
  description: string;
  category?: string;
  link?: string;
  images: string[]; // Array of image URLs
}

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (data && data.length > 0) {
        const parsed = data.map(p => ({
          ...p,
          images: typeof p.images === 'string' ? JSON.parse(p.images) : (p.images || [])
        }));
        setProjects(parsed as Project[]);
        
        // Extract unique categories
        const cats = Array.from(new Set(parsed.map(p => p.category || 'Other')));
        setCategories(['All', ...cats]);
      }
    }
    fetchProjects();
  }, []);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => (p.category || 'Other') === activeFilter);

  const rotations = [1.5, -1, 0.5, -1.5, 1];
  const tapeColors = ['washi-pink', 'washi-blue', 'washi-green', 'washi-pink', 'washi-blue'];

  return (
    <section id="projects" style={{ padding: '5rem 5%', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
      {/* Faded number */}
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 0.08 }} viewport={{ once: true }}
        style={{ position: 'absolute', top: '-30px', right: '0', fontFamily: "var(--serif)", fontSize: '12rem', fontWeight: 900, color: '#1a1a1a', pointerEvents: 'none', lineHeight: 1 }}>04</motion.p>

      {/* Section header */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--ink-black)' }}>
          <span style={{ background: 'linear-gradient(transparent 55%, rgba(74,143,231,0.3) 55%)' }}>Selected Works</span>
        </h2>
        <div style={{ width: '60px', height: '3px', background: 'var(--accent-blue)', marginTop: '0.5rem' }} />
        <p style={{ fontFamily: "var(--handwritten)", color: 'var(--ink-light)', fontSize: '1.3rem', marginTop: '0.5rem' }}>
          Projects I&apos;ve designed, developed, or both ↓
        </p>

        {/* Filter System */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '0.4rem 1.2rem',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: 700,
                border: activeFilter === cat ? '2px solid var(--ink-black)' : '2px dashed #ccc',
                background: activeFilter === cat ? 'var(--ink-black)' : 'transparent',
                color: activeFilter === cat ? 'var(--paper-white)' : 'var(--ink-gray)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'var(--clean)'
              }}
              onMouseOver={(e) => {
                if (activeFilter !== cat) {
                  e.currentTarget.style.borderColor = 'var(--ink-black)';
                  e.currentTarget.style.color = 'var(--ink-black)';
                }
              }}
              onMouseOut={(e) => {
                if (activeFilter !== cat) {
                  e.currentTarget.style.borderColor = '#ccc';
                  e.currentTarget.style.color = 'var(--ink-gray)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, i) => (
            <motion.article key={project.id}
              layout
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="project-row"
              style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>

              {/* Images as 3D polaroids */}
              <div style={{ flex: '1 1 55%', position: 'relative' }}>
                <div className="project-images" style={{ display: 'grid', gridTemplateColumns: project.images.length > 1 ? '1fr 1fr' : '1fr', gap: '1rem' }}>
                  {project.images.map((img, imgIdx) => (
                    <Polaroid3D 
                      key={imgIdx}
                      src={img}
                      alt={`${project.title} screenshot ${imgIdx + 1}`}
                      initialRotation={rotations[(i + imgIdx) % rotations.length]}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
                {/* Handwritten caption */}
                <p style={{ fontFamily: "var(--handwritten)", color: 'var(--ink-light)', fontSize: '1.1rem', textAlign: 'center', marginTop: '0.5rem', transform: `rotate(${rotations[i % rotations.length] * -1}deg)` }}>
                  {project.category} ✦
                </p>
              </div>

              {/* Details on paper card */}
              <div style={{ flex: '1 1 40%' }}>
                <motion.div className="paper-card" style={{ padding: '2rem', position: 'relative', transform: `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)` }}>
                  <div className={`washi-tape ${tapeColors[i % tapeColors.length]}`} style={{ width: '100px', top: '-12px', left: '30px', transform: 'rotate(-3deg)' }} />
                  <div className="paper-clip" style={{ top: '-18px', right: '25px' }} />

                  <span style={{ fontFamily: "var(--mono)", fontSize: '0.65rem', background: 'var(--accent-orange)', color: 'white', padding: '0.2rem 0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '0.75rem' }}>
                    {project.category || 'Project'}
                  </span>

                  <h3 style={{ fontFamily: "var(--serif)", fontSize: '1.8rem', fontWeight: 900, color: 'var(--ink-black)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--ink-gray)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1rem' }}>
                    {project.description}
                  </p>
                  <p style={{ fontFamily: "var(--mono)", color: 'var(--ink-light)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                    {project.stack}
                  </p>

                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--ink-black)', color: 'var(--paper-white)', padding: '0.5rem 1.2rem', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'all 0.2s' }}
                      onMouseOver={(e) => { e.currentTarget.style.background = '#e8913a'; }}
                      onMouseOut={(e) => { e.currentTarget.style.background = '#1a1a1a'; }}>
                      <ExternalLink size={14} /> Visit Live
                    </a>
                  )}
                </motion.div>

                {/* Handwritten annotation */}
                {i === 0 && (
                  <p style={{ fontFamily: "var(--handwritten)", color: 'var(--accent-red)', fontSize: '1.1rem', marginTop: '0.75rem', marginLeft: '1rem', transform: 'rotate(-2deg)' }}>
                    ← currently live! 🚀
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Fullscreen Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem',
              cursor: 'zoom-out'
            }}
          >
            <motion.button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 1001
              }}
            >
              <X size={24} color="black" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '1200px', maxHeight: '80vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project Preview"
                fill
                style={{ objectFit: 'contain' }}
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
