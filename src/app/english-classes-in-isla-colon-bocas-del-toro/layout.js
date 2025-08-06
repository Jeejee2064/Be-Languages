import { Metadata } from 'next'

export const metadata = {
  title: 'English Classes in Bocas del Toro | BE Language Solutions',
  description: 'Learn English with a certified instructor in Bocas del Toro, Panama. Perfect for locals, expats, and travelers. Flexible packages from crash courses to monthly plans.',
  keywords: [
    'English classes Bocas del Toro',
    'English lessons Panama',
    'English tutor Caribbean',
    'conversational English',
    'business English Bocas',
    'expat English classes',
    'travel English',
    'certified English instructor',
    'English grammar lessons',
    'practical English vocabulary'
  ],
  authors: [{ name: 'BE Language Solutions' }],
  creator: 'BE Language Solutions',
  publisher: 'BE Language Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://be-languages.com'),
  alternates: {
    canonical: '/english-classes-in-isla-colon-bocas-del-toro',
  },
  openGraph: {
    title: 'English Classes in Bocas del Toro | BE Language Solutions',
    description: 'Learn English with a certified instructor in the heart of the Caribbean. Perfect for locals, expats, and travelers who want to improve their English for work, travel, or personal growth.',
    url: '/english-classes-in-isla-colon-bocas-del-toro',
    siteName: 'BE Language Solutions',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 800,
        alt: 'BE Language Solutions - English Classes in Bocas del Toro',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'English Classes in Bocas del Toro | BE Language Solutions',
    description: 'Learn English with a certified instructor in the heart of the Caribbean. Flexible packages for all learning needs.',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

}

export default function EnglishClassesLayout({ children }) {
  return <>{children}</>;
}