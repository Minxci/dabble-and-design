import { socials } from "@/lib/data";

const icons = {
  facebook: (
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" fill="currentColor" />
  ),
  etsy: (
    <path d="M8 5h8.5l.3 3h-1c-.4-1.3-1-1.8-2.6-1.8h-2.4v4.6h2c1.3 0 1.6-.4 1.8-1.5h1v4.4h-1c-.2-1.1-.5-1.6-1.8-1.6h-2v4.2c0 1.1.6 1.4 1.8 1.4h1.3c1.6 0 2.2-.6 2.9-2.3h1l-.4 3.6H8v-1c1.1-.1 1.3-.4 1.3-1.4V7.4c0-1-.2-1.2-1.3-1.4V5z" fill="currentColor" />
  ),
};

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {(Object.keys(icons) as (keyof typeof icons)[]).map((name) => (
        
          <a key={name}
          href={socials[name]}
          aria-label={name[0].toUpperCase() + name.slice(1)}
          className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-navy"
        >
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
            {icons[name]}
          </svg>
        </a>
      ))}
    </div>
  );
}