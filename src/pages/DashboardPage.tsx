import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis, RadialBar, RadialBarChart, PolarAngleAxis,
} from 'recharts';
import {
  TrendingUp, BookOpen, MessageSquare, FileText, Award, Target,
  ArrowRight, Clock, CheckCircle2, Flame, Zap, Briefcase,
} from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { supabase, type Enrollment, type Notification } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';

const skillData = [
  { name: 'Mon', value: 32 }, { name: 'Tue', value: 45 }, { name: 'Wed', value: 38 },
  { name: 'Thu', value: 62 }, { name: 'Fri', value: 55 }, { name: 'Sat', value: 78 },
  { name: 'Sun', value: 88 },
];

const subjectData = [
  { subject: 'DSA', score: 82 }, { subject: 'System Design', score: 65 },
  { subject: 'Web Dev', score: 90 }, { subject: 'ML', score: 58 },
  { subject: 'Aptitude', score: 73 },
];

const recommendations = [
  { icon: Briefcase, title: 'Frontend Developer Intern', company: 'TechCorp', tag: 'New', color: 'from-primary-500 to-accent-500' },
  { icon: BookOpen, title: 'System Design Essentials', tag: 'Course', color: 'from-success-500 to-primary-500' },
  { icon: FileText, title: 'Resume ATS check due', tag: 'Action', color: 'from-warning-500 to-warning-600' },
];

