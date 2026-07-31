import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User, Mail, Phone, GraduationCap, Building2, MapPin, Award,
  BookOpen, FileText, MessageSquare, Target, Edit3, CheckCircle2,
} from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import { supabase, type Profile as ProfileType } from '@/lib/supabase';

const badges = [
  { name: 'DSA Foundations', icon: Award, color: 'from-primary-500 to-accent-500' },
  { name: 'First Mock Interview', icon: MessageSquare, color: 'from-success-500 to-primary-500' },
  { name: 'Resume Pro', icon: FileText, color: 'from-warning-500 to-warning-600' },
  { name: '7-Day Streak', icon: Target, color: 'from-accent-500 to-primary-600' },
];

const skillBars = [
  { name: 'Data Structures', level: 85 },
  { name: 'React', level: 90 },
  { name: 'System Design', level: 65 },
  { name: 'Machine Learning', level: 58 },
  { name: 'Communication', level: 72 },
];

export function ProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ full_name: '', email: '', university: '', year: '', branch: '', phone: '', bio: '' });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function load() {
      if (!user) return;
      const { data } = await supabase.from('profiles').select('*').eq('user_id', user.id).maybeSingle();
      if (data) {
        setProfile(data);
        setForm({
          full_name: data.full_name ?? '',
          email: data.email ?? user.email ?? '',
          university: data.university ?? '',
          year: data.year ?? '',
          branch: data.branch ?? '',
          phone: data.phone ?? '',
          bio: data.bio ?? '',
        });
      } else {
        setForm({ full_name: user.user_metadata?.full_name ?? '', email: user.email ?? '', university: '', year: '', branch: '', phone: '', bio: '' });
      }
    }
    load();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    setSaved(false);
    if (profile) {
      const { data } = await supabase.from('profiles').update({
        full_name: form.full_name, university: form.university, year: form.year,
        branch: form.branch, phone: form.phone, bio: form.bio,
      }).eq('user_id', user.id).select('*').maybeSingle();
      if (data) setProfile(data);
    } else {
      const { data } = await supabase.from('profiles').insert({
        user_id: user.id, email: form.email, full_name: form.full_name,
        university: form.university, year: form.year, branch: form.branch,
        phone: form.phone, bio: form.bio,
      }).select('*').maybeSingle();
      if (data) setProfile(data);
    }
    setSaving(false);
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <DashboardLayout>
      {/* Header card */}
      <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-950 to-ink-900 p-6 text-white shadow-glass sm:p-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-2xl font-bold shadow-glow">
              {(form.full_name || user?.email || 'U').charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold">{form.full_name || 'Student'}</h1>
              <p className="text-sm text-ink-400">{form.email || user?.email}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {form.branch && <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs">{form.branch}</span>}
                {form.year && <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs">{form.year}</span>}
                {form.university && <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs">{form.university}</span>}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/5 px-5 py-3 ring-1 ring-white/10">
              <p className="font-display text-2xl font-bold">{profile?.placement_readiness ?? 72}%</p>
              <p className="text-xs text-ink-400">Placement Readiness</p>
            </div>
            <button onClick={() => setEditing(!editing)} className="btn-glass">
              <Edit3 className="h-4 w-4" /> {editing ? 'Cancel' : 'Edit'}
            </button>
          </div>
        </div>
      </div>

      {saved && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-success-50 px-4 py-3 text-sm font-medium text-success-700">
          <CheckCircle2 className="h-4 w-4" /> Profile updated successfully.
        </div>
      )}

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {/* Details */}
        <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="mb-5 text-base font-semibold text-ink-900">Personal Information</h2>
          {editing ? (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-600">Full name</label>
                  <input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className="input-field" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-600">Email</label>
                  <input value={form.email} disabled className="input-field opacity-60" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-600">University</label>
                  <input value={form.university} onChange={(e) => setForm({ ...form, university: e.target.value })} className="input-field" placeholder="e.g. IIT Delhi" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-600">Year</label>
                  <select value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="input-field">
                    <option value="">Select year</option>
                    <option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option><option>Graduate</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-600">Branch</label>
                  <input value={form.branch} onChange={(e) => setForm({ ...form, branch: e.target.value })} className="input-field" placeholder="e.g. Computer Science" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-600">Phone</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-field" placeholder="+91..." />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink-600">Bio</label>
                <textarea rows={3} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} className="input-field resize-none" placeholder="Tell us about your career goals..." />
              </div>
              <button onClick={handleSave} disabled={saving} className="btn-primary">
                {saving ? 'Saving...' : 'Save changes'}
              </button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: User, label: 'Full name', value: form.full_name || 'Not set' },
                { icon: Mail, label: 'Email', value: form.email || 'Not set' },
                { icon: Building2, label: 'University', value: form.university || 'Not set' },
                { icon: GraduationCap, label: 'Year', value: form.year || 'Not set' },
                { icon: BookOpen, label: 'Branch', value: form.branch || 'Not set' },
                { icon: Phone, label: 'Phone', value: form.phone || 'Not set' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/40 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary-600 shadow-sm">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-ink-400">{item.label}</p>
                    <p className="text-sm font-semibold text-ink-900">{item.value}</p>
                  </div>
                </div>
              ))}
              {form.bio && (
                <div className="sm:col-span-2 rounded-xl border border-ink-100 bg-ink-50/40 p-4">
                  <p className="text-xs font-medium text-ink-400">Bio</p>
                  <p className="mt-1 text-sm text-ink-700">{form.bio}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Skills + Badges */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-ink-900">Top Skills</h2>
            <div className="space-y-3">
              {skillBars.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-ink-700">{skill.name}</span>
                    <span className="font-semibold text-ink-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-ink-100">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-ink-900">Achievements</h2>
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge) => (
                <div key={badge.name} className="flex flex-col items-center gap-2 rounded-xl border border-ink-100 p-3 text-center">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${badge.color} text-white`}>
                    <badge.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-medium text-ink-700">{badge.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link to="/settings" className="btn-ghost">Manage account settings</Link>
      </div>
    </DashboardLayout>
  );
}
