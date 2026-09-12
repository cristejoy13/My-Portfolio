import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '../ui/ScrollReveal'
import EducationCard from '../ui/EducationCard'
import PortfolioLightbox from '../ui/PortfolioLightbox'
import FloralDivider from '../../assets/svgs/FloralDivider'
import useModalFocus from '../../hooks/useModalFocus'
import { education } from '../../data/educationData'

const BASE = import.meta.env.BASE_URL

const informaticsCerts = [
  {
    title: 'SHS Diploma',
    note: 'Humanities & Social Sciences · July 2022',
    edited: `${BASE}certificates/informatics-diploma.jpg`,
    original: `${BASE}certificates/informatics-diploma-orig.jpg`,
    editedThumb: `${BASE}certificates/thumbs/informatics-diploma.jpg`,
    originalThumb: `${BASE}certificates/thumbs/informatics-diploma-orig.jpg`,
  },
  {
    title: 'With High Honors',
    note: 'GWA 95 · Academic Year 2021–2022',
    edited: `${BASE}certificates/informatics-high-honors.jpg`,
    original: `${BASE}certificates/informatics-high-honors-orig.jpg`,
    editedThumb: `${BASE}certificates/thumbs/informatics-high-honors.jpg`,
    originalThumb: `${BASE}certificates/thumbs/informatics-high-honors-orig.jpg`,
  },
  {
    title: 'Academic Excellence Award',
    note: 'Academic Achiever with Honors · 2020–2021',
    edited: `${BASE}certificates/informatics-academic-excellence.jpg`,
    original: `${BASE}certificates/informatics-academic-excellence-orig.jpg`,
    editedThumb: `${BASE}certificates/thumbs/informatics-academic-excellence.jpg`,
    originalThumb: `${BASE}certificates/thumbs/informatics-academic-excellence-orig.jpg`,
  },
  {
    title: 'Best in Empowerment Technologies',
    note: '2nd Semester · 2020–2021',
    edited: `${BASE}certificates/informatics-empowerment-tech.jpg`,
    original: `${BASE}certificates/informatics-empowerment-tech-orig.jpg`,
    editedThumb: `${BASE}certificates/thumbs/informatics-empowerment-tech.jpg`,
    originalThumb: `${BASE}certificates/thumbs/informatics-empowerment-tech-orig.jpg`,
  },
  {
    title: 'Best in English',
    note: 'Academic & Professional Purposes · 2020–2021',
    edited: `${BASE}certificates/informatics-best-english.jpg`,
    original: `${BASE}certificates/informatics-best-english-orig.jpg`,
    editedThumb: `${BASE}certificates/thumbs/informatics-best-english.jpg`,
    originalThumb: `${BASE}certificates/thumbs/informatics-best-english-orig.jpg`,
  },
]

const ucDocs = [
  {
    title: "Dean's List — Official",
    note: 'First Semester 2025–2026 · BSBA',
    src: `${BASE}certificates/uc-deans-list-official.jpg`,
    thumbnail: `${BASE}certificates/thumbs/uc-deans-list-official.jpg`,
  },
  {
    title: "Dean's List — Printed",
    note: 'All Sections · #185 Calosor, Criste Joy Q.',
    src: `${BASE}certificates/uc-deans-list-printed.jpg`,
    thumbnail: `${BASE}certificates/thumbs/uc-deans-list-printed.jpg`,
  },
]

