'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TESTIMONIALS } from '../../content/testimonials'
import { UI } from '../../content/site'
import { Plant, SectionHead } from './primitives'

export default function Testimonials({ lang = 'en' }) {
  const items = TESTIMONIALS[lang]
  const t = UI[lang].testimonials
  const [i, setI] = useState(0)
  const go = (d) => setI((v) => (v + d + items.length) % items.length)
  const cur = items[i]
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden bg-paper">
      <Plant name="bamboo" className="-left-28 top-6 h-[30rem] w-[30rem] opacity-70" />
      <div className="container-x relative z-10">
        <SectionHead eyebrow={t.eyebrow} title={t.title} accent={t.accent} />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <figure className="relative min-h-[16rem]" aria-live="polite">
            <span aria-hidden="true" className="h-display absolute -left-1 -top-10 select-none text-[8rem] leading-none text-violet/25">“</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <blockquote
                  className={`h-display max-w-4xl !font-normal italic text-ink ${cur.content.length > 260 ? 'text-xl sm:text-2xl lg:text-[1.7rem]' : 'text-2xl sm:text-3xl lg:text-[2.1rem]'} leading-snug`}
                >
                  {cur.content}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[image:var(--brand-gradient)] font-semibold text-white">
                    {cur.name[0]}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{cur.name}</span>
                    <span className="block text-sm text-ink-3">{cur.role}</span>
                  </span>
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </figure>

          <div className="flex items-center gap-3">
            <button type="button" onClick={() => go(-1)} aria-label={t.prev} className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-ink transition hover:bg-ink hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4l-6 6 6 6" /></svg>
            </button>
            <div className="flex gap-2 px-2" role="tablist">
              {items.map((x, k) => (
                <button key={x.name} type="button" role="tab" aria-selected={k === i} aria-label={x.name} onClick={() => setI(k)}
                  className={`h-2.5 rounded-full transition-all ${k === i ? 'w-7 bg-violet' : 'w-2.5 bg-line hover:bg-violet/50'}`} />
              ))}
            </div>
            <button type="button" onClick={() => go(1)} aria-label={t.next} className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-ink transition hover:bg-ink hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
