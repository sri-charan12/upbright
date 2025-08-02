import { supabase } from './supabaseClient.js';

// Sign up a user
export async function signUpUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}
// Sign in a user
export async function signInUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// Get current user session
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

