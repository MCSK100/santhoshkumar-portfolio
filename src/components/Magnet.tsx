import { useRef, useState, useCallback, type ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0px)");
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance =
        Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < maxDistance) {
        setIsActive(true);
        setTransform(
          `translate3d(${dx / strength}px, ${dy / strength}px, 0px)`
        );
      } else {
        setIsActive(false);
        setTransform("translate3d(0px, 0px, 0px)");
      }
    },
    [padding, strength]
  );

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
    setTransform("translate3d(0px, 0px, 0px)");
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        willChange: "transform",
        transform,
        transition: isActive
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
