import { createClient } from '@supabase/supabase-js';

export function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (
    !supabaseUrl || 
    !supabaseKey || 
    supabaseUrl.includes('your-project') || 
    supabaseKey.includes('your-anon-key')
  ) {
    return null;
  }

  return createClient(supabaseUrl, supabaseKey);
}
