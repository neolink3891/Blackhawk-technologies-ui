import { createFileRoute } from "@tanstack/react-router";
import { hreflangLinks, OG_LOCALE } from "@/lib/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { childSafetyIntro, childSafetySections } from "@/content/sekro/child-safety-en";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

const title = "Sekro Child Safety Standards";
const description =
  "Sekro's standards against child sexual abuse and exploitation: zero tolerance, how to report it, and what BlackHawk Technologies does.";

export const Route = createFileRoute("/sekro/child-safety")({
  head: () => ({
    meta: [
      { property: "og:locale", content: OG_LOCALE.en },
      { title: `${title} — BlackHawk Technologies` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — BlackHawk Technologies` },
      { property: "og:description", content: description },
    ],
    links: hreflangLinks("sekroChildSafety", "en"),
  }),
  component: () => (
    <LegalPage
      lang="en"
      title={title}
      intro={childSafetyIntro}
      sections={childSafetySections}
      updated={SEKRO_LEGAL.childSafetyUpdated}
      alternate={{ href: SEKRO_PATHS.childSafety.es, label: "Leer en español" }}
      siblings={[
        { href: SEKRO_PATHS.privacy.en, label: "Privacy Policy" },
        { href: SEKRO_PATHS.terms.en, label: "Terms of Service" },
      ]}
    />
  ),
});
