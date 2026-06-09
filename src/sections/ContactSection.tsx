import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";

function LinkRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#D7E2EA]/15 py-4">
      <div className="text-[#D7E2EA] uppercase tracking-wider font-medium opacity-70" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
        {label}
      </div>
      <div className="text-[#D7E2EA] font-black" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
        {value}
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            LET'S BUILD SOMETHING AMAZING
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-12 sm:mt-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <FadeIn delay={0.05} y={30} className="">
            <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/20 bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10">
              <div className="text-[#D7E2EA] font-medium uppercase tracking-widest opacity-80" style={{ letterSpacing: "0.12em" }}>
                Contact
              </div>

              <div className="mt-6">
                <LinkRow label="Email" value="santhoshkumar.mariappan@gmail.com" />
                <LinkRow label="Phone" value="+91 8610499863" />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <ContactButton />
                </div>
                <a
                  href="#"
                  className="rounded-full font-medium uppercase tracking-widest text-[#D7E2EA] cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
                  style={{
                    border: "2px solid #D7E2EA",
                    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                    padding: "0",
                    background: "transparent",
                    outline: "2px solid rgba(215,226,234,0.0)",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <span className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-block">
                    Download Resume
                  </span>
                </a>
              </div>

              <div className="mt-6 flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/santhosh-kumar-29a1741b3/"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-full border-2 border-[#D7E2EA]/25 text-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors"
                >
                  LinkedIn
                </motion.a>

                <motion.a
                  href="https://github.com/MCSK100"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="rounded-full border-2 border-[#D7E2EA]/25 text-[#D7E2EA] px-6 py-3 text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors"
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} y={30}>
            <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/20 bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10">
              <div className="text-[#D7E2EA] font-black uppercase tracking-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>
                Send a message
              </div>
              <div className="mt-4 text-[#D7E2EA] opacity-70 leading-relaxed">
                Reach out for frontend roles, LMS projects, and performance-focused UI work.
              </div>

              <div className="mt-8 space-y-4">
                <input
                  className="w-full rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C] px-5 py-3 text-[#D7E2EA] outline-none focus:border-[#D7E2EA]/60"
                  placeholder="Your name"
                />
                <input
                  className="w-full rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C] px-5 py-3 text-[#D7E2EA] outline-none focus:border-[#D7E2EA]/60"
                  placeholder="Email"
                />
                <textarea
                  className="w-full rounded-3xl border border-[#D7E2EA]/20 bg-[#0C0C0C] px-5 py-4 text-[#D7E2EA] outline-none focus:border-[#D7E2EA]/60"
                  placeholder="Message"
                  rows={5}
                />

                <div className="flex justify-end">
                  <button
                  className="rounded-full font-medium uppercase tracking-widest text-white cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
                    style={{
                      background: "#0C0C0C",
                      boxShadow: "none",
                      outline: "2px solid #0C0C0C",
                      outlineOffset: "-3px",
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-block">
                      Send Message
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-80 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(182,0,168,0.18), transparent 55%), radial-gradient(circle at 80% 70%, rgba(0,190,255,0.10), transparent 55%)",
          filter: "blur(26px)",
          opacity: 0.85,
        }}
      />
    </section>
  );
}

