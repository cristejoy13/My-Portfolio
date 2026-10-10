import { useState } from 'react'

const studies = {
  cashbelle: {
    title: 'CashBelle',
    eyebrow: 'Personal finance · independent project',
    intro: 'A clearer picture of money, in one place.',
    summary: 'CashBelle helps a person record income and expenses and see how those choices affect cash, investments, debts, and net worth. I built it first for my own use and designed it so others can create an account with their email address.',
    live: 'https://cashbelle.vercel.app/',
    accent: 'emerald',
    problem: 'Money information can end up scattered across notes, accounts, and mental calculations. I wanted a personal view that connects everyday transactions with savings goals, investments, money lent or borrowed, and an overall net-worth picture.',
    audience: 'People who want to keep track of their own finances in one app. I currently use CashBelle myself; it is designed to allow other people to sign up with email. I have not documented feedback from outside users.',
    role: 'I conceived the app, decided what it should help users track, planned its pages and financial summaries, chose the forms, navigation, and visual direction, and reviewed the visible results. I tested interactions and mobile layouts, requested changes, approved updates, and deployed it.',
    ai: 'AI generated and modified the application code from my instructions. I directed the implementation and checked the app through its interface; I do not independently write or review the source code.',
    features: [
      { title: 'Income & expenses', text: 'Record transactions, categorize spending, review a transaction list, and compare money coming in and going out.' },
      { title: 'Dashboard & goals', text: 'See cash, spending by category, monthly and yearly summaries, and progress toward a savings goal.' },
      { title: 'Investments', text: 'Keep investment records and view an investment summary and charts alongside the rest of the financial picture.' },
      { title: 'Debts & money lent', text: 'Use the wallet to keep track of money owed, money lent, and repayments.' },
      { title: 'Personal account', text: 'Sign up or sign in with email. The app is designed to save each account’s records under its own user ID and keep a local device cache.' },
    ],
    screenshots: [
      { src: '/portfolio/apps/cashbelle-dashboard-light.webp', title: 'Dashboard', alt: 'CashBelle dashboard showing money summaries and goals' },
      { src: '/portfolio/apps/cashbelle-transactions-light.webp', title: 'Transactions', alt: 'CashBelle transaction list and controls' },
      { src: '/portfolio/apps/cashbelle-investments-light.webp', title: 'Investments', alt: 'CashBelle investments screen and charts' },
      { src: '/portfolio/apps/cashbelle-wallet-light.webp', title: 'Wallet & debts', alt: 'CashBelle wallet for money lent and owed' },
    ],
    observed: 'In a read-only review of the signed-in live app, the dashboard displayed income, expenses, net worth, spending categories, and savings progress. The transactions screen showed records and entry controls; the wallet showed loan and repayment controls. The investments screen showed portfolio, capital, and profit-or-loss summaries with individual investment cards and charts.',
    reported: 'I report that the selected features work. I have tested forms, calculations, interactions, and mobile layouts and checked requested fixes. The specific calculation examples, device and browser list, and before-and-after bug examples are still being documented.',
    unverified: 'This review did not create or change financial records, recalculate totals by hand, test a second account, or verify recovery and synchronization across devices.',
    limitation: 'The account separation, recovery, and share-link behavior still need a documented test with fictional data before I can describe them as verified for other users. Future screenshots could use a demo account to avoid showing personal financial entries.',
    lesson: 'A useful finance dashboard needs more than a clear layout: sample transactions, totals, and recovery steps should be checked and explained before relying on it with other people’s data.',
    next: 'Create a fictional-data demo account, check core totals against hand-calculated examples, test a second account and recovery, and capture privacy-safe screenshots.',
  },
  'goddess-plan': {
    title: 'Goddess Plan',
    eyebrow: 'Wellness & daily planning · independent project',
    intro: 'One welcoming space for plans, progress, and reflection.',
    summary: 'Goddess Plan brings routines, workout planning, meals, goals, and personal notes together. I designed it for people who want to build healthier habits, plan their days, and have a private-feeling place to reflect without judgment.',
    live: 'https://goddess-plan.vercel.app/',
    accent: 'purple',
    problem: 'Daily plans, workouts, food notes, and life goals are often kept in different places. I wanted a flexible home for practical checklists and progress tracking, with room for reflection as well.',
    audience: 'People working toward weight or activity goals, planning routines, and following goals in other parts of life. The diary is intended to feel welcoming; that is a design intention, not a privacy or medical guarantee.',
    role: 'I conceived the idea, planned the features and information, designed the dashboard, page structure, layouts, navigation, and visual direction, and instructed AI to implement them. I reviewed the app’s visible behavior, tested interactions and mobile layouts, requested fixes, approved updates, and deployed it.',
    ai: 'AI generated and modified the application code from my instructions. I directed the implementation and checked the visible results; I do not independently write or review the source code.',
    features: [
      { title: 'Daily routines', text: 'Use a daily dashboard and checklists to plan tasks and build a more structured day.' },
      { title: 'Workout planning', text: 'Review a weekly plan with workout and recovery days. The live schedule was updated in October 2026.' },
      { title: 'Meals & calories', text: 'Log meals and view calorie tracking and planning screens.' },
      { title: 'Goals & progress', text: 'Keep life goals visible and review progress alongside day-to-day routines.' },
      { title: 'Diary & notes', text: 'Write reflections and personal notes in the same planning space.' },
    ],
    screenshots: [
      { src: '/portfolio/apps/goddess-home-light.webp', title: 'Daily home', alt: 'Goddess Plan daily dashboard and routine cards' },
      { src: '/portfolio/apps/goddess-workout-light.webp', title: 'Workout planning', alt: 'Goddess Plan workout planning screen from an earlier version' },
      { src: '/portfolio/apps/goddess-meal-log-light.webp', title: 'Meal log', alt: 'Goddess Plan food and calorie logging screen' },
    ],
    observed: 'In a read-only review of the updated live app, I saw daily plan cards, checklist controls, a revised weekly workout schedule, meal and calorie displays, and goal progress screens. I did not change personal entries.',
    reported: 'I report that the selected features work and that I have tested forms, calculations, interactions, and mobile layouts. The specific calculation examples, devices, browsers, and bug-fix examples are still being documented.',
    unverified: 'This review did not recalculate nutrition figures, test data recovery or multi-device sync, or verify privacy of diary entries. The workout screenshot below predates the latest schedule update.',
    limitation: 'Most entries are designed to live in this browser unless a sync option is used. Recovery and sync have not yet been demonstrated for this case study; clearing browser data could put unsynced entries at risk.',
    lesson: 'A calm interface can make a complex routine easier to follow, but personal tracking also needs clear explanations of where entries are saved and how they can be recovered.',
    next: 'Test saving and recovery with fictional entries, verify selected calculations with hand-checked examples, and replace the older workout screenshot with one from the current version.',
  },
}

