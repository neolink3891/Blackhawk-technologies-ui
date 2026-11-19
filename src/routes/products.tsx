import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/solutions";
import { SolutionCard } from "@/components/site/SolutionCard";
import { HOME_ANCHORS } from "@/content/home";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — BlackHawk Technologies" },
      {
        name: "description",
        content:
          "Software products by BlackHawk Technologies: Sekro, HawkSells and HawkTrack, plus Atlas and GetMunching in the works. We also build custom software and help businesses adopt AI.",
      },
      { property: "og:title", content: "Products — BlackHawk Technologies" },
      {
        property: "og:description",
        content:
          "Sekro, HawkSells and HawkTrack: software products built and run by BlackHawk Technologies.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Products</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Software we <span className="text-gradient">build and run</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Our own products, live today, and what we're building next. Need something that doesn't
            exist yet? We build that too.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions
            .filter((s) => !s.hidden)
            .map((s) => (
              <SolutionCard key={s.name} solution={s} />
            ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-10 shadow-elegant md:p-14">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Custom software & AI
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Built bespoke for your <span className="text-gradient">operations</span>.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Beyond our own products, we offer consultancy, build custom software to order, and help
            businesses bring AI into their everyday processes.
          </p>
          <Link
            to="/"
            hash={HOME_ANCHORS.services}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow"
          >
            See our services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
