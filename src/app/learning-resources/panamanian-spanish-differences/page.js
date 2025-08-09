"use client";

import { motion } from "framer-motion";
import {
    Globe,
    ArrowLeft,
    Clock,
    BookOpen,
    Volume2,
    MapPin,
    Users,
    MessageSquare,
    CheckCircle,
    TrendingUp,
    Star,
    Languages,
    Mic2,
    Bookmark,
    AlertCircle
} from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";
import { PalmBackground, BambooBackground, HeliconiaBackground, MonsteraBackground, WaveBackground } from '../../components/backgrounds';

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

const spanishVarieties = [
    {
        icon: <Volume2 className="w-6 h-6 text-white" />,
        title: "Caribbean Spanish",
        description: "Panamanian Spanish shares many features with other Caribbean varieties like dropping final 's' sounds, rapid speech, and African influences.",
        features: [
            "Syllable-final /s/ often becomes /h/ or disappears",
            "Fast-paced, rhythmic speech patterns",
            "Heavy use of contractions"
        ],
        gradient: "from-blue-500 to-emerald-600"
    },
    {
        icon: <Languages className="w-6 h-6 text-white" />,
        title: "Central American Spanish",
        description: "While part of Central America, Panama's Spanish differs from its neighbors due to stronger Caribbean and Colombian influences.",
        features: [
            "Less use of 'vos' than other Central American countries",
            "More Caribbean vocabulary than Guatemala/Honduras",
            "Unique intonation patterns"
        ],
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        icon: <Mic2 className="w-6 h-6 text-white" />,
        title: "Mexican Spanish",
        description: "Mexican Spanish is more conservative with pronunciation and has distinct vocabulary from Panamanian Spanish.",
        features: [
            "Mexican Spanish preserves syllable-final /s/",
            "Different slang and colloquialisms",
            "More indigenous language influence in Mexico"
        ],
        gradient: "from-purple-500 to-red-600"
    },
    {
        icon: <Bookmark className="w-6 h-6 text-white" />,
        title: "Castilian Spanish",
        description: "Spain's Spanish differs significantly in pronunciation, vocabulary and grammar from Panamanian Spanish.",
        features: [
            "Distinct 'th' sound for 'z' and 'c' (ceceo)",
            "Use of 'vosotros' form",
            "Different verb conjugations"
        ],
        gradient: "from-purple-500 to-pink-600"
    },
    {
        icon: <MapPin className="w-6 h-6 text-white" />,
        title: "Colombian Spanish",
        description: "Panama shares some features with coastal Colombian Spanish but differs in rhythm and slang.",
        features: [
            "Similar Caribbean coastal features",
            "Different regional expressions",
            "Colombian Spanish is often clearer and slower"
        ],
        gradient: "from-teal-500 to-cyan-600"
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Rioplatense Spanish",
        description: "Argentine/Uruguayan Spanish differs dramatically in pronunciation and vocabulary.",
        features: [
            "Use of 'vos' instead of 'tú'",
            "Italian-influenced intonation",
            "Different slang (lunfardo)"
        ],
        gradient: "from-lime-500 to-blue-600"
    }
];

