
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import TestimonialsES from '../components/TestimonialsES'
import { BlobBackground, MonsteraBackground, HeliconiaBackground, PalmBackground, WaveBackground, TopWaveBackground, BambooBackground, GridPattern } from '../components/backgrounds';
import Link from 'next/link';
import FooterES from '../components/FooterES'

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
                className={`fixed w-full z-1200 transition-all duration-500 ${scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'}`}
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
                                alt="Logo de BE Language Solutions"
                                fill
                                className="object-contain object-left"
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
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-medium flex items-center space-x-2"
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
                                className="px-4 py-2 border bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium flex items-center space-x-2"
                            >
                                <span className="text-lg">🇵🇦</span>
                                <span>ES</span>
                            </a>
                        </motion.div>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <ul className="flex space-x-10">
                            {['Inicio', 'Sobre mí', 'Servicios', 'Precios', 'Contacto'].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <a
                                        href={`#${item.toLowerCase()
                                            .replace(/ /g, '-')  // Replace spaces with dashes
                                            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} // Remove accents
                                        className="block py-2 text-gray-700 hover:text-blue-600"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item}
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
                        <a href="#getstarted" className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-blue-200/50 hover:translate-y-[-2px]">
                            Comenzar
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
                                {['Inicio', 'Sobre mí', 'Servicios', 'Precios', 'Contacto'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()
                                                .replace(/ /g, '-')  // Replace spaces with dashes
                                                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} // Remove accents
                                            className="block py-2 text-gray-700 hover:text-blue-600"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href="#getstarted"
                                        className="block py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-center"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Comenzar
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Section */}
            <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden pt-20">
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
                                    Educación Lingüística Premium
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Domina Idiomas</span> en el Paraíso
                                </h2>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="text-xl text-gray-600 mb-8 max-w-lg">
                                <h1>Clases personalizadas de inglés y español adaptadas a tus necesidades en la hermosa Bocas del Toro, Panamá. Servicios de traducción certificada</h1>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                <a
                                    href="#servicios"
                                    className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-blue-200/50 hover:translate-y-[-2px] font-medium"
                                >
                                    Empieza a Aprender Hoy
                                </a>
                                <a
                                    href="#traducciones"
                                    className="px-8 py-3.5 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
                                >
                                    Traduccion Certificada
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
                                        alt="Instructor de idiomas enseñando en Bocas del Toro"
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
            <section id="sobre-mi" className="py-20 relative overflow-hidden bg-gray-50">
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
                                    alt="Instructor de idiomas enseñando en Bocas del Toro"
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
                                Sobre el Instructor
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Traductor</span> Certificado e Instructor de Idiomas
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Con más de una década de experiencia enseñando inglés y español, ofrezco experiencia profesional y atención personalizada a cada estudiante, permitiéndoles ganar confianza y fluidez en situaciones cotidianas.
                            </p>

                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-gray-800">Traducciones certificadas</h3>
                                        <p className="mt-1 text-gray-600">Para uso oficial en Panamá o en el extranjero (documentos legales, académicos, de inmigración, técnicos...)</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-gray-800">Profesor experimentado</h3>
                                        <p className="mt-1 text-gray-600">Clases personalizadas para adultos, centradas en el uso real del idioma y la integración cultural</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-gray-800">Formación académica</h3>
                                        <p className="mt-1 text-gray-600">Posgrado en Educación Superior</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="py-20  relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-1000">
                <PalmBackground />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="text-center mb-16 max-w-3xl mx-auto"
                    >
                        <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                            Lo que Ofrezco
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            Soluciones Lingüísticas <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Completas</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Programas personalizados diseñados para satisfacer tus necesidades lingüísticas específicas y objetivos profesionales.
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
                                title: "Clases de Idiomas Personalizadas",
                                description: "Instrucción individual adaptada a tu nivel, objetivos y preferencias de aprendizaje.",
                                bg: "bg-blue-50/50 hover:bg-blue-50",
                                border: "border-blue-100"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                ),
                                title: "Capacitación en Idiomas para Negocios",
                                description: "Cursos especializados para profesionales que necesitan habilidades lingüísticas para el trabajo.",
                                bg: "bg-indigo-50/50 hover:bg-indigo-50",
                                border: "border-indigo-100"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                ),
                                title: "Servicios de Traducción",
                                description: "Traducción certificada de documentos entre inglés y español para todo tipo de propósitos (legales, técnicos, académicos, personales, sitios web).",
                                bg: "bg-blue-50/50 hover:bg-blue-50",
                                border: "border-blue-100"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: "Refuerzo Lingüístico",
                                description: "Apoyo en español o inglés para fines académicos u objetivos de aprendizaje personal.",
                                bg: "bg-indigo-50/50 hover:bg-indigo-50",
                                border: "border-indigo-100"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                ),
                                title: "Aprende en Cualquier Lugar",
                                description: "Clases presenciales u online, incluye sesiones de aprendizaje en situaciones reales (restaurantes, tiendas, transportes...).",
                                bg: "bg-blue-50/50 hover:bg-blue-50",
                                border: "border-blue-100"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                title: "Práctica de Conversación",
                                description: "Práctica de habla estructurada con comprensión cultural y contextual.",
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

 <div className="w-full max-w-6xl mx-auto px-4 py-12">
  {/* Header Text */}
  <div className="text-center mb-12">
    <span className="inline-block mb-6 text-lg font-bold tracking-wider text-blue-600 uppercase">
      ¿Qué necesitas?
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
      <Link href="/es/clases-de-espanol-en-isla-colon-bocas-del-toro">
        <div className="px-2 py-4 cursor-pointer border bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          <div className="text-center">
            <div className="text-4xl mb-4">🇵🇦</div>
            <h3 className="text-xl font-bold mb-2">Clases de Español</h3>
          
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
      <Link href="/es/clases-de-ingles-en-isla-colon-bocas-del-toro">
        <div className="px-2 py-4 cursor-pointer border bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          <div className="text-center">
            <div className="text-4xl mb-4">🇺🇸</div>
            <h3 className="text-xl font-bold mb-2">Clases de Inglés</h3>
        
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
      <Link href="/es/traducciones-certificadas-en-bocas-del-toro">
        <div className="px-2 py-4 cursor-pointer border bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">Traducción Certificada</h3>
         
          </div>
        </div>
      </Link>
    </motion.div>

  </div>
  </div>



            </section>

            {/* Pricing Section */}
            <section id="precios" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <TopWaveBackground />
                <BlobBackground />
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase">
                        Clases & Paquetes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        Precios <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transparentes</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Paquetes flexibles diseñados para diferentes necesidades de aprendizaje y presupuestos.
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
                                name: "Curso Intensivo de 1 Semana",
                                price: "$125",
                                duration: "1 semana",
                                description: "Ideal para viajeros y expatriados que quieran mejorar rápidamente la conversación básica.",
                                hours: "5 horas",
                                features: [
                                    "Enfoque en frases esenciales",
                                    "Lo esencial para viajar",
                                    "Juego de roles",
                                    "Tarea ligera (opcional)"
                                ],
                                highlighted: false
                            },
                            {
                                name: "Plan Flujo de Isla",
                                price: "$150",
                                duration: "3 semanas",
                                hours: "6 horas",
                                description: "Perfecto para visitantes que se quedan unas semanas, mejora constante del español sin sobrecarga.",
                                features: [
                                    "Sesiones basadas en conversación (dos veces por semana)",
                                    "Contexto local: compras, direcciones, restaurantes, charlas.",
                                    "Verbos útiles y expresiones de la vida real",
                                    "Mini seguimientos por Whatsapp después de cada sesión",
                                    "Tarea ligera (opcional)"
                                ],
                                highlighted: false
                            },
                            {
                                name: "Plan Surf Constante",
                                price: "$180",
                                duration: "mes",
                                hours: "8 horas",
                                description: "Ideal para expatriados, nómadas digitales o visitantes a largo plazo listos para progresar de manera constante y segura.",
                                features: [
                                    "Básico (frases esenciales, verbos, expresiones)",
                                    "Introducción a la gramática: verbos regulares, hablar en pasado/presente/futuro básico",
                                    "Temas personalizados según tus necesidades y objetivos",
                                    "Notas de revisión y tarea corta semanal",
                                    "Control de progreso cada 4 clases",
                                    "Experiencias de aprendizaje en el mundo real (compras, pedir comida...)",
                                    "Soporte por Whatsapp"
                                ],
                                highlighted: true
                            },
                            {
                                name: "Plan Buddy Boost (2 personas)",
                                price: "$320",
                                duration: "mes",
                                hours: "8 horas",
                                description: "Perfecto para parejas, amigos, compañeros de viaje que quieran hacer el aprendizaje divertido y practicar juntos.",
                                features: [
                                    "8 sesiones compartidas de 1 hora",
                                    "Actividades en pareja personalizadas y diálogos de práctica real",
                                    "Aprende juntos a través de juegos, roles y trabajo en equipo",
                                    "Listas de vocabulario compartidas y grupos de Whatsapp",
                                    "Experiencias de aprendizaje en el mundo real (compras, pedir comida...)"
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
                                                    <span className="text-gray-600">{plan.hours} de instrucción</span>
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
                                            href="#getstarted"
                                            className={`mt-auto block w-full py-3 text-center rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-200/50`}
                                        >
                                            Comenzar
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
                        <h3 className="text-xl font-bold mb-6 text-gray-800">Información de Pago y Políticas</h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-medium text-gray-800 mb-2">Detalles de Pago</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        100% al inicio del plan
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Pueden aplicarse gastos de transporte para clases presenciales fuera de Bocas Town
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Se acepta efectivo, transferencia bancaria local y Yappy (Banco General)
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-medium text-gray-800 mb-2">Política de Cancelación</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        Los cambios deben notificarse 12 horas antes de la sesión programada
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        Menos de 12h de aviso o no presentación: la sesión se pierde
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Cancelaciones de emergencia evaluadas caso por caso
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <WaveBackground />
            {/* Translation Services Section */}
            <section id="traducciones" className="py-16 ">

                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="text-center mb-12 max-w-3xl mx-auto"
                    >
                        <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase">
                            Servicios Adicionales
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            Servicios de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Traducción Certificada</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Traducciones oficiales y personales para cualquier propósito entre inglés y español.
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
                                <h3 className="font-bold text-xl mb-4 text-gray-800">Detalles del Servicio</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Desde $15 por página traducida.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Precio final varía según complejidad del documento</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span>Pueden aplicarse cargos por urgencia y entrega</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-4 text-gray-800">Tipos de Documentos</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Documentos legales</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Documentos personales</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Materiales comerciales</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Documentos académicos</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Contenido web</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="mt-6 text-sm text-gray-600 italic">
                            Envía documentos por email o whatsapp para cotización exacta. Tiempo típico de entrega: 2-3 días hábiles (disponible servicio express).
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* TestimonialsES Section */}
            <TestimonialsES />

            <section id="getstarted" className="py-20 bg-white text-black">

            <div  className="w-full max-w-6xl mx-auto px-4 py-12">
  {/* Header Text */}
  <div className="text-center mb-12">
    <span className="inline-block mb-6 text-lg font-bold tracking-wider text-blue-600 uppercase">
      ¿Qué necesitas?
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
      <Link href="/es/clases-de-espanol-en-isla-colon-bocas-del-toro">
        <div className="px-2 py-4 cursor-pointer border bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          <div className="text-center">
            <div className="text-4xl mb-4">🇵🇦</div>
            <h3 className="text-xl font-bold mb-2">Clases de Español</h3>
          
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
      <Link href="/es/clases-de-ingles-en-isla-colon-bocas-del-toro">
        <div className="px-2 py-4 cursor-pointer border bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          <div className="text-center">
            <div className="text-4xl mb-4">🇺🇸</div>
            <h3 className="text-xl font-bold mb-2">Clases de Inglés</h3>
        
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
      <Link href="/es/traducciones-certificadas-en-bocas-del-toro">
        <div className="px-2 py-4 cursor-pointer border bg-gradient-to-r from-blue-500 to-purple-600 border-gray-300 text-gray-100 rounded-full hover:border-blue-500 hover:text-blue-200 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">Traducción Certificada</h3>
         
          </div>
        </div>
      </Link>
    </motion.div>

  </div>
  </div>
  </section>

            {/* Contact Section */}
            <section id="contacto" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                <MonsteraBackground />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeInUp}>
                            <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                                Contáctame
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                ¿Listo para comenzar tu <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">viaje lingüístico?</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                                Contáctame para programar tu primera clase o hacer cualquier pregunta sobre clases y traducciones.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className=" rounded-xl shadow-lg p-8 md:p-10 max-w-2xl mx-auto"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col items-center text-center md:text-left md:items-start">
                                    <div className="flex items-start mb-6">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-800">Teléfono/WhatsApp</h3>
                                            <p className="mt-1 text-gray-600">+507 6613-5652</p>
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
                                            <h3 className="text-lg font-medium text-gray-800">Ubicación</h3>
                                            <p className="mt-1 text-gray-600">Bocas del Toro, Panamá</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center md:text-left md:items-start">
                                    <div className="flex items-start mb-6">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                            <p className="mt-1 text-gray-600">be.languages.pa@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-800">Disponibilidad</h3>
                                            <p className="mt-1 text-gray-600">Lunes - Sábado, 9AM - 6PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex justify-center">
                                <a
                                    href="https://wa.me/50766135652"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.588c.245.149.39.13.541.038.151-.089.972-1.365 1.073-1.536.099-.17.05-.314-.025-.403-.075-.089-.223-.133-.446.038-.223.17-.86.85-1.072 1.036-.213.186-.319.223-.494.083-.173-.133-.733-.667-1.011-.92-.278-.253-.347-.186-.495-.105-.148.08-.624.386-.744.503-.119.118-.223.262-.074.529.149.266.673 1.148 1.137 1.562.463.413.854.543 1.137.543.186 0 .297-.025.372-.05.076-.025.132-.037.223-.138.089-.1.089-.173.134-.262.044-.089.022-.161.011-.161-.011 0-.148.034-.334-.075z" />
                                    </svg>
                                    Enviar mensaje por WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            {/* Footer */}
<FooterES/>
        </div>
    )
}