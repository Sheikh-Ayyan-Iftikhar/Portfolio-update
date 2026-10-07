import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks, site, socials } from '../data/site.js';
import SocialIcon from './SocialIcon.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  const realSocials = socials.filter((s) => !s.placeholder);

  return (
    <footer className="border-t border-line-soft pt-16 pb-10">
      <div className="wrap">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* identity */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5"
              aria-label={`${site.name} — home`}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mist-100 font-display text-[0.72rem] font-bold text-ink-900 transition-transform duration-500 group-hover:rotate-[18deg]">
                {site.monogram}
              </span>
              <span className="font-display text-[0.95rem] font-semibold text-mist-100">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 text-[0.85rem] leading-relaxed text-mist-500">{site.role}</p>
            <p className="mt-1 text-[0.8rem] text-mist-600">{site.location}</p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {realSocials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    data-cursor="link"
                    aria-label={`${site.name} on ${s.label}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-mist-500 transition-[transform,color,border-color] duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:text-mist-100"
                  >
                    <SocialIcon name={s.icon} size={15} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* nav */}
          <nav aria-label="Footer" className="lg:text-right">
            <h2 className="font-sans text-[0.68rem] tracking-[0.2em] text-mist-600 uppercase">
              Navigate
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[0.85rem] text-mist-500 transition-colors duration-300 hover:text-accent-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/#services"
                  className="text-[0.85rem] text-mist-500 transition-colors duration-300 hover:text-accent-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <a
                  href={site.resume}
                  download
                  className="text-[0.85rem] text-mist-500 transition-colors duration-300 hover:text-accent-400"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start gap-5 border-t border-line-soft pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.78rem] text-mist-600">
            &copy; {year} {site.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={`mailto:${site.email}`}
              className="text-[0.78rem] text-mist-600 transition-colors hover:text-mist-300"
            >
              {site.email}
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-[0.78rem] text-mist-600 transition-colors hover:text-mist-300"
            >
              Back to top
              <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-[transform,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:border-accent-500/50">
                <ArrowUp size={13} aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
