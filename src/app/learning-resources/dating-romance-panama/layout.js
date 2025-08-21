// app/learning-resources/dating-romance-panama/layout.js

export const metadata = {
  title: 'Dating and Romance in Panama | BE Language Solutions',
  description: 'Learn about dating, romance, and cultural tips in Panama. Discover common phrases, date ideas, flirting tips, and relationship etiquette for Bocas del Toro and Isla Colón.',
  keywords: [
    'Dating in Panama',
    'Romance Panama',
    'Panamanian dating tips',
    'Spanish phrases dating',
    'Bocas del Toro dating',
    'Isla Colón romance',
    'Panama relationships',
    'Flirting in Spanish',
    'Dating culture Panama',
    'Romantic expressions Spanish'
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
    canonical: '/learning-resources/dating-romance-panama',
  },
  openGraph: {
    title: 'Dating and Romance in Panama | BE Language Solutions',
    description: 'Learn dating and romance tips in Panama — from common phrases and flirting to cultural norms and date ideas in Bocas del Toro and Isla Colón.',
    url: '/learning-resources/dating-romance-panama',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: 'https://www.be-languages.com/dating-romance-panama.png',
        width: 1200,
        height: 630,
        alt: 'Dating and Romance in Panama — BE Language Solutions',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dating and Romance in Panama | BE Language Solutions',
    description: 'Explore dating, romance, and cultural tips for English speakers in Panama. Includes phrases, flirting tips, and date ideas for Bocas del Toro and Isla Colón.',
    images: ['https://www.be-languages.com/dating-romance-panama.png'],
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
  description: 'Dating and romance tips in Panama for English speakers.',
  url: 'https://www.be-languages.com/learning-resources/dating-romance-panama',
  logo: 'https://www.be-languages.com/dating-romance-panama.png',
  teaches: [
    'Romantic Spanish Phrases',
    'Flirting and Communication',
    'Panamanian Dating Culture',
    'Date Planning Ideas',
    'Relationship Etiquette'
  ],
};

export default function Layout({ children }) {
  return <>{children}</>;
}
