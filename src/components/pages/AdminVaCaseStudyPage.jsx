import { useState } from 'react'
import { emailSamples } from '../../data/adminVaData'

const sampleGuides = [
  {
    summary: 'A prospective client asks to meet but has not shared a time, duration, or agenda.',
    decision: 'Ask for the missing details before checking the calendar or confirming a meeting.',
    nextStep: 'Collect meeting details, then request approval.',
  },
  {
    summary: 'A prospective client has not replied to a proposal. The owner authorized one polite follow up.',
    decision: 'Send the authorized reminder without pressing for a decision.',
    nextStep: 'Monitor the proposal response.',
  },
  {
    summary: 'A client needs an overdue project report for an upcoming management meeting.',
    decision: 'Acknowledge the concern and escalate it for a verified update without promising a delivery date.',
    nextStep: 'Get a confirmed update from the project team.',
  },
  {
    summary: 'A contractor asks about the status of invoice INV-2026-104.',
    decision: 'Check the invoice with finance before sharing any payment information.',
    nextStep: 'Verify the payment status with finance.',
  },
  {
    summary: 'A software vendor requests a meeting about a possible partnership.',
    decision: 'Request a written overview, pricing, and terms before sending the opportunity for review.',
    nextStep: 'Review the proposal if the sender provides it.',
  },
]

function readField(text, label) {
  return text.match(new RegExp(`(?:^|\\n)${label}:\\s*([^\\n]+)`))?.[1] || ''
}

function EmailMessage({ text }) {
  const [header, ...body] = text.split('\n\n')
  return (
    <article className="overflow-hidden rounded-2xl border border-rose-100 bg-white">
      <div className="space-y-1 border-b border-rose-100 bg-blush-50/60 px-5 py-4 text-sm text-rose-900 sm:px-7">
        {header.split('\n').map((line, index) => {
          const colon = line.indexOf(':')
          return <p key={index}><strong>{line.slice(0, colon + 1)}</strong>{line.slice(colon + 1)}</p>
        })}
      </div>
      <div className="whitespace-pre-wrap break-words px-5 py-5 text-sm leading-7 text-rose-950 sm:px-7 sm:py-6">
        {body.join('\n\n')}
      </div>
    </article>
  )
}

