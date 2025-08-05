"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
    Globe,
    Landmark,
    Users,
    MessageCircle,
    Briefcase,
} from "lucide-react";

import ContactSection from "../components/ContactSection";
import { BlobBackground, MonsteraBackground, WaveBackground, TopWaveBackground, DoubleWaveBackground, GridPattern } from '../components/backgrounds';


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

// --- Data for the classes and topics ---
const classTopics = [
    {
        title: "Essential Conversations",
        icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
        items: [
            "Greetings & introductions",
            "Asking for directions",
            "Ordering food & drinks",
            "Shopping & bargaining",
            "Making friends",
        ],
        bg: "bg-indigo-50/50 hover:bg-indigo-50",
        border: "border-indigo-100"
    },
    {
        title: "Practical Vocabulary",
        icon: <BookOpen className="w-6 h-6 text-blue-600" />,
        items: [
            "Numbers, time & dates",
            "Food & restaurant terms",
            "Transportation phrases",
            "Local slang & expressions",
            "Emergency situations",
        ],
        bg: "bg-blue-50/50 hover:bg-blue-50",
        border: "border-blue-100"
    },
    {
        title: "Grammar Fundamentals",
        icon: <Globe className="w-6 h-6 text-blue-600" />,
        items: [
            "Spanish verbs tenses",
            "Asking questions",
            "Gender & plurals",
            "Key irregular verbs",
            "Pronouns & prepositions",
        ],
        bg: "bg-indigo-50/50 hover:bg-indigo-50",
        border: "border-indigo-100"
    },
    {
        title: "Cultural Understanding",
        icon: <Landmark className="w-6 h-6 text-blue-600" />,
        items: [
            "Panamanian Traditions & Local etiquette",
            "Panamanian Idioms",
            "Festivals & local culture",
            "Regional differences",
            "Body language expressions",
        ],
        bg: "bg-blue-50/50 hover:bg-blue-50",
        border: "border-blue-100"
    },
    {
        title: "Real-World Practice",
        icon: <Users className="w-6 h-6 text-blue-600" />,
        items: [
            "Market visits",
            "Restaurant role-plays",
            "Taxi/bus conversations",
            "Neighbor interactions",
            "Phone/SMS Spanish",
        ],
        bg: "bg-indigo-50/50 hover:bg-indigo-50",
        border: "border-indigo-100"
    },
    {
        title: "Specialized Topics",
        icon: <Briefcase className="w-6 h-6 text-blue-600" />,
        items: [
            "Surf/sailing terms",
            "Dating & relationships",
            "Renting/buying property",
            "Healthcare vocabulary",
            "Business basics",
        ],
        bg: "bg-blue-50/50 hover:bg-blue-50",
        border: "border-blue-100"
    },
];


const pricingPlans = [
    {
        name: "1 Week Crash Course",
        price: "$125",
        duration: "1 week",
        description: "Ideal for travelers and expats who want to improve basic conversation rapidly.",
        hours: "5 hours",
        features: [
            "Focus on essential phrases",
            "Travel essentials",
            "Role Play",
            "Light Homework (optional)"
        ],
        highlighted: false
    },
    {
        name: "Island Flow Plan",
        price: "$150",
        duration: "3 weeks",
        hours: "6 hours",
        description: "Perfect for visiters staying a few weeks, consistent, stress-free spanish improvement without overloading.",
        features: [
            "Conversation based sessions (twice a week)",
            "local context : shopping, addresses, restaurants, small talk.",
            "Useful verbs and real life expressions",
            "Whatsapp mini follow-ups after each session",
            "Light Homework (optional)"
        ],
        highlighted: false
    },
    {
        name: "Steady Surf Plan",
        price: "$180",
        duration: "month",
        hours: "8 hours",
        description: "Ideal for expats, digital nomads or long term visitors ready to pregress steadily and confidently.",
        features: [
            "Basic (essential phrases, verbs, expressions)",
            "Intro to Grammar : regular verbs, basic past/present/future talk",
            "Personalized topics based on you needs and goals",
            "Review notes and weekly short homework",
            "Progress check every 4 classes",
            "Real-world learning experiences (grocery shopping, food ordering...)",
            "Whatsapp support"
        ],
        highlighted: true
    },
    {
        name: "Buddy Boost (2 people)",
        price: "$320",
        duration: "month",
        hours: "8 hours",
        description: "Perfect for couples, friends, travel partners who want to make learning fun and practice together.",
        features: [
            "8 shared 1 hour session",
            "Personalized pair activities and real practice dialogues",
            "Learn together through games, role plays and teamwork",
            "Shared vocabulary lists and whatsapp groups",
            "Real-world learning experiences (grocery shopping, food ordering...)"
        ],
        highlighted: true
    }
];

