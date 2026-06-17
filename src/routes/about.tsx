import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, ShieldCheck, Wrench, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BlackHawk Technologies" },
      { name: "description", content: "BlackHawk Technologies is a UK-based software company focused on building reliable, scalable, and intelligent software systems." },
      { property: "og:title", content: "About BlackHawk Technologies" },
      { property: "og:description", content: "A software company focused on reliable, scalable, and intelligent digital systems." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Lightbulb, title: "Practical Innovation", desc: "Building technology that solves real business challenges." },
  { icon: Wrench, title: "Quality Engineering", desc: "Delivering maintainable, scalable, and reliable systems." },
  { icon: ShieldCheck, title: "Security & Trust", desc: "Developing solutions with security and resilience at their core." },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "Always evolving technology, processes, and products." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">About us</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            About <span className="text-gradient">BlackHawk Technologies</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
            BlackHawk Technologies is a software development company focused on creating intelligent digital solutions that help organisations streamline operations, improve efficiency, and embrace innovation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-border/60 bg-gradient-card p-10 shadow-elegant md:p-14">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Our mission</p>
          <p className="mt-4 text-2xl font-medium leading-snug text-foreground md:text-3xl">
            "To transform business ideas into robust, intelligent, and scalable digital products."
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">What we value</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Principles that shape how we build.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border/60 bg-gradient-card p-6 transition-colors hover:border-primary/40">
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
            <h3 className="text-xl font-semibold">Ready to work together?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Tell us about your project and we'll get back to you.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}