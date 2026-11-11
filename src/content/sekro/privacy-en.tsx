import { A, B, H3, Mail, UL, type LegalSection } from "@/components/site/LegalPage";
import { SEKRO_FIGURES, SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

// Every statement here was checked against sekro-api and the Sekro iOS app (Nov 2026).
// Keep it in step with the code: if what we store changes, change this page.

export const privacyIntro = (
  <>
    <p>
      Sekro lets you send end-to-end encrypted photos, videos, audio, text and messages, hidden behind
      ordinary-looking images. This policy explains what we collect when you use Sekro, what we can't see, and the
      choices you have.
    </p>
    <p>
      The short version: we can't read your Sekros or your messages. We hold the account details and delivery
      information needed to run the service, and we don't show ads, track you or sell your data.
    </p>
  </>
);

export const privacySections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Sekro is provided by <B>{SEKRO_LEGAL.company}</B>, a company registered in England and Wales (company number{" "}
          {SEKRO_LEGAL.companyNumber}), registered office {SEKRO_LEGAL.registeredOffice}. We are the data controller for
          the personal data described in this policy.
        </p>
        <p>
          Questions about privacy, or requests about your data: <Mail />.
        </p>
        {/* TODO(legal): confirm whether the company must register with the ICO (data protection fee) and add the
            registration number here once it has one. */}
        {/* TODO(legal): with users in the EU, check whether an EU representative is needed (EU GDPR Art. 27) and,
            if so, name them here. */}
      </>
    ),
  },
  {
    id: "what-we-cannot-see",
    title: "What we can't see",
    body: (
      <>
        <p>A Sekro can hide one of these, chosen by you:</p>
        <UL>
          <li>
            a <B>photo</B> or <B>text</B> (up to 5,000 characters): it travels inside the image itself, so nothing else
            is uploaded;
          </li>
          <li>
            a <B>video</B> (up to 7 minutes) or <B>audio</B> (up to 10 minutes): it's encrypted on your device and
            stored on our servers as an encrypted file; the image holds only an encrypted link to that file and the key
            to open it.
          </li>
        </UL>
        <p>
          A photo, video or audio can also carry an optional <B>hidden note</B> (up to 5,000 characters), encrypted with
          it.
        </p>
        <p>
          All of this, and the text of your chat messages, is <B>end-to-end encrypted</B> on your device before it
          reaches us. Only the people a Sekro was made for, and you, can open it. We don't have the keys, so we can't
          decrypt it, and we can't give it to anyone else. Revealed content is shown only inside Sekro, and the app
          doesn't let anyone save, copy or share it; only the image can be saved or shared.
        </p>
        <p>
          Your private encryption keys never leave your device unprotected. If you back them up to your account, the
          backup is encrypted with your Sekro passphrase, which never leaves your device. We can't open that backup.
        </p>
        <p>
          <B>The cover image is not encrypted.</B> A Sekro is an ordinary image file (a PNG) with the encrypted content
          hidden inside it. The picture you choose as the cover is visible to anyone who has the file, and we store that
          file to deliver it. We don't look at cover images, but you should choose covers you're happy for others to see.
        </p>
        <H3>The one exception: reports</H3>
        <p>
          If you report a message or Sekro you received, <B>your</B> device, which can already read it, decrypts it and
          sends a copy to us so we can review it. See “Reports and moderation” below. Nothing else that is encrypted can
          be read by us.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <H3>Account data</H3>
        <UL>
          <li>Your username, email address and whether you've verified it.</li>
          <li>A hash of your password (made with Argon2id). We never store the password itself.</li>
          <li>
            Your app language (so our emails are in your language and a new phone can pick it up), and when you created
            your account and accepted the Terms.
          </li>
          <li>
            A display name and profile photo, if you add them (Profile › Account). Your display name is shown with your
            username to people who can find you; your profile photo only to your contacts.
          </li>
          <li>
            Short-lived, hashed codes for verifying your email and resetting your password (they expire within
            minutes).
          </li>
        </UL>

        <H3>Encryption keys</H3>
        <UL>
          <li>
            Your <B>public</B> keys, so your contacts can encrypt for you and check your signatures. When you reset your
            keys we keep the old public keys so old signatures can still be checked.
          </li>
          <li>
            Your <B>encrypted key backup</B> and the settings used to encrypt it. We can't decrypt it.
          </li>
          <li>
            An encrypted list of the keys of people who sent you Sekros (so they keep opening on your other devices).
            It's sealed for your account and unreadable to us.
          </li>
        </UL>

        <H3>Contacts</H3>
        <UL>
          <li>Your contacts, the invites you send and receive (and whether they were accepted), and who you've blocked.</li>
          <li>
            Other verified users can find you by searching the start of your username. Your email address is never shown
            or searchable.
          </li>
        </UL>

        <H3>Messages and Sekros</H3>
        <UL>
          <li>
            Message metadata: who sent it, who it's for, the type of message, when it was sent, delivered and read, and
            which encryption key versions were used. Message text is stored only in encrypted form.
          </li>
          <li>
            Sekro image files you send or save to your Gallery (a photo or text Sekro is entirely inside its image), and
            their size and checksum. Your Gallery's details (such as who a Sekro was for, and what kind it is) are
            encrypted for your account.
          </li>
          <li>
            Encrypted video and audio files, their size, and whether each is a video or audio (to apply the size
            limit). We can't play them.
          </li>
          <li>
            Screenshot and screen-recording alerts: if someone takes a screenshot or records their screen while a Sekro
            you sent them is revealed (in a chat, or opened from a file), their app tells us. We store only the type of
            event (screenshot or recording), the ID of the message it was about (none for a Sekro opened from a file)
            and the time, as an entry between the two of you that both of you see in your chat. The screenshot or
            recording itself never reaches us.
          </li>
          <li>
            Presence: whether you're online and when you were last seen, shown only to your contacts. Typing indicators
            are passed on live and not stored.
          </li>
          <li>Notifications about contact invites.</li>
        </UL>

        <H3>Devices and push notifications</H3>
        <UL>
          <li>
            For each installation of the app: a random install ID, the device name and platform, when it was last
            active, and the push token Apple gives us to send notifications.
          </li>
          <li>Sign-in session records, so you stay signed in and can be signed out of every device.</li>
        </UL>

        <H3>IP addresses and security logs</H3>
        <UL>
          <li>
            Your IP address reaches our servers when the app connects. We store it only to limit password-reset attempts,
            and those records delete themselves within about two hours.
          </li>
          <li>
            Our servers keep technical logs (for example, which feature was used, the result and your account ID) to
            keep Sekro secure and working. They never contain passwords, codes, keys, message content or images.
          </li>
        </UL>
        {/* TODO(legal): if load balancer (ALB) or CloudFront access logs are turned on in AWS, they contain IP
            addresses; mention them here with their retention. They aren't configured in DEPLOY.md today. */}

        <H3>On your device</H3>
        <p>
          Your unlocked keys, a local encrypted copy of your chats and Gallery, and your settings stay on your phone. We
          don't have access to them. Your choice of app icon (Profile › Appearance) is kept by iOS on your phone and is
          never sent to us. Your language choice is stored on your phone, and also on your account as described above;
          push notifications are shown in your phone's language.
        </p>
      </>
    ),
  },
  {
    id: "permissions",
    title: "Microphone, photos and other phone permissions",
    body: (
      <>
        <UL>
          <li>
            <B>Microphone</B>: used only while you record audio for a Sekro (Create › Audio › Record audio, or the
            microphone button in a chat). The recording is compressed and encrypted on your phone before it's uploaded,
            so we only ever receive the encrypted file and can never hear it. Sekro doesn't use the microphone at any
            other time.
          </li>
          <li>
            <B>Photo library</B>: to choose a photo, video, cover image or profile photo, Sekro uses the iPhone's photo
            picker, which gives the app only the items you pick, not the rest of your library. Videos you pick are
            compressed and encrypted on your phone. When you save a Sekro to Photos, iOS asks for permission to add
            photos only: Sekro can add the image but can't see your library.
          </li>
          <li>
            <B>Files</B>: a video or audio file you choose from Files is read only when you pick it, and processed on
            your phone the same way.
          </li>
          <li>
            <B>Notifications</B>: Sekro asks the first time you send or receive a contact invite. You can turn them off
            in the iPhone's Settings at any time.
          </li>
        </UL>
        <p>
          Sekro doesn't use your camera, your location or your phone's address book. You can change any permission in
          the iPhone's Settings.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your data and why we're allowed to",
    body: (
      <>
        {/* TODO(legal): review the lawful bases below. */}
        <UL>
          <li>
            <B>To provide Sekro</B> (your account, contacts, delivering messages and Sekros, syncing your devices, push
            notifications, account emails). Lawful basis: performance of our contract with you.
          </li>
          <li>
            <B>To keep Sekro safe</B> (rate limits, preventing abuse, investigating reports, suspending accounts). Lawful
            basis: our legitimate interest in a secure service that people can trust, and, where it applies, our legal
            obligations.
          </li>
          <li>
            <B>To comply with the law</B>, for example responding to valid legal requests. Lawful basis: legal
            obligation.
          </li>
        </UL>
        <p>
          We don't use your data for advertising, we don't build profiles of you, we don't use tracking or analytics
          tools in the app, and we don't sell or rent your data to anyone.
        </p>
        <p>
          Push notifications are generic (for example, “You have a new message”) and never contain message content or
          names.
        </p>
      </>
    ),
  },
  {
    id: "reports",
    title: "Reports and moderation",
    body: (
      <>
        <p>
          When you report something you received, your device sends us what it revealed: the photo, video or audio,
          or the text (of a text Sekro or a chat message), together with any hidden note it carried. It also sends the
          Sekro image file, the reason you chose, any comment you add, who sent it and when, where you reported it from
          (a chat or a Sekro you opened from a file), and your account. You can report a sender even after blocking
          them, and you can also block the sender at the same time.
        </p>
        <p>
          Only a small number of authorised staff can review reports. We use them to decide whether to take action, such
          as suspending or banning an account. We record the decision and the reason on the reported account. We may
          share reported content with the authorities where the law requires it, or where it involves the sexual
          exploitation of children (see the Terms of Service).
        </p>
      </>
    ),
  },
  {
    id: "processors",
    title: "Who we share data with",
    body: (
      <>
        <p>We use a small number of service providers who process data on our behalf, under contract:</p>
        <UL>
          <li>
            <B>Amazon Web Services</B>: hosting our servers and storing Sekro files, in the UK (London region).
          </li>
          {/* TODO(legal): confirm the MongoDB Atlas cluster region and add it here. */}
          <li>
            <B>MongoDB Atlas</B>: our database.
          </li>
          <li>
            <B>Apple</B>: delivering push notifications to your iPhone.
          </li>
          {/* TODO(legal): sekro-api sends email through smtp.office365.com (Microsoft 365) in development. Confirm
              the production email provider before publishing. */}
          <li>
            <B>Microsoft (Microsoft 365)</B>: sending account emails, such as verification codes and password resets.
          </li>
        </UL>
        <p>
          We don't share your data with anyone else, except when required by law (see the Terms of Service, “Law
          enforcement”) or as part of a sale or reorganisation of our business, in which case this policy would continue
          to apply.
        </p>
        <H3>International transfers</H3>
        {/* TODO(legal): confirm the transfer safeguards in each provider's data processing terms. */}
        <p>
          Some providers may process data outside the UK. When they do, we rely on safeguards the law recognises, such
          as UK adequacy regulations or the International Data Transfer Agreement or Addendum.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    body: (
      <>
        <UL>
          <li>
            <B>Account data, keys and contacts</B>: while your account exists.
          </li>
          <li>
            <B>Messages, and the photo and text Sekros sent in a chat</B>: until both people have deleted them. “Delete for me” removes a
            message from your view on all your devices; the other person keeps their copy. Once both of you have deleted
            it, the message and its Sekro file are deleted from our servers. A short record that it was deleted (its ID
            and time, no content) is kept for up to 120 days so that all your devices remove it too.
          </li>
          <li>
            <B>Uploads that are never sent or saved</B>: deleted automatically after 24 hours.
          </li>
          <li>
            <B>Gallery items</B>: deleted when you delete them.
          </li>
          <li>
            <B>Encrypted video and audio files</B>: deleted when nothing refers to them any more (no Gallery item and no
            chat message that either person still keeps), or straight away when you choose “Delete everywhere” for a
            video or audio Sekro you made (in the Gallery, or on one you sent in a chat). Once the file is deleted, that
            Sekro stops working everywhere, including copies saved or shared outside the app: it shows “This video
            (or audio) is no longer available.”
          </li>
          <li>
            <B>Photo and text Sekros already sent</B>: their content is inside the image, so a copy someone has received
            or saved keeps working wherever it is, and we can't recall it.
          </li>
          <li>
            <B>Reports</B>: kept while they're open, and deleted {SEKRO_FIGURES.reportRetentionDays} days (12 months) after
            they're resolved. The content shared with a report (what the reporter's device revealed, and the Sekro image)
            is deleted with it, and in any case no later than {SEKRO_FIGURES.moderationFileDays} days after it was sent
            to us.
          </li>
          <li>
            <B>Security logs</B> (our servers' technical logs): {SEKRO_FIGURES.serverLogDays} days.
          </li>
          <li>
            <B>Rate-limit records (including IP addresses)</B>: about two hours. Email and password-reset codes: a few
            minutes.
          </li>
        </UL>
      </>
    ),
  },
  {
    id: "delete-account",
    title: "Deleting your account",
    body: (
      <>
        <p>
          You can delete your account in the app: <B>Profile › Account › Delete account</B>. You'll be asked for your
          password and to confirm. It's immediate and can't be undone. If you can't use the app, email <Mail /> from the
          address on your account and we'll do it for you {SEKRO_LEGAL.emailDeletionDeadline.en}.
        </p>
        <p>
          We delete straight away: your account details (username, email, password hash, display name, profile photo),
          your public keys, key backup and saved sender keys, your contacts, invites and blocks, your devices and push
          tokens, your notifications, your Gallery and its files, and the video and audio files only you were still
          using. Every device signed in to your account is signed out, and the app removes your keys and messages from
          it.
        </p>
        <p>Some things stay:</p>
        <UL>
          <li>
            Messages and Sekros in a conversation the other person hasn't deleted stay available to them, including on
            our servers, until they delete them. Copies on their devices, and Sekro files shared outside the app, are out
            of our reach.
          </li>
          <li>Reports about you, or made by you, are kept for moderation for the period above, with your username.</li>
          <li>
            Records of your signed-out sessions (an account ID, no personal details) expire within{" "}
            {SEKRO_FIGURES.sessionRecordDays} days. They let us
            tell your other devices to erase your data.
          </li>
          <li>Security logs are kept for the period above, and we keep anything the law requires us to keep.</li>
        </UL>
        <p>
          You can also sign out of Sekro on your device at any time. Signing out removes your keys and local chat history
          from that device.
        </p>
        <p>
          Step-by-step instructions, and how to delete individual messages and Sekros:{" "}
          <A href={SEKRO_PATHS.deleteAccount.en}>Delete your Sekro account</A>.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>Under UK data protection law (the UK GDPR and the Data Protection Act 2018) you have the right to:</p>
        <UL>
          <li>get a copy of the personal data we hold about you (access);</li>
          <li>have inaccurate data corrected;</li>
          <li>
            have your data deleted (see <A href={SEKRO_PATHS.deleteAccount.en}>Delete your Sekro account</A>);
          </li>
          <li>receive your data in a portable format;</li>
          <li>object to, or ask us to restrict, how we use your data.</li>
        </UL>
        <p>
          To use any of these rights, email <Mail />. We may ask you to confirm the request from the email address on
          your account. We'll respond within one month. It's free. Because the content of your Sekros and messages is
          encrypted, we can't include it in a copy of your data; it's on your devices.
        </p>
        <p>
          If you're unhappy with how we handle your data, please tell us first. You can also complain to the UK
          Information Commissioner's Office (ICO): <A href="https://ico.org.uk/make-a-complaint/">ico.org.uk</A>, or
          0303 123 1113.
        </p>
        <H3>If you live in the EU or Latin America</H3>
        {/* TODO(legal): review the EU and Latin America wording (e.g. Mexico LFPDPPP, Argentina 25.326, Brazil LGPD,
            Colombia, Chile). */}
        <p>
          If you're in the European Union, you have the same rights under the EU GDPR and can also complain to the data
          protection authority in your country. Many Latin American countries give you similar rights, often called
          access, rectification, cancellation and objection (ARCO) rights. Contact us at the same address and we'll
          honour them; you can also contact your national data protection authority.
        </p>
      </>
    ),
  },
  {
    id: "age",
    title: "Minimum age",
    body: (
      <p>
        Sekro is only for people aged <B>18 or over</B>. We don't knowingly collect data from anyone younger. If you
        believe someone under 18 is using Sekro, contact us and we'll close the account.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        Content is encrypted on your device with modern, standard cryptography (P-256, AES-256-GCM), and connections to
        our servers are encrypted. Passwords are hashed with Argon2id, and we keep access to our systems to a minimum. No
        system is perfectly secure, so please use a strong password and passphrase and keep your phone locked.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy as Sekro changes. We'll change the “Last updated” date above and, for significant
        changes, tell you in the app or by email before they take effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        {SEKRO_LEGAL.company}, {SEKRO_LEGAL.registeredOffice}. Email: <Mail />.
      </p>
    ),
  },
];
