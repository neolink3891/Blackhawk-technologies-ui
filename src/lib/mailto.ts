// The contact form builds a mailto: link and opens the visitor's email app; nothing is sent by the site itself.

export const CONTACT_EMAIL = "contactus@bhtapp.com";

/** Longest mailto: link we open (the whole encoded URL): old desktop Outlook cuts links off at about 2,000. */
export const MAX_URL_CHARS = 1900;

export interface MailtoInput {
  /** "EN" or "ES", for the subject tag. */
  tag: string;
  projectType: string;
  name: string;
  /** "Label: value" lines before the message, in the visitor's language. `shorten`: may be cut (with "…") if even
   *  an empty message wouldn't fit, e.g. a very long name or company. */
  details: [label: string, value: string, shorten?: boolean][];
  messageLabel: string;
  message: string;
  /** Appended when the message had to be shortened. */
  trimmedNote: string;
}

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

/** At most `max` characters (whole characters, never half an emoji), with "…" if cut. */
const cap = (s: string, max: number) => {
  const chars = Array.from(s);
  return chars.length <= max
    ? s
    : `${chars
        .slice(0, max - 1)
        .join("")
        .trimEnd()}…`;
};

/** Subject, body and the mailto: URL; if the URL would be over MAX_URL_CHARS, the message is shortened to fit. */
export function buildMailto(m: MailtoInput) {
  // RFC 6068: percent-encode everything; line breaks as CRLF.
  const enc = (s: string) => encodeURIComponent(s.replace(/\n/g, "\r\n"));
  const parts = (max: number) => ({
    subject: `[Website ${m.tag}] ${oneLine(m.projectType)} — ${cap(oneLine(m.name), max)}`,
    head: [
      ...m.details.map(([k, v, shorten]) => `${k}: ${shorten ? cap(oneLine(v), max) : oneLine(v)}`),
      "",
      `${m.messageLabel}:`,
      "",
    ].join("\n"),
  });
  // Very long names/companies (e.g. 100 accented letters) can fill the link on their own: shorten them until at
  // least the trim note fits.
  let { subject, head } = parts(Infinity);
  const urlFor = (body: string) =>
    `mailto:${CONTACT_EMAIL}?subject=${enc(subject)}&body=${enc(body)}`;
  for (const max of [60, 40, 20, 10]) {
    if (urlFor(`${head}\n\n${m.trimmedNote}`).length <= MAX_URL_CHARS) break;
    ({ subject, head } = parts(max));
  }

  const message = m.message.replace(/\r\n?/g, "\n");
  let body = head + message;
  let url = urlFor(body);
  let trimmed = false;
  if (url.length > MAX_URL_CHARS) {
    // Encoded length depends on the characters (an accented letter takes 6), so find the longest prefix that fits,
    // counting whole characters (never half an emoji).
    const chars = Array.from(message);
    const withPrefix = (n: number) =>
      `${head}${chars.slice(0, n).join("").trimEnd()}\n\n${m.trimmedNote}`;
    let lo = 0;
    let hi = chars.length;
    while (lo < hi) {
      const mid = Math.ceil((lo + hi) / 2);
      if (urlFor(withPrefix(mid)).length <= MAX_URL_CHARS) lo = mid;
      else hi = mid - 1;
    }
    body = withPrefix(lo);
    url = urlFor(body);
    trimmed = true;
  }
  return { subject, body, url, trimmed };
}
