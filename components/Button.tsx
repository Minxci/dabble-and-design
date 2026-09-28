import Link from "next/link";
import { ArrowRight } from "lucide-react";

const styles = {
  coral: "bg-coral text-white hover:brightness-95",
  teal: "bg-teal text-white hover:brightness-95",
  sun: "bg-sun text-navy hover:brightness-95",
  navy: "bg-navy text-white hover:bg-ink",
};

export default function Button({
  href,
  children,
  variant = "coral",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 font-extrabold shadow-sm transition ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}