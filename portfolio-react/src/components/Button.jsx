import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * Button with magnetic pull. Renders as <Link> for internal routes, <a> for
 * external URLs and in-page hashes, and <button> otherwise.
 * All styling lives here so CTAs stay identical across the site.
 */
export const Button = forwardRef(function Button(
  { children, href, variant = 'primary', className = '', icon: Icon, magneticRef, ...rest },
  fallbackRef,
) {
  const ref = magneticRef ?? fallbackRef;

  const base =
    'group relative inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium ' +
    'transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-[cubic-bezier(.16,1,.3,1)] ' +
    'translate-[var(--tx,0px),var(--ty,0px)] will-change-transform select-none';

  const variants = {
    primary:
      'bg-mist-100 text-ink-900 hover:bg-white shadow-[0_10px_30px_-12px_rgba(220,230,255,.45)] hover:shadow-[0_16px_40px_-14px_rgba(220,230,255,.6)]',
    accent:
      'bg-accent-500 text-white hover:bg-accent-400 shadow-[0_10px_30px_-12px_rgba(77,141,255,.6)] hover:shadow-[0_16px_44px_-14px_rgba(77,141,255,.75)]',
    ghost:
      'border border-line text-mist-300 hover:border-accent-500/50 hover:text-mist-100 hover:bg-white/[0.03]',
  };

  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {Icon && (
        <Icon
          size={15}
          strokeWidth={2}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  const style = { '--tx': 'var(--mx, 0px)', '--ty': 'var(--my, 0px)' };

  if (href) {
    // an internal path is a client-side route; hashes and absolute URLs are not
    const isRoute = href.startsWith('/') && !href.startsWith('//');

    if (isRoute) {
      return (
        <Link ref={ref} to={href} className={cls} style={style} {...rest}>
          {inner}
        </Link>
      );
    }

    const external = /^https?:/.test(href);
    return (
      <a
        ref={ref}
        href={href}
        className={cls}
        style={style}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref} type="button" className={cls} {...rest}>
      {inner}
    </button>
  );
});

export default Button;
