import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Only create a real client if URL is a valid http(s) URL
const isValidUrl = supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://');

// Fallback: a dummy client that returns empty results gracefully
const dummyClient = {
  from: () => ({
    select: () => ({ order: () => ({ data: null, error: null }), data: null, error: null }),
    insert: () => ({ data: null, error: { message: 'Supabase not configured. Add your project URL and anon key to .env.local' } }),
  }),
  supabaseUrl: '',
} as unknown as SupabaseClient;

export const supabase: SupabaseClient = isValidUrl
  ? createClient(supabaseUrl, supabaseKey)
  : dummyClient;
