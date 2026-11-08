import { A, B, H3, Mail, UL, type LegalSection } from "@/components/site/LegalPage";
import { SEKRO_LEGAL, SEKRO_RETENTION } from "@/lib/sekro-legal";

// Every statement here was checked against sekro-api and the Sekro iOS app (Nov 2026).
// Keep it in step with the code: if what we store changes, change this page.

export const privacyIntro = (
  <>
    <p>
      Sekro hides end-to-end encrypted photos, videos, audio and messages inside ordinary-looking images. This policy
      explains what we collect when you use Sekro, what we can't see, and the choices you have.
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
        <p>
          The hidden content of a Sekro (the photo, video or audio inside it) and the text of your chat messages are{" "}
          <B>end-to-end encrypted</B> on your device before they reach us. Only the people you sent them to, and you,
          can open them. We don't have the keys, so we can't decrypt them, and we can't give them to anyone else.
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
          <li>Your app language, and when you created your account and accepted the Terms.</li>
          {/* TODO(legal): the API has display_name and avatar_url fields but the app can't set them yet (always
              empty). Keep this line only while the wording "if you add one" stays true. */}
          <li>A display name and profile picture, if you add them.</li>
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
            Sekro image files you send or save to your Gallery, encrypted video and audio files, and their size and
            checksum. Your Gallery's details (such as who a Sekro was for) are encrypted for your account.
          </li>
          <li>
            Screenshot and screen-recording alerts: if someone captures a Sekro you sent them while it's revealed, we
            record that it happened and when, and show it to both of you. The capture itself never reaches us.
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
          don't have access to them.
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
          When you report something you received, your device sends us: the decrypted content (photo, video, audio or
          text), the Sekro image file, the reason you chose, any note you add, who sent it and when, and your account. You
          can also block the sender at the same time.
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
            <B>Account data, keys, contacts and messages</B>: while your account exists. “Delete for me” removes a
            message from your view on all your devices; the other person keeps their copy.
          </li>
          {/* TODO(legal): photo Sekros sent in a chat (the `media` collection) are never deleted from storage once
              sent, and message records stay after both people "Delete for me". Either add deletion in sekro-api or
              keep this wording. */}
          <li>
            <B>Uploads that are never sent or saved</B>: deleted automatically after 24 hours.
          </li>
          <li>
            <B>Gallery items</B>: deleted when you delete them.
          </li>
          <li>
            <B>Encrypted video and audio files</B>: deleted when nothing refers to them any more (no Gallery item and no
            chat message that both people still keep), or straight away when you choose “Delete everywhere”.
          </li>
          <li>
            <B>Reports</B>: {SEKRO_RETENTION.reports.en}.
          </li>
          <li>
            <B>Security logs</B>: {SEKRO_RETENTION.securityLogs.en}.
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
        {/* TODO(legal): there is no account deletion in the app or the API yet. Apple requires apps that let
            people create an account to let them delete it in the app (App Store Review Guideline 5.1.1(v)). Build
            it, then replace this section with the in-app steps (e.g. Profile › Delete account) and exactly what it
            deletes. Until then, deletion is handled by email, as below. */}
        <p>
          To delete your account, email <Mail /> from the email address on your account and tell us your username. We'll
          confirm the request and delete your account within one month.
        </p>
        <p>
          When your account is deleted, we delete your account details, keys and key backup, contacts, invites, blocks,
          devices and push tokens, and your Gallery and media files. Some things are outside our control or may be
          kept:
        </p>
        <UL>
          <li>Sekros and messages you sent stay on the recipients' devices, and Sekro files shared outside the app can't be recalled.</li>
          <li>Reports and security logs are kept for the periods above.</li>
          <li>We keep information we're required to keep by law, or need for a legal claim.</li>
        </UL>
        <p>
          You can also sign out of Sekro on your device at any time. Signing out removes your keys and local chat history
          from that device.
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
          <li>have your data deleted;</li>
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
