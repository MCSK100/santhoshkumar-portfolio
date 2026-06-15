import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Trophy, Users, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  { icon: Trophy, label: '4+ Years Professional Experience', checked: true, color: '#ff1a1a' },
  { icon: Code, label: 'Enterprise LMS Development', checked: true, color: '#ff3333' },
  { icon: Users, label: 'React.js Production Experience', checked: true, color: '#8b0000' },
  { icon: Zap, label: 'AI Product Integration Experience', checked: true, color: '#cc0000' },
  { icon: Code, label: 'Performance Optimization Specialist', checked: true, color: '#ff1a1a' },
  { icon: Trophy, label: 'Modern UI/UX Development', checked: true, color: '#ff3333' },
]

export const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.ach-heading',
        { y: 80, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )

      const items = section.querySelectorAll('.ach-item')
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 60, opacity: 0, scale: 0.9 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.8, delay: i * 0.1, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        )
      })

      // Counters removed; achievements now rendered as verified cards
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-red/[0.04] rounded-full blur-[250px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="section-header justify-center">
          <div className="section-header-line" />
          <span className="section-header-text">Mission Stats</span>
          <div className="section-header-line" />
        </div>

        <div className="mb-16 text-center">
          <h2 className="ach-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Impact <span className="text-gradient">Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((ach, i) => {
            const Icon = ach.icon
            return (
              <div key={i} className="ach-item project-strip group">
                <div className="corner tl" />
                <div className="corner tr" />
                <div className="corner bl" />
                <div className="corner br" />
                <div className="strip-scan-line" />

                <div className="p-8 text-center">
                  <div
                    className="inline-flex p-4 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${ach.color}15`, border: `1px solid ${ach.color}30` }}
                  >
                    <Icon size={24} style={{ color: ach.color }} />
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-accent-red text-3xl font-bold count-pulse">✓</span>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-muted">Verified</span>
                  </div>

                  <p className="font-mono text-text-muted text-[10px] tracking-[0.12em] uppercase">{ach.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
