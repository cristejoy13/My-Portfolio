import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import PortfolioLightbox from '../ui/PortfolioLightbox'
import FloralDivider from '../../assets/svgs/FloralDivider'
import useModalFocus from '../../hooks/useModalFocus'
import { experiences } from '../../data/experienceData'

function ResponsibilityList({ items }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-rose-700 marker:text-rose-400">
      {items.map(item => <li key={item} className="pl-1">{item}</li>)}
    </ul>
  )
}

/* ── Video Gallery Modal ─────────────────────────────────────── */
function VideoModal({ exp, onClose }) {
  const [active, setActive] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const dialogRef = useModalFocus(onClose)
  const { videos, link: siteLink } = exp
  const featuredVideoCount = 3
  const visibleVideos = showAll ? videos : videos.slice(0, featuredVideoCount)
  const remainingVideoCount = videos.length - featuredVideoCount

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 pb-4 pt-20 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => { if (!active) onClose() }}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[calc(100vh-6rem)] overflow-hidden shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Best of Cebu video work"
        initial={{ scale: 0.88, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-rose-100 flex-shrink-0">
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
                <p className="text-rose-600 text-xs mt-0.5">{videos.length} videos · tap to play</p>
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
              className="w-11 h-11 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center text-rose-700 text-sm transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-5 overflow-y-auto">
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
                  title={`Best of Cebu portfolio video ${videos.indexOf(active) + 1}`}
                />
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h4 className="mb-1 font-display text-lg font-semibold text-rose-800">Selected video work</h4>
                <p className="mb-3 text-xs leading-relaxed text-rose-700">A selection of local business and destination features.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {visibleVideos.map((id, i) => (
                    <motion.button
                      key={id}
                      type="button"
                      className="relative rounded-xl overflow-hidden group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                      style={{ aspectRatio: '16/9' }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setActive(id)}
                      aria-label={`Play Best of Cebu video ${i + 1}`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
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
                </div>

                {remainingVideoCount > 0 && (
                  <div className="mt-5 text-center">
                    <button
                      type="button"
                      onClick={() => setShowAll(current => !current)}
                      className="btn-outline text-sm px-5 py-2.5"
                      aria-expanded={showAll}
                    >
                      {showAll ? 'Show Featured Videos' : `View ${remainingVideoCount} More Videos`}
                    </button>
                  </div>
                )}
                <div className="mt-7 rounded-2xl border border-rose-100 bg-rose-50/70 p-5">
                  <h4 className="font-display text-lg font-semibold text-rose-800">Overview</h4>
                  <p className="mt-2 font-body text-sm leading-relaxed text-rose-700">{exp.description}</p>
                  <h4 className="mt-5 font-display text-lg font-semibold text-rose-800">My responsibilities</h4>
                  <ResponsibilityList items={exp.responsibilities} />
                </div>
                {exp.photography?.length > 0 && <div className="mt-7"><h4 className="font-display text-lg font-semibold text-rose-800">Photography portfolio</h4><div className="mt-3 grid grid-cols-2 gap-3">{exp.photography.map(photo => <figure key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" className="w-full rounded-xl" /><figcaption className="mt-1 text-xs text-rose-700">{photo.caption}</figcaption></figure>)}</div></div>}
                {exp.researchSamples?.length > 0 && <div className="mt-7"><h4 className="font-display text-lg font-semibold text-rose-800">Research &amp; content organization</h4><div className="mt-3 grid gap-3">{exp.researchSamples.map(sample => <a key={sample.src} href={sample.src} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-rose-800 underline">{sample.title}</a>)}</div></div>}
                <div className="mt-6 border-t border-rose-100 pt-5">
                  <h4 className="font-display text-lg font-semibold text-rose-800">Tools &amp; skills demonstrated</h4>
                  <p className="mt-2 text-sm leading-relaxed text-rose-700">Photography · Video editing · Business research · Content creation · Information organization · Business communication</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── COE Certificate Modal ───────────────────────────────────── */
function COECertificate({ exp, onClose }) {
  const coeSrc = `${import.meta.env.BASE_URL}certificates/vcustomer-coe.jpg`
  const dialogRef = useModalFocus(onClose)
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 pb-4 pt-20 bg-black/85 backdrop-blur-sm overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl max-h-[calc(100vh-6rem)] my-4 overflow-y-auto rounded-3xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="vCUSTOMER Philippines certificate of employment"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close certificate"
          className="absolute top-3 right-3 z-10 w-11 h-11 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center text-rose-600 text-sm shadow-md transition-colors"
        >
          ✕
        </button>
        <div className="px-6 pb-5 pt-6 pr-16">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-rose-600">Customer Support Experience</p>
          <h3 className="mt-1 font-display text-xl font-bold italic text-rose-800">vCUSTOMER Philippines</h3>
          <p className="mt-1 font-body text-xs font-semibold text-rose-600">{exp.role} · {exp.period}</p>
          <p className="mt-2 font-body text-sm leading-relaxed text-rose-700">{exp.description}</p>
          <ResponsibilityList items={exp.responsibilities} />
        </div>
        <p className="border-t border-rose-100 px-6 py-3 font-body text-xs font-semibold uppercase tracking-wider text-rose-600">Certificate of Employment</p>
        <img
          src={coeSrc}
          alt="Certificate of Employment – vCustomer Philippines"
          className="w-full border-t border-rose-100"
        />
      </motion.div>
    </motion.div>
  )
}

/* ── External Site Preview Modal ────────────────────────────── */
function ExternalPreviewModal({ exp, onClose }) {
  const [activeImage, setActiveImage] = useState(0)
  const dialogRef = useModalFocus(onClose)
  const screenshots = exp.gallery?.length
    ? exp.gallery
    : [{ src: exp.image, alt: `${exp.company} project preview` }]

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        className="bg-white rounded-3xl w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${exp.company} project preview`}
        initial={{ scale: 0.88, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-rose-950">
          <img
            src={screenshots[activeImage].src}
            alt={screenshots[activeImage].alt}
            className="h-full w-full object-contain"
          />
          <button
            onClick={onClose}
            aria-label={`Close ${exp.company} preview`}
            className="absolute top-3 right-3 w-11 h-11 bg-black/45 hover:bg-black/65 rounded-full flex items-center justify-center text-white text-sm transition-colors backdrop-blur-sm"
          >
            ✕
          </button>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 font-body text-[10px] font-semibold text-rose-700">
                {exp.badge}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold italic text-rose-800">{exp.company}</h3>
              <p className="mt-1 font-body text-xs font-semibold uppercase tracking-wider text-rose-600">{exp.role} · {exp.period}</p>
              <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-rose-700">{exp.description}</p>
            </div>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
            >
              Visit live app →
            </a>
          </div>

          <ResponsibilityList items={exp.responsibilities} />

          {screenshots.length > 1 && (
            <div className="mt-5">
              <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-widest text-rose-600">
                App screenshots · {activeImage + 1} of {screenshots.length}
              </p>
              <div className="grid max-w-md grid-cols-3 gap-2">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot.src}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show ${exp.company} screenshot ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={`aspect-video overflow-hidden rounded-xl border-2 bg-rose-50 p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 ${
                      activeImage === index ? 'border-rose-500' : 'border-rose-100 hover:border-rose-300'
                    }`}
                  >
                    <img src={screenshot.thumbnail || screenshot.src} alt="" className="h-full w-full rounded-lg object-contain" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          )}
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[85dvh] overflow-y-auto shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${exp.company} recruitment work`}
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
            aria-label={`Close ${exp.company} recruitment work`}
            className="absolute top-3 right-3 w-11 h-11 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-sm transition-colors backdrop-blur-sm"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <p className="font-body text-rose-700 text-sm leading-relaxed">{exp.description}</p>
          <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold leading-relaxed text-rose-900">
            Candidate identified within one week; hired three days later, ahead of the planned one-month search target.
          </div>
          <ResponsibilityList items={exp.responsibilities} />
          <div className="mt-6 border-t border-rose-100 pt-5">
            <h4 className="font-display text-xl font-semibold text-rose-800">Hiring Advertisements &amp; Graphics</h4>
            <p className="mt-2 mb-4 font-body text-sm leading-relaxed text-rose-700">
              Hiring advertisements used to support the CFO candidate search. Select an image to view it full-size in a new tab.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {exp.gallery.map(sample => (
                <a
                  key={sample.id}
                  href={sample.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View full-size ${sample.title} (opens in a new tab)`}
                  className="rounded-xl border border-rose-100 bg-rose-50/50 p-2 hover:bg-rose-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                >
                  <img src={sample.src} alt={sample.alt} className="aspect-[4/3] w-full object-contain rounded-lg bg-white" loading="lazy" />
                  <span className="mt-2 block font-body text-xs font-semibold text-rose-700">{sample.title}</span>
                </a>
              ))}
            </div>
          </div>

          {exp.evidence?.length > 0 && <div className="mt-7 border-t border-rose-100 pt-6">
            <h4 className="font-display text-xl font-semibold text-rose-800">Recruitment Process &amp; Hiring Evidence</h4>
            <p className="mt-2 text-sm leading-relaxed text-rose-700">The messages below follow the conversation from my first outreach to the post-hire welcome. Open any image to read it at full size.</p>
            <ol className="mt-5 space-y-5 border-l-2 border-rose-200 pl-6">
              {[...exp.evidence].sort((a, b) => a.order - b.order).map(sample => <li key={sample.id} className="relative">
                <span aria-hidden="true" className="absolute -left-[2.45rem] top-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-rose-700 text-xs font-bold text-white shadow-sm">{sample.order}</span>
                <a href={sample.src} target="_blank" rel="noopener noreferrer" aria-label={`Enlarge step ${sample.order}: ${sample.title} (opens in a new tab)`} className="block overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2">
                  <div className="flex max-h-80 items-center justify-center overflow-hidden bg-rose-50 p-3"><img src={sample.src} alt={sample.alt} loading="lazy" className="max-h-72 w-full object-contain" /></div>
                  <div className="p-4"><p className="text-xs font-semibold uppercase tracking-wide text-rose-600">Step {sample.order} of {exp.evidence.length} · {sample.category}</p><h5 className="mt-1 font-display text-base font-semibold text-rose-900">{sample.title}</h5><p className="mt-1 text-xs leading-relaxed text-rose-700">{sample.caption}</p></div>
                </a>
              </li>)}
            </ol>
          </div>}

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
      <span className="font-body text-xs font-semibold tracking-[0.22em] uppercase text-rose-600 whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
    </div>
  )
}

const toolGroups = [
  { label: 'Design & Content', tools: ['Canva', 'CapCut'] },
  { label: 'AI-assisted implementation', tools: ['ChatGPT', 'Claude', 'Codex', 'VS Code'] },
  { label: 'Social Media', tools: ['Facebook', 'Instagram', 'TikTok', 'YouTube'] },
]

const strengths = [
  'Page layout and visual hierarchy',
  'Website content updates',
  'Navigation and form checks',
  'Mobile layout checks',
  'Research and content organization',
]

function ExperienceCard({ exp, onClick }) {
  const isInteractive = Boolean(exp.linkType)
  const isWebApp = exp.linkType === 'external'
  const Card = isInteractive ? motion.button : motion.article
  const actionProps = isInteractive
    ? {
        type: 'button',
        onClick,
        'aria-label': `${exp.cta?.replace(' →', '') || 'Open details'} for ${exp.company}`,
      }
    : {}

  if (isWebApp) {
    return (
      <motion.article
        className="group grid w-full grid-rows-[auto_1fr] overflow-hidden rounded-2xl border border-rose-100 bg-white text-left shadow-glass transition-shadow"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.25 }}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-rose-50">
          <img src={exp.cover} alt={`${exp.company} promotional cover artwork`} loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-rose-800 shadow-sm">Promotional cover · app screens in case study</span>
        </div>
        <div className="flex min-h-0 flex-col px-4 py-3">
          <h3 className="font-display text-lg font-bold leading-tight text-rose-800">{exp.company}</h3>
          <p className="mt-1 font-body text-xs font-semibold uppercase tracking-wide text-rose-700">{exp.role}</p>
          <p className="mt-2 font-body text-sm leading-relaxed text-rose-700">{exp.description}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-2 font-body text-[11px] font-semibold">
            <a href={exp.caseStudyHref} className="inline-flex min-h-10 items-center rounded-full border border-rose-300 px-3 text-rose-800 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">View Case Study</a>
            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-full bg-rose-700 px-3 text-white hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">Open App ↗</a>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <Card
      {...actionProps}
      className={`relative w-full rounded-2xl overflow-hidden group shadow-glass text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 ${
        isInteractive ? 'cursor-pointer' : 'cursor-default'
      }`}
      style={{ minHeight: '20rem' }}
      whileHover={isInteractive ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.25 }}
    >
      <img
        src={exp.image}
        alt=""
        className={`absolute inset-0 w-full h-full ${exp.imageFit === 'contain' ? 'object-contain bg-rose-50' : 'object-cover'} transition-transform duration-500 ${isInteractive ? 'group-hover:scale-105' : ''}`}
        loading="lazy"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${exp.gradient}`} />

      <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
        <span className={`${exp.imageFit === 'contain' ? 'bg-rose-800' : 'bg-white/20 backdrop-blur-sm border border-white/25'} text-white text-xs font-semibold px-2.5 py-1 rounded-full leading-none`}>
          {exp.badge}
        </span>
        {!exp.hidePeriod && (
          <span className="bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full leading-none">
            {exp.cardPeriod || exp.period}
          </span>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display text-white text-lg font-bold leading-tight">{exp.company}</h3>
        <p className="text-white/80 text-xs mt-1 leading-snug">{exp.role}</p>
        {exp.cardSummary && (
          <p className="mt-2 font-body text-xs leading-snug text-white/90">{exp.cardSummary}</p>
        )}
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
  const [coeExp, setCoeExp]             = useState(null)
  const [videoExp, setVideoExp]         = useState(null)
  const [previewExp, setPreviewExp]     = useState(null)
  const [detailsExp, setDetailsExp]     = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxSlides, setLightboxSlides] = useState([])
  const workExperience = experiences.filter(exp => exp.linkType !== 'external')
  const webApplications = experiences.filter(exp => exp.linkType === 'external')

  function handleExpClick(exp) {
    if (exp.linkType === 'external') {
      setPreviewExp(exp)
    } else if (exp.linkType === 'videos') {
      setVideoExp(exp)
    } else if (exp.linkType === 'coe') {
      setCoeExp(exp)
    } else if (exp.linkType === 'details') {
      setDetailsExp(exp)
    } else if (exp.linkType === 'gallery' && exp.gallery) {
      setLightboxSlides(exp.gallery)
      setLightboxIndex(0)
      setLightboxOpen(true)
    }
  }


  return (
    <section id="experience" className="bg-hero-gradient relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="section-wrapper">
        {/* Section header */}
        <ScrollReveal className="text-center mb-10">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-700 mb-2">
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
        <div id="web-applications" className="grid sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto scroll-mt-24">
          {webApplications.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.08}>
              <ExperienceCard exp={exp} onClick={() => handleExpClick(exp)} />
            </ScrollReveal>
          ))}
        </div>


        {/* ── Skills & Expertise pills ── */}
        <SubLabel>Skills &amp; Tools</SubLabel>
        <ScrollReveal>
          <div className="bg-white/70 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-glass p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-0">

              {/* Tools — left */}
              <div className="flex-[1.35] text-center px-4 pb-6 md:pb-0">
                <p className="font-body text-xs font-semibold text-rose-600 uppercase tracking-widest mb-4">🛠 Tools &amp; Software</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-left">
                  {toolGroups.map(group => (
                    <div key={group.label}>
                      <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-wider text-rose-700">
                        {group.label}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.tools.map(tool => (
                          <span key={tool} className="bg-gradient-to-r from-blush-100 to-rose-100 text-rose-700 border border-rose-200 text-[11px] font-medium px-2.5 py-1.5 rounded-full font-body">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="w-px bg-rose-100 self-stretch hidden md:block mx-2" />
              <div className="h-px bg-rose-100 w-full md:hidden mb-6" />

              {/* Strengths — right */}
              <div className="flex-1 text-center px-4">
                <p className="font-body text-xs font-semibold text-rose-600 uppercase tracking-widest mb-4">🌸 Demonstrated skills</p>
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
            exp={videoExp}
            onClose={() => setVideoExp(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {coeExp && <COECertificate exp={coeExp} onClose={() => setCoeExp(null)} />}
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
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </section>
  )
}
