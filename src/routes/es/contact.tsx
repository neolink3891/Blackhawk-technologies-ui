import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/ContactPage";
import { contactCopy } from "@/content/contact";
import { pageHead } from "@/lib/i18n";

const t = contactCopy.es.meta;

export const Route = createFileRoute("/es/contact")({
  head: () =>
    pageHead({
      page: "contact",
      lang: "es",
      title: t.title,
      description: t.description,
      ogTitle: t.ogTitle,
      ogDescription: t.ogDescription,
    }),
  component: () => <ContactPage lang="es" />,
});
