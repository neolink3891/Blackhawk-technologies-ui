import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyIntro, privacySections } from "@/content/sekro/privacy-es";
import { SEKRO_PATHS } from "@/lib/sekro-legal";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/es/sekro/privacy")({
  head: () => ({
    meta: [
      { title: "Política de privacidad de Sekro — BlackHawk Technologies" },
      { name: "description", content: "Qué datos recoge Sekro, qué no puede ver (tu contenido cifrado de extremo a extremo) y tus derechos." },
      { property: "og:title", content: "Política de privacidad de Sekro — BlackHawk Technologies" },
      { property: "og:description", content: "Qué datos recoge Sekro, qué no puede ver (tu contenido cifrado de extremo a extremo) y tus derechos." },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/es/sekro/privacy` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${SEKRO_PATHS.privacy.en}` },
      { rel: "alternate", hrefLang: "es", href: `${SITE_URL}${SEKRO_PATHS.privacy.es}` },
    ],
  }),
  component: () => (
    <LegalPage
      lang="es"
      title="Política de privacidad de Sekro"
      intro={privacyIntro}
      sections={privacySections}
      alternate={{ href: SEKRO_PATHS.privacy.en, label: "Read in English" }}
      siblings={[
        { href: SEKRO_PATHS.terms.es, label: "Términos del servicio" },
        { href: SEKRO_PATHS.deleteAccount.es, label: "Eliminar tu cuenta" },
      ]}
    />
  ),
});
