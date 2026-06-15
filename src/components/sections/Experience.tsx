import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    company: 'BrainCert',
    role: 'Frontend Developer',
    period: 'March 2022 – Present',
    location: 'Coimbatore, Tamil Nadu, India',
    description:
      'Developed and maintained responsive LMS applications. Built reusable React.js components for enterprise products, implemented client-side validations, and optimized application performance. Collaborated with backend teams for frontend-backend integration. Enhanced LMS modules using React.js, JavaScript, PHP, HTML, and CSS, delivering a cleaner UI architecture and improved user experience.',
    skills: ['React.js', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Performance Optimization'],
    current: true,
    caseId: 'CASE-2022-A',
    clearance: 'ACTIVE',
  },
  {
    company: 'Focus Edumatics Pvt Ltd',
    role: 'Online Tutor',
    period: 'Oct 2020 – Nov 2021',
    location: 'Remote',
    description:
      'Delivered online tutoring and student support remotely. Assisted with proctoring and mathematical modeling activities, and provided educational guidance to improve learning outcomes.',
    skills: ['Proctoring', 'Mathematical Modeling', 'Student Support'],
    current: false,
    caseId: 'CASE-2020-B',
    clearance: 'CLOSED',
  },
]

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-heading',
        { y: 80, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )

      const items = timelineRef.current?.querySelectorAll('.timeline-entry')
      if (items) {
        items.forEach((item, i) => {
          gsap.fromTo(item,
            { x: i % 2 === 0 ? -60 : 60, opacity: 0, filter: 'blur(5px)' },
            {
              x: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out',
              scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' }
            }
          )
        })
      }

      gsap.fromTo('.timeline-line-fill',
        { scaleY: 0 },
        {
          scaleY: 1, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', end: 'bottom 20%', scrub: 1 }
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-red/[0.04] rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="section-header">
          <div className="section-header-line" />
          <span className="section-header-text">Dossier History</span>
        </div>

        <h2 className="exp-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-20 leading-tight">
          Professional<br />
          <span className="text-gradient">Journey</span>
        </h2>

        <div ref={timelineRef} className="relative">
          {/* Glowing line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05]">
            <div className="timeline-line-fill w-full h-full bg-gradient-to-b from-accent-red via-accent-crimson to-transparent origin-top" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <div key={index} className={`timeline-entry relative flex flex-col md:flex-row gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 top-0">
                  <div className={`w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-accent-red border-accent-red glow-red' : 'bg-bg-primary border-accent-crimson'}`} />
                  {exp.current && <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent-red animate-ping opacity-30" />}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="project-strip">
                    <div className="corner tl" />
                    <div className="corner tr" />
                    <div className="corner bl" />
                    <div className="corner br" />
                    <div className="strip-scan-line" />

                    <div className="p-8">
                      {/* Header */}
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="font-mono text-[10px] text-accent-red tracking-wider">{exp.caseId}</span>
                        <span className="font-mono text-[10px] text-text-muted">|</span>
                        <span className={`font-mono text-[9px] tracking-wider px-2 py-0.5 rounded ${
                          exp.current ? 'bg-accent-red/20 text-accent-red' : 'bg-white/[0.03] text-text-muted'
                        }`}>
                          {exp.clearance}
                        </span>
                      </div>

                      {/* Company */}
                      <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-accent-red' : 'bg-accent-crimson'}`} />
                        <span className="font-mono text-sm font-medium tracking-wider uppercase text-white">{exp.company}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-serif">{exp.role}</h3>

                      <div className={`flex items-center gap-2 font-mono text-[10px] text-text-muted mb-6 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span>{exp.period}</span>
                        <span className="text-accent-red/40">|</span>
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-text-secondary text-sm leading-relaxed mb-6">{exp.description}</p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="tech-chip text-[10px]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
