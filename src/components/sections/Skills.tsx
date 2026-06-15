import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Skill = {
  name: string
  level: number
  group: 'Frontend' | 'Backend & Integration' | 'Tools'
}

const skillProgress: Skill[] = [
  { name: 'React.js', level: 92, group: 'Frontend' },
  { name: 'HTML5', level: 86, group: 'Frontend' },
  { name: 'CSS3', level: 84, group: 'Frontend' },
  { name: 'Tailwind CSS', level: 86, group: 'Frontend' },
  { name: 'HTML5', level: 86, group: 'Frontend' },
  { name: 'CSS3', level: 84, group: 'Frontend' },
  { name: 'Tailwind CSS', level: 86, group: 'Frontend' },
  { name: 'Bootstrap', level: 72, group: 'Frontend' },
  { name: 'jQuery', level: 55, group: 'Frontend' },
  { name: 'Responsive Design', level: 90, group: 'Frontend' },

  { name: 'Node.js', level: 68, group: 'Backend & Integration' },
  { name: 'PHP', level: 74, group: 'Backend & Integration' },
  { name: 'REST APIs', level: 76, group: 'Backend & Integration' },
  { name: 'AJAX', level: 70, group: 'Backend & Integration' },
  { name: 'Database Integration', level: 62, group: 'Backend & Integration' },

  { name: 'GitHub', level: 84, group: 'Tools' },
  { name: 'Browser DevTools', level: 92, group: 'Tools' },
  { name: 'Testing & Debugging', level: 78, group: 'Tools' },
  { name: 'Performance Optimization', level: 90, group: 'Tools' },
]

const grouped = {
  Frontend: skillProgress.filter((s) => s.group === 'Frontend'),
  'Backend & Integration': skillProgress.filter((s) => s.group === 'Backend & Integration'),
  Tools: skillProgress.filter((s) => s.group === 'Tools'),
}

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-heading',
        { y: 80, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )

      const cards = section.querySelectorAll<HTMLElement>('.skill-category')
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0, rotateX: 15 },
          {
            y: 0, opacity: 1, rotateX: 0, duration: 0.8, delay: i * 0.06, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        )
      })

      const bars = section.querySelectorAll<HTMLElement>('[data-skill-percent]')
      bars.forEach((bar) => {
        const percent = parseInt(bar.getAttribute('data-skill-percent') || '0', 10)
        const fill = bar.querySelector<HTMLElement>('.skill-bar-fill')
        if (!fill || !Number.isFinite(percent)) return

        gsap.fromTo(
          fill,
          { scaleX: 0 },
          {
            scaleX: percent / 100,
            duration: 1,
            ease: 'power2.out',
            transformOrigin: 'left center',
            scrollTrigger: { trigger: bar, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const categories = [
    { title: 'Frontend', key: 'Frontend' as const },
    { title: 'Backend & Integration', key: 'Backend & Integration' as const },
    { title: 'Tools', key: 'Tools' as const },
  ]

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-red/[0.04] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-crimson/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="section-header">
          <div className="section-header-line" />
          <span className="section-header-text">Tech Stack</span>
        </div>

        <h2 className="skills-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-20 leading-tight">
          Core
          <span className="block text-gradient">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div key={cat.key} className="skill-category project-strip group">
              <div className="corner tl" />
              <div className="corner tr" />
              <div className="corner bl" />
              <div className="corner br" />
              <div className="strip-scan-line" />
              <div className="p-7">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h3 className="text-white font-bold text-lg tracking-wider font-mono uppercase">
                    {cat.title}
                  </h3>
                  <span className="font-mono text-[10px] text-accent-red tracking-[0.15em] uppercase">
                    {grouped[cat.key].length} skills
                  </span>
                </div>

                <div className="space-y-5">
                  {grouped[cat.key].map((s) => (
                    <div
                      key={s.name}
                      className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-4 hover:border-accent-red/30 transition-colors"
                      data-cursor-hover
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[11px] text-text-secondary tracking-wide">{s.name}</span>
                        <span className="font-mono text-[11px] text-accent-red">{s.level}%</span>
                      </div>

                      <div className="h-[6px] rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full w-full origin-left skill-bar-fill"
                          data-skill-percent={s.level}
                          style={{
                            transform: 'scaleX(0)',
                            background: 'linear-gradient(90deg, rgba(255,26,26,0.9), rgba(255,51,51,0.35))',
                          }}
                        />
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="tech-chip" style={{ padding: '4px 10px', fontSize: '10px' }}>
                          {cat.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
