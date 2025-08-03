'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Testimonials from './components/Testimonials'
// SVG Background Components
const WaveBackground = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path fill="url(#gradient)" fillOpacity="0.2" d="M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,138.7C672,139,768,213,864,218.7C960,224,1056,160,1152,128C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const BlobBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg viewBox="0 0 200 200" className="absolute -right-20 -top-20 w-64 h-64 text-blue-400 opacity-20">
      <path fill="currentColor" d="M45.2,-58.8C58.1,-49.3,68.1,-34.7,72.5,-18.4C76.8,-2.1,75.5,15.9,66.9,30.8C58.3,45.7,42.5,57.5,24.4,65.6C6.3,73.7,-14.1,78.1,-31.6,72.1C-49.1,66.1,-63.7,49.7,-69.7,30.8C-75.7,11.9,-73.1,-9.5,-63.6,-27.1C-54.1,-44.7,-37.7,-58.5,-19.8,-66.4C-1.9,-74.4,17.5,-76.5,32.4,-68.3Z" transform="translate(100 100)" />
    </svg>
    <svg viewBox="0 0 200 200" className="absolute -left-20 bottom-10 w-72 h-72 text-purple-400 opacity-20">
      <path fill="currentColor" d="M43.9,-57.2C57.1,-46.9,68.3,-33.1,73.5,-16.9C78.7,-0.7,77.9,17.9,68.6,33.5C59.3,49.1,41.5,61.7,21.9,70.5C2.3,79.3,-19.2,84.3,-37.1,77.2C-55,70.1,-69.3,50.9,-73.2,30.5C-77.1,10.1,-70.6,-11.5,-58.7,-28.9C-46.8,-46.4,-29.5,-59.7,-10.4,-56.1C8.7,-52.5,17.4,-32,25.2,-16.7Z" transform="translate(100 100)" />
    </svg>
  </div>
)

const GridPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
)

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

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block"
          >
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-blue-200/50 hover:translate-y-[-2px]">
              Get Started
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
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
        <BlobBackground />

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
              <motion.h1 variants={fadeInUp} className="text-xl text-gray-600 mb-8 max-w-lg">
                Personalized English and Spanish classes with a certified translator in beautiful Bocas del Toro, Panama.
              </motion.h1>
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
                Certified <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Translator</span> & Language Expert
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience teaching English and Spanish, I bring professional expertise and personalized attention to every student.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">Official Certification</h3>
                    <p className="mt-1 text-gray-600">Recognized translator credentials in Panama</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">Tailored Methodology</h3>
                    <p className="mt-1 text-gray-600">Custom lessons for your specific goals and learning style</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">Cultural Immersion</h3>
                    <p className="mt-1 text-gray-600">Learn language within its cultural context</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

{/* Services Section */}
<section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[3%]"></div>
  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="text-center mb-16 max-w-3xl mx-auto"
    >
      <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
        What We Offer
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
          description: "Certified document translation between English and Spanish for all purposes.",
          bg: "bg-blue-50/50 hover:bg-blue-50",
          border: "border-blue-100"
        },
        {
          icon: (
            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          title: "Exam Preparation",
          description: "Targeted training for language proficiency tests and certifications.",
          bg: "bg-indigo-50/50 hover:bg-indigo-50",
          border: "border-indigo-100"
        },
        {
          icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          ),
          title: "Cultural Immersion",
          description: "Language learning enriched with cultural understanding and context.",
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
          description: "Structured speaking practice with native-level feedback.",
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
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm mb-6">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <WaveBackground />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase">
              Investment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Simple, Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-lg text-gray-600">
              Flexible packages designed for different learning needs and budgets.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                name: "Casual Conversation",
                price: "$125",
                duration: "1 week",
                hours: "5 hours",
                features: [
                  "Basic greetings & phrases",
                  "Travel essentials",
                  "Quick preparation",
                  "1 week access"
                ],
                highlighted: false
              },
              {
                name: "Steady Progress",
                price: "$220",
                duration: "3 weeks",
                hours: "10 hours",
                features: [
                  "Fundamental grammar",
                  "Vocabulary building",
                  "Basic conversations",
                  "3 weeks access",
                  "Email support"
                ],
                highlighted: true
              },
              {
                name: "Intensive Learning",
                price: "$340",
                duration: "7 weeks",
                hours: "20 hours",
                features: [
                  "Comprehensive curriculum",
                  "Conversation practice",
                  "Cultural immersion",
                  "7 weeks access",
                  "Priority support",
                  "Progress tracking"
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className={`relative ${plan.highlighted ? 'scale-105' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    POPULAR
                  </div>
                )}
                <div className={`h-full p-1 rounded-2xl ${plan.highlighted ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-100'}`}>
                  <div className="h-full bg-white rounded-xl p-8 shadow-sm">
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
                    <a
                      href="#contact"
                      className={`block w-full py-3 text-center rounded-lg font-medium transition-all duration-300 ${plan.highlighted ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-200/50' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}
            className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">Payment Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Payment Plan</h4>
                <p className="text-gray-600">
                  50% deposit before classes begin<br />
                  50% balance due at midpoint
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Accepted Methods</h4>
                <p className="text-gray-600">
                  Cash (USD or PAB)<br />
                  YAPPY (Banco General)<br />
                  Bank Transfer (Panama)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
<Testimonials/>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <BlobBackground />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row"
          >
            <motion.div variants={fadeInUp} className="justify-center items-center mb-12 lg:mb-0 lg:pr-12">
              <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Ready to Begin Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Language Journey?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us to schedule your first lesson or ask any questions about our programs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Phone/WhatsApp</h3>
                    <p className="mt-1 text-gray-600">+507 6613-5652</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Email</h3>
                    <p className="mt-1 text-gray-600">be.languagesolution@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Location</h3>
                    <p className="mt-1 text-gray-600">Bocas del Toro, Isla Colón, Panama</p>
                  </div>
                </div>
              </div>
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="relative h-20 w-20"> {/* Adjust width/height as needed */}
                <Image
                  src="/logo.svg"
                  alt="BE Language Solutions Logo"
                  fill
                  className="object-contain object-left" // Maintains aspect ratio
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Language Solutions
              </h3>
              <p className="text-gray-400 max-w-xs mb-6">
                Personalized English and Spanish classes with certified translation services in Bocas del Toro, Panama.
              </p>
              <div className="flex space-x-4">
             
                <a href="https://www.instagram.com/be.languages/" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                
              </div>
            </div>

            

              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">+507 6613-5652</li>
                  <li className="text-gray-400">be.languagesolution@gmail.com</li>
                  <li className="text-gray-400">Bocas del Toro, Panama</li>
                </ul>
              </div>
            </div>
          

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BE Language Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}