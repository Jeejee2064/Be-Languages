// app/learning-resources/shopping-bargaining-panama/layout.js

export const metadata = {
  title: 'Shopping & Bargaining in Panama | BE Language Solutions',
  description: 'Learn essential Spanish phrases for shopping and bargaining in Panama. Master market, store, and street vendor vocabulary to navigate like a local.',
  keywords: [
    'Panama shopping Spanish',
    'Bargaining phrases Panama',
    'Spanish for tourists Panama',
    'Market vocabulary Panama',
    'Street vendor Spanish Panama',
    'Panama shopping guide',
    'Travel Spanish Panama',
    'Buying in Panama',
    'Negotiation Spanish Panama'
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
    canonical: '/learning-resources/shopping-bargaining-panama',
  },
  openGraph: {
    title: 'Shopping & Bargaining in Panama | BE Language Solutions',
    description: 'Master essential Spanish phrases for shopping, negotiating prices, and navigating markets in Panama. Includes pronunciation and cultural tips.',
    url: '/learning-resources/shopping-bargaining-panama',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: 'https://www.be-languages.com/shopping-bargaining-panama.png',
        width: 1200,
        height: 630,
        alt: 'Shopping & Bargaining in Panama — BE Language Solutions',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopping & Bargaining in Panama | BE Language Solutions',
    description: 'Learn key Spanish phrases for shopping, bargaining, and navigating markets in Panama with confidence.',
    images: ['https://www.be-languages.com/shopping-bargaining-panama.png'],
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
  description: 'Guide to essential Spanish phrases for shopping and bargaining in Panama for English speakers.',
  url: 'https://www.be-languages.com/learning-resources/shopping-bargaining-panama',
  logo: 'https://www.be-languages.com/shopping-bargaining-panama.png',
  teaches: [
    'Shopping Vocabulary',
    'Bargaining Phrases',
    'Market & Street Vendor Spanish',
    'Paying & Prices',
    'Negotiation Culture in Panama',
    'Travel Spanish',
    'Essential Tourist Phrases'
  ],
};

export default function Layout({ children }) {
  return <>{children}</>;
}
