import { A, B, Mail, OL, UL, type LegalSection } from "@/components/site/LegalPage";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

// Sekro's Child Safety Standards (Google Play, Social apps). Checked (Nov 2026) against sekro-api
// (models/moderation.py, services/report_service.py, routers/reports.py, jobs/purge_reports.py) and the iOS / Android
// report flows; UI labels are the apps' own. Updated for API 1.0.4 / Android 1.0.0 (build 3):
// - report reason child_safety ("Child safety (a minor is involved)") on Android; iOS gets it in 1.0.6, so iPhone
//   users choose "Illegal content" + a note until then (update step 1 when iOS ships);
// - every child_safety report is under legal hold (app/services/legal_hold.py): never purged, files outside any S3
//   lifecycle, the reported message / PNG / video hidden from users but kept through every delete path;
// - admin removal (app/services/moderation_service.py); a ban with category child_safety removes everything the account
//   uploaded (sent messages, gallery, videos, photo PNGs, profile pictures);
// - self-deletion refused while a report against the account is open or held; a deleted account a report names keeps
//   a minimal record (deleted_accounts) while that report exists.

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
            Under “Why are you reporting this?”, choose <B>Child safety (a minor is involved)</B> on Android. On iPhone,
            until the next update of the app adds that option, choose <B>Illegal content</B> and say in{" "}
            <B>Add a note (optional)</B> that a child is involved, so we can prioritise it.
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
          <B>We remove the content.</B> We remove the reported content and, when we ban an account for child safety,
          everything it stored with us: the messages and Sekros it sent, its Gallery, its video and audio files, and its
          profile photo. After that, nobody can see or open them in Sekro. (A photo or text Sekro carries its content
          inside the image, so copies saved or shared outside the app are out of our reach.)
        </li>
        <li>
          <B>We preserve evidence.</B> Every child safety report is put under legal hold. The report, the content shared
          with it, the reported message, Sekro and video or audio file, and the information we hold about the account
          are kept for law enforcement until they're no longer needed for legal proceedings, even if they're deleted in
          the app. The account's owner can't delete the account while a report about it is open or held, and if an
          account is deleted, we keep a minimal record of it (user ID, username, a hash of the email address, and dates)
          for as long as a report about it is kept.
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
