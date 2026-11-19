import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { HTML_LANG, LANGS, PAGES, type PageKey } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

// Every page in both languages, each with its hreflang alternates (en-GB, es-419, x-default → English).
const PAGE_SETTINGS: Record<PageKey, { changefreq: string; priority: string }> = {
  home: { changefreq: "weekly", priority: "1.0" },
  products: { changefreq: "monthly", priority: "0.9" },
  about: { changefreq: "monthly", priority: "0.8" },
  contact: { changefreq: "yearly", priority: "0.7" },
  sekro: { changefreq: "monthly", priority: "0.8" },
  sekroPrivacy: { changefreq: "yearly", priority: "0.5" },
  sekroTerms: { changefreq: "yearly", priority: "0.5" },
  sekroDeleteAccount: { changefreq: "yearly", priority: "0.5" },
  sekroChildSafety: { changefreq: "yearly", priority: "0.5" },
};

function sitemapXml() {
  const urls = (Object.keys(PAGES) as PageKey[]).flatMap((key) => {
    const alternates = [
      ...LANGS.map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${HTML_LANG[l]}" href="${SITE_URL}${PAGES[key][l]}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${PAGES[key].en}"/>`,
    ].join("\n");
    const { changefreq, priority } = PAGE_SETTINGS[key];
    return LANGS.map(
      (lang) =>
        `  <url>\n    <loc>${SITE_URL}${PAGES[key][lang]}</loc>\n${alternates}\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    );
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(sitemapXml(), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        }),
    },
  },
});
