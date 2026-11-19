import { createFileRoute } from "@tanstack/react-router";
import { hreflangLinks, OG_LOCALE } from "@/lib/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { termsIntro, termsSections } from "@/content/sekro/terms-es";
import { SEKRO_PATHS } from "@/lib/sekro-legal";

export const Route = createFileRoute("/es/sekro/terms")({
  head: () => ({
    meta: [
      { property: "og:locale", content: OG_LOCALE.es },
      { title: "Términos del servicio de Sekro — BlackHawk Technologies" },
      {
        name: "description",
        content:
          "Las normas para usar Sekro: requisitos, tu frase de contraseña, uso aceptable, moderación y responsabilidad.",
      },
      { property: "og:title", content: "Términos del servicio de Sekro — BlackHawk Technologies" },
      {
        property: "og:description",
        content:
          "Las normas para usar Sekro: requisitos, tu frase de contraseña, uso aceptable, moderación y responsabilidad.",
      },
    ],
    links: hreflangLinks("sekroTerms", "es"),
  }),
  component: () => (
    <LegalPage
      lang="es"
      title="Términos del servicio de Sekro"
      intro={termsIntro}
      sections={termsSections}
      alternate={{ href: SEKRO_PATHS.terms.en, label: "Read in English" }}
      siblings={[
        { href: SEKRO_PATHS.privacy.es, label: "Política de privacidad" },
        { href: SEKRO_PATHS.deleteAccount.es, label: "Eliminar tu cuenta" },
      ]}
    />
  ),
});
