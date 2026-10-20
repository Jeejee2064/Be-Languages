import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppButton from "./components/WhatsAppButton";
import LocaleHtml from "./components/LocaleHtml";
import SiteSchemas from "./components/SiteSchemas";
const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});


export const metadata = {
  title: "Spanish & English Classes in Bocas del Toro & Panama | Be Languages",
  description:
    "Private Spanish and English classes in Bocas del Toro and online across Panama, plus certified document translation. Book on WhatsApp.",
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

export default function RootLayout({ children }) {
  return (
    <LocaleHtml>
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <SiteSchemas />
        <Analytics />
        <WhatsAppButton />
        {children}
      </body>
    </LocaleHtml>
  );
}