export function DashboardPage() {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [readiness, setReadiness] = useState(72);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!user) return;
      const [enrollRes, notifRes, profileRes] = await Promise.all([
        supabase.from('enrollments').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(5),
        supabase.from('notifications').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(5),
        supabase.from('profiles').select('placement_readiness').eq('user_id', user.id).maybeSingle(),
      ]);
      setEnrollments(enrollRes.data ?? []);
      setNotifications(notifRes.data ?? []);
      if (profileRes.data?.placement_readiness != null) setReadiness(profileRes.data.placement_readiness);
      setLoading(false);
    }
    load();
  }, [user]);

  const stats = [
    { label: 'Placement Readiness', value: `${readiness}%`, icon: TrendingUp, color: 'from-primary-500 to-accent-500', trend: '+8% this month' },
    { label: 'Skills Mastered', value: '24', icon: Award, color: 'from-success-500 to-primary-500', trend: '+3 this week' },
    { label: 'Mock Interviews', value: '37', icon: MessageSquare, color: 'from-accent-500 to-primary-600', trend: '+5 this week' },
    { label: 'Coding Streak', value: '12 days', icon: Flame, color: 'from-warning-500 to-error-500', trend: 'Personal best' },
  ];

  const recentActivity = [
    { icon: CheckCircle2, title: 'Completed "Graphs & Trees" module', time: '2 hours ago', color: 'text-success-500' },
    { icon: MessageSquare, title: 'Finished behavioral mock interview', time: '5 hours ago', color: 'text-primary-500' },
    { icon: FileText, title: 'Resume ATS score improved to 88%', time: '1 day ago', color: 'text-accent-500' },
    { icon: BookOpen, title: 'Enrolled in System Design Essentials', time: '2 days ago', color: 'text-warning-500' },
    { icon: Award, title: 'Earned "DSA Foundations" badge', time: '3 days ago', color: 'text-primary-500' },
  ];

  return (
    <DashboardLayout>
      {/* Welcome */}
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold tracking-tight text-ink-900">
          Welcome back, {user?.user_metadata?.full_name ?? 'Student'} 👋
        </h1>
        <p className="mt-1 text-sm text-ink-500">Here is your career progress at a glance.</p>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="group rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-glass"
            style={{ animation: `fade-up 0.5s ease both`, animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-success-600">{stat.trend}</span>
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-ink-900">{stat.value}</p>
            <p className="mt-1 text-sm text-ink-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {/* Skill progress chart */}
        <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-ink-900">Weekly Skill Progress</h2>
              <p className="text-xs text-ink-500">Practice hours and assessment scores</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-success-50 px-2.5 py-1 text-xs font-semibold text-success-700">
              <TrendingUp className="h-3.5 w-3.5" /> +24%
            </span>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={skillData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="skillGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3377ff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3377ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#eef1f7" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#7a86a8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#7a86a8' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: '1px solid #eef1f7', boxShadow: '0 8px 32px rgba(22,27,48,0.12)' }}
                labelStyle={{ fontWeight: 600, color: '#2d3450' }}
              />
              <Area type="monotone" dataKey="value" stroke="#3377ff" strokeWidth={2.5} fill="url(#skillGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Readiness radial */}
        <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-ink-900">Placement Readiness</h2>
          <p className="text-xs text-ink-500">Overall career readiness score</p>
          <div className="relative mt-2">
            <ResponsiveContainer width="100%" height={200}>
              <RadialBarChart innerRadius="70%" outerRadius="100%" data={[{ name: 'readiness', value: readiness, fill: '#3377ff' }]} startAngle={90} endAngle={-270}>
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar background={{ fill: '#eef1f7' }} dataKey="value" cornerRadius={20} fill="#3377ff" />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-3xl font-bold text-ink-900">{readiness}%</span>
              <span className="text-xs text-ink-500">Ready</span>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-ink-500">Technical</span>
              <span className="font-semibold text-ink-900">82%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-ink-500">Communication</span>
              <span className="font-semibold text-ink-900">68%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-ink-500">Projects</span>
              <span className="font-semibold text-ink-900">75%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subject scores + Recent activity */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="mb-1 text-base font-semibold text-ink-900">Subject Mastery</h2>
          <p className="mb-4 text-xs text-ink-500">Your scores across key placement subjects</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={subjectData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eef1f7" vertical={false} />
              <XAxis dataKey="subject" tick={{ fontSize: 11, fill: '#7a86a8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#7a86a8' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: '1px solid #eef1f7', boxShadow: '0 8px 32px rgba(22,27,48,0.12)' }}
                cursor={{ fill: 'rgba(51,119,255,0.05)' }}
              />
              <Bar dataKey="score" fill="#3377ff" radius={[6, 6, 0, 0]} barSize={36} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-ink-900">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-ink-50 ${activity.color}`}>
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink-900">{activity.title}</p>
                  <p className="text-xs text-ink-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enrollments + Recommendations */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-ink-900">My Courses</h2>
            <Link to="/dashboard" className="text-xs font-semibold text-primary-600 hover:text-primary-700">
              View all
            </Link>
          </div>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 animate-pulse rounded-xl bg-ink-50" />
              ))}
            </div>
          ) : enrollments.length === 0 ? (
            <div className="rounded-xl border border-dashed border-ink-200 bg-ink-50/50 p-8 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-ink-300" />
              <p className="mt-3 text-sm text-ink-500">No enrollments yet.</p>
              <p className="text-xs text-ink-400">Explore courses to start your learning journey.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {enrollments.map((enrollment) => (
                <div key={enrollment.id} className="flex items-center gap-4 rounded-xl border border-ink-100 bg-ink-50/40 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink-900">{enrollment.course_title ?? 'Course'}</p>
                    <div className="mt-1.5 flex items-center gap-2">
                      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-ink-200">
                        <div className="h-full rounded-full bg-primary-500" style={{ width: `${enrollment.progress}%` }} />
                      </div>
                      <span className="text-xs font-medium text-ink-500">{enrollment.progress}%</span>
                    </div>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    enrollment.status === 'completed' ? 'bg-success-50 text-success-700' : 'bg-primary-50 text-primary-700'
                  }`}>
                    {enrollment.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary-500" />
            <h2 className="text-base font-semibold text-ink-900">Recommended for you</h2>
          </div>
          <div className="space-y-3">
            {recommendations.map((rec, i) => (
              <div key={i} className="group flex items-center gap-3 rounded-xl border border-ink-100 p-3 transition-all hover:border-primary-200 hover:bg-primary-50/30">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${rec.color} text-white`}>
                  <rec.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink-900">{rec.title}</p>
                  {'company' in rec && rec.company && (
                    <p className="text-xs text-ink-400">{rec.company}</p>
                  )}
                </div>
                <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold text-ink-600">{rec.tag}</span>
              </div>
            ))}
          </div>
          <Link to="/features" className="mt-4 flex items-center justify-center gap-1.5 rounded-xl border border-ink-200 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-primary-300 hover:text-primary-700">
            Explore all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-ink-900">Recent Notifications</h2>
          <div className="space-y-2">
            {notifications.map((n) => (
              <div key={n.id} className="flex items-center gap-3 rounded-xl border border-ink-100 px-4 py-3">
                <div className={`h-2 w-2 rounded-full ${n.is_read ? 'bg-ink-300' : 'bg-primary-500'}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink-900">{n.title}</p>
                  {n.message && <p className="text-xs text-ink-500">{n.message}</p>}
                </div>
                <span className="text-xs text-ink-400">
                  <Clock className="mr-1 inline h-3 w-3" />
                  {new Date(n.created_at).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
