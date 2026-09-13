export interface Project {
  id: number | string;
  title: string;
  stack: string;
  description: string;
  category: string;
  link?: string;
  images: string[];
}

export const initialProjects: Project[] = [
  {
    id: 1,
    title: 'NutriCare — AI Senior Nutrition Platform',
    category: 'Mobile Apps',
    stack: 'Flutter • Dart • React • Tailwind CSS • Next.js • Supabase',
    description: 'Specialized geriatric healthcare mobile & web platform. Delivers condition-tailored meal plans using 50+ local Nigerian foods, medication reminders with drug-food interaction checks, weight/BMI trend analytics, and caregiver coordination.',
    link: 'https://nutricareelderly1.vercel.app/',
    images: ['/project-bookup.png']
  },
  {
    id: 2,
    title: 'MoniePal — Fintech Savings & Digital Wallet',
    category: 'Mobile Apps',
    stack: 'React • TypeScript • Firebase • Tailwind CSS • PWA',
    description: 'High-security fintech savings platform built for scale. Enables users to form trusted cooperative savings circles (Ajo/Esusu), automate recurring wallet contributions, track financial targets, and execute transparent payouts managing real money.',
    link: 'https://mymoniepal.com/',
    images: ['/project-icoinified.png']
  },
  {
    id: 3,
    title: 'BookUp — Student-Tutor Community App',
    category: 'Mobile Apps',
    stack: 'Android Studio • Java • Firebase • React • Vite • PWA',
    description: 'Cross-platform academic ecosystem featuring a native Android mobile app and responsive web app. Powers real-time student study feeds, group discussions, tutoring matchmaking, and academic resource distribution.',
    link: 'https://book-up-ten.vercel.app/',
    images: ['/project-bookup.png']
  },
  {
    id: 4,
    title: 'Ops4Ease — SME Operations SaaS Platform',
    category: 'Full-Stack Web',
    stack: 'React • TypeScript • Vite • Firebase • Tailwind CSS',
    description: 'Unified operations hub engineered for African SMEs. Eliminates disconnected spreadsheets and WhatsApp groups by centralizing task tracking, workforce attendance, HR workflows, finance tooling, and executive business insights.',
    link: 'https://ops4ease.com/',
    images: ['/project-infinitestudio.png']
  },
  {
    id: 5,
    title: 'Depeace Global — Travel Booking Hub',
    category: 'Full-Stack Web',
    stack: 'React • TypeScript • Vite • Tailwind CSS • shadcn/ui • Supabase',
    description: 'High-conversion travel booking platform and CMS. Features specialized Hajj and Umrah pilgrimage packages, international flight and hotel reservations, destination service galleries, travel blog, and an admin CMS powered by Supabase.',
    link: 'https://depeacetravels.com/',
    images: ['/project-icoinified.png']
  },
  {
    id: 6,
    title: 'Infinite Studio — Content Creation Studio Space',
    category: 'Web',
    stack: 'Next.js 14 • React • TypeScript • Tailwind CSS • Lucide Icons',
    description: 'Editorial web platform and booking system for Abeokuta’s leading content studio. Showcases 8 themed creative production sets, equipment reservations (cinema lighting, 4K camera setups), creator testimonials, and seamless WhatsApp booking.',
    link: 'https://www.infinitestudio.space/',
    images: ['/project-infinitestudio.png']
  },
  {
    id: 7,
    title: 'Provenance School — Business Education Platform',
    category: 'Web',
    stack: 'React • TypeScript • Firebase • Supabase • Tailwind CSS',
    description: 'Executive education portal empowering next-generation business leaders. Features live interactive webinars, modular course management, student onboarding, and role-based tutor/admin management portals.',
    link: 'https://provenancesch.com/',
    images: ['/project-bookup.png']
  },
  {
    id: 8,
    title: 'Willow Health — Campus Wellness Platform',
    category: 'Web',
    stack: 'React • TypeScript • Firebase • Recharts • Tailwind CSS',
    description: 'Campus wellness ecosystem providing students with private, confidential healthcare access. Includes student self-assessment tools, clinic triage dashboards, appointment booking, and wellness trend analytics powered by Recharts.',
    link: 'https://campus-wellnes.web.app/',
    images: ['/project-infinitestudio.png']
  }
];
