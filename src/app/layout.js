import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import WhatsAppButton from "./components/WhatsAppButton";
const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Be Languages | English and Spanish Classes in Bocas del Toro",
  description:
    "Personalized English and Spanish classes in Bocas del Toro, Panama. Certified translation services for documents.",
  keywords: [
    "English classes Bocas del Toro",
    "Spanish classes Bocas del Toro",
    "Learn English Panama",
    "Learn Spanish Panama",
    "Language school Bocas del Toro",
    "Certified translator Panama",
    "Document translation services",
    "Language immersion Panama",
    "Private language lessons",
    "Bilingual education Bocas del Toro",
  ],
  authors: [{ name: "Be Languages", url: "https://www.be-languages.com" }],
  creator: "JdwApps",
  publisher: "JdwApps",
  metadataBase: new URL("https://www.be-languages.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/", // fallback
    },
  },
  openGraph: {
    title: "Be Languages | English & Spanish Classes in Bocas del Toro",
    description:
      "Professional language classes and translation services in Bocas del Toro, Panama",
    url: "https://www.be-languages.com",
    siteName: "Be Languages",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logoNoir.png",
        width: 1200,
        height: 1200,
        alt: "Be Languages logo",
      },
    ],
    alternateLocales: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Be Languages | Language Classes in Bocas del Toro",
    description: "Learn English or Spanish in Bocas del Toro",
    images: ["/logoNoir.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "0f2UiCTfcnKEtuEmpPWoCaGz-DPeVDNYZ3ej5mX18iA",
  },
};

// Define pricingPlans first
const pricingPlans = [
  {
    name: "1 Week Crash Course",
    price: "125.00",
    currency: "USD",
    duration: "P1W",
    description:
      "Ideal for travelers and expats who want to improve basic conversation rapidly.",
  },
  {
    name: "Island Flow Plan",
    price: "150.00",
    currency: "USD",
    duration: "P3W",
    description:
      "Perfect for visitors staying a few weeks, consistent, stress-free Spanish improvement.",
  },
  {
    name: "Steady Surf Plan",
    price: "180.00",
    currency: "USD",
    duration: "P1M",
    description:
      "Ideal for expats, digital nomads or long term visitors ready to progress steadily.",
  },
  {
    name: "Buddy Boost (2 people)",
    price: "320.00",
    currency: "USD",
    duration: "P1M",
    description:
      "Perfect for couples, friends, or partners who want to learn and practice together.",
  },
];

// JSON-LD schemas
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "LanguageSchool"],
  "@id": "https://www.be-languages.com/#school",
  "name": "Be Languages",
  "description": "Personalized English and Spanish classes and certified translation services in Bocas del Toro, Panama.",
  "url": "https://www.be-languages.com",
  "logo": "https://www.be-languages.com/logoNoir.png",
  "image": "https://www.be-languages.com/mimitimbi.jpeg",
  "telephone": "+507 6613-5652",
  "email": "be.languages.pa@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Isla Colón",
    "addressLocality": "Bocas del Toro",
    "addressCountry": "PA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.3405,
    "longitude": -82.2405
  },
  "sameAs": [
    "https://www.instagram.com/be.languages/"
  ],
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "18:00" }
  ],
  "priceRange": "$$",
  "makesOffer": pricingPlans.map(plan => ({
    "@type": "Offer",
    "name": plan.name,
    "description": plan.description,
    "price": plan.price,
    "priceCurrency": plan.currency,
    "eligibleDuration": plan.duration
  }))
};

// WebSite schema (enables sitelinks in Google)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.be-languages.com/#website",
  "name": "Be Languages",
  "url": "https://www.be-languages.com",
  "inLanguage": ["en", "es"],
  "publisher": {
    "@id": "https://www.be-languages.com/#school"
  }
};

// FAQ schema (triggers rich snippets in Google search results)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do Spanish classes cost in Bocas del Toro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spanish classes at Be Languages start at $125 for a 1-week crash course (5 hours). A 3-week Island Flow Plan is $150 (6 hours) and a full month Steady Surf Plan is $180 (8 hours). Buddy sessions for 2 people are $320/month."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer online Spanish or English classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Be Languages offers both in-person and online classes. Online sessions are available for students who are not in Bocas del Toro or prefer to learn from home."
      }
    },
    {
      "@type": "Question",
      "name": "What certified translation services do you offer in Panama?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Be Languages provides certified English-Spanish translations for legal documents, academic papers, personal documents, immigration files, medical records, and business materials. Prices start at $15 per page. Typical turnaround is 2–3 business days."
      }
    },
    {
      "@type": "Question",
      "name": "Are classes available for complete beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Classes are tailored to every level, from complete beginners to advanced speakers. Each program is personalized based on your goals, current level, and learning style."
      }
    },
    {
      "@type": "Question",
      "name": "Where are the language classes held in Bocas del Toro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Classes take place on Isla Colón in Bocas del Toro, Panama. Sessions can be held at a location of your choice — café, home, or outdoors — or online via video call."
      }
    }
  ]
};

// Service schemas
const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Spanish Language Classes",
    "description": "Personalized Spanish classes for all levels in Bocas del Toro, Panama. Ideal for expats, digital nomads, and travelers.",
    "provider": { "@id": "https://www.be-languages.com/#school" },
    "areaServed": { "@type": "Place", "name": "Bocas del Toro, Panama" },
    "offers": pricingPlans.map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "description": plan.description,
      "price": plan.price,
      "priceCurrency": plan.currency,
      "eligibleDuration": plan.duration
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "English Language Classes",
    "description": "Personalized English classes for all levels in Bocas del Toro, Panama. Perfect for locals, expats, and professionals.",
    "provider": { "@id": "https://www.be-languages.com/#school" },
    "areaServed": { "@type": "Place", "name": "Bocas del Toro, Panama" },
    "offers": pricingPlans.map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "description": plan.description,
      "price": plan.price,
      "priceCurrency": plan.currency,
      "eligibleDuration": plan.duration
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Certified Translation Services",
    "description": "Professional certified English-Spanish translation services for legal, academic, medical, and personal documents in Panama.",
    "provider": { "@id": "https://www.be-languages.com/#school" },
    "areaServed": { "@type": "Place", "name": "Panama" }
  }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="structured-data-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="structured-data-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          id="structured-data-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </head>
      <body className={`${inter.variable}`}>
        <Analytics />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}