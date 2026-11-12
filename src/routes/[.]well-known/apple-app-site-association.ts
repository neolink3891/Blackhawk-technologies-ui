import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { appleAppSiteAssociation, jsonResponse } from "@/lib/sekro-invite";

// iOS Universal Links for Sekro invites. Must be served as JSON at this exact path (no extension), over HTTPS, with
// no redirect: Apple's CDN doesn't follow them.
export const Route = createFileRoute("/.well-known/apple-app-site-association")({
  server: { handlers: { GET: async () => jsonResponse(appleAppSiteAssociation) } },
});
