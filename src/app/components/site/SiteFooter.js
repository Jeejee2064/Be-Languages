import Image from 'next/image'
import Link from 'next/link'
import { EMAIL, INSTAGRAM, PHONE, ROUTES, UI } from '../../content/site'
import { Plant } from './primitives'

export default function SiteFooter({ lang = 'en' }) {
  const t = UI[lang]
  const r = ROUTES[lang]
  const services = [
    { href: r.spanish, label: t.nav.spanish },
    { href: r.english, label: t.nav.english },
    { href: r.translation, label: t.nav.translation },
    { href: r.onlineSpanish, label: lang === 'es' ? 'Español en línea' : 'Online Spanish classes' },
    { href: r.onlineEnglish, label: lang === 'es' ? 'Inglés en línea' : 'Online English classes' },
    ...(r.resources ? [{ href: r.resources, label: t.nav.resources }] : []),
  ]
  return (
    <footer className="relative overflow-hidden bg-ink text-violet-100/80">
      <Plant name="palm" className="-right-24 -top-10 h-[26rem] w-[26rem] opacity-40" />
      <div className="container-x relative z-10 pb-8 pt-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href={r.home} className="relative block h-16 w-24 brightness-0 invert" aria-label="Be Languages">
              <Image src="/logo.svg" alt="Be Languages" fill className="object-contain object-left" />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-violet-200/70">{t.footer.blurb}</p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-6 inline-grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">{t.footer.services}</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="transition-colors hover:text-white">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">{t.footer.contact}</h3>
            <ul className="mt-5 space-y-3">
              <li><a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className="hover:text-white">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="break-all hover:text-white">{EMAIL}</a></li>
              <li>{t.contact.locationValue}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-violet-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {t.footer.resourcesLabel}:{' '}
            <a href="https://panama-contact.com" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-white hover:underline">
              {t.footer.panamaContact}
            </a>
          </p>
          <p>
            <a href="https://bocasdigital.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {t.footer.madeBy} <span className="font-semibold text-violet-100">Bocas Digital</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
