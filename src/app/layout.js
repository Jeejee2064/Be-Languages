'use client' 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const locale = pathname.startsWith('/es') ? 'es' : 'en'
  
  return (
    <html lang={locale}>
      <body >
        <Analytics />
        {children}
      </body>
    </html>
  )
}
