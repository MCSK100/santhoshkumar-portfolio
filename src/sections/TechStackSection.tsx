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
      className="relative bg-[#050505] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Tech Stack
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-12 sm:mt-16 max-w-6xl relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {all.map((item, idx) => {
            if ("divider" in item) {
              return (
                <div
                  key={`div-${idx}`}
                  className="col-span-2 sm:col-span-3 lg:col-span-4 h-px bg-white/5 my-4"
                />
              );
            }

            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.015 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div
                  className="rounded-[20px] border border-white/5 bg-[#0A0A0A] hover:border-[#E31E24]/30 transition-all duration-300 p-4 sm:p-6 flex items-center justify-center min-h-[80px] sm:min-h-[100px]"
                >
                  <div className="absolute inset-0 bg-[#E31E24] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 rounded-[20px]" />
                  <div className="relative text-center">
                    <span className="text-white/70 group-hover:text-white font-medium uppercase tracking-widest text-[0.8rem] sm:text-[0.9rem] transition-colors duration-300">
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
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.03] animate-pulse-red" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.03] animate-pulse-red" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}
