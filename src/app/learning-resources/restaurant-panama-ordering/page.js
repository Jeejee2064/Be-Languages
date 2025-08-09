"use client";

import React from "react";
import {
    Utensils,
    ArrowLeft,
    Clock,
    BookOpen,
    ChefHat,
    Coffee,
    Wine,
    CheckCircle,
    MessageSquare,
    DollarSign,
    Star,
    MapPin,
    Users,
    Soup,
    Fish,
    Cookie,
    UtensilsCrossed,
    ThumbsUp,
    Heart
} from "lucide-react";

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

const restaurantTypes = [
    {
        icon: <UtensilsCrossed className="w-6 h-6 text-white" />,
        title: "Traditional Restaurants",
        spanish: "Restaurantes tradicionales",
        description: "Family-owned establishments serving authentic Panamanian cuisine like sancocho, ropa vieja, and fresh seafood.",
        gradient: "from-orange-500 to-red-600"
    },
    {
        icon: <Coffee className="w-6 h-6 text-white" />,
        title: "Cafeterías",
        spanish: "Cafeterías",
        description: "Casual spots for coffee, breakfast, and light meals. Perfect for trying local pastries and strong Panamanian coffee.",
        gradient: "from-amber-500 to-orange-600"
    },
    {
        icon: <Fish className="w-6 h-6 text-white" />,
        title: "Marisquerías",
        spanish: "Marisquerías",
        description: "Seafood restaurants specializing in fresh fish, ceviche, and coastal dishes. Must-try in coastal areas!",
        gradient: "from-blue-500 to-cyan-600"
    },
    {
        icon: <ChefHat className="w-6 h-6 text-white" />,
        title: "Fine Dining",
        spanish: "Restaurantes elegantes",
        description: "Upscale restaurants in Panama City offering international cuisine and fusion dishes with Panamanian touches.",
        gradient: "from-purple-500 to-pink-600"
    },
    {
        icon: <Soup className="w-6 h-6 text-white" />,
        title: "Fondas",
        spanish: "Fondas",
        description: "Local food stalls and small eateries serving home-style cooking at great prices. Very authentic experience!",
        gradient: "from-green-500 to-emerald-600"
    },
    {
        icon: <Wine className="w-6 h-6 text-white" />,
        title: "Bars & Cantinas",
        spanish: "Bares y cantinas",
        description: "Drink-focused venues that also serve appetizers (bocas) and light meals. Great for socializing!",
        gradient: "from-indigo-500 to-purple-600"
    }
];

