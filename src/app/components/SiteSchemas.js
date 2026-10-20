"use client";

import { usePathname } from "next/navigation";

const SITE = "https://www.be-languages.com";

const pricingPlans = [
  {
    name: "1 Week Crash Course",
    nameEs: "Curso Intensivo de 1 Semana",
    price: "125.00",
    duration: "P1W",
    description:
      "Ideal for travelers and expats who want to improve basic conversation rapidly.",
    descriptionEs:
      "Ideal para viajeros y expatriados que quieren mejorar rápidamente su conversación básica.",
  },
  {
    name: "Island Flow Plan",
    nameEs: "Plan Flujo Isleño",
    price: "150.00",
    duration: "P3W",
    description:
      "Perfect for visitors staying a few weeks, consistent, stress-free Spanish improvement.",
    descriptionEs:
      "Perfecto para visitantes que se quedan unas semanas: progreso constante y sin estrés.",
  },
  {
    name: "Steady Surf Plan",
    nameEs: "Plan Surf Constante",
    price: "180.00",
    duration: "P1M",
    description:
      "Ideal for expats, digital nomads or long term visitors ready to progress steadily.",
    descriptionEs:
      "Ideal para expatriados, nómadas digitales o visitantes de larga estancia que quieren avanzar de forma constante.",
  },
  {
    name: "Buddy Boost (2 people)",
    nameEs: "Impulso en Pareja (2 personas)",
    price: "320.00",
    duration: "P1M",
    description:
      "Perfect for couples, friends, or partners who want to learn and practice together.",
    descriptionEs:
      "Perfecto para parejas o amigos que quieren aprender y practicar juntos.",
  },
];

const faqEn = [
  [
    "How much do Spanish classes cost in Bocas del Toro?",
    "Spanish classes at Be Languages start at $125 for a 1-week crash course (5 hours). A 3-week Island Flow Plan is $150 (6 hours) and a full month Steady Surf Plan is $180 (8 hours). Buddy sessions for 2 people are $320/month.",
  ],
  [
    "Do you offer online Spanish or English classes?",
    "Yes! Be Languages offers both in-person and online classes. Online sessions are available for students anywhere in Panama or abroad who are not in Bocas del Toro or prefer to learn from home.",
  ],
  [
    "What certified translation services do you offer in Panama?",
    "Be Languages provides certified English-Spanish translations for legal documents, academic papers, personal documents, immigration files, medical records, and business materials. Prices start at $15 per page. Typical turnaround is 2–3 business days.",
  ],
  [
    "Are classes available for complete beginners?",
    "Absolutely. Classes are tailored to every level, from complete beginners to advanced speakers. Each program is personalized based on your goals, current level, and learning style.",
  ],
  [
    "Where are the language classes held in Bocas del Toro?",
    "Classes take place on Isla Colón in Bocas del Toro, Panama. Sessions can be held at a location of your choice — café, home, or outdoors — or online via video call.",
  ],
];

const faqEs = [
  [
    "¿Cuánto cuestan las clases de español en Bocas del Toro?",
    "Las clases de español de Be Languages comienzan en $125 por un curso intensivo de 1 semana (5 horas). El Plan Flujo Isleño de 3 semanas cuesta $150 (6 horas) y el Plan Surf Constante de un mes cuesta $180 (8 horas). Las sesiones para 2 personas cuestan $320 al mes.",
  ],
  [
    "¿Ofrecen clases de español o inglés en línea?",
    "Sí. Be Languages ofrece clases presenciales y en línea. Las sesiones en línea están disponibles para estudiantes en cualquier parte de Panamá o del mundo que no estén en Bocas del Toro o prefieran aprender desde casa.",
  ],
  [
    "¿Qué servicios de traducción certificada ofrecen en Panamá?",
    "Be Languages ofrece traducciones certificadas inglés-español de documentos legales, académicos, personales, de inmigración, registros médicos y materiales comerciales. Los precios comienzan en $15 por página. El plazo habitual es de 2 a 3 días hábiles.",
  ],
  [
    "¿Hay clases para principiantes absolutos?",
    "Por supuesto. Las clases se adaptan a todos los niveles, desde principiantes hasta avanzados. Cada programa se personaliza según tus objetivos, tu nivel y tu forma de aprender.",
  ],
  [
    "¿Dónde se dan las clases de idiomas en Bocas del Toro?",
    "Las clases se dan en Isla Colón, Bocas del Toro, Panamá. Las sesiones pueden ser en el lugar que elijas (café, casa o al aire libre) o en línea por videollamada.",
  ],
];

