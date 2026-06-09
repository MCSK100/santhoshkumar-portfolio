import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../components/FadeIn";

type Skill = { label: string; value: number };

const SKILLS: Skill[] = [
  { label: "React.js", value: 90 },
  { label: "JavaScript", value: 90 },
  { label: "HTML/CSS", value: 95 },
  { label: "Responsive Design", value: 95 },
  { label: "PHP Integration", value: 80 },
  { label: "Node.js", value: 75 },
  { label: "Performance Optimization", value: 85 },
];

function RadialChart({ label, value }: Skill) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const radius = 44;
  const stroke = 8;
  const normalizedRadius = radius;
  const circumference = 2 * Math.PI * normalizedRadius;
  const dashOffset = circumference * (1 - value / 100);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <motion.div
        className="relative"
        initial={{ scale: 0.98, opacity: 0.3 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          <defs>
            <linearGradient id={`grad-${label}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B600A8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#D7E2EA" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#D7E2EA"
            strokeOpacity="0.12"
            strokeWidth={stroke}
            fill="transparent"
          />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            stroke={`url(#grad-${label})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={isInView ? dashOffset : circumference}
            animate={isInView ? { strokeDashoffset: dashOffset } : {}}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ filter: "drop-shadow(0 0 12px rgba(182,0,168,0.28))" }}
          />
        </svg>

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ pointerEvents: "none" }}
        >
          <div className="text-center">
            <div className="text-[#D7E2EA] font-black" style={{ fontSize: 26 }}>
              {value}%
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-4 text-center">
        <span className="text-[#D7E2EA] uppercase tracking-wide text-[0.85rem] sm:text-[0.95rem] opacity-90">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Skills
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-12 sm:mt-16 max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-10">
          {SKILLS.map((s) => (
            <RadialChart key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* keep palette; subtle ambient */}
      <div
        className="pointer-events-none absolute -bottom-60 left-1/2 -translate-x-1/2 w-[900px] h-[900px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(182,0,168,0.18), transparent 55%), radial-gradient(circle at 70% 70%, rgba(215,226,234,0.08), transparent 52%)",
          filter: "blur(18px)",
          opacity: 0.85,
        }}
      />
    </section>
  );
}