const panamanianFeatures = [
    {
        category: "Pronunciation",
        icon: <Volume2 className="w-5 h-5 text-blue-600" />,
        features: [
            { feature: "Aspiration or loss of final 's'", example: "'más o menos' → 'mah o meno'", explanation: "Common in Caribbean Spanish varieties" },
            { feature: "Softening of 'j'/'g' sounds", example: "'trabajo' → 'traba-ho'", explanation: "Less guttural than in Spain or Mexico" },
            { feature: "Final 'd' often dropped", example: "'ciudad' → 'ciudá'", explanation: "Particularly in informal speech" },
            { feature: "Blending of vowels", example: "'para allá' → 'pa'llá'", explanation: "Creates rhythmic, fluid speech" }
        ]
    },
    {
        category: "Grammar",
        icon: <Bookmark className="w-5 h-5 text-blue-600" />,
        features: [
            { feature: "Use of 'tú' instead of 'vos'", example: "Tú eres (not 'vos sos')", explanation: "Unlike much of Central America" },
            { feature: "Double negatives common", example: "No voy a hacer nada", explanation: "Standard in many Spanish varieties" },
            { feature: "Frequent use of diminutives", example: "'ahorita', 'cerquita'", explanation: "Adds nuance or softens statements" },
            { feature: "Unique verb conjugations", example: "'vinistes' instead of 'viniste'", explanation: "Regional variation" }
        ]
    },
    {
        category: "Vocabulary",
        icon: <Languages className="w-5 h-5 text-blue-600" />,
        features: [
            { feature: "Caribbean loanwords", example: "'chombo' (friend)", explanation: "From African languages" },
            { feature: "English borrowings", example: "'parquear' (to park)", explanation: "From US influence" },
            { feature: "Indigenous words", example: "'chicha' (drink)", explanation: "From Ngäbe and other languages" },
            { feature: "Unique local terms", example: "'diablo rojo' (bus)", explanation: "Panama-specific terms" }
        ]
    },
    {
        category: "Slang & Expressions",
        icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
        features: [
            { feature: "'Qué xopá?'", example: "Greeting meaning 'What's up?'", explanation: "Derived from 'Qué pasó?'" },
            { feature: "'Chantin'", example: "Means 'house' or 'place'", explanation: "From Afro-Antillean English 'shanty'" },
            { feature: "'Pinta'", example: "Means 'cool' or 'attractive'", explanation: "Widely used in Panama" },
            { feature: "'Ta' barato'", example: "Literally 'It's cheap' but means 'No problem'", explanation: "Common response to thanks" }
        ]
    }
];

const regionalDifferences = [
    {
        title: "Caribbean vs. Interior",
        icon: <MapPin className="w-5 h-5 text-purple-600" />,
        tips: [
            "Coastal speech is faster with more Caribbean features",
            "Interior speech is slower and more conservative",
            "Panama City mixes both with urban innovations",
            "Darién province has strong Colombian influence",
            "Bocas del Toro has English Creole influence"
        ]
    },
    {
        title: "Formal vs. Informal",
        icon: <Users className="w-5 h-5 text-purple-600" />,
        tips: [
            "Formal settings use more standard Spanish",
            "Informal speech drops more consonants",
            "Young people use more English loanwords",
            "Older generations preserve more traditional terms",
            "Business settings often use clearer pronunciation"
        ]
    },
    {
        title: "Understanding Challenges",
        icon: <AlertCircle className="w-5 h-5 text-purple-600" />,
        tips: [
            "Fast speech can be difficult for learners",
            "Slang changes frequently",
            "Many words have different meanings in Panama",
            "Regional accents vary significantly",
            "Media Spanish differs from street Spanish"
        ]
    },
    {
        title: "Adaptation Tips",
        icon: <CheckCircle className="w-5 h-5 text-purple-600" />,
        tips: [
            "Listen to Panamanian music and radio",
            "Practice with locals from different regions",
            "Learn key Panamanian expressions",
            "Watch Panamanian YouTubers or TV shows",
            "Don't be afraid to ask for clarification"
        ]
    }
];

