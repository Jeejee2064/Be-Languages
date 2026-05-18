import Script from 'next/script'

export const metadata = {
  title: 'Traducciones Certificadas en Bocas del Toro | Inglés-Español | Be Languages',
  description: 'Traducciones certificadas inglés-español en Bocas del Toro, Panamá. Documentos legales, académicos, médicos y de inmigración. Entrega rápida para uso oficial en Panamá y el extranjero.',
  keywords: [
    'traducciones certificadas Bocas del Toro',
    'traducciones certificadas Panamá',
    'traducción inglés español Panamá',
    'traductora certificada Bocas del Toro',
    'traducción legal Panamá',
    'traducción documentos oficiales Panamá',
    'traducción académica Panamá',
    'traducción médica Panamá',
    'traducción inmigración Panamá',
    'traducción notariada Panamá',
    'servicios de traducción Bocas del Toro',
    'traductor profesional Isla Colón',
    'traducción certificada Isla Colón',
    'traducción rápida Panamá',
    'traducción barata Panamá',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: {
    canonical: '/es/traducciones-certificadas-en-bocas-del-toro',
    languages: {
      en: '/certified-translation-services-in-isla-colon-bocas-del-toro',
      es: '/es/traducciones-certificadas-en-bocas-del-toro',
      'x-default': '/certified-translation-services-in-isla-colon-bocas-del-toro',
    },
  },
  openGraph: {
    title: 'Traducciones Certificadas en Bocas del Toro | Inglés-Español | Be Languages',
    description: 'Traducciones certificadas profesionales en Bocas del Toro. Documentos legales, académicos, médicos y de inmigración. Entrega rápida para uso oficial en Panamá y el extranjero.',
    url: '/es/traducciones-certificadas-en-bocas-del-toro',
    siteName: 'Be Languages',
    images: [{ url: '/logoNoir.png', width: 1200, height: 1200, alt: 'Traducciones Certificadas Bocas del Toro - Be Languages' }],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traducciones Certificadas Bocas del Toro | Be Languages',
    description: 'Traducciones certificadas inglés-español en Bocas del Toro. Documentos legales, académicos, médicos y personales. Entrega rápida.',
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
    { '@type': 'ListItem', position: 2, name: 'Traducciones Certificadas en Bocas del Toro', item: 'https://www.be-languages.com/es/traducciones-certificadas-en-bocas-del-toro' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Traducciones Certificadas en Bocas del Toro',
  description: 'Servicio de traducciones certificadas inglés-español para documentos legales, académicos, médicos, de inmigración y personales en Bocas del Toro, Panamá.',
  url: 'https://www.be-languages.com/es/traducciones-certificadas-en-bocas-del-toro',
  provider: { '@id': 'https://www.be-languages.com/#school' },
  areaServed: { '@type': 'Place', name: 'Panamá' },
  serviceType: 'Traducción Certificada',
  offers: [
    { '@type': 'Offer', name: 'Traducción Estándar', price: '15', priceCurrency: 'USD', description: 'Traducción certificada para documentos personales y certificados, por página' },
    { '@type': 'Offer', name: 'Traducción Legal', price: '25', priceCurrency: 'USD', description: 'Traducción certificada para documentos legales y contratos, por página' },
    { '@type': 'Offer', name: 'Traducción Técnica / Médica', price: '30', priceCurrency: 'USD', description: 'Traducción experta para registros médicos y documentos técnicos, por página' },
  ],
}

export default function TraduccionesLayout({ children }) {
  return (
    <>
      <Script id="breadcrumb-traducciones" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="service-traducciones" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
