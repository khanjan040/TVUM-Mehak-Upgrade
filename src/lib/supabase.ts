import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ckrrwrwnxuctomzvsbtq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrcnJ3cndueHVjdG9tenZzYnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyODY3MjgsImV4cCI6MjA4ODg2MjcyOH0.tToDOSWV5c7ZXxXujzMcJlavg0l1H7KbKsS5huYXDvA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
