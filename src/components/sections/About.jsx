import ScrollReveal from '../ui/ScrollReveal'
import aboutPhoto from '../../assets/criste-about.jpg'
import { serviceCategories } from '../../data/servicesData'
import ServiceIcon from '../ui/ServiceIcon'

export default function About() {
  return <>
    <section className="bg-white">
      <div className="section-wrapper grid items-center gap-8 py-14 md:grid-cols-[16rem_1fr] md:gap-14">
        <ScrollReveal><img src={aboutPhoto} alt="Criste Joy Calosor" className="mx-auto aspect-[4/5] w-48 rounded-2xl object-cover shadow-lg md:w-64" loading="lazy" /></ScrollReveal>
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-amber-700">About me</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-rose-900 sm:text-4xl">Creative thinking, practical support.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-rose-800">I plan and create content, direct digital projects, and help businesses keep their work organized. My portfolio shows the projects and experience behind each service.</p>
        </ScrollReveal>
      </div>
    </section>
    <section id="about" className="scroll-mt-20 bg-[#fff8f6]" aria-labelledby="services-heading">
      <div className="section-wrapper py-16 text-center sm:py-20">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-amber-700">What I can help with</p>
          <h2 id="services-heading" className="mt-3 font-display text-5xl font-semibold text-rose-900 sm:text-6xl">Services</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-rose-800">Creative, digital, and business support tailored to your needs.</p>
        </ScrollReveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-3 sm:gap-4">
          {serviceCategories.map(category => <a key={category.id} href={`/services/${category.id}/`} className="group flex min-h-48 flex-col items-center justify-center rounded-2xl px-4 py-5 text-rose-900 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none" aria-label={`Explore ${category.title}`}>
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 text-rose-700 transition-[box-shadow,transform] duration-200 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(190,24,93,.18)] group-focus-visible:shadow-[0_0_30px_rgba(190,24,93,.18)] motion-reduce:transition-none"><ServiceIcon name={category.id} className="h-10 w-10" /></span>
            <span className="mt-5 font-display text-2xl font-semibold transition-colors group-hover:text-rose-600">{category.shortTitle}</span>
            <span className="mt-1 text-sm text-rose-700">{category.homeSubtitle}</span>
            <span className="mt-3 text-sm font-semibold text-rose-700 underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current group-focus-visible:decoration-current">Explore services →</span>
          </a>)}
        </div>
      </div>
    </section>
  </>
}
