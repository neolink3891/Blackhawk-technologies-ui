import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { assetLinks, jsonResponse } from "@/lib/sekro-invite";

// Android App Links for Sekro invites (verified for intent filters with android:autoVerify="true"). Served as JSON,
// with no redirect.
export const Route = createFileRoute("/.well-known/assetlinks.json")({
  server: { handlers: { GET: async () => jsonResponse(assetLinks) } },
});
