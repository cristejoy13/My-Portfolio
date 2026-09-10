import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RoseBud from '../../assets/svgs/RoseBud'

const navLinks = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Work & Skills' },
  { href: '#education',  label: 'Education' },
  { href: '#contact',    label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-lg border-b border-rose-100 shadow-sm py-3'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-display italic text-rose-700 text-xl font-semibold hover:text-rose-500 transition-colors"
        >
          <RoseBud size={18} />
          CJC
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm font-medium pb-1 transition-colors duration-200 ${
                  isActive ? 'text-rose-600' : 'text-rose-400 hover:text-rose-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-400 rounded-full"
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden min-w-11 min-h-11 p-2 text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-full"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <div
            className={`w-5 h-0.5 bg-current mb-1.5 transition-transform duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <div
            className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-200 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <div
            className={`w-5 h-0.5 bg-current transition-transform duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-rose-100"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-6 py-3.5 font-body text-sm font-medium border-b border-rose-50 transition-colors ${
                    isActive
                      ? 'text-rose-600 bg-blush-50'
                      : 'text-rose-500 hover:bg-blush-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && <RoseBud size={10} />}
                  {link.label}
                </a>
              )
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
