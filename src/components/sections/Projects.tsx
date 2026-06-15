import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, ArrowRight, List, LayoutGrid } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  github: string
  live?: string | null
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'YourScrap',
    description:
      'Digital Scrap Marketplace — connecting users with scrap collectors and recycling services with a smooth, trustworthy UX.',
    tech: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Node.js',
      'Express.js',
      'Supabase (PostgreSQL)',
      'Framer Motion',
      'GSAP',
      'Recharts (admin dashboard)',
    ],
    github: 'https://github.com/MCSK100',
    live: 'https://yourscrap.vercel.app/',
    category: 'Marketplace',
  },
  {
    id: 2,
    title: 'ShadowChat',
    description:
      'Modern Real-Time Communication Platform — responsive UI and advanced user interactions with realtime messaging experience.',
    tech: [
      'JavaScript',
      'React (JSX)',
      'React Router',
      'Vite',
      'TailwindCSS',
      'Framer Motion',
      'Socket.IO (Realtime)',
      'WebRTC (RTCPeerConnection, offer/answer/ICE)',
      'Express',
      'PWA (service worker + manifest)',
    ],
    github: 'https://github.com/MCSK100',
    live: 'https://shadowchaty.vercel.app/',
    category: 'Real-Time',
  },
  {
    id: 3,
    title: 'FestivLink',
    description:
      'Event Discovery Platform — connecting users with local events and community activities using modern web UI patterns.',
    tech: ['React.js', 'Express', 'Node.js', 'MongoDB','Cloudinary','Axios', 'Tailwind CSS'],
    github: 'https://github.com/MCSK100',
    live: 'https://festivlink.vercel.app/',
    category: 'Events',
  },
]

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [viewMode, setViewMode] = useState<'slider' | 'list'>('slider')
  const [activeProject, setActiveProject] = useState<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-heading',
        { y: 80, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      )

      const cards = section.querySelectorAll<HTMLElement>('.project-card')
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none reverse' },
          }
        )
      })
    }, section)

    return () => ctx.revert()
  }, [viewMode])

  const renderProjectImage = (title: string) => {
    return (
      <div className="relative overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-red/20 via-accent-crimson/10 to-transparent opacity-90" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,26,26,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.4 }} />
        <div className="relative p-6">
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-muted mb-2">Project Image</div>
          <div className="font-serif text-2xl font-bold text-white">{title}</div>
          <div className="font-mono text-[10px] tracking-[0.1em] text-text-muted mt-2">Glassmorphism • Cyber UI</div>
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-crimson/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="section-header">
          <div className="section-header-line" />
          <span className="section-header-text">Featured Projects</span>
        </div>

        <div className="flex items-end justify-between mb-16">
          <h2 className="projects-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Premium<br />
            <span className="text-gradient">Works</span>
          </h2>

          {/* View mode toggle */}
          <div className="hidden sm:flex items-center gap-1 p-1 border border-white/[0.06] rounded-lg">
            <button
              onClick={() => setViewMode('slider')}
              className={`p-2 rounded transition-all duration-300 ${viewMode === 'slider' ? 'bg-accent-red/20 text-accent-red' : 'text-text-muted hover:text-white'}`}
              data-cursor-hover
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-all duration-300 ${viewMode === 'list' ? 'bg-accent-red/20 text-accent-red' : 'text-text-muted hover:text-white'}`}
              data-cursor-hover
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Slider view */}
        {viewMode === 'slider' && (
          <div ref={sliderRef} className="overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide">
            <div className="flex gap-6 w-max">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="project-card project-card-item w-[350px] sm:w-[400px] shrink-0"
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className={`project-strip h-full ${activeProject === project.id ? 'border-accent-red/30' : ''}`}>
                    <div className="corner tl" />
                    <div className="corner tr" />
                    <div className="corner bl" />
                    <div className="corner br" />
                    <div className="strip-scan-line" />

                    <div className="p-6 space-y-5">
                      {/* Image */}
                      {renderProjectImage(project.title)}

                      {/* Category */}
                      <div className="inline-flex px-3 py-1 bg-accent-red/10 border border-accent-red/20 rounded">
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-red">{project.category}</span>
                      </div>

                      <div>
                        <h3 className="font-serif text-2xl font-bold text-white mb-2 hover:text-accent-red transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="tech-chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                        <div className="flex items-center gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-text-muted hover:text-white transition-colors duration-300 font-mono text-[11px]"
                            data-cursor-hover
                          >
                            <Github size={14} />
                            GitHub
                          </a>

                          {project.live ? (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-text-muted hover:text-accent-red transition-colors duration-300 font-mono text-[11px]"
                              data-cursor-hover
                            >
                              <ExternalLink size={14} />
                              Live Demo
                            </a>
                          ) : (
                            <span className="flex items-center gap-1.5 text-text-muted font-mono text-[11px] opacity-60">
                              <ExternalLink size={14} />
                              Live Demo
                            </span>
                          )}
                        </div>

                        <ArrowRight className="text-accent-red/50 group-hover:text-accent-red transition-colors" size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* List view */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card project-card-item"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className={`project-strip ${activeProject === project.id ? 'border-accent-red/30' : ''}`}>
                  <div className="corner tl" />
                  <div className="corner tr" />
                  <div className="corner bl" />
                  <div className="corner br" />
                  <div className="strip-scan-line" />

                  <div className="p-6 flex items-center gap-6">
                    <div className="font-mono text-[40px] font-bold text-white/[0.04] leading-none shrink-0 w-16 text-center">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="strip-status">{project.category}</span>
                        <span className="font-mono text-[10px] text-accent-red/60 tracking-wider">|</span>
                        <span className="font-mono text-[10px] text-text-muted tracking-wider uppercase">Premium Card</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-text-secondary text-sm truncate">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tech.slice(0, 5).map((tech) => (
                          <span key={tech} className="tech-chip text-[10px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden lg:flex flex-wrap gap-2 max-w-xs shrink-0">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="tech-chip text-[10px]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-white transition-colors p-2"
                        data-cursor-hover
                      >
                        <Github size={16} />
                      </a>

                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-accent-red transition-colors p-2"
                          data-cursor-hover
                        >
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span className="text-text-muted opacity-60 p-2" aria-hidden>
                          <ExternalLink size={16} />
                        </span>
                      )}

                      <ArrowRight className="text-accent-red/50" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/[0.06] rounded-lg bg-white/[0.02]">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted">Portfolio Projects</span>
            <span className="font-mono text-[10px] text-accent-red">—</span>
            <span className="font-mono text-[10px] tracking-[0.15em] text-text-muted">{String(projects.length).padStart(2, '0')} Items</span>
          </div>
        </div>
      </div>
    </section>
  )
}
