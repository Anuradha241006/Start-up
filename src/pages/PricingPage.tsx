import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Building2, Sparkles, X } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Everything you need to get started on your career journey.',
    cta: 'Start free',
    to: '/register',
    highlight: false,
    features: [
      'Basic career assessment',
      'Limited AI chatbot access',
      'Resume builder',
      'Learning roadmap',
      'Community support',
    ],
  },
  {
    name: 'Premium',
    price: { monthly: 19, yearly: 15 },
    description: 'Full AI-powered preparation for serious placement aspirants.',
    cta: 'Go Premium',
    to: '/register',
    highlight: true,
    features: [
      'Everything in Free, plus:',
      'Unlimited AI mentorship',
      'Advanced resume analysis',
      'AI mock interviews',
      'Personalized career guidance',
      'Placement preparation tools',
      'Advanced analytics',
      'Priority support',
    ],
  },
  {
    name: 'Institutional',
    price: { monthly: null, yearly: null },
    description: 'For colleges, universities, and training institutes.',
    cta: 'Contact sales',
    to: '/contact',
    highlight: false,
    features: [
      'Everything in Premium, plus:',
      'Student analytics dashboard',
      'Placement dashboards',
      'Administrative reports',
      'Bulk student onboarding',
      'Dedicated account manager',
      'Custom integrations',
    ],
  },
];

const comparison = [
  { feature: 'Career Assessment', free: 'Basic', premium: 'Advanced', institutional: 'Advanced' },
  { feature: 'AI Mentor Chatbot', free: 'Limited', premium: 'Unlimited', institutional: 'Unlimited' },
  { feature: 'Resume Builder', free: true, premium: true, institutional: true },
  { feature: 'ATS Analyzer', free: false, premium: true, institutional: true },
  { feature: 'AI Mock Interviews', free: false, premium: true, institutional: true },
  { feature: 'Learning Roadmap', free: true, premium: true, institutional: true },
  { feature: 'Coding Practice', free: 'Limited', premium: 'Unlimited', institutional: 'Unlimited' },
  { feature: 'Project Recommendations', free: true, premium: true, institutional: true },
  { feature: 'Progress Dashboard', free: 'Basic', premium: 'Advanced', institutional: 'Advanced' },
  { feature: 'Placement Readiness Score', free: true, premium: true, institutional: true },
  { feature: 'Internship & Job Recommendations', free: false, premium: true, institutional: true },
  { feature: 'Student Analytics Dashboard', free: false, premium: false, institutional: true },
  { feature: 'Administrative Reports', free: false, premium: false, institutional: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-success-500" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-ink-300" />;
  return <span className="text-xs font-medium text-ink-600">{value}</span>;
}

export function PricingPage() {
  const [cycle, setCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative gradient-bg pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/60 px-4 py-1.5 text-xs font-semibold text-primary-700 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Simple, transparent pricing
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl text-balance">
              Invest in your <span className="gradient-text">career</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 text-balance">
              Start free, upgrade when you are ready. Every plan is designed to deliver real
              placement outcomes — not just access to tools.
            </p>
          </Reveal>

          {/* Billing toggle */}
          <Reveal delay={200}>
            <div className="mt-8 inline-flex items-center gap-1 rounded-xl border border-ink-200 bg-white/70 p-1 backdrop-blur">
              <button
                onClick={() => setCycle('monthly')}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  cycle === 'monthly' ? 'bg-primary-600 text-white shadow' : 'text-ink-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setCycle('yearly')}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  cycle === 'yearly' ? 'bg-primary-600 text-white shadow' : 'text-ink-600'
                }`}
              >
                Yearly
                <span className="ml-1.5 rounded-full bg-success-100 px-1.5 py-0.5 text-[10px] font-bold text-success-700">-20%</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-8 backdrop-blur-xl transition-all ${
                    plan.highlight
                      ? 'border-primary-300 bg-white shadow-glass-lg lg:-translate-y-4'
                      : 'border-ink-100 bg-white/70 shadow-sm'
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-ink-900">{plan.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{plan.description}</p>
                  <div className="mt-6 flex items-end gap-1">
                    {plan.price.monthly === null ? (
                      <span className="font-display text-3xl font-bold text-ink-900">Custom</span>
                    ) : (
                      <>
                        <span className="font-display text-4xl font-bold text-ink-900">
                          ${plan.price[cycle]}
                        </span>
                        <span className="mb-1 text-sm text-ink-500">/mo</span>
                      </>
                    )}
                  </div>
                  {plan.price.monthly !== null && plan.price.monthly > 0 && cycle === 'yearly' && (
                    <p className="mt-1 text-xs text-success-600">Billed annually</p>
                  )}
                  <Link
                    to={plan.to}
                    className={`mt-6 w-full ${plan.highlight ? 'btn-primary' : 'btn-ghost'}`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                        <span className={feature.endsWith(':') ? 'font-semibold text-ink-900' : 'text-ink-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-ink-900">
              Compare all features
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-sm">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-ink-100 bg-ink-50">
                    <th className="px-5 py-4 text-left text-sm font-semibold text-ink-900">Feature</th>
                    <th className="px-5 py-4 text-center text-sm font-semibold text-ink-900">Free</th>
                    <th className="px-5 py-4 text-center text-sm font-semibold text-primary-600">Premium</th>
                    <th className="px-5 py-4 text-center text-sm font-semibold text-ink-900">Institutional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-ink-50/50'}>
                      <td className="px-5 py-3.5 text-sm font-medium text-ink-700">{row.feature}</td>
                      <td className="px-5 py-3.5 text-center"><Cell value={row.free} /></td>
                      <td className="px-5 py-3.5 text-center"><Cell value={row.premium} /></td>
                      <td className="px-5 py-3.5 text-center"><Cell value={row.institutional} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-ink-100 bg-ink-950 p-10 text-center sm:p-14">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-glow">
                <Building2 className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl text-balance">
                  Empower your entire campus
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-400 text-balance">
                  Bring ElevateIQ to your college or university. Get student analytics,
                  placement dashboards, and administrative reporting at scale.
                </p>
              </div>
              <Link to="/contact" className="btn-glass">
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
