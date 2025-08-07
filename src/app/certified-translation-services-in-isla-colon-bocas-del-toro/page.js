"use client";

import { motion } from "framer-motion";
import {
    FileText,
    Globe,
    Shield,
    Clock,
    Award,
    CheckCircle,
    Users,
    Languages,
    Briefcase,
    GraduationCap,
    Heart,
    Scale
} from "lucide-react";
import Image from "next/image";
import ContactSection from "../components/ContactSection";
import { PalmBackground, BambooBackground, MonsteraBackground, DoubleWaveBackground, WaveBackground, TopWaveBackground, BlobBackground } from '../components/backgrounds';
import NextLink from "next/link";
import FooterEN from "../components/FooterEN";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 0.77, 0.47, 0.97],
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
            duration: 0.6,
        },
    },
};

// Document types we handle
const documentTypes = [
    {
        title: "Personal Documents",
        icon: <Heart className="w-6 h-6 text-blue-600" />,
        items: [
            "Birth certificates",
            "Marriage certificates",
            "Death certificates",
            "Divorce decrees",
            "Personal letters"
        ],
        bg: "bg-indigo-50/50 hover:bg-indigo-50",
        border: "border-indigo-100"
    },
    {
        title: "Academic Documents",
        icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
        items: [
            "Diplomas & degrees",
            "Academic transcripts",
            "Research papers",
            "Student records",
            "Recommendation letters"
        ],
        bg: "bg-blue-50/50 hover:bg-blue-50",
        border: "border-blue-100"
    },
    {
        title: "Legal Documents",
        icon: <Scale className="w-6 h-6 text-blue-600" />,
        items: [
            "Contracts & agreements",
            "Court documents",
            "Power of attorney",
            "Legal correspondence",
            "Immigration papers"
        ],
        bg: "bg-indigo-50/50 hover:bg-indigo-50",
        border: "border-indigo-100"
    },
    {
        title: "Medical Documents",
        icon: <FileText className="w-6 h-6 text-blue-600" />,
        items: [
            "Medical records",
            "Prescriptions",
            "Medical reports",
            "Insurance documents",
            "Health certificates"
        ],
        bg: "bg-blue-50/50 hover:bg-blue-50",
        border: "border-blue-100"
    },
    {
        title: "Business Documents",
        icon: <Briefcase className="w-6 h-6 text-blue-600" />,
        items: [
            "Business contracts",
            "Financial statements",
            "Corporate documents",
            "Marketing materials",
            "Technical manuals"
        ],
        bg: "bg-indigo-50/50 hover:bg-indigo-50",
        border: "border-indigo-100"
    },
    {
        title: "Immigration Documents",
        icon: <Globe className="w-6 h-6 text-blue-600" />,
        items: [
            "Visa applications",
            "Passport documents",
            "Residency papers",
            "Citizenship documents",
            "Travel permits"
        ],
        bg: "bg-blue-50/50 hover:bg-blue-50",
        border: "border-blue-100"
    }
];

// Why choose us features
const features = [
    {
        title: "Certified & Official",
        icon: <Award className="w-6 h-6 text-blue-600" />,
        description: "All translations are certified and legally recognized by government agencies, courts, and institutions worldwide."
    },
    {
        title: "Fast & Reliable",
        icon: <Clock className="w-6 h-6 text-blue-600" />,
        description: "Standard 2-3 business day delivery with rush services available for urgent documents requiring same-day completion."
    },
    {
        title: "Professional Quality",
        icon: <Shield className="w-6 h-6 text-blue-600" />,
        description: "Years of experience in legal, medical, and business translations with attention to cultural nuances and technical terminology."
    },
    {
        title: "Personal Service",
        icon: <Users className="w-6 h-6 text-blue-600" />,
        description: "Direct communication with your translator throughout the process, ensuring accuracy and addressing any questions."
    }
];

// Pricing plans
const pricingPlans = [
    {
        name: "Standard Translation",
        price: "$15",
        unit: "per page",
        description: "Perfect for personal documents, certificates, and simple correspondence.",
        features: [
            "Certified translation",
            "2-3 business day delivery",
            "One revision included",
            "Digital delivery (PDF)",
            "Email support"
        ],
        highlighted: false
    },
    {
        name: "Legal Translation",
        price: "$25",
        unit: "per page",
        description: "Specialized service for legal documents, contracts, and court papers.",
        features: [
            "Certified legal translation",
            "Legal terminology expertise",
            "Notarization available",
            "Rush delivery options",
            "Multiple revisions included",
            "Court-ready formatting"
        ],
        highlighted: true
    },
    {
        name: "Technical/Medical",
        price: "$30",
        unit: "per page",
        description: "Expert translation for medical records, technical manuals, and academic papers.",
        features: [
            "Specialized terminology",
            "Subject matter expertise",
            "Multiple revisions",
            "Formatting preserved",
            "Glossary provided",
            "Quality assurance review"
        ],
        highlighted: false
    },
    {
        name: "Rush Service",
        price: "+50%",
        unit: "additional fee",
        description: "Same-day or next-day delivery for urgent translation needs.",
        features: [
            "Same-day delivery available",
            "Priority processing",
            "Direct phone support",
            "Flexible scheduling",
            "Weekend availability"
        ],
        highlighted: false
    }
];

