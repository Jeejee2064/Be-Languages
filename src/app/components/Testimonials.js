'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const WaveBackground = () => (
  <svg 
    className="absolute bottom-0 w-full h-64" 
    viewBox="0 0 1440 320" 
    preserveAspectRatio="none"
  >
    <path 
      fill="url(#gradient)" 
      fillOpacity="0.15" 
      d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,186.7C672,192,768,224,864,218.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
    <path 
      fill="url(#gradient)" 
      fillOpacity="0.1" 
      d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,234.7C672,235,768,181,864,181.3C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "The Spanish classes completely transformed my ability to communicate with clients. My revenue in Latin American markets increased by 40%!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "University Student",
    content: "Passed my DELE B2 exam on the first try thanks to the personalized study plan. The cultural immersion made learning feel natural."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Travel Blogger",
    content: "From zero to conversational in 3 months! Now I can interview locals without translators during my travels through Spain."
  },
  {
    id: 4,
    name: "David Müller",
    role: "Corporate Executive",
    content: "Our team's business English skills improved dramatically. The industry-specific vocabulary training was exactly what we needed."
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  
  // Calculate total pages for desktop (2 testimonials per page)
  const totalPages = Math.ceil(testimonials.length / 2)
  
  // Desktop navigation (pages)
  const nextDesktop = () => setCurrent((prev) => (prev + 1) % totalPages)
  const prevDesktop = () => setCurrent((prev) => (prev - 1 + totalPages) % totalPages)
  
  // Mobile navigation (individual testimonials)
  const nextMobile = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prevMobile = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            Student Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learners Worldwide</span>
          </h2>
        </motion.div>

        {/* Desktop Carousel - Clean smooth sliding */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-1/2 px-4"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-purple-600">{testimonial.role}</p>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={prevDesktop}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 z-10"
          >
            <FiChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button 
            onClick={nextDesktop}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 z-10"
          >
            <FiChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          {/* Dots indicator for desktop - Shows correct number of pages */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel - Same as desktop but 1 per page */}
        <div className="md:hidden overflow-hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="flex-shrink-0 w-full px-4"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-purple-600">{testimonial.role}</p>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={prevMobile}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 z-10"
          >
            <FiChevronLeft className="w-5 h-5 text-blue-600" />
          </button>
          <button 
            onClick={nextMobile}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 z-10"
          >
            <FiChevronRight className="w-5 h-5 text-blue-600" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-blue-600 w-6" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}