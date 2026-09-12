import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import FloralDivider from '../../assets/svgs/FloralDivider'
import FloralCorner from '../../assets/svgs/FloralCorner'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATION } from '../../data/contactData'

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL
const FORM_READY = Boolean(FORMSPREE_URL)

const contactInfo = [
  {
    label: 'Email',
    value: EMAIL,
    href: EMAIL_HREF,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7.5l7.7 5.1a2.4 2.4 0 002.6 0L21 7.5M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5.5A2.5 2.5 0 015.5 3h1.2a2 2 0 011.9 1.4l.8 2.5a2 2 0 01-.5 2l-1.1 1.1a14.2 14.2 0 006.2 6.2l1.1-1.1a2 2 0 012-.5l2.5.8a2 2 0 011.4 1.9v1.2a2.5 2.5 0 01-2.5 2.5H18C9.7 21 3 14.3 3 6v-.5z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: LOCATION,
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s7-5.2 7-12A7 7 0 105 9c0 6.8 7 12 7 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      </svg>
    ),
  },
]

const inputClass =
  'w-full border border-rose-200 rounded-xl px-4 py-3 font-body text-sm text-rose-900 ' +
  'placeholder:text-rose-600 bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-100 ' +
  'focus:outline-none transition-colors duration-200'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target
    setForm(previous => ({ ...previous, [name]: value }))
    if (status === 'error' || status === 'unavailable') setStatus('idle')
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (!FORM_READY) {
      setStatus('unavailable')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Form submission failed')

      setSubmitted(true)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function handleReset() {
    setForm(initialForm)
    setSubmitted(false)
    setStatus('idle')
  }

  return (
    <section id="contact" className="bg-blush-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none" aria-hidden="true">
        <FloralCorner size={280} />
      </div>

      <div className="section-wrapper relative z-10">
        <ScrollReveal className="text-center mb-10">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 mb-2">
            🌸 &nbsp;Let&apos;s work together&nbsp; 🌸
          </p>
          <h2 className="section-title mb-3">Let&apos;s Connect</h2>
          <FloralDivider className="mx-auto mb-4" />
          <p className="font-body text-rose-600 text-sm max-w-lg mx-auto">
            Need creative or administrative support? Tell me what you need and your preferred timeline.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-rose-100 bg-white shadow-glass-md grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white p-7 sm:p-9">
              <div className="absolute -top-12 -right-10 w-44 h-44 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />

              <div className="relative">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-rose-200 mb-3">
                  Start a conversation
                </p>
                <h3 className="font-display text-3xl italic font-semibold leading-tight mb-4">
                  Have a project in mind?
                </h3>
                <p className="font-body text-sm leading-relaxed text-rose-100 mb-7">
                  Send the details through the form, or contact me directly using the information below.
                </p>

                <div className="space-y-3">
                  {contactInfo.map(({ icon, label, value, href }) => {
                    const content = (
                      <>
                        <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-rose-100 flex-shrink-0">
                          {icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[11px] uppercase tracking-wider text-rose-300 mb-0.5">{label}</span>
                          <span className="block text-sm font-medium text-white break-words">{value}</span>
                        </span>
                      </>
                    )

                    return href ? (
                      <a
                        key={label}
                        href={href}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                        {content}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-9">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="min-h-[31rem] flex flex-col items-center justify-center text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-5 text-rose-600" aria-hidden="true">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl italic text-rose-800 mb-2">Message sent</h3>
                    <p className="font-body text-rose-600 text-sm leading-relaxed max-w-sm mb-6">
                      Thank you for reaching out. I can reply directly to the email address you provided.
                    </p>
                    <button type="button" onClick={handleReset} className="btn-outline">
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    action={FORM_READY ? FORMSPREE_URL : undefined}
                    method="POST"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-rose-700 mb-2">Project inquiry</p>
                      <h3 className="font-display text-2xl italic font-semibold text-rose-800">Tell me how I can help</h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block font-body text-xs font-semibold text-rose-600 mb-1.5">Name</label>
                        <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} autoComplete="name" placeholder="Your name" className={inputClass} required />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block font-body text-xs font-semibold text-rose-600 mb-1.5">Email</label>
                        <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" placeholder="Your email" className={inputClass} required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block font-body text-xs font-semibold text-rose-600 mb-1.5">Subject</label>
                      <input id="contact-subject" type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What would you like help with?" className={inputClass} required />
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-3 mb-1.5">
                        <label htmlFor="contact-message" className="font-body text-xs font-semibold text-rose-600">Message</label>
                        <span className="font-body text-[11px] text-rose-600">{form.message.length}/2000</span>
                      </div>
                      <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Share the project, timeline, and support you need." rows={6} minLength={10} maxLength={2000} className={`${inputClass} resize-y min-h-36`} required />
                    </div>

                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                    <button type="submit" disabled={status === 'sending' || !FORM_READY} className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none">
                      {status === 'sending' ? 'Sending…' : 'Send Project Inquiry'}
                    </button>

                    <div className="min-h-10 text-center" aria-live="polite">
                      {(status === 'error' || status === 'unavailable' || !FORM_READY) && (
                        <p role="alert" className="font-body text-xs text-rose-700 mb-1">
                          {status === 'error' ? 'The message could not be sent. Please try again or email me directly.' : 'The contact form is temporarily unavailable.'}
                        </p>
                      )}
                      <p className="font-body text-xs text-rose-600">
                        Prefer email?{' '}
                        <a href={EMAIL_HREF} className="font-semibold underline underline-offset-2 hover:text-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-sm">{EMAIL}</a>
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
