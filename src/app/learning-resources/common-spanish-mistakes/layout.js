// app/learning-resources/common-spanish-mistakes/layout.js

export const metadata = {
  title: 'Common Spanish Mistakes in Panama | BE Language Solutions',
  description: 'Avoid common Spanish mistakes English speakers make in Panama. Learn false friends, grammar traps, pronunciation, and cultural missteps — especially in Bocas del Toro and Isla Colón.',
  keywords: [
    'Spanish mistakes Panama',
    'learn Spanish Panama',
    'Panamanian Spanish tips',
    'false friends Spanish',
    'grammar mistakes Spanish',
    'Bocas del Toro Spanish',
    'Isla Colón Spanish',
    'Panama Spanish learner'
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
    canonical: '/learning-resources/common-spanish-mistakes',
  },
  openGraph: {
    title: 'Common Spanish Mistakes in Panama | BE Language Solutions',
    description: 'Learn how to avoid common Spanish mistakes specific to Panama. Includes false friends, grammar traps, pronunciation and cultural tips — perfect for learners visiting Bocas del Toro and Isla Colón.',
    url: '/learning-resources/common-spanish-mistakes',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: 'https://www.be-languages.com/common-spanish-mistakes.png',
        width: 1200,
        height: 630,
        alt: 'Common Spanish Mistakes in Panama — BE Language Solutions',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Common Spanish Mistakes in Panama | BE Language Solutions',
    description: 'Avoid Spanish mistakes while learning in Panama — focused tips for false friends, grammar traps, and cultural missteps in Bocas del Toro and Isla Colón.',
    images: ['https://www.be-languages.com/common-spanish-mistakes.png'],
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
  description: 'Learn common Spanish mistakes for English speakers in Panama.',
  url: 'https://www.be-languages.com/learning-resources/common-spanish-mistakes',
  logo: 'https://www.be-languages.com/common-spanish-mistakes.png',
  teaches: [
    'Spanish Grammar',
    'False Friends',
    'Panamanian Expressions',
    'Pronunciation Tips',
    'Cultural Awareness'
  ],
};

export default function Layout({ children }) {
  return <>{children}</>;
}
