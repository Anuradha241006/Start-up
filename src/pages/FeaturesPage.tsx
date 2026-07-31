import { Link } from 'react-router-dom';
import {
  Target, BookOpen, FileText, MessageSquare, Code2, FolderGit2,
  Bot, BarChart3, Briefcase, ArrowRight, CheckCircle2, Zap, Brain,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const featureGroups = [
  {
    icon: Target,
    title: 'AI Career Assessment',
    tagline: 'Know exactly where you stand',
    features: [
      { name: 'Skill Evaluation', description: 'AI evaluates your current technical and soft skills against industry benchmarks.' },
      { name: 'Personality Assessment', description: 'Understand your work style and which roles naturally fit your strengths.' },
      { name: 'Career Recommendations', description: 'Get personalized career paths ranked by fit with your skills and interests.' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Personalized Learning Roadmap',
    tagline: 'A clear path, not a guessing game',
    features: [
      { name: 'Goal-Based Learning Plans', description: 'Structured plans that map every skill you need from where you are to your target role.' },
      { name: 'Weekly Study Schedules', description: 'Realistic weekly plans that fit around your college coursework and deadlines.' },
      { name: 'Skill Progression Tracking', description: 'Watch your mastery grow as you complete modules, projects, and assessments.' },
    ],
  },
  {
    icon: Zap,
    title: 'AI Skill Gap Analysis',
    tagline: 'Find the gaps before recruiters do',
    features: [
      { name: 'Industry Requirement Matching', description: 'Compare your skills against real job descriptions and industry standards.' },
      { name: 'Missing Competency Identification', description: 'AI pinpoints the exact skills you lack for your target role.' },
      { name: 'Learning Resource Recommendations', description: 'Curated resources to close each gap efficiently.' },
    ],
  },
  {
    icon: FileText,
    title: 'Resume Builder & ATS Analyzer',
    tagline: 'Get past the bots, impress the humans',
    features: [
      { name: 'AI-Generated Resume Suggestions', description: 'Smart content suggestions for every section of your resume.' },
      { name: 'ATS Compatibility Scoring', description: 'See how your resume performs against automated tracking systems.' },
      { name: 'Improvement Recommendations', description: 'Specific, actionable fixes to boost your resume effectiveness.' },
    ],
  },
  {
    icon: MessageSquare,
    title: 'AI Mock Interviews',
    tagline: 'Practice until it feels effortless',
    features: [
      { name: 'Technical Interviews', description: 'Realistic coding and system design interviews with instant feedback.' },
      { name: 'HR Interviews', description: 'Practice common HR questions and refine your professional narrative.' },
      { name: 'Behavioral Interviews', description: 'Master the STAR method with AI-guided behavioral interview practice.' },
      { name: 'Instant AI-Generated Feedback', description: 'Detailed feedback on clarity, accuracy, and communication after every answer.' },
    ],
  },
  {
    icon: Code2,
    title: 'Coding Practice',
    tagline: 'Sharpen your problem-solving edge',
    features: [
      { name: 'Daily Coding Challenges', description: 'Fresh problems every day to build consistency and problem-solving speed.' },
      { name: 'Company-Specific Questions', description: 'Practice with question sets used by top recruiting companies.' },
      { name: 'Performance Analytics', description: 'Track your speed, accuracy, and topic mastery over time.' },
    ],
  },
  {
    icon: FolderGit2,
    title: 'Project Recommendation System',
    tagline: 'Build a portfolio that stands out',
    features: [
      { name: 'Beginner Projects', description: 'Hands-on starter projects to build foundational skills.' },
      { name: 'Intermediate Projects', description: 'Projects that demonstrate practical, applied knowledge.' },
      { name: 'Advanced Portfolio Projects', description: 'Complex projects that impress recruiters and showcase depth.' },
    ],
  },
  {
    icon: Bot,
    title: 'Career Mentor Chatbot',
    tagline: 'A mentor available 24/7',
    features: [
      { name: '24/7 AI Assistance', description: 'Get answers to career questions anytime, day or night.' },
      { name: 'Career Advice', description: 'Personalized guidance on roles, industries, and career trajectories.' },
      { name: 'Learning Guidance', description: 'Recommendations on what to learn next and how to learn it.' },
      { name: 'Placement Support', description: 'Tips and strategies for every stage of the placement process.' },
    ],
  },
  {
    icon: BarChart3,
    title: 'Progress Dashboard',
    tagline: 'See your growth in real time',
    features: [
      { name: 'Learning Progress', description: 'Visual tracking of your course and skill completion.' },
      { name: 'Skill Achievements', description: 'Badges and milestones as you master new competencies.' },
      { name: 'Placement Readiness Score', description: 'A single, honest metric showing how prepared you are.' },
      { name: 'Performance Analytics', description: 'Detailed insights into your strengths and improvement areas.' },
    ],
  },
  {
    icon: Briefcase,
    title: 'Internship & Job Recommendations',
    tagline: 'Opportunities matched to you',
    features: [
      { name: 'Personalized Internship Opportunities', description: 'Internships matched to your skills, year, and career goals.' },
      { name: 'Job Recommendations', description: 'Full-time roles aligned with your profile and readiness.' },
      { name: 'Application Tracking', description: 'Keep all your applications organized in one place.' },
    ],
  },
];

export function FeaturesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative gradient-bg pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/60 px-4 py-1.5 text-xs font-semibold text-primary-700 backdrop-blur">
              <Brain className="h-3.5 w-3.5" />
              Ten Powerful AI Tools
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl text-balance">
              Your complete <span className="gradient-text">career development</span> toolkit
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 text-balance">
              Every feature is designed to move you closer to a job offer. Explore how each tool
              works and how they fit together to make you industry-ready.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature groups */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {featureGroups.map((group, gi) => (
            <Reveal key={group.title}>
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 text-white shadow-lg shadow-primary-500/30">
                      <group.icon className="h-7 w-7" />
                    </div>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">{group.title}</h2>
                    <p className="mt-2 text-sm font-medium text-primary-600">{group.tagline}</p>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {group.features.map((feature) => (
                      <div
                        key={feature.name}
                        className="group rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-glass"
                      >
                        <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <h3 className="text-sm font-semibold text-ink-900">{feature.name}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-white/40 bg-white/60 p-10 text-center backdrop-blur-xl shadow-glass-lg gradient-bg">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 text-balance">
                Start using every feature today
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-ink-500 text-balance">
                Create your free account and take your first AI career assessment in minutes.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/register" className="btn-primary px-6 py-3 text-base">
                  Get started free <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/pricing" className="btn-ghost px-6 py-3 text-base">
                  Compare plans
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
