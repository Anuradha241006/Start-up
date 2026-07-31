import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export type Profile = {
  id: string;
  user_id: string;
  full_name: string | null;
  email: string | null;
  university: string | null;
  year: string | null;
  branch: string | null;
  avatar_url: string | null;
  placement_readiness: number;
  phone: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
};

export type Course = {
  id: string;
  title: string;
  category: string | null;
  difficulty: string | null;
  duration: string | null;
  skills: string[] | null;
  description: string | null;
  created_at: string;
};

export type Enrollment = {
  id: string;
  user_id: string;
  course_id: string | null;
  course_title: string | null;
  progress: number;
  status: string;
  created_at: string;
  updated_at: string;
};

export type Project = {
  id: string;
  title: string;
  difficulty: string | null;
  skills: string[] | null;
  description: string | null;
  created_at: string;
};

export type Payment = {
  id: string;
  user_id: string;
  amount: number;
  plan: string;
  status: string;
  provider: string | null;
  created_at: string;
};

export type Notification = {
  id: string;
  user_id: string;
  type: string | null;
  title: string | null;
  message: string | null;
  is_read: boolean;
  created_at: string;
};