// --- The main component for the page ---
export default function SpanishClassesPage() {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
          {/* Hero Section */}
<section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 z-0"></div>
  <WaveBackground />
  <MonsteraBackground />

  <div className="container mx-auto px-6 py-20 relative z-10">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-3xl mx-auto"
    >
      <motion.div variants={fadeInUp}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Spanish Classes in Bocas del Toro
          </span>
        </h1>
      </motion.div>

      <motion.div variants={fadeInUp} className="text-lg text-gray-700 mb-8">
        Learn Spanish with a certified local instructor in the heart of the Caribbean. Perfect for expats, digital nomads, and travelers who want to connect with the culture and people of Panama.
      </motion.div>

      <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-blue-200/50 hover:translate-y-[-2px] font-medium"
        >
          Book a Class
        </a>
        <a
          href="#classTopics"
          className="px-8 py-3.5 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
        >
          Why Learn with Me?
        </a>
      </motion.div>
    </motion.div>
  </div>
</section>

            <main>
                <section id="classTopics" className="py-20 relative overflow-hidden">
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
                                What You'll Learn
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                Practical Skills for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Real-World Use</span>
                            </h2>
                            <p className="text-lg text-gray-600">
                                My classes are tailored to your unique goals and learning style, covering everything from essential conversations to grammar fundamentals.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {classTopics.map((topic, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className={`${topic.bg} p-8 rounded-2xl shadow-sm  hover:shadow-md transition-all duration-300 border ${topic.border}`}
                                >
                                    <div className="w-full flex items-center justify-center">

                                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm mb-6">
                                            {topic.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl text-center font-bold mb-3 ">{topic.title}</h3>
                                    <ul className="list-none text-center list-inside space-y-2 text-gray-700">
                                        {topic.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section id="pricing" className="py-20 relative overflow-hidden bg-gray-50">
                    <WaveBackground />
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="text-center mb-16 max-w-3xl mx-auto"
                        >
                            <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase">
                                Classes & Packages
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                Simple, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transparent Pricing</span>
                            </h2>
                            <p className="text-lg text-gray-600">
                                Flexible packages designed for different learning needs and budgets.
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
                                                        <span className="text-gray-600">{plan.hours} of instruction</span>
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
                                                href="#contact"
                                                className={`mt-auto block w-full py-3 text-center rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-200/50`}
                                            >
                                                Get Started
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    {/* Payment & Policy Information */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto"
                    >
                        <h3 className="text-xl font-bold mb-6 text-gray-800">Payment & Policy Information</h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-medium text-gray-800 mb-2">Payment Details</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        100% at start of the plan
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Transport fees may apply for in-person classes outside Bocas Town
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Cash, local bank transfer and Yappy (Banco General) accepted
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-medium text-gray-800 mb-2">Cancellation Policy</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        Changes must be advised 12 hours before scheduled session
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        Less than 12h notice or no-show: session is forfeited
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Emergency cancellations evaluated case-by-case
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <ContactSection/>
            </main>
        </div>
    );
}