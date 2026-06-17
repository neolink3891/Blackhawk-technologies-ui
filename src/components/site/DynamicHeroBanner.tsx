import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

function CircuitLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="h-[1px] w-8 bg-primary/20" />
      <span className="h-1 w-1 rounded-full bg-primary/30" />
      <span className="h-[1px] w-4 bg-primary/15" />
    </div>
  );
}

export function DynamicHeroBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-[#0d1117]" />

      {/* Animated gradient layer 1 — charcoal to navy */}
      <div
        className="absolute inset-0 animate-gradient-shift-1"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 30% 20%, rgba(30,41,59,0.6), transparent 70%), radial-gradient(ellipse 100% 90% at 80% 80%, rgba(15,23,42,0.5), transparent 60%)",
        }}
      />

      {/* Animated gradient layer 2 — deep navy to graphite */}
      <div
        className="absolute inset-0 animate-gradient-shift-2"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 70% 30%, rgba(51,65,85,0.35), transparent 65%), radial-gradient(ellipse 110% 100% at 20% 70%, rgba(30,41,59,0.4), transparent 55%)",
        }}
      />

      {/* Animated gradient layer 3 — subtle cyan/blue accents */}
      <div
        className="absolute inset-0 animate-gradient-shift-3"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(56,189,248,0.06), transparent 70%), radial-gradient(ellipse 50% 40% at 85% 15%, rgba(14,165,233,0.05), transparent 60%)",
        }}
      />

      {/* Soft vignette for text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(13,17,23,0.7)_100%)]" />

      {/* Floating orbs — very subtle, slow drift */}
      <div className="absolute top-[10%] left-[5%] h-64 w-64 rounded-full bg-slate-700/[0.08] blur-3xl animate-orb-drift-1" />
      <div className="absolute bottom-[15%] right-[8%] h-80 w-80 rounded-full bg-slate-600/[0.06] blur-3xl animate-orb-drift-2" />
      <div className="absolute top-[40%] right-[25%] h-48 w-48 rounded-full bg-sky-900/[0.05] blur-3xl animate-orb-drift-3" />

      {/* Glass reflection panels */}
      <div className="absolute top-12 right-[12%] h-56 w-36 rotate-12 rounded-3xl border border-white/[0.04] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm animate-glass-float-1" />
      <div className="absolute bottom-20 left-[8%] h-36 w-28 -rotate-6 rounded-2xl border border-white/[0.03] bg-gradient-to-t from-white/[0.02] to-transparent backdrop-blur-sm animate-glass-float-2" />

      {/* Circuit-inspired details */}
      <CircuitLine className="absolute top-28 right-[28%] rotate-90 opacity-60" />
      <CircuitLine className="absolute bottom-36 left-[16%] opacity-60" />
      <div className="absolute top-16 left-[38%] flex flex-col items-center gap-1 opacity-50">
        <span className="h-5 w-[1px] bg-white/10" />
        <span className="h-1.5 w-1.5 rounded-full border border-white/15 bg-transparent" />
        <span className="h-3 w-[1px] bg-white/8" />
      </div>
      <div className="absolute bottom-28 right-[20%] flex flex-col items-center gap-1 opacity-50">
        <span className="h-3 w-[1px] bg-white/8" />
        <span className="h-1 w-1 rounded-full bg-white/12" />
        <span className="h-5 w-[1px] bg-white/10" />
      </div>

      {/* Horizontal accent lines */}
      <div className="absolute top-1/2 left-0 h-[1px] w-[10%] bg-gradient-to-r from-transparent to-white/6" />
      <div className="absolute top-1/2 right-0 h-[1px] w-[10%] bg-gradient-to-l from-transparent to-white/6" />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">

          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Intelligent Hardware for{" "}
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-slate-300 bg-clip-text text-transparent">
              Connected Environments
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)]">
            BlackHawk Technologies designs smart devices, privacy systems, and connected hardware solutions that bring digital control into physical spaces.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-[#0d1117] shadow-[0_0_40px_-8px_rgba(255,255,255,0.2)] transition-all hover:shadow-[0_0_60px_-8px_rgba(255,255,255,0.3)] hover:scale-[1.02]"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