const allCertificates = [
  {
    title: "Dean's List",
    note: 'University of Cebu · First Semester 2025–2026',
    src: `${BASE}certificates/uc-deans-list-official.jpg`,
    thumbnail: `${BASE}certificates/thumbs/uc-deans-list-official.jpg`,
  },
  {
    title: 'With High Honors',
    note: 'GWA 95 · Academic Year 2021–2022',
    src: `${BASE}certificates/informatics-high-honors.jpg`,
    thumbnail: `${BASE}certificates/thumbs/informatics-high-honors.jpg`,
  },
  {
    title: 'Best in English',
    note: 'Academic & Professional Purposes · 2020–2021',
    src: `${BASE}certificates/informatics-best-english.jpg`,
    thumbnail: `${BASE}certificates/thumbs/informatics-best-english.jpg`,
  },
  {
    title: 'Academic Excellence Award',
    note: 'Academic Achiever with Honors · 2020–2021',
    src: `${BASE}certificates/informatics-academic-excellence.jpg`,
    thumbnail: `${BASE}certificates/thumbs/informatics-academic-excellence.jpg`,
  },
  {
    title: 'Best in Empowerment Technologies',
    note: '2nd Semester · 2020–2021',
    src: `${BASE}certificates/informatics-empowerment-tech.jpg`,
    thumbnail: `${BASE}certificates/thumbs/informatics-empowerment-tech.jpg`,
  },
  {
    title: 'Senior High School Diploma',
    note: 'Humanities & Social Sciences · July 2022',
    src: `${BASE}certificates/informatics-diploma.jpg`,
    thumbnail: `${BASE}certificates/thumbs/informatics-diploma.jpg`,
  },
  {
    title: "Dean's List — Printed Record",
    note: 'University of Cebu · First Semester 2025–2026',
    src: `${BASE}certificates/uc-deans-list-printed.jpg`,
    thumbnail: `${BASE}certificates/thumbs/uc-deans-list-printed.jpg`,
  },
  {
    title: 'Certificate of Employment',
    note: 'vCUSTOMER Philippines · Customer Support Experience',
    src: `${BASE}certificates/vcustomer-coe.jpg`,
    thumbnail: `${BASE}certificates/thumbs/vcustomer-coe.jpg`,
  },
]

/* ── Reusable cert thumbnail grid ────────────────────────────── */
function CertGrid({ items, srcKey, onOpen }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((cert, i) => (
        <motion.button
          key={cert.title}
          className="relative rounded-xl overflow-hidden group text-left cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.18 }}
          onClick={() => onOpen(i)}
        >
          <div className="aspect-[4/3] bg-rose-50 border border-rose-100 rounded-xl overflow-hidden">
            <img
              src={srcKey ? cert[srcKey] : cert.thumbnail}
              alt={cert.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="mt-1.5 px-0.5">
            <p className="font-body text-rose-700 text-[11px] font-semibold leading-tight">{cert.title}</p>
            <p className="font-body text-rose-700 text-[10px] leading-tight">{cert.note}</p>
          </div>
          <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-rose-600 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
            View
          </div>
        </motion.button>
      ))}
    </div>
  )
}

