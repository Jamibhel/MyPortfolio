import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Ishola Bello (Jamibhel) — UI/UX Designer & Full-Stack Developer',
  description: 'Portfolio of Ishola Bello (Bello Jamiu Muhammad). UI/UX Designer and Full-Stack Web & Mobile Developer crafting beautiful, user-centered digital experiences.',
  keywords: ['Ishola Bello', 'Bello Jamiu Muhammad', 'Jamibhel', 'UI/UX Designer', 'Full-Stack Developer', 'Next.js', 'React', 'Portfolio'],
  authors: [{ name: 'Ishola Bello' }],
  openGraph: {
    title: 'Ishola Bello — UI/UX Designer & Developer',
    description: 'Portfolio of Ishola Bello. Crafting beautiful digital experiences.',
    url: 'https://isholabello.space',
    siteName: 'Ishola Bello Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
