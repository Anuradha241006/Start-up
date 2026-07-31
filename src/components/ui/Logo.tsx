import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export function Logo({ to = '/', className = '' }: { to?: string; className?: string }) {
  return (
    <Link to={to} className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 shadow-lg shadow-primary-500/30">
        <Brain className="h-5 w-5 text-white" />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent-400 ring-2 ring-white" />
      </div>
      <span className="font-display text-lg font-bold tracking-tight text-ink-900">
        Elevate<span className="gradient-text">IQ</span>
      </span>
    </Link>
  );
}
