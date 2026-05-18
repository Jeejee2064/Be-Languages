import Script from 'next/script'

export const metadata = {
  title: 'Common Spanish Mistakes English Speakers Make in Panama | Be Languages',
  description: 'Avoid common Spanish mistakes English speakers make in Panama. False friends, grammar traps, pronunciation errors and cultural missteps — especially in Bocas del Toro.',
  keywords: [
    'common Spanish mistakes Panama',
    'Spanish mistakes English speakers',
    'false friends Spanish English',
    'Spanish grammar mistakes Panama',
    'Panamanian Spanish tips',
    'learn Spanish Panama',
    'Spanish pronunciation mistakes',
    'Bocas del Toro Spanish tips',
    'Isla Colón Spanish',
    'Spanish cultural mistakes Panama',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: { canonical: '/learning-resources/common-spanish-mistakes' },
  openGraph: {
    title: 'Common Spanish Mistakes English Speakers Make in Panama | Be Languages',
    description: 'Learn how to avoid the most common Spanish mistakes in Panama. False friends, grammar traps, pronunciation and cultural tips for Bocas del Toro.',
    url: '/learning-resources/common-spanish-mistakes',
    siteName: 'Be Languages',
    images: [{ url: '/common-spanish-mistakes.png', width: 1200, height: 630, alt: 'Common Spanish Mistakes in Panama' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Common Spanish Mistakes in Panama | Be Languages',
    description: 'Avoid Spanish mistakes while learning in Panama — false friends, grammar traps and cultural missteps in Bocas del Toro.',
    images: ['/common-spanish-mistakes.png'],
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
    { '@type': 'ListItem', position: 3, name: 'Common Spanish Mistakes in Panama', item: 'https://www.be-languages.com/learning-resources/common-spanish-mistakes' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Common Spanish Mistakes English Speakers Make in Panama',
  description: 'Avoid the most common Spanish mistakes made by English speakers in Panama — false friends, grammar traps, pronunciation and cultural missteps.',
  image: 'https://www.be-languages.com/common-spanish-mistakes.png',
  url: 'https://www.be-languages.com/learning-resources/common-spanish-mistakes',
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
      <Script id="breadcrumb-mistakes" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-mistakes" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
