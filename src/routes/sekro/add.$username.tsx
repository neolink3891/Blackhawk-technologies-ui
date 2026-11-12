import { createFileRoute, notFound } from "@tanstack/react-router";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";

import type { Lang } from "@/components/site/LegalPage";
import { SekroInviteInvalid, SekroInvitePage } from "@/components/site/SekroInvitePage";
import { sekroInvite } from "@/content/sekro/invite";
import { SEKRO_IMAGES } from "@/lib/sekro";
import { SITE_URL } from "@/lib/site";
import { detectPlatform, inviteUrl, parseUsername } from "@/lib/sekro-invite";

// Invite link shared from the apps. With Sekro installed, iOS / Android open the app instead of this page
// (/.well-known/apple-app-site-association, /.well-known/assetlinks.json). No API call: the username is only
// checked against the API's format. Language: ?lang=en|es, else the browser's.

const requestInfo = createIsomorphicFn()
  .server(() => ({
    userAgent: getRequestHeader("user-agent") ?? "",
    acceptLanguage: getRequestHeader("accept-language") ?? "",
  }))
  .client(() => ({
    userAgent: navigator.userAgent,
    acceptLanguage: navigator.languages.join(","),
  }));

const pickLang = (acceptLanguage: string): Lang =>
  acceptLanguage.split(",")[0]?.trim().toLowerCase().startsWith("es") ? "es" : "en";

export const Route = createFileRoute("/sekro/add/$username")({
  validateSearch: (search: Record<string, unknown>): { lang?: Lang } =>
    search.lang === "en" || search.lang === "es" ? { lang: search.lang } : {},
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ params, deps }) => {
    const { userAgent, acceptLanguage } = requestInfo();
    const lang = deps.lang ?? pickLang(acceptLanguage);
    const username = parseUsername(params.username);
    if (!username) throw notFound({ data: { lang } });
    return { username, lang, platform: detectPlatform(userAgent) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ name: "robots", content: "noindex" }] };
    const { username, lang } = loaderData;
    const t = sekroInvite[lang];
    const title = `${t.title(username)} — Sekro`;
    return {
      meta: [
        { title },
        { name: "description", content: t.metaDescription(username) },
        // Personal links: kept out of search results.
        { name: "robots", content: "noindex" },
        // Safari's Smart App Banner: "Open" when installed (with this link), "Get" otherwise.
        {
          name: "apple-itunes-app",
          content: `app-id=6832626608, app-argument=${inviteUrl(username)}`,
        },
        { property: "og:title", content: t.title(username) },
        { property: "og:description", content: t.summary },
        { property: "og:url", content: inviteUrl(username) },
        { property: "og:locale", content: lang === "es" ? "es_ES" : "en_GB" },
        { property: "og:image", content: `${SITE_URL}${SEKRO_IMAGES.ogImage}` },
        { property: "og:image:alt", content: "Sekro" },
      ],
      links: [{ rel: "canonical", href: inviteUrl(username) }],
    };
  },
  component: InviteRoute,
  notFoundComponent: ({ data }) => {
    const lang = (data as { lang?: Lang } | undefined)?.lang ?? "en";
    return <SekroInviteInvalid lang={lang} />;
  },
});

function InviteRoute() {
  const { username, lang, platform } = Route.useLoaderData();
  return (
    <SekroInvitePage
      key={`${username}-${lang}`}
      lang={lang}
      username={username}
      platform={platform}
    />
  );
}
