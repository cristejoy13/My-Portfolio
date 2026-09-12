import { motion } from 'framer-motion'
import FloralCorner from '../../assets/svgs/FloralCorner'
import headshot from '../../assets/criste-headshot.jpg'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF } from '../../data/contactData'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-hero-gradient flex items-center relative overflow-hidden"
    >
      {/* Decorative corners */}
      <div className="absolute top-0 right-0 opacity-25 pointer-events-none">
        <FloralCorner size={220} />
      </div>
      <div
        className="absolute bottom-0 left-0 opacity-15 pointer-events-none"
        style={{ transform: 'rotate(180deg)' }}
      >
        <FloralCorner size={160} />
      </div>

      {/* Floating background orbs */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: '-100px', right: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(212,184,224,0.3) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: '-80px', left: '-80px',
          width: '380px', height: '380px',
          background: 'radial-gradient(circle, rgba(242,184,198,0.25) 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* — Text column — */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          {/* AI badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blush-200 to-rose-200 px-4 py-1.5 rounded-full text-sm font-semibold text-rose-800 mb-4 shadow-sm border border-rose-200">
            🌸 Creative Freelancer 🌸
          </div>

          {/* Eyebrow */}
          <p className="font-body text-sm font-semibold text-rose-600 mb-3 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-rose-400 flex-shrink-0" />
            Graphic &amp; Web Design &nbsp;·&nbsp; Social Media Management &nbsp;·&nbsp; Administrative Support
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-2 text-rose-900">
            Criste Joy
            <br />
            <span className="text-rose-500 italic">Calosor</span>
          </h1>

          {/* Tagline */}
          <p className="font-display italic text-lg text-rose-400 mb-5 leading-relaxed">
            "Your ideas, your content, your daily tasks.<br className="hidden md:block" />
            Beautifully handled."
          </p>

          {/* Description */}
          <p className="font-body text-rose-700 leading-relaxed mb-7 max-w-md text-sm md:text-base">
            I help small businesses and professionals with visual content, websites, social media, and day-to-day digital support — combining creativity, organization, and reliable communication.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a href="#experience" className="btn-primary">
              🌸 View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>

          {/* Contact pills */}
          <div className="flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-white/65 backdrop-blur-sm px-3 py-2 rounded-full
                         text-xs text-rose-600 border border-rose-200 hover:border-rose-400
                         hover:bg-white/80 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-2 bg-white/65 backdrop-blur-sm px-3 py-2 rounded-full
                         text-xs text-rose-600 border border-rose-200 hover:border-rose-400
                         hover:bg-white/80 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              {EMAIL}
            </a>
          </div>
        </motion.div>

        {/* — Photo column — */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-sm">
            <div
              className="absolute inset-0 bg-blush-100 rounded-2xl"
              style={{ transform: 'rotate(-3deg) scale(1.04)' }}
            />
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-gold aspect-[4/5]">
              <img src={headshot} alt="Criste Joy Calosor" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blush-200 to-amber-100 rounded-2xl px-4 py-3 shadow-gold text-center border border-rose-100">
              <span className="font-display font-black text-3xl text-rose-900 block leading-none">2+</span>
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-rose-500 leading-tight">
                Years of<br />Experience
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-28px); }
        }
      `}</style>
    </section>
  )
}
