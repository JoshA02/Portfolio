'use client'

import { Tagline } from '@/components/common'
import Card from '@/components/Card'
import { Mail, Loader2, ArrowRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { sendContactEmail } from './actions'

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        render: (container: string | HTMLElement, options: object) => number
        getResponse: (widgetId?: number) => string
        reset: (widgetId?: number) => void
      }
    }
    onRecaptchaLoad?: () => void
  }
}

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState<number | null>(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Load reCAPTCHA script
  useEffect(() => {
    if (!siteKey) {
      console.warn('reCAPTCHA site key not configured');
      return;
    }

    // Define callback for when reCAPTCHA script loads
    window.onRecaptchaLoad = () => {
      if (recaptchaRef.current && window.grecaptcha) {
        const widgetId = window.grecaptcha.enterprise.render(recaptchaRef.current, {
          sitekey: siteKey,
          action: 'CONTACT_FORM_SUBMISSION',
          theme: 'dark',
        });
        setRecaptchaWidgetId(widgetId);
        setRecaptchaLoaded(true);
      }
    };

    // Load the reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js?onload=onRecaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      window.onRecaptchaLoad = undefined;
    };
  }, [siteKey]);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    
    // Get reCAPTCHA response token if loaded
    const recaptchaResponse = recaptchaLoaded 
      ? window.grecaptcha?.enterprise?.getResponse(recaptchaWidgetId ?? undefined) 
      : '';
    
    if (siteKey && recaptchaLoaded && !recaptchaResponse) {
      setStatus('error');
      setErrorMessage('Please complete the reCAPTCHA verification');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await sendContactEmail({
        email,
        message,
        recaptchaToken: recaptchaResponse || '',
      });

      if (result.success) {
        setStatus('success');
        setEmail('');
        setMessage('');

        // Reset reCAPTCHA
        if (window.grecaptcha.enterprise && recaptchaWidgetId !== null) {
          window.grecaptcha.enterprise.reset(recaptchaWidgetId);
        }
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to send message');
      }
    } catch {
      setStatus('error');
      setErrorMessage('An unexpected error occurred');
    }
  };

  return (
    <div className="flex lg:pr-30 lg:pl-30 md:pr-12 md:pl-12 pr-4 pl-4 justify-center font-body pt-6 md:pt-0 pb-12">
      <main className='flex-1 max-w-2xl'>
        <Tagline tagline="contact-form" />
        <h1 className='text-3xl text-foreground font-title font-semibold tracking-wide mb-4'>{"Let's Connect"}</h1>
        
        <Card draggable={false} className='animate-fade-in-up px-5 py-4'>
          <div className='flex flex-col gap-4'>

            {/* Don't Like Forms? Section */}
            <div className=' rounded-xl p-4 flex items-center gap-5 overflow-hidden relative'>
              <div className="absolute -inset-px pointer-events-none rounded-[inherit]" />
              <Mail className='w-8 h-8 text-border-light shrink-0' />
              <div className='tracking-wide'>
                <h3 className='font-title font-medium text-foreground text-lg'>{`Don't Like Forms?`}</h3>
                <p className='text-card-fg text-sm'>
                  You can reach me at{' '}
                  <a href="mailto:hello@joshaaron.me" target='_blank' rel='noopener noreferrer' className='font-bold text-card-fg hover:text-foreground transition-colors'>
                    hello@joshaaron.me
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
              {/* Email Field */}
              <div className='flex flex-col gap-1.5'>
                <Tagline tagline="email" type="mini" />
                <div className='relative'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='email@domain.com'
                    required
                    className='w-full bg-card-bg border border-border-light/30 rounded-xl px-3 py-2 
                               text-foreground placeholder:text-card-fg/40 text-base
                               focus:outline-none focus:border-accent/50 transition-colors'
                  />
                  <div className="absolute -inset-px pointer-events-none rounded-[inherit] shadow-[inset_-179px_0px_250px_0px_var(--card-inset-shadow)]" />
                </div>
              </div>

              {/* Message Field */}
              <div className='flex flex-col gap-1.5 flex-1'>
                <Tagline tagline="message" type="mini" />
                <div className='relative'>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Your message here'
                    required
                    rows={5}
                    className='w-full bg-card-bg border border-border-light/30 rounded-xl px-3 py-2 
                               text-foreground placeholder:text-card-fg/40 text-base resize-none
                               focus:outline-none focus:border-accent/50 transition-colors'
                  />
                  <div className="absolute -inset-px pointer-events-none rounded-[inherit] shadow-[inset_-179px_0px_250px_0px_var(--card-inset-shadow)]" />
                </div>
              </div>

              {/* reCAPTCHA Container */}
              {siteKey && (
                <div className='flex justify-start'>
                  <div ref={recaptchaRef} />
                </div>
              )}

              {/* Status Messages */}
              {status === 'success' && (
                <p className='text-status-complete-from text-sm'>{"Message sent successfully! I'll get back to you soon."}</p>
              )}
              {status === 'error' && (
                <p className='text-traffic-light-red text-sm'>{errorMessage}</p>
              )}

              {/* Send Button */}
              <div className='flex justify-end'>
                <button
                  type='submit'
                  disabled={status === 'loading'}
                  className='flex items-center gap-2 bg-accent-faded border border-accent/40 
                       text-accent font-body font-bold text-sm px-5 py-2.5 rounded-xl
                       hover:bg-accent/10 transition-colors active:scale-95'
                >
                  {status === 'loading' ? (
                    <>
                      <span>Sending</span>
                      <Loader2 className='w-4 h-4 animate-spin' />
                    </>
                  ) : (
                    <>
                      <span>Send</span>
                      <ArrowRight className='w-4 h-4' />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </Card>
      </main>
    </div>
  )
}
