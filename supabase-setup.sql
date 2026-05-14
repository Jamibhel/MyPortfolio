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
-- Go to Storage in Supabase Dashboard and create a bucket called "project-images"
-- Set it to Public so images can be displayed on the portfolio
