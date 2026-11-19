import { createFileRoute } from "@tanstack/react-router";
import { hreflangLinks, OG_LOCALE } from "@/lib/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { termsIntro, termsSections } from "@/content/sekro/terms-en";
import { SEKRO_PATHS } from "@/lib/sekro-legal";

export const Route = createFileRoute("/sekro/terms")({
  head: () => ({
    meta: [
      { property: "og:locale", content: OG_LOCALE.en },
      { title: "Sekro Terms of Service — BlackHawk Technologies" },
      {
        name: "description",
        content:
          "The rules for using Sekro: eligibility, your passphrase, acceptable use, moderation and liability.",
      },
      { property: "og:title", content: "Sekro Terms of Service — BlackHawk Technologies" },
      {
        property: "og:description",
        content:
          "The rules for using Sekro: eligibility, your passphrase, acceptable use, moderation and liability.",
      },
    ],
    links: hreflangLinks("sekroTerms", "en"),
  }),
  component: () => (
    <LegalPage
      lang="en"
      title="Sekro Terms of Service"
      intro={termsIntro}
      sections={termsSections}
      alternate={{ href: SEKRO_PATHS.terms.es, label: "Leer en español" }}
      siblings={[
        { href: SEKRO_PATHS.privacy.en, label: "Privacy Policy" },
        { href: SEKRO_PATHS.deleteAccount.en, label: "Delete your account" },
      ]}
    />
  ),
});
