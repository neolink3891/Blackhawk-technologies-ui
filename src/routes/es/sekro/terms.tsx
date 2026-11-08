import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { termsIntro, termsSections } from "@/content/sekro/terms-es";
import { SEKRO_PATHS } from "@/lib/sekro-legal";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/es/sekro/terms")({
  head: () => ({
    meta: [
      { title: "Términos del servicio de Sekro — BlackHawk Technologies" },
      { name: "description", content: "Las normas para usar Sekro: requisitos, tu frase de contraseña, uso aceptable, moderación y responsabilidad." },
      { property: "og:title", content: "Términos del servicio de Sekro — BlackHawk Technologies" },
      { property: "og:description", content: "Las normas para usar Sekro: requisitos, tu frase de contraseña, uso aceptable, moderación y responsabilidad." },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/es/sekro/terms` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${SEKRO_PATHS.terms.en}` },
      { rel: "alternate", hrefLang: "es", href: `${SITE_URL}${SEKRO_PATHS.terms.es}` },
    ],
  }),
  component: () => (
    <LegalPage
      lang="es"
      title="Términos del servicio de Sekro"
      intro={termsIntro}
      sections={termsSections}
      alternate={{ href: SEKRO_PATHS.terms.en, label: "Read in English" }}
      sibling={{ href: SEKRO_PATHS.privacy.es, label: "Política de privacidad" }}
    />
  ),
});
