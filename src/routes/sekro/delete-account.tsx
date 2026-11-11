import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { deleteAccountIntro, deleteAccountSections } from "@/content/sekro/delete-account-en";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";
import { SITE_URL } from "@/lib/site";

const description =
  "How to delete your Sekro account, in the app or by email, what is deleted, and what BlackHawk Technologies keeps and for how long.";

export const Route = createFileRoute("/sekro/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete your Sekro account — BlackHawk Technologies" },
      { name: "description", content: description },
      { property: "og:title", content: "Delete your Sekro account — BlackHawk Technologies" },
      { property: "og:description", content: description },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/sekro/delete-account` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${SEKRO_PATHS.deleteAccount.en}` },
      { rel: "alternate", hrefLang: "es", href: `${SITE_URL}${SEKRO_PATHS.deleteAccount.es}` },
    ],
  }),
  component: () => (
    <LegalPage
      lang="en"
      title="Delete your Sekro account"
      intro={deleteAccountIntro}
      sections={deleteAccountSections}
      updated={SEKRO_LEGAL.deleteAccountUpdated}
      alternate={{ href: SEKRO_PATHS.deleteAccount.es, label: "Leer en español" }}
      siblings={[
        { href: SEKRO_PATHS.privacy.en, label: "Privacy Policy" },
        { href: SEKRO_PATHS.terms.en, label: "Terms of Service" },
      ]}
    />
  ),
});
