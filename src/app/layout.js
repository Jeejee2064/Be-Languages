
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { headers } from "next/headers";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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

// JSON-LD schemas
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LanguageSchool",
  "@id": "https://www.be-languages.com/#school",
  name: "Be Languages",
  description:
    "Personalized English and Spanish classes and certified translation services in Bocas del Toro, Panama.",
  url: "https://www.be-languages.com",
  logo: "https://www.be-languages.com/logoNoir.png",
  image: "https://www.be-languages.com/mimitimbi.jpeg",
  telephone: "+507 6613-5652",
  email: "be.languages.pa@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Isla Colón",
    addressLocality: "Bocas del Toro",
    addressCountry: "PA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.3405,
    longitude: -82.2405,
  },
  sameAs: [
    "https://www.instagram.com/be.languages/",
    // add facebook if you have it
  ],
  priceRange: "$$",
};

// Services generated from your pricingPlans
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

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Language Classes & Certified Translation",
  provider: {
    "@type": "LanguageSchool",
    name: "Be Languages",
    url: "https://www.be-languages.com",
  },
  offers: pricingPlans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: plan.description,
    price: plan.price,
    priceCurrency: plan.currency,
    eligibleDuration: {
      "@type": "Duration",
      iso8601Duration: plan.duration, // ISO 8601 format
    },
  })),
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="ld-services"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}