
export const metadata = {
  title: 'Servicios de Traducción Certificada en Panamá | BE Language Solutions',
  description: 'Traducciones profesionales, precisas y legalmente reconocidas entre inglés y español. Certificadas para documentos oficiales, legales, médicos y académicos en Bocas del Toro.',
  keywords: [
    'traducción certificada Panamá',
    'servicios de traducción Bocas del Toro',
    'traductor certificado español inglés',
    'traducción legal Panamá',
    'traducción médica',
    'traducción académica',
    'documentos oficiales traducción',
    'traducción judicial',
    'traducción inmigración',
    'traductor oficial Panamá',
    'traducción empresarial',
    'traducción técnica',
    'servicios traducción Caribe',
    'traductor profesional',
    'traducción notarizada'
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
    canonical: '/es/servicios-de-traduccion-certificada-bocas-del-toro',
    languages: {
      'en': '/certified-translation-services-bocas-del-toro',
      'es': '/es/traducciones-certificadas-en-bocas-del-toro'
    }
  },
  openGraph: {
    title: 'Servicios de Traducción Certificada en Panamá | BE Language Solutions',
    description: 'Traducciones profesionales, precisas y legalmente reconocidas entre inglés y español. Confiado por individuos, empresas y profesionales legales para documentos oficiales.',
    url: '/es/traducciones-certificadas-en-bocas-del-toro',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 800,
        alt: 'BE Language Solutions - Servicios de Traducción Certificada',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Servicios de Traducción Certificada en Panamá | BE Language Solutions',
    description: 'Traducciones profesionales certificadas entre inglés y español. Documentos legales, médicos y académicos reconocidos oficialmente.',
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

// JSON-LD structured data for translation services (Spanish version)
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://be-languages.com/es/traducciones-certificadas-en-bocas-del-toro',
  name: 'BE Language Solutions - Servicios de Traducción',
  description: 'Servicios de traducción certificada entre inglés y español en Bocas del Toro, Panamá',
  url: 'https://be-languages.com/es/traducciones-certificadas-en-bocas-del-toro',
  logo: 'https://be-languages.com/logo.svg',
  image: 'https://be-languages.com/logo.svg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bocas del Toro',
    addressCountry: 'PA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '9.3404',
    longitude: '-82.2330'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+507-6613-5652',
    contactType: 'customer service',
    areaServed: 'PA',
    availableLanguage: ['Spanish', 'English'],
    serviceType: 'Servicios de Traducción Certificada'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00'
  },
  priceRange: '$15-$30',
  currenciesAccepted: 'USD',
  paymentAccepted: ['Cash', 'Bank Transfer', 'Yappy'],
  serviceArea: {
    '@type': 'Place',
    name: 'Bocas del Toro, Panama'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Traducción',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Traducción Estándar',
          description: 'Traducción certificada para documentos personales y certificados'
        },
        price: '15',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '15',
          priceCurrency: 'USD',
          unitText: 'por página'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Traducción Legal',
          description: 'Traducción especializada para documentos legales y contratos'
        },
        price: '25',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '25',
          priceCurrency: 'USD',
          unitText: 'por página'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Traducción Técnica/Médica',
          description: 'Traducción experta para registros médicos y documentos técnicos'
        },
        price: '30',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '30',
          priceCurrency: 'USD',
          unitText: 'por página'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1'
  },
  inLanguage: ['es', 'en']
}


export default function ClasesESLayout({ children }) {
  return <>{children}</>;
}