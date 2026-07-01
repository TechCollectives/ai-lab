import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  Hammer,
  Compass,
  Rocket,
  Lightbulb,
  Menu,
  ChevronDown,
} from 'lucide-react'

/**
 * Co-Create with AI — Landing Page
 * Single-file React component. Tailwind CSS + Framer Motion.
 *
 * CTA wiring:
 *   - Change PRIMARY_CTA_HREF to your booking / signup link.
 *   - Change SECONDARY_CTA_HREF if you want it to deep-link elsewhere.
 */
const PRIMARY_CTA_HREF = 'https://api.tiqc.nyc/widget/form/lzqlmArZfnYaw3wjD7di'
const SECONDARY_CTA_HREF = '#how-it-works'

const NAV = [
  { label: 'The shift', href: '#shift' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Who it’s for', href: '#who' },
  { label: 'FAQ', href: '#faq' },
]

// ——— Motion helpers ———
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: fadeUp.hidden, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } } }}
    >
      {children}
    </motion.div>
  )
}

// ——— Components ———
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-paper/80 backdrop-blur-md border-b border-ink/5">
      <div className="container-tight flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group" aria-label="Co-Create with AI home">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" aria-hidden />
          <span className="font-sans font-semibold text-lg tracking-[-0.01em] text-ink">Co-Create with AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href={PRIMARY_CTA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Join a Hands-On Session
            <ArrowRight className="w-4 h-4" aria-hidden />
          </a>
        </div>
        <button
          className="md:hidden p-2 -mr-2 rounded-lg hover:bg-ink/5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-ink/5 bg-paper">
          <div className="container-tight py-4 flex flex-col gap-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-ink-soft"
              >
                {n.label}
              </a>
            ))}
            <a
              href={PRIMARY_CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Join a Hands-On Session
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,#E3EEF6_0%,transparent_55%)]"
      />
      <div className="container-tight pt-20 sm:pt-28 pb-20 sm:pb-28">
        <Reveal>
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
            Hands-on working sessions with Ying
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display mt-6 text-[44px] sm:text-6xl lg:text-7xl leading-[1.05]">
            Learn and build with AI.
            <br />
            <span className="text-ink-muted">Turn your idea into something real.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-2xl text-lg sm:text-xl text-ink-soft leading-relaxed">
            A guided, practical session for self-starters who are curious about AI
            but slowed down by the tech. Bring one real problem. Leave with something built.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a href={PRIMARY_CTA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join a Hands-On Session
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
            <a href={SECONDARY_CTA_HREF} className="btn-secondary">
              See How It Works
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-sm text-ink-muted">
            {[
              'Not a passive course',
              'Not outsourcing',
              'Bring a real problem',
              'Leave with something built',
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" aria-hidden />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Problem() {
  const items = [
    'You have ideas but no time to untangle the tools.',
    'Courses pile up. Nothing ships.',
    'You suspect AI could help, you just don’t know where to start.',
    'You don’t want to hand it off. You want to understand it.',
  ]
  return (
    <section id="problem" className="py-24 sm:py-32">
      <div className="container-narrow">
        <Reveal>
          <span className="eyebrow">The problem</span>
          <h2 className="display mt-4 text-3xl sm:text-5xl leading-[1.1]">
            You’re capable. The technology is the bottleneck.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Most people don’t need more theory. They need someone in the room while they try it,
            a partner who can translate a real problem into a real next step.
          </p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <Reveal key={t} delay={0.05 * i}>
              <div className="card h-full">
                <p className="text-ink-soft">{t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Shift() {
  return (
    <section id="shift" className="py-24 sm:py-32 bg-white border-y border-ink/5">
      <div className="container-tight grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">The shift</span>
            <h2 className="display mt-4 text-3xl sm:text-5xl leading-[1.1]">
              From watching AI. To building with it.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.05}>
            <p className="text-lg text-ink-soft leading-relaxed">
              The people getting ahead aren’t the ones who know the most about AI.
              They’re the ones who sit down and use it as a thinking and building partner.
              It’s less about prompts. More about practice.
            </p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-ink text-paper p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-paper/60">Before</p>
                <p className="mt-3 text-paper/90">
                  Reading about AI. Saving tutorials. Waiting to feel ready.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl bg-accent-soft border border-accent/20 p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-accent">After</p>
                <p className="mt-3 text-ink-soft">
                  Opening your laptop with one real problem, and building a working draft by the end of the session.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatThisIs() {
  const pillars = [
    {
      icon: Hammer,
      title: 'Hands-on, not passive',
      body: 'You do the work in the room, with guidance. Understanding beats watching.',
    },
    {
      icon: Compass,
      title: 'Guided, not solo',
      body: 'A real partner at your side when you get stuck, the part most courses skip.',
    },
    {
      icon: Sparkles,
      title: 'Real problem, real output',
      body: 'You bring one thing you actually need. You leave with a usable first version.',
    },
  ]
  return (
    <section className="py-24 sm:py-32">
      <div className="container-tight">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">What this is</span>
            <h2 className="display mt-4 text-3xl sm:text-5xl leading-[1.1]">
              A working session. Not a webinar.
            </h2>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              Think of it like a studio day with a thoughtful partner: focused, practical, and calm.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <div className="card h-full">
                <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                  <p.icon className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-sans font-semibold text-xl text-ink">{p.title}</h3>
                <p className="mt-2 text-ink-muted leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Bring one real problem',
      body: 'A stuck workflow, a messy idea, a tool you wish existed. Specific beats grand.',
    },
    {
      n: '02',
      title: 'We shape it together',
      body: 'We frame the problem clearly, pick the right AI approach, and sketch the first move.',
    },
    {
      n: '03',
      title: 'You build it, live',
      body: 'You drive. I guide. We iterate in the session until it works for you.',
    },
    {
      n: '04',
      title: 'Leave with something usable',
      body: 'A working draft, a repeatable prompt system, or a small tool, yours to keep using.',
    },
  ]
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white border-y border-ink/5">
      <div className="container-tight">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="display mt-4 text-3xl sm:text-5xl leading-[1.1]">
              Four steps. One real outcome.
            </h2>
          </div>
        </Reveal>
        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.05 * i}>
              <li className="card h-full">
                <span className="font-sans text-ink-muted text-sm font-medium">{s.n}</span>
                <h3 className="mt-3 font-sans font-semibold text-xl leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-ink-muted leading-relaxed">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a href={PRIMARY_CTA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join a Hands-On Session
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
            <span className="text-sm text-ink-muted">Small groups. Real builds. Your pace.</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Outcomes() {
  const outcomes = [
    {
      icon: Lightbulb,
      title: 'Clarity on where AI actually helps you',
      body: 'Stop guessing. You leave knowing which parts of your work AI should touch.',
    },
    {
      icon: Rocket,
      title: 'A working first version of your idea',
      body: 'Draft, workflow, assistant, or tool, something you can use on Monday.',
    },
    {
      icon: Sparkles,
      title: 'A way of thinking you can reuse',
      body: 'The real deliverable: a practice you can apply to the next problem, and the next.',
    },
  ]
  return (
    <section id="outcomes" className="py-24 sm:py-32">
      <div className="container-tight">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">What you walk away with</span>
            <h2 className="display mt-4 text-3xl sm:text-5xl leading-[1.1]">
              Not notes. Something you built.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {outcomes.map((o, i) => (
            <Reveal key={o.title} delay={0.05 * i}>
              <div className="card h-full">
                <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                  <o.icon className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-sans font-semibold text-xl text-ink">{o.title}</h3>
                <p className="mt-2 text-ink-muted leading-relaxed">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Proof() {
  const examples = [
    {
      label: 'MiAction competitor analysis GPT',
      caption: 'A reusable GPT that analyzes competitor websites and returns positioning, strengths, and strategic differentiators.',
      image: '/examples/competitor-analysis.png',
      alt: 'MiAction competitor analysis GPT landing interface',
    },
    {
      label: 'Launch nonprofit landing page draft',
      caption: 'A mission-first page draft with a stronger hero message, focused CTA hierarchy, and clearer conversion flow.',
      image: '/examples/nonprofit-landing-page.png',
      alt: 'Draft landing page for LAUNCH nonprofit with hero and donation call to action',
    },
    {
      label: 'Freight Forward WhatsApp prototype',
      caption: 'An interactive ops prototype showing the full customer thread from intake to signature to delivery updates.',
      image: '/examples/whatsapp-prototype.png',
      alt: 'Freight Forward WhatsApp-native logistics prototype interface',
    },
  ]
  return (
    <section className="py-24 sm:py-32 bg-white border-y border-ink/5">
      <div className="container-tight">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">Example outcomes</span>
            <h2 className="display mt-4 text-3xl sm:text-5xl leading-[1.1]">
              Real things, built in the room.
            </h2>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              A few of the first drafts that came out of working sessions. Plain, honest outputs,
              not polished demos.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {examples.map((e, i) => (
            <Reveal key={e.label} delay={0.05 * i}>
              <figure className="card h-full">
                <div className="overflow-hidden rounded-xl border border-brand-cool-gray/60 bg-paper">
                  <img
                    src={e.image}
                    alt={e.alt}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover object-top"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-medium text-ink">{e.label}</p>
                  <p className="mt-1 text-sm text-ink-muted leading-relaxed">{e.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhoItsFor() {
  const forYou = [
    'Entrepreneurs and founders with ideas queued up',
    'Small business owners who wear every hat',
    'Students and self-directed learners who want to actually build',
    'Operators who’d rather understand AI than outsource it',
  ]
  const notForYou = [
    'You want someone to build it for you, hands off',
    'You’re looking for a passive video course',
    'You want generic AI theory, not a working output',
  ]
  return (
    <section id="who" className="py-24 sm:py-32">
      <div className="container-tight grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="card h-full">
            <span className="eyebrow">Who it’s for</span>
            <h3 className="display mt-4 text-2xl sm:text-3xl text-ink">A good fit if…</h3>
            <ul className="mt-6 space-y-3">
              {forYou.map((t) => (
                <li key={t} className="flex gap-3 text-ink-soft">
                  <Check className="w-5 h-5 shrink-0 text-accent mt-0.5" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="card h-full">
            <span className="eyebrow">Not for</span>
            <h3 className="display mt-4 text-2xl sm:text-3xl text-ink">Probably not a fit if…</h3>
            <ul className="mt-6 space-y-3">
              {notForYou.map((t) => (
                <li key={t} className="flex gap-3 text-ink-muted">
                  <X className="w-5 h-5 shrink-0 text-ink-muted mt-0.5" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Founder() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-y border-ink/5">
      <div className="container-tight grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="overflow-hidden aspect-square rounded-2xl border border-accent/20 bg-accent-soft">
              <img
                src="/examples/ying-portrait.png"
                alt="Ying Zhou portrait"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal delay={0.05}>
            <span className="eyebrow">About Ying</span>
            <h2 className="display mt-4 text-3xl sm:text-5xl leading-[1.1]">
              I run these sessions because I wanted this to exist.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-lg text-ink-soft leading-relaxed">
              <p>
                I work with people who are smart, resourceful, and busy, and who don’t want to
                wait for the perfect course before doing the thing. My role is simple: help you
                use AI as a thinking and building partner, on a real problem, today.
              </p>
              <p>
                The sessions are calm, focused, and practical. No hype. No jargon for its own sake.
                You try, I guide, we iterate until it works for you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8">
              <a href={PRIMARY_CTA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Join a Hands-On Session
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    {
      q: 'Do I need to be technical?',
      a: 'No. These sessions are built for people who are not very technical. You’ll do the clicking and the thinking; I’ll handle the translation.',
    },
    {
      q: 'What do I need to bring?',
      a: 'One real problem or idea you care about, the more specific, the better. A laptop, and a willingness to try.',
    },
    {
      q: 'Is this a course?',
      a: 'No. It’s a working session. You’ll leave with a real output, not a folder of notes.',
    },
    {
      q: 'Which AI tools will we use?',
      a: 'Whatever fits your problem, usually general-purpose AI tools you already have access to. The point is your problem, not the tool.',
    },
    {
      q: 'Is this one-on-one or a group?',
      a: 'Sessions are kept small so everyone gets real attention and leaves with something they built.',
    },
    {
      q: 'What happens after the session?',
      a: 'You keep what you built. You’ll also have a clearer way of thinking you can apply to the next problem on your list.',
    },
  ]
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container-narrow">
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <h2 className="display mt-4 text-3xl sm:text-5xl leading-[1.1]">Questions, answered.</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-ink/10 border-t border-b border-ink/10">
          {items.map((it, i) => (
            <FAQItem key={it.q} q={it.q} a={it.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div>
      <button
        className="w-full text-left py-5 flex items-start gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-lg sm:text-xl flex-1 text-ink">{q}</span>
        <ChevronDown
          className={`w-5 h-5 mt-1 shrink-0 text-ink-muted transition-transform ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden
        />
      </button>
      {open && (
        <div className="pb-6 text-ink-muted leading-relaxed">
          <p>{a}</p>
        </div>
      )}
    </div>
  )
}

function FinalCTA() {
  return (
    <section id="signup" className="py-24 sm:py-32">
      <div className="container-tight">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink text-paper p-10 sm:p-16">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
            />
            <span className="eyebrow text-paper/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
              Ready when you are
            </span>
            <h2 className="display text-paper mt-5 text-3xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
              Bring one real problem. Leave with something built.
            </h2>
            <p className="mt-6 text-brand-soft-blue max-w-2xl text-lg leading-relaxed">
              If you’ve been waiting for the moment AI starts feeling useful in your work,
              this is how it starts. One session. One real thing.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a href={PRIMARY_CTA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Join a Hands-On Session
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
              <a
                href={SECONDARY_CTA_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-soft-blue/60 text-brand-soft-blue px-6 py-3.5 text-sm font-sans font-medium hover:bg-white/10 transition"
              >
                See How It Works
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="container-tight py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" aria-hidden />
          <span className="font-sans font-semibold text-ink">Co-Create with AI</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-ink-muted" aria-label="Footer">
          <a href="#how-it-works" className="hover:text-ink">How it works</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
          <a href={PRIMARY_CTA_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-ink">Join a session</a>
        </nav>
        <p className="text-xs text-ink-muted">
          © {new Date().getFullYear()} Co-Create with AI. Built with care by Ying.
        </p>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-paper text-ink-soft">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Shift />
        <WhatThisIs />
        <HowItWorks />
        <Outcomes />
        <Proof />
        <WhoItsFor />
        <Founder />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
