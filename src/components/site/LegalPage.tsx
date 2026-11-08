import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

export type Lang = "en" | "es";
export type SekroPath = (typeof SEKRO_PATHS)[keyof typeof SEKRO_PATHS][Lang];

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  lang: Lang;
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
  /** The same document in the other language. */
  alternate: { href: SekroPath; label: string };
  /** The other Sekro document in this language. */
  sibling: { href: SekroPath; label: string };
}

const labels = {
  en: { eyebrow: "Sekro", updated: "Last updated", contents: "Contents", language: "Language" },
  es: { eyebrow: "Sekro", updated: "Última actualización", contents: "Contenido", language: "Idioma" },
};

/** Long-form legal document page (Sekro Privacy Policy / Terms), styled like the rest of the site. */
export function LegalPage({ lang, title, intro, sections, alternate, sibling }: LegalPageProps) {
  const t = labels[lang];
  return (
    <div lang={lang}>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">{t.eyebrow}</p>
            <nav aria-label={t.language} className="flex rounded-md border border-border/60 p-0.5 text-xs font-medium">
              {(["en", "es"] as const).map((code) =>
                code === lang ? (
                  <span key={code} aria-current="page" className="rounded bg-secondary px-2.5 py-1 text-foreground">
                    {code.toUpperCase()}
                  </span>
                ) : (
                  <Link
                    key={code}
                    to={alternate.href}
                    hrefLang={code}
                    aria-label={alternate.label}
                    className="rounded px-2.5 py-1 text-muted-foreground hover:text-foreground"
                  >
                    {code.toUpperCase()}
                  </Link>
                ),
              )}
            </nav>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {t.updated}: {SEKRO_LEGAL.lastUpdated[lang]}
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground md:text-lg">{intro}</div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <nav
          aria-label={t.contents}
          className="rounded-2xl border border-border/60 bg-gradient-card p-6 md:p-8"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">{t.contents}</h2>
          <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-foreground">
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mt-14 space-y-14">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">
                {i + 1}. {s.title}
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{s.body}</div>
            </section>
          ))}
        </article>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-8">
          <p className="text-sm text-muted-foreground">
            {SEKRO_LEGAL.company} ·{" "}
            <a href={`mailto:${SEKRO_LEGAL.supportEmail}`} className="text-primary hover:underline">
              {SEKRO_LEGAL.supportEmail}
            </a>
          </p>
          <Link to={sibling.href} className="text-sm font-medium text-primary hover:underline">
            {sibling.label} →
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Small building blocks so the documents read cleanly. */
export function H3({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 text-lg font-semibold text-foreground">{children}</h3>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6 marker:text-primary">{children}</ul>;
}

export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

export function Mail() {
  return (
    <a href={`mailto:${SEKRO_LEGAL.supportEmail}`} className="text-primary hover:underline">
      {SEKRO_LEGAL.supportEmail}
    </a>
  );
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const internal = href.startsWith("/") || href.startsWith("#");
  return (
    <a
      href={href}
      className="text-primary hover:underline"
      {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
