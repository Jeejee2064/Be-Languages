import Script from 'next/script'

export const metadata = {
  title: 'Clases de Inglés en Bocas del Toro | Clases Privadas | Be Languages',
  description: 'Clases de inglés en Bocas del Toro, Panamá. Instructora certificada, lecciones personalizadas para locales, expatriados y profesionales. Todos los niveles, presencial u online.',
  keywords: [
    'clases de inglés Bocas del Toro',
    'clases de inglés Panamá',
    'aprender inglés Bocas del Toro',
    'clases de inglés Isla Colón',
    'profesor de inglés Bocas del Toro',
    'clases privadas de inglés Panamá',
    'inglés conversacional Panamá',
    'aprender inglés Panamá',
    'curso de inglés Bocas del Toro',
    'inglés para locales Panamá',
    'inglés para el trabajo Panamá',
    'inglés de negocios Panamá',
    'clases de inglés expatriados',
    'instructor de inglés certificado Panamá',
    'clases de inglés baratas Panamá',
    'clases de inglés online Panamá',
    'clases de inglés por internet Panamá',
    'aprender inglés online Panamá',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: {
    canonical: '/es/clases-de-ingles-en-isla-colon-bocas-del-toro',
    languages: {
      en: '/english-classes-in-isla-colon-bocas-del-toro',
      es: '/es/clases-de-ingles-en-isla-colon-bocas-del-toro',
      'x-default': '/english-classes-in-isla-colon-bocas-del-toro',
    },
  },
  openGraph: {
    title: 'Clases de Inglés en Bocas del Toro | Clases Privadas | Be Languages',
    description: 'Instructora certificada, lecciones de inglés personalizadas para locales, expatriados y profesionales en Bocas del Toro. Todos los niveles, presencial u online.',
    url: '/es/clases-de-ingles-en-isla-colon-bocas-del-toro',
    siteName: 'Be Languages',
    images: [{ url: '/logoNoir.png', width: 1200, height: 1200, alt: 'Clases de Inglés en Bocas del Toro - Be Languages' }],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clases de Inglés en Bocas del Toro | Be Languages',
    description: 'Clases de inglés en Bocas del Toro con instructora certificada. Lecciones personalizadas para locales, expatriados y profesionales. Todos los niveles bienvenidos.',
    images: ['/logoNoir.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.be-languages.com/es' },
    { '@type': 'ListItem', position: 2, name: 'Clases de Inglés en Bocas del Toro', item: 'https://www.be-languages.com/es/clases-de-ingles-en-isla-colon-bocas-del-toro' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Clases de Inglés en Bocas del Toro',
  description: 'Clases privadas de inglés con instructora certificada en Bocas del Toro, Panamá. Para locales, expatriados y profesionales de todos los niveles.',
  url: 'https://www.be-languages.com/es/clases-de-ingles-en-isla-colon-bocas-del-toro',
  provider: { '@id': 'https://www.be-languages.com/#school' },
  areaServed: { '@type': 'Place', name: 'Bocas del Toro, Panamá' },
  serviceType: 'Clases de Inglés',
  inLanguage: 'en',
  offers: [
    { '@type': 'Offer', name: 'Curso Intensivo de 1 Semana', price: '125', priceCurrency: 'USD', description: 'Curso intensivo de inglés de 5 horas para viajeros y expatriados' },
    { '@type': 'Offer', name: 'Plan Flujo Isleño', price: '150', priceCurrency: 'USD', description: 'Curso de inglés de 3 semanas y 6 horas para aprendizaje constante' },
    { '@type': 'Offer', name: 'Plan Surf Constante', price: '180', priceCurrency: 'USD', description: 'Curso mensual de inglés de 8 horas para progreso constante' },
    { '@type': 'Offer', name: 'Impulso en Pareja (2 personas)', price: '320', priceCurrency: 'USD', description: 'Curso mensual de inglés compartido para parejas o amigos' },
  ],
}

export default function ClasesENLayout({ children }) {
  return (
    <>
      <Script id="breadcrumb-clases-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="service-clases-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
