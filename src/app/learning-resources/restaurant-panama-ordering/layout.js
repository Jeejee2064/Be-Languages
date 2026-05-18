import Script from 'next/script'

export const metadata = {
  title: 'Restaurant Spanish in Panama: How to Order Food Like a Local | Be Languages',
  description: 'Essential Spanish phrases for dining in Panama. Order food, ask for the bill and navigate restaurant menus like a local in Bocas del Toro and beyond.',
  keywords: [
    'restaurant Spanish Panama',
    'ordering food Spanish Panama',
    'dining vocabulary Spanish Panama',
    'how to order food Panama Spanish',
    'restaurant phrases Panama',
    'Bocas del Toro restaurant Spanish',
    'Panamanian food vocabulary',
    'Spanish for restaurants Panama',
    'eating out Panama phrases',
    'traditional Panamanian food vocabulary',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: { canonical: '/learning-resources/restaurant-panama-ordering' },
  openGraph: {
    title: 'Restaurant Spanish in Panama: How to Order Food Like a Local | Be Languages',
    description: 'Master Spanish phrases for dining out in Panama — ordering food, asking for the bill and navigating menus like a local.',
    url: '/learning-resources/restaurant-panama-ordering',
    siteName: 'Be Languages',
    images: [{ url: '/restaurant-panama-ordering.png', width: 1200, height: 630, alt: 'Restaurant Spanish in Panama' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Spanish in Panama | Be Languages',
    description: 'Essential Spanish phrases for ordering food and dining out in Panama.',
    images: ['/restaurant-panama-ordering.png'],
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
    { '@type': 'ListItem', position: 3, name: 'Restaurant Spanish in Panama', item: 'https://www.be-languages.com/learning-resources/restaurant-panama-ordering' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Restaurant Spanish in Panama: How to Order Food Like a Local',
  description: 'Essential Spanish vocabulary and phrases for ordering food, drinks and paying at restaurants in Panama.',
  image: 'https://www.be-languages.com/restaurant-panama-ordering.png',
  url: 'https://www.be-languages.com/learning-resources/restaurant-panama-ordering',
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
      <Script id="breadcrumb-restaurant" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-restaurant" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
