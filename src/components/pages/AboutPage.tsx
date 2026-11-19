import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { aboutCopy } from "@/content/about";
import { type Lang, PAGES } from "@/lib/i18n";

export function AboutPage({ lang }: { lang: Lang }) {
  const t = aboutCopy[lang];
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">{t.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            {t.title[0]}
            <span className="text-gradient">{t.title[1]}</span>
            {t.title[2]}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">{t.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-border/60 bg-gradient-card p-10 shadow-elegant md:p-14">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            {t.mission.eyebrow}
          </p>
          <p className="mt-4 text-2xl font-medium leading-snug text-foreground md:text-3xl">
            {t.mission.quote}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            {t.values.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.values.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.values.items.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border/60 bg-gradient-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <v.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-8">
          <div>
            <h3 className="text-xl font-semibold">{t.cta.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.cta.body}</p>
          </div>
          <Link
            to={PAGES.contact[lang]}
            className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow"
          >
            {t.cta.button} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
