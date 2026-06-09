import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const CARDS = [
  "4+ Years Experience",
  "React.js Specialist",
  "Performance-Focused Development",
  "Reusable Component Architecture",
  "Strong Problem Solving",
  "LMS Product Experience",
  "Frontend + Backend Collaboration",
  "Remote Work Experience",
];

export default function WhyHireMeSection() {
  return (
    <section
      id="why-hire-me"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            WHY HIRE ME
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-12 sm:mt-16 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CARDS.map((c, idx) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.03 }}
              whileHover={{ rotateX: 7, rotateY: -7, y: -6 }}
              className="h-full"
            >
              <div
                className="h-full rounded-[28px] sm:rounded-[32px] border border-[#D7E2EA]/20 bg-white/5 backdrop-blur-md p-6 sm:p-7"
                style={{
                  boxShadow: "0 0 40px rgba(215,226,234,0.07) inset",
                }}
              >
                <div className="text-[#D7E2EA] font-black uppercase tracking-wide" style={{ fontSize: "clamp(1rem, 1.7vw, 1.2rem)" }}>
                  {c}
                </div>
                <div className="mt-3 text-[#D7E2EA] opacity-70 text-[0.95rem] leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)" }}>
                  {idx === 0
                    ? "Proven delivery across real-world products."
                    : idx === 1
                      ? "Deep React patterns, UI architecture, and performance."
                      : idx === 2
                        ? "Fast rendering, optimized UX, and measurable improvements."
                        : idx === 3
                          ? "Reusable components with clean, scalable structure."
                          : idx === 4
                            ? "Strong engineering judgment and debugging discipline."
                            : idx === 5
                              ? "Hands-on LMS module development and student flows."
                              : idx === 6
                                ? "Bridging frontend with PHP-based backend services."
                                : "Distributed collaboration with consistent communication."}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-64 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 25% 25%, rgba(182,0,168,0.22), transparent 55%), radial-gradient(circle at 70% 70%, rgba(0,190,255,0.12), transparent 55%)",
          filter: "blur(24px)",
          opacity: 0.9,
        }}
      />
    </section>
  );
}

