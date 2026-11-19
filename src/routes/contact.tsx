import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/ContactPage";
import { contactCopy } from "@/content/contact";
import { pageHead } from "@/lib/i18n";

const t = contactCopy.en.meta;

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      page: "contact",
      lang: "en",
      title: t.title,
      description: t.description,
      ogTitle: t.ogTitle,
      ogDescription: t.ogDescription,
    }),
  component: () => <ContactPage lang="en" />,
});
