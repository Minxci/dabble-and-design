import Image from "next/image";
import { Shirt } from "lucide-react";

// Real photo when one exists, otherwise a soft tonal placeholder.
export default function ProductImage({
  src,
  alt,
  tone = "sand",
  className = "",
}: {
  src?: string;
  alt: string;
  tone?: "sand" | "teal" | "coral" | "sun" | "navy";
  className?: string;
}) {
  const tones = {
    sand: "from-sand to-paper text-navy/15",
    teal: "from-teal-soft to-paper text-teal/30",
    coral: "from-coral-soft to-paper text-coral/30",
    sun: "from-sun-soft to-paper text-sun/40",
    navy: "from-navy to-ink text-white/15",
  };
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 60vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Shirt className="size-1/4 stroke-[1.25]" aria-hidden />
          <span className="sr-only">{alt} (photo coming soon)</span>
        </div>
      )}
    </div>
  );
}