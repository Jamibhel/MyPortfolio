'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2, Plus, ExternalLink, Upload } from 'lucide-react';

interface Project {
  id?: number;
  title: string;
  description: string;
  stack: string;
  category: string;
  link: string;
  images: string[];
}

interface Experience {
  id?: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string;
}

export default function AdminPage() {
  const [tab, setTab] = useState<'projects' | 'experience'>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState('');

  // Project form
  const [pForm, setPForm] = useState<Project>({ title: '', description: '', stack: '', category: '', link: '', images: [] });
  // Experience form
  const [eForm, setEForm] = useState<Experience>({ role: '', company: '', period: '', description: '', tags: '' });

  useEffect(() => {
    fetchProjects();
    fetchExperiences();
  }, []);

  async function fetchProjects() {
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (data) setProjects(data.map(p => ({ ...p, images: typeof p.images === 'string' ? JSON.parse(p.images) : (p.images || []) })));
  }

  async function fetchExperiences() {
    const { data } = await supabase.from('experiences').select('*').order('id', { ascending: false });
    if (data) setExperiences(data);
  }

  async function uploadImage(file: File): Promise<string | null> {
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from('project-images').upload(fileName, file);
    if (error) { setStatus(`Upload error: ${error.message}`); return null; }
    const { data: urlData } = supabase.storage.from('project-images').getPublicUrl(data.path);
    return urlData.publicUrl;
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setUploading(true);
    const urls: string[] = [...pForm.images];
    for (const file of Array.from(e.target.files)) {
      const url = await uploadImage(file);
      if (url) urls.push(url);
    }
    setPForm({ ...pForm, images: urls });
    setUploading(false);
  }

  async function addProject() {
    if (!pForm.title) { setStatus('Title is required'); return; }
    const { error } = await supabase.from('projects').insert({ ...pForm, images: JSON.stringify(pForm.images) });
    if (error) { setStatus(`Error: ${error.message}`); return; }
    setStatus('Project added!');
    setPForm({ title: '', description: '', stack: '', category: '', link: '', images: [] });
    fetchProjects();
  }

  async function deleteProject(id: number) {
    await supabase.from('projects').delete().eq('id', id);
    fetchProjects();
  }

  async function addExperience() {
    if (!eForm.role) { setStatus('Role is required'); return; }
    const { error } = await supabase.from('experiences').insert(eForm);
    if (error) { setStatus(`Error: ${error.message}`); return; }
    setStatus('Experience added!');
    setEForm({ role: '', company: '', period: '', description: '', tags: '' });
    fetchExperiences();
  }

  async function deleteExperience(id: number) {
    await supabase.from('experiences').delete().eq('id', id);
    fetchExperiences();
  }

  const inputStyle: React.CSSProperties = { width: '100%', padding: '0.7rem 1rem', border: '2px solid #e0d8cc', borderRadius: '6px', background: '#faf8f5', fontSize: '0.9rem', fontFamily: "'Space Grotesk', sans-serif", outline: 'none', transition: 'border-color 0.2s' };
  const labelStyle: React.CSSProperties = { fontSize: '0.8rem', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem', display: 'block' };

  return (
    <div style={{ minHeight: '100vh', background: '#f2ede4', padding: '6rem 5% 3rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Admin Dashboard</h1>
        <p style={{ color: '#777', marginBottom: '2rem' }}>Manage your portfolio content</p>

        {status && (
          <div style={{ padding: '0.75rem 1rem', background: status.includes('Error') ? '#fef2f2' : '#f0fdf4', border: `1px solid ${status.includes('Error') ? '#fecaca' : '#bbf7d0'}`, borderRadius: '6px', marginBottom: '1.5rem', fontSize: '0.9rem', color: status.includes('Error') ? '#991b1b' : '#166534' }}>
            {status}
          </div>
        )}

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0', marginBottom: '2rem', borderBottom: '2px solid #e0d8cc' }}>
          {(['projects', 'experience'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: '0.75rem 2rem', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none', borderBottom: tab === t ? '3px solid #e8913a' : '3px solid transparent', background: 'none', color: tab === t ? '#1a1a1a' : '#999', cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", transition: 'all 0.2s', marginBottom: '-2px' }}>
              {t === 'projects' ? '🎨 Projects' : '💼 Experience'}
            </button>
          ))}
        </div>

        {/* PROJECTS TAB */}
        {tab === 'projects' && (
          <div>
            <div style={{ background: '#faf8f5', border: '2px solid #e0d8cc', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem', marginBottom: '1.5rem' }}>➕ Add New Project</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div><label style={labelStyle}>Title</label><input style={inputStyle} value={pForm.title} onChange={e => setPForm({...pForm, title: e.target.value})} placeholder="Project name" /></div>
                <div><label style={labelStyle}>Category</label><input style={inputStyle} value={pForm.category} onChange={e => setPForm({...pForm, category: e.target.value})} placeholder="Web / Mobile / Design" /></div>
                <div style={{ gridColumn: 'span 2' }}><label style={labelStyle}>Description</label><textarea style={{...inputStyle, minHeight: '80px', resize: 'vertical'}} value={pForm.description} onChange={e => setPForm({...pForm, description: e.target.value})} placeholder="What does this project do?" /></div>
                <div><label style={labelStyle}>Tech Stack</label><input style={inputStyle} value={pForm.stack} onChange={e => setPForm({...pForm, stack: e.target.value})} placeholder="Next.js · React · etc" /></div>
                <div><label style={labelStyle}>Live Link (optional)</label><input style={inputStyle} value={pForm.link} onChange={e => setPForm({...pForm, link: e.target.value})} placeholder="https://..." /></div>
              </div>

              {/* Image upload */}
              <div style={{ marginTop: '1.5rem' }}>
                <label style={labelStyle}>Project Images</label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  {pForm.images.map((img, idx) => (
                    <div key={idx} style={{ position: 'relative', width: '120px', height: '80px', borderRadius: '4px', overflow: 'hidden', border: '2px solid #e0d8cc' }}>
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <button onClick={() => setPForm({...pForm, images: pForm.images.filter((_, i) => i !== idx)})}
                        style={{ position: 'absolute', top: '4px', right: '4px', background: '#d94f4f', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.7rem' }}>×</button>
                    </div>
                  ))}
                  <label style={{ width: '120px', height: '80px', border: '2px dashed #ccc', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#999', fontSize: '0.75rem', gap: '0.25rem' }}>
                    <Upload size={18} />
                    {uploading ? 'Uploading...' : 'Add Image'}
                    <input type="file" accept="image/*" multiple onChange={handleImageUpload} style={{ display: 'none' }} />
                  </label>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.5rem' }}>Or paste image URLs directly:</p>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <input id="imgUrl" style={{...inputStyle, flex: 1}} placeholder="https://example.com/image.png" />
                  <button onClick={() => { const inp = document.getElementById('imgUrl') as HTMLInputElement; if (inp.value) { setPForm({...pForm, images: [...pForm.images, inp.value]}); inp.value = ''; }}}
                    style={{ padding: '0 1rem', background: '#4a8fe7', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>Add</button>
                </div>
              </div>

              <button onClick={addProject}
                style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#1a1a1a', color: '#faf8f5', padding: '0.75rem 2rem', border: 'none', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', borderRadius: '4px', transition: 'background 0.2s' }}
                onMouseOver={e => e.currentTarget.style.background = '#e8913a'}
                onMouseOut={e => e.currentTarget.style.background = '#1a1a1a'}>
                <Plus size={16} /> Add Project
              </button>
            </div>

            {/* Existing projects */}
            <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem', marginBottom: '1rem' }}>📋 Your Projects ({projects.length})</h3>
            {projects.length === 0 && <p style={{ color: '#999' }}>No projects yet. Add one above!</p>}
            {projects.map(p => (
              <div key={p.id} style={{ background: '#faf8f5', border: '1px solid #e0d8cc', borderRadius: '6px', padding: '1.25rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.3rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{p.title}</h4>
                    {p.category && <span style={{ fontSize: '0.7rem', background: '#e8913a', color: 'white', padding: '0.15rem 0.5rem', borderRadius: '3px' }}>{p.category}</span>}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: '0.3rem' }}>{p.description}</p>
                  {p.images.length > 0 && <p style={{ fontSize: '0.75rem', color: '#4a8fe7' }}>📷 {p.images.length} image(s)</p>}
                  {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: '#4a8fe7', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ExternalLink size={12} /> {p.link}</a>}
                </div>
                <button onClick={() => deleteProject(p.id!)} style={{ background: 'none', border: 'none', color: '#d94f4f', cursor: 'pointer', padding: '0.5rem' }}><Trash2 size={18} /></button>
              </div>
            ))}
          </div>
        )}

        {/* EXPERIENCE TAB */}
        {tab === 'experience' && (
          <div>
            <div style={{ background: '#faf8f5', border: '2px solid #e0d8cc', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem', marginBottom: '1.5rem' }}>➕ Add Experience</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div><label style={labelStyle}>Role</label><input style={inputStyle} value={eForm.role} onChange={e => setEForm({...eForm, role: e.target.value})} placeholder="UI/UX Designer" /></div>
                <div><label style={labelStyle}>Company</label><input style={inputStyle} value={eForm.company} onChange={e => setEForm({...eForm, company: e.target.value})} placeholder="Company name" /></div>
                <div><label style={labelStyle}>Period</label><input style={inputStyle} value={eForm.period} onChange={e => setEForm({...eForm, period: e.target.value})} placeholder="1 Year / 6 Months" /></div>
                <div><label style={labelStyle}>Tags (comma-separated)</label><input style={inputStyle} value={eForm.tags} onChange={e => setEForm({...eForm, tags: e.target.value})} placeholder="Figma, UI/UX, Prototyping" /></div>
                <div style={{ gridColumn: 'span 2' }}><label style={labelStyle}>Description</label><textarea style={{...inputStyle, minHeight: '80px', resize: 'vertical'}} value={eForm.description} onChange={e => setEForm({...eForm, description: e.target.value})} placeholder="What did you do?" /></div>
              </div>
              <button onClick={addExperience}
                style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#1a1a1a', color: '#faf8f5', padding: '0.75rem 2rem', border: 'none', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', borderRadius: '4px', transition: 'background 0.2s' }}
                onMouseOver={e => e.currentTarget.style.background = '#e8913a'}
                onMouseOut={e => e.currentTarget.style.background = '#1a1a1a'}>
                <Plus size={16} /> Add Experience
              </button>
            </div>

            <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem', marginBottom: '1rem' }}>📋 Your Experience ({experiences.length})</h3>
            {experiences.length === 0 && <p style={{ color: '#999' }}>No experience entries yet.</p>}
            {experiences.map(exp => (
              <div key={exp.id} style={{ background: '#faf8f5', border: '1px solid #e0d8cc', borderRadius: '6px', padding: '1.25rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{exp.role}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#e8913a', fontWeight: 600 }}>{exp.company} — {exp.period}</p>
                  <p style={{ fontSize: '0.85rem', color: '#777', marginTop: '0.25rem' }}>{exp.description}</p>
                </div>
                <button onClick={() => deleteExperience(exp.id!)} style={{ background: 'none', border: 'none', color: '#d94f4f', cursor: 'pointer', padding: '0.5rem' }}><Trash2 size={18} /></button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
