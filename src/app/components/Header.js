'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('en') // 'en' or 'es'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en')
  }

  // Basic translations for the header only
  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
      getStarted: "Get Started"
    },
    es: {
      home: "Inicio",
      about: "Sobre mí",
      services: "Servicios",
      pricing: "Precios",
      contact: "Contacto",
      getStarted: "Empezar"
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          <div className="relative h-20 w-20">
            <Image
              src="/logo.svg"
              alt="BE Language Solutions Logo"
              fill
              className="object-contain object-left"
            />
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-10">
            {['home', 'about', 'services', 'pricing', 'contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={`#${item}`}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
                >
                  {translations[currentLanguage][item]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
            
            {/* Language Switcher Button */}
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={toggleLanguage}
                className="ml-4 px-3 py-1 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                {currentLanguage === 'en' ? 'ES' : 'EN'}
              </button>
            </motion.li>
          </ul>
        </nav>

        {/* Mobile menu button with language switcher */}
        <div className="flex items-center md:hidden gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            {currentLanguage === 'en' ? 'ES' : 'EN'}
          </button>
          
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-6 py-4">
            <ul className="space-y-4">
              {['home', 'about', 'services', 'pricing', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {translations[currentLanguage][item]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="block py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {translations[currentLanguage].getStarted}
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}