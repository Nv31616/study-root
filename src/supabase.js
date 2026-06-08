import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ijpcsvmrrfhvkezgzopf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqcGNzdm1ycmZodmtlemd6b3BmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDIxNDA5NiwiZXhwIjoyMDk1NzkwMDk2fQ.85uVpERpG9DgHuw45xWEOG3cIykQclhie-D7cNYYfBA'; // Replace with your actual anon key
export const supabase = createClient(supabaseUrl, supabaseKey);