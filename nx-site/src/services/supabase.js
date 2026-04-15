import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pddenacykzvzlilnajoy.supabase.co";
const supabaseKey = "sb_publishable_oeIaDrCZikEI_BGriySGGA_CdmCCE1K";

export const supabase = createClient(supabaseUrl, supabaseKey);