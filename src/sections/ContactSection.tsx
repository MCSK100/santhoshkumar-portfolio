import { useCallback, useEffect, useState } from "react";
import FadeIn from "../components/FadeIn";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_GITHUB_URL,
  CONTACT_LINKEDIN_URL,
} from "../types/contact";
import RESUME_PDF from "../SanthoshKumar Resume FrontEnd Developer-1.pdf.pdf";


function buildMailto(email: string) {
  return `mailto:${email}`;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ContactSection() {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#contact") scrollToId("contact");
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleContactCTA = useCallback(() => {
    setHasInteracted(true);
    scrollToId("contact");
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-[#050505] px-6 md:px-12 py-24 md:py-32 overflow-hidden"
    >
      {/* Dark Premium Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#E31E24] rounded-full blur-[180px] opacity-[0.03] animate-pulse-red" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#111111] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-[0.9] tracking-tighter"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            >
              Contact Me
            </h2>
          </FadeIn>
        </div>

        <div className="mx-auto mt-20 md:mt-32 w-full">
          <FadeIn delay={0.2} y={20}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="rounded-[32px] border border-white/5 bg-white/[0.01] backdrop-blur-xl p-8 sm:p-12">
                  <div className="text-white uppercase tracking-[0.3em] font-black text-sm sm:text-base">
                    Let’s build <span className="text-[#E31E24]">something great</span>
                  </div>
                  <p className="mt-4 text-white/30 text-sm sm:text-base max-w-lg">
                    Reach out using the links below. I respond quickly.
                  </p>

                  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a
                      href={buildMailto(CONTACT_EMAIL)}
                      className="group rounded-[24px] border border-white/5 bg-black/40 hover:border-[#E31E24]/20 transition-all duration-300 px-8 py-6"
                    >
                      <div className="text-white/20 font-black uppercase tracking-[0.2em] text-[10px] group-hover:text-[#E31E24] transition-colors">Email</div>
                      <div className="mt-2 text-white font-black break-all text-sm sm:text-base">{CONTACT_EMAIL}</div>
                    </a>

                    <a
                      href={`tel:+${CONTACT_PHONE}`}
                      className="group rounded-[24px] border border-white/5 bg-black/40 hover:border-[#E31E24]/20 transition-all duration-300 px-8 py-6"
                    >
                      <div className="text-white/20 font-black uppercase tracking-[0.2em] text-[10px] group-hover:text-[#E31E24] transition-colors">Phone</div>
                      <div className="mt-2 text-white font-black text-sm sm:text-base">{CONTACT_PHONE}</div>
                    </a>

                    <a
                      href={RESUME_PDF}
                      download="SanthoshKumar-Resume.pdf"
                      className="group rounded-[24px] border border-white/5 bg-black/40 hover:border-[#E31E24]/20 transition-all duration-300 px-8 py-8 sm:col-span-2 flex flex-col items-center text-center"
                    >
                      <div className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] group-hover:text-[#E31E24] transition-colors mb-2">Resume</div>
                      <div className="text-white font-black text-lg sm:text-xl">Download / View PDF</div>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleContactCTA}
                    className="sr-only"
                    aria-hidden={hasInteracted ? "true" : "false"}
                  >
                    Scroll to contact
                  </button>
                </div>
              </div>

              <div>
                <div className="rounded-[32px] border border-white/5 bg-white/[0.01] backdrop-blur-xl p-8 sm:p-12 h-full">
                  <div className="text-white uppercase tracking-[0.3em] font-black text-sm sm:text-base">
                    Connect
                  </div>

                  <div className="mt-10 space-y-6">
                    <a
                      href={CONTACT_GITHUB_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-[24px] border border-white/5 bg-black/40 hover:border-[#E31E24]/20 transition-all duration-300 px-8 py-6"
                    >
                      <div className="text-white font-black uppercase tracking-[0.2em] text-[10px] group-hover:text-[#E31E24] transition-colors mb-1">GitHub</div>
                      <div className="text-white/40 text-xs sm:text-sm font-medium">
                        {CONTACT_GITHUB_URL.replace("https://", "")}
                      </div>
                    </a>

                    <a
                      href={CONTACT_LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-[24px] border border-white/5 bg-black/40 hover:border-[#E31E24]/20 transition-all duration-300 px-8 py-6"
                    >
                      <div className="text-white font-black uppercase tracking-[0.2em] text-[10px] group-hover:text-[#E31E24] transition-colors mb-1">LinkedIn</div>
                      <div className="text-white/40 text-xs sm:text-sm font-medium">
                        {CONTACT_LINKEDIN_URL.replace("https://", "")}
                      </div>
                    </a>
                  </div>

                  <div className="mt-12 text-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-center leading-relaxed">
                    Available for freelance & full-time roles.
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
