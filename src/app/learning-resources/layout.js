// app/learning-resources/layout.js

export const metadata = {
  title: 'Panamanian Spanish Learning Resources | BE Language Solutions',
  description: 'Explore free guides and tips to help English speakers master Panamanian Spanish and understand the culture. Covers slang, dining, shopping, transport, romance, and more.',
  keywords: [
    'Panamanian Spanish',
    'Learn Spanish Panama',
    'Spanish guides for English speakers',
    'Panama culture',
    'Travel Spanish Panama',
    'Shopping Spanish Panama',
    'Dining Spanish Panama',
    'Transportation Spanish Panama',
    'Dating Spanish Panama'
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
    canonical: '/learning-resources',
  },
  openGraph: {
    title: 'Panamanian Spanish Learning Resources | BE Language Solutions',
    description: 'Free guides for English speakers to learn Panamanian Spanish and understand the culture, including slang, dining, shopping, and transport tips.',
    url: '/learning-resources',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: 'https://www.be-languages.com/logoNoir.png',
        width: 1200,
        height: 630,
        alt: 'BE Language Solutions Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panamanian Spanish Learning Resources | BE Language Solutions',
    description: 'Discover free guides to help English speakers master Panamanian Spanish and navigate the local culture.',
    images: ['https://www.be-languages.com/logoNoir.png'],
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
  description: 'Free learning resources for English speakers to master Panamanian Spanish and understand local culture.',
  url: 'https://www.be-languages.com/learning-resources',
  logo: 'https://www.be-languages.com/logoNoir.png',
  teaches: [
    'Panamanian Slang',
    'Spanish for Dining',
    'Shopping and Bargaining Spanish',
    'Transportation Vocabulary',
    'Romantic Expressions',
    'Grammar Tips for English Speakers',
    'Travel Spanish in Panama'
  ],
};

export default function Layout({ children }) {
  return <>{children}</>;
}