const linkClass = 'inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2'

export default function CaseStudyPage({ slug }) {
  const study = studies[slug]
  const [activeImage, setActiveImage] = useState(null)
  if (!study) return null
  const isCash = study.accent === 'emerald'
  const wash = isCash ? 'from-emerald-50 via-white to-rose-50' : 'from-violet-50 via-white to-rose-50'
  const badge = isCash ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-violet-200 bg-violet-50 text-violet-900'

  return (
    <div className="min-h-screen bg-[#fffafc] font-body text-rose-950">
      <header className="sticky top-0 z-30 border-b border-rose-100 bg-white/95 backdrop-blur">
        <nav aria-label="Case study navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <a href="/#web-applications" className="font-display text-lg font-bold italic text-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">Criste Joy</a>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <a href="/#web-applications" className="text-sm font-medium text-rose-800 underline-offset-4 hover:underline">← All projects</a>
            <a href={study.live} target="_blank" rel="noopener noreferrer" className={`${linkClass} bg-rose-700 text-white hover:bg-rose-800`}>Open App ↗</a>
          </div>
        </nav>
      </header>

      <main>
        <section className={`bg-gradient-to-br ${wash} border-b border-rose-100`}>
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1fr_.85fr] md:items-center md:py-20">
            <div>
              <span className={`inline-block rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[.12em] ${badge}`}>{study.eyebrow}</span>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[.25em] text-rose-600">Case study · AI-assisted development</p>
              <h1 className="mt-3 font-display text-5xl font-bold italic leading-tight text-rose-900 sm:text-6xl">{study.title}</h1>
              <h2 className="mt-5 font-display text-2xl font-semibold text-rose-800 sm:text-3xl">{study.intro}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-rose-900">{study.summary}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#story" className={`${linkClass} border border-rose-300 bg-white text-rose-800 hover:bg-rose-50`}>Read the case study ↓</a>
                <a href={study.live} target="_blank" rel="noopener noreferrer" className={`${linkClass} bg-rose-700 text-white hover:bg-rose-800`}>Open App ↗</a>
              </div>
            </div>
            <figure className="overflow-hidden rounded-[2rem] border border-rose-100 bg-white p-3 shadow-xl shadow-rose-100/70">
              <img src={study.screenshots[0].src} alt={study.screenshots[0].alt} className="aspect-[4/3] w-full rounded-3xl object-contain" />
              <figcaption className="px-3 pb-2 pt-3 text-xs leading-relaxed text-rose-700">{isCash ? 'CashBelle dashboard from my personal use.' : 'Goddess Plan dashboard from an earlier version of the app.'}</figcaption>
            </figure>
          </div>
        </section>

        <div id="story" className="mx-auto max-w-6xl space-y-16 px-5 py-16">
          <section className="grid gap-5 md:grid-cols-2" aria-labelledby="why-title">
            <h2 id="why-title" className="sr-only">The problem and intended user</h2>
            <StoryCard label="01 / The problem" title="Why I made it" text={study.problem} />
            <StoryCard label="02 / Intended user" title="Who it is for" text={study.audience} />
          </section>

          <section aria-labelledby="role-title">
            <SectionHeading kicker="How it was made" title="My direction, AI implementation" id="role-title" />
            <div className="grid gap-5 md:grid-cols-2">
              <StoryCard label="My contribution" title="Plan · design · test · deploy" text={study.role} />
              <StoryCard label="AI's role" title="Code generation" text={study.ai} />
            </div>
            <p className="mt-4 text-sm font-semibold text-rose-700">Independent personal project using AI-assisted development.</p>
          </section>

          <section aria-labelledby="features-title">
            <SectionHeading kicker="The experience" title="Selected features" id="features-title" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.features.map((feature, index) => <article key={feature.title} className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm"><span className="text-xs font-semibold tracking-widest text-rose-600">0{index + 1}</span><h3 className="mt-3 text-xl font-semibold text-rose-900">{feature.title}</h3><p className="mt-3 text-sm leading-7 text-rose-800">{feature.text}</p></article>)}
            </div>
          </section>

          <section aria-labelledby="screens-title">
            <SectionHeading kicker="Screens from the app" title="A closer look" id="screens-title" />
            <p className="mb-5 max-w-3xl text-sm leading-7 text-rose-800">{isCash ? 'Screenshots of the dashboard, transactions, investments, and wallet from my use of CashBelle.' : 'These screenshots document an earlier build. The live weekly workout schedule has since been updated.'}</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {study.screenshots.map((shot, index) => <button key={shot.src} type="button" onClick={() => setActiveImage(index)} aria-label={`Enlarge ${shot.title} screenshot`} className="overflow-hidden rounded-3xl border border-rose-100 bg-white p-3 text-left shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"><img src={shot.src} alt={shot.alt} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-contain" /><span className="block px-3 py-2 font-display text-lg font-semibold text-rose-800">{shot.title} ↗</span></button>)}
            </div>
          </section>

          <section aria-labelledby="tests-title">
            <SectionHeading kicker="Evidence and scope" title="What has been tested" id="tests-title" />
            <div className="grid gap-4 lg:grid-cols-3">
              <EvidenceCard label="Observed in this review" text={study.observed} />
              <EvidenceCard label="Reported by me" text={study.reported} />
              <EvidenceCard label="Still to verify" text={study.unverified} />
            </div>
          </section>

          <section aria-labelledby="next-title">
            <SectionHeading kicker="What comes next" title="Limits, lesson, and next step" id="next-title" />
            <div className="grid gap-4 lg:grid-cols-3">
              <EvidenceCard label="Current limitation" text={study.limitation} />
              <EvidenceCard label="Lesson from the process" text={study.lesson} />
              <EvidenceCard label="Next improvement" text={study.next} />
            </div>
          </section>

          <section className="rounded-[2rem] bg-rose-900 px-6 py-10 text-white sm:px-10" aria-label="Explore more">
            <h2 className="font-display text-3xl font-semibold italic">Explore the project</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-rose-100">See the live app or return to my other projects.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a href={study.live} target="_blank" rel="noopener noreferrer" className={`${linkClass} bg-white text-rose-900 hover:bg-rose-50`}>Open App ↗</a><a href="/#web-applications" className={`${linkClass} border border-white/70 text-white hover:bg-white/10`}>All projects</a></div>
          </section>
        </div>
      </main>

      <footer className="border-t border-rose-100 bg-white px-5 py-6 text-center text-xs text-rose-700">© Criste Joy Calosor · Independent personal project using AI-assisted development</footer>
      {activeImage !== null && <div role="dialog" aria-modal="true" aria-label={`${study.screenshots[activeImage].title} screenshot`} className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={() => setActiveImage(null)}><div className="relative max-h-full max-w-5xl" onClick={event => event.stopPropagation()}><button type="button" onClick={() => setActiveImage(null)} aria-label="Close screenshot" className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-rose-900">✕</button><img src={study.screenshots[activeImage].src} alt={study.screenshots[activeImage].alt} className="max-h-[85vh] w-auto rounded-xl object-contain" /></div></div>}
    </div>
  )
}

function SectionHeading({ kicker, title, id }) { return <div className="mb-6"><p className="text-xs font-semibold uppercase tracking-[.22em] text-rose-600">{kicker}</p><h2 id={id} className="mt-2 font-display text-3xl font-semibold italic text-rose-900 sm:text-4xl">{title}</h2></div> }
function StoryCard({ label, title, text }) { return <article className="rounded-3xl border border-rose-100 bg-white p-7 shadow-sm"><p className="text-xs font-semibold uppercase tracking-[.18em] text-rose-600">{label}</p><h3 className="mt-3 text-2xl font-semibold text-rose-900">{title}</h3><p className="mt-4 text-sm leading-8 text-rose-800">{text}</p></article> }
function EvidenceCard({ label, text }) { return <article className="rounded-3xl border border-rose-100 bg-rose-50/60 p-6"><h3 className="text-lg font-semibold text-rose-900">{label}</h3><p className="mt-3 text-sm leading-7 text-rose-800">{text}</p></article> }
