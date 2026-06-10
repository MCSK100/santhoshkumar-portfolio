import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const FRONTEND = [
  "React.js",
  "Next.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "jQuery",
];

const BACKEND = ["PHP", "Node.js"];
const TOOLS = ["GitHub", "Chrome DevTools"];

export default function TechStackSection() {
  const all = [
    ...FRONTEND.map((t) => ({ text: t })),
    { divider: true as const },
    ...BACKEND.map((t) => ({ text: t })),
    { divider: true as const },
    ...TOOLS.map((t) => ({ text: t })),
  ];

  return (
    <section
      id="tech"
      className="relative bg-[#050505] px-6 md:px-12 py-24 md:py-32 overflow-hidden"
    >
      <div className="text-center relative z-10 w-full max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            Tech Stack
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-20 md:mt-32 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {all.map((item, idx) => {
            if ("divider" in item) {
              return (
                <div
                  key={`div-${idx}`}
                  className="col-span-2 sm:col-span-3 lg:col-span-4 h-px bg-white/5 my-6"
                />
              );
            }

            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.01 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div
                  className="rounded-[24px] border border-white/5 bg-[#0A0A0A] hover:border-[#E31E24]/20 transition-all duration-300 p-6 flex items-center justify-center min-h-[80px] sm:min-h-[100px]"
                >
                  <div className="absolute inset-0 bg-[#E31E24] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 rounded-[24px]" />
                  <div className="relative text-center">
                    <span className="text-white/40 group-hover:text-white font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Premium dark background accents */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.02] animate-pulse-red" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.02] animate-pulse-red" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}
