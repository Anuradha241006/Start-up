import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle2 } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="relative min-h-screen lg:grid lg:grid-cols-2">
      {/* Left brand panel */}
      <div className="relative hidden overflow-hidden bg-ink-950 lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-white">
              Elevate<span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">IQ</span>
            </span>
          </div>
        </div>

        <div className="relative">
          <h2 className="font-display text-3xl font-bold leading-tight text-white text-balance">
            From Learning to Landing Your Dream Career.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-400">
            Join 50,000+ engineering students using AI-powered guidance to become industry-ready.
          </p>
          <ul className="mt-8 space-y-3">
            {['AI mock interviews with instant feedback', 'Personalized learning roadmaps', 'Resume builder with ATS scoring', 'Placement readiness tracking'].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-ink-300">
                <CheckCircle2 className="h-4 w-4 text-success-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative text-xs text-ink-500">© {new Date().getFullYear()} ElevateIQ. All rights reserved.</div>
      </div>

      {/* Right form panel */}
      <div className="flex min-h-screen flex-col items-center justify-center bg-ink-50 px-4 py-12 sm:px-6 gradient-bg">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-glass backdrop-blur-xl sm:p-10">
            <h1 className="font-display text-2xl font-bold tracking-tight text-ink-900">{title}</h1>
            <p className="mt-2 text-sm text-ink-500">{subtitle}</p>
            <div className="mt-8">{children}</div>
          </div>
          {footer && <div className="mt-6 text-center text-sm text-ink-500">{footer}</div>}
          <div className="mt-6 text-center">
            <Link to="/" className="text-xs text-ink-400 hover:text-ink-600">← Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
