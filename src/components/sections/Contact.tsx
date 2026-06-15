import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, MapPin, Github, Linkedin, Send, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-heading',
        { y: 80, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.contact-terminal',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-terminal', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.contact-form',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-form', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Open WhatsApp with a prefilled message to +91 8610499863
    const phone = '8610499863'
    const text = encodeURIComponent(
      `Hello ${formData.name},\n\n${formData.message}\n\nFrom: ${formData.email}`
    )

    const url = `https://wa.me/${phone}?text=${text}`
    window.open(url, '_blank', 'noopener,noreferrer')

    // Keep existing UI feedback
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 500)
  }

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 overflow-hidden">
      {/* Marquee background */}
      <div className="bg-marquee">
        <div className="bg-marquee-inner">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="bg-marquee-text">
              INITIATE PROTOCOL // START TRANSMISSION // ESTABLISH CONNECTION // &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-red/[0.04] rounded-full blur-[250px] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="section-header justify-center">
          <div className="section-header-line" />
          <span className="section-header-text">Initiate Transmission</span>
          <div className="section-header-line" />
        </div>

        <div className="mb-16 text-center">
          <h2 className="contact-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Let's<br />
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Initiate a secure channel below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Terminal-style contact info */}
          <div className="contact-terminal space-y-6">
            {/* Terminal window */}
            <div className="project-strip">
              <div className="corner tl" />
              <div className="corner tr" />
              <div className="corner bl" />
              <div className="corner br" />

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/[0.05]">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <span className="font-mono text-[9px] text-text-muted ml-2 tracking-wider">CONTACT_TERMINAL</span>
                </div>

                <div className="font-mono text-[11px] text-text-muted space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-accent-red shrink-0">$</span>
                    <span>cat contact_info.json</span>
                  </div>

                  <div className="pl-4 border-l border-white/[0.06] space-y-3 mt-4">
                    <div className="flex items-center gap-3 group">
                      <Mail size={14} className="text-accent-red shrink-0" />
                      <a href="mailto:santhoshkumar.mariappan@gmail.com" className="text-text-secondary hover:text-white transition-colors" data-cursor-hover>
                        santhoshkumar.mariappan@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin size={14} className="text-accent-red shrink-0" />
                      <span className="text-text-secondary">Coimbatore, Tamil Nadu, India</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-accent-red shrink-0 font-mono text-[10px]">{'>'}</span>
                      <span className="text-text-secondary">+91 8610499863</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mt-4">
                    <span className="text-accent-red shrink-0">$</span>
                    <span>echo $SOCIAL_LINKS</span>
                  </div>

                  <div className="flex gap-3 pl-4 mt-2">
                    <a href="https://github.com/MCSK100" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors font-mono text-[11px]" data-cursor-hover>
                      <Github size={14} />
                      GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/santhosh-kumar-8a8a8a8a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-accent-red transition-colors font-mono text-[11px]" data-cursor-hover>
                      <Linkedin size={14} />
                      LinkedIn
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-accent-red transition-colors font-mono text-[11px]" data-cursor-hover>
                      <Globe size={14} />
                      Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3 px-4">
              <span className="live-dot" />
              <span className="font-mono text-[10px] text-text-muted tracking-wider">SYSTEM ONLINE — AWAITING TRANSMISSION</span>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="project-strip">
              <div className="corner tl" />
              <div className="corner tr" />
              <div className="corner bl" />
              <div className="corner br" />

              <div className="p-8">
                <div className="font-mono text-[9px] text-text-muted tracking-[0.2em] uppercase mb-6">Compose Message</div>

                <div className="space-y-5">
                  <div>
                    <label className="block font-mono text-[10px] mb-2 tracking-[0.15em] uppercase text-text-muted">Sender ID</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm font-mono placeholder:text-text-muted/30 focus:outline-none input-glow transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] mb-2 tracking-[0.15em] uppercase text-text-muted">Return Channel</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm font-mono placeholder:text-text-muted/30 focus:outline-none input-glow transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] mb-2 tracking-[0.15em] uppercase text-text-muted">Message Payload</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm font-mono placeholder:text-text-muted/30 focus:outline-none input-glow transition-all duration-300 resize-none"
                      placeholder="Describe your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent-red/20 border border-accent-red/30 rounded-lg text-white font-mono tracking-[0.15em] uppercase text-[11px] hover:bg-accent-red/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 glow-red"
                    data-cursor-hover
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">TRANSMITTING...</span>
                    ) : isSubmitted ? (
                      <span className="text-green-400">TRANSMISSION COMPLETE</span>
                    ) : (
                      <>
                        <span>Initiate Contact</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
