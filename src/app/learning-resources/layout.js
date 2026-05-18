import Script from 'next/script'

export const metadata = {
  title: 'Free Spanish Learning Resources for Panama | Be Languages',
  description: 'Free Spanish guides for English speakers in Panama. Slang, dining, shopping, transport, romance vocabulary and culture tips — especially for Bocas del Toro and Isla Colón.',
  keywords: [
    'free Spanish resources Panama',
    'learn Panamanian Spanish',
    'Spanish guides English speakers Panama',
    'Panamanian Spanish vocabulary',
    'Spanish culture tips Panama',
    'Bocas del Toro Spanish guide',
    'travel Spanish Panama',
    'Spanish for expats Panama',
    'Panamanian slang guide',
    'learn Spanish online Panama',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: { canonical: '/learning-resources' },
  openGraph: {
    title: 'Free Spanish Learning Resources for Panama | Be Languages',
    description: 'Free guides for English speakers to learn Panamanian Spanish — slang, dining, shopping, transport and culture tips for Bocas del Toro.',
    url: '/learning-resources',
    siteName: 'Be Languages',
    images: [{ url: '/logoNoir.png', width: 1200, height: 630, alt: 'Be Languages — Free Spanish Resources' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Spanish Learning Resources for Panama | Be Languages',
    description: 'Free guides to help you master Panamanian Spanish — slang, dining, shopping, transport and cultural tips.',
    images: ['/logoNoir.png'],
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
  ],
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Free Spanish Learning Resources for Panama',
  description: 'Free guides for English speakers to learn Panamanian Spanish, slang, and culture — especially in Bocas del Toro.',
  url: 'https://www.be-languages.com/learning-resources',
  publisher: { '@id': 'https://www.be-languages.com/#school' },
  inLanguage: 'en',
}

export default function LearningResourcesLayout({ children }) {
  return (
    <>
      <Script id="breadcrumb-lr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="collection-lr" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      {children}
    </>
  )
}
