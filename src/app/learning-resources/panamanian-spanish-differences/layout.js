// app/learning-resources/panamanian-spanish-differences/layout.js

export const metadata = {
  title: 'Panamanian Spanish Differences | BE Language Solutions',
  description: 'Learn the key differences of Panamanian Spanish compared to other Spanish varieties. Pronunciation, grammar, vocabulary, slang, and regional accents explained.',
  keywords: [
    'Panamanian Spanish',
    'Spanish varieties',
    'Caribbean Spanish',
    'Central American Spanish',
    'Mexican Spanish',
    'Castilian Spanish',
    'Colombian Spanish',
    'Rioplatense Spanish',
    'Panama Spanish pronunciation',
    'Panama Spanish grammar',
    'Panama Spanish vocabulary'
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
    canonical: '/learning-resources/panamanian-spanish-differences',
  },
  openGraph: {
    title: 'Panamanian Spanish Differences | BE Language Solutions',
    description: 'Discover how Panamanian Spanish differs from other Spanish varieties. Explore pronunciation, grammar, vocabulary, slang, and regional accents.',
    url: '/learning-resources/panamanian-spanish-differences',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: 'https://www.be-languages.com/panamanian-spanish-differences.png',
        width: 1200,
        height: 630,
        alt: 'Panamanian Spanish Differences — BE Language Solutions',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panamanian Spanish Differences | BE Language Solutions',
    description: 'Learn the key differences of Panamanian Spanish compared to other Spanish varieties, including pronunciation, grammar, vocabulary, slang, and regional accents.',
    images: ['https://www.be-languages.com/panamanian-spanish-differences.png'],
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
  description: 'Guide on Panamanian Spanish differences for English speakers learning Spanish.',
  url: 'https://www.be-languages.com/learning-resources/panamanian-spanish-differences',
  logo: 'https://www.be-languages.com/panamanian-spanish-differences.png',
  teaches: [
    'Panamanian Spanish Pronunciation',
    'Grammar Differences',
    'Vocabulary',
    'Slang & Expressions',
    'Regional Accents',
    'Comparison with Other Spanish Varieties'
  ],
};

export default function Layout({ children }) {
  return <>{children}</>;
}
