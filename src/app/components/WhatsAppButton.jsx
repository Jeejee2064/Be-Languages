'use client'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

const PHONE = '50766135652'
const WHATSAPP_URL = `https://wa.me/${PHONE}`

function Ripple() {
  return (
    <span className="absolute inset-0 rounded-full pointer-events-none">
      {[0, 1].map(i => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ background: 'linear-gradient(135deg, #3b82f6, #9333ea)' }}
          animate={{ scale: [1, 1.9], opacity: [0.4, 0] }}
          transition={{ duration: 2.4, delay: i * 1.2, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </span>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.804 1.768 6.83L2 30l7.374-1.736A13.926 13.926 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.536 11.536 0 01-5.874-1.604l-.42-.25-4.376 1.03 1.054-4.272-.274-.438A11.538 11.538 0 014.4 16C4.4 9.594 9.594 4.4 16 4.4S27.6 9.594 27.6 16 22.406 27.6 16 27.6zm6.33-8.636c-.347-.174-2.054-1.014-2.374-1.13-.318-.116-.55-.174-.78.174-.232.346-.898 1.13-1.1 1.362-.202.23-.404.26-.75.086-.348-.174-1.47-.542-2.8-1.728-1.034-.924-1.732-2.064-1.936-2.41-.202-.348-.022-.536.152-.71.156-.155.348-.404.52-.606.174-.2.232-.346.348-.578.116-.23.058-.434-.028-.608-.086-.174-.78-1.88-1.07-2.574-.28-.676-.566-.584-.78-.594l-.664-.012c-.23 0-.606.086-.924.434-.318.346-1.214 1.186-1.214 2.892s1.244 3.354 1.418 3.586c.174.23 2.448 3.736 5.932 5.238.83.358 1.476.572 1.98.732.832.264 1.588.226 2.186.138.666-.1 2.054-.84 2.344-1.652.29-.812.29-1.508.204-1.652-.086-.144-.318-.23-.666-.404z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const controls = useAnimation()

  // Show tooltip after 5s on first load
  useEffect(() => {
    if (dismissed) return
    const t = setTimeout(() => setTooltip(true), 5000)
    return () => clearTimeout(t)
  }, [dismissed])

  // Auto-hide tooltip after 8s
  useEffect(() => {
    if (!tooltip) return
    const t = setTimeout(() => setTooltip(false), 8000)
    return () => clearTimeout(t)
  }, [tooltip])

  // Attention wiggle every 18s
  useEffect(() => {
    const wiggle = async () => {
      await controls.start({
        rotate: [0, -8, 8, -6, 6, -3, 3, 0],
        transition: { duration: 0.6, ease: 'easeInOut' },
      })
    }
    const interval = setInterval(wiggle, 18000)
    // First wiggle after 12s
    const first = setTimeout(wiggle, 12000)
    return () => { clearInterval(interval); clearTimeout(first) }
  }, [controls])

  const handleDismiss = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setTooltip(false)
    setDismissed(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Tooltip bubble */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8, x: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            className="relative max-w-[220px] bg-white rounded-2xl rounded-br-sm shadow-xl border border-gray-100 px-4 py-3 text-sm text-gray-700 leading-snug"
          >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center text-xs leading-none transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <p className="font-semibold text-gray-800 mb-0.5">👋 Questions? Chat now!</p>
            <p className="text-gray-500 text-xs">Classes or translations — I reply fast.</p>
            {/* tail */}
            <span className="absolute -bottom-2 right-3 w-0 h-0 border-l-8 border-r-0 border-t-8 border-l-transparent border-t-white drop-shadow-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        animate={controls}
        whileHover={{ scale: 1.13 }}
        whileTap={{ scale: 0.92 }}
        onHoverStart={() => !dismissed && setTooltip(true)}
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 60%, #7c3aed 100%)',
          boxShadow: '0 8px 32px rgba(99,102,241,0.45), 0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <Ripple />
        <WhatsAppIcon className="relative z-10 w-8 h-8 text-white drop-shadow-sm" />
      </motion.a>
    </motion.div>
  )
}
