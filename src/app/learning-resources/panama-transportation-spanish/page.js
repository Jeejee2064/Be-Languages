"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    ArrowLeft,
    Clock,
    BookOpen,
    Bus,
    Car,
    Ship,
    Plane,
    CheckCircle,
    MessageSquare,
    Navigation,
    DollarSign,
    Train,
    Bike,
    TramFront,
    Users,
    PersonStanding
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

const transportModes = [
    {
        icon: <Bus className="w-6 h-6 text-white" />,
        title: "Public Buses",
        spanish: "Autobuses públicos",
        description: "The most common and affordable way to travel in Panama. Look for 'Diablo Rojo' (Red Devil) buses for an authentic experience.",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: <Car className="w-6 h-6 text-white" />,
        title: "Taxis",
        spanish: "Taxis",
        description: "Convenient for short distances and late-night travel. Always negotiate the fare before getting in.",
        gradient: "from-purple-500 to-purple-600"
    },
    {
        icon: <Ship className="w-6 h-6 text-white" />,
        title: "Water Taxis",
        spanish: "Lanchas",
        description: "Essential for island hopping in Bocas del Toro and San Blas. Expect to pay $2-5 per ride between islands.",
        gradient: "from-blue-500 to-purple-600"
    },
    {
        icon: <Plane className="w-6 h-6 text-white" />,
        title: "Domestic Flights",
        spanish: "Vuelos domésticos",
        description: "Quick travel between major cities with Air Panama and Copa Airlines.",
        gradient: "from-purple-500 to-blue-600"
    },
    {
        icon: <TramFront className="w-6 h-6 text-white" />,
        title: "Metro",
        spanish: "Metro",
        description: "Panama City's modern metro system with two lines connecting major areas.",
        gradient: "from-green-500 to-blue-600"
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Private Shuttles",
        spanish: "Transporte privado",
        description: "Comfortable door-to-door service for airport transfers and tourist destinations. Popular companies include Interbus and Grayline.",
        gradient: "from-indigo-500 to-purple-600"
    },
    {
        icon: <Bike className="w-6 h-6 text-white" />,
        title: "Bike and Motorbike Rentals",
        spanish: "Alquiler de bicicletas y motos",
        description: "Available in Panama City's Cinta Costera area and some beach towns. Great for exploring at your own pace.",
        gradient: "from-yellow-500 to-orange-600"
    },
    {
        icon: <Car className="w-6 h-6 text-white" />,
        title: "Car Rentals",
        spanish: "Alquiler de autos",
        description: "Freedom to explore remote areas and national parks. Major companies include Hertz, Budget, and local options. International license required.",
        gradient: "from-red-500 to-pink-600"
    },

    {
        icon: <PersonStanding className="w-6 h-6 text-white" />,
        title: "Walking",
        spanish: "Caminar",
        description: "The original zero-emission transport! Free, healthy, and perfect for exploring Panama. Warning: May cause sudden urges to stop for street food and fresh beverages !",
        gradient: "from-green-500 to-teal-600"
    }
];

