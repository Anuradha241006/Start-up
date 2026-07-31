import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { supabase } from '@/lib/supabase';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@elevateiq.com', href: 'mailto:hello@elevateiq.com' },
  { icon: Phone, label: 'Phone', value: '+91 80 4567 8900', href: 'tel:+918045678900' },
  { icon: MapPin, label: 'Office', value: 'Bengaluru, Karnataka, India', href: '#' },
  { icon: MessageSquare, label: 'Support', value: '24/7 chat support for Premium users', href: '#' },
];

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('notifications').insert({
        type: 'contact',
        title: form.subject || 'New contact message',
        message: `${form.name} (${form.email}): ${form.message}`,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative gradient-bg pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full border border-primary-200 bg-white/60 px-4 py-1.5 text-xs font-semibold text-primary-700 backdrop-blur">
              Get in touch
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl text-balance">
              We would love to <span className="gradient-text">hear from you</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 text-balance">
              Whether you are a student with a question, a college exploring partnerships, or a
              recruiter looking for talent — we are here to help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Info */}
            <Reveal className="lg:col-span-2">
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-glass"
                  >
                    <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white transition-transform group-hover:scale-110">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{info.label}</p>
                      <p className="mt-1 text-sm font-medium text-ink-900">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={100} className="lg:col-span-3">
              <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-glass sm:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-100">
                      <CheckCircle2 className="h-8 w-8 text-success-600" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-ink-900">Message sent!</h3>
                    <p className="mt-2 max-w-sm text-sm text-ink-500">
                      Thanks for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-ghost mt-6"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-ink-700">Full name</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="input-field"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-ink-700">Email</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="input-field"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">Subject</label>
                      <input
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="input-field"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="input-field resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>
                    {status === 'error' && (
                      <p className="rounded-lg bg-error-50 px-4 py-3 text-sm text-error-700">{errorMsg}</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send message'}
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
