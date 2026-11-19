import { createFileRoute } from "@tanstack/react-router";
import { hreflangLinks, OG_LOCALE } from "@/lib/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { childSafetyIntro, childSafetySections } from "@/content/sekro/child-safety-es";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

const title = "Normas de protección infantil de Sekro";
const description =
  "Las normas de Sekro contra el abuso y la explotación sexual infantil: tolerancia cero, cómo denunciarlo y qué hace BlackHawk Technologies.";

export const Route = createFileRoute("/es/sekro/child-safety")({
  head: () => ({
    meta: [
      { property: "og:locale", content: OG_LOCALE.es },
      { title: `${title} — BlackHawk Technologies` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — BlackHawk Technologies` },
      { property: "og:description", content: description },
    ],
    links: hreflangLinks("sekroChildSafety", "es"),
  }),
  component: () => (
    <LegalPage
      lang="es"
      title={title}
      intro={childSafetyIntro}
      sections={childSafetySections}
      updated={SEKRO_LEGAL.childSafetyUpdated}
      alternate={{ href: SEKRO_PATHS.childSafety.en, label: "Read in English" }}
      siblings={[
        { href: SEKRO_PATHS.privacy.es, label: "Política de privacidad" },
        { href: SEKRO_PATHS.terms.es, label: "Términos del servicio" },
      ]}
    />
  ),
});