export default function TranslationServicesPage() {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            <NextLink href="/">
                <div className="absolute top-0 h-30 w-30 ml-8 z-50">
                    <Image
                        src="./logo.svg"
                        alt="Logo de BE Language Solutions"
                        fill
                        className="object-contain object-left"
                    />
                </div>
            </NextLink>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 z-0"></div>
                <WaveBackground />
                <BambooBackground />

                <div className="container mx-auto px-6 py-20 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeInUp}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Certified Translation Services in Isla Colón, Bocas del Toro
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-lg text-gray-700 mb-8">
                            Professional, accurate, and legally recognized translations between English and Spanish.
                            Trusted by individuals, businesses, and legal professionals for official document translation needs.
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-8">
                            <a
                                href="#contact"
                                className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-blue-200/50 hover:translate-y-[-2px] font-medium"
                            >
                                Get Free Quote
                            </a>
                            <a
                                href="#documents"
                                className="px-8 py-3.5 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
                            >
                                View Services
                            </a>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 text-sm text-gray-600"
                        >
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                Certified & Notarized
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                                2-3 Day Delivery
                            </div>
                            <div className="flex items-center">
                                <Globe className="w-5 h-5 text-purple-500 mr-2" />
                                English ⟷ Spanish
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <main>
                {/* Features Section */}
                <section id="features" className="py-20 relative overflow-hidden">
                    <DoubleWaveBackground />
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="text-center mb-16 max-w-3xl mx-auto"
                        >
                            <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                                Why Me ?
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                Professional Translation <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">You Can Trust</span>
                            </h2>
                            <p className="text-lg text-gray-600">
                                Years of experience providing accurate, certified translations for legal, business, and personal use.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/70 bg-opacity-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                                >
                                    <div className="w-full flex items-center justify-center">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 shadow-sm mb-6">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl text-center font-bold mb-3">{feature.title}</h3>
                                    <p className="text-center text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Document Types Section */}
                <section id="documents" className="py-20 relative overflow-hidden bg-gray-50">
                    <BlobBackground />
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="text-center mb-16 max-w-3xl mx-auto"
                        >
                            <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase">
                                Document Types
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                I Translate <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">All Document Types</span>
                            </h2>
                            <p className="text-lg text-gray-600">
                                From personal certificates to complex legal documents, I handle all your translation needs with expertise and care.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {documentTypes.map((type, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className={`${type.bg} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border ${type.border}`}
                                >
                                    <div className="w-full flex items-center justify-center">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm mb-6">
                                            {type.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl text-center font-bold mb-3">{type.title}</h3>
                                    <ul className="list-none text-center space-y-2 text-gray-700">
                                        {type.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="text-center mb-16 max-w-3xl mx-auto"
                        >
                            <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase">
                                Pricing & Services
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Translation Pricing</span>
                            </h2>
                            <p className="text-lg text-gray-600">
                                Fair, competitive rates for professional translation services. No hidden fees or surprises.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                            className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8"
                        >
                            {pricingPlans.map((plan, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className="relative"
                                >
                                    {plan.highlighted && (
                                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            MOST POPULAR
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
                                                    <span className="text-gray-500"> {plan.unit}</span>
                                                </div>
                                                <p className="text-gray-600 mb-6">{plan.description}</p>
                                                <ul className="space-y-3 mb-8">
                                                    {plan.features.map((feature, i) => (
                                                        <li key={i} className="flex items-center">
                                                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-600">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <a
                                                href="#contact"
                                                className="mt-auto block w-full py-3 text-center rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-200/50"
                                            >
                                                Get Quote
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Additional Information */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto"
                        >
                            <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">Important Information</h3>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-medium text-gray-800 mb-3">Pricing Details</h4>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Final price depends on document complexity and formatting requirements
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Minimum charge of one page applies to all documents
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Rush delivery fees apply for same-day or next-day service
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-800 mb-3">Process & Delivery</h4>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Email or WhatsApp documents for exact quote
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Digital delivery via secure email (PDF format)
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            Physical copies available upon request
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-800 mb-3">Payment & Guarantee</h4>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-purple-500 mr-2">•</span>
                                            Payment required before delivery
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-500 mr-2">•</span>
                                            Cash, bank transfer, and Yappy accepted
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-500 mr-2">•</span>
                                            100% accuracy guarantee with free revisions
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                <p className="text-blue-800 text-center font-medium">
                                    <Shield className="w-5 h-5 inline mr-2" />
                                    All translations are certified and legally recognized for official use worldwide
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section
                    id="contact"
                    className="py-20 bg-opacity-70 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
                >
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
                                    Get In Touch
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    Do you need a {' '}
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Certified Translation?
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                                    Contact me to discuss your translation needs or request a quote for certified translation services.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="rounded-xl shadow-lg p-8 md:p-10 max-w-2xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Left Contact Info */}
                                    <div className="flex flex-col items-center text-center md:text-left md:items-start">
                                        <div className="flex items-start mb-6">
                                            <div className="flex-shrink-0 mt-1">
                                                <svg
                                                    className="w-6 h-6 text-blue-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg font-medium text-gray-800">Phone/WhatsApp</h3>
                                                <p className="mt-1 text-gray-600">+507 6613-5652</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <svg
                                                    className="w-6 h-6 text-blue-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg font-medium text-gray-800">Location</h3>
                                                <p className="mt-1 text-gray-600">Isla Colon, Bocas del Toro, Panama</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Contact Info */}
                                    <div className="flex flex-col items-center text-center md:text-left md:items-start">
                                        <div className="flex items-start mb-6">
                                            <div className="flex-shrink-0 mt-1">
                                                <svg
                                                    className="w-6 h-6 text-blue-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                                <p className="mt-1 text-gray-600">be.languages.pa@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <svg
                                                    className="w-6 h-6 text-blue-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg font-medium text-gray-800">Availability</h3>
                                                <p className="mt-1 text-gray-600">Monday - Saturday, 9AM - 6PM</p>
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
                                        Message on WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>            </main>

            {/* Footer */}
<FooterEN />
        </div>
    );
}