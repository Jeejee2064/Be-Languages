// app/learning-resources/restaurant-panama-ordering/layout.js

export const metadata = {
  title: 'Restaurant Spanish in Panama | BE Language Solutions',
  description: 'Master essential Spanish phrases for dining out in Panama. Learn how to order traditional dishes, drinks, and pay like a local.',
  keywords: [
    'Panama restaurant Spanish',
    'Dining phrases Panama',
    'Ordering food in Spanish',
    'Panamanian cuisine vocabulary',
    'Spanish for tourists Panama',
    'Restaurant expressions Panama',
    'Paying in Spanish',
    'Panama food guide',
    'Travel Spanish Panama'
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
    canonical: '/learning-resources/restaurant-panama-ordering',
  },
  openGraph: {
    title: 'Restaurant Spanish in Panama | BE Language Solutions',
    description: 'Learn the essential Spanish phrases for ordering food, drinks, and paying at restaurants in Panama. Includes vocabulary, pronunciation, and cultural tips.',
    url: '/learning-resources/restaurant-panama-ordering',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: 'https://www.be-languages.com/restaurant-panama-ordering.png',
        width: 1200,
        height: 630,
        alt: 'Restaurant Spanish in Panama — BE Language Solutions',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Spanish in Panama | BE Language Solutions',
    description: 'Master Spanish phrases for dining out in Panama, from ordering local dishes to paying the bill confidently.',
    images: ['https://www.be-languages.com/restaurant-panama-ordering.png'],
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
  description: 'Guide to essential Spanish phrases for restaurants in Panama for English speakers.',
  url: 'https://www.be-languages.com/learning-resources/restaurant-panama-ordering',
  logo: 'https://www.be-languages.com/restaurant-panama-ordering.png',
  teaches: [
    'Restaurant Spanish',
    'Ordering Food',
    'Drinks & Beverages',
    'Paying & Service',
    'Essential Dining Vocabulary',
    'Panamanian Cuisine',
    'Cultural Etiquette in Panama'
  ],
};

export default function Layout({ children }) {
  return <>{children}</>;
}
