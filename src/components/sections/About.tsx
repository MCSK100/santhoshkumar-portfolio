import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Stat = {
  label: string
  value: number
  suffix?: string
}

const stats: Stat[] = [
  { label: '4+ Years Experience', value: 4, suffix: '+' },
  { label: 'Enterprise LMS Developer', value: 1, suffix: '' },
  { label: 'React.js Specialist', value: 1, suffix: '' },
  { label: 'Multiple Production Applications', value: 6, suffix: '+' },
  { label: 'AI Product Integrations', value: 2, suffix: '+' },
  { label: 'Performance Optimization Expert', value: 95, suffix: '+' },
]

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-heading',
        { x: -100, opacity: 0, filter: 'blur(10px)' },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      )

      const reveals = section.querySelectorAll<HTMLElement>('.about-reveal')
      reveals.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0, filter: 'blur(10px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            delay: i * 0.05,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      })

      const counters = section.querySelectorAll<HTMLElement>('[data-count-target]')
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-count-target') || '0', 10)
        const suffix = counter.getAttribute('data-count-suffix') || ''
        if (!Number.isFinite(target)) return

        gsap.fromTo(
          counter,
          { innerText: '0' },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            onUpdate: () => {
              const raw = counter.innerText
              counter.innerText = raw + suffix
              // stop suffix duplication by re-rendering only when it changes:
            },
            scrollTrigger: { trigger: counter, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )

        // Fix for suffix duplication: use a one-time completion render
        gsap.set(counter, { innerText: '0' + suffix })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const bio =
    `I'm Santhosh Kumar, a Frontend Developer with 4+ years of professional experience building enterprise-grade web applications.\n\n` +
    `Currently working at BrainCert, where I contribute to Learning Management System (LMS) products using React.js, JavaScript, PHP, HTML, and CSS. ` +
    `My expertise includes building reusable UI components, performance optimization, responsive design, and creating seamless user experiences.\n\n` +
    `Beyond frontend development, I enjoy exploring AI-powered applications, mobile development with React Native, and creating innovative SaaS products that solve real-world problems.`

  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-crimson/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="section-header">
          <div className="section-header-line" />
          <span className="section-header-text">Who I Am</span>
        </div>

        <h2 className="about-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-10 leading-tight">
          <span className="text-gradient">Meet Santhosh</span> Kumar
        </h2>

        {/* Coding-themed micro-banner + language logos (text-based) */}
        {/* <div className="mb-10 about-reveal">
          <div className="glass-card rounded-2xl p-5 border border-white/[0.05]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-text-muted text-[10px] tracking-[0.15em] uppercase">
                  Frontend • LMS • Performance
                </span>
                <span className="font-mono text-[10px] px-3 py-1 rounded-lg border bg-white/[0.02] border-white/[0.05] text-text-muted">
                  {"<h1>"}
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {[
                  { label: 'Tamil', short: 'TA', accent: true },
                  { label: 'English', short: 'EN', accent: false },
                  { label: 'Japanese', short: 'JP', accent: false },
                ].map((l) => (
                  <span
                    key={l.label}
                    className={`font-mono text-[10px] px-3 py-1 rounded-lg border ${
                      l.accent
                        ? 'bg-accent-red/10 border-accent-red/30 text-accent-red'
                        : 'bg-white/[0.02] border-white/[0.05] text-text-muted'
                    }`}
                    aria-label={l.label}
                  >
                    {l.short}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-8 about-reveal">
            <div className="glass-card rounded-2xl p-8 border border-white/[0.05]">
              <div className="font-mono text-[9px] text-text-muted tracking-[0.2em] uppercase mb-4">Professional Summary</div>
              <p className="whitespace-pre-line text-text-secondary text-sm leading-relaxed">{bio}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="about-reveal project-strip p-0">
                  <div className="p-7">
                    <div className="font-mono text-[9px] text-text-muted tracking-[0.2em] uppercase mb-3">{s.label}</div>
                    <div className="flex items-end gap-3">
                      <span
                        className="ach-counter text-4xl sm:text-5xl font-bold text-white font-mono"
                        data-count-target={s.value}
                        data-count-suffix={s.suffix || ''}
                      >
                        0
                      </span>
                      {s.suffix ? <span className="text-accent-red text-2xl font-light">{s.suffix}</span> : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-6 about-reveal">
            <div className="project-strip">
              <div className="p-7">
                <div className="font-mono text-[9px] text-text-muted tracking-[0.2em] uppercase mb-4">Languages</div>
                <div className="space-y-4">
                  {[
                    { label: 'Tamil', value: 'Native', accent: true },
                    { label: 'English', value: 'Professional', accent: false },
                    { label: 'Japanese', value: 'Learning', accent: false },
                  ].map((l, idx) => (
                    <div key={idx} className="flex items-baseline justify-between border-b border-white/[0.04] pb-3">
                      <span className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase">{l.label}</span>
                      <span className={`font-mono text-[11px] ${l.accent ? 'text-accent-red' : 'text-text-secondary'}`}>{l.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-strip">
              <div className="p-7">
                <div className="font-mono text-[9px] text-text-muted tracking-[0.2em] uppercase mb-4">Signature Focus</div>
                <div className="flex flex-wrap gap-2">
                  {['Reusable UI', 'Performance', 'Responsive Design', 'AI Integrations'].map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
