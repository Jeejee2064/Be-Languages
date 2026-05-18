import Script from 'next/script'

export const metadata = {
  title: 'Clases de Español en Bocas del Toro | Clases Privadas | Be Languages',
  description: 'Clases de español en Bocas del Toro, Panamá. Instructora local certificada, lecciones personalizadas para expatriados, nómadas digitales y viajeros. Todos los niveles, presencial u online.',
  keywords: [
    'clases de español Bocas del Toro',
    'clases de español Panamá',
    'aprender español Bocas del Toro',
    'clases de español Isla Colón',
    'profesor de español Bocas del Toro',
    'español para expatriados Panamá',
    'clases privadas de español Panamá',
    'español conversacional Panamá',
    'aprender español Panamá',
    'curso de español Bocas del Toro',
    'español para viajeros Panamá',
    'clases de español nómadas digitales',
    'español panameño clases',
    'instructor de español Isla Colón',
    'clases de español baratas Panamá',
    'clases de español online Panamá',
    'clases de español por internet Panamá',
    'aprender español online Panamá',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: {
    canonical: '/es/clases-de-espanol-en-isla-colon-bocas-del-toro',
    languages: {
      en: '/spanish-classes-in-isla-colon-bocas-del-toro',
      es: '/es/clases-de-espanol-en-isla-colon-bocas-del-toro',
      'x-default': '/spanish-classes-in-isla-colon-bocas-del-toro',
    },
  },
  openGraph: {
    title: 'Clases de Español en Bocas del Toro | Clases Privadas | Be Languages',
    description: 'Instructora local certificada, lecciones de español personalizadas para expatriados, nómadas y viajeros en Bocas del Toro. Todos los niveles, presencial u online.',
    url: '/es/clases-de-espanol-en-isla-colon-bocas-del-toro',
    siteName: 'Be Languages',
    images: [{ url: '/logoNoir.png', width: 1200, height: 1200, alt: 'Clases de Español en Bocas del Toro - Be Languages' }],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clases de Español en Bocas del Toro | Be Languages',
    description: 'Clases de español en Bocas del Toro con instructora local certificada. Lecciones personalizadas para expatriados, nómadas y viajeros. Todos los niveles bienvenidos.',
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
    { '@type': 'ListItem', position: 2, name: 'Clases de Español en Bocas del Toro', item: 'https://www.be-languages.com/es/clases-de-espanol-en-isla-colon-bocas-del-toro' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Clases de Español en Bocas del Toro',
  description: 'Clases privadas de español con instructora local certificada en Bocas del Toro, Panamá. Para todos los niveles, expatriados, nómadas digitales y viajeros.',
  url: 'https://www.be-languages.com/es/clases-de-espanol-en-isla-colon-bocas-del-toro',
  provider: { '@id': 'https://www.be-languages.com/#school' },
  areaServed: { '@type': 'Place', name: 'Bocas del Toro, Panamá' },
  serviceType: 'Clases de Español',
  inLanguage: 'es',
  offers: [
    { '@type': 'Offer', name: 'Curso Intensivo de 1 Semana', price: '125', priceCurrency: 'USD', description: 'Curso intensivo de español de 5 horas para viajeros y expatriados' },
    { '@type': 'Offer', name: 'Plan Flujo Isleño', price: '150', priceCurrency: 'USD', description: 'Curso de español de 3 semanas y 6 horas para aprendizaje constante' },
    { '@type': 'Offer', name: 'Plan Surf Constante', price: '180', priceCurrency: 'USD', description: 'Curso mensual de español de 8 horas para progreso constante' },
    { '@type': 'Offer', name: 'Impulso en Pareja (2 personas)', price: '320', priceCurrency: 'USD', description: 'Curso mensual de español compartido para parejas o amigos' },
  ],
}

export default function ClasesESLayout({ children }) {
  return (
    <>
      <Script id="breadcrumb-clases-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="service-clases-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
