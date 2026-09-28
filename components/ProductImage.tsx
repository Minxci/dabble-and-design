import Image from "next/image";
import { Shirt } from "lucide-react";
import type { Tone } from "@/lib/data";

// Real photo when one exists, otherwise a soft placeholder in the brand colors.
export default function ProductImage({
  src,
  alt,
  tone = "cream",
  className = "",
  sizes = "(max-width: 768px) 60vw, 25vw",
  priority = false,
}: {
  src?: string;
  alt: string;
  tone?: Tone;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const tones = {
    cream: "from-[#f3e9da] to-paper text-navy/20",
    teal: "from-teal-soft to-paper text-teal/40",
    pink: "from-pink-soft to-paper text-coral/40",
    sun: "from-sun-soft to-paper text-sun",
    navy: "from-navy to-ink text-white/20",
  };
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Shirt className="size-1/4 stroke-[1.25]" aria-hidden />
          <span className="sr-only">{alt} (photo coming soon)</span>
        </div>
      )}
    </div>
  );
}