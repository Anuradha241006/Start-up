import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, GraduationCap, Building2, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const values = [
  { icon: Target, title: 'Personalization First', description: 'Every student is unique. We build AI that adapts to individual goals, strengths, and learning styles — never one-size-fits-all.' },
  { icon: Heart, title: 'Student-Centric', description: 'Every decision starts with the question: does this help a student get closer to their dream career? If not, we do not build it.' },
  { icon: GraduationCap, title: 'Education to Employability', description: 'We bridge the gap between what colleges teach and what industries expect, turning knowledge into job-ready skills.' },
  { icon: CheckCircle2, title: 'Measurable Outcomes', description: 'We obsess over real outcomes — interviews cracked, offers landed, careers launched — not vanity metrics.' },
];

const audiences = [
  { icon: GraduationCap, title: 'Engineering Students', description: 'Students from 1st to 4th year looking to build skills, prepare for placements, and land their first job.' },
  { icon: Users, title: 'Fresh Graduates', description: 'Recent graduates who want to upskill and stand out in competitive recruitment processes.' },
  { icon: Building2, title: 'Colleges & Universities', description: 'Institutions seeking data-driven placement preparation tools and student progress analytics.' },
  { icon: Briefcase, title: 'Recruiters & Companies', description: 'Organizations looking for industry-ready, pre-assessed engineering talent for campus hiring.' },
];

const timeline = [
  { year: '2023', title: 'The Idea', description: 'Founded after watching too many talented engineering graduates struggle to find jobs despite strong academic records.' },
  { year: '2024', title: 'Launch', description: 'Released our AI career assessment and personalized learning roadmap to the first cohort of students.' },
  { year: '2025', title: 'Growth', description: 'Expanded to 350+ partner colleges and crossed 50,000 students with a 92% placement readiness rate.' },
  { year: '2026', title: 'The Future', description: 'Building the world\'s most trusted AI-powered career development ecosystem for engineering talent.' },
];

export function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative gradient-bg pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full border border-primary-200 bg-white/60 px-4 py-1.5 text-xs font-semibold text-primary-700 backdrop-blur">
              About ElevateIQ
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl text-balance">
              Transforming education into <span className="gradient-text">employability</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 text-balance">
              We empower engineering students with AI-driven personalized career guidance, skill
              development, and placement preparation — so every student can confidently achieve
              their professional aspirations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-8 shadow-sm">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="mb-3 font-display text-2xl font-bold text-ink-900">Our Mission</h2>
                <p className="leading-relaxed text-ink-500">
                  To empower engineering students with AI-driven personalized career guidance, skill
                  development, and placement preparation, enabling them to confidently achieve their
                  professional aspirations and become industry-ready talent.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-8 shadow-sm">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-primary-600 text-white shadow-lg shadow-accent-500/30">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="mb-3 font-display text-2xl font-bold text-ink-900">Our Vision</h2>
                <p className="leading-relaxed text-ink-500">
                  To become the world's most trusted AI-powered career development ecosystem,
                  transforming education into employability by helping every student discover,
                  develop, and achieve their full professional potential.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The Problem"
              title={<>A degree is no longer <span className="gradient-text">enough</span></>}
              description="Engineering graduates often struggle to secure employment despite completing their degrees. Traditional education focuses on theory, while industries expect practical skills, project experience, communication abilities, and interview readiness."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Lack of personalized career guidance',
              'Unclear learning paths',
              'Limited awareness of industry requirements',
              'Poor resume quality',
              'Insufficient interview preparation',
              'Difficulty identifying skill gaps',
              'Lack of continuous mentorship',
              'Inefficient placement preparation',
            ].map((problem, i) => (
              <Reveal key={problem} delay={(i % 4) * 80}>
                <div className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 shadow-sm">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-error-400" />
                  <p className="text-sm font-medium text-ink-700">{problem}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Values"
              title="What drives us every day"
              description="The principles that shape every feature, every recommendation, and every interaction on our platform."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-glass">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white transition-transform group-hover:scale-110">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-ink-900">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-3 inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-400">
                Who We Serve
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                Built for the entire ecosystem
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-400 text-balance">
                From students to recruiters, ElevateIQ serves everyone invested in engineering talent.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((aud, i) => (
              <Reveal key={aud.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-primary-400/40 hover:bg-white/10">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                    <aud.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">{aud.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-400">{aud.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="From idea to impact"
            />
          </Reveal>
          <div className="mt-14 space-y-8">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 100}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-500 text-sm font-bold text-white shadow-lg shadow-primary-500/30">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && <div className="mt-2 w-px flex-1 bg-gradient-to-b from-primary-300 to-transparent" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-white/40 bg-white/60 p-10 text-center backdrop-blur-xl shadow-glass-lg gradient-bg">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 text-balance">
                Join us in shaping the future of engineering careers
              </h2>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/register" className="btn-primary px-6 py-3 text-base">
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-ghost px-6 py-3 text-base">
                  Contact us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
