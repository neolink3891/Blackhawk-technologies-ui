import { useRouterState } from "@tanstack/react-router";
import { type Lang, type PagePath, PAGES, htmlLangFor, langFromPath, pageAt } from "@/lib/i18n";

/** The current page's language, from its path (/es/… is Spanish). */
export const useLang = (): Lang =>
  useRouterState({ select: (s) => langFromPath(s.location.pathname) });

/** <html lang> for the current page: en-GB, es-419, or es-ES on the Sekro legal pages. */
export const useHtmlLang = (): string =>
  useRouterState({
    select: (s) => {
      const lang = langFromPath(s.location.pathname);
      return htmlLangFor(pageAt(s.location.pathname)?.key ?? null, lang);
    },
  });

/**
 * The same page in the other language, for the language switcher and the hint:
 * - a page in both languages → its counterpart;
 * - Sekro invite links (/sekro/add/…) → null: the invite page has its own switcher (?lang=);
 * - anything else (e.g. a 404) → the other language's home page.
 */
export function useAlternate(): {
  lang: Lang;
  other: Lang;
  to: PagePath;
  /** hreflang of the other-language page. */
  otherHtmlLang: string;
} | null {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = langFromPath(pathname);
  const other: Lang = lang === "en" ? "es" : "en";
  if (pathname.startsWith("/sekro/add/")) return null;
  const page = pageAt(pathname);
  return {
    lang,
    other,
    to: page ? PAGES[page.key][other] : PAGES.home[other],
    otherHtmlLang: htmlLangFor(page?.key ?? null, other),
  };
}
