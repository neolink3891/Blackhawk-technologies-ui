// The contact form posts straight from the browser to Formspree, which emails the message to contactus@bhtapp.com.
// The form ID is public (it's in the page either way): VITE_FORMSPREE_ID in .env.production, baked in at build time.

const FORM_ID = (import.meta.env.VITE_FORMSPREE_ID as string | undefined)?.trim() || "";

export const FORMSPREE_PRIVACY_URL = "https://formspree.io/legal/privacy-policy/";

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "invalid" | "rateLimited" | "sendFailed" };

/** POST the fields as JSON. Success only on a 2xx; anything else (or no form ID, or a network error) is a failure. */
export async function submitToFormspree(fields: Record<string, string>): Promise<SubmitResult> {
  if (!FORM_ID) {
    console.error("[contact] VITE_FORMSPREE_ID is not set; the message was not sent.");
    return { ok: false, reason: "sendFailed" };
  }
  try {
    const res = await fetch(`https://formspree.io/f/${encodeURIComponent(FORM_ID)}`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    if (res.ok) return { ok: true };
    if (res.status === 429) return { ok: false, reason: "rateLimited" };
    if (res.status === 422) return { ok: false, reason: "invalid" };
    return { ok: false, reason: "sendFailed" };
  } catch {
    return { ok: false, reason: "sendFailed" };
  }
}
