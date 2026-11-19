import { createFileRoute } from "@tanstack/react-router";
import { hreflangLinks, OG_LOCALE } from "@/lib/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyIntro, privacySections } from "@/content/sekro/privacy-en";
import { SEKRO_PATHS } from "@/lib/sekro-legal";

export const Route = createFileRoute("/sekro/privacy")({
  head: () => ({
    meta: [
      { property: "og:locale", content: OG_LOCALE.en },
      { title: "Sekro Privacy Policy — BlackHawk Technologies" },
      {
        name: "description",
        content:
          "What Sekro collects, what it can't see (your end-to-end encrypted content), and your rights.",
      },
      { property: "og:title", content: "Sekro Privacy Policy — BlackHawk Technologies" },
      {
        property: "og:description",
        content:
          "What Sekro collects, what it can't see (your end-to-end encrypted content), and your rights.",
      },
    ],
    links: hreflangLinks("sekroPrivacy", "en"),
  }),
  component: () => (
    <LegalPage
      lang="en"
      title="Sekro Privacy Policy"
      intro={privacyIntro}
      sections={privacySections}
      alternate={{ href: SEKRO_PATHS.privacy.es, label: "Leer en español" }}
      siblings={[
        { href: SEKRO_PATHS.terms.en, label: "Terms of Service" },
        { href: SEKRO_PATHS.deleteAccount.en, label: "Delete your account" },
      ]}
    />
  ),
});
