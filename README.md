# 🔧 Supabase Backend Documentation

## Supabase Project
- URL: https://your-project-id.supabase.co
- Auth: Email + Password
- DB: PostgreSQL (hosted by Supabase)
- Client: @supabase/supabase-js

## Auth
- `signUpUser(email, password)` - Registers user in auth
- `signInUser(email, password)` - Logs in user
- `getCurrentUser()` - Gets the current logged-in user

## Tables
### students
- id (UUID)
- name (Text)
- email (Text)
- department (Text)
- branch (Text)

### faculty
- id (UUID)
- name, email, department, subject

### admin
- id (UUID)
- name, email, role

## Row Level Security (RLS)
✅ Enabled  
Create policies for:
- Insert (if `auth.uid() = id`)
- Select (own record only)

## Usage
Each user signs up → gets added to `auth.users`  
Then we insert details into their table (`students`, `faculty`, etc.)

## Folder Structure

```bash
/server
├── supabaseClient.js
├── auth.js
├── students.js
├── faculty.js
├── admin.js
├── config.js
└── README.md
so we have solved real time several issues and still working on this project and the main is to deploy in the cloud by using the AWS services
