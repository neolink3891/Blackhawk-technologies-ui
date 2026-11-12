// Sekro invite links: https://www.blackhawk-technologies.com/sekro/add/<username>.
// The apps share them; with the app installed, iOS (Universal Links) and Android (App Links) open the app directly,
// verified by the two files below. Without it, the link lands on the invite page (src/routes/sekro/add.$username.tsx).

import { SITE_URL } from "@/lib/site";

/** Same rule as sekro-api (app/models/user.py USERNAME_RE); the API lowercases usernames, so links are matched
 *  case-insensitively and shown in lowercase. */
const USERNAME_RE = /^[a-z0-9](?:[a-z0-9._]{1,28})[a-z0-9]$/;

export function parseUsername(raw: string): string | null {
  const username = raw.trim().replace(/^@/, "").toLowerCase();
  return USERNAME_RE.test(username) ? username : null;
}

export const SEKRO_INVITE_PATH = "/sekro/add";

export const inviteUrl = (username: string) => `${SITE_URL}${SEKRO_INVITE_PATH}/${username}`;

export const ANDROID_PACKAGE = "com.blackhawktechnologies.sekro";

/** Play listing with an install referrer (`add=<username>`), so the app can add the contact after installing. */
export const googlePlayInviteUrl = (username: string) =>
  `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}&referrer=${encodeURIComponent(`add=${username}`)}`;

/** "Open in Sekro" on the invite page. The https link itself is the primary path (Universal Links / App Links open the
 *  app before this page loads); this is the fallback for when they didn't, e.g. a tap on a link to the same site.
 *  - iPhone / iPad: the app's custom scheme, sekro://add/<username>;
 *  - Android: an intent:// URL for the same scheme, limited to the Sekro package; Chrome opens the Play listing
 *    (S.browser_fallback_url) when the app isn't installed. */
export const SEKRO_SCHEME = "sekro";

export const openInAppUrl = (platform: "ios" | "android", username: string) =>
  platform === "ios"
    ? `${SEKRO_SCHEME}://add/${username}`
    : `intent://add/${username}#Intent;scheme=${SEKRO_SCHEME};package=${ANDROID_PACKAGE};` +
      `S.browser_fallback_url=${encodeURIComponent(googlePlayInviteUrl(username))};end`;

// ---------------------------------------------------------------------------------------------------------------
// App link verification files (served by src/routes/[.]well-known/*). TODO: the Android fingerprints are placeholders;
// replace them before deploying (until then assetlinks.json is well-formed but verifies nothing).

/** "<Team ID>.<iOS bundle id>": team and app target bundle id from the Xcode project (case-sensitive). */
export const IOS_APP_ID = "4V2B872QV3.com.blackhawktechnologies.Sekro";

/** SHA-256 certificate fingerprints ("AB:CD:…"): Play App Signing key (Play Console › App integrity), then the
 *  upload / debug key used for builds installed outside Play. */
export const ANDROID_CERT_FINGERPRINTS = [
  "<PLAY_APP_SIGNING_SHA256>",
  "<UPLOAD_OR_DEBUG_KEY_SHA256>",
];

/** /.well-known/apple-app-site-association. `components` is the iOS 13+ format; `appID` + `paths` keep iOS 12 and
 *  older working. */
export const appleAppSiteAssociation = {
  applinks: {
    apps: [],
    details: [
      {
        appIDs: [IOS_APP_ID],
        components: [{ "/": `${SEKRO_INVITE_PATH}/*`, comment: "Sekro invite links" }],
        appID: IOS_APP_ID,
        paths: [`${SEKRO_INVITE_PATH}/*`],
      },
    ],
  },
};

/** /.well-known/assetlinks.json */
export const assetLinks = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: ANDROID_PACKAGE,
      sha256_cert_fingerprints: ANDROID_CERT_FINGERPRINTS,
    },
  },
];

/** Both files: JSON, no redirects, cacheable for an hour (Apple's CDN and Google re-fetch them on their own). */
export const jsonResponse = (body: unknown) =>
  new Response(JSON.stringify(body, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=3600" },
  });

// ---------------------------------------------------------------------------------------------------------------

export type InvitePlatform = "ios" | "android" | "desktop";

export function detectPlatform(userAgent: string): InvitePlatform {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "ios";
  if (/Android/i.test(userAgent)) return "android";
  return "desktop";
}
