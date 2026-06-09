import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const LANGUAGES = ["Tamil", "English", "Japanese"];

export default function LanguagesSection() {
  return (
    <section
      id="languages"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Languages
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 place-items-center">
          {LANGUAGES.map((lang, idx) => (
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ rotateX: 8, rotateY: -8, y: -6 }}
              className="w-full"
            >
              <div
                className="mx-auto rounded-[28px] border border-[#D7E2EA]/20 bg-white/5 backdrop-blur-md p-6 sm:p-8"
                style={{
                  boxShadow: "0 0 40px rgba(215,226,234,0.07) inset",
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.3,
                  }}
                  style={{
                    willChange: "transform",
                  }}
                  aria-label={lang}
                >
                  <div className="text-center">
                    <div className="text-[#D7E2EA] font-black uppercase tracking-widest" style={{ fontSize: "clamp(1.2rem, 2.2vw, 2.1rem)" }}>
                      {lang}
                    </div>
                    <div className="mt-3 text-center text-[#D7E2EA] opacity-70 text-[0.95rem]">
                      {idx === 0 ? "Native proficiency" : idx === 1 ? "Professional working" : "Learning + practice"}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(182,0,168,0.20), transparent 55%), radial-gradient(circle at 80% 80%, rgba(0,190,255,0.12), transparent 55%)",
          filter: "blur(22px)",
          opacity: 0.85,
        }}
      />
    </section>
  );
}

