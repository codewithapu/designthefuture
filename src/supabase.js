import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hxukaybfnuplzwtnqfow.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4dWtheWJmbnVwbHp3dG5xZm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0NDQzNDgsImV4cCI6MjAxNTAyMDM0OH0.dsCCC-cKtZeWAGXbVy5zr1HrFEk740EM92QJMnBWCiI';

export const supabase = createClient(supabaseUrl, supabaseKey);
export const auth = supabase.auth;