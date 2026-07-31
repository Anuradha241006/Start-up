import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  to?: string;
  className?: string;
};

export function FeatureCard({ icon: Icon, title, description, to, className = '' }: FeatureCardProps) {
  const inner = (
    <>
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-500">{description}</p>
      {to && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 opacity-0 transition-all group-hover:opacity-100 group-hover:gap-2.5">
          Learn more <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </>
  );

  const baseClass = `group relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 p-6 backdrop-blur-xl shadow-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg hover:border-primary-200 ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {inner}
      </Link>
    );
  }
  return <div className={baseClass}>{inner}</div>;
}
