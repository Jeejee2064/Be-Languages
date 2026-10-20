import { CheckIcon, CrossIcon, Reveal, WhatsAppIcon } from './primitives'
import { UI, WHATSAPP } from '../../content/site'

// Plan cards used by every class page and the translation page.
// plan: { name, price, duration?, unit?, hours?, description, features[], highlighted }
export function PlanCard({ plan, lang, index = 0, quote = false }) {
  const t = UI[lang].plan
  const hot = plan.highlighted
  // ES hours like "2× por semana" already read as a full phrase; only "5 horas" needs the suffix
  const hoursSuffix = plan.hours && /(hours|horas)$/i.test(plan.hours.trim()) ? ` ${t.instruction}` : ''
  const msg = quote ? t.waQuote(plan.name) : t.waPlan(plan.name)
  const href = `${WHATSAPP}?text=${encodeURIComponent(msg)}`
  return (
    <Reveal delay={Math.min(index, 3) * 0.07} className="h-full">
      <article
        className={`relative flex h-full flex-col rounded-[1.75rem] p-7 transition-transform duration-300 hover:-translate-y-1 ${
          hot
            ? 'bg-ink text-white shadow-[0_30px_60px_-30px_rgba(76,45,180,.7)]'
            : 'border border-line bg-white text-ink'
        }`}
      >
        {hot && (
          <span className="absolute -top-3 left-7 rounded-full bg-[image:var(--brand-gradient)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white shadow-lg">
            {quote ? t.mostPopular : t.popular}
          </span>
        )}
        <h3 className="h-display text-[1.55rem] leading-tight">{plan.name}</h3>
        <p className="mt-4 flex items-baseline gap-2">
          <span className={`h-display text-5xl ${hot ? 'grad-text-light' : 'grad-text'}`}>{plan.price}</span>
          <span className={`text-sm ${hot ? 'text-violet-200/80' : 'text-ink-3'}`}>
            {plan.duration ? `/ ${plan.duration}` : plan.unit}
          </span>
        </p>
        {plan.hours && (
          <p
            className={`mt-3 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
              hot ? 'bg-white/10 text-violet-100' : 'bg-lav text-royal'
            }`}
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="10" cy="10" r="8" /><path d="M10 6v4l2.5 2.5" />
            </svg>
            {plan.hours}{hoursSuffix}
          </p>
        )}
        <p className={`mt-4 text-[0.95rem] leading-relaxed ${hot ? 'text-violet-100/80' : 'text-ink-2'}`}>{plan.description}</p>
        <ul className={`mt-5 flex-1 space-y-3 border-t pt-5 text-[0.93rem] ${hot ? 'border-white/10' : 'border-line'}`}>
          {plan.features.map((f) => (
            <li key={f} className="flex gap-3">
              <CheckIcon className={`mt-0.5 h-5 w-5 shrink-0 ${hot ? 'text-violet-300' : 'text-violet'}`} />
              <span className={hot ? 'text-violet-50/90' : 'text-ink-2'}>{f}</span>
            </li>
          ))}
        </ul>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn mt-7 w-full ${hot ? 'btn-light' : 'btn-primary'}`}
        >
          <WhatsAppIcon className="h-4 w-4" />
          {quote ? t.quote : t.choose}
        </a>
      </article>
    </Reveal>
  )
}

// 7-plan catalogues (individual / pairs / trios) are shown as three centered rows
export function PlanGrid({ plans, lang, quote = false, groups }) {
  if (groups && groups.length) {
    let start = 0
    return (
      <div className="space-y-14">
        {groups.map((g) => {
          const slice = plans.slice(start, start + g.count)
          start += g.count
          return (
            <div key={g.label}>
              <h3 className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-royal">
                {g.label}<span className="h-px flex-1 bg-line" />
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {slice.map((p, i) => <PlanCard key={p.name} plan={p} lang={lang} index={i} quote={quote} />)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  const cols = plans.length >= 4 ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-3'
  return (
    <div className={`grid gap-6 ${cols}`}>
      {plans.map((p, i) => (
        <PlanCard key={p.name} plan={p} lang={lang} index={i} quote={quote} />
      ))}
    </div>
  )
}

export function PolicyPanel({ lang }) {
  const p = UI[lang].policy
  return (
    <Reveal className="mx-auto mt-14 max-w-4xl rounded-[1.75rem] border border-line bg-white p-7 md:p-10">
      <h3 className="h-display text-2xl">{p.title}</h3>
      <div className="mt-7 grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-royal">{p.payTitle}</h4>
          <ul className="mt-4 space-y-3 text-[0.95rem] text-ink-2">
            {p.payItems.map((x) => (
              <li key={x} className="flex gap-3"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet" />{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-royal">{p.cancelTitle}</h4>
          <ul className="mt-4 space-y-3 text-[0.95rem] text-ink-2">
            {p.cancelItems.map((x) => (
              <li key={x.text} className="flex gap-3">
                {x.ok ? (
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
                ) : (
                  <CrossIcon className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                )}
                {x.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )
}
