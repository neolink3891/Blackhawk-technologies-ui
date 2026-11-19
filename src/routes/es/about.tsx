import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages/AboutPage";
import { aboutCopy } from "@/content/about";
import { pageHead } from "@/lib/i18n";

const t = aboutCopy.es.meta;

export const Route = createFileRoute("/es/about")({
  head: () =>
    pageHead({
      page: "about",
      lang: "es",
      title: t.title,
      description: t.description,
      ogTitle: t.ogTitle,
      ogDescription: t.ogDescription,
    }),
  component: () => <AboutPage lang="es" />,
});
