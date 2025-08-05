'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { BlobBackground, MonsteraBackground, WaveBackground, TopWaveBackground, DoubleWaveBackground, GridPattern } from './backgrounds';



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
    name: "Olivia S.",
    role: "Empresaria",
    content: "Las clases de español transformaron completamente mi capacidad para comunicarme con los clientes. El estilo de enseñanza de Joanna es práctico, claro y adaptado a las necesidades reales del negocio. Ahora me siento segura manteniendo conversaciones con clientes y socios de habla hispana, lo que ha abierto nuevas oportunidades para mi negocio."
  },
  {
    id: 2,
    name: "Nancy L.",
    role: "Osteópata",
    content: "¡Me divertí mucho aprendiendo inglés con Joanna! Su enfoque me hizo sentir segura, relajada y realmente emocionada de hablar. La práctica de la vida real me ayudó a hablar con mis clientes internacionales con facilidad."
  },
  {
    id: 3,
    name: "Ronny S.",
    role: "Empresario Jubilado",
    content: "Tengo más de 70 años y tenía 0 conocimiento de español, después de aprender con Joanna durante 2 años he hecho un progreso significativo."
  },
  {
    id: 4,
    name: "Carlos M.",
    role: "Consultor Legal",
    content: "El trabajo de traducción de Joanna fue rápido, preciso y culturalmente exacto. Me ayudó a traducir documentos oficiales y manejó todo con profesionalismo y cuidado. ¡Altamente recomendada!"
  }
]

export default function TestimonialsES() {
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
      <DoubleWaveBackground/>
      
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
<span className="inline-block mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase">
  Lo Que Dicen Los Clientes
</span>
<h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
  Servicios de Aprendizaje de Idiomas y Traducción <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Que Marcan la Diferencia</span>
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