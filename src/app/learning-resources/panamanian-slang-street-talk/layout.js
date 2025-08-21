// app/learning-resources/panamanian-slang-street-talk/layout.js

export const metadata = {
  title: 'Panamanian Slang & Street Talk | BE Language Solutions',
  description: 'Learn authentic Panamanian slang, street talk, and regional expressions. Master phrases like "chevere", "bacano", and "jupa" to sound like a local.',
  keywords: [
    'Panamanian slang',
    'Panama street talk',
    'Spanish expressions Panama',
    'Chevere',
    'Bacano',
    'Jupa',
    'Regional Panamanian phrases',
    'Talk like a local Panama',
    'Panama Spanish vocabulary',
    'Bocas del Toro slang'
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
    canonical: '/learning-resources/panamanian-slang-street-talk',
  },
  openGraph: {
    title: 'Panamanian Slang & Street Talk | BE Language Solutions',
    description: 'Master authentic Panamanian slang, regional expressions, and street talk. Learn when and how to use phrases like "chevere", "bacano", and "jupa".',
    url: '/learning-resources/panamanian-slang-street-talk',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: 'https://www.be-languages.com/panamanian-slang-street-talk.png',
        width: 1200,
        height: 630,
        alt: 'Panamanian Slang & Street Talk — BE Language Solutions',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panamanian Slang & Street Talk | BE Language Solutions',
    description: 'Learn authentic Panamanian slang and street talk. Includes regional expressions and popular phrases to help you talk like a local.',
    images: ['https://www.be-languages.com/panamanian-slang-street-talk.png'],
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
  description: 'Panamanian slang and street talk guide for English speakers learning Spanish.',
  url: 'https://www.be-languages.com/learning-resources/panamanian-slang-street-talk',
  logo: 'https://www.be-languages.com/panamanian-slang-street-talk.png',
  teaches: [
    'Panamanian Slang',
    'Regional Expressions',
    'Street Talk',
    'Everyday Conversation',
    'Cultural Nuances in Panama Spanish'
  ],
};

export default function Layout({ children }) {
  return <>{children}</>;
}
