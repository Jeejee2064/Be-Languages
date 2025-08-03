import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Be Languages | English and Spanish Classes in Bocas del Toro",
  description: "Personalized English and Spanish classes in Bocas del Toro, Isla Colon, Panama.",
    keywords: [
    'English classes Bocas del Toro Panama',
    'Spanish classes Bocas del Toro Panama',
    'Clase de Ingles Bocas del Toro Panama',
    'certified translator Bocas del Toro Panama',
    'Clase de Español Bocas del Toro Panama',
    'traductor certificado Bocas del Toro Panama'
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
