import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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
  description: "Personalized English and Spanish classes in Bocas del Toro, Panama. Certified translation services for documents and interpretation.",
  keywords: [
    'English classes Bocas del Toro',
    'Spanish classes Bocas del Toro',
    'Learn English Panama',
    'Learn Spanish Panama',
    'Language school Bocas del Toro',
    'Certified translator Panama',
    'Document translation services',
    'Language immersion Panama',
    'Private language lessons',
    'Bilingual education Bocas del Toro'
  ],
  authors: [{ name: "Be Languages", url: "https://be-languages.com" }],
  creator: "JdwApps",
  publisher: "JdwApps",
  metadataBase: new URL("https://be-languages.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en': '/en',
      'es': '/es',
    },
  },
  openGraph: {
    title: "Be Languages | English & Spanish Classes in Bocas del Toro",
    description: "Professional language classes and translation services in Bocas del Toro, Panama",
    url: "https://be-languages.com",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <Analytics />

        {children}
      </body>
    </html>
  );
}