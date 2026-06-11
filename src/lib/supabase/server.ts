import { createClient } from '@supabase/supabase-js';

export function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Return a dummy client or null if we want graceful fallback without env variables
    // This allows the layout to render even if env vars are missing
    return null;
  }

  return createClient(supabaseUrl, supabaseKey);
}
