import Image from "next/image";
import NextLink from "next/link";
import { Clock, BookOpen, Star } from "lucide-react";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import { ArrowIcon, Button, Plant, Reveal } from "../components/site/primitives";
import { ROUTES } from "../content/site";

const learningResources = [
  {
    id: 1,
    title: "Panamanian Slang & Street Talk",
    category: "Culture",
    difficulty: "Intermediate",
    readTime: "4 min read",
    description: "Learn authentic Panamanian slang, expressions, and street talk that locals use every day - from 'chevere' to 'jupa' and beyond.",
    slug: "panamanian-slang-street-talk",
  },
  {
    id: 2,
    title: "Common Mistakes English Speakers Make",
    category: "Grammar",
    difficulty: "Intermediate",
    readTime: "5 min read",
    description: "Avoid these common pitfalls that English speakers often encounter when learning Spanish, including false friends and grammar traps.",
    slug: "common-spanish-mistakes",
  },
  {
    id: 3,
    title: "Restaurant Spanish: Order Like a Pro",
    category: "Dining",
    difficulty: "Beginner",
    readTime: "4 min read",
    description: "Essential phrases and vocabulary for dining out in Panama, from ordering traditional dishes to paying the bill.",
    slug: "restaurant-panama-ordering",
  },
  {
    id: 4,
    title: "Panamanian Spanish vs. Other Spanish",
    category: "Culture",
    difficulty: "Intermediate",
    readTime: "6 min read",
    description: "Understanding the unique characteristics of Panamanian Spanish, including Caribbean influences and local expressions.",
    slug: "panamanian-spanish-differences",
  },
  {
    id: 5,
    title: "Shopping & Bargaining Basics",
    category: "Shopping",
    difficulty: "Beginner",
    readTime: "4 min read",
    description: "Navigate markets, stores, and street vendors with confidence using these essential shopping and bargaining phrases.",
    slug: "shopping-bargaining-panama",
  },
  {
    id: 6,
    title: "Dating & Romance in Panama",
    category: "Romance",
    difficulty: "Intermediate",
    readTime: "5 min read",
    description: "Learn romantic expressions, dating vocabulary, and cultural tips for navigating relationships in Panama.",
    slug: "dating-romance-panama",
  },
  {
    id: 7,
    title: "Getting Around Panama: Transport Terms",
    category: "Transportation",
    difficulty: "Beginner",
    readTime: "4 min read",
    description: "Master transportation vocabulary for buses, taxis, boats, and asking for directions in Panama.",
    slug: "panama-transportation-spanish",
  },
];

export default function LearningResourcesPage() {
  const [featured, ...rest] = learningResources;
  return (
    <div className="bg-paper text-ink">
      <SiteHeader lang="en" alt="resources" />
      <main>
        <section className="relative overflow-hidden pt-[calc(var(--header-h)+2.5rem)] pb-14 lg:pt-[calc(var(--header-h)+4rem)] lg:pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_85%_-10%,#e9e4fd_0%,transparent_60%)]" />
          <Plant name="bamboo" className="-right-40 -top-10 h-[34rem] w-[34rem] opacity-80" />
          <div className="container-x relative z-10">
            <Reveal>
              <span className="eyebrow">Free guides</span>
              <h1 className="h-display mt-5 max-w-3xl text-[2.6rem] sm:text-6xl lg:text-[4rem]">
                Panamanian Spanish <span className="grad-text italic">learning resources</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
                Free guides and tips to help English speakers master Spanish and understand Panamanian culture.
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-2">
                <li className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-royal" /> 7 Detailed Guides</li>
                <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-grape" /> Quick Reads</li>
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-royal" /> All Levels</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="container-x">
            {/* Featured guide */}
            <Reveal>
              <NextLink
                href={`/learning-resources/${featured.slug}`}
                className="group grid overflow-hidden rounded-[2rem] border border-line bg-white transition duration-300 hover:shadow-[0_40px_70px_-45px_rgba(90,60,220,.6)] md:grid-cols-[1fr_1.1fr]"
              >
                <div className="relative aspect-square md:aspect-auto md:min-h-[24rem]">
                  <Image src={`/${featured.slug}.png`} alt={featured.title} fill sizes="(min-width:768px) 560px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <Meta r={featured} />
                  <h2 className="h-display mt-5 text-3xl md:text-4xl">{featured.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-2">{featured.description}</p>
                  <span className="btn btn-primary mt-8 w-fit">Read Full Guide <ArrowIcon /></span>
                </div>
              </NextLink>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((r, i) => (
                <Reveal key={r.id} delay={(i % 3) * 0.07} className="h-full">
                  <NextLink
                    href={`/learning-resources/${r.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(90,60,220,.6)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={`/${r.slug}.png`} alt={r.title} fill sizes="(min-width:1024px) 380px, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <Meta r={r} />
                      <h2 className="h-display mt-4 text-2xl">{r.title}</h2>
                      <p className="mt-3 flex-1 leading-relaxed text-ink-2">{r.description}</p>
                      <span className="mt-6 inline-flex items-center gap-2 font-semibold text-royal">
                        Read Full Guide <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </NextLink>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad relative overflow-hidden bg-ink text-white">
          <Plant name="palm" className="-right-40 -top-16 h-[34rem] w-[34rem] opacity-40" />
          <div className="container-x relative z-10 max-w-3xl text-center">
            <Reveal>
              <h2 className="h-display text-4xl sm:text-5xl">
                Ready for <span className="grad-text-light italic">personalized learning?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-violet-200/90">
                These resources are just the beginning. Get personalized English lessons tailored to your specific needs and goals in Bocas del Toro.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button href={ROUTES.en.spanish} variant="light">Book Spanish Classes <ArrowIcon /></Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" />
    </div>
  );
}

function Meta({ r }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      <span className="font-semibold grad-text">{r.category}</span>
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-3" />
      <span className="text-ink-3">{r.readTime}</span>
      <span className="rounded-full bg-lav px-3 py-1 text-xs font-medium text-royal">{r.difficulty}</span>
    </div>
  );
}
