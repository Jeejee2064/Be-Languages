import Script from 'next/script'

export const metadata = {
  title: 'Spanish Classes in Bocas del Toro | Private Lessons | Be Languages',
  description: 'Spanish classes in Bocas del Toro, Panama. Certified local instructor, personalized lessons for expats, digital nomads & travelers. Beginner to advanced, in-person or online.',
  keywords: [
    'Spanish classes Bocas del Toro',
    'Spanish lessons Bocas del Toro',
    'learn Spanish Bocas del Toro',
    'Spanish tutor Bocas del Toro',
    'Spanish course Panama',
    'Spanish lessons Panama',
    'private Spanish classes Panama',
    'conversational Spanish Panama',
    'Panamanian Spanish classes',
    'expat Spanish lessons Panama',
    'digital nomad Spanish class',
    'Spanish for travelers Panama',
    'Isla Colon Spanish lessons',
    'learn Spanish Isla Colon',
    'affordable Spanish classes Panama',
    'online Spanish classes Panama',
    'online Spanish lessons Panama',
    'Spanish classes online Panama',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: {
    canonical: '/spanish-classes-in-isla-colon-bocas-del-toro',
    languages: {
      en: '/spanish-classes-in-isla-colon-bocas-del-toro',
      es: '/es/clases-de-espanol-en-isla-colon-bocas-del-toro',
      'x-default': '/spanish-classes-in-isla-colon-bocas-del-toro',
    },
  },
  openGraph: {
    title: 'Spanish Classes in Bocas del Toro | Private Lessons | Be Languages',
    description: 'Certified local instructor, personalized Spanish lessons for expats, digital nomads & travelers in Bocas del Toro. Beginner to advanced, in-person or online.',
    url: '/spanish-classes-in-isla-colon-bocas-del-toro',
    siteName: 'Be Languages',
    images: [{ url: '/logoNoir.png', width: 1200, height: 1200, alt: 'Spanish Classes in Bocas del Toro - Be Languages' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Classes in Bocas del Toro | Be Languages',
    description: 'Spanish lessons in Bocas del Toro with a certified local instructor. Personalized for expats, nomads & travelers. All levels welcome.',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.be-languages.com' },
    { '@type': 'ListItem', position: 2, name: 'Spanish Classes in Bocas del Toro', item: 'https://www.be-languages.com/spanish-classes-in-isla-colon-bocas-del-toro' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Spanish Classes in Bocas del Toro',
  description: 'Private Spanish language classes with a certified local instructor in Bocas del Toro, Panama. Courses for all levels, from beginners to advanced.',
  url: 'https://www.be-languages.com/spanish-classes-in-isla-colon-bocas-del-toro',
  provider: { '@id': 'https://www.be-languages.com/#school' },
  areaServed: { '@type': 'Place', name: 'Bocas del Toro, Panama' },
  serviceType: 'Spanish Language Instruction',
  inLanguage: 'es',
  offers: [
    { '@type': 'Offer', name: '1 Week Crash Course', price: '125', priceCurrency: 'USD', description: 'Intensive 5-hour Spanish crash course for travelers and expats' },
    { '@type': 'Offer', name: 'Island Flow Plan', price: '150', priceCurrency: 'USD', description: '3-week, 6-hour Spanish course for consistent improvement' },
    { '@type': 'Offer', name: 'Steady Surf Plan', price: '180', priceCurrency: 'USD', description: 'Monthly 8-hour Spanish course for steady progress' },
    { '@type': 'Offer', name: 'Buddy Boost (2 people)', price: '320', priceCurrency: 'USD', description: 'Shared monthly Spanish course for couples or friends' },
  ],
}

export default function SpanishClassesLayout({ children }) {
  return (
    <>
      <Script id="breadcrumb-spanish" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="service-spanish" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
