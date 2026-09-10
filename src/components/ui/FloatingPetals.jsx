import { useState } from 'react'
import { motion } from 'framer-motion'
import PetalShape from '../../assets/svgs/PetalShape'

const PETAL_COLORS = ['#fce4ec', '#f8bbd0', '#ffd3e0', '#fde68a', '#fff9c4', '#fbcfe8']

function createPetals(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 18 + 12,
    delay: Math.random() * 10,
    duration: Math.random() * 9 + 9,
    color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    startRotate: Math.random() * 360,
  }))
}

export default function FloatingPetals() {
  const [petals] = useState(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    return createPetals(isMobile ? 6 : 12)
  })

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}vw`,
            top: '-6vh',
            width: petal.size,
            height: petal.size * 1.5,
          }}
          animate={{
            y: ['0vh', '115vh'],
            rotate: [petal.startRotate, petal.startRotate + 720],
            opacity: [0, 0.8, 0.7, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 6 + 2,
            ease: 'linear',
          }}
        >
          <PetalShape fill={petal.color} />
        </motion.div>
      ))}
    </div>
  )
}
