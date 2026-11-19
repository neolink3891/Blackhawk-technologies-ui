import { createFileRoute } from "@tanstack/react-router";
import { hreflangLinks, ogLocaleFor } from "@/lib/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { deleteAccountIntro, deleteAccountSections } from "@/content/sekro/delete-account-es";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

const description =
  "Cómo eliminar tu cuenta de Sekro, desde la app o por correo, qué se elimina y qué conserva BlackHawk Technologies y durante cuánto tiempo.";

export const Route = createFileRoute("/es/sekro/delete-account")({
  head: () => ({
    meta: [
      { property: "og:locale", content: ogLocaleFor("sekroDeleteAccount", "es") },
      { title: "Eliminar tu cuenta de Sekro — BlackHawk Technologies" },
      { name: "description", content: description },
      { property: "og:title", content: "Eliminar tu cuenta de Sekro — BlackHawk Technologies" },
      { property: "og:description", content: description },
    ],
    links: hreflangLinks("sekroDeleteAccount", "es"),
  }),
  component: () => (
    <LegalPage
      lang="es"
      title="Eliminar tu cuenta de Sekro"
      intro={deleteAccountIntro}
      sections={deleteAccountSections}
      updated={SEKRO_LEGAL.deleteAccountUpdated}
      alternate={{ href: SEKRO_PATHS.deleteAccount.en, label: "Read in English" }}
      siblings={[
        { href: SEKRO_PATHS.privacy.es, label: "Política de privacidad" },
        { href: SEKRO_PATHS.terms.es, label: "Términos del servicio" },
      ]}
    />
  ),
});
