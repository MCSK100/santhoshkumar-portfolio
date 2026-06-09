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
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
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

      <div className="mx-auto mt-12 sm:mt-16 max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {all.map((item, idx) => {
            if ("divider" in item) {
              return (
                <div
                  key={`div-${idx}`}
                  className="col-span-2 sm:col-span-3 lg:col-span-4 h-px bg-[#D7E2EA]/15"
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
                whileHover={{ rotateX: 6, rotateY: -6, y: -4 }}
                className="relative"
              >
                <div
                  className="rounded-[24px] sm:rounded-[28px] border border-[#D7E2EA]/20 bg-white/5 backdrop-blur-md p-4 sm:p-5"
                  style={{
                    boxShadow: "0 0 40px rgba(215,226,234,0.08) inset",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[24px] sm:rounded-[28px] pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(700px circle at 20% 10%, rgba(182,0,168,0.25), transparent 40%), radial-gradient(600px circle at 80% 80%, rgba(0,190,255,0.16), transparent 35%)",
                      opacity: 0.9,
                    }}
                  />
                  <div className="relative text-center">
                    <span className="text-[#D7E2EA] font-medium uppercase tracking-wide text-[0.85rem] sm:text-[0.95rem]">
                      {item.text}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* subtle background sheen */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(182,0,168,0.18), transparent 55%), radial-gradient(circle at 70% 70%, rgba(0,190,255,0.12), transparent 50%)",
          filter: "blur(20px)",
          opacity: 0.8,
        }}
      />
    </section>
  );
}

