import FadeIn from "../components/FadeIn";

const SERVICES = [
  {
    number: "01",
    name: "Frontend Development",
    description:
      "Building responsive web applications using React.js, JavaScript, HTML, CSS and modern frontend architecture.",
  },
  {
    number: "02",
    name: "UI Development",
    description:
      "Pixel-perfect interfaces with smooth animations, accessibility and responsive design.",
  },
  {
    number: "03",
    name: "Performance Optimization",
    description:
      "Improving speed, rendering efficiency and user experience across devices.",
  },
  {
    number: "04",
    name: "React Component Architecture",
    description:
      "Reusable scalable components and maintainable frontend systems.",
  },
  {
    number: "05",
    name: "LMS Development",
    description:
      "Learning management system modules, assessments, course pages and student experiences.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#050505] px-6 md:px-12 py-24 md:py-32 overflow-hidden"
    >
      {/* Dark Premium Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] left-[-5%] w-[50%] h-[50%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.03] animate-pulse-red" />
        <div className="absolute bottom-[20%] right-[-5%] w-[50%] h-[50%] bg-[#111111] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="text-center relative z-10 w-full max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            Services
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-20 sm:mt-24 md:mt-32 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <FadeIn key={service.number} delay={idx * 0.1} y={20}>
              <div className="group rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 sm:p-10 hover:border-[#E31E24]/30 transition-all duration-500 h-full flex flex-col">
                <div className="text-[#E31E24] font-black text-4xl sm:text-5xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 mb-6">
                  {service.number}
                </div>
                <h3 className="text-white font-black uppercase tracking-[0.1em] text-lg sm:text-xl mb-4 group-hover:text-[#E31E24] transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm sm:text-base group-hover:text-white/60 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="mt-auto pt-8">
                  <div className="h-px w-12 bg-white/10 group-hover:bg-[#E31E24]/30 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
