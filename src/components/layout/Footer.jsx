import RoseBud from '../../assets/svgs/RoseBud'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF } from '../../data/contactData'

export default function Footer({ className = '' }) {
  const year = new Date().getFullYear()

  return (
    <footer className={`bg-gradient-to-r from-rose-900 to-rose-800 text-rose-100 py-10 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <RoseBud size={16} className="opacity-80" />
          <span className="font-display italic text-rose-200 text-xl">Criste Joy Calosor</span>
          <RoseBud size={16} className="opacity-80" />
        </div>
        <p className="font-body text-rose-200 text-sm mb-5 italic">
          Creative Freelancer 🌸 Digital Designer 🌸 Social Media Support
        </p>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mb-6">
          <a
            href={PHONE_HREF}
            className="min-h-11 flex items-center gap-1.5 text-rose-200 hover:text-gold-DEFAULT transition-colors text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 rounded-lg px-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
          <a
            href={EMAIL_HREF}
            className="min-h-11 flex items-center gap-1.5 text-rose-200 hover:text-gold-DEFAULT transition-colors text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 rounded-lg px-2 break-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            {EMAIL}
          </a>
        </div>

        <div className="w-24 h-px bg-rose-700 mx-auto mb-4" />
        <p className="font-body text-rose-400 text-xs">
          © {year} Criste Joy Calosor · Made with love from Cebu, Philippines
        </p>
      </div>
    </footer>
  )
}
