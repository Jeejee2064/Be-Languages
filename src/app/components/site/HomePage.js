import Image from 'next/image'
import Link from 'next/link'
import { Building2, FileCheck2, Globe, Languages, MessagesSquare, ShieldCheck, Video } from 'lucide-react'
import { HOME } from '../../content/home'
import { ROUTES, UI, groupsFor, WHATSAPP } from '../../content/site'
import { ArrowIcon, Button, CheckIcon, Plant, Reveal, SectionHead } from './primitives'
import { PlanGrid, PolicyPanel } from './Pricing'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import Testimonials from './Testimonials'
import ContactBlock from './ContactBlock'

const SERVICE_ICONS = [Languages, Building2, FileCheck2, ShieldCheck, Globe, MessagesSquare]

export default function HomePage({ lang = 'en' }) {
  const c = HOME[lang]
  const r = ROUTES[lang]
  const t = UI[lang]

  return (
    <div className="bg-paper text-ink">
      <SiteHeader lang={lang} alt="home" />
      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden pt-[calc(var(--header-h)+2.5rem)] lg:pt-[calc(var(--header-h)+4rem)]">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(60rem_30rem_at_85%_-10%,#e9e4fd_0%,transparent_60%),radial-gradient(40rem_26rem_at_-5%_40%,#e0ecff_0%,transparent_60%)]" />
          <Plant name="bamboo" className="-left-32 bottom-0 h-[34rem] w-[34rem] opacity-80" />
          <div className="container-x relative z-10 grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
            <div>
              <Reveal as="div" y={14}><span className="eyebrow">{c.hero.eyebrow}</span></Reveal>
              <Reveal delay={0.05}>
                <h1 className="h-display mt-5 text-[2.8rem] sm:text-6xl lg:text-[4.2rem]">
                  {c.hero.title} <span className="grad-text italic">{c.hero.accent}</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">{c.hero.lead}</p>
              </Reveal>
              <Reveal delay={0.18} className="mt-9 flex flex-wrap gap-3">
                <Button href="#paths" variant="primary">{c.hero.primary} <ArrowIcon /></Button>
                <Button href="#translations" variant="ghost">{c.hero.secondary}</Button>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-3 rotate-2 rounded-[2.5rem] bg-[image:var(--brand-gradient)] opacity-25 blur-[2px]" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] border-[6px] border-white shadow-[0_40px_80px_-40px_rgba(60,40,160,.55)]">
                <Image
                  src="/mimitimbi.jpeg"
                  alt={c.hero.photoAlt}
                  fill
                  priority
                  sizes="(min-width:1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="relative z-10 border-y border-line bg-white/70 backdrop-blur">
            <dl className="container-x grid grid-cols-2 gap-x-6 gap-y-5 py-6 lg:grid-cols-4">
              {c.hero.stats.map((s) => (
                <div key={s.k} className="lg:border-l lg:border-line lg:pl-6 lg:first:border-0 lg:first:pl-0">
                  <dt className="h-display text-xl text-ink sm:text-2xl">{s.k}</dt>
                  <dd className="mt-0.5 text-sm text-ink-3">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Paths */}
        <section id="paths" className="section-pad relative overflow-hidden">
          <div className="container-x">
            <SectionHead eyebrow={c.paths.eyebrow} title={c.paths.title} accent={c.paths.accent} />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {c.paths.items.map((p, i) => (
                <Reveal key={p.key} delay={i * 0.08} className="h-full">
                  <Link
                    href={r[p.key]}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white p-8 transition duration-300 hover:-translate-y-1.5 hover:border-violet/50 hover:shadow-[0_30px_60px_-34px_rgba(110,70,230,.55)]"
                  >
                    <span className="h-display text-6xl text-lav-2 transition-colors group-hover:text-violet/30">0{i + 1}</span>
                    <h3 className="h-display mt-6 text-3xl">{p.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-ink-2">{p.text}</p>
                    <div className="mt-8 flex items-end justify-between border-t border-line pt-5">
                      <p className="text-sm text-ink-3">
                        {t.fromWord} <span className="h-display text-2xl grad-text">{p.price}</span> {p.unit}
                      </p>
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white transition group-hover:bg-[image:var(--brand-gradient)] group-hover:translate-x-1">
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Online classes */}
        <section id="online" className="section-pad relative overflow-hidden">
          <Plant name="heliconia" className="-right-40 -top-10 h-[30rem] w-[30rem] opacity-60" />
          <div className="container-x relative z-10">
            <SectionHead eyebrow={c.online.eyebrow} title={c.online.title} accent={c.online.accent} intro={c.online.intro} />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {c.online.items.map((o, i) => (
                <Reveal key={o.key} delay={i * 0.08} className="h-full">
                  <Link
                    href={r[o.key]}
                    className="group flex h-full items-start gap-5 rounded-[1.75rem] border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet/50 hover:shadow-[0_30px_60px_-34px_rgba(110,70,230,.55)]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lav text-royal transition group-hover:bg-[image:var(--brand-gradient)] group-hover:text-white">
                      <Video className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <div className="flex-1">
                      <h3 className="h-display text-2xl">{o.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink-2">{o.text}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                        {c.online.cta} <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-pad relative overflow-hidden bg-lav/60">
          <Plant name="heliconia" className="-right-40 -top-10 h-[36rem] w-[36rem]" />
          <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[auto_1fr] lg:gap-20">
            <Reveal className="relative mx-auto">
              <div className="absolute -inset-4 -rotate-3 rounded-[2.5rem] bg-[image:var(--brand-gradient)] opacity-20" />
              <div className="relative h-[28rem] w-[18.5rem] overflow-hidden rounded-[2rem] border-[6px] border-white shadow-2xl sm:h-[30rem] sm:w-[20rem]">
                <Image src="/jojo.png" alt={c.about.photoAlt} fill sizes="320px" className="object-cover" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow">{c.about.eyebrow}</span>
                <h2 className="h-display mt-4 text-[2rem] sm:text-4xl lg:text-[2.9rem]">
                  {c.about.title} <span className="grad-text italic">{c.about.accent}</span> {c.about.title2}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{c.about.body}</p>
              </Reveal>
              <ul className="mt-9 grid gap-4 sm:grid-cols-1">
                {c.about.points.map((p, i) => (
                  <Reveal as="li" key={p.title} delay={i * 0.07} className="flex gap-4 rounded-2xl bg-white/80 p-5 ring-1 ring-line">
                    <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-violet" />
                    <div>
                      <h3 className="font-semibold text-ink">{p.title}</h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-2">{p.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-pad">
          <div className="container-x">
            <SectionHead eyebrow={c.services.eyebrow} title={c.services.title} accent={c.services.accent} intro={c.services.intro} />
            <div className="mt-14 grid overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 [&>*]:bg-white gap-px">
              {c.services.items.map((s, i) => {
                const Icon = SERVICE_ICONS[i]
                return (
                  <Reveal key={s.title} delay={(i % 3) * 0.06} className="group p-8 transition-colors hover:bg-lav/50">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lav text-royal transition group-hover:bg-[image:var(--brand-gradient)] group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold leading-snug">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-2">{s.text}</p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="section-pad relative overflow-hidden bg-lav/60">
          <Plant name="palm" flip className="-left-44 top-24 h-[38rem] w-[38rem] opacity-70" />
          <div className="container-x relative z-10">
            <SectionHead eyebrow={c.pricing.eyebrow} title={c.pricing.title} accent={c.pricing.accent} intro={c.pricing.intro} align="center" />
            <div className="mt-16"><PlanGrid plans={c.pricing.plans} lang={lang} groups={groupsFor(c.pricing.plans, lang)} /></div>
            <PolicyPanel lang={lang} />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={r.spanish} variant="ghost">{t.nav.spanish} <ArrowIcon /></Button>
              <Button href={r.english} variant="ghost">{t.nav.english} <ArrowIcon /></Button>
            </div>
          </div>
        </section>

        {/* Translations */}
        <section id="translations" className="section-pad relative overflow-hidden bg-ink text-white">
          <Plant name="monstera" className="-right-36 -top-24 h-[36rem] w-[36rem] opacity-50" />
          <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <SectionHead light eyebrow={c.translation.eyebrow} title={c.translation.title} accent={c.translation.accent} intro={c.translation.intro} />
              <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <p className="flex items-baseline gap-3">
                  <span className="h-display text-6xl grad-text-light">{c.translation.price}</span>
                  <span className="text-violet-200/80">{t.perPage}</span>
                </p>
                <Button href={r.translation} variant="light">{c.translation.cta} <ArrowIcon /></Button>
              </Reveal>
            </div>
            <Reveal className="rounded-[1.75rem] bg-white/[0.07] p-7 ring-1 ring-white/15 backdrop-blur-sm md:p-9">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">{c.translation.detailsTitle}</h3>
                  <ul className="mt-4 space-y-3 text-violet-50/90">
                    <li className="flex gap-3"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky" />{c.translation.priceNote}</li>
                    {c.translation.details.map((d) => (
                      <li key={d} className="flex gap-3"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky" />{d}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">{c.translation.typesTitle}</h3>
                  <ul className="mt-4 space-y-3 text-violet-50/90">
                    {c.translation.types.map((d) => (
                      <li key={d} className="flex gap-3"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-8 border-t border-white/10 pt-5 text-sm italic leading-relaxed text-violet-200/80">{c.translation.note}</p>
            </Reveal>
          </div>
        </section>

        <Testimonials lang={lang} />
        <ContactBlock lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  )
}
