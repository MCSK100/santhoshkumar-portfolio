import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const CARDS = [
  "4+ Years Experience",
  "React.js Specialist",
  "Performance-Focused",
  "Reusable Architecture",
  "Problem Solving",
  "LMS Product Experience",
  "Full-stack Collaboration",
  "Remote Work Ready",
];

const DESCRIPTIONS = [
  "Proven delivery across real-world products and high-traffic applications.",
  "Deep React patterns, UI architecture, and modern state management.",
  "Fast rendering, optimized UX, and measurable performance improvements.",
  "Building reusable components with clean, scalable, and modular structure.",
  "Strong engineering judgment, debugging discipline, and logical thinking.",
  "Hands-on LMS module development, student flows, and complex interfaces.",
  "Seamlessly bridging frontend with PHP and Node.js backend services.",
  "Distributed collaboration with consistent and transparent communication.",
];

export default function WhyHireMeSection() {
  return (
    <section
      id="why-hire-me"
      className="relative bg-[#050505] px-6 md:px-12 py-24 md:py-32 overflow-hidden"
    >
      {/* Dark Premium Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.02] animate-pulse-red" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#111111] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="text-center relative z-10 w-full max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            WHY HIRE ME
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-20 md:mt-32 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((c, idx) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="h-full group"
            >
              <div
                className="h-full rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 hover:border-[#E31E24]/20 transition-all duration-500"
              >
                <div className="text-white font-black uppercase tracking-[0.2em] group-hover:text-[#E31E24] transition-colors duration-300" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}>
                  {c}
                </div>
                <div className="mt-4 text-white/30 group-hover:text-white/50 text-sm leading-relaxed transition-colors duration-300">
                  {DESCRIPTIONS[idx]}
                </div>
                <div className="mt-8 pt-6">
                  <div className="h-px w-10 bg-white/10 group-hover:bg-[#E31E24]/40 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
