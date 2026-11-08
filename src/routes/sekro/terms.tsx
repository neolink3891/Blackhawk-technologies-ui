import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { termsIntro, termsSections } from "@/content/sekro/terms-en";
import { SEKRO_PATHS } from "@/lib/sekro-legal";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/sekro/terms")({
  head: () => ({
    meta: [
      { title: "Sekro Terms of Service — BlackHawk Technologies" },
      { name: "description", content: "The rules for using Sekro: eligibility, your passphrase, acceptable use, moderation and liability." },
      { property: "og:title", content: "Sekro Terms of Service — BlackHawk Technologies" },
      { property: "og:description", content: "The rules for using Sekro: eligibility, your passphrase, acceptable use, moderation and liability." },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/sekro/terms` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${SEKRO_PATHS.terms.en}` },
      { rel: "alternate", hrefLang: "es", href: `${SITE_URL}${SEKRO_PATHS.terms.es}` },
    ],
  }),
  component: () => (
    <LegalPage
      lang="en"
      title="Sekro Terms of Service"
      intro={termsIntro}
      sections={termsSections}
      alternate={{ href: SEKRO_PATHS.terms.es, label: "Leer en español" }}
      sibling={{ href: SEKRO_PATHS.privacy.en, label: "Privacy Policy" }}
    />
  ),
});
