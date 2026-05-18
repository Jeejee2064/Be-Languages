import Script from 'next/script'

export const metadata = {
  title: 'Certified Translation Services Bocas del Toro | English-Spanish | Be Languages',
  description: 'Certified English-Spanish translation services in Bocas del Toro, Panama. Legal, academic, medical & immigration documents. Fast turnaround for official use in Panama & abroad.',
  keywords: [
    'certified translation Bocas del Toro',
    'certified translation Panama',
    'English Spanish translation Panama',
    'legal document translation Panama',
    'certified translator Bocas del Toro',
    'translation services Isla Colon',
    'official translation Panama',
    'academic translation Panama',
    'medical translation Panama',
    'immigration document translation Panama',
    'notarized translation Panama',
    'certified translator Isla Colon',
    'document translation Bocas del Toro',
    'professional translator Panama',
    'cheap translation services Panama',
  ],
  authors: [{ name: 'Be Languages' }],
  creator: 'Be Languages',
  publisher: 'Be Languages',
  metadataBase: new URL('https://www.be-languages.com'),
  alternates: {
    canonical: '/certified-translation-services-in-isla-colon-bocas-del-toro',
    languages: {
      en: '/certified-translation-services-in-isla-colon-bocas-del-toro',
      es: '/es/traducciones-certificadas-en-bocas-del-toro',
      'x-default': '/certified-translation-services-in-isla-colon-bocas-del-toro',
    },
  },
  openGraph: {
    title: 'Certified Translation Services Bocas del Toro | English-Spanish',
    description: 'Professional certified translations in Bocas del Toro. Legal, academic, medical & immigration documents. Fast turnaround for official use in Panama & abroad.',
    url: '/certified-translation-services-in-isla-colon-bocas-del-toro',
    siteName: 'Be Languages',
    images: [{ url: '/logoNoir.png', width: 1200, height: 1200, alt: 'Certified Translation Services Bocas del Toro - Be Languages' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified Translation Services Bocas del Toro | Be Languages',
    description: 'Certified English-Spanish translations in Bocas del Toro. Legal, academic, medical & personal documents. Fast turnaround.',
    images: ['/logoNoir.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.be-languages.com' },
    { '@type': 'ListItem', position: 2, name: 'Certified Translation Services in Bocas del Toro', item: 'https://www.be-languages.com/certified-translation-services-in-isla-colon-bocas-del-toro' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Certified Translation Services in Bocas del Toro',
  description: 'Professional certified English-Spanish translation services for legal, academic, medical, immigration, and personal documents in Bocas del Toro, Panama.',
  url: 'https://www.be-languages.com/certified-translation-services-in-isla-colon-bocas-del-toro',
  provider: { '@id': 'https://www.be-languages.com/#school' },
  areaServed: { '@type': 'Place', name: 'Panama' },
  serviceType: 'Certified Translation',
  offers: [
    { '@type': 'Offer', name: 'Standard Translation', price: '15', priceCurrency: 'USD', description: 'Certified translation for personal documents and certificates, per page' },
    { '@type': 'Offer', name: 'Legal Translation', price: '25', priceCurrency: 'USD', description: 'Certified translation for legal documents and contracts, per page' },
    { '@type': 'Offer', name: 'Technical / Medical Translation', price: '30', priceCurrency: 'USD', description: 'Expert translation for medical records and technical documents, per page' },
  ],
}

export default function CertifiedTranslationLayout({ children }) {
  return (
    <>
      <Script id="breadcrumb-translation" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="service-translation" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
