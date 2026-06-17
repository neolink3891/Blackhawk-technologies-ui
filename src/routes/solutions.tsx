import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/solutions";
import { SolutionCard } from "@/components/site/SolutionCard";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — BlackHawk Technologies" },
      { name: "description", content: "Explore software products and services by BlackHawk Technologies: HawkTrack, Atlas, GetMunching, Adhki Cogno, NeoLogger, custom software, and AI automation." },
      { property: "og:title", content: "Solutions — BlackHawk Technologies" },
      { property: "og:description", content: "Products and services we build — from workforce platforms to AI-powered automation." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Solutions</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Products and services for <span className="text-gradient">ambitious teams</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
            A growing portfolio of platforms, products, and engineering services — built to help businesses operate, scale, and automate with confidence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <SolutionCard key={s.name} solution={s} />
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-10 shadow-elegant md:p-14">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Custom solutions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Built bespoke for your <span className="text-gradient">operations</span>.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            In addition to our products, we help organisations build bespoke software tailored to their unique operational requirements.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}