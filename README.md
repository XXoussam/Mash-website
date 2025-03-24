# MASH - Modern AI Solutions Website

A modern, responsive website for AI automation services built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI/UX with sleek animations
- 📱 Fully responsive design
- ⚡ Built with Vite for optimal performance
- 🎭 TypeScript for type safety
- 🎯 Tailwind CSS for styling
- 🔄 Smooth scroll animations
- 💫 Interactive components

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/mash-website.git
\`\`\`

2. Install dependencies:
\`\`\`bash
cd mash-website
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## Build

To build for production:
\`\`\`bash
npm run build
\`\`\`

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## License

MIT

## Environment Setup

### Supabase Configuration

To enable the contact form and newsletter functionality, you need to set up Supabase:

1. Create a Supabase account and project at [supabase.com](https://supabase.com)
2. Go to your project dashboard
3. Navigate to Project Settings > API 
4. Copy the URL and anon key
5. Create a `.env.local` file in the project root with:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Database Setup

The project requires two tables in your Supabase database:

1. `contact_submissions` - Stores contact form submissions
2. `newsletter_subscribers` - Stores newsletter subscriptions

You can set up these tables and their security policies by running the SQL migration in `supabase/migrations/`.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Supabase Setup Guide

### 1. Create a Supabase Project

If you don't have one already:
1. Sign up at [supabase.com](https://supabase.com)
2. Create a new project
3. Choose a name and password

### 2. Get Your API Credentials

1. Go to your project dashboard
2. Click on Project Settings in the sidebar
3. Click on API in the sidebar submenu
4. You'll find two important pieces of information:
   - Project URL (looks like `https://yourprojectid.supabase.co`)
   - Project API Keys (copy the `anon` `public` key)

### 3. Set Up Environment Variables

Create a `.env.local` file in the project root with:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Create Database Tables

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Create a new query
4. Paste the contents of `supabase/migrations/20250217103331_contact_and_newsletter.sql`
5. Click "Run" to execute the SQL

### 5. Test Your Connection

Once you've started the development server:

1. Open your browser's developer console (F12 or right-click > Inspect)
2. Type `window.testSupabase()` and press Enter
3. Check the console for the connection test results

If you see "Supabase connection successful!", you're all set up!

## Deployment

See [docs/deployment.md](docs/deployment.md) for deployment instructions on various platforms.