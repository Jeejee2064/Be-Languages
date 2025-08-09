"use client";

import { motion } from "framer-motion";
import {
    ShoppingCart,
    ArrowLeft,
    Clock,
    BookOpen,
    Store,
    Tag,
    DollarSign,
    CreditCard,
    MapPin,
    Users,
    Scale,
    Shirt,
    Apple,
    Gift,
    MessageCircle,
    CheckCircle,
    TrendingDown,
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

const shoppingVenues = [
    {
        icon: <Store className="w-6 h-6 text-white" />,
        title: "Traditional Markets",
        spanish: "Mercados tradicionales",
        description: "Local markets like Mercado de Mariscos and Mercado San Felipe Neri offer fresh produce, seafood, and authentic experiences. Perfect for bargaining practice!",
        gradient: "from-blue-500 to-emerald-600"
    },
    {
        icon: <ShoppingCart className="w-6 h-6 text-white" />,
        title: "Shopping Malls",
        spanish: "Centros comerciales",
        description: "Modern malls like Albrook Mall and Multiplaza offer fixed prices, air conditioning, and international brands. No bargaining here!",
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Street Vendors",
        spanish: "Vendedores ambulantes",
        description: "Street vendors sell everything from fresh fruit to handmade crafts. Great for practicing bargaining and discovering local treasures.",
        gradient: "from-purple-500 to-red-600"
    },
    {
        icon: <Shirt className="w-6 h-6 text-white" />,
        title: "Textile Markets",
        spanish: "Mercados de textiles",
        description: "Via España and other areas offer clothing, fabrics, and accessories at negotiable prices. Perfect for finding unique pieces.",
        gradient: "from-purple-500 to-pink-600"
    },
    {
        icon: <Gift className="w-6 h-6 text-white" />,
        title: "Artisan Markets",
        spanish: "Mercados artesanales",
        description: "Casco Viejo and tourist areas feature local crafts, molas, and souvenirs. Support local artisans while practicing Spanish!",
        gradient: "from-teal-500 to-cyan-600"
    },
    {
        icon: <Apple className="w-6 h-6 text-white" />,
        title: "Supermarkets",
        spanish: "Supermercados",
        description: "Super 99, Riba Smith, and other chains offer groceries at fixed prices. Great for everyday shopping vocabulary practice.",
        gradient: "from-lime-500 to-blue-600"
    }
];

const shoppingPhrases = [
    {
        category: "Basic Shopping",
        icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
        phrases: [
            { spanish: "¿Cuánto cuesta esto?", english: "How much does this cost?", pronunciation: "KWAN-toh KWES-tah EHS-toh" },
            { spanish: "¿Dónde puedo encontrar...?", english: "Where can I find...?", pronunciation: "DOHN-deh PWEH-doh ehn-kohn-TRAHR" },
            { spanish: "¿Tienen esto en otra talla?", english: "Do you have this in another size?", pronunciation: "tee-EH-nehn EHS-toh ehn OH-trah TAH-yah" },
            { spanish: "¿Puedo probármelo?", english: "Can I try it on?", pronunciation: "PWEH-doh proh-BAHR-meh-loh" },
            { spanish: "¿Dónde está el probador?", english: "Where is the fitting room?", pronunciation: "DOHN-deh ehs-TAH el proh-bah-DOHR" }
        ]
    },
    {
        category: "Bargaining Essentials",
        icon: <TrendingDown className="w-5 h-5 text-blue-600" />,
        phrases: [
            { spanish: "¿Es su mejor precio?", english: "Is that your best price?", pronunciation: "ehs soo meh-HOHR PREH-syoh" },
            { spanish: "¿Me puede hacer un descuento?", english: "Can you give me a discount?", pronunciation: "meh PWEH-deh ah-SEHR oon dehs-KWEHN-toh" },
            { spanish: "Está muy caro", english: "It's very expensive", pronunciation: "ehs-TAH mwee KAH-roh" },
            { spanish: "¿Qué tal si pago...?", english: "How about if I pay...?", pronunciation: "keh tahl see PAH-goh" },
            { spanish: "Si compro dos, ¿cuánto me cobra?", english: "If I buy two, how much do you charge me?", pronunciation: "see KOM-proh dohs KWAN-toh meh KOH-brah" }
        ]
    },
    {
        category: "Payment & Checkout",
        icon: <CreditCard className="w-5 h-5 text-blue-600" />,
        phrases: [
            { spanish: "¿Aceptan tarjetas de crédito?", english: "Do you accept credit cards?", pronunciation: "ah-SEP-tahn tar-HEH-tahs deh KREH-dee-toh" },
            { spanish: "¿Puedo pagar en efectivo?", english: "Can I pay in cash?", pronunciation: "PWEH-doh pah-GAHR ehn eh-fehk-TEE-voh" },
            { spanish: "¿Tienen cambio para un billete de 20?", english: "Do you have change for a 20 bill?", pronunciation: "tee-EH-nehn KAM-bee-oh PAH-rah oon bee-YEH-teh deh VEHN-teh" },
            { spanish: "¿Me puede dar el recibo?", english: "Can you give me the receipt?", pronunciation: "meh PWEH-deh dahr el reh-SEE-boh" },
            { spanish: "¿Hay garantía?", english: "Is there a warranty?", pronunciation: "ah-ee gah-rahn-TEE-ah" }
        ]
    },
    {
        category: "Quality & Comparison",
        icon: <Star className="w-5 h-5 text-blue-600" />,
        phrases: [
            { spanish: "¿Es de buena calidad?", english: "Is it good quality?", pronunciation: "ehs deh BWEH-nah kah-lee-DAHD" },
            { spanish: "¿Tienen algo más barato?", english: "Do you have something cheaper?", pronunciation: "tee-EH-nehn AHL-goh mahs bah-RAH-toh" },
            { spanish: "¿Este es el original?", english: "Is this the original?", pronunciation: "EHS-teh ehs el oh-ree-hee-NAHL" },
            { spanish: "¿Cuál me recomienda?", english: "Which one do you recommend?", pronunciation: "kwahl meh reh-koh-mee-EHN-dah" },
            { spanish: "No me convence", english: "I'm not convinced", pronunciation: "noh meh kohn-VEHN-seh" }
        ]
    }
];

const bargainingStrategies = [
    {
        title: "Starting the Negotiation",
        icon: <MessageCircle className="w-5 h-5 text-purple-600" />,
        tips: [
            "Always ask '¿Es su mejor precio?' first",
            "Show genuine interest in the product",
            "Start with a friendly greeting",
            "Compliment the quality before discussing price",
            "Ask about bulk discounts if buying multiple items"
        ]
    },
    {
        title: "Effective Bargaining Phrases",
        icon: <Scale className="w-5 h-5 text-purple-600" />,
        tips: [
            "Use 'Está muy caro' (It's very expensive) politely",
            "Offer a specific lower price: '¿Qué tal 15 dólares?'",
            "Mention you're a tourist: 'Soy turista'",
            "Ask for a 'precio especial' (special price)",
            "Suggest cash payment for better deals"
        ]
    },
    {
        title: "Closing the Deal",
        icon: <CheckCircle className="w-5 h-5 text-purple-600" />,
        tips: [
            "Be prepared to walk away if price isn't right",
            "Meet somewhere in the middle",
            "Agree on final price before paying",
            "Check the item carefully before purchase",
            "Thank them: 'Muchas gracias' builds goodwill"
        ]
    },
    {
        title: "Cultural Etiquette",
        icon: <Users className="w-5 h-5 text-purple-600" />,
        tips: [
            "Bargaining is expected in markets, not stores",
            "Be respectful and patient during negotiations",
            "Smile and maintain friendly demeanor",
            "Don't be offended by initial high prices",
            "Small vendors depend on sales - be fair"
        ]
    }
];

const shoppingVocabulary = [
    {
        category: "Clothing & Sizes",
        icon: <Shirt className="w-5 h-5 text-blue-600" />,
        vocabulary: [
            { spanish: "Camisa", english: "Shirt" },
            { spanish: "Pantalón", english: "Pants" },
            { spanish: "Vestido", english: "Dress" },
            { spanish: "Zapatos", english: "Shoes" },
            { spanish: "Talla pequeña/mediana/grande", english: "Small/Medium/Large size" },
            { spanish: "¿Tienen talla XL?", english: "Do you have size XL?" },
            { spanish: "Me queda bien/mal", english: "It fits me well/badly" }
        ]
    },
    {
        category: "Food & Market Items",
        icon: <Apple className="w-5 h-5 text-blue-600" />,
        vocabulary: [
            { spanish: "Frutas", english: "Fruits" },
            { spanish: "Verduras", english: "Vegetables" },
            { spanish: "Pescado", english: "Fish" },
            { spanish: "Carne", english: "Meat" },
            { spanish: "Por libra/kilo", english: "Per pound/kilo" },
            { spanish: "Fresco", english: "Fresh" },
            { spanish: "Maduro", english: "Ripe" }
        ]
    },
    {
        category: "Souvenirs & Crafts",
        icon: <Gift className="w-5 h-5 text-blue-600" />,
        vocabulary: [
            { spanish: "Molas", english: "Traditional textile art" },
            { spanish: "Artesanías", english: "Handicrafts" },
            { spanish: "Recuerdos", english: "Souvenirs" },
            { spanish: "Hecho a mano", english: "Handmade" },
            { spanish: "Típico", english: "Traditional/typical" },
            { spanish: "Auténtico", english: "Authentic" },
            { spanish: "Para regalo", english: "For a gift" }
        ]
    }
];

const marketLocations = [
    {
        name: "Mercado de Mariscos",
        type: "Seafood Market",
        location: "Casco Viejo, Panama City",
        specialty: "Fresh fish, ceviche, local seafood",
        bargaining: "Limited - mostly fixed prices",
        tips: "Best early morning for freshest selection"
    },
    {
        name: "Mercado San Felipe Neri",
        type: "Traditional Market",
        location: "Casco Viejo, Panama City",
        specialty: "Fruits, vegetables, local products",
        bargaining: "Yes - especially for bulk purchases",
        tips: "Practice your Spanish with friendly vendors"
    },
    {
        name: "Via España Markets",
        type: "Textile & Clothing",
        location: "Via España, Panama City",
        specialty: "Clothes, fabrics, accessories",
        bargaining: "Expected - start at 50% of asking price",
        tips: "Check quality carefully before buying"
    },
    {
        name: "Artisan Markets",
        type: "Crafts & Souvenirs",
        location: "Casco Viejo & Tourist Areas",
        specialty: "Molas, handicrafts, souvenirs",
        bargaining: "Yes - support local artisans fairly",
        tips: "Ask about the cultural significance of items"
    }
];

export default function ShoppingBargainingPanamaArticle() {
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
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Shopping Guide
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Shopping & Bargaining in Panama:
                                <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    Market Mastery Guide
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Navigate markets, stores, and street vendors with confidence using essential shopping vocabulary and proven bargaining techniques.
                            </p>

                            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    <span>4 min read</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-purple-600" />
                                    <span>Beginner</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Featured Image */}
                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="relative h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="/shopping-bargaining-panama.png"
                                    alt="Shopping and Bargaining in Panama Spanish Guide"
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
                {/* Shopping Venues */}
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
                                Where to <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Shop</span> in Panama
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {shoppingVenues.map((venue, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className={`w-10 h-10 bg-gradient-to-r ${venue.gradient} rounded-lg flex items-center justify-center shadow-md mr-3`}>
                                                {venue.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{venue.title}</h3>
                                                <p className="text-blue-600 text-sm font-medium">{venue.spanish}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm">{venue.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Essential Shopping Phrases */}
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
                                Essential <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Shopping Phrases</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {shoppingPhrases.map((section, sectionIndex) => (
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
                                            {section.phrases.map((phrase, phraseIndex) => (
                                                <div key={phraseIndex} className="p-3 bg-blue-50/50 rounded-lg">
                                                    <p className="font-semibold text-blue-900">{phrase.spanish}</p>
                                                    <p className="text-gray-700 text-sm mb-1">{phrase.english}</p>
                                                    <p className="text-blue-600 text-xs italic">{phrase.pronunciation}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Bargaining Strategies */}
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
                                Bargaining <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Strategies</span>
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {bargainingStrategies.map((strategy, index) => (
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

                {/* Shopping Vocabulary */}
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
                                Essential Shopping <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Vocabulary</span>
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6 text-left">
                                {shoppingVocabulary.map((category, index) => (
                                    <div key={index} className="bg-white rounded-lg p-5 shadow-md">
                                        <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                                            {category.icon}
                                            <span className="ml-2">{category.category}</span>
                                        </h4>
                                        <ul className="space-y-2 text-sm">
                                            {category.vocabulary.map((item, itemIndex) => (
                                                <li key={itemIndex}>
                                                    <strong className="text-blue-800">{item.spanish}:</strong> <span className="text-gray-700">{item.english}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Popular Markets Guide */}
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
                                Popular <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Markets Guide</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {marketLocations.map((market, index) => (
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
                                                <strong className="text-blue-800">Specialty:</strong> <span className="text-gray-700">{market.specialty}</span>
                                            </div>
                                            <div>
                                                <strong className="text-blue-800">Bargaining:</strong> <span className="text-gray-700">{market.bargaining}</span>
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

                {/* Cultural Shopping Tips */}
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
                                Shopping <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Culture</span> in Panama
                            </h2>

                            <div className="bg-blue-50/50 rounded-xl p-6 md:p-8 shadow-inner border border-blue-100">
                                <h3 className="text-xl font-bold mb-4 text-blue-900">Cultural Shopping Insights</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <Clock className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Shopping Hours</h4>
                                            <p className="text-gray-700 text-sm">Markets open early (6AM) for best selection. Malls typically open 10AM-10PM. Sunday shopping is limited in some areas.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <DollarSign className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Payment Customs</h4>
                                            <p className="text-gray-700 text-sm">USD is widely accepted. Small vendors prefer cash. Always have small bills for markets. Credit cards accepted in malls and larger stores.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <Users className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Vendor Relations</h4>
                                            <p className="text-gray-700 text-sm">Building relationships matters. Regular customers get better prices. Be polite and patient. A friendly 'Buenos días' goes a long way.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <Tag className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Quality & Authenticity</h4>
                                            <p className="text-gray-700 text-sm">Inspect items carefully before buying. Ask about return policies. For crafts, learn to identify authentic vs. mass-produced items.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Bargaining Do's and Don'ts */}
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
                                Bargaining <span className="bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">Do's & Don'ts</span>
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
                                            <span className="text-gray-700">Start with a friendly greeting and smile</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            <span className="text-gray-700">Show genuine interest in the product</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            <span className="text-gray-700">Be patient and respectful during negotiations</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            <span className="text-gray-700">Learn basic Spanish phrases for better rapport</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            <span className="text-gray-700">Be prepared to walk away if needed</span>
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
                                            <span className="text-gray-700">Don't be rude or aggressive during bargaining</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't try to bargain in established stores or malls</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't offer insultingly low prices</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't buy without checking quality first</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-red-500 font-bold">×</span>
                                            <span className="text-gray-700">Don't forget to thank vendors regardless of purchase</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Money & Numbers */}
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
                                Money & <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Numbers</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
                                        <DollarSign className="w-5 h-5 mr-2" />
                                        Essential Numbers
                                    </h3>
                                    <div className="bg-blue-50 rounded-lg p-5">
                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            <div><strong>1-10:</strong> uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez</div>
                                            <div><strong>20:</strong> veinte</div>
                                            <div><strong>30:</strong> treinta</div>
                                            <div><strong>50:</strong> cincuenta</div>
                                            <div><strong>100:</strong> cien</div>
                                            <div><strong>500:</strong> quinientos</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-center">
                                        <CreditCard className="w-5 h-5 mr-2" />
                                        Money Phrases
                                    </h3>
                                    <div className="bg-purple-50 rounded-lg p-5 space-y-2 text-sm">
                                        <div><strong>¿Cuánto cuesta?</strong> - How much does it cost?</div>
                                        <div><strong>Es muy caro</strong> - It's very expensive</div>
                                        <div><strong>¿Su mejor precio?</strong> - Your best price?</div>
                                        <div><strong>¿Me hace descuento?</strong> - Will you give me a discount?</div>
                                        <div><strong>Pago en efectivo</strong> - I'll pay cash</div>
                                        <div><strong>¿Acepta tarjeta?</strong> - Do you accept cards?</div>
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
                            Ready to Shop Like a <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Local?</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Master your shopping Spanish! Book personalized lessons and practice bargaining techniques with confidence in Panama's markets.
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