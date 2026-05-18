import Script from 'next/script'

export const metadata = {
  title: 'Transportation Spanish in Panama: Buses, Taxis & Boats | Be Languages',
  description: 'Essential Spanish phrases for getting around Panama. Buses, taxis, metro, boats and asking for directions. Practical vocabulary for travelers and expats.',
  keywords: [
    'transportation Spanish Panama',
    'getting around Panama Spanish',
    'bus vocabulary Spanish Panama',
    'taxi phrases Panama',
    'boat vocabulary Bocas del Toro',
    'Spanish phrases traveling Panama',
    'directions Spanish Panama',
    'travel Spanish Panama',
    'expat transport Panama',
    'metro Spanish Panama City',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: { canonical: '/learning-resources/panama-transportation-spanish' },
  openGraph: {
    title: 'Transportation Spanish in Panama: Buses, Taxis & Boats | Be Languages',
    description: 'Master essential Spanish phrases for getting around Panama — buses, taxis, metro, boats and asking for directions.',
    url: '/learning-resources/panama-transportation-spanish',
    siteName: 'Be Languages',
    images: [{ url: '/panama-transportation-spanish.png', width: 1200, height: 630, alt: 'Transportation Spanish in Panama' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transportation Spanish in Panama | Be Languages',
    description: 'Essential Spanish phrases for buses, taxis, boats and getting around Panama.',
    images: ['/panama-transportation-spanish.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.be-languages.com' },
    { '@type': 'ListItem', position: 2, name: 'Learning Resources', item: 'https://www.be-languages.com/learning-resources' },
    { '@type': 'ListItem', position: 3, name: 'Transportation Spanish in Panama', item: 'https://www.be-languages.com/learning-resources/panama-transportation-spanish' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Transportation Spanish in Panama: Buses, Taxis, Metro and Boats',
  description: 'Essential Spanish vocabulary and phrases for getting around Panama by bus, taxi, metro and boat.',
  image: 'https://www.be-languages.com/panama-transportation-spanish.png',
  url: 'https://www.be-languages.com/learning-resources/panama-transportation-spanish',
  author: { '@id': 'https://www.be-languages.com/#school' },
  publisher: { '@id': 'https://www.be-languages.com/#school' },
  datePublished: '2025-08-04',
  dateModified: '2026-05-18',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebPage', url: 'https://www.be-languages.com/learning-resources' },
}

export default function Layout({ children }) {
  return (
    <>
      <Script id="breadcrumb-transport" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-transport" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
