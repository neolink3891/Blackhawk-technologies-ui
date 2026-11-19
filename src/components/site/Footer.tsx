import { Link } from "@tanstack/react-router";
import { Linkedin, Github, Twitter } from "lucide-react";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { siteCopy } from "@/content/site";
import { footerLogo } from "@/lib/brand-logo";
import { PAGES } from "@/lib/i18n";
import { navLinks } from "@/lib/nav";
import { useLang } from "@/lib/use-lang";

export function Footer() {
  const lang = useLang();
  const t = siteCopy[lang];
  const sekroLinks = [
    { to: PAGES.sekro[lang], label: t.footer.sekroLinks.about },
    { to: PAGES.sekroPrivacy[lang], label: t.footer.sekroLinks.privacy },
    { to: PAGES.sekroTerms[lang], label: t.footer.sekroLinks.terms },
    { to: PAGES.sekroDeleteAccount[lang], label: t.footer.sekroLinks.deleteAccount },
    { to: PAGES.sekroChildSafety[lang], label: t.footer.sekroLinks.childSafety },
  ];
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2">
          <Link to={PAGES.home[lang]} className="inline-flex">
            <img
              src={footerLogo.src}
              srcSet={footerLogo.srcSet}
              alt={t.logoAlt}
              width={footerLogo.width}
              height={footerLogo.height}
              className="h-11 w-auto"
              loading="lazy"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t.footer.tagline}</p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: "https://www.linkedin.com/", label: "LinkedIn", icon: Linkedin },
              { href: "https://github.com/", label: "GitHub", icon: Github },
              { href: "https://twitter.com/", label: "X (Twitter)", icon: Twitter },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">{t.footer.navigate}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks(lang).map((l) => (
              <li key={l.label}>
                <Link to={l.to} hash={l.hash} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">{t.footer.sekro}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {sekroLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">{t.footer.contact}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>contactus@bhtapp.com</li>
            <li>{t.footer.location}</li>
          </ul>
          <LanguageSwitcher className="mt-6 -ml-1.5" />
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground">
          © 2026 BlackHawk Technologies. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
