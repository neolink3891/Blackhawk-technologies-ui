import { A, B, Mail, OL, UL, type LegalSection } from "@/components/site/LegalPage";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

// Sekro's Child Safety Standards (Google Play, Social apps). Checked (Nov 2026) against sekro-api
// (models/moderation.py, services/report_service.py, routers/reports.py, jobs/purge_reports.py) and the iOS / Android
// report flows; UI labels are the apps' own. Say only what the apps and API do today:
// - there is no "child safety" report reason yet (abuse / illegal / spam / other), so we point people to "Illegal
//   content" + a note;
// - admins can ban an account, but there is no admin endpoint to delete reported content from our servers, so this
//   page doesn't promise removal;
// - reports are purged on the normal schedule (no legal hold), so "preserve" is limited to passing it on with our report.
// Update this page when any of that changes.

export const childSafetyIntro = (
  <>
    <p>
      Sekro is provided by {SEKRO_LEGAL.company}. These are our standards against child sexual abuse and exploitation,
      how to report it, and what we do when we receive a report.
    </p>
  </>
);

export const childSafetySections: LegalSection[] = [
  {
    id: "zero-tolerance",
    title: "Zero tolerance",
    body: (
      <>
        <p>
          Sekro prohibits <B>child sexual abuse material (CSAM)</B> and any form of <B>child sexual abuse and exploitation
          (CSAE)</B>. That includes:
        </p>
        <UL>
          <li>creating, sending, storing or sharing child sexual abuse material, or asking for it;</li>
          <li>grooming: contacting or building a relationship with a child for sexual purposes;</li>
          <li>sextortion: threatening to share intimate images, or demanding them, to coerce or exploit someone;</li>
          <li>anything that sexualises minors, including drawings, text or AI-generated material;</li>
          <li>any other use of Sekro to exploit or endanger children.</li>
        </UL>
        <p>
          Sekro is only for people aged <B>18 or over</B>. If you believe someone under 18 is using Sekro, tell us at{" "}
          <Mail to={SEKRO_LEGAL.safetyEmail} /> and we'll close the account.
        </p>
      </>
    ),
  },
  {
    id: "how-to-report",
    title: "How to report",
    body: (
      <>
        <p>In the app, on iPhone and Android, you can report any message or Sekro you received:</p>
        <UL>
          <li>
            <B>In a chat</B>: touch and hold the message, then tap <B>Report</B>.
          </li>
          <li>
            <B>While viewing a revealed Sekro</B>: tap the flag button (<B>Report</B>) at the top.
          </li>
          <li>
            <B>A Sekro you opened from Photos or Files</B> (Home › Open): tap <B>Report</B> under the image.
          </li>
        </UL>
        <p>Then:</p>
        <OL>
          <li>
            Under “Why are you reporting this?”, choose <B>Illegal content</B>.
          </li>
          <li>
            In <B>Add a note (optional)</B>, say that it involves a child, so we can prioritise it.
          </li>
          <li>
            You can also tick <B>Also block</B> the sender. Then tap <B>Send report</B>.
          </li>
        </OL>
        <p>
          You can also email <Mail to={SEKRO_LEGAL.safetyEmail} />, with the username of the account involved and what
          happened. Please don't attach images of child sexual abuse to an email: report them in the app, which sends
          them to us securely.
        </p>
        <p>
          Sekros and messages are <B>end-to-end encrypted</B>, so we can't see them ourselves. When you report, your
          device, which can already read the item, sends us what it revealed (the photo, video, audio or text, and any
          hidden note), together with the Sekro image, the reason and note you gave, who sent it and when. That is what
          we review. If a child is in immediate danger, contact the police first (999 in the UK).
        </p>
      </>
    ),
  },
  {
    id: "what-we-do",
    title: "What we do",
    body: (
      <UL>
        <li>
          <B>We review reports</B>, and reports involving children come first. Only a small number of authorised staff
          can see reported content.
        </li>
        <li>
          <B>We permanently ban the account</B> of anyone we find sharing child sexual abuse material or exploiting
          children. A banned account is signed out of every device straight away and can't sign in again, and it can't
          be deleted by its owner to escape moderation.
        </li>
        <li>
          <B>We report apparent child sexual abuse material</B> to the National Center for Missing &amp; Exploited
          Children (NCMEC) and to the UK's National Crime Agency (NCA), including its Child Exploitation and Online
          Protection command (CEOP), and we pass on the report and the information we hold about the account with it.
        </li>
        <li>
          <B>We cooperate with law enforcement.</B> We respond to valid legal requests, and we provide the data we hold
          (account details, connection and delivery metadata, and anything reported to us). We can't provide the content
          of Sekros or messages that weren't reported, because we don't have the keys to decrypt it.
        </li>
      </UL>
    ),
  },
  {
    id: "laws",
    title: "Compliance with child safety laws",
    body: (
      <p>
        We comply with the child safety laws that apply to us: in the United Kingdom, where we're based, including the
        Online Safety Act 2023 and the laws against indecent images of children, and the laws of the countries where
        Sekro is available. See also our <A href={SEKRO_PATHS.terms.en}>Terms of Service</A> and{" "}
        <A href={SEKRO_PATHS.privacy.en}>Privacy Policy</A>.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Child safety contact",
    body: (
      <p>
        For anything about child safety on Sekro, contact <Mail to={SEKRO_LEGAL.safetyEmail} />.{" "}
        {SEKRO_LEGAL.company}, {SEKRO_LEGAL.registeredOffice}.
      </p>
    ),
  },
];
