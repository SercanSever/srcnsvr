import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://your-project-url.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-public-key";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
