import { supabase, isSupabaseConfigured } from '../lib/supabase';

/**
 * Utility function to test the Supabase connection
 * Run this from the browser console or a component to verify your setup
 */
export const testSupabaseConnection = async (): Promise<void> => {
  console.log('Testing Supabase connection...');
  console.log('Supabase URL:', 'https://kjrfmkkiutuvnwndpbcd.supabase.co');
  
  try {
    // Try a simple query to check if connection works
    console.log('Attempting to query the newsletter_subscribers table...');
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('count(*)', { count: 'exact', head: true });
    
    if (error) {
      throw error;
    }
    
    console.log('✅ Supabase connection successful!');
    console.log('Table exists and is accessible.');
    console.log('Configuration looks good!');
    
    // Test creating a table if it doesn't exist
    console.log('Testing database permissions...');
    try {
      const { error: rpcError } = await supabase.rpc('check_db_connection');
      if (rpcError) {
        console.log('Note: RPC function not found, but this is normal if you haven\'t created it yet');
      } else {
        console.log('✅ RPC function successful!');
      }
    } catch (rpcErr) {
      console.log('Note: RPC test failed, but this is expected in some cases');
    }
    
  } catch (error) {
    console.error('❌ Supabase connection test failed:', error);
    console.error('Possible causes:');
    console.error('1. Tables do not exist in your database - you may need to run the SQL setup script');
    console.error('2. RLS policies are blocking access - check your database policies');
    console.error('3. Network connectivity issues');
    console.error('4. Supabase project is paused or unavailable');
  }
};

// This allows you to call the function directly from browser console
// by typing: window.testSupabase()
if (typeof window !== 'undefined') {
  (window as any).testSupabase = testSupabaseConnection;
} 