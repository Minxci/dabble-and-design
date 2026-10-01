export type LegalSection = { title: string; body?: string[]; list?: string[] };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="site-x py-12">
      <article className="mx-auto max-w-3xl">
        <h1 className="font-script text-5xl text-navy">{title}</h1>
        <p className="mt-2 text-sm text-ink">Last Updated: {updated}</p>
        <p className="mt-6 text-ink">{intro}</p>

        {sections.map((s) => (
          <section key={s.title} className="mt-8">
            <h2 className="font-script text-3xl text-coral">{s.title}</h2>
            {s.body?.map((p) => (
              <p key={p} className="mt-3 text-ink">{p}</p>
            ))}
            {s.list && (
              <ul className="mt-3 list-disc space-y-1 pl-6 text-ink">
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <p className="mt-10 font-semibold text-navy">
          Dabble &amp; Design Co.
          <br />
          Moline, Illinois
        </p>
      </article>
    </main>
  );
}