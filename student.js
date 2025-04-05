import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://your-project-id.supabase.co',
  'your-anon-key'
);

const form = document.getElementById('signup-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  console.log('Auth response:', data, error);

  if (error) {
    alert('Signup failed: ' + error.message);
  } else {
    alert('Signup success! Check your email for confirmation (if enabled).');
  }
});
