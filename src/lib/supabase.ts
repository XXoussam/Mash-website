import { createClient } from '@supabase/supabase-js';

// Use the correct environment variables from .env
const supabaseUrl = 'https://kjrfmkkiutuvnwndpbcd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqcmZta2tpdXR1dm53bmRwYmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NzQ3NjMsImV4cCI6MjA1ODM1MDc2M30.rZg2GUEk7tHH7U2NGtnBRFJF9frvsT7iJIsILv-NN-Y';

// Export a helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};

// Create the Supabase client with the hardcoded values to ensure it works
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Log to verify Supabase configuration during initialization
console.log('Supabase initialized with URL:', supabaseUrl ? 'Configured ✅' : 'Missing ❌');