const essentialPhrases = [
    {
        category: "Getting Directions",
        icon: <Navigation className="w-5 h-5 text-blue-600" />,
        phrases: [
            { spanish: "¿Dónde está la parada de autobús más cercana?", english: "Where is the nearest bus stop?", pronunciation: "DON-deh ehs-TAH lah pah-RAH-dah deh ow-toh-BOOS mahs sehr-KAH-nah" },
            { spanish: "¿Cómo llego al centro?", english: "How do I get to downtown?", pronunciation: "KOH-moh YEH-goh ahl SEN-troh" },
            { spanish: "¿Está lejos el aeropuerto?", english: "Is the airport far?", pronunciation: "ehs-TAH LEH-hohs el ah-eh-roh-PWEHR-toh" },
            { spanish: "¿Puedo caminar hasta allí?", english: "Can I walk there?", pronunciation: "PWEH-doh kah-mee-NAHR AHS-tah ah-YEE" },
            { spanish: "¿Me puede mostrar en el mapa?", english: "Can you show me on the map?", pronunciation: "meh PWEH-deh mohs-TRAHR en el MAH-pah" }
        ]
    },
    {
        category: "Public Transportation",
        icon: <Bus className="w-5 h-5 text-blue-600" />,
        phrases: [
            { spanish: "¿Cuánto cuesta el pasaje?", english: "How much is the fare?", pronunciation: "KWAN-toh KWES-tah el pah-SAH-heh" },
            { spanish: "¿Este autobús va al centro comercial?", english: "Does this bus go to the mall?", pronunciation: "EHS-teh ow-toh-BOOS bah ahl SEN-troh koh-mehr-SYAHL" },
            { spanish: "Necesito bajar en la próxima", english: "I need to get off at the next stop", pronunciation: "neh-seh-SEE-toh bah-HAR en lah PROK-see-mah" },
            { spanish: "¿Dónde compro la tarjeta del metro?", english: "Where do I buy the metro card?", pronunciation: "DON-deh KOM-proh lah tar-HEH-tah del MEH-troh" },
            { spanish: "¿A qué hora pasa el último bus?", english: "When does the last bus pass?", pronunciation: "ah keh OH-rah PAH-sah el OOL-tee-moh boos" }
        ]
    },
    {
        category: "Taxis & Rideshares",
        icon: <Car className="w-5 h-5 text-blue-600" />,
        phrases: [
            { spanish: "¿Está libre?", english: "Are you available?", pronunciation: "ehs-TAH LEE-breh" },
            { spanish: "Lléveme a este hotel, por favor", english: "Take me to this hotel, please", pronunciation: "YEH-veh-meh ah EHS-teh oh-TEL por fah-VOR" },
            { spanish: "¿Cuánto cuesta hasta el aeropuerto?", english: "How much to the airport?", pronunciation: "KWAN-toh KWES-tah AHS-tah el ah-eh-roh-PWEHR-toh" },
            { spanish: "Por aquí a la derecha", english: "Turn right here", pronunciation: "por ah-KEE ah lah deh-REH-chah" },
            { spanish: "Pare aquí, por favor", english: "Stop here, please", pronunciation: "PAH-reh ah-KEE por fah-VOR" },
            { spanish: "¿Acepta tarjeta de crédito?", english: "Do you accept credit cards?", pronunciation: "ah-SEP-tah tar-HEH-tah deh KREH-dee-toh" }
        ]
    },
    {
        category: "Emergencies",
        icon: <DollarSign className="w-5 h-5 text-blue-600" />,
        phrases: [
            { spanish: "¡Ayuda!", english: "Help!", pronunciation: "ah-YOO-dah" },
            { spanish: "Necesito un médico", english: "I need a doctor", pronunciation: "neh-seh-SEE-toh oon MEH-dee-koh" },
            { spanish: "Llame a la policía", english: "Call the police", pronunciation: "YAH-meh ah lah poh-lee-SEE-ah" },
            { spanish: "Me robaron", english: "I was robbed", pronunciation: "meh roh-BAH-rohn" },
            { spanish: "¿Dónde está el hospital más cercano?", english: "Where is the nearest hospital?", pronunciation: "DON-deh ehs-TAH el ohs-pee-TAHL mahs sehr-KAH-noh" }
        ]
    }
];

const panamaTips = [
    {
        title: "Bus Etiquette",
        icon: <Bus className="w-5 h-5 text-blue-600" />,
        tips: [
            "Say 'Buenos días' when boarding",
            "Have exact change ready (buses don't give change)",
            "Offer your seat to elderly and pregnant passengers",
            "Ring the bell early to signal your stop",
            "Avoid rush hours (7-9am and 5-7pm) for more comfort"
        ]
    },
    {
        title: "Taxi Safety",
        icon: <Car className="w-5 h-5 text-blue-600" />,
        tips: [
            "Use official yellow taxis in the city (licensed)",
            "Agree on price before getting in (no meters)",
            "Keep doors locked during ride",
            "Have destination address written down",
            "Use Uber or InDriver apps for safer rides"
        ]
    },
    {
        title: "Water Transport",
        icon: <Ship className="w-5 h-5 text-blue-600" />,
        tips: [
            "Check weather conditions first (trips get canceled in bad weather)",
            "Bring waterproof bag for belongings",
            "Confirm return trip schedules (last boats leave early)",
            "Life jackets are usually provided but check",
            "Negotiate prices for private boat charters"
        ]
    },
    {
        title: "Metro System",
        icon: <Train className="w-5 h-5 text-blue-600" />,
        tips: [
            "Buy rechargeable Metro card at any station ($2 cost)",
            "Avoid rush hours (packed between 7-9am and 5-7pm)",
            "No eating or drinking allowed inside",
            "Free transfers between lines within 30 minutes",
            "Air conditioned and generally very safe"
        ]
    }
];

