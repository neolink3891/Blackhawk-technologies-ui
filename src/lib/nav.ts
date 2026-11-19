import { HOME_ANCHORS } from "@/content/home";
import { siteCopy } from "@/content/site";
import { type Lang, type PagePath, PAGES } from "@/lib/i18n";

/** Main navigation (header and footer); "Services" is the custom software & AI sections on the home page. */
export const navLinks = (lang: Lang): { to: PagePath; hash?: string; label: string }[] => {
  const t = siteCopy[lang].nav;
  return [
    { to: PAGES.home[lang], label: t.home },
    { to: PAGES.products[lang], label: t.products },
    { to: PAGES.home[lang], hash: HOME_ANCHORS.services, label: t.services },
    { to: PAGES.about[lang], label: t.about },
    { to: PAGES.contact[lang], label: t.contact },
  ];
};
