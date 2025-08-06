export const metadata = {
  title: 'Clases de Inglés en Bocas del Toro | BE Language Solutions',
  description: 'Aprende inglés con una instructora certificada en Bocas del Toro, Panamá. Perfecto para locales, expatriados y viajeros que quieren mejorar su inglés para trabajo, viajes o crecimiento personal.',
  keywords: [
    'clases de inglés Bocas del Toro',
    'lecciones de inglés Panamá',
    'profesor de inglés Caribe',
    'inglés conversacional',
    'inglés para locales',
    'clases de inglés expatriados',
    'inglés para viajeros',
    'instructora certificada de inglés',
    'gramática inglesa',
    'vocabulario inglés práctico',
    'profesora de inglés',
    'inglés negocios',
    'inglés académico',
    'inglés Isla Colón',
    'aprender inglés Panamá'
  ],
  authors: [{ name: 'BE Language Solutions' }],
  creator: 'BE Language Solutions',
  publisher: 'BE Language Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://be-languages.com'),
  alternates: {
    canonical: '/es/clases-de-ingles-en-isla-colon-bocas-del-toro',
    languages: {
      'en': '/english-classes-in-isla-colon-bocas-del-toro',
      'es': '/es/clases-de-ingles-en-isla-colon-bocas-del-toro'
    }
  },
  openGraph: {
    title: 'Clases de Inglés en Bocas del Toro | BE Language Solutions',
    description: 'Aprende inglés con una instructora certificada en el corazón del Caribe. Perfecto para locales, expatriados y viajeros que quieren mejorar su inglés para trabajo, viajes o crecimiento personal.',
    url: '/es/clases-de-ingles-en-isla-colon-bocas-del-toro',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 800,
        alt: 'BE Language Solutions - Clases de Inglés en Bocas del Toro',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Clases de Inglés en Bocas del Toro | BE Language Solutions',
    description: 'Aprende inglés con una instructora certificada en el corazón del Caribe. Mejora tu inglés para trabajo, viajes y crecimiento personal.',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD structured data for English language classes (Spanish version)
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'BE Language Solutions',
  description: 'Clases de inglés en Bocas del Toro, Panamá',
  url: 'https://be-languages.com/es/clases-de-ingles-en-isla-colon-bocas-del-toro',
  logo: 'https://be-languages.com/logo.svg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bocas del Toro',
    addressCountry: 'PA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+507-6613-5652',
    contactType: 'customer service',
    areaServed: 'PA',
    availableLanguage: ['Spanish', 'English']
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Curso Intensivo de 1 Semana',
      price: '125',
      priceCurrency: 'USD',
      description: 'Curso intensivo de inglés para viajeros y expatriados',
    },
    {
      '@type': 'Offer',
      name: 'Plan Flujo Isleño',
      price: '150',
      priceCurrency: 'USD',
      description: 'Curso de inglés de 3 semanas para aprendizaje constante',
    },
    {
      '@type': 'Offer',
      name: 'Plan Surf Constante',
      price: '180',
      priceCurrency: 'USD',
      description: 'Curso mensual de inglés para progreso constante',
    },
    {
      '@type': 'Offer',
      name: 'Impulso en Pareja',
      price: '320',
      priceCurrency: 'USD',
      description: 'Clases de inglés para parejas y amigos',
    },
  ],
  teaches: [
    'Inglés Conversacional',
    'Gramática Inglesa',
    'Inglés de Negocios',
    'Inglés para Viajeros',
    'Inglés Académico'
  ],
  inLanguage: 'es'
}


export default function ClasesENLayout({ children }) {
  return <>{children}</>;
}