const essentialPhrases = [
    {
        category: "Arriving & Seating",
        icon: <Users className="w-5 h-5 text-orange-600" />,
        phrases: [
            { spanish: "Una mesa para dos, por favor", english: "A table for two, please", pronunciation: "OO-nah MEH-sah PAH-rah dohs por fah-VOR" },
            { spanish: "¿Hay mesa disponible?", english: "Is there a table available?", pronunciation: "AH-ee MEH-sah dees-poh-NEE-bleh" },
            { spanish: "¿Podemos sentarnos afuera?", english: "Can we sit outside?", pronunciation: "poh-DEH-mohs sen-TAR-nohs ah-FWEH-rah" },
            { spanish: "Tengo una reservación", english: "I have a reservation", pronunciation: "TEN-goh OO-nah reh-sehr-vah-SYOHN" },
            { spanish: "¿Cuánto tiempo de espera?", english: "How long is the wait?", pronunciation: "KWAN-toh tee-EHM-poh deh ehs-PEH-rah" }
        ]
    },
    {
        category: "Ordering Food",
        icon: <Utensils className="w-5 h-5 text-orange-600" />,
        phrases: [
            { spanish: "¿Qué me recomienda?", english: "What do you recommend?", pronunciation: "keh meh reh-koh-mee-EHN-dah" },
            { spanish: "Quiero el sancocho, por favor", english: "I want the sancocho, please", pronunciation: "kee-EH-roh el san-KOH-choh por fah-VOR" },
            { spanish: "¿Cómo está preparado?", english: "How is it prepared?", pronunciation: "KOH-moh ehs-TAH preh-pah-RAH-doh" },
            { spanish: "Sin picante, por favor", english: "Not spicy, please", pronunciation: "seen pee-KAHN-teh por fah-VOR" },
            { spanish: "¿Viene con arroz?", english: "Does it come with rice?", pronunciation: "vee-EH-neh kohn ah-ROHS" },
            { spanish: "De entrada quiero ceviche", english: "For appetizer I want ceviche", pronunciation: "deh en-TRAH-dah kee-EH-roh seh-VEE-cheh" }
        ]
    },
    {
        category: "Drinks & Beverages",
        icon: <Coffee className="w-5 h-5 text-orange-600" />,
        phrases: [
            { spanish: "Una cerveza fría, por favor", english: "A cold beer, please", pronunciation: "OO-nah sehr-VEH-sah FREE-ah por fah-VOR" },
            { spanish: "¿Qué jugos naturales tienen?", english: "What fresh juices do you have?", pronunciation: "keh HOO-gohs nah-too-RAH-lehs tee-EH-nen" },
            { spanish: "Un café con leche", english: "Coffee with milk", pronunciation: "oon kah-FEH kohn LEH-cheh" },
            { spanish: "Agua sin gas", english: "Still water", pronunciation: "AH-gwah seen gahs" },
            { spanish: "¿Tienen chicha de tamarindo?", english: "Do you have tamarind drink?", pronunciation: "tee-EH-nen CHEE-chah deh tah-mah-REEN-doh" },
            { spanish: "La cuenta de la bebida aparte", english: "The drink bill separately", pronunciation: "lah KWEN-tah deh lah beh-BEE-dah ah-PAR-teh" }
        ]
    },
    {
        category: "Paying & Service",
        icon: <DollarSign className="w-5 h-5 text-orange-600" />,
        phrases: [
            { spanish: "La cuenta, por favor", english: "The check, please", pronunciation: "lah KWEN-tah por fah-VOR" },
            { spanish: "¿Aceptan tarjeta de crédito?", english: "Do you accept credit cards?", pronunciation: "ah-SEP-tahn tar-HEH-tah deh KREH-dee-toh" },
            { spanish: "¿Está incluida la propina?", english: "Is the tip included?", pronunciation: "ehs-TAH een-kloo-EE-dah lah proh-PEE-nah" },
            { spanish: "Quédese con el cambio", english: "Keep the change", pronunciation: "KEH-deh-seh kohn el KAHM-bee-oh" },
            { spanish: "Estuvo delicioso", english: "It was delicious", pronunciation: "ehs-TOO-voh deh-lee-see-OH-soh" }
        ]
    }
];

const dishTypes = [
    {
        title: "Traditional Mains",
        icon: <ChefHat className="w-5 h-5 text-orange-600" />,
        dishes: [
            { spanish: "Sancocho", english: "Traditional stew with chicken and vegetables", price: "$8-12" },
            { spanish: "Ropa Vieja", english: "Shredded beef in tomato sauce", price: "$10-15" },
            { spanish: "Pescado Entero", english: "Whole fried fish", price: "$12-18" },
            { spanish: "Pollo Guisado", english: "Stewed chicken", price: "$8-12" },
            { spanish: "Carne Asada", english: "Grilled beef", price: "$12-16" }
        ]
    },
    {
        title: "Seafood Specialties",
        icon: <Fish className="w-5 h-5 text-orange-600" />,
        dishes: [
            { spanish: "Ceviche", english: "Fresh fish 'cooked' in lime juice", price: "$6-10" },
            { spanish: "Corvina", english: "Sea bass (Panama's national fish)", price: "$14-20" },
            { spanish: "Camarones al Ajillo", english: "Garlic shrimp", price: "$12-16" },
            { spanish: "Langosta", english: "Lobster (seasonal)", price: "$25-35" },
            { spanish: "Patacones con Mariscos", english: "Fried plantains with seafood", price: "$10-14" }
        ]
    },
    {
        title: "Sides & Appetizers",
        icon: <Soup className="w-5 h-5 text-orange-600" />,
        dishes: [
            { spanish: "Patacones", english: "Twice-fried plantain slices", price: "$3-5" },
            { spanish: "Yuca Frita", english: "Fried cassava", price: "$3-4" },
            { spanish: "Arroz con Porotos", english: "Rice and beans", price: "$2-4" },
            { spanish: "Ensalada de Pulpo", english: "Octopus salad", price: "$8-12" },
            { spanish: "Empanadas", english: "Stuffed pastries", price: "$2-4 each" }
        ]
    },
    {
        title: "Desserts & Sweets",
        icon: <Cookie className="w-5 h-5 text-orange-600" />,
        dishes: [
            { spanish: "Tres Leches", english: "Three milk cake", price: "$4-6" },
            { spanish: "Flan", english: "Caramel custard", price: "$3-5" },
            { spanish: "Raspao", english: "Shaved ice with syrup", price: "$1-2" },
            { spanish: "Cocadas", english: "Coconut cookies", price: "$1-2 each" },
            { spanish: "Suspiros", english: "Meringue cookies", price: "$2-3" }
        ]
    }
];

