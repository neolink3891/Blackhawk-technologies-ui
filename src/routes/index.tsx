import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { homeCopy } from "@/content/home";
import { pageHead } from "@/lib/i18n";

const t = homeCopy.en.meta;

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      page: "home",
      lang: "en",
      title: t.title,
      description: t.description,
    }),
  component: () => <HomePage lang="en" />,
});
