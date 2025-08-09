"use client";

import { motion } from "framer-motion";
import {
    MessageCircle,
    ArrowLeft,
    Clock,
    BookOpen,
    Volume2,
    Heart,
    Smile,
    Zap,
    Users,
    MapPin,
    Coffee,
    Music,
    Star,
    ThumbsUp,
    Lightbulb
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

const popularSlang = [
    {
        icon: <ThumbsUp className="w-6 h-6 text-white" />,
        slang: "¡Qué chevere!",
        meaning: "How cool! / Awesome!",
        usage: "Used to express excitement or approval",
        example: "¡Qué chevere que vengas a Panamá! (How cool that you're coming to Panama!)",
        gradient: "from-green-500 to-green-600"
    },
    {
        icon: <Zap className="w-6 h-6 text-white" />,
        slang: "Bacano",
        meaning: "Cool / Great / Awesome",
        usage: "Similar to 'chevere' but more casual",
        example: "Ese lugar está bacano (That place is really cool)",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: <Heart className="w-6 h-6 text-white" />,
        slang: "Jupa",
        meaning: "Head / Brain (also used for smart person)",
        usage: "Can mean head literally or calling someone smart",
        example: "Usa la jupa (Use your head) or ¡Eres una jupa! (You're so smart!)",
        gradient: "from-purple-500 to-purple-600"
    },
    {
        icon: <Coffee className="w-6 h-6 text-white" />,
        slang: "Fren",
        meaning: "Dude / Bro / Friend",
        usage: "Casual way to address friends",
        example: "¿Qué tal, fren? (What's up, dude?)",
        gradient: "from-orange-500 to-orange-600"
    },
    {
        icon: <MapPin className="w-6 h-6 text-white" />,
        slang: "Voltear",
        meaning: "To hang out / Chill",
        usage: "Spending time casually with friends",
        example: "Vamos a voltear en el parque (Let's hang out in the park)",
        gradient: "from-teal-500 to-teal-600"
    },
    {
        icon: <Music className="w-6 h-6 text-white" />,
        slang: "Chercha",
        meaning: "Party / Fun time",
        usage: "Any kind of celebration or good time",
        example: "Vamos a hacer chercha esta noche (Let's party tonight)",
        gradient: "from-pink-500 to-pink-600"
    }
];

const regionalExpressions = [
    {
        region: "Panama City",
        icon: <MapPin className="w-5 h-5 text-blue-600" />,
        expressions: [
            { 
                phrase: "Está en la lucha", 
                meaning: "Struggling financially / Working hard to get by", 
                usage: "Everyone's grinding to make ends meet" 
            },
            { 
                phrase: "Ponerse mosca", 
                meaning: "To get suspicious / Be alert", 
                usage: "When something seems fishy" 
            },
            { 
                phrase: "Estar arrecho", 
                meaning: "To be angry / upset", 
                usage: "Don't confuse with other countries - means angry in Panama" 
            },
            { 
                phrase: "Tigre", 
                meaning: "Money / Cash", 
                usage: "¿Tienes tigre? (Do you have money?)" 
            },
            { 
                phrase: "Jodón", 
                meaning: "Someone who likes to joke around / Troublemaker", 
                usage: "That person who's always messing around" 
            }
        ]
    },
    {
        region: "Interior / Provinces",
        icon: <Users className="w-5 h-5 text-blue-600" />,
        expressions: [
            { 
                phrase: "Concho", 
                meaning: "Shared taxi / Public transport", 
                usage: "In rural areas, informal transportation" 
            },
            { 
                phrase: "Jajear", 
                meaning: "To work hard / Hustle", 
                usage: "Common in farming communities" 
            },
            { 
                phrase: "Ñame", 
                meaning: "Food / Meal", 
                usage: "¿Ya comiste ñame? (Did you eat already?)" 
            },
            { 
                phrase: "Estar empepado", 
                meaning: "To be drunk", 
                usage: "Rural slang for being intoxicated" 
            },
            { 
                phrase: "Manganzón", 
                meaning: "Lazy person", 
                usage: "Someone who doesn't like to work" 
            }
        ]
    },
    {
        region: "Caribbean Coast",
        icon: <Volume2 className="w-5 h-5 text-blue-600" />,
        expressions: [
            { 
                phrase: "Relajao", 
                meaning: "Relaxed / Chill person", 
                usage: "Someone with a laid-back Caribbean attitude" 
            },
            { 
                phrase: "Bochinche", 
                meaning: "Gossip / Drama", 
                usage: "All the latest news and rumors" 
            },
            { 
                phrase: "Jangueo", 
                meaning: "Hanging out / Partying", 
                usage: "Caribbean coast party scene" 
            },
            { 
                phrase: "Cuero", 
                meaning: "Attractive woman", 
                usage: "Be careful - can be offensive depending on context" 
            },
            { 
                phrase: "Estar en nota", 
                meaning: "To be in the mood / Feeling good", 
                usage: "When you're feeling the Caribbean vibe" 
            }
        ]
    },
    {
        region: "Bocas del Toro",
        icon: <Heart className="w-5 h-5 text-blue-600" />,
        expressions: [
            { 
                phrase: "Irie", 
                meaning: "Everything's good / All right", 
                usage: "Jamaican influence - positive vibes" 
            },
            { 
                phrase: "Pana", 
                meaning: "Friend / Buddy", 
                usage: "Close friend, like 'bro'" 
            },
            { 
                phrase: "Vacilón", 
                meaning: "Fun / Good time", 
                usage: "Having a blast at the beach" 
            },
            { 
                phrase: "Estar en ambiente", 
                meaning: "To be in the party mood", 
                usage: "When the island vibes hit just right" 
            },
            { 
                phrase: "Jalao", 
                meaning: "Crazy / Wild", 
                usage: "Someone who's a bit wild or eccentric" 
            }
        ]
    }
];

const commonMistakes = [
    {
        title: "False Friends with Other Countries",
        icon: <Lightbulb className="w-5 h-5 text-red-600" />,
        mistakes: [
            "Don't say '¡Órale!' (Mexican) - use '¡Qué chevere!' instead",
            "'Arrecho' means angry in Panama, not horny like other countries",
            "'Coger' is safe to use in Panama (to take/grab) unlike Argentina",
            "Don't use 'Güey' (Mexican) - say 'Fren' or 'Pana' instead",
            "'Chévere' is more common than 'Genial' for expressing approval"
        ]
    },
    {
        title: "Context is Everything",
        icon: <Users className="w-5 h-5 text-orange-600" />,
        mistakes: [
            "'Jupa' can mean head or smart person - context matters",
            "'Cuero' can be offensive - be careful with usage",
            "Age matters: older people might not understand newer slang",
            "'Tigre' for money is very informal - don't use in business",
            "Some slang is regional - what works in Panama City might not in Azuero"
        ]
    },
    {
        title: "Pronunciation Tips",
        icon: <Volume2 className="w-5 h-5 text-blue-600" />,
        mistakes: [
            "CHER-cha not SHER-cha (party)",
            "BA-ca-no with stress on first syllable (cool)",
            "CHE-ve-re with three clear syllables",
            "JU-pa short and sharp (head/smart)",
            "Don't roll R's too hard - Panamanian Spanish is softer"
        ]
    },
    {
        title: "When NOT to Use Slang",
        icon: <Star className="w-5 h-5 text-purple-600" />,
        mistakes: [
            "Job interviews - stick to formal Spanish",
            "Government offices - use 'usted' and formal language",
            "Talking to elderly people - show respect with formal Spanish",
            "Business meetings - professional language only",
            "First meetings - wait to see if others use slang first"
        ]
    }
];

const slangCategories = [
    {
        category: "Positive Reactions",
        icon: <Smile className="w-5 h-5 text-green-600" />,
        words: [
            { word: "¡Brutal!", meaning: "Amazing!", context: "When something is really impressive" },
            { word: "¡Que nota!", meaning: "How cool!", context: "Expressing excitement" },
            { word: "¡Jevi!", meaning: "Cool!", context: "Quick approval" },
            { word: "¡Tuanis!", meaning: "Awesome!", context: "Everything's great" }
        ]
    },
    {
        category: "Money & Work",
        icon: <Coffee className="w-5 h-5 text-green-600" />,
        words: [
            { word: "Tigre", meaning: "Money", context: "¿Tienes tigre? (Got money?)" },
            { word: "Jajear", meaning: "To work hard", context: "Tengo que jajear (I need to work)" },
            { word: "Bregar", meaning: "To hustle/struggle", context: "Bregando en la vida (hustling in life)" },
            { word: "Lucha", meaning: "The struggle", context: "Estoy en la lucha (I'm struggling)" }
        ]
    },
    {
        category: "People & Relationships",
        icon: <Heart className="w-5 h-5 text-green-600" />,
        words: [
            { word: "Fren", meaning: "Friend/Dude", context: "Casual address for friends" },
            { word: "Pana", meaning: "Close friend", context: "Like 'bro' or 'buddy'" },
            { word: "Jupa", meaning: "Smart person", context: "¡Eres una jupa! (You're smart!)" },
            { word: "Relajao", meaning: "Chill person", context: "Someone laid-back" }
        ]
    },
    {
        category: "Activities & Fun",
        icon: <Music className="w-5 h-5 text-green-600" />,
        words: [
            { word: "Chercha", meaning: "Party", context: "¡Vamos a la chercha!" },
            { word: "Voltear", meaning: "Hang out", context: "Let's chill together" },
            { word: "Jangueo", meaning: "Partying", context: "Going out scene" },
            { word: "Vacilón", meaning: "Good time", context: "Having fun" }
        ]
    }
];

export default function PanamanianSlangArticle() {
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
                            <div className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Culture Guide
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Panamanian Slang:
                                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Talk Like a Local
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Master authentic Panamanian slang, street talk, and expressions that locals use every day. From "chevere" to "jupa" - sound like a true Panamanian!
                            </p>

                            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    <span>4 min read</span>
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
                                    src="/panamanian-slang-street-talk.png"
                                    alt="Panamanian Slang and Street Talk"
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
                {/* Popular Slang */}
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
                                Must-Know <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Panamanian Slang</span>
                            </h2>
                            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                                These are the most popular and widely-used slang terms across Panama. Master these and you'll fit right in!
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {popularSlang.map((slang, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className={`w-10 h-10 bg-gradient-to-r ${slang.gradient} rounded-lg flex items-center justify-center shadow-md mr-3`}>
                                                {slang.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{slang.slang}</h3>
                                                <p className="text-blue-600 text-sm font-medium">{slang.meaning}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-2">{slang.usage}</p>
                                        <p className="text-gray-800 text-sm italic bg-gray-50 p-2 rounded">{slang.example}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Regional Expressions */}
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
                                Regional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expressions</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {regionalExpressions.map((region, regionIndex) => (
                                    <motion.div
                                        key={regionIndex}
                                        variants={fadeInUp}
                                        className="bg-white/50 rounded-xl p-6 shadow-md"
                                    >
                                        <h3 className="text-xl font-bold mb-4 flex items-center text-blue-900">
                                            {region.icon}
                                            <span className="ml-2">{region.region}</span>
                                        </h3>

                                        <div className="space-y-3">
                                            {region.expressions.map((expr, exprIndex) => (
                                                <div key={exprIndex} className="p-3 bg-blue-50/50 rounded-lg">
                                                    <p className="font-semibold text-blue-900">{expr.phrase}</p>
                                                    <p className="text-gray-700 text-sm mb-1">{expr.meaning}</p>
                                                    <p className="text-blue-600 text-xs italic">{expr.usage}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Slang by Category */}
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
                                Slang by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Category</span>
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {slangCategories.map((category, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="bg-white/50 rounded-xl p-5 shadow-md h-full"
                                    >
                                        <h3 className="text-lg font-bold mb-3 flex items-center text-blue-900">
                                            {category.icon}
                                            <span className="ml-2">{category.category}</span>
                                        </h3>
                                        <div className="space-y-3">
                                            {category.words.map((item, itemIndex) => (
                                                <div key={itemIndex} className="bg-green-50/50 p-2 rounded">
                                                    <p className="font-semibold text-green-800 text-sm">{item.word}</p>
                                                    <p className="text-green-700 text-xs">{item.meaning}</p>
                                                    <p className="text-gray-600 text-xs italic">{item.context}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Common Mistakes */}
                <section className="mb-16 bg-gradient-to-br from-red-50 to-orange-50 py-16">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-6xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-8">
                                Avoid These <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Common Mistakes</span>
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {commonMistakes.map((section, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="bg-white rounded-lg p-5 shadow-md h-full"
                                    >
                                        <h3 className="text-lg font-bold mb-3 flex items-center text-red-900">
                                            {section.icon}
                                            <span className="ml-2">{section.title}</span>
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            {section.mistakes.map((mistake, mistakeIndex) => (
                                                <li key={mistakeIndex} className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-700">{mistake}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Cultural Context */}
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
                                Cultural <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Context</span>
                            </h2>

                            <div className="bg-blue-50/50 rounded-xl p-6 md:p-8 shadow-inner border border-blue-100">
                                <h3 className="text-xl font-bold mb-6 text-blue-900">Using Slang Appropriately in Panama</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-blue-800 mb-3">When to Use Slang</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li><strong>With friends:</strong> Perfect for casual conversations</li>
                                            <li><strong>At parties:</strong> Shows you understand the culture</li>
                                            <li><strong>In markets:</strong> Vendors appreciate local knowledge</li>
                                            <li><strong>With younger people:</strong> They love when foreigners use slang correctly</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-800 mb-3">Formality Rules</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li><strong>Always use 'usted':</strong> Panama is very formal even with slang</li>
                                            <li><strong>Mix appropriately:</strong> Slang + formal pronouns works well</li>
                                            <li><strong>Read the room:</strong> Some situations call for zero slang</li>
                                            <li><strong>Age awareness:</strong> Older generations prefer formal Spanish</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                        <Lightbulb className="w-4 h-4 mr-2" />
                                        Pro Tip
                                    </h4>
                                    <p className="text-yellow-700 text-sm">Start with safer slang like "chevere" and "bacano" before moving to regional expressions. Listen to how locals use slang in different situations and mirror their energy level.</p>
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
                            Practice Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Panamanian Slang</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Join our Spanish classes and practice using authentic Panamanian slang with native speakers. Learn when and how to use these expressions naturally!
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <NextLink href="/spanish-classes-in-isla-colon-bocas-del-toro">
                                <span className="block px-6 py-3 text-center rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-200/50 cursor-pointer text-sm sm:text-base">
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