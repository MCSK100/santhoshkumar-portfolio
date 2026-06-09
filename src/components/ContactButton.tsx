interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = "" }: ContactButtonProps) {
  return (
    <button
      className={`rounded-full font-medium uppercase tracking-widest text-[#0C0C0C] cursor-pointer transition-transform duration-200 hover:scale-[1.03] ${className}`}
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #0C0C0C 100%)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
        outline: "2px solid #1a1a1a",
        outlineOffset: "-3px",
      }}
    >
      <span className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-block">
        Contact Me
      </span>
    </button>
  );
}
