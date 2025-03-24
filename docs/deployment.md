# Deployment Guide

## Environment Variables for Production

When deploying to production, you need to set your Supabase environment variables on your hosting platform.

### Vercel

1. Go to your project in the Vercel dashboard
2. Click on "Settings" > "Environment Variables"
3. Add the following variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key
4. Click "Save"
5. Redeploy your application

### Netlify

1. Go to your site in the Netlify dashboard
2. Click on "Site settings" > "Build & deploy" > "Environment"
3. Add the following variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key
4. Click "Save"
5. Trigger a new deploy

### GitHub Pages (with GitHub Actions)

Add the environment variables to your GitHub repository:

1. Go to your repository on GitHub
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Add the following repository secrets:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

Then, update your GitHub Actions workflow file to use these secrets:

```yaml
jobs:
  build-and-deploy:
    steps:
      # ... other steps
      - name: Build
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
```

## Supabase Database Setup

Before deployment, ensure that you've set up your Supabase database tables:

1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Paste and run the SQL migration script from `supabase/migrations/20250217103331_contact_and_newsletter.sql`

This will create the necessary tables and security policies for your contact form and newsletter functionality. 