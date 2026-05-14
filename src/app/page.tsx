import Hero from '@/components/Hero';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsSection from '@/components/SkillsSection';
import ProjectsGrid from '@/components/ProjectsGrid';

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Hero />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectsGrid />
    </main>
  );
}
