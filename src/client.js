import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

const url = import.meta.env.URL;
const api_key = import.meta.env.API_KEY;

export const supabase = createClient(url, api_key);
