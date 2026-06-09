
import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import AnimatedJobTitles from "../components/AnimatedJobTitles";





const NAV_LINKS = ["About", "Projects", "Contact"];

import PORTRAIT_URL from "../mcsk-port.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Premium background graphics */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,45,85,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(circle at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 62%)",
          }}
        />

        {/* glow blobs */}


        {/* subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(255,45,85,0.10), rgba(0,0,0,0.0) 50%), radial-gradient(circle at 50% 60%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 70%)",
          }}
        />
      </div>

      {/* Navbar */}

      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20 relative">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
            className="text-white font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden w-full relative z-10">
        <div className="relative">
          <div className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13.5vw] mt-6 sm:mt-4 md:-mt-5 px-6 md:px-10">
            HI, I'M
          </div>
          <div className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[11.5vw] mt-2 px-6 md:px-10">
            SANTHOSH KUMAR
          </div>

          <div className="mt-5 sm:mt-6 px-6 md:px-10">
            <AnimatedJobTitles />
          </div>
        </div>
      </div>

      {/* Hero Portrait - centered absolutely with magnetic effect */}


      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3} className="w-full">
          <img
            src={PORTRAIT_URL}
            alt="Jack - 3D Creator"
            className="w-full h-auto object-contain"
            loading="eager"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 relative">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[420px] sm:max-w-[520px] md:max-w-[620px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.05rem)" }}
          >
            Results-driven Frontend Developer with 4+ years of experience building scalable, high-performance web applications and learning platforms. Specialized in React.js, JavaScript, HTML, CSS, PHP integration, and modern user experiences.
          </p>
        </FadeIn>


        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
