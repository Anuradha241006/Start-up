import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, User, Settings, Bell, LogOut, Menu, X,
  BookOpen, FileText, MessageSquare, Code2, Briefcase, Search,
} from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { useAuth } from '@/context/AuthContext';

const sidebarLinks = [
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Courses', to: '/dashboard', icon: BookOpen },
  { label: 'Resume', to: '/dashboard', icon: FileText },
  { label: 'Mock Interviews', to: '/dashboard', icon: MessageSquare },
  { label: 'Coding Practice', to: '/dashboard', icon: Code2 },
  { label: 'Opportunities', to: '/dashboard', icon: Briefcase },
  { label: 'Profile', to: '/profile', icon: User },
  { label: 'Settings', to: '/settings', icon: Settings },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-ink-50">
      {/* Sidebar — desktop */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-ink-100 bg-white lg:flex">
        <div className="flex h-16 items-center px-6">
          <Logo />
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4 scrollbar-thin">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(link.to) && link.to === location.pathname
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
              }`}
            >
              <link.icon className="h-4.5 w-4.5" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-ink-100 p-3">
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-error-600 transition-colors hover:bg-error-50"
          >
            <LogOut className="h-4.5 w-4.5" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Sidebar — mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col border-r border-ink-100 bg-white">
            <div className="flex h-16 items-center justify-between px-6">
              <Logo />
              <button onClick={() => setSidebarOpen(false)} className="text-ink-500">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${
                    isActive(link.to) ? 'bg-primary-50 text-primary-700' : 'text-ink-600 hover:bg-ink-50'
                  }`}
                >
                  <link.icon className="h-4.5 w-4.5" />
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleSignOut}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-error-600 hover:bg-error-50"
              >
                <LogOut className="h-4.5 w-4.5" />
                Sign out
              </button>
            </nav>
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="lg:pl-64">
        {/* Top nav */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-ink-100 bg-white/80 px-4 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-600 hover:bg-ink-50 lg:hidden"
              aria-label="open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-64 rounded-xl border border-ink-200 bg-ink-50 py-2 pl-9 pr-3 text-sm text-ink-900 placeholder-ink-400 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen((v) => !v)}
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-600 hover:bg-ink-50"
                aria-label="notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-error-500 ring-2 ring-white" />
              </button>
              {notifOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setNotifOpen(false)} />
                  <div className="absolute right-0 top-12 z-20 w-80 rounded-2xl border border-ink-100 bg-white shadow-glass-lg">
                    <div className="border-b border-ink-100 px-4 py-3">
                      <p className="text-sm font-semibold text-ink-900">Notifications</p>
                    </div>
                    <div className="max-h-80 overflow-y-auto py-2 scrollbar-thin">
                      {[
                        { title: 'Mock interview completed', time: '2 hours ago', color: 'bg-success-500' },
                        { title: 'New course recommended', time: '5 hours ago', color: 'bg-primary-500' },
                        { title: 'Resume ATS score updated', time: '1 day ago', color: 'bg-warning-500' },
                      ].map((n, i) => (
                        <div key={i} className="flex items-start gap-3 px-4 py-3 hover:bg-ink-50">
                          <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${n.color}`} />
                          <div>
                            <p className="text-sm font-medium text-ink-900">{n.title}</p>
                            <p className="text-xs text-ink-400">{n.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-ink-100 px-4 py-2.5 text-center">
                      <Link to="/dashboard" className="text-xs font-semibold text-primary-600 hover:text-primary-700">
                        View all
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* User menu */}
            <Link
              to="/profile"
              className="flex items-center gap-2.5 rounded-xl py-1 pl-1 pr-3 transition-colors hover:bg-ink-50"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-semibold text-white">
                {(user?.email ?? 'U').charAt(0).toUpperCase()}
              </div>
              <span className="hidden text-sm font-medium text-ink-700 sm:block">
                {user?.user_metadata?.full_name ?? user?.email ?? 'User'}
              </span>
            </Link>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
