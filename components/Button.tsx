import Link from "next/link";
import { ArrowRight } from "lucide-react";

const styles = {
  primary: "bg-navy text-paper hover:bg-ink",
  coral: "bg-coral text-white hover:brightness-95",
  teal: "bg-teal text-white hover:brightness-95",
  outline: "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-paper",
  light: "bg-paper text-navy hover:bg-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
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
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold tracking-wide transition duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}