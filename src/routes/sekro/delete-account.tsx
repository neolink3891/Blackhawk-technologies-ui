import { createFileRoute } from "@tanstack/react-router";
import { hreflangLinks, OG_LOCALE } from "@/lib/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { deleteAccountIntro, deleteAccountSections } from "@/content/sekro/delete-account-en";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

const description =
  "How to delete your Sekro account, in the app or by email, what is deleted, and what BlackHawk Technologies keeps and for how long.";

export const Route = createFileRoute("/sekro/delete-account")({
  head: () => ({
    meta: [
      { property: "og:locale", content: OG_LOCALE.en },
      { title: "Delete your Sekro account — BlackHawk Technologies" },
      { name: "description", content: description },
      { property: "og:title", content: "Delete your Sekro account — BlackHawk Technologies" },
      { property: "og:description", content: description },
    ],
    links: hreflangLinks("sekroDeleteAccount", "en"),
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
