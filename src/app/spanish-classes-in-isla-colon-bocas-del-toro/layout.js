// app/certified-translation-services-in-isla-colon-bocas-del-toro/layout.js

export const metadata = {
  title: 'Spanish Classes in Bocas del Toro | BE Language Solutions',
  description: 'Learn Spanish with a certified local instructor in Bocas del Toro, Panama. Perfect for expats, digital nomads, and travelers who want to connect with Panamanian culture.',
  keywords: [
    'Spanish classes Bocas del Toro',
    'Spanish lessons Panama',
    'Spanish tutor Caribbean',
    'conversational Spanish',
    'Panamanian Spanish',
    'expat Spanish classes',
    'travel Spanish',
    'certified Spanish instructor',
    'Spanish grammar lessons',
    'practical Spanish vocabulary',
    'local Spanish teacher',
    'digital nomad Spanish',
    'Panama culture language'
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
    canonical: '/spanish-classes-in-isla-colon-bocas-del-toro',
  },
  openGraph: {
    title: 'Spanish Classes in Bocas del Toro | BE Language Solutions',
    description: 'Learn Spanish with a certified local instructor in the heart of the Caribbean. Perfect for expats, digital nomads, and travelers who want to connect with the culture and people of Panama.',
    url: '/spanish-classes-in-isla-colon-bocas-del-toro',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 800,
        alt: 'BE Language Solutions - Spanish Classes in Bocas del Toro',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Spanish Classes in Bocas del Toro | BE Language Solutions',
    description: 'Learn Spanish with a certified local instructor in the heart of the Caribbean. Connect with Panamanian culture through personalized lessons.',
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

// JSON-LD structured data for Spanish language classes
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'BE Language Solutions',
  description: 'Spanish language classes in Bocas del Toro, Panama',
  url: 'https://be-languages.com/spanish-classes-in-isla-colon-bocas-del-toro',
  logo: 'https://be-languages.com/logo.svg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bocas del Toro',
    addressCountry: 'Panama',
  },
  offers: [
    {
      '@type': 'Offer',
      name: '1 Week Crash Course',
      price: '125',
      priceCurrency: 'USD',
      description: 'Intensive Spanish course for travelers and expats',
    },
    {
      '@type': 'Offer',
      name: 'Island Flow Plan',
      price: '150',
      priceCurrency: 'USD',
      description: '3-week Spanish course for consistent learning',
    },
    {
      '@type': 'Offer',
      name: 'Steady Surf Plan',
      price: '180',
      priceCurrency: 'USD',
      description: 'Monthly Spanish course for steady progress',
    },
    {
      '@type': 'Offer',
      name: 'Buddy Boost',
      price: '320',
      priceCurrency: 'USD',
      description: 'Spanish classes for couples and friends',
    },
  ],
  teaches: [
    'Conversational Spanish',
    'Spanish Grammar',
    'Panamanian Culture',
    'Travel Spanish',
    'Business Spanish'
  ]
}

export default function SpanishClassesLayout({ children }) {
  return <>{children}</>;
}
