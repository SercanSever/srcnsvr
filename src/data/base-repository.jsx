import { supabase } from "./client/supabaseClient";

export const get = async (table, orderName, orderType, orderValue) => {
  if (!orderName) {
    const { data, error } = await supabase.from(table).select();
    if (error) {
      throw new Error(`Error fetching ${table} content: ${error.message}`);
    }
    return data;
  }

  const { data, error } = await supabase
    .from(table)
    .select()
    .order(orderName, { orderType: orderValue });
  if (error) {
    throw new Error(`Error fetching ${table} content: ${error.message}`);
  }
  return data;
};

export const getColumn = async (table, column) => {
  const { data, error } = await supabase.from(table).select(column);
  if (error) {
    throw new Error(`Error fetching ${table} content: ${error.message}`);
  }
  return data;
};
