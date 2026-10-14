const benefits = [
  ['01', 'INBOX MANAGEMENT', 'Keep emails organized and important messages easy to find.'],
  ['02', 'SCHEDULING', 'Stay on top of meetings, appointments, and calendar updates.'],
  ['03', 'CUSTOMER COMMUNICATION', 'Keep customer inquiries and routine messages moving.'],
  ['04', 'FOLLOW-UPS & ORGANIZATION', 'Track pending conversations and keep everyday tasks organized.'],
]

const steps = [
  ['STEP 1 — TELL US WHAT YOU NEED', "Share the administrative tasks you'd like help managing."],
  ['STEP 2 — WE ORGANIZE YOUR WORKFLOW', "We'll identify your recurring tasks and establish a clear support process."],
  ['STEP 3 — GET ONGOING SUPPORT', 'Our team helps manage agreed tasks so you can focus on your business priorities.'],
]

function NewsletterPreview() {
  return <div className="mx-auto max-w-[600px] overflow-hidden rounded-lg border border-slate-200 bg-white text-[#17304A] shadow-xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
    <div className="bg-[#17304A] px-6 py-7 text-center text-sm font-bold tracking-[.18em] text-white sm:px-10">NORTHSTAR BUSINESS CONSULTING</div>
    <div className="px-6 py-9 sm:px-10">
      <p className="text-center text-xs font-bold tracking-[.16em] text-[#436981]">NEW SERVICE ANNOUNCEMENT</p>
      <p className="mt-6 text-center text-base">Introducing</p>
      <h3 className="mt-2 text-center text-3xl font-bold leading-tight sm:text-4xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>PRIORITY BUSINESS SUPPORT</h3>
      <p className="mt-3 text-center text-sm text-[#50677b]">More organization. Less time spent on admin.</p>
      <div className="my-8 h-px bg-[#dce8f0]" />
      <h4 className="text-lg font-bold leading-7" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>RUNNING A BUSINESS SHOULDN'T MEAN HANDLING EVERYTHING YOURSELF.</h4>
      <p className="mt-4 text-sm leading-7">Between answering emails, scheduling appointments, following up with customers, and keeping daily tasks organized, administrative work can quickly take up your day.</p>
      <p className="mt-4 text-sm leading-7">That's where we come in.</p>
      <h4 className="mt-8 text-lg font-bold" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>MEET PRIORITY BUSINESS SUPPORT</h4>
      <p className="mt-4 text-sm leading-7">Our new Priority Business Support service helps small business owners stay organized by taking care of routine administrative responsibilities.</p>
      <p className="mt-4 text-sm leading-7">Whether you need help managing your inbox, coordinating schedules, or responding to customer inquiries, we're here to help you keep things running smoothly.</p>
      <h4 className="mt-8 text-lg font-bold" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>WHAT CAN WE HELP YOU WITH?</h4>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">{benefits.map(([number, title, description]) => <div key={number} className="rounded-lg bg-[#eef5f9] p-4"><p className="text-xs font-bold tracking-wide">{number} — {title}</p><p className="mt-2 text-sm leading-6">{description}</p></div>)}</div>
      <h4 className="mt-8 text-lg font-bold" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>HOW IT WORKS</h4>
      <div className="mt-4 space-y-4">{steps.map(([title, description]) => <div key={title} className="border-l-2 border-[#8bb4cd] pl-4"><p className="text-xs font-bold tracking-wide">{title}</p><p className="mt-1 text-sm leading-6">{description}</p></div>)}</div>
      <div className="mt-9 rounded-lg bg-[#eef5f9] px-5 py-8 text-center">
        <h4 className="text-lg font-bold" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>READY TO MAKE YOUR WORKDAY EASIER?</h4>
        <p className="mt-3 text-sm leading-6">Let's discuss what kind of support would work best for your business.</p>
        <span className="mt-5 inline-flex min-h-11 items-center justify-center rounded bg-[#17304A] px-6 text-xs font-bold tracking-wider text-white" aria-label="Book a Consultation, demonstration button">BOOK A CONSULTATION</span>
        <p className="mt-2 text-xs text-[#50677b]">Demonstration button</p>
      </div>
    </div>
    <div className="bg-[#e8f0f5] px-6 py-7 text-center text-xs leading-6 text-[#35516a] sm:px-10">
      <p className="font-bold">Northstar Business Consulting</p>
      <p>Practical support for growing businesses.</p>
      <p className="mt-3">You're receiving this email because you've previously connected with Northstar Business Consulting.</p>
      <p className="mt-3">Business Address: [Verified company mailing address]</p>
      <p>Email Preferences: [Unsubscribe link]</p>
    </div>
  </div>
}

export default function EmailNewsletterCaseStudyPage() {
  return <div className="min-h-screen bg-[#fffafc] font-body text-rose-950">
    <header className="border-b border-rose-100 bg-white/90"><nav aria-label="Project navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4"><a href="/#home" className="font-display text-lg font-bold italic text-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">Criste Joy</a><a href="/#administrative-support-samples" className="text-sm font-semibold text-rose-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">← All portfolio work</a></nav></header>
    <main>
      <section className="bg-gradient-to-b from-blush-50 to-[#fffafc] px-5 py-14 sm:py-20"><div className="mx-auto max-w-5xl"><p className="text-xs font-semibold uppercase tracking-[.22em] text-amber-700">Simulated Portfolio Project</p><h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold text-rose-900 sm:text-6xl">Email Newsletter — New Service Announcement</h1><p className="mt-4 text-sm font-medium text-rose-700">Marketing Virtual Assistant Work Sample</p><p className="mt-6 max-w-3xl text-base leading-8 text-rose-800">This sample demonstrates how I would structure and write a professional email newsletter to introduce a new business service and encourage interested readers to take action.</p></div></section>
      <div className="mx-auto max-w-5xl space-y-16 px-5 pb-20">
        <section aria-labelledby="overview-heading"><p className="text-xs font-semibold uppercase tracking-[.2em] text-amber-700">01 — Project Overview</p><h2 id="overview-heading" className="mt-2 font-display text-3xl font-semibold text-rose-900">A clear service introduction</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-rose-800">Northstar Business Consulting is a fictional business introducing Priority Business Support. The goal is to show small business owners, existing clients, past clients, and warm leads how routine administrative help could make their workday easier, then invite them to book a consultation.</p><div className="mt-6 grid gap-3 sm:grid-cols-3">{[['Business', 'Northstar Business Consulting (Fictional)'], ['My role', 'Administrative / Marketing Virtual Assistant'], ['Primary call to action', 'Book a Consultation']].map(([label,value])=><div key={label} className="rounded-xl border border-rose-100 bg-white p-4"><p className="text-xs font-semibold uppercase tracking-wide text-rose-700">{label}</p><p className="mt-2 text-sm leading-6 text-rose-900">{value}</p></div>)}</div></section>
        <section aria-labelledby="strategy-heading"><p className="text-xs font-semibold uppercase tracking-[.2em] text-amber-700">02 — Newsletter Strategy</p><h2 id="strategy-heading" className="mt-2 font-display text-3xl font-semibold text-rose-900">Message and next step</h2><dl className="mt-6 grid gap-4 sm:grid-cols-2">{[['Subject line', 'Less Admin Work. More Time for Your Business.'], ['Alternative subject line', 'Introducing Priority Business Support'], ['Preheader', 'Get help managing your inbox, scheduling, customer inquiries, and everyday administrative tasks.'], ['Main call to action', 'Book a Consultation']].map(([label,value])=><div key={label} className="rounded-xl border border-rose-100 bg-white p-5"><dt className="text-xs font-semibold uppercase tracking-wide text-rose-700">{label}</dt><dd className="mt-2 text-sm leading-6 text-rose-900">{value}</dd></div>)}</dl></section>
        <section aria-labelledby="preview-heading"><p className="text-xs font-semibold uppercase tracking-[.2em] text-amber-700">03 — Newsletter Preview</p><h2 id="preview-heading" className="mt-2 font-display text-3xl font-semibold text-rose-900">The complete email</h2><p className="mb-7 mt-3 max-w-3xl text-sm leading-7 text-rose-800">This preview shows the full newsletter as a reader would see it. The consultation button is a demonstration only.</p><NewsletterPreview /></section>
        <section aria-labelledby="decisions-heading"><p className="text-xs font-semibold uppercase tracking-[.2em] text-amber-700">04 — Design Decisions</p><h2 id="decisions-heading" className="mt-2 font-display text-3xl font-semibold text-rose-900">Designed for a quick read</h2><ul className="mt-5 max-w-3xl list-disc space-y-3 pl-5 text-sm leading-7 text-rose-800"><li>The subject line speaks to the reader's administrative workload.</li><li>The opening names a familiar business challenge before introducing the service.</li><li>Four short benefit descriptions make the offer easy to scan.</li><li>Three steps explain the process without making it feel complicated.</li><li>One consultation call to action gives readers a clear next step.</li></ul></section>
        <section aria-labelledby="conclusion-heading" className="rounded-2xl bg-rose-900 px-6 py-9 text-white sm:px-9"><p className="text-xs font-semibold uppercase tracking-[.2em] text-rose-100">05 — Project Conclusion</p><h2 id="conclusion-heading" className="mt-2 font-display text-3xl font-semibold">What this work demonstrates</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-rose-100">This simulated newsletter demonstrates my ability to organize email content, communicate a service's benefits, write concise marketing copy, and create a clear call to action.</p><p className="mt-5 border-t border-white/20 pt-5 text-xs leading-6 text-rose-100">This is a fictional portfolio project created for demonstration purposes. Northstar Business Consulting and the newsletter campaign are not real client work. The mailing address, unsubscribe link, and booking destination must be replaced before real use.</p><a href="/newsletter/priority-business-support.html" className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" target="_blank" rel="noopener noreferrer">View standalone email template ↗</a></section>
      </div>
    </main>
    <footer className="border-t border-rose-100 bg-white px-5 py-6 text-center text-sm text-rose-700"><a href="/#administrative-support-samples" className="underline underline-offset-4">Portfolio</a> · <a href="/#contact" className="underline underline-offset-4">Contact</a></footer>
  </div>
}
