import { supabase } from './supabaseClient.js';
// Insert faculty details after signup
export async function insertFaculty(userId, name, email, department, subject) {
  const { data, error } = await supabase
    .from('faculty')
    .insert([
      {
        id: userId,
        name,
        email,
        department,
        subject,
      },
    ]);
  return { data, error };
}

// Get faculty details
export async function getFacultyById(userId) {
  const { data, error } = await supabase
    .from('faculty')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
}

