import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import AnimatedJobTitles from "../components/AnimatedJobTitles";
import GlassCTAButton from "../components/cta/GlassCTAButton";
import PORTRAIT_URL from "../mcsk-port.png";

const NAV_LINKS = ["About", "Projects", "Contact"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050505]">
      {/* Premium background graphics */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(227,30,36,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(227,30,36,0.1) 1px, transparent 1px)",
            backgroundSize: "clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px)",
            maskImage:
              "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
          }}
        />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#111111] rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0A0A0A] rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#E31E24] rounded-full blur-[180px] opacity-[0.06] animate-pulse-red" />
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-[#E31E24] rounded-full blur-[180px] opacity-[0.06] animate-pulse-red" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-12 pt-8 md:pt-10 z-30 relative">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/60 font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs md:text-sm transition-all duration-300 hover:text-[#E31E24] hover:tracking-[0.4em]"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-20 py-12 md:py-0">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-3/5 text-left order-2 md:order-1">
          <FadeIn delay={0.2} x={-30}>
            <div className="hero-heading font-black uppercase tracking-tighter leading-[0.9] text-[14vw] sm:text-[12vw] md:text-[8vw] lg:text-[9vw]">
              HI, I'M
            </div>
            <div className="hero-heading font-black uppercase tracking-tighter leading-[0.9] text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[8vw] mt-2 whitespace-normal break-words">
              SANTHOSH KUMAR
            </div>
            <div className="mt-8 md:mt-10 flex justify-start">
              <AnimatedJobTitles />
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Portrait */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end order-1 md:order-2 mb-10 md:mb-0">
          <FadeIn delay={0.4} x={30} className="w-[240px] sm:w-[320px] md:w-[400px] lg:w-[500px]">
            <Magnet padding={100} strength={2} className="w-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#E31E24] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
                <img
                  src={PORTRAIT_URL}
                  alt="Santhosh Kumar"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)] filter brightness-90 group-hover:brightness-110 transition-all duration-700"
                  loading="eager"
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-12 pb-10 md:pb-12 z-30 relative gap-8 md:gap-0 mt-auto">
        <FadeIn delay={0.6} y={20}>
          <p
            className="text-white/40 font-medium uppercase tracking-[0.1em] leading-relaxed max-w-[400px] sm:max-w-[500px]"
            style={{ fontSize: "clamp(0.7rem, 1.2vw, 0.9rem)" }}
          >
            Results-driven <span className="text-white">Frontend Developer</span> with 4+ years of experience. Specialized in <span className="text-[#E31E24]">React.js</span> and premium digital experiences.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} y={20} className="w-full md:w-auto">
          <div className="flex flex-wrap gap-4">
            <ContactButton />
            <GlassCTAButton variant="download">
              Download Resume
            </GlassCTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
