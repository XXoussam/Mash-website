-- Create the extension for UUIDs if it doesn't exist
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contact Form Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'new'
);

-- Add RLS (Row Level Security) to contact_submissions
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insert from anonymous users (for the contact form)
CREATE POLICY "Allow anonymous inserts to contact_submissions" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

-- Create policy to allow select only for authenticated users (for admin dashboards)
CREATE POLICY "Allow select for authenticated only" ON contact_submissions
  FOR SELECT TO authenticated USING (true);

-- Newsletter Subscribers Table (check if it already exists first)
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  subscribed BOOLEAN DEFAULT TRUE
);

-- Add RLS (Row Level Security) to newsletter_subscribers if not already enabled
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insert from anonymous users (for the newsletter sign-up)
CREATE POLICY "Allow anonymous inserts to newsletter_subscribers" ON newsletter_subscribers
  FOR INSERT TO anon WITH CHECK (true);

-- Create policy to allow select only for authenticated users (for admin dashboards)
CREATE POLICY "Allow select for authenticated only" ON newsletter_subscribers
  FOR SELECT TO authenticated USING (true); 