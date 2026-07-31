import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell, Lock, User, Palette, Globe, LogOut, CheckCircle2,
  Mail, Smartphone, Moon, Sun, Shield, AlertCircle,
} from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/context/AuthContext';

const tabs = [
  { id: 'account', label: 'Account', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'preferences', label: 'Preferences', icon: Palette },
] as const;

type TabId = typeof tabs[number]['id'];

export function SettingsPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState<TabId>('account');
  const [saved, setSaved] = useState(false);
  const [notifSettings, setNotifSettings] = useState({
    emailUpdates: true, mockInterviews: true, courseReminders: true, weeklyReport: false, jobAlerts: true,
  });
  const [prefs, setPrefs] = useState({ theme: 'light', language: 'English', timezone: 'IST (UTC+5:30)' });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold tracking-tight text-ink-900">Settings</h1>
        <p className="mt-1 text-sm text-ink-500">Manage your account, notifications, and preferences.</p>
      </div>

      {saved && (
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-success-50 px-4 py-3 text-sm font-medium text-success-700">
          <CheckCircle2 className="h-4 w-4" /> Settings saved successfully.
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Tabs sidebar */}
        <div className="lg:col-span-1">
          <nav className="flex gap-1 overflow-x-auto lg:flex-col">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex flex-shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  active === tab.id ? 'bg-primary-50 text-primary-700' : 'text-ink-600 hover:bg-ink-50'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {active === 'account' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
                <h2 className="mb-1 text-base font-semibold text-ink-900">Account Information</h2>
                <p className="mb-5 text-xs text-ink-500">Update your account details.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink-600">Full name</label>
                    <input className="input-field" defaultValue={user?.user_metadata?.full_name ?? ''} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink-600">Email</label>
                    <input className="input-field opacity-60" defaultValue={user?.email ?? ''} disabled />
                  </div>
                </div>
                <button onClick={handleSave} className="btn-primary mt-5">Save changes</button>
              </div>

              <div className="rounded-2xl border border-error-200 bg-error-50/40 p-6">
                <h2 className="mb-1 flex items-center gap-2 text-base font-semibold text-error-700">
                  <AlertCircle className="h-4 w-4" /> Danger Zone
                </h2>
                <p className="mb-4 text-xs text-ink-500">Sign out of your account on this device.</p>
                <button onClick={handleSignOut} className="inline-flex items-center gap-2 rounded-xl border border-error-300 bg-white px-4 py-2.5 text-sm font-semibold text-error-600 transition-colors hover:bg-error-50">
                  <LogOut className="h-4 w-4" /> Sign out
                </button>
              </div>
            </div>
          )}

          {active === 'notifications' && (
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h2 className="mb-1 text-base font-semibold text-ink-900">Notification Preferences</h2>
              <p className="mb-5 text-xs text-ink-500">Choose what updates you want to receive.</p>
              <div className="space-y-1">
                {[
                  { key: 'emailUpdates', label: 'Email updates', desc: 'Product news and announcements', icon: Mail },
                  { key: 'mockInterviews', label: 'Mock interview reminders', desc: 'Reminders for scheduled interviews', icon: Bell },
                  { key: 'courseReminders', label: 'Course reminders', desc: 'Stay on track with your roadmap', icon: Bell },
                  { key: 'weeklyReport', label: 'Weekly progress report', desc: 'Summary of your weekly activity', icon: Bell },
                  { key: 'jobAlerts', label: 'Job & internship alerts', desc: 'New opportunities matching your profile', icon: Bell },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between border-b border-ink-100 py-3.5 last:border-0">
                    <div className="flex items-start gap-3">
                      <item.icon className="mt-0.5 h-4 w-4 text-ink-400" />
                      <div>
                        <p className="text-sm font-medium text-ink-900">{item.label}</p>
                        <p className="text-xs text-ink-500">{item.desc}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setNotifSettings({ ...notifSettings, [item.key]: !notifSettings[item.key as keyof typeof notifSettings] })}
                      className={`relative h-6 w-11 rounded-full transition-colors ${notifSettings[item.key as keyof typeof notifSettings] ? 'bg-primary-500' : 'bg-ink-200'}`}
                      aria-label={item.label}
                    >
                      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${notifSettings[item.key as keyof typeof notifSettings] ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    </button>
                  </div>
                ))}
              </div>
              <button onClick={handleSave} className="btn-primary mt-5">Save preferences</button>
            </div>
          )}

          {active === 'security' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
                <h2 className="mb-1 text-base font-semibold text-ink-900">Change Password</h2>
                <p className="mb-5 text-xs text-ink-500">Update your password to keep your account secure.</p>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink-600">Current password</label>
                    <input type="password" className="input-field" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink-600">New password</label>
                    <input type="password" className="input-field" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink-600">Confirm new password</label>
                    <input type="password" className="input-field" placeholder="••••••••" />
                  </div>
                </div>
                <button onClick={handleSave} className="btn-primary mt-5">Update password</button>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-50 text-success-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900">Two-factor authentication</h3>
                    <p className="mt-1 text-xs text-ink-500">Add an extra layer of security to your account.</p>
                    <button className="btn-ghost mt-3 text-xs">Enable 2FA</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === 'preferences' && (
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h2 className="mb-1 text-base font-semibold text-ink-900">Preferences</h2>
              <p className="mb-5 text-xs text-ink-500">Customize your experience.</p>
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-medium text-ink-600">Theme</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { key: 'light', label: 'Light', icon: Sun },
                      { key: 'dark', label: 'Dark', icon: Moon },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => setPrefs({ ...prefs, theme: opt.key })}
                        className={`flex items-center gap-2.5 rounded-xl border p-3.5 text-sm font-medium transition-all ${
                          prefs.theme === opt.key ? 'border-primary-400 bg-primary-50 text-primary-700' : 'border-ink-200 text-ink-600 hover:border-ink-300'
                        }`}
                      >
                        <opt.icon className="h-4 w-4" />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-600">Language</label>
                  <select value={prefs.language} onChange={(e) => setPrefs({ ...prefs, language: e.target.value })} className="input-field">
                    <option>English</option><option>Hindi</option><option>Tamil</option><option>Telugu</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-600">Timezone</label>
                  <select value={prefs.timezone} onChange={(e) => setPrefs({ ...prefs, timezone: e.target.value })} className="input-field">
                    <option>IST (UTC+5:30)</option><option>EST (UTC-5)</option><option>PST (UTC-8)</option><option>GMT (UTC+0)</option>
                  </select>
                </div>
              </div>
              <button onClick={handleSave} className="btn-primary mt-5">Save preferences</button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