const diningTips = [
    {
        title: "Meal Times",
        icon: <Clock className="w-5 h-5 text-orange-600" />,
        tips: [
            "Breakfast: 6:00-9:00 AM (desayuno)",
            "Lunch: 12:00-2:00 PM (almuerzo) - main meal",
            "Dinner: 6:00-9:00 PM (cena) - lighter meal",
            "Many places close 3:00-5:00 PM (siesta)",
            "Restaurants may close early on Sundays"
        ]
    },
    {
        title: "Ordering Etiquette",
        icon: <MessageSquare className="w-5 h-5 text-orange-600" />,
        tips: [
            "Greet staff with 'Buenos días/tardes'",
            "Wait to be seated in nicer restaurants",
            "It's normal to share dishes family-style",
            "Ask for recommendations - locals know best!",
            "Don't rush - meals are social experiences"
        ]
    },
    {
        title: "Payment Culture",
        icon: <DollarSign className="w-5 h-5 text-orange-600" />,
        tips: [
            "Tipping: 10% is standard (propina)",
            "Some places add 10% service charge",
            "Cash preferred in small establishments",
            "Credit cards accepted in tourist areas",
            "Ask for separate checks: 'cuentas separadas'"
        ]
    },
    {
        title: "Food Safety",
        icon: <CheckCircle className="w-5 h-5 text-orange-600" />,
        tips: [
            "Look for busy places with high turnover",
            "Bottled water is safest for sensitive stomachs",
            "Fresh seafood should smell like ocean, not 'fishy'",
            "Street food is generally safe but use judgment",
            "Fruits you can peel yourself are safest"
        ]
    }
];

