import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Play } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

import type { Lang } from "@/components/site/LegalPage";
import { AppStoreBadge, StoreBadge } from "@/components/site/SekroProductPage";
import { sekroInvite } from "@/content/sekro/invite";
import { SEKRO_HOME, SEKRO_IMAGES, SEKRO_LINKS } from "@/lib/sekro";
import {
  googlePlayInviteUrl,
  type InvitePlatform,
  inviteUrl,
  openInAppUrl,
} from "@/lib/sekro-invite";

/** How long the iPhone page waits for the app to open before going to the App Store. */
const IOS_REDIRECT_MS = 1500;

function LanguageSwitch({ lang, label }: { lang: Lang; label: string }) {
  return (
    <nav
      aria-label={label}
      className="flex rounded-md border border-border/60 p-0.5 text-xs font-medium"
    >
      {(["en", "es"] as const).map((code) =>
        code === lang ? (
          <span
            key={code}
            aria-current="page"
            className="rounded bg-secondary px-2.5 py-1 text-foreground"
          >
            {code.toUpperCase()}
          </span>
        ) : (
          <Link
            key={code}
            to="."
            search={{ lang: code }}
            replace
            hrefLang={code}
            className="rounded px-2.5 py-1 text-muted-foreground hover:text-foreground"
          >
            {code.toUpperCase()}
          </Link>
        ),
      )}
    </nav>
  );
}

function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = sekroInvite[lang];
  return (
    <div lang={lang} className="bg-gradient-hero">
      <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col px-4 py-10 sm:px-6 md:py-16">
        <div className="flex justify-end">
          <LanguageSwitch lang={lang} label={t.languageLabel} />
        </div>
        <div className="mt-6 rounded-2xl border border-border/60 bg-gradient-card p-6 text-center shadow-glow sm:p-10">
          {children}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {t.ageNote}{" "}
          <Link
            to={SEKRO_HOME[lang]}
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            {t.learnMore} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </p>
      </div>
    </div>
  );
}

function OpenInSekro({
  platform,
  username,
  label,
}: {
  platform: "ios" | "android";
  username: string;
  label: string;
}) {
  return (
    <a
      href={openInAppUrl(platform, username)}
      className="inline-flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-border bg-secondary/60 px-5 font-medium text-foreground transition-colors hover:border-primary/50"
    >
      <ExternalLink className="h-4 w-4" />
      {label}
    </a>
  );
}

export function SekroInvitePage({
  lang,
  username,
  platform: initialPlatform,
}: {
  lang: Lang;
  username: string;
  platform: InvitePlatform;
}) {
  const t = sekroInvite[lang];
  const [platform, setPlatform] = useState(initialPlatform);
  const [redirecting, setRedirecting] = useState(false);

  // iPadOS Safari sends a Mac user agent, so the server sees "desktop"; a touch screen tells them apart.
  useEffect(() => {
    if (
      platform === "desktop" &&
      navigator.platform === "MacIntel" &&
      navigator.maxTouchPoints > 1
    ) {
      setPlatform("ios");
    }
  }, [platform]);

  // iPhone / iPad: if the app didn't open (the page is still in front after ~1.5s), go to the App Store, once per
  // visit (coming back from the App Store doesn't redirect again).
  useEffect(() => {
    if (platform !== "ios") return;
    const key = `sekro-invite-redirected:${username}`;
    try {
      if (sessionStorage.getItem(key)) return;
    } catch {
      /* storage unavailable: redirect anyway */
    }
    let cancelled = false;
    const cancel = () => {
      if (document.visibilityState === "hidden") cancelled = true;
    };
    const onPageHide = () => {
      cancelled = true;
    };
    document.addEventListener("visibilitychange", cancel);
    window.addEventListener("pagehide", onPageHide);
    setRedirecting(true);
    const timer = window.setTimeout(() => {
      if (cancelled || document.visibilityState === "hidden") return;
      try {
        sessionStorage.setItem(key, "1");
      } catch {
        /* ignore */
      }
      window.location.href = SEKRO_LINKS.appStore;
    }, IOS_REDIRECT_MS);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", cancel);
      window.removeEventListener("pagehide", onPageHide);
    };
  }, [platform, username]);

  const appStore = (href: string) => (
    <AppStoreBadge
      href={href}
      src={SEKRO_IMAGES.appStoreBadge[lang]}
      alt={t.appStoreButton}
      newTab={t.newTab}
    />
  );
  const googlePlay = (
    <StoreBadge
      href={googlePlayInviteUrl(username)}
      top={t.googlePlayTop}
      name="Google Play"
      icon={Play}
      comingSoon=""
    />
  );

  return (
    <Shell lang={lang}>
      <img
        src={SEKRO_IMAGES.icon}
        alt=""
        width={88}
        height={88}
        className="mx-auto h-20 w-20 rounded-[22%] shadow-glow sm:h-22 sm:w-22"
      />
      <h1 className="mt-6 text-2xl font-semibold tracking-tight break-words sm:text-3xl">
        <span className="text-gradient">@{username}</span> {t.invitedYou}
      </h1>
      <p className="mt-3 text-muted-foreground">{t.summary}</p>
      <p className="mt-2 font-medium text-foreground">{t.getApp(username)}</p>

      {platform === "ios" && (
        <div className="mt-8 flex flex-col items-center gap-4">
          {appStore(SEKRO_LINKS.appStore)}
          <p aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
            {redirecting ? t.redirecting : ""}
          </p>
          <p className="text-sm text-muted-foreground">{t.alreadyInstalled}</p>
          <OpenInSekro platform="ios" username={username} label={t.openInSekro} />
        </div>
      )}

      {platform === "android" && (
        <div className="mt-8 flex flex-col items-center gap-4">
          {googlePlay}
          <p className="mt-2 text-sm text-muted-foreground">{t.alreadyInstalled}</p>
          <OpenInSekro platform="android" username={username} label={t.openInSekro} />
        </div>
      )}

      {platform === "desktop" && (
        <>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {appStore(SEKRO_LINKS.appStore)}
            {googlePlay}
          </div>
          <div className="mt-10 border-t border-border/60 pt-8">
            <h2 className="text-lg font-semibold">{t.scanTitle}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t.scanBody}</p>
            <div className="mx-auto mt-5 w-fit rounded-xl bg-white p-3">
              <QRCodeSVG
                value={inviteUrl(username)}
                size={176}
                level="M"
                marginSize={2}
                bgColor="#ffffff"
                fgColor="#000000"
                role="img"
                aria-label={t.qrAlt(username)}
              />
            </div>
            <p className="mt-3 font-mono text-xs break-all text-muted-foreground">
              {inviteUrl(username)}
            </p>
          </div>
        </>
      )}
    </Shell>
  );
}

export function SekroInviteInvalid({ lang }: { lang: Lang }) {
  const t = sekroInvite[lang];
  return (
    <Shell lang={lang}>
      <img
        src={SEKRO_IMAGES.icon}
        alt=""
        width={88}
        height={88}
        className="mx-auto h-20 w-20 rounded-[22%]"
      />
      <h1 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">{t.invalidTitle}</h1>
      <p className="mt-3 text-muted-foreground">{t.invalidBody}</p>
    </Shell>
  );
}
