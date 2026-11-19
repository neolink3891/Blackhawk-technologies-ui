// The contact form builds a mailto: link and opens the visitor's email app; nothing is sent by the site itself.

export const CONTACT_EMAIL = "contactus@bhtapp.com";

/** Longest body we put in the link: long mailto: URLs get cut off or refused by some email apps. */
export const MAX_BODY_CHARS = 1800;

export interface MailtoInput {
  /** "EN" or "ES", for the subject tag. */
  tag: string;
  projectType: string;
  name: string;
  /** "Label: value" lines before the message, in the visitor's language. */
  details: [label: string, value: string][];
  messageLabel: string;
  message: string;
  /** Appended when the message had to be shortened. */
  trimmedNote: string;
}

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

/** Subject, body (shortened to MAX_BODY_CHARS if needed) and the mailto: URL. */
export function buildMailto(m: MailtoInput) {
  const subject = `[Website ${m.tag}] ${oneLine(m.projectType)} — ${oneLine(m.name)}`;
  const head = [
    ...m.details.map(([k, v]) => `${k}: ${oneLine(v)}`),
    "",
    `${m.messageLabel}:`,
    "",
  ].join("\n");
  let message = m.message.replace(/\r\n?/g, "\n");
  let trimmed = false;
  if (head.length + message.length > MAX_BODY_CHARS) {
    const room = Math.max(0, MAX_BODY_CHARS - head.length - m.trimmedNote.length - 2);
    message = `${message.slice(0, room).trimEnd()}\n\n${m.trimmedNote}`;
    trimmed = true;
  }
  const body = head + message;
  // RFC 6068: percent-encode everything; line breaks as CRLF.
  const enc = (s: string) => encodeURIComponent(s.replace(/\n/g, "\r\n"));
  const url = `mailto:${CONTACT_EMAIL}?subject=${enc(subject)}&body=${enc(body)}`;
  return { subject, body, url, trimmed };
}
