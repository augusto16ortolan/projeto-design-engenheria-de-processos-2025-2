import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mzcfzlhppvpuqavtsetv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Y2Z6bGhwcHZwdXFhdnRzZXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NzQ2MzUsImV4cCI6MjA3NzM1MDYzNX0.Zzi8EYenRl1AqqxJSEVB630x6OfOcEGYv9ER-WaCF8s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
