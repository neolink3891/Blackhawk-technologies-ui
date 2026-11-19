import { Link } from "@tanstack/react-router";
import { siteCopy } from "@/content/site";
import { LANGS, saveLangPreference } from "@/lib/i18n";
import { useAlternate } from "@/lib/use-lang";

/** "EN | ES": the current language, and a link to this page in the other one. The choice is remembered (it only
 *  affects the "¿Prefieres español?" hint); nothing redirects on it. */
export function LanguageSwitcher({
  className = "",
  onSwitch,
}: {
  className?: string;
  onSwitch?: () => void;
}) {
  const alt = useAlternate();
  if (!alt) return null;
  const t = siteCopy[alt.lang].language;
  return (
    <nav aria-label={t.label} className={`flex items-center text-xs font-semibold ${className}`}>
      {LANGS.map((code, i) => (
        <span key={code} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="px-1.5 text-muted-foreground/50">
              |
            </span>
          )}
          {code === alt.lang ? (
            <span aria-current="true" className="rounded px-1.5 py-1 text-foreground">
              {code.toUpperCase()}
            </span>
          ) : (
            <Link
              to={alt.to}
              hrefLang={alt.otherHtmlLang}
              lang={alt.otherHtmlLang}
              aria-label={t.switchTo}
              onClick={() => {
                saveLangPreference(code);
                onSwitch?.();
              }}
              className="rounded px-1.5 py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              {code.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
