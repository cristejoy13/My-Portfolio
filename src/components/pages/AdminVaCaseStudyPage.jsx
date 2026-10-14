import { useState } from 'react'
import { emailSamples, inboxSections } from '../../data/adminVaData'

const trackerPreview = [
  ['Amanda Lewis', 'Meeting Request', 'Normal', 'Waiting for Reply'],
  ['Michael Carter', 'Workflow Proposal', 'High', 'Waiting for Reply'],
  ['Sarah Mitchell', 'Missing Project Report', 'High', 'Escalated'],
  ['Olivia Bennett', 'Invoice INV-2026-104', 'High', 'Awaiting Finance Update'],
  ['Jonathan Miller', 'Partnership Opportunity', 'Low', 'Waiting for Reply'],
]

const flow = ['New email', 'Check priority', 'Decide required action', 'Respond, escalate, or follow up', 'Archive when complete']

function SourcePanel({ title, content, tone = 'white' }) {
  return <section className={`rounded-2xl border border-rose-100 p-5 shadow-sm sm:p-7 ${tone === 'blush' ? 'bg-blush-50/70' : 'bg-white'}`}>
    <h3 className="text-xs font-semibold uppercase tracking-[.18em] text-rose-700">{title}</h3>
    <div className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-rose-900">{content}</div>
  </section>
}

