// Site languages. English (UK) is the default and lives at the plain paths; Spanish (neutral Latin American,
// "tú") lives under /es with the same slugs: /about ↔ /es/about, /sekro/privacy ↔ /es/sekro/privacy.

import { SEKRO_HOME } from "@/lib/sekro";
import { SEKRO_PATHS } from "@/lib/sekro-legal";
import { SITE_URL } from "@/lib/site";

export type Lang = "en" | "es";
export const LANGS: readonly Lang[] = ["en", "es"];

/** <html lang> and hreflang values. */
export const HTML_LANG = { en: "en-GB", es: "es-419" } as const;
/** og:locale (Open Graph has no es_419; es_LA is its Latin American Spanish). */
export const OG_LOCALE = { en: "en_GB", es: "es_LA" } as const;

/** Every page that exists in both languages. */
export const PAGES = {
  home: { en: "/", es: "/es" },
  products: { en: "/products", es: "/es/products" },
  about: { en: "/about", es: "/es/about" },
  contact: { en: "/contact", es: "/es/contact" },
  sekro: SEKRO_HOME,
  sekroPrivacy: SEKRO_PATHS.privacy,
  sekroTerms: SEKRO_PATHS.terms,
  sekroDeleteAccount: SEKRO_PATHS.deleteAccount,
  sekroChildSafety: SEKRO_PATHS.childSafety,
} as const;

export type PageKey = keyof typeof PAGES;
export type PagePath = (typeof PAGES)[PageKey][Lang];

const normalise = (pathname: string) =>
  pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

export const langFromPath = (pathname: string): Lang => {
  const p = normalise(pathname);
  return p === "/es" || p.startsWith("/es/") ? "es" : "en";
};

/** The page at this path, if it's one of PAGES. */
export function pageAt(pathname: string): { key: PageKey; lang: Lang } | null {
  const p = normalise(pathname);
  for (const key of Object.keys(PAGES) as PageKey[]) {
    for (const lang of LANGS) if (PAGES[key][lang] === p) return { key, lang };
  }
  return null;
}

/** Canonical + hreflang alternates (en-GB, es-419, x-default → English) for a page. */
export function hreflangLinks(page: PageKey, lang: Lang) {
  return [
    { rel: "canonical", href: `${SITE_URL}${PAGES[page][lang]}` },
    ...LANGS.map((l) => ({
      rel: "alternate",
      hrefLang: HTML_LANG[l],
      href: `${SITE_URL}${PAGES[page][l]}`,
    })),
    { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}${PAGES[page].en}` },
  ];
}

/** A route's head(): title, description, Open Graph (with locale and URL), canonical and hreflang. */
export function pageHead({
  page,
  lang,
  title,
  description,
  ogTitle = title,
  ogDescription = description,
  meta = [],
}: {
  page: PageKey;
  lang: Lang;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  meta?: Record<string, string>[];
}) {
  const other: Lang = lang === "en" ? "es" : "en";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:url", content: `${SITE_URL}${PAGES[page][lang]}` },
      { property: "og:locale", content: OG_LOCALE[lang] },
      { property: "og:locale:alternate", content: OG_LOCALE[other] },
      ...meta,
    ],
    links: hreflangLinks(page, lang),
  };
}

// ----------------------------------------------------------------------------------------------------------------
// The visitor's choice (header/footer switcher). Remembered, never used to redirect: it only decides whether the
// "¿Prefieres español?" hint shows on English pages. Storage can be unavailable (private mode, blocked): ignore.

const PREF_KEY = "bht-lang";
const HINT_DISMISSED_KEY = "bht-lang-hint-dismissed";

export function saveLangPreference(lang: Lang) {
  try {
    localStorage.setItem(PREF_KEY, lang);
  } catch {
    /* storage unavailable */
  }
  try {
    document.cookie = `bht_lang=${lang}; path=/; max-age=31536000; samesite=lax`;
  } catch {
    /* cookies unavailable */
  }
}

export function readLangPreference(): Lang | null {
  try {
    const v = localStorage.getItem(PREF_KEY);
    return v === "en" || v === "es" ? v : null;
  } catch {
    return null;
  }
}

export function isLangHintDismissed(): boolean {
  try {
    return localStorage.getItem(HINT_DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

export function dismissLangHint() {
  try {
    localStorage.setItem(HINT_DISMISSED_KEY, "1");
  } catch {
    /* storage unavailable */
  }
}
