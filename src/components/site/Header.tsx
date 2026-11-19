import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LangHint } from "@/components/site/LangHint";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { siteCopy } from "@/content/site";
import { navIcon, navLogo, SM_UP } from "@/lib/brand-logo";
import { PAGES } from "@/lib/i18n";
import { navLinks } from "@/lib/nav";
import { useLang } from "@/lib/use-lang";

export function Header() {
  const [open, setOpen] = useState(false);
  const lang = useLang();
  const t = siteCopy[lang];
  const links = navLinks(lang);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to={PAGES.home[lang]} className="flex shrink-0 items-center">
          {/* Icon only below sm, full logo from sm up; one <picture>, so only the shown image is downloaded. */}
          <picture>
            <source
              media={SM_UP}
              srcSet={navLogo.srcSet}
              width={navLogo.width}
              height={navLogo.height}
            />
            <img
              src={navIcon.src}
              alt={t.logoAlt}
              width={navIcon.width}
              height={navIcon.height}
              className="h-12 w-12 sm:h-14 sm:w-auto"
            />
          </picture>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              activeProps={{ className: "text-foreground bg-secondary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              activeOptions={{ exact: true, includeHash: true }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher className="ml-2" />
          <Link
            to={PAGES.contact[lang]}
            className="ml-2 rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            {t.headerCta}
          </Link>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label={t.toggleMenu}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <LanguageSwitcher className="mt-2 px-1.5" onSwitch={() => setOpen(false)} />
          </nav>
        </div>
      )}
      <LangHint />
    </header>
  );
}
