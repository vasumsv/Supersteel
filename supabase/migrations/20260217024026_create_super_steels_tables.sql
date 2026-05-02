/*
  # Super Steels Database Schema

  ## Overview
  This migration creates the core database structure for the Super Steels website,
  including products catalog, projects showcase, blog posts, and customer inquiries.

  ## New Tables

  ### 1. products
  Stores steel product catalog with specifications
  - `id` (uuid, primary key)
  - `name` (text) - Product name
  - `category` (text) - TMT, Structural Steel, Sheets & Plates, Pipes, Roofing
  - `description` (text) - Product description
  - `grades` (text[]) - Available grades
  - `sizes` (text[]) - Available sizes
  - `applications` (text[]) - Common applications
  - `image_url` (text) - Product image
  - `weight_chart` (jsonb) - Weight specifications
  - `is_featured` (boolean) - Featured on homepage
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. projects
  Showcases completed construction projects
  - `id` (uuid, primary key)
  - `title` (text) - Project name
  - `project_type` (text) - Residential, Commercial, Industrial, Infrastructure
  - `location` (text) - Project location
  - `material_supplied` (text) - Materials provided
  - `description` (text) - Project details
  - `image_url` (text) - Project image
  - `completed_date` (date) - Completion date
  - `is_featured` (boolean) - Featured showcase
  - `created_at` (timestamptz)

  ### 3. blog_posts
  Knowledge center articles for SEO and customer education
  - `id` (uuid, primary key)
  - `title` (text) - Article title
  - `slug` (text, unique) - URL-friendly slug
  - `excerpt` (text) - Short summary
  - `content` (text) - Full article content
  - `category` (text) - Article category
  - `tags` (text[]) - Search tags
  - `image_url` (text) - Featured image
  - `author` (text) - Author name
  - `published_at` (timestamptz) - Publication date
  - `views` (integer) - View count
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. inquiries
  Customer contact form submissions and quote requests
  - `id` (uuid, primary key)
  - `name` (text) - Customer name
  - `phone` (text) - Contact number
  - `email` (text) - Email address
  - `project_type` (text) - Type of project
  - `material` (text) - Required material
  - `quantity` (text) - Quantity needed
  - `location` (text) - Delivery location
  - `required_date` (date) - When needed
  - `message` (text) - Additional details
  - `status` (text) - pending, contacted, quoted, completed
  - `created_at` (timestamptz)

  ## Security
  - All tables have RLS enabled
  - Public read access for products, projects, and blog_posts
  - Insert-only access for inquiries
  - Admin access for modifications (handled via service role)
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text NOT NULL DEFAULT '',
  grades text[] DEFAULT '{}',
  sizes text[] DEFAULT '{}',
  applications text[] DEFAULT '{}',
  image_url text DEFAULT '',
  weight_chart jsonb DEFAULT '{}',
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  project_type text NOT NULL,
  location text NOT NULL,
  material_supplied text NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  completed_date date DEFAULT CURRENT_DATE,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL,
  category text NOT NULL DEFAULT 'General',
  tags text[] DEFAULT '{}',
  image_url text DEFAULT '',
  author text DEFAULT 'Super Steels Team',
  published_at timestamptz DEFAULT now(),
  views integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text DEFAULT '',
  project_type text NOT NULL,
  material text NOT NULL,
  quantity text NOT NULL,
  location text NOT NULL,
  required_date date,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Products policies (public read)
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Projects policies (public read)
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

-- Blog posts policies (public read, increment views)
CREATE POLICY "Anyone can view blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update blog views"
  ON blog_posts FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Inquiries policies (public insert only)
CREATE POLICY "Anyone can submit inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured);
CREATE INDEX IF NOT EXISTS idx_projects_type ON projects(project_type);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created ON inquiries(created_at);
