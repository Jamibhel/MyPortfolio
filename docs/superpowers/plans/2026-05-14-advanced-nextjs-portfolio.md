# Advanced Next.js Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional, highly optimized Next.js portfolio with a React Three Fiber 3D background, Framer Motion animations, and Supabase integration.

**Architecture:** Next.js App Router, global CSS for sleek styling, React Three Fiber for WebGL components, Framer Motion for scroll reveals, and a Supabase client for a dynamic backend (e.g., fetching projects or handling messages).

**Tech Stack:** Next.js (TypeScript), Vanilla CSS (Glassmorphism), Three.js + R3F, Framer Motion, Supabase.

---

### Task 1: Supabase Configuration & Types

**Files:**
- Create: `src/lib/supabase.ts`
- Create: `.env.local`

- [ ] **Step 1: Create Supabase Client**
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);
```

- [ ] **Step 2: Define basic Environment file**
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

- [ ] **Step 3: Commit**
```bash
git add src/lib/supabase.ts .env.local
git commit -m "chore: setup supabase client and environment variables"
```

### Task 2: Optimized 3D Background Component

**Files:**
- Create: `src/components/CanvasBackground.tsx`

- [ ] **Step 1: Create R3F Component**
```tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useState, useRef } from 'react';
import * as THREE from 'three';

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  
  // Create a sphere of particles
  const [positions] = useState(() => {
    const p = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
      p[i] = (Math.random() - 0.5) * 10;
    }
    return p;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#a5b4fc" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
      </Points>
    </group>
  );
}

export default function CanvasBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ParticleSwarm />
      </Canvas>
    </div>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/CanvasBackground.tsx
git commit -m "feat: implement highly optimized React Three Fiber background"
```

### Task 3: Global Styles & Layout Updates

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace CSS**
```css
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Space+Grotesk:wght@400;700&display=swap');

:root {
  --bg-color: #0f172a;
  --text-main: #f8fafc;
  --accent-primary: #38bdf8;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: 'Space Grotesk', sans-serif;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}
```

- [ ] **Step 2: Update Layout**
```tsx
import type { Metadata } from 'next';
import './globals.css';
import CanvasBackground from '@/components/CanvasBackground';

export const metadata: Metadata = {
  title: 'Advanced Portfolio',
  description: 'Design Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CanvasBackground />
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Commit**
```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "style: configure global theme and inject 3D canvas"
```

### Task 4: Hero Section with Framer Motion

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Hero Component**
```tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5%' }}>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 700, background: 'linear-gradient(135deg, #f8fafc, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}
      >
        DESIGN ENGINEER
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{ fontFamily: "'Fira Code', monospace", color: '#94a3b8', fontSize: '1.2rem', marginTop: '1rem' }}
      >
        Building elegant interfaces with robust architecture.
      </motion.p>
    </section>
  );
}
```

- [ ] **Step 2: Update Page**
```tsx
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Commit**
```bash
git add src/components/Hero.tsx src/app/page.tsx
git commit -m "feat: add animated hero section"
```

### Task 5: Dynamic Projects Grid (Supabase Prep)

**Files:**
- Create: `src/components/ProjectsGrid.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Grid Component**
```tsx
'use client';

import { motion } from 'framer-motion';

const DUMMY_PROJECTS = [
  { id: 1, title: 'Enterprise Dashboard', stack: 'Next.js, Supabase, Tailwind' },
  { id: 2, title: 'AI Art Platform', stack: 'React, Three.js, WebGL' }
];

export default function ProjectsGrid() {
  // In the future, fetch from supabase: const { data } = await supabase.from('projects').select('*');

  return (
    <section style={{ padding: '5rem 5%' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#38bdf8', marginBottom: '3rem' }}>Selected Works</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {DUMMY_PROJECTS.map((project, i) => (
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
```

- [ ] **Step 2: Add to Page**
```tsx
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Hero />
      <ProjectsGrid />
    </main>
  );
}
```

- [ ] **Step 3: Commit**
```bash
git add src/components/ProjectsGrid.tsx src/app/page.tsx
git commit -m "feat: implement dynamic projects grid with framer-motion"
```
