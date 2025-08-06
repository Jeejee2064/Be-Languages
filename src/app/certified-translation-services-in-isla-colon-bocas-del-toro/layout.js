// app/certified-translation-services-in-isla-colon-bocas-del-toro/layout.js

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
    language: "en",

  openGraph: {
    title: "Certified Translation Services in Isla Colón, Bocas del Toro",
    description:
      "Accurate and certified English-Spanish translation services for legal, medical, academic, and business documents. Located in Bocas del Toro, Panama.",
    url: "https://be-languages.com/certified-translation-services-in-isla-colon-bocas-del-toro",
    type: "website",
    siteName: "BE Language Solutions",
    images: [
      {
        url: "https://be-languages.com/logo.svg", // Using logo as OG image (you can replace with a custom image later)
        width: 512,
        height: 512,
        alt: "BE Language Solutions Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Translation Services in Isla Colón, Bocas del Toro",
    description:
      "Certified translations between English and Spanish in Bocas del Toro. Trusted for legal, personal, and official documents.",
    images: ["https://be-languages.com/logo.svg"],
  },
  alternates: {
    canonical: "https://be-languages.com/certified-translation-services-in-isla-colon-bocas-del-toro",
  },
};

export default function CertifiedTranslationLayout({ children }) {
  return <>{children}</>;
}
