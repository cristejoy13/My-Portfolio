import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import PortfolioLightbox from '../ui/PortfolioLightbox'
import FloralDivider from '../../assets/svgs/FloralDivider'
import { experiences } from '../../data/experienceData'

function useModalFocus(onClose) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    const handleEscape = event => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return dialogRef
}

/* ── Video Gallery Modal ─────────────────────────────────────── */
function VideoModal({ videos, siteLink, onClose }) {
  const [active, setActive] = useState(null)
  const dialogRef = useModalFocus(onClose)

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => { if (!active) onClose() }}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Best of Cebu video work"
        onKeyDown={event => { if (event.key === 'Escape') onClose() }}
        initial={{ scale: 0.88, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-rose-100">
          <div className="flex items-center gap-3">
            {active && (
              <button
                onClick={() => setActive(null)}
                aria-label="Return to video gallery"
                className="w-11 h-11 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center text-rose-600 text-sm transition-colors"
              >
                ←
              </button>
            )}
            <div>
              <h3 className="font-display italic text-rose-800 text-lg font-bold leading-tight">
                {active ? 'Now Playing' : 'Best of Cebu — Video Work'}
              </h3>
              {!active && (
                <p className="text-rose-400 text-xs mt-0.5">5 videos · tap to play</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!active && siteLink && (
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Best of Cebu website"
                className="inline-flex min-h-11 items-center text-rose-600 text-xs font-semibold hover:text-rose-800 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 transition-colors border border-rose-200 px-4 py-2 rounded-full"
              >
                Visit website ↗
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close video gallery"
              className="w-11 h-11 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center text-rose-500 text-sm transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-5">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key="player"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-xl overflow-hidden bg-black"
                style={{ aspectRatio: '16/9' }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${active}?autoplay=1&rel=0`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Best of Cebu video"
                />
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {videos.map((id, i) => (
                  <motion.button
                    key={id}
                    className="relative rounded-xl overflow-hidden group cursor-pointer"
                    style={{ aspectRatio: '16/9' }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setActive(id)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt={`Video ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-rose-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1.5 left-2 text-white text-[10px] font-semibold opacity-80">
                      #{i + 1}
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── COE Certificate Modal ───────────────────────────────────── */
function COECertificate({ onClose }) {
  const coeSrc = `${import.meta.env.BASE_URL}certificates/vcustomer-coe.jpg`
  const dialogRef = useModalFocus(onClose)
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl my-4"
        role="dialog"
        aria-modal="true"
        aria-label="vCUSTOMER Philippines certificate of employment"
        onKeyDown={event => { if (event.key === 'Escape') onClose() }}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close certificate"
          className="absolute -top-3 -right-3 z-10 w-11 h-11 bg-white hover:bg-rose-50 rounded-full flex items-center justify-center text-slate-600 text-sm shadow-lg transition-colors"
        >
          ✕
        </button>
        <img
          src={coeSrc}
          alt="Certificate of Employment – vCustomer Philippines"
          className="w-full rounded-2xl shadow-2xl"
        />
      </motion.div>
    </motion.div>
  )
}

/* ── External Site Preview Modal ────────────────────────────── */
function ExternalPreviewModal({ exp, onClose }) {
  const dialogRef = useModalFocus(onClose)
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${exp.company} project preview`}
        onKeyDown={event => { if (event.key === 'Escape') onClose() }}
        initial={{ scale: 0.88, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-36 overflow-hidden">
          <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${exp.gradient}`} />
          <div className="absolute bottom-3 left-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/30">
              {exp.badge}
            </span>
            <h3 className="font-display text-white text-xl italic font-bold mt-1">{exp.company}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label={`Close ${exp.company} preview`}
            className="absolute top-3 right-3 w-11 h-11 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-sm transition-colors backdrop-blur-sm"
          >
            ✕
          </button>
        </div>
        <div className="p-5">
          <p className="font-body text-rose-400 text-xs uppercase tracking-wider font-semibold mb-1">{exp.role} · {exp.period}</p>
          <p className="font-body text-rose-700 text-sm leading-relaxed mb-5">{exp.description}</p>
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Visit site →
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Experience Details Modal ──────────────────────────────── */
function ExperienceDetailsModal({ exp, onClose }) {
  const dialogRef = useModalFocus(onClose)

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${exp.company} responsibilities`}
        onKeyDown={event => { if (event.key === 'Escape') onClose() }}
        initial={{ scale: 0.88, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={event => event.stopPropagation()}
      >
        <div className="relative h-40 overflow-hidden">
          <img src={exp.image} alt="" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${exp.gradient}`} />
          <div className="absolute bottom-4 left-5 right-16">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
              {exp.badge}
            </span>
            <h3 className="font-display text-white text-2xl italic font-bold mt-2">{exp.company}</h3>
            <p className="text-white/85 text-xs mt-1">{exp.role} · {exp.period}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${exp.company} responsibilities`}
            className="absolute top-3 right-3 w-11 h-11 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-sm transition-colors backdrop-blur-sm"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <p className="font-body text-rose-700 text-sm leading-relaxed mb-5">{exp.description}</p>
          <ul className="space-y-3">
            {exp.responsibilities.map(responsibility => (
              <li key={responsibility} className="flex gap-3 font-body text-sm leading-relaxed text-rose-700">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" aria-hidden="true" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Sub-section label ───────────────────────────────────────── */
function SubLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
      <span className="font-body text-xs font-semibold tracking-[0.22em] uppercase text-rose-400 whitespace-nowrap">
        🌸 &nbsp;{children}&nbsp; 🌸
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
    </div>
  )
}

const tools = [
  'Canva',
  'CapCut',
  'ChatGPT',
  'Claude',
  'VS Code',
  'Codex',
  'Google Sheets / Excel',
  'Facebook',
  'Instagram',
  'TikTok',
  'YouTube',
]

const strengths = [
  'Creative Thinking',
  'Client Communication',
  'Organized',
  'Active Listening',
  'Adaptability',
]

function ExperienceCard({ exp, onClick }) {
  const isInteractive = Boolean(exp.linkType)
  const Card = isInteractive ? motion.button : motion.article
  const actionProps = isInteractive
    ? {
        type: 'button',
        onClick,
        'aria-label': `${exp.cta?.replace(' →', '') || 'Open details'} for ${exp.company}`,
      }
    : {}

  return (
    <Card
      {...actionProps}
      className={`relative w-full rounded-2xl overflow-hidden group shadow-glass text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 ${
        isInteractive ? 'cursor-pointer' : 'cursor-default'
      }`}
      style={{ aspectRatio: '4/3' }}
      whileHover={isInteractive ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.25 }}
    >
      <img
        src={exp.image}
        alt=""
        className={`w-full h-full object-cover transition-transform duration-500 ${isInteractive ? 'group-hover:scale-105' : ''}`}
        loading="lazy"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${exp.gradient}`} />

      <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/25 leading-none">
          {exp.badge}
        </span>
        <span className="bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full leading-none">
          {exp.period}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display text-white text-lg font-bold leading-tight">{exp.company}</h3>
        <p className="text-white/80 text-xs mt-1 leading-snug">{exp.role}</p>
        {exp.note && (
          <p className="text-amber-200 text-xs italic mt-1">{exp.note}</p>
        )}
        {isInteractive && exp.cta && (
          <p className="text-white text-xs font-semibold mt-2">{exp.cta}</p>
        )}
      </div>
    </Card>
  )
}

/* ── Combined Work & Skills Section ─────────────────────────── */
export default function WorkAndSkills() {
  const [coeOpen, setCoeOpen]           = useState(false)
  const [videoExp, setVideoExp]         = useState(null)
  const [previewExp, setPreviewExp]     = useState(null)
  const [detailsExp, setDetailsExp]     = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSlides, setLightboxSlides] = useState([])
  const workExperience = experiences.filter(exp => exp.linkType !== 'external')
  const webApplications = experiences.filter(exp => exp.linkType === 'external')

  function handleExpClick(exp) {
    if (exp.linkType === 'external') {
      setPreviewExp(exp)
    } else if (exp.linkType === 'videos') {
      setVideoExp(exp)
    } else if (exp.linkType === 'coe') {
      setCoeOpen(true)
    } else if (exp.linkType === 'details') {
      setDetailsExp(exp)
    } else if (exp.linkType === 'gallery' && exp.gallery) {
      setLightboxSlides(exp.gallery)
      setLightboxOpen(true)
    }
  }

  return (
    <section id="experience" className="bg-hero-gradient relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="section-wrapper">
        {/* Section header */}
        <ScrollReveal className="text-center mb-10">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            🌸 &nbsp;My Journey&nbsp; 🌸
          </p>
          <h2 className="section-title mb-3">Skills &amp; Experience</h2>
          <FloralDivider className="mx-auto mb-3" />
          <p className="font-body text-rose-600 text-sm">
            Explore selected work through videos, certificates, and live web applications.
          </p>
        </ScrollReveal>

        {/* ── Experience cards ── */}
        <SubLabel>Experience</SubLabel>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {workExperience.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.08}>
              <ExperienceCard exp={exp} onClick={() => handleExpClick(exp)} />
            </ScrollReveal>
          ))}
        </div>

        <SubLabel>Web Applications</SubLabel>
        <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
          {webApplications.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.08}>
              <ExperienceCard exp={exp} onClick={() => handleExpClick(exp)} />
            </ScrollReveal>
          ))}
        </div>

        {/* ── Skills & Expertise pills ── */}
        <SubLabel>Tools &amp; Strengths</SubLabel>
        <ScrollReveal>
          <div className="bg-white/70 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-glass p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-0">

              {/* Tools — left */}
              <div className="flex-1 text-center px-4 pb-6 md:pb-0">
                <p className="font-body text-xs font-semibold text-rose-400 uppercase tracking-widest mb-4">🛠 Tools &amp; Software</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tools.map(tool => (
                    <span key={tool} className="bg-gradient-to-r from-blush-100 to-rose-100 text-rose-700 border border-rose-200 text-xs font-medium px-3 py-1.5 rounded-full font-body">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="w-px bg-rose-100 self-stretch hidden md:block mx-2" />
              <div className="h-px bg-rose-100 w-full md:hidden mb-6" />

              {/* Strengths — right */}
              <div className="flex-1 text-center px-4">
                <p className="font-body text-xs font-semibold text-rose-400 uppercase tracking-widest mb-4">🌸 Strengths</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {strengths.map(s => (
                    <span key={s} className="bg-gradient-to-r from-blush-100 to-rose-100 text-rose-700 border border-rose-200 text-xs font-medium px-3 py-1.5 rounded-full font-body">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {videoExp && (
          <VideoModal
            videos={videoExp.videos}
            siteLink={videoExp.link}
            onClose={() => setVideoExp(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {coeOpen && <COECertificate onClose={() => setCoeOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {previewExp && <ExternalPreviewModal exp={previewExp} onClose={() => setPreviewExp(null)} />}
      </AnimatePresence>

      <AnimatePresence>
        {detailsExp && <ExperienceDetailsModal exp={detailsExp} onClose={() => setDetailsExp(null)} />}
      </AnimatePresence>

      <PortfolioLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        index={0}
        slides={lightboxSlides}
      />
    </section>
  )
}