export default function AdminVaCaseStudyPage() {
  const [active, setActive] = useState(0)
  const sample = emailSamples[active]

  function moveTab(event, index) {
    const next = event.key === 'ArrowRight' ? (index + 1) % emailSamples.length
      : event.key === 'ArrowLeft' ? (index - 1 + emailSamples.length) % emailSamples.length
        : event.key === 'Home' ? 0
          : event.key === 'End' ? emailSamples.length - 1 : null
    if (next === null) return
    event.preventDefault()
    setActive(next)
    document.getElementById(`sample-tab-${next}`)?.focus()
  }

  return <div className="min-h-screen bg-[#fffafc] font-body text-rose-950">
    <header className="border-b border-rose-100 bg-white/90">
      <nav aria-label="Project navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <a href="/#home" className="font-display text-lg font-bold italic text-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">Criste Joy</a>
        <a href="/#experience" className="text-sm font-semibold text-rose-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">← All portfolio work</a>
      </nav>
    </header>

    <main>
      <section className="bg-gradient-to-b from-blush-50 to-[#fffafc] px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-amber-700">Simulated Portfolio Project</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold text-rose-900 sm:text-6xl">Email Management &amp; Inbox Organization</h1>
          <p className="mt-4 text-sm font-medium text-rose-700">Administrative Virtual Assistant Work Sample</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-rose-800">This project demonstrates how I would manage professional email communication, organize an inbox, prioritize messages, and protect a business owner’s time as an Administrative Virtual Assistant.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-rose-800">
            <span className="rounded-full border border-rose-200 bg-white px-4 py-2">Northstar Business Consulting, fictional business</span>
            <span className="rounded-full border border-rose-200 bg-white px-4 py-2">Role: Administrative Virtual Assistant</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-20 px-5 pb-20">
        <section aria-labelledby="samples-heading">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-amber-700">Five email samples</p>
          <h2 id="samples-heading" className="mt-2 font-display text-3xl font-semibold text-rose-900 sm:text-4xl">Professional replies in context</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-rose-800">Select a scenario to see the original message, my reply, the reasoning behind it, and the next inbox action.</p>
          <div className="mt-7 flex gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible" role="tablist" aria-label="Email samples">
            {emailSamples.map((item, index) => <button key={item.number} type="button" role="tab" id={`sample-tab-${index}`} aria-selected={active === index} aria-controls="sample-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => moveTab(event, index)} className={`min-h-11 shrink-0 rounded-full px-3 py-2 text-center text-xs font-medium leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 md:shrink md:px-2 lg:text-sm ${active === index ? 'bg-rose-800 text-white' : 'border border-rose-200 bg-white text-rose-800 hover:bg-rose-50'}`}>{item.number} {item.name}</button>)}
          </div>
          <div id="sample-panel" role="tabpanel" aria-labelledby={`sample-tab-${active}`} className="mt-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-rose-600">{sample.skill}</p><h3 className="mt-1 font-display text-2xl font-semibold text-rose-900">{sample.title}</h3></div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${sample.analysis.includes('Priority: HIGH') ? 'bg-amber-100 text-amber-900' : sample.analysis.includes('Priority: LOW') ? 'bg-stone-100 text-stone-700' : 'bg-rose-100 text-rose-800'}`}>{sample.analysis.match(/Priority: (\w+)/)?.[1] || 'Normal'} priority</span>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <SourcePanel title="Scenario" content={sample.scenario} tone="blush" />
              <SourcePanel title="Incoming email" content={sample.incoming} />
              <SourcePanel title="My professional reply" content={sample.reply} />
              <SourcePanel title="Admin VA analysis" content={sample.analysis} tone="blush" />
              <div className="lg:col-span-2"><SourcePanel title="Inbox action and follow up" content={sample.inbox} /></div>
              {sample.summary && <div className="lg:col-span-2"><SourcePanel title="Executive summary if a proposal is received" content={sample.summary} tone="blush" /></div>}
            </div>
          </div>
        </section>

        <section aria-labelledby="system-heading">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-amber-700">Inbox organization system</p>
          <h2 id="system-heading" className="mt-2 font-display text-3xl font-semibold text-rose-900 sm:text-4xl">A clear path for every message</h2>
          <ol className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {flow.map((step, index) => <li key={step} className="relative rounded-2xl border border-rose-100 bg-white p-4 text-sm font-medium text-rose-900 shadow-sm"><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-xs font-semibold text-rose-800">{index + 1}</span>{step}</li>)}
          </ol>
          <div className="mt-8 space-y-3">
            {inboxSections.map(section => <details key={section.number} className="group rounded-2xl border border-rose-100 bg-white shadow-sm"><summary className="cursor-pointer list-none px-5 py-4 font-semibold text-rose-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rose-600 [&::-webkit-details-marker]:hidden"><span className="mr-3 text-rose-500">{section.number.padStart(2, '0')}</span>{section.title}<span aria-hidden="true" className="float-right text-rose-500 group-open:rotate-45">+</span></summary><div className="whitespace-pre-wrap border-t border-rose-100 px-5 py-5 text-sm leading-7 text-rose-800">{section.content}</div></details>)}
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm">
            <div className="border-b border-rose-100 bg-blush-50 px-5 py-4"><h3 className="font-display text-xl font-semibold text-rose-900">Follow up tracker preview</h3><p className="mt-1 text-xs text-rose-700">Example records from this fictional project</p></div>
            <div className="overflow-x-auto"><table className="min-w-[640px] w-full text-left text-xs sm:text-sm"><thead className="bg-rose-50 text-rose-900"><tr>{['Contact', 'Subject', 'Priority', 'Status'].map(label => <th key={label} scope="col" className="px-5 py-3 font-semibold">{label}</th>)}</tr></thead><tbody>{trackerPreview.map(row => <tr key={row[0]} className="border-t border-rose-100">{row.map(cell => <td key={cell} className="px-5 py-3 text-rose-800">{cell}</td>)}</tr>)}</tbody></table></div>
          </div>
        </section>

        <section aria-labelledby="demonstrates-heading" className="rounded-[2rem] bg-rose-900 px-6 py-10 text-white sm:px-10">
          <h2 id="demonstrates-heading" className="font-display text-3xl font-semibold">What This Project Demonstrates</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-rose-100">This simulated project demonstrates my approach to organizing communication, handling routine administrative tasks, identifying important messages, and supporting a busy business owner.</p>
          <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">{['Professional Communication', 'Inbox Organization', 'Prioritization', 'Follow Up Management', 'Customer & Vendor Coordination', 'Executive Gatekeeping'].map(skill => <li key={skill} className="rounded-xl border border-white/20 px-4 py-3">{skill}</li>)}</ul>
          <p className="mt-8 border-t border-white/20 pt-5 text-xs leading-6 text-rose-100">All companies, names, email scenarios, and conversations shown in this project are fictional and were created for portfolio demonstration purposes.</p>
        </section>
      </div>
    </main>
    <footer className="border-t border-rose-100 bg-white px-5 py-6 text-center text-sm text-rose-700"><a href="/#experience" className="underline underline-offset-4">Portfolio</a> · <a href="/#contact" className="underline underline-offset-4">Contact</a></footer>
  </div>
}
