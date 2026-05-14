'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [projectTitle, setProjectTitle] = useState('');
  const [projectStack, setProjectStack] = useState('');

  const [expRole, setExpRole] = useState('');
  const [expCompany, setExpCompany] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy authentication for now until Supabase Auth is configured
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase.supabaseUrl) return alert('Supabase not configured');
    
    const { error } = await supabase.from('projects').insert([
      { title: projectTitle, stack: projectStack }
    ]);
    
    if (error) alert(error.message);
    else {
      alert('Project added!');
      setProjectTitle(''); setProjectStack('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', padding: '1rem' }}>
        <form onSubmit={handleLogin} style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', width: '100%', maxWidth: '400px' }}>
          <h1 style={{ color: '#f8fafc', fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>Admin Login</h1>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #333', background: '#111', color: 'white', marginBottom: '1.5rem', outline: 'none' }}
          />
          <button type="submit" style={{ width: '100%', padding: '1rem', background: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: '#f8fafc', padding: '5rem 5%' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#38bdf8', marginBottom: '3rem' }}>Portfolio CMS / Admin</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {/* Projects CMS */}
        <section style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#818cf8' }}>Add New Project</h2>
          <form onSubmit={handleAddProject} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" placeholder="Project Title" value={projectTitle} onChange={e => setProjectTitle(e.target.value)}
              style={{ padding: '0.8rem', background: '#111', border: '1px solid #333', color: 'white', borderRadius: '6px' }}
            />
            <input 
              type="text" placeholder="Tech Stack (comma separated)" value={projectStack} onChange={e => setProjectStack(e.target.value)}
              style={{ padding: '0.8rem', background: '#111', border: '1px solid #333', color: 'white', borderRadius: '6px' }}
            />
            <button type="submit" style={{ padding: '0.8rem', background: 'rgba(56,189,248,0.2)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.4)', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Save Project
            </button>
          </form>
        </section>

        {/* Experience CMS */}
        <section style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#818cf8' }}>Add Experience</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Connect Supabase to save!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" placeholder="Role (e.g. Frontend Dev)" value={expRole} onChange={e => setExpRole(e.target.value)}
              style={{ padding: '0.8rem', background: '#111', border: '1px solid #333', color: 'white', borderRadius: '6px' }}
            />
            <input 
              type="text" placeholder="Company Name" value={expCompany} onChange={e => setExpCompany(e.target.value)}
              style={{ padding: '0.8rem', background: '#111', border: '1px solid #333', color: 'white', borderRadius: '6px' }}
            />
            <button type="submit" style={{ padding: '0.8rem', background: 'rgba(129,140,248,0.2)', color: '#818cf8', border: '1px solid rgba(129,140,248,0.4)', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Save Experience
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
