import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto text-center' : 'text-left'} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-500 text-balance">{description}</p>
      )}
    </div>
  );
}