/* ── Informatics Certificate Modal ───────────────────────────── */
function InformaticsCertModal({ onClose }) {
  const [tab, setTab]                   = useState('edited')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const dialogRef = useModalFocus(onClose)

  const slides = informaticsCerts.map(c => ({
    src: tab === 'edited' ? c.edited : c.original,
    alt: c.title,
  }))

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Informatics College Cebu certificates"
          className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.88, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.88, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-gradient-to-r from-rose-800 to-rose-700 px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-display italic text-white text-xl font-bold">Informatics College Cebu</h3>
              <p className="text-rose-200 text-xs mt-0.5">Senior High School · 2020–2022</p>
            </div>
            <button onClick={onClose} aria-label="Close Informatics certificates" className="w-11 h-11 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-sm transition-colors">✕</button>
          </div>

          <div className="flex border-b border-rose-100">
            {['edited', 'originals'].map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-3 font-body text-sm font-semibold transition-colors ${
                  tab === t ? 'text-rose-700 border-b-2 border-rose-500 bg-rose-50' : 'text-rose-600 hover:text-rose-800'
                }`}
              >
                {t === 'edited' ? '🌸 Edited Copies' : '📄 Original Documents'}
              </button>
            ))}
          </div>

          <div className="p-5 max-h-[55vh] overflow-y-auto">
            <CertGrid
              items={informaticsCerts}
              srcKey={tab === 'edited' ? 'editedThumb' : 'originalThumb'}
              onOpen={i => { setLightboxIndex(i); setLightboxOpen(true) }}
            />
          </div>
        </motion.div>
      </motion.div>

      <PortfolioLightbox open={lightboxOpen} onClose={() => setLightboxOpen(false)} index={lightboxIndex} slides={slides} />
    </>
  )
}

/* ── UC Dean's List Modal ────────────────────────────────────── */
function UCCertsModal({ onClose }) {
  const [lightboxOpen, setLightboxOpen]   = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const dialogRef = useModalFocus(onClose)

  const slides = ucDocs.map(d => ({ src: d.src, alt: d.title }))

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="University of Cebu Dean's List documents"
          className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.88, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.88, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-gradient-to-r from-purple-800 to-purple-700 px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-display italic text-white text-xl font-bold">University of Cebu – Banilad</h3>
              <p className="text-purple-200 text-xs mt-0.5">Dean's List · First Semester 2025–2026</p>
            </div>
            <button onClick={onClose} aria-label="Close University of Cebu documents" className="w-11 h-11 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-sm transition-colors">✕</button>
          </div>

          <div className="p-5">
            <CertGrid
              items={ucDocs}
              srcKey={null}
              onOpen={i => { setLightboxIndex(i); setLightboxOpen(true) }}
            />
          </div>
        </motion.div>
      </motion.div>

      <PortfolioLightbox open={lightboxOpen} onClose={() => setLightboxOpen(false)} index={lightboxIndex} slides={slides} />
    </>
  )
}

/* ── Main Education Section ──────────────────────────────────── */
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [openModal, setOpenModal] = useState(null)
  const [showAllCertificates, setShowAllCertificates] = useState(false)
  const [certificateLightboxOpen, setCertificateLightboxOpen] = useState(false)
  const [certificateIndex, setCertificateIndex] = useState(0)
  const visibleCertificates = showAllCertificates ? allCertificates : allCertificates.slice(0, 3)
  const certificateSlides = allCertificates.map(certificate => ({
    src: certificate.src,
    alt: certificate.title,
  }))

  return (
    <section id="education" className="bg-rose-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="section-wrapper">
        <ScrollReveal className="text-center mb-12">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-700 mb-2">
            🌸 &nbsp;My academic path&nbsp; 🌸
          </p>
          <h2 className="section-title mb-3">Education</h2>
          <FloralDivider className="mx-auto" />
        </ScrollReveal>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {education.map((edu) => (
            <EducationCard
              key={edu.id}
              school={edu.school}
              level={edu.level}
              period={edu.period}
              location={edu.location}
              description={edu.description}
              onClick={edu.hasCerts ? () => setOpenModal(edu.certType) : undefined}
            />
          ))}
        </motion.div>

        <ScrollReveal className="mt-12">
          <div className="max-w-5xl mx-auto rounded-3xl border border-rose-100 bg-white/75 p-5 sm:p-6 shadow-glass">
            <div className="text-center mb-5">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600">
                Verified recognition
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold italic text-rose-700">
                Selected Awards &amp; Certifications
              </h3>
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 ${
              showAllCertificates ? '' : 'lg:[&>*:first-child]:col-start-2'
            }`}>
              {visibleCertificates.map(certificate => {
                const originalIndex = allCertificates.findIndex(item => item.title === certificate.title)
                return (
                  <motion.button
                    key={certificate.title}
                    type="button"
                    onClick={() => {
                      setCertificateIndex(originalIndex)
                      setCertificateLightboxOpen(true)
                    }}
                    aria-label={`View ${certificate.title}`}
                    className="group min-w-0 rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.18 }}
                  >
                    <span className="block aspect-[4/3] overflow-hidden rounded-xl border border-rose-100 bg-rose-50">
                      <img
                        src={certificate.thumbnail}
                        alt={certificate.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </span>
                    <span className="mt-2 block font-body text-xs font-semibold leading-snug text-rose-700">
                      {certificate.title}
                    </span>
                    <span className="mt-0.5 block font-body text-[10px] leading-snug text-rose-700">
                      {certificate.note}
                    </span>
                  </motion.button>
                )
              })}
            </div>

            <div className="mt-5 text-center">
              <button
                type="button"
                onClick={() => setShowAllCertificates(current => !current)}
                className="btn-outline px-5 py-2.5 text-sm"
                aria-expanded={showAllCertificates}
              >
                {showAllCertificates ? 'Show Featured Certificates' : 'View All Certificates'}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {openModal === 'informatics' && <InformaticsCertModal onClose={() => setOpenModal(null)} />}
      </AnimatePresence>
      <AnimatePresence>
        {openModal === 'uc' && <UCCertsModal onClose={() => setOpenModal(null)} />}
      </AnimatePresence>
      <PortfolioLightbox
        open={certificateLightboxOpen}
        onClose={() => setCertificateLightboxOpen(false)}
        index={certificateIndex}
        slides={certificateSlides}
      />
    </section>
  )
}
