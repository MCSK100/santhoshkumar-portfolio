import { useCallback, useEffect, useState } from "react";
import FadeIn from "../components/FadeIn";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_GITHUB_URL,
  CONTACT_LINKEDIN_URL,
  CONTACT_RESUME_URL,
} from "../types/contact";


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

  // Allow SEO bots + initial load without scrolling.
  // When user clicks “Contact Me” button (or browser lands on #contact), scroll.
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
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative */}
      <div
        className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(182,0,168,0.20), transparent 55%), radial-gradient(circle at 80% 80%, rgba(0,190,255,0.12), transparent 55%)",
          filter: "blur(22px)",
          opacity: 0.85,
        }}
      />

      <div className="relative">
        <div className="text-center">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Contact Me
            </h2>
          </FadeIn>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 max-w-5xl">
          <FadeIn delay={0.2} y={20}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="rounded-[28px] border border-[#D7E2EA]/20 bg-white/5 backdrop-blur-md p-6 sm:p-8">
                  <div className="text-[#D7E2EA] uppercase tracking-widest font-black" style={{ fontSize: "clamp(1.2rem, 2vw, 1.4rem)" }}>
                    Let’s build something great
                  </div>
                  <p className="mt-3 text-[#D7E2EA] opacity-80" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                    Reach out using the links below. I respond quickly.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
href={buildMailto(CONTACT_EMAIL)}
                      className="group rounded-[20px] border border-[#D7E2EA]/20 bg-black/20 hover:bg-white/5 transition-colors px-5 py-4"
                    >
                      <div className="text-[#D7E2EA] font-black uppercase tracking-wider text-sm">Email</div>
                      <div className="mt-2 text-white/90 font-medium">{CONTACT_EMAIL}</div>
                      <div className="mt-2 text-[#D7E2EA] opacity-60 text-sm group-hover:opacity-80 transition-opacity">Send a message</div>

                    </a>

                    <a
href={`tel:+${CONTACT_PHONE}`}

                      className="group rounded-[20px] border border-[#D7E2EA]/20 bg-black/20 hover:bg-white/5 transition-colors px-5 py-4"
                    >
                      <div className="text-[#D7E2EA] font-black uppercase tracking-wider text-sm">Phone</div>
{CONTACT_PHONE}
                      <div className="mt-2 text-[#D7E2EA] opacity-60 text-sm group-hover:opacity-80 transition-opacity">Call / WhatsApp</div>
                    </a>

                    <a
href={CONTACT_RESUME_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[20px] border border-[#D7E2EA]/20 bg-black/20 hover:bg-white/5 transition-colors px-5 py-4 sm:col-span-2"
                    >
                      <div className="text-[#D7E2EA] font-black uppercase tracking-wider text-sm">Resume</div>
                      <div className="mt-2 text-white/90 font-medium">Download / View PDF</div>
                      <div className="mt-2 text-[#D7E2EA] opacity-60 text-sm group-hover:opacity-80 transition-opacity">Open in new tab</div>
                    </a>
                  </div>

                  {/* Hidden interaction for accessibility/testing */}
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
                <div className="rounded-[28px] border border-[#D7E2EA]/20 bg-white/5 backdrop-blur-md p-6 sm:p-8">
                  <div className="text-[#D7E2EA] uppercase tracking-widest font-black" style={{ fontSize: "clamp(1.05rem, 1.7vw, 1.2rem)" }}>
                    Connect
                  </div>

                  <div className="mt-5 space-y-3">
                    <a
href={CONTACT_GITHUB_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-[18px] border border-[#D7E2EA]/20 bg-black/20 hover:bg-white/5 transition-colors px-5 py-4"
                    >
                      <div className="text-white/90 font-semibold">GitHub</div>
                      <div className="mt-1 text-[#D7E2EA] opacity-60 text-sm group-hover:opacity-80 transition-opacity">
{CONTACT_GITHUB_URL.replace("https://", "")}
                      </div>
                    </a>

                    <a
href={CONTACT_LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-[18px] border border-[#D7E2EA]/20 bg-black/20 hover:bg-white/5 transition-colors px-5 py-4"
                    >
                      <div className="text-white/90 font-semibold">LinkedIn</div>
                      <div className="mt-1 text-[#D7E2EA] opacity-60 text-sm group-hover:opacity-80 transition-opacity">
                        {CONTACT_LINKEDIN_URL.replace("https://", "")}

                      </div>
                    </a>
                  </div>

                  <div className="mt-6 text-[#D7E2EA] opacity-70 text-sm" style={{ lineHeight: 1.6 }}>
                    Prefer email for project discussions. I’m available for freelance and full-time roles.
                  </div>

                  {/* SEO-friendly structured data */}
                  <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Person",
                      name: "Santhosh Kumar",
email: CONTACT_EMAIL,
                      telephone: CONTACT_PHONE,
                      url: CONTACT_GITHUB_URL,
sameAs: [CONTACT_GITHUB_URL, CONTACT_LINKEDIN_URL],
                      jobTitle: "Frontend Developer",
                    }),
                  }} />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

