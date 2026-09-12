import { motion } from 'framer-motion'
import FloralCorner from '../../assets/svgs/FloralCorner'

const levelStyles = {
  'College':          'bg-purple-100 text-purple-700 border-purple-200',
  'Elementary':       'bg-amber-100 text-amber-700 border-amber-200',
  'Junior High School': 'bg-pink-100 text-pink-700 border-pink-200',
  'Senior High School': 'bg-rose-100 text-rose-700 border-rose-200',
}

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function EducationCard({ school, level, period, location, description, onClick }) {
  const Card = onClick ? motion.button : motion.article
  const actionProps = onClick
    ? {
        type: 'button',
        onClick,
        'aria-label': `View certificates for ${school}`,
      }
    : {}

  return (
    <Card
      {...actionProps}
      variants={cardVariants}
      className={`glass-card w-full p-6 relative overflow-hidden transition-shadow duration-300 group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 ${onClick ? 'cursor-pointer hover:shadow-gold' : 'hover:shadow-glass-md'}`}
    >
      {/* Decorative corner */}
      <div className="absolute -top-4 -right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
        <FloralCorner size={100} />
      </div>

      {/* Level badge */}
      <span
        className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-3 ${levelStyles[level] ?? 'bg-rose-100 text-rose-700 border-rose-200'}`}
      >
        {level}
      </span>

      {/* School name */}
      <h3 className="font-display text-xl font-semibold text-rose-800 italic leading-snug mb-2">
        {school}
      </h3>

      {/* Period */}
      <div className="flex items-center gap-1.5 text-amber-600 text-sm font-medium mb-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {period}
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-rose-600 text-xs mb-3">
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {location}
      </div>

      {/* Description */}
      <p className="font-body text-rose-600 text-sm leading-relaxed">
        {description}
      </p>

      {onClick && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-rose-400/10 rounded-2xl">
          <span className="bg-rose-500/90 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full border border-rose-300/40 font-semibold font-body shadow-md">
            🌸 Tap to explore
          </span>
        </div>
      )}
    </Card>
  )
}