export default function TransportTermsArticle() {
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
                                <MapPin className="w-4 h-4 mr-2" />
                                Transportation Guide
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Getting Around Panama:
                                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Transport Terms & Tips
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Master essential transportation vocabulary for buses, taxis, metro, boats, and asking for directions in Panama.
                            </p>

                            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    <span>6 min read</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-purple-600" />
                                    <span>Beginner to Intermediate</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Featured Image */}
                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="relative h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="/panama-transportation-spanish.png"
                                    alt="Getting Around Panama Transport Terms"
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
                {/* Transportation Modes */}
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
                                Transportation <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Options</span> in Panama
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {transportModes.map((mode, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className={`w-10 h-10 bg-gradient-to-r ${mode.gradient} rounded-lg flex items-center justify-center shadow-md mr-3`}>
                                                {mode.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{mode.title}</h3>
                                                <p className="text-blue-600 text-sm font-medium">{mode.spanish}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm">{mode.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Essential Phrases */}
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
                                Must-Know <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Travel Phrases</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {essentialPhrases.map((section, sectionIndex) => (
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

                {/* Panama-Specific Tips */}
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
                                Panama <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Travel Tips</span>
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {panamaTips.map((tipSection, index) => (
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

                {/* Vocabulary Bonus */}
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
                                Bonus <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vocabulary</span>
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                                <div className="bg-white rounded-lg p-5 shadow-md">
                                    <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                                        <Navigation className="w-5 h-5 mr-2" />
                                        Directions
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Derecha:</strong> Right</li>
                                        <li><strong>Izquierda:</strong> Left</li>
                                        <li><strong>Recto:</strong> Straight</li>
                                        <li><strong>Esquina:</strong> Corner</li>
                                        <li><strong>Cuadra:</strong> Block</li>
                                        <li><strong>Cerca:</strong> Near</li>
                                        <li><strong>Lejos:</strong> Far</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-5 shadow-md">
                                    <h4 className="font-bold text-purple-900 mb-3 flex items-center">
                                        <DollarSign className="w-5 h-5 mr-2" />
                                        Money & Payment
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Efectivo:</strong> Cash</li>
                                        <li><strong>Sencillo:</strong> Small change</li>
                                        <li><strong>Tarjeta:</strong> Card</li>
                                        <li><strong>Propina:</strong> Tip</li>
                                        <li><strong>Descuento:</strong> Discount</li>
                                        <li><strong>Precio fijo:</strong> Fixed price</li>
                                        <li><strong>Factura:</strong> Receipt</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-5 shadow-md">
                                    <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                                        <Clock className="w-5 h-5 mr-2" />
                                        Time Expressions
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Ahora:</strong> Now</li>
                                        <li><strong>Más tarde:</strong> Later</li>
                                        <li><strong>Rápido:</strong> Quick/Fast</li>
                                        <li><strong>Despacio:</strong> Slow</li>
                                        <li><strong>Prisa:</strong> Hurry</li>
                                        <li><strong>Temprano:</strong> Early</li>
                                        <li><strong>Tarde:</strong> Late</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Cultural Notes */}
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
                                Cultural <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Notes</span>
                            </h2>

                            <div className="bg-blue-50/50 rounded-xl p-6 md:p-8 shadow-inner border border-blue-100">
                                <h3 className="text-xl font-bold mb-4 text-blue-900">Panamanian Transportation Culture</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <Clock className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Time Flexibility</h4>
                                            <p className="text-gray-700 text-sm">Buses and boats may not run exactly on schedule. "Panamanian time" often means being flexible with departure times.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <DollarSign className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Negotiation Culture</h4>
                                            <p className="text-gray-700 text-sm">Prices for taxis and boats are often negotiable. Polite bargaining is expected in many situations.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <MessageSquare className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Greetings Matter</h4>
                                            <p className="text-gray-700 text-sm">Always greet drivers and fellow passengers with "Buenos días/tardes" - it's considered rude not to.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <CheckCircle className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900">Safety First</h4>
                                            <p className="text-gray-700 text-sm">While generally safe, avoid displaying valuables on public transport and be cautious at night.</p>
                                        </div>
                                    </li>
                                </ul>
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
                            Ready to Practice Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Spanish?</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Put these transportation phrases to use! Book personalized English or Spanish lessons and practice real-world conversations.
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