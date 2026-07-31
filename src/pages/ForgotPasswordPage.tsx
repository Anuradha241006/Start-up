import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { useAuth } from '@/context/AuthContext';

export function ForgotPasswordPage() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    const { error } = await resetPassword(email);
    if (error) {
      setStatus('error');
      setErrorMsg(error);
    } else {
      setStatus('success');
    }
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we will send you a reset link."
      footer={
        <Link to="/login" className="inline-flex items-center gap-1.5 font-semibold text-primary-600 hover:text-primary-700">
          <ArrowLeft className="h-4 w-4" /> Back to login
        </Link>
      }
    >
      {status === 'success' ? (
        <div className="flex flex-col items-center py-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-100">
            <CheckCircle2 className="h-8 w-8 text-success-600" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-ink-900">Check your inbox</h3>
          <p className="mt-2 max-w-sm text-sm text-ink-500">
            We have sent a password reset link to <span className="font-semibold text-ink-700">{email}</span>.
            Follow the link to reset your password.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {status === 'error' && (
            <div className="flex items-start gap-2 rounded-lg bg-error-50 px-4 py-3 text-sm text-error-700">
              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field pl-10"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
            {status === 'sending' ? 'Sending...' : 'Send reset link'}
            <Send className="h-4 w-4" />
          </button>
        </form>
      )}
    </AuthLayout>
  );
}
