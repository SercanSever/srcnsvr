import { supabase } from "../client/supabaseClient";

export const getReadMeContent = async () => {
  var { data, error } = await supabase.from("readme").select();
  if (error) {
    throw new Error(`Error fetching README content: ${error.message}`);
  }
  return data;
};

export const getSocials = async () => {
  var { data, error } = await supabase.from("social").select();
  if (error) {
    throw new Error(`Error fetching socials: ${error.message}`);
  }
  return data;
};
