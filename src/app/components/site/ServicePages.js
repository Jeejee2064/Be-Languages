import Link from 'next/link'
import { Award, Briefcase, Clock, FileText, GraduationCap, Globe, Heart, MessageCircle, BookOpen, Landmark, Users, Scale, Shield, Video, MapPin, Languages } from 'lucide-react'
import { ROUTES, UI, groupsFor } from '../../content/site'
import { ArrowIcon, Button, CheckIcon, Plant, Reveal, SectionHead } from './primitives'
import { PlanGrid, PolicyPanel } from './Pricing'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import ContactBlock from './ContactBlock'

const TOPIC_ICONS = [MessageCircle, BookOpen, Globe, Landmark, Users, Briefcase]
const DOC_ICONS = [Heart, GraduationCap, Scale, FileText, Briefcase, Globe]
const FEATURE_ICONS = [Award, Clock, Shield, Users]

function Crumbs({ lang, label }) {
  const r = ROUTES[lang]
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-ink-3">
      <Link href={r.home} className="hover:text-ink">{lang === 'es' ? 'Inicio' : 'Home'}</Link>
      <span aria-hidden="true">/</span>
      <span className="text-ink-2">{label}</span>
    </nav>
  )
}

function Hero({ lang, crumb, title, lead, primary, secondary, secondaryHref, plant = 'bamboo', aside }) {
  return (
    <section id="home" className="relative overflow-hidden pt-[calc(var(--header-h)+2rem)] lg:pt-[calc(var(--header-h)+3.5rem)]">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_85%_-10%,#e9e4fd_0%,transparent_60%),radial-gradient(40rem_26rem_at_-5%_60%,#e0ecff_0%,transparent_60%)]" />
      <Plant name={plant} className="-left-36 -bottom-10 h-[34rem] w-[34rem] opacity-70" />
      <div className="container-x relative z-10 grid items-center gap-12 pb-16 lg:grid-cols-[1.25fr_1fr] lg:gap-14 lg:pb-24">
        <div>
          <Reveal y={10}><Crumbs lang={lang} label={crumb} /></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display mt-6 text-[2.5rem] sm:text-5xl lg:text-[3.6rem]">{title}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">{lead}</p>
          </Reveal>
          <Reveal delay={0.18} className="mt-9 flex flex-wrap gap-3">
            <Button href="#contact" variant="primary">{primary} <ArrowIcon /></Button>
            <Button href={secondaryHref} variant="ghost">{secondary}</Button>
          </Reveal>
        </div>
        <Reveal delay={0.15}>{aside}</Reveal>
      </div>
    </section>
  )
}

const RELATED = {
  en: {
    eyebrow: 'Keep exploring',
    title: 'Related',
    accent: 'classes',
    online: { spanish: 'Online Spanish classes in Panama', english: 'Online English classes in Panama' },
    onlineText: { spanish: 'Not in Bocas del Toro? Take the same live 1-on-1 Spanish lessons by video call from anywhere in Panama.', english: 'Not in Bocas del Toro? Take the same live 1-on-1 English lessons by video call from anywhere in Panama.' },
    local: { spanish: 'Spanish classes in Isla Colón, Bocas del Toro', english: 'English classes in Isla Colón, Bocas del Toro' },
    localText: 'Prefer to learn face to face? Join in-person lessons on Isla Colón, with real-life practice in shops and restaurants.',
    other: { spanish: 'Online English classes in Panama', english: 'Online Spanish classes in Panama' },
    otherText: { spanish: 'Also improving your English? The same flexible packages, taught live online.', english: 'Living in Panama? Learn Spanish live online with a certified local instructor.' },
    translation: 'Certified translation services in Bocas del Toro',
    translationText: 'Official English ⟷ Spanish translations for legal, academic and immigration documents.',
  },
  es: {
    eyebrow: 'Sigue explorando',
    title: 'Clases',
    accent: 'relacionadas',
    online: { spanish: 'Clases de español en línea en Panamá', english: 'Clases de inglés en línea en Panamá' },
    onlineText: { spanish: '¿No estás en Bocas del Toro? Toma las mismas clases de español uno a uno por videollamada desde cualquier lugar de Panamá.', english: '¿No estás en Bocas del Toro? Toma las mismas clases de inglés uno a uno por videollamada desde cualquier lugar de Panamá.' },
    local: { spanish: 'Clases de español en Isla Colón, Bocas del Toro', english: 'Clases de inglés en Isla Colón, Bocas del Toro' },
    localText: '¿Prefieres aprender cara a cara? Únete a clases presenciales en Isla Colón, con práctica real en tiendas y restaurantes.',
    other: { spanish: 'Clases de inglés en línea en Panamá', english: 'Clases de español en línea en Panamá' },
    otherText: { spanish: '¿Quieres mejorar tu inglés? Los mismos paquetes flexibles, en vivo y en línea.', english: '¿Vives en Panamá? Aprende español en vivo y en línea con una instructora local certificada.' },
    translation: 'Traducciones certificadas en Bocas del Toro',
    translationText: 'Traducciones oficiales inglés ⟷ español para documentos legales, académicos y migratorios.',
  },
}

