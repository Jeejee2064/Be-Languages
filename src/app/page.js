'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Testimonials from './components/Testimonials'
import { HeliconiaBackground, WaveBackground, TopWaveBackground, BambooBackground, GridPattern, PalmBackground } from './components/backgrounds';
 import ContactSection from './components/ContactSection'
// SVG Background Components

import Link from 'next/link'
import FooterEN from './components/FooterEN'

// Animation variants
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.6
    }
  }
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="font-sans bg-white text-gray-800 antialiased">

      {/* Header */}
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
            <div className="relative h-20 w-20"> {/* Adjust width/height as needed */}
              <Image
                src="/logo.svg"
                alt="BE Language Solutions Logo"
                fill
                className="object-contain object-left" // Maintains aspect ratio
              />
            </div>
          </motion.div>
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="/"
                className="px-4 py-2 border border-gray-300 bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium flex items-center space-x-2"
              >
                <span className="text-lg">🇺🇸</span>
                <span>EN</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <a
                href="/es"
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-medium flex items-center space-x-2"
              >
                <span className="text-lg">🇵🇦</span>
                <span>ES</span>
              </a>
            </motion.div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-10">
              {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="hidden lg:block"
          >
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-blue-200/50 hover:translate-y-[-2px]">
              Get Started
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-6 py-4">
              <ul className="space-y-4">
                {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block py-2 text-gray-700 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="block py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 z-0"></div>
        <WaveBackground />
        <BambooBackground />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center"
          >
            <motion.div variants={fadeInUp} className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.div variants={fadeInUp}>
                <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  Premium Language Education
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Master Languages</span> in Paradise
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-xl text-gray-600 mb-8 max-w-lg">
                <h1>Personalized English and Spanish classes to suit your needs in beautiful Bocas del Toro, Panama.</h1>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-blue-200/50 hover:translate-y-[-2px] font-medium"
                >
                  Start Learning Today
                </a>
                <a
                  href="#pricing"
                  className="px-8 py-3.5 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
                >
                  View Pricing
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="lg:w-1/2 relative mt-12 lg:mt-0"
            >
              <div className="relative">
                {/* Gradient glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-xl"></div>

                {/* Image container */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-video">
                  <Image
                    src="/mimitimbi.jpeg"
                    alt="Language instructor teaching in Bocas del Toro"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden bg-gray-50">
        <GridPattern />
        <HeliconiaBackground />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center"
          >
            <motion.div variants={fadeInUp} className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[500px] w-[300px] mx-auto">
                <Image
                  src="/jojo.png"
                  alt="Language instructor teaching in Bocas del Toro"
                  width={300}
                  height={500}
                  className="object-cover w-full h-full"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase">
                About The Instructor
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Certified <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Translator</span> & Language Instructor
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience teaching English and Spanish, I bring professional expertise and personalized attention to every student, allowing them to gain confidence and fluency in everyday circumstances.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">Certified translations</h3>
                    <p className="mt-1 text-gray-600">For official use in Panama or abroad (legal, academic, immigration, technical documents...)</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">Experienced Teacher</h3>
                    <p className="mt-1 text-gray-600">Personalised lessons for adults, focusing on real-world language use and cultural integration</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">Academic Background</h3>
                    <p className="mt-1 text-gray-600">Post Graduate Degree in Higher Education</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20  relative overflow-hidden">

        <div className="container mx-auto px-6 relative z-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
              What I Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Language Solutions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Tailored programs designed to meet your specific language needs and professional objectives.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                ),
                title: "Personalized Language Classes",
                description: "One-on-one instruction tailored to your level, goals, and learning preferences.",
                bg: "bg-blue-50/50 hover:bg-blue-50",
                border: "border-blue-100"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Business Language Training",
                description: "Specialized courses for professionals needing language skills for the workplace.",
                bg: "bg-indigo-50/50 hover:bg-indigo-50",
                border: "border-indigo-100"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                title: "Translation Services",
                description: "Certified document translation between English and Spanish for all purposes (legal, technical, academic, personal, websites).",
                bg: "bg-blue-50/50 hover:bg-blue-50",
                border: "border-blue-100"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Language Reinforcement",
                description: "Support in Spanish or English for academic purposes or personal learning goals.",
                bg: "bg-indigo-50/50 hover:bg-indigo-50",
                border: "border-indigo-100"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: "Learn Anywhere",
                description: "In-person or online classes, includes real-life learning sessions (restaurants, shops, transportations...).",
                bg: "bg-blue-50/50 hover:bg-blue-50",
                border: "border-blue-100"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Conversation Practice",
                description: "Structured speaking practice with cultural understanding and context.",
                bg: "bg-indigo-50/50 hover:bg-indigo-50",
                border: "border-indigo-100"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className={`${service.bg} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border ${service.border}`}
              >
                <div className="w-full flex items-center justify-center">

                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm mb-6">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

 <div className="w-full max-w-6xl mx-auto px-4 py-12">
  {/* Header Text */}
  <div className="text-center mb-12">
    <span className="inline-block mb-6 text-lg font-bold tracking-wider text-blue-600 uppercase">
      What do you need?
    </span>
  </div>

  {/* Navigation Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    
    {/* Spanish Classes Card */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ y: -5 }}
      className="group"
    >
    <Link href="/spanish-classes-in-isla-colon-bocas-del-toro">
        <div className="px-2 py-4 cursor-pointer border bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          <div className="text-center">
            <div className="text-4xl mb-4">🇵🇦</div>
            <h3 className="text-xl font-bold mb-2">Spanish Classes</h3>
          
          </div>
        </div>
      </Link>
    </motion.div>

    {/* English Classes Card */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      whileHover={{ y: -5 }}
      className="group"
    >
    <Link href="/english-classes-in-isla-colon-bocas-del-toro">
        <div className="px-2 py-4 cursor-pointer border bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          <div className="text-center">
            <div className="text-4xl mb-4">🇺🇸</div>
            <h3 className="text-xl font-bold mb-2">English Classes</h3>
        
          </div>
        </div>
      </Link>
    </motion.div>

    {/* Translation Services Card */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      whileHover={{ y: -5 }}
      className="group md:col-span-2 lg:col-span-1"
    >
        <Link href="/certified-translation-services-in-isla-colon-bocas-del-toro">
        <div className="px-2 py-4 cursor-pointer border bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">Certified translation</h3>
         
          </div>
        </div>
      </Link>
    </motion.div>

  </div>
  </div>

      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <TopWaveBackground />
        <PalmBackground />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase">
            Classes & Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Simple, Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Flexible packages designed for different learning needs and budgets.
          </p>
        </motion.div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                name: "1 Week Crash Course",
                price: "$125",
                duration: "1 week",
                description: "Ideal for travelers and expats who want to improve basic conversation rapidly.",
                hours: "5 hours",
                features: [
                  "Focus on essential phrases",
                  "Travel essentials",
                  "Role Play",
                  "Light Homework (optional)"
                ],
                highlighted: false
              },
              {
                name: "Island Flow Plan",
                price: "$150",
                duration: "3 weeks",
                hours: "6 hours",
                description: "Perfect for visiters staying a few weeks, consistent, stress-free spanish improvement without overloading.",
                features: [
                  "Conversation based sessions (twice a week)",
                  "local context : shopping, addresses, restaurants, small talk.",
                  "Useful verbs and real life expressions",
                  "Whatsapp mini follow-ups after each session",
                  "Light Homework (optional)"
                ],
                highlighted: false
              },
              {
                name: "Steady Surf Plan",
                price: "$180",
                duration: "month",
                hours: "8 hours",
                description: "Ideal for expats, digital nomads or long term visitors ready to pregress steadily and confidently.",
                features: [
                  "Basic (essential phrases, verbs, expressions)",
                  "Intro to Grammar : regular verbs, basic past/present/future talk",
                  "Personalized topics based on you needs and goals",
                  "Review notes and weekly short homework",
                  "Progress check every 4 classes",
                  "Real-world learning experiences (grocery shopping, food ordering...)",
                  "Whatsapp support"
                ],
                highlighted: true
              },
              {
                name: "Buddy Boost (2 people)",
                price: "$320",
                duration: "month",
                hours: "8 hours",
                description: "Perfect for couples, friends, travel partners who want to make learning fun and practice together.",
                features: [
                  "8 shared 1 hour session",
                  "Personalized pair activities and real practice dialogues",
                  "Learn together through games, role plays and teamwork",
                  "Shared vocabulary lists and whatsapp groups",
                  "Real-world learning experiences (grocery shopping, food ordering...)"
                ],
                highlighted: true
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="relative"
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    POPULAR
                  </div>
                )}
                <div className={`h-full p-[2px] rounded-2xl ${plan.highlighted ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-200'}`}>
                  <div className="h-full bg-white rounded-xl p-8 shadow-sm flex flex-col">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">{plan.name}</h3>
                      <div className="mb-6">
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                        <span className="text-gray-500"> / {plan.duration}</span>
                      </div>
                      <div className="mb-8">
                        <div className="flex items-center mb-2">
                          <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-600">{plan.hours} of instruction</span>
                        </div>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href="#contact"
                      className={`mt-auto block w-full py-3 text-center rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-200/50`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Payment & Policy Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800">Payment & Policy Information</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Payment Details</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    100% at start of the plan
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Transport fees may apply for in-person classes outside Bocas Town
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Cash, local bank transfer and Yappy (Banco General) accepted
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">Cancellation Policy</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Changes must be advised 12 hours before scheduled session
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Less than 12h notice or no-show: session is forfeited
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Emergency cancellations evaluated case-by-case
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <WaveBackground />
      {/* Translation Services Section */}
      <section id="translations" className="py-16 ">

        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase">
              Additional Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Certified <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Translation Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Official and personal translations for any purpose between English and Spanish.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200 max-w-3xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4 text-gray-800">Service Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Starts at $15 per page translated.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Final price varies by document complexity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Urgency and delivery fees may apply</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-gray-800">Document Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Legal documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Personal documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Business materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Academic papers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Website content</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-600 italic">
              Email or whatsapp documents for exact quote. Typical turnaround: 2-3 business days (rush available).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
<ContactSection/>
<FooterEN/>
    </div>
  )
}