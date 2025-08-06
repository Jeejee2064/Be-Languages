export const metadata = {
  title: 'Clases de Español en Bocas del Toro | BE Language Solutions',
  description: 'Aprende español con una instructora local certificada en Bocas del Toro, Panamá. Perfecto para expatriados, nómadas digitales y viajeros que quieren conectar con la cultura panameña.',
  keywords: [
    'clases de español Bocas del Toro',
    'lecciones de español Panamá',
    'profesor de español Caribe',
    'español conversacional',
    'español panameño',
    'clases de español expatriados',
    'español para viajeros',
    'instructora certificada de español',
    'gramática española',
    'vocabulario español práctico',
    'profesora local de español',
    'español nómadas digitales',
    'cultura panameña idioma',
    'español Isla Colón'
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
    canonical: '/es/clases-de-espanol-en-isla-colon-bocas-del-toro',
    languages: {
      'en': '/spanish-classes-in-isla-colon-bocas-del-toro',
      'es': '/es/clases-de-espanol-en-isla-colon-bocas-del-toro'
    }
  },
  openGraph: {
    title: 'Clases de Español en Bocas del Toro | BE Language Solutions',
    description: 'Aprende español con una instructora local certificada en el corazón del Caribe. Perfecto para expatriados, nómadas digitales y viajeros que quieren conectar con la cultura y la gente de Panamá.',
    url: '/es/clases-de-espanol-en-isla-colon-bocas-del-toro',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 800,
        alt: 'BE Language Solutions - Clases de Español en Bocas del Toro',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Clases de Español en Bocas del Toro | BE Language Solutions',
    description: 'Aprende español con una instructora local certificada en el corazón del Caribe. Conecta con la cultura panameña a través de lecciones personalizadas.',
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

// JSON-LD structured data for Spanish language classes (Spanish version)
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'BE Language Solutions',
  description: 'Clases de español en Bocas del Toro, Panamá',
  url: 'https://be-languages.com/es/clases-de-espanol-en-isla-colon-bocas-del-toro',
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
      description: 'Curso intensivo de español para viajeros y expatriados',
    },
    {
      '@type': 'Offer',
      name: 'Plan Flujo de Isla',
      price: '150',
      priceCurrency: 'USD',
      description: 'Curso de español de 3 semanas para aprendizaje constante',
    },
    {
      '@type': 'Offer',
      name: 'Plan Surf Constante',
      price: '180',
      priceCurrency: 'USD',
      description: 'Curso mensual de español para progreso constante',
    },
    {
      '@type': 'Offer',
      name: 'Impulso en Pareja',
      price: '320',
      priceCurrency: 'USD',
      description: 'Clases de español para parejas y amigos',
    },
  ],
  teaches: [
    'Español Conversacional',
    'Gramática Española',
    'Cultura Panameña',
    'Español para Viajeros',
    'Español de Negocios'
  ],
  inLanguage: 'es'
}


export default function ClasesESLayout({ children }) {
  return <>{children}</>;
}
