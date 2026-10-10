import ScrollReveal from '../ui/ScrollReveal'
import FloralDivider from '../../assets/svgs/FloralDivider'
import FloralCorner from '../../assets/svgs/FloralCorner'
import aboutPhoto from '../../assets/criste-about.jpg'

const services = [
  { title: 'Page layout planning and visual design improvements', description: 'I organize pages so visitors can find information and understand what matters most.' },
  { title: 'Updating text, images, and page content', description: 'I keep website information clear, current, and consistent with the brand.' },
  { title: 'Website quality checks and mobile usability testing', description: 'I check links, forms, navigation, and layouts on smaller screens.' },
  { title: 'Content research, Canva design, and digital asset organization', description: 'I gather details and prepare organized visuals and files for content work.' },
]

export default function About() {
  return (
    <section id="about" className="bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <FloralCorner size={280} />
      </div>

      <div className="section-wrapper grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
        {/* Photo */}
        <ScrollReveal direction="left">
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div
              className="absolute inset-0 bg-blush-100 rounded-2xl"
              style={{ transform: 'rotate(-3deg) scale(1.04)' }}
            />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={aboutPhoto}
                alt="Criste Joy Calosor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal direction="right" delay={0.12}>
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-700 mb-2">
            🌸 &nbsp;Services&nbsp; 🌸
          </p>
          <h2 className="section-title mb-3">Website &amp; Content Support</h2>
          <FloralDivider className="mb-5" />

          {/* Services */}
          <div>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="min-h-28 rounded-2xl border border-rose-100 bg-gradient-to-br from-white to-blush-50 p-4 shadow-sm flex items-start gap-3"
                >
                  <span
                    className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-semibold flex-shrink-0"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body leading-snug text-rose-700">
                    <span className="block text-sm font-semibold">{service.title}</span>
                    <span className="mt-1.5 block text-xs leading-relaxed">{service.description}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  )
}
