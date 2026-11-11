import { A, B, Mail, OL, UL, type LegalSection } from "@/components/site/LegalPage";
import { SEKRO_FIGURES, SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

// The account deletion page Google Play links to. Checked (Nov 2026) against sekro-api
// (app/services/account_deletion_service.py, video_service.py, message_service.py, jobs/purge_reports.py,
// deploy/s3-lifecycle.json, DEPLOY.md) and the iOS / Android string catalogs: the UI labels below are the apps' own.
// Keep it in step with the Privacy Policy ("Deleting your account").

export const deleteAccountIntro = (
  <>
    <p>
      You can delete your Sekro account, and the data that goes with it, at any time. Sekro is provided by{" "}
      {SEKRO_LEGAL.company}. This page explains how to do it, with or without the app, what is deleted, and what we
      keep and for how long.
    </p>
  </>
);

export const deleteAccountSections: LegalSection[] = [
  {
    id: "in-the-app",
    title: "Delete your account in the app",
    body: (
      <>
        <p>It's the same on iPhone and Android:</p>
        <OL>
          <li>
            Open Sekro and go to the <B>Profile</B> tab.
          </li>
          <li>
            Tap <B>Account</B>.
          </li>
          <li>
            Tap <B>Delete account</B>.
          </li>
          <li>
            Enter your login password to confirm, and tap <B>Delete account</B>.
          </li>
          <li>
            When asked “Delete your account permanently?”, tap <B>Delete account</B> again.
          </li>
        </OL>
        <p>
          Your account is deleted straight away and can't be undone. Every device signed in to it is signed out, and the
          app removes your keys and messages from each of them.
        </p>
      </>
    ),
  },
  {
    id: "without-the-app",
    title: "Without the app",
    body: (
      <p>
        If you can't use the app, email <Mail /> from the email address registered on your Sekro account, and include
        your username. We'll confirm the request with you and delete your account{" "}
        {SEKRO_LEGAL.emailDeletionDeadline.en}. Everything described below applies in the same way.
      </p>
    ),
  },
  {
    id: "what-is-deleted",
    title: "What is deleted",
    body: (
      <>
        <p>When your account is deleted, we delete from our servers, immediately:</p>
        <UL>
          <li>
            your <B>account</B>: username, email address, password hash and app language;
          </li>
          <li>
            your <B>profile</B>: display name and profile photo;
          </li>
          <li>
            your <B>contacts</B>, the invites you sent and received, and your blocks;
          </li>
          <li>
            your <B>messages</B>: they're removed from your side of every conversation, and any message the other person
            had already deleted is deleted for good (see below for the ones they still have);
          </li>
          <li>
            your <B>Gallery items and their files</B>, and the photo Sekros and encrypted video and audio files you
            uploaded that nobody else still has;
          </li>
          <li>
            your <B>encryption keys</B>: your public keys, your <B>encrypted key backup</B> and your saved sender keys;
          </li>
          <li>
            your <B>devices and push tokens</B>, your notifications, and any email or password-reset codes.
          </li>
        </UL>
        <p>
          If a file can't be removed from storage at that moment (for example, during a brief outage), it's queued and
          deleted automatically by a cleanup job that runs every hour.
        </p>
      </>
    ),
  },
  {
    id: "what-is-kept",
    title: "What we keep, and for how long",
    body: (
      <UL>
        <li>
          <B>Conversations the other person still has.</B> Messages and Sekros you exchanged with someone stay
          available to them, including on our servers, until they delete them too; then they're deleted. Copies on
          their devices, and Sekro images saved or shared outside the app, are out of our reach. A short record that a
          message was deleted (its ID and time, no content) is kept for up to {SEKRO_FIGURES.tombstoneDays} days so
          their devices remove it too.
        </li>
        <li>
          <B>Reports.</B> Reports about you, or made by you, are kept for moderation, with your username. A report is
          kept while it's open, and deleted {SEKRO_FIGURES.reportRetentionDays} days (12 months) after it's resolved.
          The content a reporter chose to share with a report (what their device revealed, and the Sekro image) is
          deleted with the report, and in any case no later than {SEKRO_FIGURES.moderationFileDays} days after it was
          sent to us.
        </li>
        <li>
          <B>Server logs.</B> Our servers' technical logs, which may include your account ID, are kept for{" "}
          {SEKRO_FIGURES.serverLogDays} days. They never contain passwords, codes, keys, message content or images.
        </li>
        <li>
          <B>Signed-out session records</B> (an account ID, no personal details) expire within{" "}
          {SEKRO_FIGURES.sessionRecordDays} days. They let us tell your other devices to erase your data.
        </li>
        <li>Anything the law requires us to keep.</li>
      </UL>
    ),
  },
  {
    id: "individual-items",
    title: "Deleting individual messages and Sekros",
    body: (
      <>
        <p>You don't have to delete your account to delete something:</p>
        <UL>
          <li>
            <B>A chat message</B>: touch and hold it, then tap <B>Delete for me</B>. It's removed from all your devices;
            the other person keeps their copy. Once both of you have deleted it, it's deleted from our servers.
          </li>
          <li>
            <B>A Gallery item</B>: open it and tap <B>Delete</B>. It's removed from all your devices. Copies you already
            sent stay in those chats.
          </li>
        </UL>
        <p>
          <B>Delete everywhere</B> takes back a <B>video or audio Sekro you made</B>, including the copies you sent:
        </p>
        <UL>
          <li>
            in a chat, touch and hold one you sent and tap <B>Delete video everywhere</B> (or{" "}
            <B>Delete audio everywhere</B>);
          </li>
          <li>
            in the Gallery, open it, tap <B>Delete</B>, then <B>Delete everywhere…</B>.
          </li>
        </UL>
        <p>
          It's removed from your Gallery (including copies you shared) and from every chat you sent it to, and the
          encrypted file is deleted from our servers straight away. People you sent it to keep the cover image but see
          “This video is no longer available.” (or “This audio is no longer available.”), and copies saved or shared
          outside the app stop working too.
        </p>
        <p>
          Photo and text Sekros carry their content inside the image, so <B>Delete everywhere</B> isn't available for
          them: a copy someone has received or saved keeps working, and we can't recall it. If you want to take back a
          video or audio Sekro, use <B>Delete everywhere</B> before you delete your account; afterwards, it stays
          available to the people who still have it, until they delete it.
        </p>
      </>
    ),
  },
  {
    id: "no-recovery",
    title: "Deleted content can't be recovered",
    body: (
      <p>
        Your Sekros and messages are end-to-end encrypted, and we never have the keys to open them. Once a message, a
        Sekro or your account (with your encrypted key backup) is deleted, nobody can recover it, including us. If you sign up again
        later, it will be a new account with new keys.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Questions",
    body: (
      <p>
        Email <Mail />. More about how we handle your data is in the{" "}
        <A href={SEKRO_PATHS.privacy.en}>Sekro Privacy Policy</A>. {SEKRO_LEGAL.company},{" "}
        {SEKRO_LEGAL.registeredOffice}.
      </p>
    ),
  },
];
