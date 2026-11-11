import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { childSafetyIntro, childSafetySections } from "@/content/sekro/child-safety-en";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";
import { SITE_URL } from "@/lib/site";

const title = "Sekro Child Safety Standards";
const description =
  "Sekro's standards against child sexual abuse and exploitation: zero tolerance, how to report it, and what BlackHawk Technologies does.";

export const Route = createFileRoute("/sekro/child-safety")({
  head: () => ({
    meta: [
      { title: `${title} — BlackHawk Technologies` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — BlackHawk Technologies` },
      { property: "og:description", content: description },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/sekro/child-safety` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${SEKRO_PATHS.childSafety.en}` },
      { rel: "alternate", hrefLang: "es", href: `${SITE_URL}${SEKRO_PATHS.childSafety.es}` },
    ],
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
