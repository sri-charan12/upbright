import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://krrwsdvzkneeieejgfst.supabase.co'; // replace with your project URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtycndzZHZ6a25lZWllZWpnZnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3OTk3MTksImV4cCI6MjA1OTM3NTcxOX0.3szMTsjT1F_nNyBw8d6bMbJEXS91991LBCzJwlVSDfM'; // replace with your anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
