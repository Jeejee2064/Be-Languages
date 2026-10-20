'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ROUTES, UI, WHATSAPP } from '../../content/site'
import { WhatsAppIcon } from './primitives'

// `alt` = key of the equivalent page in the other language (home | spanish | english | translation)
export default function SiteHeader({ lang = 'en', alt = 'home' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const t = UI[lang]
  const r = ROUTES[lang]
  const other = lang === 'en' ? 'es' : 'en'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { href: `${r.home}#about`, label: t.nav.about },
    { href: r.spanish, label: t.nav.spanish },
    { href: r.english, label: t.nav.english },
    { href: r.translation, label: t.nav.translation },
    ...(r.resources ? [{ href: r.resources, label: t.nav.resources }] : []),
    { href: '#contact', label: t.nav.contact },
  ]

  const switchHref = ROUTES[other][alt] || ROUTES[other].home

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open ? 'bg-paper' : scrolled ? 'bg-paper/90 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href={r.home} aria-label="Be Languages" className="relative block h-14 w-20 shrink-0">
          <Image src="/logo.svg" alt="Be Languages" fill priority className="object-contain object-left" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[0.92rem] font-medium text-ink-2 transition-colors hover:bg-lav hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitch lang={lang} href={switchHref} other={other} />
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-5 !py-3 !text-sm">
            <WhatsAppIcon className="h-4 w-4" /> {t.bookCta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitch lang={lang} href={switchHref} other={other} />
          <button
            type="button"
            aria-label={open ? t.close : t.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[var(--header-h)] bottom-0 overflow-y-auto bg-paper lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-col py-6">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="h-display border-b border-line py-4 text-3xl text-ink"
                >
                  {l.label}
                </Link>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 w-full">
                <WhatsAppIcon className="h-5 w-5" /> {t.bookCta}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function LangSwitch({ lang, href, other }) {
  return (
    <div className="flex items-center rounded-full border border-line bg-white p-0.5 text-xs font-semibold" role="group" aria-label="Language">
      <span aria-current="true" className="rounded-full bg-ink px-3 py-1.5 text-white">{lang.toUpperCase()}</span>
      <Link href={href} hrefLang={other} lang={other} className="rounded-full px-3 py-1.5 text-ink-2 hover:text-ink">
        {other.toUpperCase()}
      </Link>
    </div>
  )
}
