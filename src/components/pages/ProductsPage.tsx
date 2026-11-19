import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SolutionCard } from "@/components/site/SolutionCard";
import { HOME_ANCHORS } from "@/content/home";
import { productsCopy, solutionsFor } from "@/content/products";
import { siteCopy } from "@/content/site";
import { type Lang, PAGES } from "@/lib/i18n";

export function ProductsPage({ lang }: { lang: Lang }) {
  const t = productsCopy[lang];
  const labels = { status: t.status, learnMore: t.learnMore, newTab: siteCopy[lang].newTab };
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutionsFor(lang)
            .filter((s) => !s.hidden)
            .map((s) => (
              <SolutionCard key={s.name} solution={s} lang={lang} labels={labels} />
            ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-10 shadow-elegant md:p-14">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            {t.custom.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.custom.title[0]}
            <span className="text-gradient">{t.custom.title[1]}</span>
            {t.custom.title[2]}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t.custom.body}</p>
          <Link
            to={PAGES.home[lang]}
            hash={HOME_ANCHORS.services}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow"
          >
            {t.custom.button} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
