'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// ─── Config — edit these ──────────────────────────────────────────
const WHATSAPP_NUMBER = '50769XXXXXXX'           // your full number, no + or spaces
// ─────────────────────────────────────────────────────────────────

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

function Ripple() {
  return (
    <span className="absolute inset-0 rounded-full pointer-events-none">
      {[0, 1].map(i => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ background: '#9333ea' }}
          animate={{ scale: [1, 1.8], opacity: [0.35, 0] }}
          transition={{ duration: 2.2, delay: i * 1.1, repeat: Infinity, ease: 'easeOut' }}
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
  const [popped, setPopped] = useState(false)

  // Show tooltip bubble after 4s on first load
  useEffect(() => {
    if (popped) return
    const t = setTimeout(() => { setTooltip(true); setPopped(true) }, 4000)
    return () => clearTimeout(t)
  }, [popped])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.8 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Tooltip bubble */}
     

      {/* Main button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.94 }}
        onHoverStart={() => setTooltip(true)}
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 60%, #6d28d9 100%)',
          boxShadow: '0 8px 32px rgba(147,51,234,0.45), 0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <Ripple />
        <WhatsAppIcon className="relative z-10 w-8 h-8 text-white drop-shadow-sm" />
      </motion.a>
    </motion.div>
  )
}