const commonConfusions = [
    {
        category: "False Friends",
        icon: <AlertCircle className="w-5 h-5 text-blue-600" />,
        vocabulary: [
            { spanish: "Coger", panama: "To take/grab", other: "Vulgar in some countries" },
            { spanish: "Concha", panama: "Shell", other: "Vulgar in Argentina" },
            { spanish: "Paja", panama: "Lazy", other: "Vulgar in some countries" },
            { spanish: "Fresa", panama: "Strawberry", other: "Snob in Mexico" },
            { spanish: "Torta", panama: "Cake", other: "Sandwich in Mexico" }
        ]
    },
    {
        category: "Panama-Specific Terms",
        icon: <Star className="w-5 h-5 text-blue-600" />,
        vocabulary: [
            { spanish: "Diablo rojo", panama: "Colorful public bus", other: "Not used elsewhere" },
            { spanish: "Yeye", panama: "Upper-class person", other: "Not used elsewhere" },
            { spanish: "Pelo e' maíz", panama: "Blonde hair", other: "Literal 'corn hair' unique to Panama" },
            { spanish: "Chécheres", panama: "Miscellaneous items", other: "Panamanian term" },
            { spanish: "Mopri", panama: "Derogatory term", other: "From 'poor me' in English" }
        ]
    },
    {
        category: "Pronunciation Differences",
        icon: <Mic2 className="w-5 h-5 text-blue-600" />,
        vocabulary: [
            { spanish: "S sounds", panama: "Often becomes 'h' or disappears", other: "Pronounced clearly in other varieties" },
            { spanish: "J/G sounds", panama: "Softer, less guttural", other: "Stronger in Spain/Mexico" },
            { spanish: "Final D", panama: "Often dropped", other: "Usually pronounced elsewhere" },
            { spanish: "LL/Y", panama: "Same sound (yeísmo)", other: "Distinct in some regions" },
            { spanish: "R at end", panama: "Sometimes dropped", other: "Usually pronounced" }
        ]
    }
];

const regionalAccents = [
    {
        name: "Panama City",
        type: "Urban/Caribbean",
        location: "Capital region",
        features: "Fast speech, most slang, English influence",
        challenges: "Hardest to understand for learners",
        tips: "Listen for dropped consonants and contractions"
    },
    {
        name: "Azuerense",
        type: "Interior/Rural",
        location: "Azuero Peninsula",
        features: "Slower pace, clearer pronunciation",
        challenges: "Different rural vocabulary",
        tips: "Easier for beginners to understand"
    },
    {
        name: "Chiricano",
        type: "Border Influence",
        location: "Chiriquí province",
        features: "Costa Rican influences, distinct intonation",
        challenges: "Some unique regional terms",
        tips: "Notice the musical intonation"
    },
    {
        name: "Bocatoreño",
        type: "Caribbean/Creole",
        location: "Bocas del Toro",
        features: "English Creole influence, Caribbean rhythm",
        challenges: "Code-switching with English",
        tips: "Listen for English loanwords"
    }
];

