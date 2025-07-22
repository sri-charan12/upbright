import { supabase } from './supabaseClient.js';

export async function insertAdmin(userId, name, email, role) {
  const { data, error } = await supabase
    .from('admin')
    .insert([
      {
        id: userId,
        name,
        email,
        role,
      },
    ]);
  return { data, error };
}

// Get admin details
export async function getAdminById(userId) {
  const { data, error } = await supabase
    .from('admin')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
}
