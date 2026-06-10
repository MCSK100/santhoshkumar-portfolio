import GlassCTAButton from "./cta/GlassCTAButton";

interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = "" }: ContactButtonProps) {
  return (
    <GlassCTAButton className={className} variant="primary">
      Contact Me
    </GlassCTAButton>
  );
}

