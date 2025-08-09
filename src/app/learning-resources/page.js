"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
    Globe,
    MessageCircle,
    Utensils,
    ShoppingCart,
    AlertTriangle,
    Heart,
    MapPin,
    Coffee,
    Users,
    ArrowRight,
    Clock,
    Star
} from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";
import { PalmBackground, BambooBackground, HeliconiaBackground, WaveBackground, TopWaveBackground, DoubleWaveBackground, GridPattern } from '../components/backgrounds';

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

const learningResources = [
    {
        id: 1,
        title: "Panamanian Slang & Street Talk",
        icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
        category: "Culture",
        difficulty: "Intermediate",
        readTime: "4 min read",
        description: "Learn authentic Panamanian slang, expressions, and street talk that locals use every day - from 'chevere' to 'jupa' and beyond.",
        slug: "panamanian-slang-street-talk"
    },
    {
        id: 2,
        title: "Common Mistakes English Speakers Make",
        icon: <AlertTriangle className="w-6 h-6 text-blue-600" />,
        category: "Grammar",
        difficulty: "Intermediate",
        readTime: "5 min read",
        description: "Avoid these common pitfalls that English speakers often encounter when learning Spanish, including false friends and grammar traps.",
        slug: "common-spanish-mistakes"
    },
    {
        id: 3,
        title: "Restaurant Spanish: Order Like a Pro",
        icon: <Utensils className="w-6 h-6 text-blue-600" />,
        category: "Dining",
        difficulty: "Beginner",
        readTime: "4 min read",
        description: "Essential phrases and vocabulary for dining out in Panama, from ordering traditional dishes to paying the bill.",
        slug: "restaurant-panama-ordering"
    },
    {
        id: 4,
        title: "Panamanian Spanish vs. Other Spanish",
        icon: <Globe className="w-6 h-6 text-blue-600" />,
        category: "Culture",
        difficulty: "Intermediate",
        readTime: "6 min read",
        description: "Understanding the unique characteristics of Panamanian Spanish, including Caribbean influences and local expressions.",
        slug: "panamanian-spanish-differences"
    },
    {
        id: 5,
        title: "Shopping & Bargaining Basics",
        icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
        category: "Shopping",
        difficulty: "Beginner",
        readTime: "4 min read",
        description: "Navigate markets, stores, and street vendors with confidence using these essential shopping and bargaining phrases.",
        slug: "shopping-bargaining-panama"
    },
    {
        id: 6,
        title: "Dating & Romance in Panama",
        icon: <Heart className="w-6 h-6 text-blue-600" />,
        category: "Romance",
        difficulty: "Intermediate",
        readTime: "5 min read",
        description: "Learn romantic expressions, dating vocabulary, and cultural tips for navigating relationships in Panama.",
        slug: "dating-romance-panama"
    },
    {
        id: 7,
        title: "Getting Around Panama: Transport Terms",
        icon: <MapPin className="w-6 h-6 text-blue-600" />,
        category: "Transportation",
        difficulty: "Beginner",
        readTime: "4 min read",
        description: "Master transportation vocabulary for buses, taxis, boats, and asking for directions in Panama.",
        slug: "panama-transportation-spanish"
    }
];

export default function LearningResourcesPage() {
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

            {/* Compact Header Section */}
            <section className="pt-24 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 z-0"></div>
                <BambooBackground />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeInUp}>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Panamanian Spanish Learning Resources
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-lg text-gray-700 mb-8">
                            Free guides and tips to help English speakers master Spanish and understand Panamanian culture.
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-8 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-blue-600" />
                                <span>7 Detailed Guides</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-purple-600" />
                                <span>Quick Reads</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-blue-600" />
                                <span>All Levels</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <main>
                {/* Modern Card Layout */}
                <section className="py-12 relative overflow-hidden">
                    <HeliconiaBackground />
                    <div className="container mx-auto px-6 relative z-10">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.01 }}
                            variants={staggerContainer}
                            className="space-y-8"
                        >
                            {learningResources.map((resource, index) => (
                                <NextLink href={`/learning-resources/${resource.slug}`} key={resource.id} >
                                    <motion.div
                                        variants={fadeInUp}
                                        whileHover={{ y: -4 }}
                                        className="group cursor-pointer mt-4"
                                    >
                                        <div className={`bg-white/50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                            <div className="md:flex md:items-center ">
                                                {/* Image Section */}
                                                <div className="md:w-96 md:flex-shrink-0">
                                                    <div className="h-64 md:h-80 relative overflow-hidden">
                                                        <Image
                                                            src={`/${resource.slug}.png`}
                                                            alt={resource.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500" />
                                                    </div>
                                                </div>

                                                {/* Content Section */}
                                                <div className="flex-1 p-8 md:p-12">
                                                    {/* Header */}
                                                    <div className="flex items-start justify-between mb-6">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                                                {resource.icon}
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-2">
                                                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm">
                                                                        {resource.category}
                                                                    </span>
                                                                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                                                    <span className="text-gray-500 text-sm">{resource.readTime}</span>
                                                                </div>
                                                                <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                                    {resource.difficulty}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                        {resource.title}
                                                    </h3>

                                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                                        {resource.description}
                                                    </p>

                                                    {/* CTA */}
                                                    <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                                                        <span className="mr-2">Read Full Guide</span>
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </NextLink>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 relative overflow-hidden bg-gray-50">
                    <PalmBackground />
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                Ready for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Personalized Learning?</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                These resources are just the beginning. Get personalized English lessons tailored to your specific needs and goals in Bocas del Toro.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <NextLink href="/spanish-classes-in-isla-colon-bocas-del-toro">
                                    <span className="block px-8 py-3 text-center rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-200/50 cursor-pointer">
                                        Book Spanish Classes
                                    </span>
                                </NextLink>

                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
}