"use client";

import { motion } from "framer-motion";
import {
    AlertTriangle,
    ArrowLeft,
    Clock,
    BookOpen,
    X,
    CheckCircle,
    MessageSquare,
    Brain,
    Lightbulb,
    Target,
    Users,
    Zap,
    Eye,
    Heart,
    Star
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

const falseFriends = [
    {
        icon: <AlertTriangle className="w-6 h-6 text-white" />,
        spanish: "Éxito",
        englishMeaning: "Success",
        commonMistake: "Exit",
        example: "El Canal de Panamá fue un gran éxito (The Panama Canal was a great success)",
        gradient: "from-red-500 to-red-600"
    },
    {
        icon: <AlertTriangle className="w-6 h-6 text-white" />,
        spanish: "Realizar",
        englishMeaning: "To carry out / To do",
        commonMistake: "To realize",
        example: "Voy a realizar un tour por Casco Viejo (I'm going to take a tour of Casco Viejo)",
        gradient: "from-orange-500 to-orange-600"
    },
    {
        icon: <AlertTriangle className="w-6 h-6 text-white" />,
        spanish: "Embarazada",
        englishMeaning: "Pregnant",
        commonMistake: "Embarrassed",
        example: "Mi amiga panameña está embarazada (My Panamanian friend is pregnant)",
        gradient: "from-yellow-500 to-yellow-600"
    },
    {
        icon: <AlertTriangle className="w-6 h-6 text-white" />,
        spanish: "Actual",
        englishMeaning: "Current / Present",
        commonMistake: "Actual",
        example: "El presidente actual de Panamá (The current president of Panama)",
        gradient: "from-green-500 to-green-600"
    },
    {
        icon: <AlertTriangle className="w-6 h-6 text-white" />,
        spanish: "Playa",
        englishMeaning: "Beach",
        commonMistake: "Play",
        example: "Vamos a la playa en Bocas del Toro (Let's go to the beach in Bocas del Toro)",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: <AlertTriangle className="w-6 h-6 text-white" />,
        spanish: "Éxito",
        englishMeaning: "Success",
        commonMistake: "Exit",
        example: "Encontrar el éxito en los negocios panameños (Finding success in Panamanian business)",
        gradient: "from-purple-500 to-purple-600"
    }
];

const grammarMistakes = [
    {
        category: "Ser vs Estar",
        icon: <Brain className="w-5 h-5 text-blue-600" />,
        mistakes: [
            { 
                wrong: "Estoy guía turística", 
                right: "Soy guía turística", 
                explanation: "Use SER for profession - common mistake when talking about jobs in Panama's tourism industry",
                tip: "SER = permanent job, ESTAR = temporary location"
            },
            { 
                wrong: "El sancocho es muy caliente", 
                right: "El sancocho está muy caliente", 
                explanation: "Use ESTAR for temperature - especially important when talking about Panama's delicious hot foods",
                tip: "Food temperature changes, use ESTAR"
            },
            { 
                wrong: "Los panameños están muy amables", 
                right: "Los panameños son muy amables", 
                explanation: "Kindness is a characteristic of Panamanian culture, not a temporary state",
                tip: "Cultural traits and personality use SER"
            }
        ]
    },
    {
        category: "Por vs Para",
        icon: <Target className="w-5 h-5 text-blue-600" />,
        mistakes: [
            { 
                wrong: "Caminé para dos horas en Casco Viejo", 
                right: "Caminé por dos horas en Casco Viejo", 
                explanation: "Use POR for duration of time when exploring Panama City's historic district",
                tip: "POR = how long you walked, PARA = where you're walking to"
            },
            { 
                wrong: "Este regalo es por mi familia en Panamá", 
                right: "Este regalo es para mi familia en Panamá", 
                explanation: "Use PARA for the intended recipient of gifts from Panama",
                tip: "PARA shows who will receive the gift"
            },
            { 
                wrong: "Viajamos para autobús a Colón", 
                right: "Viajamos por autobús a Colón", 
                explanation: "Use POR for means of transportation when traveling around Panama",
                tip: "POR = how you travel, PARA = where you're going"
            }
        ]
    },
    {
        category: "Panamanian Expressions",
        icon: <Users className="w-5 h-5 text-blue-600" />,
        mistakes: [
            { 
                wrong: "Voy a tomar el diablo rojo", 
                right: "Voy a montar el diablo rojo", 
                explanation: "In Panama, you 'mount' or 'ride' the bus, not 'take' it like in English",
                tip: "MONTAR is used for vehicles in Panama Spanish"
            },
            { 
                wrong: "¿Cuánto cuesta una cola?", 
                right: "¿Cuánto cuesta una Coca-Cola?", 
                explanation: "In Panama, 'cola' means line/queue, not soda. Say the full name or use 'refresco'",
                tip: "Be specific with drink names in Panama"
            },
            { 
                wrong: "Me gustan los plátanos dulces", 
                right: "Me gustan los maduros", 
                explanation: "Sweet plantains are called 'maduros' in Panama, not 'plátanos dulces'",
                tip: "Learn local food names - very important in Panama"
            }
        ]
    },
    {
        category: "Direct Translation Traps",
        icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
        mistakes: [
            { 
                wrong: "Tengo 30 años viejo", 
                right: "Tengo 30 años", 
                explanation: "Don't add 'old' when stating age - common mistake by English speakers in Panama",
                tip: "Just say 'Tengo X años' - no need for 'viejo'"
            },
            { 
                wrong: "Estoy caliente en este clima", 
                right: "Tengo calor en este clima", 
                explanation: "'Estoy caliente' has sexual meaning in Panama! Use 'Tengo calor' for hot weather",
                tip: "Very important cultural difference in Panama!"
            },
            { 
                wrong: "Voy para atrás a mi hotel", 
                right: "Voy de vuelta a mi hotel", 
                explanation: "'Going back' isn't direct translation - use 'de vuelta' or 'regresar'",
                tip: "DE VUELTA = going back to a place"
            }
        ]
    }
];

const pronunciationTips = [
    {
        title: "Panamanian R's",
        icon: <Zap className="w-5 h-5 text-blue-600" />,
        tips: [
            "Panamanian R's are softer than Mexican Spanish - don't over-roll",
            "Practice with local words: carro, arroz con pollo, Chiriquí",
            "In coastal areas like Bocas, R's are even softer",
            "Single 'r' sounds like the 'dd' in 'ladder'",
            "Listen to Panamanian radio for authentic pronunciation"
        ]
    },
    {
        title: "Silent Letters in Panama",
        icon: <Eye className="w-5 h-5 text-blue-600" />,
        tips: [
            "H is always silent: hola, hospital, hotel",
            "Final 's' often dropped in Panama: 'vamo' instead of 'vamos'",
            "D at end of words often silent: 'ciudá' not 'ciudad'",
            "Common in Panama City and interior provinces",
            "Practice: más o menos = 'má o meno'"
        ]
    },
    {
        title: "Panamanian Vowel Sounds",
        icon: <Heart className="w-5 h-5 text-blue-600" />,
        tips: [
            "Panamanian Spanish has clear, crisp vowels",
            "Don't elongate like in English: 'a' is short 'ah'",
            "E = 'eh' as in 'bet' (never 'ay')",
            "I = 'ee' but shorter than English",
            "Practice local places: Panamá, Colón, Azuero"
        ]
    },
    {
        title: "Local Accent Features",
        icon: <Star className="w-5 h-5 text-blue-600" />,
        tips: [
            "Faster rhythm than Mexican Spanish",
            "L and R sometimes confused: 'cucaracha' = 'cucalacha'",
            "Y sounds like 'j': 'yo' sounds like 'jo'",
            "Final consonants often softer or dropped",
            "Caribbean coast has different rhythm than interior"
        ]
    }
];

const culturalMistakes = [
    {
        mistake: "Using 'tú' instead of 'usted' in Panama",
        explanation: "Panama is very formal - even close friends and family often use 'usted'. Using 'tú' can sound rude or overly familiar.",
        solution: "Start with 'usted' always. Let Panamanians tell you when to switch to 'tú'. Observe local conversations."
    },
    {
        mistake: "Saying 'Estoy caliente' for hot weather",
        explanation: "This is sexually suggestive in Panama! A major cultural faux pas that will cause embarrassment and giggles.",
        solution: "Say 'Tengo calor' (I'm hot) or 'Hace mucho calor' (It's very hot). Very important in Panama's tropical climate!"
    },
    {
        mistake: "Not knowing Panamanian food vocabulary",
        explanation: "Ordering food incorrectly: 'cola' means line, not soda. 'Plátanos dulces' vs 'maduros' (sweet plantains).",
        solution: "Learn local food names: sancocho, ropa vieja, maduros, yuca frita, chicha. Ask '¿Cómo se dice...?' for local terms."
    },
    {
        mistake: "Ignoring Panamanian time culture",
        explanation: "'Ahora' doesn't mean 'right now' - it's flexible. 'En un ratito' (in a little while) can mean much longer than expected.",
        solution: "Be patient with timing. Ask 'más o menos' (more or less) for approximate times. Embrace 'hora panameña' (Panamanian time)."
    },
    {
        mistake: "Using Mexican Spanish expressions",
        explanation: "Many Spanish learners use Mexican phrases that don't work in Panama: 'órale', '¿mande?', or '¿qué onda?'",
        solution: "Learn Panamanian expressions: '¡Qué chevere!' (cool!), '¿Qué tal?' (what's up?), 'Bacano' (awesome). Listen to local TV and radio."
    },
    {
        mistake: "Not understanding 'diablo rojo' culture",
        explanation: "Calling buses 'autobús' instead of knowing local transport terms. Not understanding bus etiquette and payment systems.",
        solution: "Learn: 'diablo rojo' (old colorful buses), 'metrobús' (new system), 'ruta' (route). Say 'buenos días' when boarding!"
    }
];

export default function SpanishMistakesArticle() {
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
                            <div className="inline-flex items-center bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <AlertTriangle className="w-4 h-4 mr-2" />
                                Grammar Guide
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Common Spanish Mistakes:
                                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Avoid These Pitfalls
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Learn from the most frequent errors English speakers make when learning Spanish in Panama, including false friends, grammar traps, and cultural missteps specific to Panamanian Spanish.
                            </p>

                            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    <span>5 min read</span>
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
                                    src="/common-spanish-mistakes.png"
                                    alt="Common Spanish Mistakes for English Speakers"
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
                {/* False Friends */}
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
                                False <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Friends</span>
                            </h2>
                            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                                These Spanish words look like English words but have completely different meanings. Don't let them trick you in Panama!
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {falseFriends.map((word, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className={`w-10 h-10 bg-gradient-to-r ${word.gradient} rounded-lg flex items-center justify-center shadow-md mr-3`}>
                                                {word.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{word.spanish}</h3>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                                    <span className="text-green-700">{word.englishMeaning}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <X className="w-3 h-3 text-red-500" />
                                                    <span className="text-red-700">NOT: {word.commonMistake}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm italic">{word.example}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Grammar Mistakes */}
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
                                Grammar <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Traps</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {grammarMistakes.map((section, sectionIndex) => (
                                    <motion.div
                                        key={sectionIndex}
                                        variants={fadeInUp}
                                        className="bg-white/50 rounded-xl p-6 shadow-md"
                                    >
                                        <h3 className="text-xl font-bold mb-4 flex items-center text-blue-900">
                                            {section.icon}
                                            <span className="ml-2">{section.category}</span>
                                        </h3>

                                        <div className="space-y-4">
                                            {section.mistakes.map((mistake, mistakeIndex) => (
                                                <div key={mistakeIndex} className="p-4 bg-red-50/50 rounded-lg border border-red-100">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <X className="w-4 h-4 text-red-500" />
                                                        <span className="font-semibold text-red-700 line-through">{mistake.wrong}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                        <span className="font-semibold text-green-700">{mistake.right}</span>
                                                    </div>
                                                    <p className="text-gray-700 text-sm mb-1">{mistake.explanation}</p>
                                                    <div className="bg-blue-50 p-2 rounded text-xs text-blue-700 flex items-center gap-1">
                                                        <Lightbulb className="w-3 h-3" />
                                                        {mistake.tip}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Pronunciation Tips */}
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
                                Pronunciation <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pitfalls</span>
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {pronunciationTips.map((tipSection, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="bg-white/50 rounded-xl p-5 shadow-md h-full"
                                    >
                                        <h3 className="text-lg font-bold mb-3 flex items-center text-blue-900">
                                            {tipSection.icon}
                                            <span className="ml-2">{tipSection.title}</span>
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            {tipSection.tips.map((tip, tipIndex) => (
                                                <li key={tipIndex} className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
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

                {/* Cultural Mistakes */}
                <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 py-16">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-6xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-8">
                                Cultural <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Missteps</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {culturalMistakes.map((mistake, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="bg-white rounded-lg p-6 shadow-md"
                                    >
                                        <div className="flex items-start gap-3 mb-3">
                                            <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-bold text-red-900 mb-2">{mistake.mistake}</h3>
                                                <p className="text-gray-700 text-sm mb-3">{mistake.explanation}</p>
                                                <div className="bg-green-50 p-3 rounded-lg">
                                                    <div className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                        <p className="text-green-800 text-sm font-medium">{mistake.solution}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Quick Reference */}
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
                                Quick <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reference</span>
                            </h2>

                            <div className="bg-blue-50/50 rounded-xl p-6 md:p-8 shadow-inner border border-blue-100">
                                <h3 className="text-xl font-bold mb-6 text-blue-900">Panama-Specific Spanish Rules</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-blue-800 mb-3">SER vs ESTAR in Panama</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li><strong>SER:</strong> Profession (Soy guía), nationality (Soy panameño)</li>
                                            <li><strong>ESTAR:</strong> Location (Estoy en Bocas), food temperature (Está caliente)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-800 mb-3">POR vs PARA in Panama</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li><strong>POR:</strong> Transportation (por autobús), duration (por dos horas)</li>
                                            <li><strong>PARA:</strong> Destination (para Colón), recipient (para mi familia)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-800 mb-3">Panamanian Expressions</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li><strong>¡Qué chevere!</strong> How cool! (not 'órale' like Mexico)</li>
                                            <li><strong>Montar:</strong> To ride (buses, horses) - not 'tomar'</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-800 mb-3">Temperature Talk</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li><strong>Tengo calor:</strong> I'm hot (correct way)</li>
                                            <li><strong>Estoy caliente:</strong> NEVER use this! (sexual meaning)</li>
                                        </ul>
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
                            Master Panamanian Spanish with <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expert Guidance</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Get personalized feedback and practice sessions to eliminate these common errors from your Panamanian Spanish forever.
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