import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { homeCopy } from "@/content/home";
import { pageHead } from "@/lib/i18n";

const t = homeCopy.es.meta;

export const Route = createFileRoute("/es/")({
  head: () =>
    pageHead({
      page: "home",
      lang: "es",
      title: t.title,
      description: t.description,
    }),
  component: () => <HomePage lang="es" />,
});
