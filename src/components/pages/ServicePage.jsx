import { useState } from 'react'
import ServiceIcon from '../ui/ServiceIcon'
import { serviceCategories } from '../../data/servicesData'
import { experiences } from '../../data/experienceData'
import { recruitmentEvidence } from '../../data/recruitmentData'
import useModalFocus from '../../hooks/useModalFocus'

const linkClass = 'inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2'

function EvidenceImage({ src, alt, caption, onOpen }) {
  return <button type="button" onClick={() => onOpen({ src, alt })} className="group overflow-hidden rounded-xl bg-white text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2">
    <img src={src} alt={alt} loading="lazy" className="aspect-[4/3] w-full object-contain bg-rose-50 transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transition-none" />
    <span className="block px-3 py-2 text-sm text-rose-800">{caption} <span aria-hidden="true">↗</span></span>
  </button>
}

function EvidenceLightbox({ image, onClose }) {
  const dialogRef = useModalFocus(onClose)
  return <div role="presentation" className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={onClose}><div ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={image.alt} className="relative max-h-full max-w-5xl focus:outline-none" onClick={event => event.stopPropagation()}><button type="button" onClick={onClose} aria-label="Close image" className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-rose-900 focus-visible:ring-2 focus-visible:ring-rose-500">✕</button><img src={image.src} alt={image.alt} className="max-h-[90vh] max-w-full object-contain" /></div></div>
}

export default function ServicePage({ slug }) {
  const category = serviceCategories.find(item => item.id === slug)
  const [lightbox, setLightbox] = useState(null)
  if (!category) return null
  const bestOfCebu = experiences.find(item => item.company === 'Best of Cebu')
  const cashbelle = experiences.find(item => item.company === 'CashBelle')
  const goddess = experiences.find(item => item.company === 'Goddess Plan')

  return <div className="min-h-screen bg-[#fffafc] font-body text-rose-950">
    <header className="border-b border-rose-100 bg-white/90">
      <nav aria-label="Service page navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <a href="/#home" className="font-display text-lg font-bold italic text-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">Criste Joy</a>
        <a href="/#about" className="text-sm font-semibold text-rose-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">← Back to Services</a>
      </nav>
    </header>
    <main>
      <section className="bg-gradient-to-b from-blush-50 to-[#fffafc] px-5 py-14 text-center sm:py-20">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-rose-700 shadow-sm"><ServiceIcon name={slug} className="h-11 w-11" /></div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[.25em] text-amber-700">{category.subtitle}</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-rose-900 sm:text-6xl">{category.title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-rose-800">{slug === 'digital' ? 'I help businesses plan, organize, update, and improve websites and digital experiences.' : category.description}</p>
      </section>
      <section aria-labelledby="offered-heading" className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
        <h2 id="offered-heading" className="font-display text-3xl font-semibold text-rose-900">How I can help</h2>
        <div className="mt-6 grid gap-x-10 sm:grid-cols-2">{category.services.map(service => <div key={service.title} className="border-t border-rose-200 py-4"><h3 className="font-semibold text-rose-900">{service.title}</h3><p className="mt-1 text-sm leading-6 text-rose-700">{service.description}</p></div>)}</div>
      </section>
      <section aria-labelledby="evidence-heading" className="bg-white px-5 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-amber-700">Selected work</p>
          <h2 id="evidence-heading" className="mt-2 font-display text-3xl font-semibold text-rose-900">See the work</h2>
          {slug === 'creative' && <>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-rose-800">For Best of Cebu, I photographed restaurants and food, produced videos, researched places, and organized feature materials. The video previews below are from that work.</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-3">{bestOfCebu.videos.slice(0, 3).map((id, index) => <a key={id} href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-xl bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600"><img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={`Best of Cebu video ${index + 1} thumbnail`} loading="lazy" className="aspect-video w-full object-cover" /><span className="block px-3 py-3 text-sm font-semibold text-rose-800">Watch video {index + 1} ↗</span></a>)}</div>
            <div className="mt-7 flex flex-wrap gap-3"><a href="/#best-of-cebu" className={`${linkClass} border border-rose-300 text-rose-800 hover:bg-rose-50`}>Best of Cebu experience →</a><a href={bestOfCebu.link} target="_blank" rel="noopener noreferrer" className={`${linkClass} text-rose-800 underline underline-offset-4`}>Visit Best of Cebu ↗</a></div>
          </>}
          {slug === 'digital' && <>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-rose-800">I planned these independent personal projects: their features, layouts, navigation, and user flows. I directed AI-generated code, tested visible behavior, and requested refinements.</p>
            <div className="mt-7 grid gap-7 sm:grid-cols-2">{[cashbelle, goddess].map(project => <article key={project.company} className="overflow-hidden rounded-xl bg-[#fffafc] shadow-sm"><img src={project.cover} alt={`${project.company} project cover`} loading="lazy" className="aspect-[4/3] w-full object-cover" /><div className="p-5"><p className="text-sm leading-6 text-rose-700">{project.company === 'CashBelle' ? 'Personal finance tracking for income, expenses, investments, debts, and net worth.' : 'A personal planning space for routines, workouts, meals, goals, and reflection.'}</p><div className="mt-4 flex flex-wrap gap-3"><a href={project.caseStudyHref} aria-label={`View ${project.company} case study`} className={`${linkClass} border border-rose-300 text-rose-800 hover:bg-white`}>View Case Study</a><a href={project.link} aria-label={`Open ${project.company} app`} target="_blank" rel="noopener noreferrer" className={`${linkClass} bg-rose-700 text-white hover:bg-rose-800`}>Open App ↗</a></div></div></article>)}</div>
          </>}
          {slug === 'business' && <>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-rose-800">For Remote Imaging Consultants, I helped source and screen candidates for an outsourced CFO role. <strong>The candidate was identified within one week and hired three days later, ahead of the planned one-month search.</strong></p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[recruitmentEvidence[0], recruitmentEvidence[2], recruitmentEvidence[3]].filter(Boolean).map(sample => <EvidenceImage key={sample.id} src={sample.src} alt={sample.alt} caption={sample.title} onOpen={setLightbox} />)}<EvidenceImage src="/certificates/vcustomer-coe.jpg" alt="vCUSTOMER Philippines certificate of employment" caption="Customer support employment certificate" onOpen={setLightbox} /></div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-rose-800">I also handled inbound customer calls, order concerns, refunds, escalations, and case notes for the Target retail account at Tech Mahindra (vCUSTOMER Philippines). My Best of Cebu work included research and organizing business information.</p>
            <a href="/#experience" className={`${linkClass} mt-5 border border-rose-300 text-rose-800 hover:bg-rose-50`}>View professional experience and recruitment samples →</a>
          </>}
        </div>
      </section>
      <section className="px-5 py-14 text-center"><h2 className="font-display text-3xl font-semibold text-rose-900">Let’s talk about your project</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-rose-800">Share what you need and I’ll let you know how I can help.</p><a href="/#contact" className={`${linkClass} mt-6 bg-rose-700 text-white hover:bg-rose-800`}>Contact me →</a></section>
    </main>
    <footer className="border-t border-rose-100 px-5 py-6 text-center text-sm text-rose-700"><a href="/#about" className="underline underline-offset-4">All services</a> · <a href="/#experience" className="underline underline-offset-4">Portfolio</a></footer>
    {lightbox && <EvidenceLightbox image={lightbox} onClose={() => setLightbox(null)} />}
  </div>
}