function buildSchemas(isEs, isHome) {
  const offers = pricingPlans.map((plan) => ({
    "@type": "Offer",
    name: isEs ? plan.nameEs : plan.name,
    description: isEs ? plan.descriptionEs : plan.description,
    price: plan.price,
    priceCurrency: "USD",
    eligibleDuration: plan.duration,
  }));

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LanguageSchool"],
    "@id": `${SITE}/#school`,
    name: "Be Languages",
    description: isEs
      ? "Clases personalizadas de inglés y español y servicios de traducción certificada en Bocas del Toro, Panamá. Clases presenciales en Isla Colón y en línea para todo Panamá."
      : "Personalized English and Spanish classes and certified translation services in Bocas del Toro, Panama. In-person on Isla Colón and online across Panama.",
    url: SITE,
    logo: `${SITE}/logoNoir.png`,
    image: `${SITE}/mimitimbi.jpeg`,
    telephone: "+507 6613-5652",
    email: "be.languages.pa@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Isla Colón",
      addressLocality: "Bocas del Toro",
      addressRegion: "Bocas del Toro",
      addressCountry: "PA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.3405,
      longitude: -82.2405,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Bocas del Toro" },
      { "@type": "Country", name: "Panama" },
    ],
    knowsLanguage: ["en", "es"],
    sameAs: ["https://www.instagram.com/be.languages/"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    makesOffer: offers,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: "Be Languages",
    url: SITE,
    inLanguage: ["en", "es"],
    publisher: { "@id": `${SITE}/#school` },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: isEs ? "es" : "en",
    mainEntity: (isEs ? faqEs : faqEn).map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEs ? "Clases de Español" : "Spanish Language Classes",
      description: isEs
        ? "Clases personalizadas de español para todos los niveles en Bocas del Toro, Panamá, y en línea. Ideales para expatriados, nómadas digitales y viajeros."
        : "Personalized Spanish classes for all levels in Bocas del Toro, Panama, and online. Ideal for expats, digital nomads, and travelers.",
      provider: { "@id": `${SITE}/#school` },
      areaServed: { "@type": "Country", name: "Panama" },
      offers,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEs ? "Clases de Inglés" : "English Language Classes",
      description: isEs
        ? "Clases personalizadas de inglés para todos los niveles en Bocas del Toro, Panamá, y en línea. Perfectas para locales, expatriados y profesionales."
        : "Personalized English classes for all levels in Bocas del Toro, Panama, and online. Perfect for locals, expats, and professionals.",
      provider: { "@id": `${SITE}/#school` },
      areaServed: { "@type": "Country", name: "Panama" },
      offers,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEs ? "Traducción Certificada" : "Certified Translation Services",
      description: isEs
        ? "Traducción certificada inglés-español de documentos legales, académicos, médicos y personales en Panamá."
        : "Professional certified English-Spanish translation services for legal, academic, medical, and personal documents in Panama.",
      provider: { "@id": `${SITE}/#school` },
      areaServed: { "@type": "Country", name: "Panama" },
    },
  ];

  return [website, localBusiness, ...(isHome ? [faq] : []), ...services];
}

export default function SiteSchemas() {
  const pathname = usePathname() || "/";
  const isEs = pathname === "/es" || pathname.startsWith("/es/");

  const isHome = pathname === "/" || pathname === "/es";

  return buildSchemas(isEs, isHome).map((schema, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
