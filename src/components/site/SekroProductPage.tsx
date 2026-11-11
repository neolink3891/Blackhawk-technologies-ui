import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Droplets,
  FileText,
  Image,
  KeyRound,
  LockKeyhole,
  type LucideIcon,
  MessageSquareLock,
  Mic,
  ScanEye,
  Share2,
  ShieldCheck,
  StickyNote,
  Trash2,
  UserCheck,
  Video,
  Smartphone,
  Play,
} from "lucide-react";
import type { Lang } from "@/components/site/LegalPage";
import { type FeatureKey, sekroProduct } from "@/content/sekro/product";
import { SEKRO_HOME, SEKRO_IMAGES, SEKRO_LINKS } from "@/lib/sekro";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

const stepIcons: LucideIcon[] = [UserCheck, LockKeyhole, Share2];
const hideIcons: LucideIcon[] = [Image, Video, Mic, FileText, StickyNote];
const featureIcons: Record<FeatureKey, LucideIcon> = {
  e2e: ShieldCheck,
  recipients: BadgeCheck,
  keys: KeyRound,
  contacts: MessageSquareLock,
  capture: ScanEye,
  watermark: Droplets,
  deleteEverywhere: Trash2,
};

/** Store badge: a link when the listing is live, otherwise a muted "Coming soon" tile. */
function StoreBadge({ href, top, name, icon: Icon, comingSoon }: {
  href: string;
  top: string;
  name: string;
  icon: LucideIcon;
  comingSoon: string;
}) {
  const inner = (
    <>
      <Icon className="h-6 w-6 shrink-0" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[11px] text-muted-foreground">{href ? top : comingSoon}</span>
        <span className="text-base font-semibold">{name}</span>
      </span>
    </>
  );
  const base = "inline-flex min-w-[11rem] items-center gap-3 rounded-xl border px-4 py-2.5";
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border-border bg-secondary/60 text-foreground transition-colors hover:border-primary/50`}
    >
      {inner}
    </a>
  ) : (
    <div aria-disabled="true" className={`${base} border-dashed border-border/70 text-muted-foreground opacity-80`}>
      {inner}
    </div>
  );
}

export function SekroProductPage({ lang }: { lang: Lang }) {
  const t = sekroProduct[lang];
  const other: Lang = lang === "en" ? "es" : "en";
  return (
    <div lang={lang}>
      {/* Hero */}
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex justify-end">
            <nav aria-label={t.languageLabel} className="flex rounded-md border border-border/60 p-0.5 text-xs font-medium">
              {(["en", "es"] as const).map((code) =>
                code === lang ? (
                  <span key={code} aria-current="page" className="rounded bg-secondary px-2.5 py-1 text-foreground">
                    {code.toUpperCase()}
                  </span>
                ) : (
                  <Link
                    key={code}
                    to={SEKRO_HOME[other]}
                    hrefLang={code}
                    aria-label={t.alternateLabel}
                    className="rounded px-2.5 py-1 text-muted-foreground hover:text-foreground"
                  >
                    {code.toUpperCase()}
                  </Link>
                ),
              )}
            </nav>
          </div>
          <div className="mt-6 flex flex-col items-start gap-8 md:flex-row md:items-center">
            <img
              src={SEKRO_IMAGES.icon}
              alt=""
              width={112}
              height={112}
              className="h-24 w-24 rounded-[22%] shadow-glow md:h-28 md:w-28"
            />
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">{t.eyebrow}</p>
              <h1 className="mt-2 text-5xl font-semibold tracking-tight md:text-6xl">Sekro</h1>
              <p className="mt-3 text-2xl font-medium text-gradient md:text-3xl">{t.tagline}</p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">{t.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <StoreBadge
              href={SEKRO_LINKS.appStore}
              top={t.badges.appStoreTop}
              name="App Store"
              icon={Smartphone}
              comingSoon={t.badges.comingSoon}
            />
            <StoreBadge
              href={SEKRO_LINKS.googlePlay}
              top={t.badges.googlePlayTop}
              name="Google Play"
              icon={Play}
              comingSoon={t.badges.comingSoon}
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.howTitle}</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {t.howSteps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <li key={s.title} className="rounded-2xl border border-border/60 bg-gradient-card p-7">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* What you can hide */}
      <section className="border-y border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.hideTitle}</h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.hideItems.map((h, i) => {
              const Icon = hideIcons[i];
              return (
                <li
                  key={h.title}
                  className="rounded-2xl border border-border/60 bg-gradient-card p-6 sm:last:col-span-2 lg:last:col-span-1"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-semibold">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.featuresTitle}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.features.map((f) => {
            const Icon = featureIcons[f.key];
            return (
              <div key={f.key} className="rounded-2xl border border-border/60 bg-gradient-card p-6 transition-colors hover:border-primary/40 md:last:col-span-2 lg:last:col-span-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-y border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.screenshotsTitle}</h2>
          <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
            {t.screenshots.map((s) => (
              <li key={s.file}>
                <figure>
                  <img
                    src={SEKRO_IMAGES.screenshot(lang, s.file)}
                    alt={s.alt}
                    width={590}
                    height={1278}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-3xl border border-border/60 shadow-elegant"
                  />
                  <figcaption className="mt-3 text-center text-sm text-muted-foreground">{s.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 18+ and links */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border/60 bg-gradient-card p-8">
          <div>
            <p className="font-semibold text-foreground">{t.ageNote}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.links.support}:{" "}
              <a href={`mailto:${SEKRO_LEGAL.supportEmail}`} className="text-primary hover:underline">
                {SEKRO_LEGAL.supportEmail}
              </a>
            </p>
          </div>
          <nav aria-label={t.linksTitle} className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { to: SEKRO_PATHS.privacy[lang], label: t.links.privacy },
              { to: SEKRO_PATHS.terms[lang], label: t.links.terms },
              { to: SEKRO_PATHS.deleteAccount[lang], label: t.links.deleteAccount },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                {l.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
