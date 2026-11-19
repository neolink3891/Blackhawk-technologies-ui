import { Link, useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { langHint } from "@/content/site";
import {
  HTML_LANG,
  PAGES,
  dismissLangHint,
  isLangHintDismissed,
  pageAt,
  readLangPreference,
  saveLangPreference,
} from "@/lib/i18n";

/**
 * A small, dismissible "¿Prefieres español?" link on English pages that exist in Spanish, for visitors whose saved
 * choice is Spanish or (with no saved choice) whose browser's first language is Spanish. Never redirects. Decided
 * in the browser after hydration, so the server HTML (and what search engines see) is the same for everyone.
 */
export function LangHint() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const page = pageAt(pathname);
  const englishPage = page?.lang === "en" ? page.key : null;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!englishPage || isLangHintDismissed()) return setShow(false);
    const pref = readLangPreference();
    const browserEs = (navigator.languages?.[0] ?? navigator.language ?? "")
      .toLowerCase()
      .startsWith("es");
    setShow(pref === "es" || (pref === null && browserEs));
  }, [englishPage]);

  if (!show || !englishPage) return null;
  return (
    <div lang={HTML_LANG.es} className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-3 px-6 py-1.5 text-xs">
        <span className="text-muted-foreground">{langHint.question}</span>
        <Link
          to={PAGES[englishPage].es}
          hrefLang={HTML_LANG.es}
          onClick={() => saveLangPreference("es")}
          className="font-medium text-primary hover:text-primary-glow"
        >
          {langHint.link}
        </Link>
        <button
          type="button"
          onClick={() => {
            dismissLangHint();
            setShow(false);
          }}
          aria-label={langHint.dismiss}
          className="rounded p-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
