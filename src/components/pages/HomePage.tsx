import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { DynamicHeroBanner } from "@/components/site/DynamicHeroBanner";
import { HomeProductCard } from "@/components/site/HomeProductCard";
import { HOME_ANCHORS, homeCopy } from "@/content/home";
import { type Lang, PAGES } from "@/lib/i18n";

/** Sections the hero and the nav link to; scroll-mt clears the sticky header. */
const anchorSection = "scroll-mt-20";

export function HomePage({ lang }: { lang: Lang }) {
  const t = homeCopy[lang];
  return (
    <>
      <DynamicHeroBanner lang={lang} hero={t.hero} />

      {/* 1. Our products */}
      <section
        id={HOME_ANCHORS.products}
        className={`${anchorSection} border-b border-border/60 bg-secondary/20`}
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                {t.products.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {t.products.title}
              </h2>
            </div>
            <Link
              to={PAGES.products[lang]}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow"
            >
              {t.products.seeAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.products.items.map((p) => (
              <HomeProductCard key={p.name} lang={lang} copy={t.products} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Custom software & consultancy */}
      <section
        id={HOME_ANCHORS.services}
        className={`${anchorSection} mx-auto max-w-7xl px-6 py-20`}
      >
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.services.intro}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.services.items.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border/60 bg-gradient-card p-7 transition-colors hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AI for your business */}
      <section
        id={HOME_ANCHORS.ai}
        className={`${anchorSection} border-y border-border/60 bg-secondary/20`}
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t.ai.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{t.ai.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.ai.intro}</p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.ai.steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border/60 bg-gradient-card p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                    <step.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{i + 1}</span>
                </div>
                <h3 className="mt-5 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose us */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t.why.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.why.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border/60 bg-gradient-card p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-10 text-center shadow-elegant md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.72_0.18_240/0.2),transparent_60%)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.cta.body}</p>
            <Link
              to={PAGES.contact[lang]}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              {t.cta.button} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
