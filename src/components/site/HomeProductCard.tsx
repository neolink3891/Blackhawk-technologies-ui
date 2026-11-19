import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  AppStoreBadge,
  BADGE_ROW_GAP_SM,
  GooglePlayBadge,
} from "@/components/site/SekroProductPage";
import { type HomeProduct, productsSection as t } from "@/content/home";
import { SEKRO_IMAGES, SEKRO_LINKS } from "@/lib/sekro";
import { sekroProduct } from "@/content/sekro/product";

const linkClass =
  "inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-glow";

/** A product on the home page: name, one-line value, who it's for, platforms/status and a link. */
export function HomeProductCard({ product: p }: { product: HomeProduct }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-card p-5 shadow-elegant sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
      <div className="flex items-center justify-between">
        <img
          src={p.image}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 rounded-xl shadow-glow"
        />
        <span className="rounded-full border border-primary/30 bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
          {p.status}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{p.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{p.value}</p>
      <div className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground/80">{t.forLabel}: </span>
          {p.audience}
        </p>
        <p>{p.platforms}</p>
      </div>
      {p.storeBadges && (
        <div className={`mt-5 flex flex-wrap items-center ${BADGE_ROW_GAP_SM}`}>
          <AppStoreBadge
            small
            href={SEKRO_LINKS.appStore}
            src={SEKRO_IMAGES.appStoreBadge.en}
            alt={sekroProduct.en.badges.appStoreAlt}
            newTab={t.newTab}
          />
          <GooglePlayBadge
            small
            href={SEKRO_LINKS.googlePlay}
            src={SEKRO_IMAGES.googlePlayBadge.en}
            alt={sekroProduct.en.badges.googlePlayAlt}
            newTab={t.newTab}
          />
        </div>
      )}
      <div className="mt-5">
        {"to" in p.link ? (
          <Link to={p.link.to} className={linkClass}>
            {t.learnMore}
            <span className="sr-only"> about {p.name}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <a href={p.link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {t.learnMore}
            <span className="sr-only">
              {" "}
              about {p.name} ({t.newTab})
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
