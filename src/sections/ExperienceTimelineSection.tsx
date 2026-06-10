import { useMemo } from "react";
import FadeIn from "../components/FadeIn";

type TimelineCardProps = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

function TimelineCard({
  company,
  role,
  period,
  bullets,
}: TimelineCardProps) {
  return (
    <div className="rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 md:p-10 group hover:border-[#E31E24]/30 transition-all duration-500 h-full">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <div className="text-[#E31E24] uppercase tracking-[0.2em] font-black text-xs sm:text-sm">
            {role}
          </div>
          <h3
            className="text-white font-black uppercase tracking-tight mt-2 group-hover:text-[#E31E24] transition-colors duration-300"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
          >
            {company}
          </h3>
        </div>
        <div
          className="text-white/40 uppercase tracking-widest font-medium text-xs sm:text-sm mt-1"
        >
          {period}
        </div>
      </div>

      <ul className="mt-8 space-y-4">
        {bullets.map((b, idx) => (
          <li
            key={idx}
            className="flex gap-4 items-start"
            style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
          >
            <span
              className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E31E24] group-hover:shadow-[0_0_10px_#E31E24] transition-all duration-300 flex-shrink-0"
            />
            <span className="text-white/60 group-hover:text-white/90 transition-colors duration-300">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceTimelineSection() {
  const cards = useMemo(
    () => [
      {
        company: "BrainCert",
        role: "Frontend Developer",
        period: "Mar 2022 – Present",
        bullets: [
          "React.js development & LMS product engineering",
          "Built high-performance reusable UI components",
          "PHP integration & full-stack collaboration",
          "Optimized web applications for scale and speed",
          "Developed responsive and accessible interfaces",
        ],
      },
      {
        company: "Focus Edumatics Pvt Ltd",
        role: "Online Tutor",
        period: "Oct 2020 – Nov 2021",
        bullets: [
          "Delivered online tutoring and student support",
          "Applied mathematical modeling for education",
          "Facilitated remote learning experiences",
          "Managed student progress and feedback",
        ],
      },
    ],
    []
  );

  return (
    <section
      id="experience"
      className="relative bg-[#050505] min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Dark Premium Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.03] animate-pulse-red" />
        <div className="absolute bottom-[30%] left-[-10%] w-[50%] h-[50%] bg-[#111111] rounded-full blur-[150px] opacity-20" />
      </div>

      {/* Title */}
      <div className="w-full text-center relative z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Experience
          </h2>
        </FadeIn>
      </div>

      {/* Timeline */}
      <div className="mt-16 sm:mt-24 flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-6xl">
          <div
            className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8"
            aria-label="Experience timeline"
          >
            {cards.map((c, i) => (
              <div key={c.company} className="md:w-1/2">
                <FadeIn delay={i * 0.15} y={30}>
                  <TimelineCard {...c} />
                </FadeIn>
              </div>
            ))}
          </div>

          {/* Premium Timeline Accent */}
          <div className="hidden md:block mt-16 relative">
            <div className="h-px w-full bg-white/5" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 h-1 w-24 bg-[#E31E24] blur-[2px]" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 h-1 w-24 bg-[#E31E24] blur-[2px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
