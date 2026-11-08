import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyIntro, privacySections } from "@/content/sekro/privacy-es";
import { SEKRO_PATHS } from "@/lib/sekro-legal";

export const Route = createFileRoute("/es/sekro/privacy")({
  head: () => ({
    meta: [
      { title: "Política de privacidad de Sekro — BlackHawk Technologies" },
      { name: "description", content: "Qué datos recoge Sekro, qué no puede ver (tu contenido cifrado de extremo a extremo) y tus derechos." },
      { property: "og:title", content: "Política de privacidad de Sekro — BlackHawk Technologies" },
      { property: "og:description", content: "Qué datos recoge Sekro, qué no puede ver (tu contenido cifrado de extremo a extremo) y tus derechos." },
    ],
    links: [
      { rel: "alternate", hrefLang: "en", href: SEKRO_PATHS.privacy.en },
      { rel: "alternate", hrefLang: "es", href: SEKRO_PATHS.privacy.es },
    ],
  }),
  component: () => (
    <LegalPage
      lang="es"
      title="Política de privacidad de Sekro"
      intro={privacyIntro}
      sections={privacySections}
      alternate={{ href: SEKRO_PATHS.privacy.en, label: "Read in English" }}
      sibling={{ href: SEKRO_PATHS.terms.es, label: "Términos del servicio" }}
    />
  ),
});