export default function PanamanianSpanishDifferencesArticle() {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            <BambooBackground />

            {/* Header with Logo and Back Button */}
            <header className="relative z-50 pt-6 pb-4">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        <NextLink href="/">
                            <div className="h-12 w-32 relative">
                                <Image
                                    src="./logo.svg"
                                    alt="Logo de BE Language Solutions"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </NextLink>
                        <NextLink href="/learning-resources">
                            <div className="flex items-center text-blue-600 hover:text-purple-600 transition-colors cursor-pointer">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                <span className="font-medium">All Resources</span>
                            </div>
                        </NextLink>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-12 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 z-0"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-8">
                            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Globe className="w-4 h-4 mr-2" />
                                Language Guide
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Panamanian Spanish vs. Other Spanish:
                                <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    Key Differences Explained
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Understand the unique characteristics of Panamanian Spanish, including Caribbean influences, local expressions, and how it compares to other varieties.
                            </p>

                            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    <span>6 min read</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-purple-600" />
                                    <span>Intermediate</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Featured Image */}
                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="relative h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="/panamanian-spanish-differences.png"
                                    alt="Panamanian Spanish vs Other Spanish Varieties"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <main className="py-12">
                {/* Spanish Varieties */}
                <section className="mb-16 relative overflow-hidden">
                    <HeliconiaBackground />
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-6xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Panamanian Spanish in the <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Spanish-Speaking World</span>
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {spanishVarieties.map((variety, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className={`w-10 h-10 bg-gradient-to-r ${variety.gradient} rounded-lg flex items-center justify-center shadow-md mr-3`}>
                                                {variety.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{variety.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">{variety.description}</p>
                                        <ul className="space-y-1 text-xs text-gray-700">
                                            {variety.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-blue-500">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Panamanian Spanish Features */}
                <section className="mb-16 bg-gray-50 py-16">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-6xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Distinctive Features of <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Panamanian Spanish</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {panamanianFeatures.map((section, sectionIndex) => (
                                    <motion.div
                                        key={sectionIndex}
                                        variants={fadeInUp}
                                        className="bg-white/50 rounded-xl p-6 shadow-md"
                                    >
                                        <h3 className="text-xl font-bold mb-4 flex items-center text-blue-900">
                                            {section.icon}
                                            <span className="ml-2">{section.category}</span>
                                        </h3>

                                        <div className="space-y-3">
                                            {section.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="p-3 bg-blue-50/50 rounded-lg">
                                                    <p className="font-semibold text-blue-900">{feature.feature}</p>
                                                    <p className="text-gray-700 text-sm mb-1 italic">{feature.example}</p>
                                                    <p className="text-blue-600 text-xs">{feature.explanation}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Regional Differences */}
                <section className="mb-16 relative overflow-hidden">
                    <PalmBackground />
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-6xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Understanding <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Regional Variations</span>
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {regionalDifferences.map((strategy, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="bg-white/50 rounded-xl p-5 shadow-md h-full"
                                    >
                                        <h3 className="text-lg font-bold mb-3 flex items-center text-purple-900">
                                            {strategy.icon}
                                            <span className="ml-2">{strategy.title}</span>
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            {strategy.tips.map((tip, tipIndex) => (
                                                <li key={tipIndex} className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Common Confusions */}
                <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 py-16">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-6xl mx-auto text-center"
                        >
                            <h2 className="text-3xl font-bold mb-8">
                                Common <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Confusions</span>
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6 text-left">
                                {commonConfusions.map((category, index) => (
                                    <div key={index} className="bg-white rounded-lg p-5 shadow-md">
                                        <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                                            {category.icon}
                                            <span className="ml-2">{category.category}</span>
                                        </h4>
                                        <ul className="space-y-3 text-sm">
                                            {category.vocabulary.map((item, itemIndex) => (
                                                <li key={itemIndex} className="border-b border-gray-100 pb-2 last:border-0">
                                                    <strong className="text-blue-800">{item.spanish}:</strong> 
                                                    <p className="text-gray-700 text-xs mt-1">In Panama: {item.panama}</p>
                                                    {item.other && <p className="text-gray-500 text-xs mt-1">Elsewhere: {item.other}</p>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Regional Accents */}
                <section className="mb-16 relative overflow-hidden">
                    <MonsteraBackground />
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-6xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Panamanian <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Regional Accents</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {regionalAccents.map((market, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="bg-white/50 rounded-xl p-6 shadow-md"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-blue-900">{market.name}</h3>
                                                <p className="text-purple-600 text-sm font-medium">{market.type}</p>
                                            </div>
                                            <MapPin className="w-5 h-5 text-gray-400" />
                                        </div>
                                        
                                        <div className="space-y-2 text-sm">
                                            <div>
                                                <strong className="text-blue-800">Location:</strong> <span className="text-gray-700">{market.location}</span>
                                            </div>
                                            <div>
                                                <strong className="text-blue-800">Features:</strong> <span className="text-gray-700">{market.features}</span>
                                            </div>
                                            <div>
                                                <strong className="text-blue-800">Challenges:</strong> <span className="text-gray-700">{market.challenges}</span>
                                            </div>
                                            <div className="bg-purple-50 p-3 rounded-lg mt-3">
                                                <strong className="text-purple-800 text-xs">TIP:</strong>
                                                <p className="text-purple-700 text-xs mt-1">{market.tips}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Cultural Language Tips */}
                <section className="mb-16 bg-white py-16 border-t border-b border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Panamanian <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Language Culture</span>
                            </h2>

                            <div className="bg-blue-50/50 rounded-xl p-6 md:p-8 shadow-inner border border-blue-100">
                                <h3 className="text-xl font-bold mb-4 text-blue-900">Cultural Language Insights</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <Volume2 className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Speech Patterns</h4>
                                            <p className="text-gray-700 text-sm">Panamanians speak quickly with dropped consonants. The rhythm is musical with rising intonation at sentence ends. Interruptions in conversation are common and not considered rude.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <MessageSquare className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Conversation Style</h4>
                                            <p className="text-gray-700 text-sm">Directness varies by region. Panama City is more direct while rural areas use more indirect communication. Personal questions are common as relationship-building.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <Users className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Social Context</h4>
                                            <p className="text-gray-700 text-sm">Language reflects Panama's diverse heritage. African influences appear in rhythm, indigenous words in vocabulary, and English in business/urban settings.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <AlertCircle className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Sensitive Topics</h4>
                                            <p className="text-gray-700 text-sm">Avoid criticizing Panama or comparing it negatively to other countries. Politics and the Canal can be sensitive. Humor is appreciated but sarcasm may not translate well.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Learning Do's and Don'ts */}
                <section className="mb-16 bg-gradient-to-br from-purple-50 to-red-50 py-16">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Learning Panamanian Spanish <span className="bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">Do's & Don'ts</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-xl p-6 shadow-md">
                                    <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        DO These Things
                                    </h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            <span className="text-gray-700">Listen to Panamanian music (reggae en español, plena)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            <span className="text-gray-700">Practice with locals from different regions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            <span className="text-gray-700">Learn key Panamanian expressions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            <span className="text-gray-700">Watch Panamanian YouTubers or TV shows</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            <span className="text-gray-700">Ask locals to correct your pronunciation</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-md">
                                    <h3 className="text-xl font-bold mb-4 text-red-900 flex items-center">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                        DON'T Do These
                                    </h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't assume all Spanish is the same</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't try to imitate the accent too soon</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't use slang without understanding context</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't be afraid to ask for clarification</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't get frustrated by fast speech</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Resources & Media */}
                <section className="mb-16 bg-white py-16 border-t border-b border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Learning <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Resources</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
                                        <BookOpen className="w-5 h-5 mr-2" />
                                        Recommended Media
                                    </h3>
                                    <div className="bg-blue-50 rounded-lg p-5">
                                        <div className="space-y-3 text-sm">
                                            <div><strong>Music:</strong> Rubén Blades, Los Rabanes, Joey Montana</div>
                                            <div><strong>YouTube:</strong> Superholly, Panama Jack TV</div>
                                            <div><strong>TV Shows:</strong> "La Cascara" (comedy), "Decisiones" (drama)</div>
                                            <div><strong>Movies:</strong> "Chance" (2019), "Más que hermanos" (2017)</div>
                                            <div><strong>Podcasts:</strong> "Radio Panama", "La Cáscara Podcast"</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-center">
                                        <TrendingUp className="w-5 h-5 mr-2" />
                                        Practice Tips
                                    </h3>
                                    <div className="bg-purple-50 rounded-lg p-5 space-y-3 text-sm">
                                        <div><strong>Language Exchange:</strong> Find Panamanian partners on Tandem/HelloTalk</div>
                                        <div><strong>Radio:</strong> Listen to RPC Radio or KW Continente online</div>
                                        <div><strong>News:</strong> Read La Prensa or Metro Libre newspapers</div>
                                        <div><strong>Social Media:</strong> Follow Panamanian influencers</div>
                                        <div><strong>Immersion:</strong> Visit Panama or Panamanian communities</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Call to Action */}
            <section className="py-16 bg-gray-900 relative overflow-hidden">
                <WaveBackground />
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                            Master <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Panamanian Spanish</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Learn authentic Panamanian Spanish with native instructors who understand the local variations and can help you sound like a true Panameño!
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <NextLink href="/spanish-classes-in-isla-colon-bocas-del-toro">
                                <span className="block px-6 py-3 text-center rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-200/50 cursor-pointer text-sm sm:text-base">
                                    Book Spanish Classes
                                </span>
                            </NextLink>
                            <NextLink href="/learning-resources">
                                <span className="block px-6 py-3 text-center rounded-full font-medium transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-gray-900 cursor-pointer text-sm sm:text-base">
                                    More Learning Resources
                                </span>
                            </NextLink>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}