export default function RestaurantSpanishGuide() {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            {/* Decorative background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-xl"></div>
                <div className="absolute top-40 left-20 w-24 h-24 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-lg"></div>
                <div className="absolute bottom-40 right-32 w-20 h-20 bg-gradient-to-br from-red-200/25 to-pink-200/25 rounded-full blur-lg"></div>
            </div>

            {/* Header with Back Button */}
            <header className="relative z-50 pt-6 pb-4">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        <div className="h-12 w-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">BE Language</span>
                        </div>
                        <div className="flex items-center text-orange-600 hover:text-red-600 transition-colors cursor-pointer">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            <span className="font-medium">All Resources</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-12 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-red-50/30 z-0"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Utensils className="w-4 h-4 mr-2" />
                                Dining Guide
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Restaurant Spanish:
                                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                    Order Like a Pro
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Master essential phrases and vocabulary for dining out in Panama, from ordering traditional dishes to paying the bill with confidence.
                            </p>

                            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-orange-600" />
                                    <span>4 min read</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-red-600" />
                                    <span>Beginner</span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="mb-12">
                            <div className="relative h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <Utensils className="w-20 h-20 mb-4 mx-auto opacity-80" />
                                    <h3 className="text-2xl font-bold mb-2">¡Buen Provecho!</h3>
                                    <p className="text-lg opacity-90">Enjoy your meal in Panama</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="py-12">
                {/* Restaurant Types */}
                <section className="mb-16 relative overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-xl"></div>
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Types of <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Restaurants</span> in Panama
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {restaurantTypes.map((type, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className={`w-10 h-10 bg-gradient-to-r ${type.gradient} rounded-lg flex items-center justify-center shadow-md mr-3`}>
                                                {type.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                                                <p className="text-orange-600 text-sm font-medium">{type.spanish}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm">{type.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Essential Phrases */}
                <section className="mb-16 bg-gray-50 py-16">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Essential <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Dining Phrases</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {essentialPhrases.map((section, sectionIndex) => (
                                    <div
                                        key={sectionIndex}
                                        className="bg-white/50 rounded-xl p-6 shadow-md"
                                    >
                                        <h3 className="text-xl font-bold mb-4 flex items-center text-orange-900">
                                            {section.icon}
                                            <span className="ml-2">{section.category}</span>
                                        </h3>

                                        <div className="space-y-3">
                                            {section.phrases.map((phrase, phraseIndex) => (
                                                <div key={phraseIndex} className="p-3 bg-orange-50/50 rounded-lg">
                                                    <p className="font-semibold text-orange-900">{phrase.spanish}</p>
                                                    <p className="text-gray-700 text-sm mb-1">{phrase.english}</p>
                                                    <p className="text-orange-600 text-xs italic">{phrase.pronunciation}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Dishes */}
                <section className="mb-16 relative overflow-hidden">
                    <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-xl"></div>
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Popular <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Dishes</span> & Prices
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {dishTypes.map((category, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/50 rounded-xl p-5 shadow-md h-full"
                                    >
                                        <h3 className="text-lg font-bold mb-3 flex items-center text-orange-900">
                                            {category.icon}
                                            <span className="ml-2">{category.title}</span>
                                        </h3>
                                        <div className="space-y-3 text-sm">
                                            {category.dishes.map((dish, dishIndex) => (
                                                <div key={dishIndex} className="border-b border-gray-100 pb-2 last:border-b-0">
                                                    <div className="flex justify-between items-start gap-2">
                                                        <div>
                                                            <p className="font-semibold text-gray-900">{dish.spanish}</p>
                                                            <p className="text-gray-600 text-xs">{dish.english}</p>
                                                        </div>
                                                        <span className="text-orange-600 font-medium text-xs whitespace-nowrap">{dish.price}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dining Tips */}
                <section className="mb-16 bg-gradient-to-br from-orange-50 to-red-50 py-16">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Panama <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Dining Tips</span>
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {diningTips.map((tipSection, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/50 rounded-xl p-5 shadow-md h-full"
                                    >
                                        <h3 className="text-lg font-bold mb-3 flex items-center text-orange-900">
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bonus Vocabulary */}
                <section className="mb-16 bg-white py-16 border-t border-b border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-8">
                                Bonus <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Food Vocabulary</span>
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                                <div className="bg-orange-50 rounded-lg p-5 shadow-md">
                                    <h4 className="font-bold text-orange-900 mb-3 flex items-center">
                                        <ChefHat className="w-5 h-5 mr-2" />
                                        Cooking Methods
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Frito:</strong> Fried</li>
                                        <li><strong>Asado:</strong> Grilled/Roasted</li>
                                        <li><strong>Guisado:</strong> Stewed</li>
                                        <li><strong>Al vapor:</strong> Steamed</li>
                                        <li><strong>Crudo:</strong> Raw</li>
                                        <li><strong>Picante:</strong> Spicy</li>
                                        <li><strong>Suave:</strong> Mild</li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 rounded-lg p-5 shadow-md">
                                    <h4 className="font-bold text-red-900 mb-3 flex items-center">
                                        <Star className="w-5 h-5 mr-2" />
                                        Taste Descriptions
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>Delicioso:</strong> Delicious</li>
                                        <li><strong>Sabroso:</strong> Tasty</li>
                                        <li><strong>Rico:</strong> Good/Tasty</li>
                                        <li><strong>Salado:</strong> Salty</li>
                                        <li><strong>Dulce:</strong> Sweet</li>
                                        <li><strong>Amargo:</strong> Bitter</li>
                                        <li><strong>Fresco:</strong> Fresh</li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 rounded-lg p-5 shadow-md">
                                    <h4 className="font-bold text-yellow-900 mb-3 flex items-center">
                                        <ThumbsUp className="w-5 h-5 mr-2" />
                                        Compliments
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li><strong>¡Qué rico!</strong> How delicious!</li>
                                        <li><strong>Está buenísimo:</strong> It's excellent</li>
                                        <li><strong>Me encanta:</strong> I love it</li>
                                        <li><strong>Excelente:</strong> Excellent</li>
                                        <li><strong>Perfecto:</strong> Perfect</li>
                                        <li><strong>Muy bueno:</strong> Very good</li>
                                        <li><strong>Increíble:</strong> Incredible</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cultural Notes */}
                <section className="mb-16 bg-white py-16">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Dining <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Culture</span>
                            </h2>

                            <div className="bg-orange-50/50 rounded-xl p-6 md:p-8 shadow-inner border border-orange-100">
                                <h3 className="text-xl font-bold mb-4 text-orange-900">Panamanian Food Culture</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-orange-100 p-2 rounded-full">
                                            <Heart className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-orange-900">Family Style Dining</h4>
                                            <p className="text-gray-700 text-sm">Meals are social events meant to be shared. Don't be surprised if locals offer you food - it's a sign of hospitality!</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-orange-100 p-2 rounded-full">
                                            <Clock className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-orange-900">Relaxed Pace</h4>
                                            <p className="text-gray-700 text-sm">Service may be slower than you're used to. Enjoy the relaxed atmosphere - meals are meant to be savored, not rushed.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-orange-100 p-2 rounded-full">
                                            <Utensils className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-orange-900">Rice is Life</h4>
                                            <p className="text-gray-700 text-sm">Rice and beans (arroz con frijoles) accompany almost every meal. It's perfectly normal to eat it with every course!</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-orange-100 p-2 rounded-full">
                                            <MessageSquare className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-orange-900">Polite Expressions</h4>
                                            <p className="text-gray-700 text-sm">Always say "Buen provecho" (enjoy your meal) when you see others eating. It's basic courtesy in Panama!</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local Specialties */}
                <section className="mb-16 relative overflow-hidden">
                    <div className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-lg"></div>
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Must-Try <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Local Specialties</span>
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <Soup className="w-8 h-8 mr-3" />
                                        <h3 className="text-xl font-bold">Sancocho</h3>
                                    </div>
                                    <p className="text-orange-100 mb-3">Panama's national dish - a hearty stew with chicken, vegetables, and cilantro culantro.</p>
                                    <p className="text-xs opacity-90">"Es el plato nacional de Panamá"</p>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <Fish className="w-8 h-8 mr-3" />
                                        <h3 className="text-xl font-bold">Ceviche</h3>
                                    </div>
                                    <p className="text-blue-100 mb-3">Fresh fish or seafood "cooked" in lime juice with onions, peppers, and cilantro.</p>
                                    <p className="text-xs opacity-90">"Pescado fresco en limón"</p>
                                </div>

                                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <Cookie className="w-8 h-8 mr-3" />
                                        <h3 className="text-xl font-bold">Patacones</h3>
                                    </div>
                                    <p className="text-yellow-100 mb-3">Twice-fried green plantains served as a side dish or appetizer with garlic sauce.</p>
                                    <p className="text-xs opacity-90">"Plátano verde frito dos veces"</p>
                                </div>

                                <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <ChefHat className="w-8 h-8 mr-3" />
                                        <h3 className="text-xl font-bold">Ropa Vieja</h3>
                                    </div>
                                    <p className="text-green-100 mb-3">Shredded beef in a savory tomato-based sauce, served with rice and beans.</p>
                                    <p className="text-xs opacity-90">"Carne deshebrada en salsa"</p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <Coffee className="w-8 h-8 mr-3" />
                                        <h3 className="text-xl font-bold">Tres Leches</h3>
                                    </div>
                                    <p className="text-purple-100 mb-3">Sponge cake soaked in three types of milk - evaporated, condensed, and cream.</p>
                                    <p className="text-xs opacity-90">"Postre con tres tipos de leche"</p>
                                </div>

                                <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <Wine className="w-8 h-8 mr-3" />
                                        <h3 className="text-xl font-bold">Chicha</h3>
                                    </div>
                                    <p className="text-red-100 mb-3">Traditional fruit drinks made from tamarind, hibiscus, or other tropical fruits.</p>
                                    <p className="text-xs opacity-90">"Bebida tradicional de frutas"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Call to Action */}
            <section className="py-16 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-lg"></div>
                
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                            Ready to Practice Your <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Restaurant Spanish?</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Join our Spanish classes and practice ordering food like a local! Learn with native speakers and discover Panama's amazing food culture.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-3 text-center rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg hover:shadow-orange-200/50 text-sm sm:text-base">
                                Book Spanish Classes
                            </button>
                            <button className="px-8 py-3 text-center rounded-full font-medium transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-gray-900 text-sm sm:text-base">
                                More Learning Resources
                            </button>
                        </div>
                        
                        <div className="mt-8 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
                            <p className="text-orange-300 font-medium mb-2">Pro Tip:</p>
                            <p className="text-gray-300 text-sm">
                                Start with simple phrases like "Quiero..." (I want) and build confidence. Most restaurant staff are patient with tourists learning Spanish!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}