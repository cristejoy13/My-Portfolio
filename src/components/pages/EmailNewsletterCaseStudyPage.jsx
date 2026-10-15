function NewsletterPreview() {
  return <div className="mx-auto max-w-[600px] overflow-hidden rounded-lg border border-slate-200 bg-white text-[#17304A] shadow-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
    <div className="bg-[#17304A] px-6 py-7 text-center text-sm font-bold tracking-[.18em] text-white sm:px-10">NORTHSTAR BUSINESS CONSULTING</div>
    <div className="px-6 py-8 text-sm leading-7 sm:px-10">
      <p>Hi there,</p>
      <h3 className="mt-6 text-2xl font-bold leading-tight">Introducing Priority Business Support</h3>
      <p className="mt-4">We know how much care you put into your business. When emails, appointments, and customer questions all need your attention, the little tasks can add up quickly.</p>
      <p className="mt-4">That is where Priority Business Support comes in. We would love to get to know how your business works and lend a hand with the everyday details, so you have more time for what matters most to you.</p>
      <p className="mt-4">Depending on what you need, we can help with:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Keeping your inbox organized</li>
        <li>Coordinating meetings and schedule changes</li>
        <li>Responding to routine customer inquiries</li>
        <li>Tracking conversations that need a follow up</li>
      </ul>
      <p className="mt-4">You know your business best. Tell us what has been keeping you busy, and we will listen, talk through your priorities, and find the support that feels right for you.</p>
      <p className="mt-4">We would love to hear what you are working on. Whenever you are ready, let's talk.</p>
      <div className="mt-6 rounded-lg bg-[#eef5f9] px-5 py-6 text-center">
        <span className="inline-flex min-h-11 items-center justify-center rounded bg-[#17304A] px-6 text-xs font-bold tracking-wider text-white" aria-label="Book a Consultation, demonstration button">BOOK A CONSULTATION</span>
        <p className="mt-2 text-xs text-[#50677b]">Demonstration button</p>
      </div>
      <p className="mt-7">Warmly,<br />The Northstar Business Consulting Team</p>
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
  return (
    <div className="min-h-screen bg-[#fffafc] font-body text-rose-950">
      <header className="border-b border-rose-100 bg-white/90">
        <nav aria-label="Project navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <a href="/#home" className="font-display text-lg font-bold italic text-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">Criste Joy</a>
          <a href="/#administrative-support-samples" className="text-sm font-semibold text-rose-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600">← All portfolio work</a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-16">
        <section className="border-b border-rose-100 pb-8 pt-10 sm:pt-14">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-amber-700">Marketing Virtual Assistant Work Sample</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-rose-900 sm:text-5xl">Email Newsletter</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-rose-800">A service announcement I wrote and structured for Northstar Business Consulting, a fictional business.</p>
          <p className="mt-2 text-xs leading-5 text-rose-700">Simulated portfolio project. This newsletter was not sent as a real campaign.</p>
        </section>

        <section aria-labelledby="newsletter-heading" className="pt-9">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="newsletter-heading" className="font-display text-2xl font-semibold text-rose-900 sm:text-3xl">The newsletter</h2>
              <p className="mt-1 text-sm text-rose-800">Priority Business Support service announcement</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,600px)_minmax(220px,1fr)] lg:items-start lg:gap-10">
            <NewsletterPreview />
            <aside aria-labelledby="work-heading" className="border-t border-rose-100 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-1">
              <h3 id="work-heading" className="font-display text-xl font-semibold text-rose-900">My work on this sample</h3>
              <p className="mt-3 text-sm leading-6 text-rose-800">I wrote a direct opening, described the support in a short list, and gave readers one clear way to ask about the service.</p>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-rose-700">Audience</dt>
                  <dd className="mt-1 leading-6 text-rose-900">Small business owners and warm leads</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-rose-700">Subject line</dt>
                  <dd className="mt-1 leading-6 text-rose-900">Less Admin Work. More Time for Your Business.</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-rose-700">Preheader</dt>
                  <dd className="mt-1 leading-6 text-rose-900">Get help managing your inbox, scheduling, customer inquiries, and everyday administrative tasks.</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-rose-700">Next step</dt>
                  <dd className="mt-1 leading-6 text-rose-900">Book a Consultation</dd>
                </div>
              </dl>
              <p className="mt-6 border-t border-rose-100 pt-4 text-xs leading-5 text-rose-700">The consultation button, mailing address, and unsubscribe text in the preview are demonstration placeholders.</p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-100 bg-white px-5 py-6 text-center text-sm text-rose-700">
        <a href="/#administrative-support-samples" className="underline underline-offset-4">Portfolio</a> · <a href="/#contact" className="underline underline-offset-4">Contact</a>
      </footer>
    </div>
  )
}
