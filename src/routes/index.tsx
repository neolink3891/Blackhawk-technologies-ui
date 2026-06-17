import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Cloud, Code2, Handshake, Layers, Plug, Shield, ShieldCheck } from "lucide-react";
import { solutions } from "@/lib/solutions";
import { SolutionCard } from "@/components/site/SolutionCard";
import { DynamicHeroBanner } from "@/components/site/DynamicHeroBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BlackHawk Technologies — Intelligent software for modern businesses" },
      { name: "description", content: "BlackHawk Technologies designs and develops scalable software, mobile apps, AI tools, and business automation platforms for modern companies." },
      { property: "og:title", content: "BlackHawk Technologies" },
      { property: "og:description", content: "Building intelligent software for modern businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Dynamic Hero Banner */}
      <DynamicHeroBanner />

      {/* What we do */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Software that powers operations, products, and growth.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Code2, title: "Software Development", desc: "Designing and developing scalable web, mobile, and cloud-based applications." },
            { icon: Brain, title: "AI & Automation", desc: "Building intelligent systems that automate processes and improve decision-making." },
            { icon: Plug, title: "System Integration", desc: "Connecting platforms, services, and workflows through modern APIs and integrations." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border/60 bg-gradient-card p-7 transition-colors hover:border-primary/40">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Products */}
      <section className="border-y border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Our products</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Platforms built for ambitious teams.</h2>
            </div>
            <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow">
              See all solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 3).map((s) => (
              <SolutionCard key={s.name} solution={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Professional services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">End-to-end engineering expertise.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Code2,
              title: "Custom Software Development",
              items: ["Web Applications", "Mobile Applications", "Backend Systems", "SaaS Platforms"],
            },
            {
              icon: Brain,
              title: "AI & Automation",
              items: ["Workflow Automation", "Intelligent Assistants", "Data Processing", "AI Integration"],
            },
            {
              icon: Plug,
              title: "System Integration",
              items: ["API Development", "Third-Party Integrations", "Legacy System Modernisation", "Business Process Integration"],
            },
            {
              icon: Cloud,
              title: "Cloud Solutions",
              items: ["Cloud Architecture", "Infrastructure Design", "Secure Deployments", "Scalable Platforms"],
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-border/60 bg-gradient-card p-7 transition-colors hover:border-primary/40">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-t border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Why choose us</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Why businesses choose BlackHawk Technologies.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Reliable Solutions", desc: "Building software designed for long-term stability and performance." },
              { icon: Shield, title: "Security First", desc: "Security and data protection considered from day one." },
              { icon: Layers, title: "Scalable Architecture", desc: "Systems built to grow alongside businesses." },
              { icon: Handshake, title: "Partnership Approach", desc: "Long-term collaboration focused on delivering measurable value." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border/60 bg-gradient-card p-6">
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
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Have a project in mind?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Let's talk about how BlackHawk Technologies can help you design, build, or scale your next digital product.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
