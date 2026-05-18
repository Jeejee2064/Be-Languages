export const metadata = {
  title: "Certified Translation Services in Isla Colón, Bocas del Toro | BE Language Solutions",
  description:
    "Get professional, certified English-Spanish translations in Isla Colón, Bocas del Toro. Legal, medical, academic, and personal documents translated with accuracy and speed.",
  keywords: [
    "certified translation Bocas",
    "Isla Colón translations",
    "Bocas del Toro translation services",
    "English to Spanish translator Panama",
    "legal document translation Bocas del Toro",
    "translation Isla Colón",
    "official translation services Panama Bocas del Toro",
    "academic translation Bocas del Toro",
    "medical translation Panama Bocas del Toro",
    "BE Language Solutions"
  ],
  authors: [{ name: 'BE Language Solutions' }],
  creator: 'BE Language Solutions',
  publisher: 'BE Language Solutions',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: {
    canonical: '/certified-translation-services-in-isla-colon-bocas-del-toro',
    languages: {
      en: '/certified-translation-services-in-isla-colon-bocas-del-toro',
      es: '/es/traducciones-certificadas-en-bocas-del-toro',
      'x-default': '/certified-translation-services-in-isla-colon-bocas-del-toro',
    },
  },
  openGraph: {
    title: "Certified Translation Services in Isla Colón, Bocas del Toro",
    description:
      "Accurate and certified English-Spanish translation services for legal, medical, academic, and business documents. Located in Bocas del Toro, Panama.",
    url: '/certified-translation-services-in-isla-colon-bocas-del-toro',
    type: "website",
    siteName: "BE Language Solutions",
    locale: 'en_US',
    images: [
      {
        url: '/logoNoir.png',
        width: 1200,
        height: 1200,
        alt: "BE Language Solutions Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Translation Services in Isla Colón, Bocas del Toro",
    description:
      "Certified translations between English and Spanish in Bocas del Toro. Trusted for legal, personal, and official documents.",
    images: ['/logoNoir.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function CertifiedTranslationLayout({ children }) {
  return <>{children}</>;
}
