import { EMAIL, PHONE, UI, WHATSAPP } from '../../content/site'
import { Plant, Reveal, WhatsAppIcon } from './primitives'

const Icon = ({ d, d2 }) => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />{d2 && <path d={d2} />}
  </svg>
)

export default function ContactBlock({ lang = 'en', title, accent, body, eyebrow }) {
  const c = UI[lang].contact
  const rows = [
    { label: c.phone, value: PHONE, href: `tel:${PHONE.replace(/[^+\d]/g, '')}`, icon: <Icon d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
    { label: c.email, value: EMAIL, href: `mailto:${EMAIL}`, icon: <Icon d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { label: c.location, value: c.locationValue, icon: <Icon d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" d2="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /> },
    { label: c.availability, value: c.availabilityValue, icon: <Icon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
  ]
  return (
    <section id="contact" className="relative px-3 pb-20 pt-4 sm:px-5 lg:pb-28">
      <Reveal className="relative mx-auto max-w-[78rem] overflow-hidden rounded-[2rem] bg-[image:var(--brand-gradient)] px-6 py-14 text-white sm:px-10 lg:rounded-[2.5rem] lg:px-16 lg:py-20">
        <Plant name="monstera" className="-right-32 -top-24 h-[34rem] w-[34rem] brightness-0 invert opacity-90" />
        <Plant name="heliconia" flip className="-bottom-40 -left-32 h-[30rem] w-[30rem] brightness-0 invert opacity-80" />
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="eyebrow eyebrow-white">{eyebrow || c.eyebrow}</span>
            <h2 className="h-display mt-4 text-4xl sm:text-5xl lg:text-[3.4rem]">
              {title || c.title} <span className="italic text-white/90">{accent || c.accent}</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">{body || c.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                <WhatsAppIcon className="h-5 w-5" /> {c.whatsapp}
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btn-outline-light">{c.emailBtn}</a>
            </div>
          </div>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {rows.map((r) => (
              <div key={r.label} className="flex items-start gap-4 rounded-2xl bg-white/12 p-5 ring-1 ring-white/20 backdrop-blur-sm">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">{r.icon}</span>
                <div className="min-w-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/65">{r.label}</dt>
                  <dd className="mt-1 break-words font-medium">
                    {r.href ? <a href={r.href} className="hover:underline">{r.value}</a> : r.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  )
}
