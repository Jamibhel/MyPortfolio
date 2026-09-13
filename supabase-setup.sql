-- Run this in your Supabase SQL Editor (Dashboard → SQL → New Query)
-- Creates the tables needed for the portfolio CMS

-- ===== PROJECTS TABLE =====
CREATE TABLE IF NOT EXISTS projects (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  stack TEXT,
  category TEXT,
  link TEXT,
  images JSONB DEFAULT '[]'::jsonb,  -- Array of image URLs
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== EXPERIENCES TABLE =====
CREATE TABLE IF NOT EXISTS experiences (
  id BIGSERIAL PRIMARY KEY,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  period TEXT,
  description TEXT,
  tags TEXT,  -- Comma-separated tags
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can view the portfolio)
CREATE POLICY "Public read projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read experiences" ON experiences FOR SELECT USING (true);

-- Authenticated insert/update/delete (for admin panel)
CREATE POLICY "Auth insert projects" ON projects FOR INSERT WITH CHECK (true);
CREATE POLICY "Auth update projects" ON projects FOR UPDATE USING (true);
CREATE POLICY "Auth delete projects" ON projects FOR DELETE USING (true);

CREATE POLICY "Auth insert experiences" ON experiences FOR INSERT WITH CHECK (true);
CREATE POLICY "Auth update experiences" ON experiences FOR UPDATE USING (true);
CREATE POLICY "Auth delete experiences" ON experiences FOR DELETE USING (true);

-- ===== STORAGE BUCKET FOR PROJECT IMAGES =====
-- Create the storage bucket for images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('project-images', 'project-images', true) 
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to the bucket
CREATE POLICY "Public Object Access" ON storage.objects FOR SELECT USING (bucket_id = 'project-images');

-- Allow authenticated uploads
CREATE POLICY "Auth Object Upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'project-images');
CREATE POLICY "Auth Object Delete" ON storage.objects FOR DELETE USING (bucket_id = 'project-images');

-- ===== SETTINGS TABLE (for CV URL and other site settings) =====
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read settings" ON settings FOR SELECT USING (true);
CREATE POLICY "Auth upsert settings" ON settings FOR INSERT WITH CHECK (true);
CREATE POLICY "Auth update settings" ON settings FOR UPDATE USING (true);

-- ===== SEED DATA FOR PROJECTS =====
INSERT INTO projects (title, category, stack, description, link, images) VALUES
('NutriCare — AI Senior Nutrition Platform', 'Mobile Apps', 'Flutter • Dart • React • Tailwind CSS • Next.js • Supabase', 'Specialized geriatric healthcare mobile & web platform. Delivers condition-tailored meal plans using 50+ local Nigerian foods, medication reminders with drug-food interaction checks, weight/BMI trend analytics, and caregiver coordination.', 'https://nutricareelderly1.vercel.app/', '["/images/projects/nutricare.jpg"]'::jsonb),
('MoniePal — Fintech Savings & Digital Wallet', 'Mobile Apps', 'React • TypeScript • Firebase • Tailwind CSS • PWA', 'High-security fintech savings platform built for scale. Enables users to form trusted cooperative savings circles (Ajo/Esusu), automate recurring wallet contributions, track financial targets, and execute transparent payouts managing real money.', 'https://mymoniepal.com/', '["/images/projects/moniepal.jpg"]'::jsonb),
('BookUp — Student-Tutor Community App', 'Mobile Apps', 'Android Studio • Java • Firebase • React • Vite • PWA', 'Cross-platform academic ecosystem featuring a native Android mobile app and responsive web app. Powers real-time student study feeds, group discussions, tutoring matchmaking, and academic resource distribution.', 'https://book-up-ten.vercel.app/', '["/images/projects/bookup.jpg"]'::jsonb),
('Ops4Ease — SME Operations SaaS Platform', 'Full-Stack Web', 'React • TypeScript • Vite • Firebase • Tailwind CSS', 'Unified operations hub engineered for African SMEs. Eliminates disconnected spreadsheets and WhatsApp groups by centralizing task tracking, workforce attendance, HR workflows, finance tooling, and executive business insights.', 'https://ops4ease.com/', '["/images/projects/ops4ease.jpg"]'::jsonb),
('Depeace Global — Travel Booking Hub', 'Full-Stack Web', 'React • TypeScript • Vite • Tailwind CSS • shadcn/ui • Supabase', 'High-conversion travel booking platform and CMS. Features specialized Hajj and Umrah pilgrimage packages, international flight and hotel reservations, destination service galleries, travel blog, and an admin CMS powered by Supabase.', 'https://depeacetravels.com/', '["/images/projects/depeace.jpg"]'::jsonb),
('Infinite Studio — Content Creation Studio Space', 'Web', 'Next.js 14 • React • TypeScript • Tailwind CSS • Lucide Icons', 'Editorial web platform and booking system for Abeokuta’s leading content studio. Showcases 8 themed creative production sets, equipment reservations (cinema lighting, 4K camera setups), creator testimonials, and seamless WhatsApp booking.', 'https://www.infinitestudio.space/', '["/images/projects/infinitestudio.jpg"]'::jsonb),
('Provenance School — Business Education Platform', 'Web', 'React • TypeScript • Firebase • Supabase • Tailwind CSS', 'Executive education portal empowering next-generation business leaders. Features live interactive webinars, modular course management, student onboarding, and role-based tutor/admin management portals.', 'https://provenancesch.com/', '["/images/projects/provenance.jpg"]'::jsonb),
('Willow Health — Campus Wellness Platform', 'Web', 'React • TypeScript • Firebase • Recharts • Tailwind CSS', 'Campus wellness ecosystem providing students with private, confidential healthcare access. Includes student self-assessment tools, clinic triage dashboards, appointment booking, and wellness trend analytics powered by Recharts.', 'https://campus-wellnes.web.app/', '["/images/projects/willowhealth.jpg"]'::jsonb)
ON CONFLICT DO NOTHING;