export default function AdminVaCaseStudyPage() {
  const [active, setActive] = useState(0)
  const sample = emailSamples[active]
  const guide = sampleGuides[active]
  const originalLabel = active === 1 ? 'View original proposal email' : 'View incoming email'

  return (
    <div className="min-h-screen bg-[#fffafc] font-body text-rose-950">
      <header className="border-b border-rose-100 bg-white/90">
        <nav aria-label="Project navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <a href="/#home" className="font-display text-lg font-bold italic text-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">Criste Joy</a>
          <a href="/#experience" className="text-sm font-semibold text-rose-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">← All portfolio work</a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-16">
        <section className="border-b border-rose-100 pb-8 pt-10 sm:pt-14">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-amber-700">Administrative Virtual Assistant Work Sample</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-semibold text-rose-900 sm:text-5xl">Email Management &amp; Inbox Organization</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-rose-800">Five professional email replies with a practical preview of how I would organize and follow up on each conversation.</p>
          <p className="mt-2 text-xs leading-5 text-rose-700">Simulated portfolio project. Northstar Business Consulting, its contacts, and the conversations below are fictional.</p>
        </section>

        <section aria-labelledby="samples-heading" className="pt-9">
          <h2 id="samples-heading" className="font-display text-2xl font-semibold text-rose-900 sm:text-3xl">Email samples</h2>
          <p className="mt-1 text-sm text-rose-800">Select a situation to read the complete reply.</p>
          <div className="mt-5 lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:items-start lg:gap-8">
            <div className="lg:hidden">
              <label htmlFor="sample-select" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-rose-800">Choose a sample</label>
              <select id="sample-select" value={active} onChange={event => setActive(Number(event.target.value))} className="min-h-12 w-full rounded-xl border border-rose-200 bg-white px-3 py-2 text-sm font-medium text-rose-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">
                {emailSamples.map((item, index) => <option key={item.number} value={index}>{item.number} {item.name}</option>)}
              </select>
            </div>
            <nav aria-label="Email samples" className="hidden overflow-hidden rounded-2xl border border-rose-100 bg-white lg:block">
              {emailSamples.map((item, index) => <button key={item.number} type="button" aria-current={active === index ? 'true' : undefined} onClick={() => setActive(index)} className={`block min-h-14 w-full border-l-4 px-4 py-3 text-left text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rose-600 ${index ? 'border-t border-t-rose-100' : ''} ${active === index ? 'border-l-rose-800 bg-blush-50 text-rose-900' : 'border-l-transparent text-rose-700 hover:bg-rose-50'}`}><span className="mr-2 text-xs font-semibold text-rose-500">{item.number}</span>{item.name}</button>)}
            </nav>

            <div className="min-w-0 pt-5 lg:pt-0">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-rose-600">Sample {sample.number} of 05</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-rose-900">{sample.name}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-rose-800">{guide.summary}</p>
              </div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-[.16em] text-rose-800">My reply</h4>
              <EmailMessage text={sample.reply} />
              <div className="mt-4 border-l-2 border-rose-300 pl-4 text-sm leading-6 text-rose-800">
                <span className="font-semibold text-rose-900">Why I handled it this way: </span>{guide.decision}
              </div>
              <details key={active} className="mt-4 rounded-xl border border-rose-100 bg-white">
                <summary className="min-h-12 cursor-pointer list-none px-4 py-3 text-sm font-semibold text-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rose-600 [&::-webkit-details-marker]:hidden">{originalLabel}<span aria-hidden="true" className="float-right">+</span></summary>
                <div className="border-t border-rose-100 p-3 sm:p-4"><EmailMessage text={sample.incoming} /></div>
              </details>
            </div>
          </div>
        </section>

        <section aria-labelledby="inbox-heading" className="mt-14 border-t border-rose-100 pt-9">
          <h2 id="inbox-heading" className="font-display text-2xl font-semibold text-rose-900 sm:text-3xl">Inbox organization preview</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-rose-800">How I would prioritize and track the five fictional conversations shown above.</p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-rose-100 bg-white">
            <div className="hidden grid-cols-[1.4fr_1.2fr_.65fr_1.5fr] gap-4 border-b border-rose-100 bg-blush-50/70 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-rose-800 md:grid">
              <span>Conversation</span><span>Inbox label and status</span><span>Priority</span><span>Next step</span>
            </div>
            <ul className="divide-y divide-rose-100">
              {emailSamples.map((item, index) => <li key={item.number} className="grid gap-2 px-5 py-4 text-sm md:grid-cols-[1.4fr_1.2fr_.65fr_1.5fr] md:gap-4">
                <div><p className="font-semibold text-rose-900">{item.name}</p><p className="text-xs text-rose-700">{readField(item.reply, 'To')}</p></div>
                <div><p className="text-rose-900">{readField(item.inbox, 'Label')}</p><p className="mt-1 text-xs text-rose-700">{readField(item.inbox, 'Status')}</p></div>
                <p className="text-rose-800"><span className="mr-1 font-semibold md:hidden">Priority: </span>{readField(item.analysis, 'Priority')}</p>
                <p className="text-rose-800">{sampleGuides[index].nextStep}</p>
              </li>)}
            </ul>
          </div>
          <p className="mt-3 text-xs leading-5 text-rose-700">These are proposed actions for a work sample. No emails were sent and no real client records were created.</p>
        </section>
      </main>
      <footer className="border-t border-rose-100 bg-white px-5 py-6 text-center text-sm text-rose-700"><a href="/#experience" className="underline underline-offset-4">Portfolio</a> · <a href="/#contact" className="underline underline-offset-4">Contact</a></footer>
    </div>
  )
}
