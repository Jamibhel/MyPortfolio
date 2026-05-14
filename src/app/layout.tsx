import type { Metadata } from 'next';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
}
