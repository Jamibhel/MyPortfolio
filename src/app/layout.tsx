import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Bello Jamiu Muhammad — UI/UX Designer & Full-Stack Developer',
  description: 'Portfolio of Bello Jamiu Muhammad. UI/UX Designer and Full-Stack Web & Mobile Developer crafting beautiful, user-centered digital experiences.',
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
