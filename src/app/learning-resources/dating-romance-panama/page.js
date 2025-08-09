"use client";

import { motion } from "framer-motion";
import {
    Heart,
    ArrowLeft,
    Clock,
    BookOpen,
    MessageCircle,
    Users,
    Coffee,
    Music,
    MapPin,
    Calendar,
    Gift,
    Phone,
    Star,
    Sparkles,
    Camera,
    Moon
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

const romanticExpressions = [
    {
        icon: <Heart className="w-6 h-6 text-white" />,
        title: "Terms of Endearment",
        spanish: "Términos cariñosos",
        examples: [
            { spanish: "Mi amor", english: "My love", pronunciation: "mee ah-MOR" },
            { spanish: "Mi vida", english: "My life", pronunciation: "mee VEE-dah" },
            { spanish: "Corazón", english: "Sweetheart", pronunciation: "koh-rah-SOHN" },
            { spanish: "Cariño", english: "Darling", pronunciation: "kah-REE-nyoh" },
            { spanish: "Preciosa/Precioso", english: "Beautiful/Handsome", pronunciation: "preh-SYOH-sah/preh-SYOH-soh" }
        ],
        gradient: "from-pink-500 to-red-500"
    },
    {
        icon: <Sparkles className="w-6 h-6 text-white" />,
        title: "Compliments",
        spanish: "Cumplidos",
        examples: [
            { spanish: "Eres muy guapa/guapo", english: "You're very beautiful/handsome", pronunciation: "EH-rehs mwee GWAH-pah/GWAH-poh" },
            { spanish: "Tienes una sonrisa hermosa", english: "You have a beautiful smile", pronunciation: "tee-EH-nehs OO-nah sohn-REE-sah ehr-MOH-sah" },
            { spanish: "Me encanta tu personalidad", english: "I love your personality", pronunciation: "meh ehn-KAHN-tah too pehr-soh-nah-lee-DAHD" },
            { spanish: "Eres increíble", english: "You're incredible", pronunciation: "EH-rehs een-kreh-EE-bleh" },
            { spanish: "Tienes unos ojos preciosos", english: "You have beautiful eyes", pronunciation: "tee-EH-nehs OO-nohs OH-hohs preh-SYOH-sohs" }
        ],
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: <Coffee className="w-6 h-6 text-white" />,
        title: "Asking Someone Out",
        spanish: "Invitar a salir",
        examples: [
            { spanish: "¿Te gustaría tomar un café conmigo?", english: "Would you like to have coffee with me?", pronunciation: "teh goos-tah-REE-ah toh-MAHR oon kah-FEH kohn-MEE-goh" },
            { spanish: "¿Quieres ir a cenar?", english: "Do you want to go to dinner?", pronunciation: "KYEH-rehs eer ah seh-NAHR" },
            { spanish: "¿Te interesa ver una película?", english: "Are you interested in seeing a movie?", pronunciation: "teh een-teh-REH-sah vehr OO-nah peh-LEE-koo-lah" },
            { spanish: "¿Qué tal si vamos a la playa?", english: "How about we go to the beach?", pronunciation: "keh tahl see VAH-mohs ah lah PLAH-yah" },
            { spanish: "¿Tienes planes para el fin de semana?", english: "Do you have plans for the weekend?", pronunciation: "tee-EH-nehs PLAH-nehs PAH-rah el feen deh seh-MAH-nah" }
        ],
        gradient: "from-blue-500 to-purple-500"
    },
    {
        icon: <Calendar className="w-6 h-6 text-white" />,
        title: "Planning Dates",
        spanish: "Planear citas",
        examples: [
            { spanish: "¿A qué hora te recojo?", english: "What time should I pick you up?", pronunciation: "ah keh OH-rah teh reh-KOH-hoh" },
            { spanish: "¿Dónde nos encontramos?", english: "Where should we meet?", pronunciation: "DOHN-deh nohs ehn-kohn-TRAH-mohs" },
            { spanish: "Reservé una mesa para dos", english: "I reserved a table for two", pronunciation: "reh-sehr-VEH OO-nah MEH-sah PAH-rah dohs" },
            { spanish: "¿Te gusta bailar?", english: "Do you like to dance?", pronunciation: "teh GOOS-tah bah-ee-LAHR" },
            { spanish: "Conozco un lugar muy romántico", english: "I know a very romantic place", pronunciation: "koh-NOHS-koh oon loo-GAHR mwee roh-MAHN-tee-koh" }
        ],
        gradient: "from-green-500 to-blue-500"
    }
];

const datingPhrases = [
    {
        category: "First Impressions",
        icon: <Star className="w-5 h-5 text-pink-600" />,
        phrases: [
            { spanish: "Encantado/a de conocerte", english: "Nice to meet you", pronunciation: "ehn-kahn-TAH-doh/dah deh koh-noh-SEHR-teh" },
            { spanish: "¿Cómo te llamas?", english: "What's your name?", pronunciation: "KOH-moh teh YAH-mahs" },
            { spanish: "¿De dónde eres?", english: "Where are you from?", pronunciation: "deh DOHN-deh EH-rehs" },
            { spanish: "¿A qué te dedicas?", english: "What do you do for work?", pronunciation: "ah keh teh deh-dee-KAHS" },
            { spanish: "Me gusta tu estilo", english: "I like your style", pronunciation: "meh GOOS-tah too ehs-TEE-loh" }
        ]
    },
    {
        category: "Flirting",
        icon: <Heart className="w-5 h-5 text-pink-600" />,
        phrases: [
            { spanish: "Tienes una energía muy positiva", english: "You have very positive energy", pronunciation: "tee-EH-nehs OO-nah eh-nehr-HEE-ah mwee poh-see-TEE-vah" },
            { spanish: "Me haces reír mucho", english: "You make me laugh a lot", pronunciation: "meh AH-sehs reh-EER MOO-choh" },
            { spanish: "Eres muy divertido/a", english: "You're very fun", pronunciation: "EH-rehs mwee dee-vehr-TEE-doh/dah" },
            { spanish: "Me gustas", english: "I like you", pronunciation: "meh GOOS-tahs" },
            { spanish: "¿Puedo tener tu número?", english: "Can I have your number?", pronunciation: "PWEH-doh teh-NEHR too NOO-meh-roh" }
        ]
    },
    {
        category: "Expressing Feelings",
        icon: <MessageCircle className="w-5 h-5 text-pink-600" />,
        phrases: [
            { spanish: "Me siento muy cómodo/a contigo", english: "I feel very comfortable with you", pronunciation: "meh see-EHN-toh mwee KOH-moh-doh/dah kohn-TEE-goh" },
            { spanish: "Pienso mucho en ti", english: "I think about you a lot", pronunciation: "pee-EHN-soh MOO-choh ehn tee" },
            { spanish: "Eres especial para mí", english: "You're special to me", pronunciation: "EH-rehs ehs-peh-see-AHL PAH-rah mee" },
            { spanish: "Te extraño", english: "I miss you", pronunciation: "teh ehks-TRAH-nyoh" },
            { spanish: "Estoy enamorado/a de ti", english: "I'm in love with you", pronunciation: "ehs-TOH-ee eh-nah-moh-RAH-doh/dah deh tee" }
        ]
    },
    {
        category: "Communication",
        icon: <Phone className="w-5 h-5 text-pink-600" />,
        phrases: [
            { spanish: "¿Me escribes más tarde?", english: "Will you text me later?", pronunciation: "meh ehs-KREE-behs mahs TAHR-deh" },
            { spanish: "Me encanta hablar contigo", english: "I love talking with you", pronunciation: "meh ehn-KAHN-tah ah-BLAHR kohn-TEE-goh" },
            { spanish: "¿Podemos hablar?", english: "Can we talk?", pronunciation: "poh-DEH-mohs ah-BLAHR" },
            { spanish: "Tengo algo que decirte", english: "I have something to tell you", pronunciation: "TEHN-goh AHL-goh keh deh-SEER-teh" },
            { spanish: "Necesitamos hablar", english: "We need to talk", pronunciation: "neh-seh-see-TAH-mohs ah-BLAHR" }
        ]
    }
];

const dateIdeas = [
    {
        title: "Beach Romance",
        icon: <Moon className="w-5 h-5 text-blue-600" />,
        spanish: "Romance en la playa",
        ideas: [
            "Sunset walk on Playa Bluff",
            "Beach picnic in Bocas del Toro",
            "Surfing lesson together",
            "Stargazing on Red Frog Beach",
            "Beachside dinner at a local restaurant"
        ]
    },
    {
        title: "Adventure Dates",
        icon: <Camera className="w-5 h-5 text-blue-600" />,
        spanish: "Citas de aventura",
        ideas: [
            "Zip-lining through the rainforest",
            "Snorkeling at Coral Cay",
            "Hiking in Manuel Antonio",
            "Dolphin watching tour",
            "Coffee plantation visit"
        ]
    },
    {
        title: "Cultural Experiences",
        icon: <Music className="w-5 h-5 text-blue-600" />,
        spanish: "Experiencias culturales",
        ideas: [
            "Salsa dancing lessons",
            "Local festival or carnival",
            "Traditional cooking class",
            "Visit to indigenous communities",
            "Live music at a local venue"
        ]
    },
    {
        title: "City Romance",
        icon: <MapPin className="w-5 h-5 text-blue-600" />,
        spanish: "Romance urbano",
        ideas: [
            "Rooftop dinner in Panama City",
            "Walk through Casco Viejo",
            "Canal viewing at Miraflores",
            "Shopping at Albrook Mall",
            "Art gallery in San Felipe"
        ]
    }
];

const culturalTips = [
    {
        title: "Dating Customs",
        icon: <Users className="w-5 h-5 text-pink-600" />,
        tips: [
            "Family is very important - expect to meet relatives early",
            "Men often pay for dates, but splitting is becoming common",
            "Punctuality is flexible - 'Panamanian time' applies to dates too",
            "Physical affection in public is generally accepted",
            "Traditional gender roles are still common but changing"
        ]
    },
    {
        title: "Communication Style",
        icon: <MessageCircle className="w-5 h-5 text-pink-600" />,
        tips: [
            "Panamanians are generally warm and expressive",
            "Direct communication is appreciated but be respectful",
            "Compliments are welcomed and expected",
            "Showing genuine interest in their culture is attractive",
            "Learning Spanish shows commitment and respect"
        ]
    },
    {
        title: "Social Etiquette",
        icon: <Gift className="w-5 h-5 text-pink-600" />,
        tips: [
            "Dress well - appearance matters in dating culture",
            "Bring small gifts like flowers or chocolates",
            "Be respectful to friends and family",
            "Share meals - food is central to relationships",
            "Be patient with cultural differences"
        ]
    },
    {
        title: "Relationship Expectations",
        icon: <Heart className="w-5 h-5 text-pink-600" />,
        tips: [
            "Relationships often move quickly to serious commitment",
            "Family approval is important for long-term relationships",
            "Traditional values coexist with modern dating",
            "Religious beliefs may influence relationship dynamics",
            "Marriage and children are often ultimate relationship goals"
        ]
    }
];

export default function DatingRomancePanamaArticle() {
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
                            <div className="flex items-center text-pink-600 hover:text-purple-600 transition-colors cursor-pointer">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                <span className="font-medium">All Resources</span>
                            </div>
                        </NextLink>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-12 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-white to-purple-50/30 z-0"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-8">
                            <div className="inline-flex items-center bg-pink-50 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Heart className="w-4 h-4 mr-2" />
                                Romance Guide
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Dating & Romance in Panama:
                                <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                    Love Language Guide
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Master romantic expressions, dating vocabulary, and cultural insights for navigating love and relationships in Panama.
                            </p>

                            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-pink-600" />
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
                                    src="/dating-romance-panama.png"
                                    alt="Dating and Romance in Panama Spanish Guide"
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
                {/* Romantic Expressions */}
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
                                Essential <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Romantic Expressions</span>
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {romanticExpressions.map((category, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center shadow-md mr-4`}>
                                                {category.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                                                <p className="text-pink-600 text-sm font-medium">{category.spanish}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            {category.examples.map((phrase, phraseIndex) => (
                                                <div key={phraseIndex} className="p-3 bg-pink-50/50 rounded-lg">
                                                    <p className="font-semibold text-pink-900">{phrase.spanish}</p>
                                                    <p className="text-gray-700 text-sm mb-1">{phrase.english}</p>
                                                    <p className="text-pink-600 text-xs italic">{phrase.pronunciation}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Dating Phrases */}
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
                                Dating <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Conversation Starters</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {datingPhrases.map((section, sectionIndex) => (
                                    <motion.div
                                        key={sectionIndex}
                                        variants={fadeInUp}
                                        className="bg-white/50 rounded-xl p-6 shadow-md"
                                    >
                                        <h3 className="text-xl font-bold mb-4 flex items-center text-pink-900">
                                            {section.icon}
                                            <span className="ml-2">{section.category}</span>
                                        </h3>

                                        <div className="space-y-3">
                                            {section.phrases.map((phrase, phraseIndex) => (
                                                <div key={phraseIndex} className="p-3 bg-pink-50/50 rounded-lg">
                                                    <p className="font-semibold text-pink-900">{phrase.spanish}</p>
                                                    <p className="text-gray-700 text-sm mb-1">{phrase.english}</p>
                                                    <p className="text-pink-600 text-xs italic">{phrase.pronunciation}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Date Ideas */}
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
                                Perfect <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Date Ideas</span> in Panama
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {dateIdeas.map((dateCategory, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="bg-white/50 rounded-xl p-5 shadow-md h-full"
                                    >
                                        <h3 className="text-lg font-bold mb-3 flex items-center text-pink-900">
                                            {dateCategory.icon}
                                            <span className="ml-2">{dateCategory.title}</span>
                                        </h3>
                                        <p className="text-pink-600 text-sm font-medium mb-3">{dateCategory.spanish}</p>
                                        <ul className="space-y-2 text-sm">
                                            {dateCategory.ideas.map((idea, ideaIndex) => (
                                                <li key={ideaIndex} className="flex items-start gap-2">
                                                    <Heart className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{idea}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Cultural Tips */}
                <section className="mb-16 bg-gradient-to-br from-pink-50 to-purple-50 py-16">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-6xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Cultural <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Dating Tips</span>
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {culturalTips.map((tipSection, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="bg-white rounded-xl p-5 shadow-md h-full"
                                    >
                                        <h3 className="text-lg font-bold mb-3 flex items-center text-pink-900">
                                            {tipSection.icon}
                                            <span className="ml-2">{tipSection.title}</span>
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            {tipSection.tips.map((tip, tipIndex) => (
                                                <li key={tipIndex} className="flex items-start gap-2">
                                                    <Sparkles className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
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

                {/* Bonus Vocabulary */}
                <section className="mb-16 bg-white py-16 border-t border-b border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-6xl mx-auto text-center"
                        >
                            <h2 className="text-3xl font-bold mb-8">
                                Essential <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Love Vocabulary</span>
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                                <div className="bg-pink-50 rounded-lg p-5 shadow-md">
                                    <h4 className="font-bold text-pink-900 mb-3 flex items-center">
                                        <Heart className="w-5 h-5 mr-2" />
                                        Emotions
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Amor:</strong> Love</li>
                                        <li><strong>Cariño:</strong> Affection</li>
                                        <li><strong>Pasión:</strong> Passion</li>
                                        <li><strong>Ternura:</strong> Tenderness</li>
                                        <li><strong>Felicidad:</strong> Happiness</li>
                                        <li><strong>Celos:</strong> Jealousy</li>
                                        <li><strong>Confianza:</strong> Trust</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-5 shadow-md">
                                    <h4 className="font-bold text-purple-900 mb-3 flex items-center">
                                        <Users className="w-5 h-5 mr-2" />
                                        Relationships
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Novio/a:</strong> Boyfriend/Girlfriend</li>
                                        <li><strong>Pareja:</strong> Partner</li>
                                        <li><strong>Esposo/a:</strong> Husband/Wife</li>
                                        <li><strong>Compromiso:</strong> Engagement</li>
                                        <li><strong>Matrimonio:</strong> Marriage</li>
                                        <li><strong>Aniversario:</strong> Anniversary</li>
                                        <li><strong>Romance:</strong> Romance</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-5 shadow-md">
                                    <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                                        <Gift className="w-5 h-5 mr-2" />
                                        Special Occasions
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>San Valentín:</strong> Valentine's Day</li>
                                        <li><strong>Cumpleaños:</strong> Birthday</li>
                                        <li><strong>Regalos:</strong> Gifts</li>
                                        <li><strong>Flores:</strong> Flowers</li>
                                        <li><strong>Sorpresa:</strong> Surprise</li>
                                        <li><strong>Serenata:</strong> Serenade</li>
                                        <li><strong>Proposición:</strong> Proposal</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Cultural Insights */}
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
                                Panamanian <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Romance Culture</span>
                            </h2>

                            <div className="bg-pink-50/50 rounded-xl p-6 md:p-8 shadow-inner border border-pink-100">
                                <h3 className="text-xl font-bold mb-4 text-pink-900">Understanding Love in Panama</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-pink-100 p-2 rounded-full">
                                            <Heart className="w-4 h-4 text-pink-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-pink-900">Family Integration</h4>
                                            <p className="text-gray-700 text-sm">Romantic relationships in Panama often involve the whole family. Meeting parents and siblings early is normal and expected.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-pink-100 p-2 rounded-full">
                                            <Music className="w-4 h-4 text-pink-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-pink-900">Music & Dance</h4>
                                            <p className="text-gray-700 text-sm">Salsa, merengue, and reggaeton play important roles in courtship. Dancing together is a common way to show romantic interest.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-pink-100 p-2 rounded-full">
                                            <Gift className="w-4 h-4 text-pink-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-pink-900">Romantic Gestures</h4>
                                            <p className="text-gray-700 text-sm">Small, thoughtful gifts and surprise visits are highly valued. Serenades and public displays of affection are still appreciated.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-pink-100 p-2 rounded-full">
                                            <Calendar className="w-4 h-4 text-pink-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-pink-900">Religious Influence</h4>
                                            <p className="text-gray-700 text-sm">Catholic traditions influence many relationships, with marriage and commitment being highly valued cultural ideals.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Common Mistakes to Avoid */}
                <section className="mb-16 relative overflow-hidden">
                    <MonsteraBackground />
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Common <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Dating Mistakes</span> to Avoid
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/50 rounded-xl p-6 shadow-md">
                                    <h3 className="text-xl font-bold mb-4 text-red-900 flex items-center">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                        Cultural Don'ts
                                    </h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't ignore or disrespect family members</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't be overly casual about religion or traditions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't assume all women are financially dependent</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't rush physical intimacy</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't criticize Panamanian customs or compare to your country</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/50 rounded-xl p-6 shadow-md">
                                    <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        Better Approaches
                                    </h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 font-bold">✓</span>
                                            <span className="text-gray-700">Show genuine interest in family and culture</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 font-bold">✓</span>
                                            <span className="text-gray-700">Ask questions about traditions respectfully</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 font-bold">✓</span>
                                            <span className="text-gray-700">Recognize and respect individual independence</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 font-bold">✓</span>
                                            <span className="text-gray-700">Build emotional connection before physical</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 font-bold">✓</span>
                                            <span className="text-gray-700">Express appreciation for local culture and people</span>
                                        </li>
                                    </ul>
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
                            Ready to Find Love in <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Panama?</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Perfect your Spanish romantic vocabulary! Book personalized Spanish lessons and practice real romantic conversations with confidence.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <NextLink href="/spanish-classes-in-isla-colon-bocas-del-toro">
                                <span className="block px-6 py-3 text-center rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-200/50 cursor-pointer text-sm sm:text-base">
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