// Internal links between the in-person and online class pages (and their siblings)
function RelatedClasses({ page }) {
  const { lang, subject } = page
  const r = ROUTES[lang]
  const c = RELATED[lang]
  const isOnline = Boolean(page.path)
  const otherSubject = subject === 'spanish' ? 'english' : 'spanish'
  const cap = (k) => k[0].toUpperCase() + k.slice(1)
  const items = isOnline
    ? [
        { href: r[subject], Icon: MapPin, title: c.local[subject], text: c.localText },
        { href: r['online' + cap(otherSubject)], Icon: Video, title: c.other[subject], text: c.otherText[subject] },
      ]
    : [
        { href: r['online' + cap(subject)], Icon: Video, title: c.online[subject], text: c.onlineText[subject] },
        { href: r.translation, Icon: Languages, title: c.translation, text: c.translationText },
      ]
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHead eyebrow={c.eyebrow} title={c.title} accent={c.accent} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map(({ href, Icon, title, text }, i) => (
            <Reveal key={href} delay={i * 0.07} className="h-full">
              <Link
                href={href}
                className="group flex h-full items-start gap-5 rounded-[1.5rem] border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-[0_26px_50px_-34px_rgba(110,70,230,.6)]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lav text-royal transition group-hover:bg-[image:var(--brand-gradient)] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <div className="flex-1">
                  <h3 className="h-display text-xl">{title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-2">{text}</p>
                </div>
                <ArrowIcon className="mt-1 h-5 w-5 shrink-0 text-royal transition group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ClassesPage({ page }) {
  const { lang, data } = page
  const t = UI[lang]
  const plans = data.pricingPlans
  return (
    <div className="bg-paper text-ink">
      <SiteHeader lang={lang} alt={page.alt} />
      <main>
        <Hero
          lang={lang}
          crumb={page.crumb}
          title={page.title}
          lead={page.lead}
          primary={page.primary}
          secondary={page.secondary}
          secondaryHref="#topics"
          aside={
            <div className="relative">
              <div className="absolute -inset-3 rotate-2 rounded-[2.25rem] bg-[image:var(--brand-gradient)] opacity-20" />
              <div className="relative rounded-[2rem] border border-line bg-white p-8 shadow-[0_40px_80px_-50px_rgba(60,40,160,.6)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-3">{page.factPrice}</p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="h-display text-6xl grad-text">{plans[0].price}</span>
                  <span className="text-ink-3">/ {plans[0].duration}</span>
                </p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {page.facts.map((f) => (
                    <li key={f} className="flex gap-3 text-ink-2"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet" />{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          }
        />

        <section id="topics" className="section-pad relative overflow-hidden">
          <Plant name="heliconia" className="-right-40 top-10 h-[34rem] w-[34rem] opacity-70" />
          <div className="container-x relative z-10">
            <SectionHead {...page.topics} />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.classTopics.map((tp, i) => {
                const Icon = TOPIC_ICONS[i]
                return (
                  <Reveal key={tp.title} delay={(i % 3) * 0.07} className="h-full">
                    <article className="group h-full rounded-[1.5rem] border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-[0_26px_50px_-34px_rgba(110,70,230,.6)]">
                      <div className="flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lav text-royal transition group-hover:bg-[image:var(--brand-gradient)] group-hover:text-white">
                          <Icon className="h-6 w-6" strokeWidth={1.7} />
                        </span>
                        <span className="h-display text-4xl text-lav-2">0{i + 1}</span>
                      </div>
                      <h3 className="h-display mt-6 text-2xl">{tp.title}</h3>
                      <ul className="mt-4 space-y-2.5 text-ink-2">
                        {tp.items.map((it) => (
                          <li key={it} className="flex gap-3"><span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />{it}</li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section id="pricing" className="section-pad relative overflow-hidden bg-lav/60">
          <Plant name="palm" flip className="-left-44 top-24 h-[38rem] w-[38rem] opacity-70" />
          <div className="container-x relative z-10">
            <SectionHead {...page.pricing} align="center" />
            <div className="mt-16"><PlanGrid plans={plans} lang={lang} groups={groupsFor(plans, lang)} /></div>
            <PolicyPanel lang={lang} />
          </div>
        </section>

        {page.faq && (
          <section id="faq" className="section-pad">
            <div className="container-x">
              <SectionHead {...page.faq} align="center" />
              <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-[1.5rem] border border-line bg-white">
                {page.faq.items.map(([q, a]) => (
                  <details key={q} className="group p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink">
                      {q}
                      <span aria-hidden="true" className="text-2xl text-violet transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-ink-2">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <RelatedClasses page={page} />
        <ContactBlock lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  )
}

export function TranslationPage({ page }) {
  const { lang, data, info } = page
  const t = UI[lang]
  return (
    <div className="bg-paper text-ink">
      <SiteHeader lang={lang} alt="translation" />
      <main>
        <Hero
          lang={lang}
          crumb={page.crumb}
          title={page.title}
          lead={page.lead}
          primary={page.primary}
          secondary={page.secondary}
          secondaryHref="#documents"
          plant="monstera"
          aside={
            <div className="relative">
              <div className="absolute -inset-3 -rotate-2 rounded-[2.25rem] bg-[image:var(--brand-gradient)] opacity-20" />
              <div className="relative rounded-[2rem] bg-ink p-8 text-white shadow-[0_40px_80px_-40px_rgba(30,20,100,.8)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">{t.fromWord}</p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="h-display text-6xl grad-text-light">{data.pricingPlans[0].price}</span>
                  <span className="text-violet-200/80">{t.perPage}</span>
                </p>
                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-violet-50/90">
                  {page.trust.map((x) => (
                    <li key={x} className="flex gap-3"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          }
        />

        <section id="features" className="section-pad">
          <div className="container-x">
            <SectionHead {...page.features} />
            <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 [&>*]:bg-white">
              {data.features.map((f, i) => {
                const Icon = FEATURE_ICONS[i]
                return (
                  <Reveal key={f.title} delay={i * 0.06} className="group p-8 transition-colors hover:bg-lav/50">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lav text-royal transition group-hover:bg-[image:var(--brand-gradient)] group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="h-display mt-6 text-2xl">{f.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-2">{f.description}</p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section id="documents" className="section-pad relative overflow-hidden bg-lav/60">
          <Plant name="palm" className="-right-44 -top-10 h-[36rem] w-[36rem] opacity-70" />
          <div className="container-x relative z-10">
            <SectionHead {...page.documents} />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.documentTypes.map((d, i) => {
                const Icon = DOC_ICONS[i]
                return (
                  <Reveal key={d.title} delay={(i % 3) * 0.07} className="h-full">
                    <article className="group h-full rounded-[1.5rem] border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-[0_26px_50px_-34px_rgba(110,70,230,.6)]">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lav text-royal transition group-hover:bg-[image:var(--brand-gradient)] group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </span>
                      <h3 className="h-display mt-6 text-2xl">{d.title}</h3>
                      <ul className="mt-4 space-y-2.5 text-ink-2">
                        {d.items.map((it) => (
                          <li key={it} className="flex gap-3"><span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />{it}</li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section id="pricing" className="section-pad">
          <div className="container-x">
            <SectionHead {...page.pricing} align="center" />
            <div className="mt-16"><PlanGrid plans={data.pricingPlans} lang={lang} quote /></div>

            <Reveal className="mx-auto mt-14 max-w-5xl rounded-[1.75rem] border border-line bg-white p-7 md:p-10">
              <h3 className="h-display text-2xl">{info.title}</h3>
              <div className="mt-7 grid gap-8 md:grid-cols-3">
                {info.cols.map((c) => (
                  <div key={c.title}>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-royal">{c.title}</h4>
                    <ul className="mt-4 space-y-3 text-[0.95rem] text-ink-2">
                      {c.items.map((x) => (
                        <li key={x} className="flex gap-3"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet" />{x}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-lav px-5 py-4 text-center font-medium text-royal">
                <Shield className="h-5 w-5 shrink-0" />
                {info.banner}
              </p>
              {info.partnerPre && (
                <p className="mt-4 text-center text-sm text-ink-3">
                  {info.partnerPre}{' '}
                  <a href="https://panama-contact.com" target="_blank" rel="noopener noreferrer" className="text-royal underline-offset-4 hover:underline">Panama Contact</a>{' '}
                  {info.partnerPost}
                </p>
              )}
            </Reveal>
          </div>
        </section>

        <ContactBlock lang={lang} {...page.contact} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  )
}
