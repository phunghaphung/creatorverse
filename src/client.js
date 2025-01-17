import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const api_key = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(url, api_key);
