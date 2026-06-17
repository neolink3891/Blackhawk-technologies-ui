import type { Solution } from "@/lib/solutions";
import { ArrowRight, Check } from "lucide-react";

const statusStyles: Record<Solution["status"], string> = {
  Available: "bg-primary/15 text-primary border-primary/30",
  "In Development": "bg-amber-500/10 text-amber-300 border-amber-500/30",
  "Coming Soon": "bg-muted text-muted-foreground border-border",
};

export function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
      <div className="flex items-center justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[solution.status]}`}>
          {solution.status}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{solution.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
      {solution.features && solution.features.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {solution.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      <button className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-glow">
        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </article>
  );
}