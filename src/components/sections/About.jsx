import ScrollReveal from '../ui/ScrollReveal'
import aboutPhoto from '../../assets/criste-about.jpg'
import { serviceCategories } from '../../data/servicesData'
import ServiceIcon from '../ui/ServiceIcon'

export default function About() {
  return <>
    <section id="about-me" className="scroll-mt-20 bg-white" aria-labelledby="about-me-heading">
      <div className="section-wrapper mx-auto grid max-w-5xl items-center gap-9 py-14 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-12 lg:py-20">
        <ScrollReveal><img src={aboutPhoto} alt="Criste Joy Calosor" className="mx-auto aspect-[3/4] w-64 rounded-2xl object-cover shadow-lg sm:w-72 lg:mx-0 lg:w-full" loading="lazy" /></ScrollReveal>
        <ScrollReveal className="mx-auto w-full max-w-[38rem] lg:mx-0">
          <h2 id="about-me-heading" className="font-display text-[2.625rem] font-semibold uppercase leading-[1.08] tracking-[.025em] text-rose-900 sm:text-[3.25rem]">About Me</h2>
          <p className="mt-4 font-display text-2xl italic leading-snug text-rose-800 sm:text-[1.75rem]">I See Possibilities Where Others See Problems.</p>
          <blockquote className="mt-7 space-y-5 text-left text-[.95rem] leading-[1.85] text-rose-800 sm:text-base">
            <p className="text-pretty">“I'm someone who loves turning ideas into something <span className="box-decoration-clone whitespace-nowrap rounded-[.2em] bg-[#F3DEA5] px-[.12em]">meaningful and useful</span>. I enjoy being creative, exploring technology, learning new things, and finding better ways to get things done. I'm naturally curious and always excited to discover something new.</p>
            <p className="text-pretty">I see <span className="box-decoration-clone whitespace-nowrap rounded-[.2em] bg-[#F3DEA5] px-[.12em]">problems as opportunities</span> to explore ideas and find practical solutions. Although I've gained experience in different fields, they all have one thing in common: I enjoy understanding how things work, organizing ideas, and finding ways to make things better.</p>
            <p className="text-pretty">I'm also a visual thinker who loves expressing ideas through colors and visuals rather than words alone. I feel alive when I see colors, and I love <span className="box-decoration-clone whitespace-nowrap rounded-[.2em] bg-[#F3DEA5] px-[.12em]">bringing ideas to life</span>. I'd love to bring that same creativity and passion to your business, creating work that's not only useful, but meaningful and full of life.”</p>
          </blockquote>
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
