import Script from 'next/script'

export const metadata = {
  title: 'Panamanian Slang & Street Talk Guide | Be Languages',
  description: 'Learn authentic Panamanian slang, street talk and regional expressions. Master phrases like "chévere", "bacano" and "jupa" to sound like a local in Bocas del Toro.',
  keywords: [
    'Panamanian slang',
    'Panama street talk',
    'Panamanian Spanish expressions',
    'chévere meaning',
    'bacano Panama',
    'regional Panamanian phrases',
    'talk like a local Panama',
    'Panama Spanish vocabulary',
    'Bocas del Toro slang',
    'Isla Colón expressions',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: { canonical: '/learning-resources/panamanian-slang-street-talk' },
  openGraph: {
    title: 'Panamanian Slang & Street Talk Guide | Be Languages',
    description: 'Master authentic Panamanian slang, regional expressions and street talk. Learn when and how to use phrases like "chévere", "bacano" and "jupa".',
    url: '/learning-resources/panamanian-slang-street-talk',
    siteName: 'Be Languages',
    images: [{ url: '/panamanian-slang-street-talk.png', width: 1200, height: 630, alt: 'Panamanian Slang & Street Talk' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panamanian Slang & Street Talk | Be Languages',
    description: 'Authentic Panamanian slang and street talk. Regional expressions to help you sound like a local.',
    images: ['/panamanian-slang-street-talk.png'],
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
    { '@type': 'ListItem', position: 3, name: 'Panamanian Slang & Street Talk', item: 'https://www.be-languages.com/learning-resources/panamanian-slang-street-talk' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Panamanian Slang & Street Talk: Essential Expressions',
  description: 'Authentic Panamanian slang, street talk and regional expressions for English speakers visiting or living in Panama.',
  image: 'https://www.be-languages.com/panamanian-slang-street-talk.png',
  url: 'https://www.be-languages.com/learning-resources/panamanian-slang-street-talk',
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
      <Script id="breadcrumb-slang" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-slang" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
