import "../globals.css";


export const metadata = {
  title: "Be Languages | Clases de Inglés y Español en Bocas del Toro",
  description: "Clases personalizadas de inglés y español en Bocas del Toro, Panamá. Servicios de traducción certificada para documentos.",
  keywords: [
    'Clases de inglés Bocas del Toro',
    'Clases de español Bocas del Toro',
    'Aprender inglés Panamá',
    'Aprender español Panamá',
    'Escuela de idiomas Bocas del Toro',
    'Traductor certificado Panamá',
    'Servicios de traducción de documentos',
    'Inmersión de idiomas Panamá',
    'Clases privadas de idiomas',
    'Educación bilingüe Bocas del Toro'
  ],
  authors: [{ name: "Be Languages", url: "https://be-languages.com" }],
  creator: "JdwApps",
  publisher: "JdwApps",
  metadataBase: new URL("https://be-languages.com"),
  alternates: {
    canonical: "/es", // Changed from "/" to self-reference Spanish version
    languages: {
      'en': '/',      // English version
      'es': '/es',    // Self-reference for Spanish
      'x-default': '/es', // Fallback for Spanish as primary
    },
  },
  openGraph: {
    title: "Be Languages | Clases de Inglés y Español en Bocas del Toro",
    description: "Clases profesionales de idiomas y servicios de traducción en Bocas del Toro, Panamá",
    url: "https://be-languages.com/es", // Full URL to Spanish version
    siteName: "Be Languages",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/logoNoir.png",
        width: 1200,
        height: 1200,
        alt: "Logo de Be Languages",
      },
    ],
    alternateLocales: ['en_US'], // Reference English version
  },
  twitter: {
    card: "summary_large_image",
    title: "Be Languages | Clases de Idiomas en Bocas del Toro",
    description: "Aprende inglés o español en Bocas del Toro",
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function ESLayout({ children }) {
  return (
    <html lang="es">
      <body
      >
       

        {children}
      </body>
    </html>
  );
}