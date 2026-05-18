import Script from 'next/script'

export const metadata = {
  title: 'Shopping & Bargaining Spanish in Panama | Be Languages',
  description: 'Essential Spanish phrases for shopping and bargaining in Panama. Market, store and street vendor vocabulary to navigate like a local in Bocas del Toro and Panama City.',
  keywords: [
    'shopping Spanish Panama',
    'bargaining Spanish Panama',
    'market vocabulary Spanish Panama',
    'how to bargain Panama Spanish',
    'street vendor phrases Panama',
    'Bocas del Toro shopping Spanish',
    'Panamanian market vocabulary',
    'negotiating prices Spanish Panama',
    'shopping phrases Panama',
    'mercado vocabulary Panama',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: { canonical: '/learning-resources/shopping-bargaining-panama' },
  openGraph: {
    title: 'Shopping & Bargaining Spanish in Panama | Be Languages',
    description: 'Master Spanish phrases for shopping, bargaining and navigating markets in Panama — from street vendors to local shops.',
    url: '/learning-resources/shopping-bargaining-panama',
    siteName: 'Be Languages',
    images: [{ url: '/shopping-bargaining-panama.png', width: 1200, height: 630, alt: 'Shopping & Bargaining in Panama' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopping & Bargaining Spanish in Panama | Be Languages',
    description: 'Essential Spanish phrases for shopping, bargaining and navigating markets in Panama.',
    images: ['/shopping-bargaining-panama.png'],
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
    { '@type': 'ListItem', position: 3, name: 'Shopping & Bargaining in Panama', item: 'https://www.be-languages.com/learning-resources/shopping-bargaining-panama' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shopping & Bargaining in Spanish in Panama: Essential Phrases',
  description: 'Essential Spanish vocabulary and phrases for shopping, bargaining and navigating markets in Panama.',
  image: 'https://www.be-languages.com/shopping-bargaining-panama.png',
  url: 'https://www.be-languages.com/learning-resources/shopping-bargaining-panama',
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
      <Script id="breadcrumb-shopping" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-shopping" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
