import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, Target, BookOpen, FileText, MessageSquare,
  Code2, FolderGit2, Bot, BarChart3, Briefcase, CheckCircle2,
  Star, ChevronDown, Rocket, ShieldCheck, Users, TrendingUp,
} from 'lucide-react';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const features = [
  { icon: Target, title: 'AI Career Assessment', description: 'Evaluate your skills and personality to receive personalized career recommendations tailored to your strengths.', to: '/features' },
  { icon: BookOpen, title: 'Personalized Learning Roadmap', description: 'Get a goal-based study plan with weekly schedules and skill progression tracking built around your career goals.', to: '/features' },
  { icon: FileText, title: 'Resume Builder & ATS Analyzer', description: 'AI-generated resume suggestions with ATS compatibility scoring and actionable improvement tips.', to: '/features' },
  { icon: MessageSquare, title: 'AI Mock Interviews', description: 'Practice technical, HR, and behavioral interviews with instant AI-generated feedback on every response.', to: '/features' },
  { icon: Code2, title: 'Coding Practice', description: 'Daily coding challenges, company-specific questions, and detailed performance analytics to sharpen your skills.', to: '/features' },
  { icon: FolderGit2, title: 'Project Recommendations', description: 'Discover beginner to advanced portfolio projects matched to your career goals and skill level.', to: '/features' },
  { icon: Bot, title: 'Career Mentor Chatbot', description: '24/7 AI assistance for career advice, learning guidance, and placement support whenever you need it.', to: '/features' },
  { icon: BarChart3, title: 'Progress Dashboard', description: 'Track learning progress, skill achievements, and your placement readiness score with rich analytics.', to: '/features' },
  { icon: Briefcase, title: 'Internship & Job Recommendations', description: 'Personalized opportunities based on your skills, with application tracking to keep you organized.', to: '/features' },
];

const benefits = [
  { icon: Rocket, title: 'Become Industry-Ready', description: 'Bridge the gap between academic learning and real industry expectations with practical, hands-on preparation.' },
  { icon: Target, title: 'Close Your Skill Gaps', description: 'AI pinpoints the exact competencies you are missing and recommends the fastest path to acquire them.' },
  { icon: ShieldCheck, title: 'Interview Confidence', description: 'Walk into every interview prepared. Mock interviews build the muscle memory and confidence to perform.' },
  { icon: TrendingUp, title: 'Track Real Progress', description: 'See your placement readiness score climb as you complete assessments, projects, and practice.' },
];

const stats = [
  { value: '50K+', label: 'Students Guided' },
  { value: '92%', label: 'Placement Readiness' },
  { value: '1.2M+', label: 'Mock Interviews' },
  { value: '350+', label: 'Partner Colleges' },
];

const testimonials = [
  { name: 'Aarav Sharma', role: 'B.Tech, Computer Science', year: '2024 Graduate', avatar: 'AS', quote: 'ElevateIQ transformed my preparation. The mock interviews felt incredibly real, and my placement readiness score went from 45% to 88% in three months. I landed my dream job at a top tech firm.' },
  { name: 'Priya Nair', role: 'B.E., Information Technology', year: '3rd Year', avatar: 'PN', quote: 'The personalized roadmap was a game-changer. I always felt lost about what to study next. Now I have a clear weekly plan and my confidence has skyrocketed.' },
  { name: 'Rahul Verma', role: 'B.Tech, Electronics', year: '2024 Graduate', avatar: 'RV', quote: 'The resume builder caught issues I never knew existed. The ATS analyzer helped me get past screening at three companies. Worth every minute.' },
  { name: 'Sneha Patel', role: 'B.E., Computer Science', year: '2nd Year', avatar: 'SP', quote: 'As a second-year student, I was unsure about my career direction. The AI assessment helped me discover a path in data engineering I had never considered.' },
  { name: 'Karan Mehta', role: 'B.Tech, Mechanical', year: '4th Year', avatar: 'KM', quote: 'The project recommendations helped me build a portfolio that actually impressed recruiters. I went from zero projects to four impressive ones in a semester.' },
  { name: 'Ananya Reddy', role: 'B.E., AI & ML', year: '2024 Graduate', avatar: 'AR', quote: 'The career mentor chatbot was my go-to at 2 AM before interviews. It felt like having a senior mentor available around the clock. Absolutely invaluable.' },
];

