import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const LANGUAGES = [
  { name: "Tamil", level: "Native proficiency" },
  { name: "English", level: "Professional working" },
  { name: "Japanese", level: "Learning + practice" },
];

export default function LanguagesSection() {
  return (
    <section
      id="languages"
      className="relative bg-[#050505] px-6 md:px-12 py-24 md:py-32 overflow-hidden"
    >
      {/* Dark Premium Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.02] animate-pulse-red" />
        <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#111111] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="text-center relative z-10 w-full max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            Languages
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-20 md:mt-32 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
          {LANGUAGES.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="w-full group"
            >
              <div
                className="rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-12 hover:border-[#E31E24]/20 transition-all duration-500 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="text-white font-black uppercase tracking-[0.3em] text-xl sm:text-2xl group-hover:text-[#E31E24] transition-colors duration-300">
                  {lang.name}
                </div>
                <div className="mt-4 text-white/20 group-hover:text-white/40 text-[10px] uppercase tracking-[0.2em] font-black transition-colors duration-300">
                  {lang.level}
                </div>
                <div className="mt-10">
                  <div className="h-1 w-1 rounded-full bg-[#E31E24] group-hover:scale-[4] group-hover:shadow-[0_0_12px_#E31E24] transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
