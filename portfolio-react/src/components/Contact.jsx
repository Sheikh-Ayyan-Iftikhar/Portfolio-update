import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, Mail, Phone } from 'lucide-react';
import { Section } from './Section.jsx';
import { RevealText } from './Section.jsx';
import { site, socials } from '../data/site.js';
import { EASE, viewportOnce } from '../lib/motion.js';
import { useMagnetic } from '../hooks/useMagnetic.js';
import Button from './Button.jsx';
import SocialIcon from './SocialIcon.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * There is no backend in this project, so the form composes a mailto: draft and
 * hands it to the user's mail client. It validates first so an obviously bad
 * address never produces a broken message.
 */
export default function Contact() {
  const reduce = useReducedMotion();
  const ctaRef = useMagnetic(0.3);
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (error) setError('');
    if (sent) setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = values;

    if (!name.trim()) return setError('Please add your name.');
    if (!EMAIL_RE.test(email.trim())) return setError('That email address looks incomplete.');
    if (message.trim().length < 10) return setError('A little more detail would help.');

    const subject = encodeURIComponent(`Project enquiry from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setError('');
  };

  const realSocials = socials.filter((s) => !s.placeholder && s.icon !== 'mail');

  return (
    <Section id="contact" className="border-t border-line-soft">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        {/* pitch */}
        <div>
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={reduce ? undefined : { duration: 0.6, ease: EASE }}
            className="eyebrow"
          >
            Contact
          </motion.p>

          <h2 className="mt-5 font-display text-[clamp(2.1rem,6vw,4rem)] font-semibold leading-[1.02]">
            <RevealText text="Let's build something" className="block text-mist-100" />
            <RevealText text="great." className="block text-gradient" delay={0.12} />
          </h2>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-mist-500"
          >
            Have an idea, project or collaboration in mind? Let&rsquo;s turn it into a modern
            digital experience.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={reduce ? undefined : { duration: 0.7, ease: EASE, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <span ref={ctaRef}>
              <Button href={`mailto:${site.email}`} variant="accent" icon={ArrowRight}>
                Let&rsquo;s talk
              </Button>
            </span>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-[0.85rem] text-mist-500 transition-colors hover:text-mist-100"
            >
              <Mail size={14} aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={`tel:+92${site.phone.replace(/^0/, '')}`}
              data-cursor="link"
              className="inline-flex items-center gap-2 text-[0.85rem] text-mist-500 transition-colors hover:text-mist-100"
            >
              <Phone size={14} aria-hidden="true" />
              {site.phoneLabel}
            </a>
          </motion.div>

          <ul className="mt-10 flex flex-wrap gap-2.5">
            {realSocials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  data-cursor="link"
                  aria-label={`${site.name} on ${s.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-mist-500 transition-[transform,color,border-color] duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:text-mist-100"
                >
                  <SocialIcon name={s.icon} size={16} />
                </a>
              </li>
            ))}
            {/* LinkedIn has no verified URL yet - inert, not a dead link */}
            {socials
              .filter((s) => s.placeholder)
              .map((s) => (
                <li key={s.label}>
                  <span
                    title={`${s.label} link not set yet`}
                    aria-disabled="true"
                    className="inline-flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-xl border border-line-soft text-mist-600 opacity-45"
                  >
                    <SocialIcon name={s.icon} size={16} />
                    <span className="sr-only">{s.label} (not configured yet)</span>
                  </span>
                </li>
              ))}
          </ul>
        </div>

        {/* form */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={reduce ? undefined : { opacity: 0, y: 26 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={reduce ? undefined : { duration: 0.75, ease: EASE, delay: 0.08 }}
          className="rounded-2xl border border-line bg-ink-850/60 p-6 sm:p-8"
        >
          <div className="space-y-5">
            <Field
              id="name"
              label="Name"
              value={values.name}
              onChange={update('name')}
              placeholder="Your name"
              autoComplete="name"
            />
            <Field
              id="email"
              type="email"
              label="Email"
              value={values.email}
              onChange={update('email')}
              placeholder="you@company.com"
              autoComplete="email"
            />
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[0.75rem] font-medium tracking-[0.14em] text-mist-500 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={update('message')}
                placeholder="What are you building?"
                className="w-full resize-none rounded-xl border border-line bg-ink-950/60 px-4 py-3 text-[0.9rem] text-mist-100 placeholder:text-mist-600 transition-colors duration-300 focus:border-accent-500/60 focus:outline-none"
              />
            </div>
          </div>

          <div aria-live="polite" className="min-h-6 pt-4">
            {error && (
              <p className="text-[0.8rem] text-rose-400" role="alert">
                {error}
              </p>
            )}
            {sent && (
              <p className="inline-flex items-center gap-2 text-[0.8rem] text-emerald-400">
                <Check size={14} aria-hidden="true" />
                Your mail app should be open with the message ready to send.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="group mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-mist-100 px-6 py-3.5 text-sm font-medium text-ink-900 transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-[0_14px_36px_-14px_rgba(220,230,255,.5)]"
          >
            Send message
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>

          <p className="mt-4 text-center text-[0.72rem] leading-relaxed text-mist-600">
            Opens your email app with the details filled in — no data is stored anywhere.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ id, label, type = 'text', ...rest }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[0.75rem] font-medium tracking-[0.14em] text-mist-500 uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...rest}
        className="w-full rounded-xl border border-line bg-ink-950/60 px-4 py-3 text-[0.9rem] text-mist-100 placeholder:text-mist-600 transition-colors duration-300 focus:border-accent-500/60 focus:outline-none"
      />
    </div>
  );
}
