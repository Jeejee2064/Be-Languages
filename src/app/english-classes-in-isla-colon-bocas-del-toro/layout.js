import Script from 'next/script'

export const metadata = {
  title: 'English Classes in Bocas del Toro | Private Lessons | Be Languages',
  description: 'English classes in Bocas del Toro, Panama. Certified instructor, personalized lessons for locals, expats & professionals. All levels welcome, in-person or online.',
  keywords: [
    'English classes Bocas del Toro',
    'English lessons Bocas del Toro',
    'learn English Bocas del Toro',
    'English tutor Bocas del Toro',
    'English lessons Panama',
    'English course Panama',
    'private English classes Panama',
    'conversational English Panama',
    'English for locals Panama',
    'English for work Panama',
    'business English Panama',
    'English tutor Isla Colon',
    'learn English Isla Colon',
    'English classes expats Panama',
    'affordable English classes Panama',
    'online English classes Panama',
    'online English lessons Panama',
    'English classes online Panama',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: {
    canonical: '/english-classes-in-isla-colon-bocas-del-toro',
    languages: {
      en: '/english-classes-in-isla-colon-bocas-del-toro',
      es: '/es/clases-de-ingles-en-isla-colon-bocas-del-toro',
      'x-default': '/english-classes-in-isla-colon-bocas-del-toro',
    },
  },
  openGraph: {
    title: 'English Classes in Bocas del Toro | Private Lessons from $125',
    description: 'Private English lessons with a certified instructor in Bocas del Toro, Panama. Flexible packages for locals, expats & professionals. In-person or online.',
    url: '/english-classes-in-isla-colon-bocas-del-toro',
    siteName: 'Be Languages',
    images: [{ url: '/logoNoir.png', width: 1200, height: 1200, alt: 'English Classes in Bocas del Toro - Be Languages' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'English Classes in Bocas del Toro | Be Languages',
    description: 'English lessons in Bocas del Toro with a certified instructor. Personalized for locals, expats & professionals. All levels welcome.',
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
    { '@type': 'ListItem', position: 2, name: 'English Classes in Bocas del Toro', item: 'https://www.be-languages.com/english-classes-in-isla-colon-bocas-del-toro' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'English Classes in Bocas del Toro',
  description: 'Private English language classes with a certified instructor in Bocas del Toro, Panama. For locals, expats, and professionals of all levels.',
  url: 'https://www.be-languages.com/english-classes-in-isla-colon-bocas-del-toro',
  provider: { '@id': 'https://www.be-languages.com/#school' },
  areaServed: { '@type': 'Place', name: 'Bocas del Toro, Panama' },
  serviceType: 'English Language Instruction',
  inLanguage: 'en',
  offers: [
    { '@type': 'Offer', name: '1 Week Crash Course', price: '125', priceCurrency: 'USD', description: 'Intensive 5-hour English crash course for travelers and expats' },
    { '@type': 'Offer', name: 'Island Flow Plan', price: '150', priceCurrency: 'USD', description: '3-week, 6-hour English course for consistent improvement' },
    { '@type': 'Offer', name: 'Steady Surf Plan', price: '180', priceCurrency: 'USD', description: 'Monthly 8-hour English course for steady progress' },
    { '@type': 'Offer', name: 'Buddy Boost (2 people)', price: '320', priceCurrency: 'USD', description: 'Shared monthly English course for couples or friends' },
  ],
}

export default function EnglishClassesLayout({ children }) {
  return (
    <>
      <Script id="breadcrumb-english" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="service-english" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