const faqs = [
  { q: 'Is ElevateIQ suitable for first-year students?', a: 'Absolutely. ElevateIQ is designed for engineering students from their first year through graduation. First-year students benefit from early career assessment and foundational roadmap planning, giving them a head start on industry readiness.' },
  { q: 'How does the AI mock interview work?', a: 'Our AI conducts realistic technical, HR, and behavioral interviews tailored to your target role. It analyzes your responses for clarity, technical accuracy, and communication, then delivers instant, actionable feedback so you can improve before the real thing.' },
  { q: 'Can my college use ElevateIQ for our students?', a: 'Yes. We offer institutional licensing with student analytics dashboards, placement tracking, and administrative reporting. Contact us through the Contact page to learn about packages for your college or university.' },
  { q: 'What is the placement readiness score?', a: 'Your placement readiness score is a composite metric that reflects your progress across assessments, skill development, projects, mock interviews, and coding practice. It gives you a clear, honest picture of how prepared you are for recruitment.' },
  { q: 'Is there a free plan available?', a: 'Yes. Our free plan includes a basic career assessment, limited AI chatbot access, the resume builder, and a learning roadmap. You can upgrade to Premium anytime for unlimited mentorship, advanced analytics, and mock interviews.' },
  { q: 'How accurate is the ATS resume analyzer?', a: 'Our analyzer evaluates your resume against the same criteria automated tracking systems use — keyword matching, formatting, section structure, and readability. It provides a compatibility score and specific recommendations to improve your chances of passing screening.' },
];

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative gradient-bg pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl animate-float" />
        <div className="absolute top-40 right-1/4 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/60 px-4 py-1.5 text-xs font-semibold text-primary-700 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                AI-Powered Career Development Platform
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-6xl text-balance">
                From Learning to Landing Your{' '}
                <span className="gradient-text">Dream Career</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 text-balance">
                ElevateIQ is your personalized AI career coach — assessing your skills, building a
                learning roadmap, sharpening your resume, and preparing you for interviews until
                you are industry-ready.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/register" className="btn-primary px-6 py-3 text-base">
                  Start Free Assessment <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/features" className="btn-ghost px-6 py-3 text-base">
                  Explore Features
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-8 flex items-center justify-center gap-6 text-xs text-ink-500">
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success-500" /> No credit card required</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success-500" /> Free plan forever</span>
              </div>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal delay={500}>
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="glass relative overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-2 shadow-glass-lg backdrop-blur-xl">
                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-ink-950 to-ink-900 p-6 sm:p-10">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { label: 'Placement Readiness', value: 88, icon: TrendingUp, color: 'from-primary-500 to-accent-500' },
                      { label: 'Skills Mastered', value: 24, icon: BookOpen, color: 'from-success-500 to-primary-500' },
                      { label: 'Mock Interviews', value: 37, icon: MessageSquare, color: 'from-accent-500 to-primary-600' },
                    ].map((card) => (
                      <div key={card.label} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                        <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${card.color}`}>
                          <card.icon className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-2xl font-bold text-white">{card.value}{card.label.includes('Readiness') ? '%' : ''}</p>
                        <p className="text-xs text-ink-400">{card.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-medium text-ink-300">Weekly Skill Progress</span>
                      <span className="text-xs text-success-400">+12% this week</span>
                    </div>
                    <div className="flex items-end gap-1.5">
                      {[40, 55, 35, 70, 60, 85, 95].map((h, i) => (
                        <div key={i} className="flex-1">
                          <div
                            className="w-full rounded-t bg-gradient-to-t from-primary-500 to-accent-400 transition-all duration-700"
                            style={{ height: `${h * 1.2}px` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-ink-100 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold gradient-text sm:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-ink-500">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Core Features"
              title={<>Everything you need to become <span className="gradient-text">industry-ready</span></>}
              description="Nine powerful AI-driven tools working together to take you from where you are to where you want to be in your career."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 100}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-ink-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-3 inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-400">
                Why ElevateIQ
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                Built for outcomes, not just activity
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-400 text-balance">
                Every feature is designed to move you closer to a job offer. No busywork, no fluff — just measurable progress.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-primary-400/40 hover:bg-white/10">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white transition-transform group-hover:scale-110">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-400">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Student Stories"
              title={<>Real students, <span className="gradient-text">real outcomes</span></>}
              description="Thousands of engineering students have used ElevateIQ to land roles at top companies. Here is what some of them have to say."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 100}>
                <figure className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all hover:shadow-glass">
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-warning-400 text-warning-400" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed text-ink-600">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-semibold text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                      <p className="text-xs text-ink-500">{t.role} · {t.year}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Everything you need to know about ElevateIQ. Cannot find an answer? Reach out on our Contact page."
            />
          </Reveal>
          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 50}>
                <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-ink-900">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute -bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-white/40 bg-white/60 p-10 backdrop-blur-xl shadow-glass-lg sm:p-14">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 shadow-glow animate-pulse-glow">
                <Rocket className="h-7 w-7 text-white" />
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl text-balance">
                Ready to elevate your career?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500 text-balance">
                Join 50,000+ engineering students who are taking charge of their careers with AI-powered guidance.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/register" className="btn-primary px-6 py-3 text-base">
                  Get started free <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/pricing" className="btn-ghost px-6 py-3 text-base">
                  View pricing
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
