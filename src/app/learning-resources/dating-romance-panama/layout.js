import Script from 'next/script'

export const metadata = {
  title: 'Dating & Romance in Panama: Spanish Phrases & Cultural Tips | Be Languages',
  description: 'Learn Spanish phrases for dating and romance in Panama. Cultural norms, flirting vocabulary, date ideas and relationship etiquette in Bocas del Toro and Isla Colón.',
  keywords: [
    'dating Spanish Panama',
    'romance vocabulary Spanish Panama',
    'flirting Spanish Panama',
    'dating culture Panama',
    'romantic phrases Spanish Panama',
    'Bocas del Toro dating',
    'Panamanian dating culture',
    'love Spanish phrases Panama',
    'relationship vocabulary Spanish',
    'Spanish phrases for dating',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: { canonical: '/learning-resources/dating-romance-panama' },
  openGraph: {
    title: 'Dating & Romance in Panama: Spanish Phrases & Cultural Tips | Be Languages',
    description: 'Spanish phrases for dating and romance in Panama — flirting vocabulary, cultural norms and date ideas in Bocas del Toro.',
    url: '/learning-resources/dating-romance-panama',
    siteName: 'Be Languages',
    images: [{ url: '/dating-romance-panama.png', width: 1200, height: 630, alt: 'Dating & Romance in Panama' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dating & Romance in Panama | Be Languages',
    description: 'Spanish phrases and cultural tips for dating and romance in Panama.',
    images: ['/dating-romance-panama.png'],
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
    { '@type': 'ListItem', position: 3, name: 'Dating & Romance in Panama', item: 'https://www.be-languages.com/learning-resources/dating-romance-panama' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dating & Romance in Panama: Spanish Phrases and Cultural Tips',
  description: 'Spanish vocabulary and cultural guidance for dating and romance in Panama — flirting, date ideas, relationship etiquette and romantic expressions.',
  image: 'https://www.be-languages.com/dating-romance-panama.png',
  url: 'https://www.be-languages.com/learning-resources/dating-romance-panama',
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
      <Script id="breadcrumb-dating" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-dating" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
