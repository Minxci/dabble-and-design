// Consistent heading: small eyebrow label, serif title, optional script accent.
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="text-xs font-bold tracking-[0.25em] text-teal uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
        {title}
        {accent && <span className="ml-2 font-script text-coral">{accent}</span>}
      </h2>
    </div>
  );
}