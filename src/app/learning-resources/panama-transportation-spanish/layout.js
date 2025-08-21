// app/learning-resources/panama-transportation-spanish/layout.js

export const metadata = {
  title: 'Panama Transportation Spanish | BE Language Solutions',
  description: 'Learn essential transportation vocabulary, phrases, and tips for getting around Panama in Spanish. Covers buses, taxis, metro, boats, and asking for directions.',
  keywords: [
    'Panama transportation',
    'Spanish travel phrases',
    'Buses Panama',
    'Taxis Panama',
    'Metro Panama',
    'Boats Panama',
    'Panama travel vocabulary',
    'Spanish for travelers',
    'Transportation tips Panama',
    'Bocas del Toro travel'
  ],
  authors: [{ name: 'BE Language Solutions' }],
  creator: 'BE Language Solutions',
  publisher: 'BE Language Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: {
    canonical: '/learning-resources/panama-transportation-spanish',
  },
  openGraph: {
    title: 'Panama Transportation Spanish | BE Language Solutions',
    description: 'Master essential transportation phrases and vocabulary in Spanish for Panama. Includes buses, taxis, metro, boats, and travel tips.',
    url: '/learning-resources/panama-transportation-spanish',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: 'https://www.be-languages.com/panama-transportation-spanish.png',
        width: 1200,
        height: 630,
        alt: 'Panama Transportation Spanish Guide — BE Language Solutions',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panama Transportation Spanish | BE Language Solutions',
    description: 'Learn transportation phrases and travel tips in Spanish for Panama. Includes buses, taxis, metro, boats, and practical vocabulary for travelers.',
    images: ['https://www.be-languages.com/panama-transportation-spanish.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for SEO
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'BE Language Solutions',
  description: 'Transportation vocabulary and travel tips in Spanish for English speakers visiting Panama.',
  url: 'https://www.be-languages.com/learning-resources/panama-transportation-spanish',
  logo: 'https://www.be-languages.com/panama-transportation-spanish.png',
  teaches: [
    'Transportation Spanish Phrases',
    'Asking for Directions',
    'Using Buses, Taxis, Metro, and Boats',
    'Travel Vocabulary for Panama',
    'Practical Travel Tips'
  ],
};

export default function Layout({ children }) {
  return <>{children}</>;
}
