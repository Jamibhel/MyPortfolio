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
