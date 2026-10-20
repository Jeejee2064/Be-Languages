'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import {
  PalmBackground,
  BambooBackground,
  HeliconiaBackground,
  MonsteraBackground,
} from '../backgrounds'

const PLANTS = {
  palm: PalmBackground,
  bamboo: BambooBackground,
  heliconia: HeliconiaBackground,
  monstera: MonsteraBackground,
}

// Fade-up on scroll; renders static content for reduced-motion users
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div', ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  if (reduce) return <Tag className={className} {...rest}>{children}</Tag>
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 0.77, 0.47, 0.97] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// The site's SVG plant illustrations, placed as a sized, non-interactive decoration.
// `className` controls position/size (e.g. "-right-24 top-0 h-[34rem] w-[34rem]").
export function Plant({ name = 'palm', className = '', flip = false }) {
  const Illustration = PLANTS[name]
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 select-none ${flip ? '-scale-x-100' : ''} ${className}`}
    >
      <Illustration />
    </div>
  )
}

export function SectionHead({ eyebrow, title, accent, intro, align = 'left', light = false, className = '' }) {
  const center = align === 'center'
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</span>}
      <h2 className={`h-display mt-4 text-[2rem] sm:text-4xl lg:text-[2.9rem] ${light ? 'text-white' : 'text-ink'}`}>
        {title}{' '}
        {accent && <span className={light ? 'grad-text-light' : 'grad-text'}>{accent}</span>}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-violet-200/90' : 'text-ink-2'} ${center ? 'mx-auto' : ''} max-w-2xl`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}

export function Button({ href, variant = 'primary', children, external, className = '', ...rest }) {
  const cls = `btn btn-${variant} ${className}`
  if (external || /^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  )
}

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.804 1.768 6.83L2 30l7.374-1.736A13.926 13.926 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.536 11.536 0 01-5.874-1.604l-.42-.25-4.376 1.03 1.054-4.272-.274-.438A11.538 11.538 0 014.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.328-8.636c-.346-.173-2.05-1.01-2.368-1.126-.318-.116-.55-.173-.78.174-.23.346-.894 1.126-1.096 1.357-.2.23-.403.26-.75.086-.346-.173-1.462-.539-2.785-1.718-1.03-.918-1.725-2.052-1.928-2.398-.2-.347-.021-.534.152-.707.156-.155.346-.404.52-.606.173-.202.23-.346.346-.577.116-.23.058-.433-.029-.606-.087-.173-.78-1.88-1.069-2.574-.28-.676-.567-.584-.78-.595l-.664-.011c-.23 0-.605.087-.922.433-.318.346-1.213 1.185-1.213 2.89s1.242 3.35 1.415 3.58c.173.23 2.444 3.73 5.92 5.23.827.357 1.473.57 1.976.73.83.264 1.585.227 2.182.138.665-.1 2.05-.838 2.34-1.648.288-.81.288-1.504.2-1.648-.086-.144-.317-.23-.664-.404z" />
    </svg>
  )
}

export const CheckIcon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="currentColor" opacity=".14" />
    <path d="M5.8 10.4l2.6 2.6 5.8-5.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CrossIcon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="currentColor" opacity=".12" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const ArrowIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
