import { A, B, H3, Mail, UL, type LegalSection } from "@/components/site/LegalPage";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

// TODO(legal): the whole document needs legal review before publishing, in particular sections 9-12
// (liability, consumer rights wording, governing law) and the Online Safety Act 2023 duties for a
// user-to-user service (illegal content, reporting, complaints).

export const termsIntro = (
  <>
    <p>
      These terms are the agreement between you and {SEKRO_LEGAL.company} for using Sekro. By creating an account you
      accept them. Please read them together with our <A href={SEKRO_PATHS.privacy.en}>Privacy Policy</A>.
    </p>
  </>
);

export const termsSections: LegalSection[] = [
  {
    id: "about",
    title: "About us and Sekro",
    body: (
      <>
        <p>
          Sekro is provided by {SEKRO_LEGAL.company}, a company registered in England and Wales (company number{" "}
          {SEKRO_LEGAL.companyNumber}), registered office {SEKRO_LEGAL.registeredOffice} (“we”, “us”).
        </p>
        <p>
          Sekro lets you hide end-to-end encrypted photos, videos, audio and messages inside ordinary-looking images and
          share them with your contacts. Contact us at <Mail />.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Who can use Sekro",
    body: (
      <UL>
        <li>
          You must be <B>18 or over</B>.
        </li>
        <li>You must be able to enter into a binding agreement, and not be barred from using Sekro by law.</li>
        <li>You must not use Sekro if we have previously banned your account.</li>
      </UL>
    ),
  },
  {
    id: "account",
    title: "Your account",
    body: (
      <>
        <UL>
          <li>Give us a real email address that you control, and keep your details up to date.</li>
          <li>
            Keep your password and devices secure. You're responsible for what happens on your account. Tell us straight
            away at <Mail /> if you think someone else has access to it.
          </li>
          <li>Your username must not impersonate anyone or be offensive.</li>
          <li>One person, one account. Don't sell, transfer or share your account.</li>
        </UL>
        <H3>Your Sekro passphrase</H3>
        <p>
          Your encryption keys are protected by a passphrase that only you know. We never receive it and can't reset it.{" "}
          <B>
            If you lose your passphrase and all your signed-in devices, the encrypted content sent to you cannot be
            recovered by anyone, including us.
          </B>{" "}
          You can create new keys, but anything encrypted for your old keys stays unreadable. Your login password is
          separate and can be reset by email.
        </p>
      </>
    ),
  },
  {
    id: "your-content",
    title: "Your content",
    body: (
      <>
        <p>
          You own what you create and send. You give us only the permission we need to store, transmit and display it to
          the people you choose, in order to run Sekro. Because content is end-to-end encrypted, we can't see it.
        </p>
        <p>
          You're responsible for what you send. Make sure you have the right to share it, and that the people in it have
          agreed. Remember that cover images are not encrypted, and that recipients can see, and may keep, what you send
          them.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You must not use Sekro to create, send, store or share, or to try to:</p>
        <UL>
          <li>anything illegal, or that encourages or helps someone break the law;</li>
          <li>
            <B>child sexual abuse material</B>, or anything that sexualises, exploits or endangers children;
          </li>
          <li>harass, bully, stalk, threaten or intimidate anyone;</li>
          <li>share intimate images of anyone without their consent, or threaten to;</li>
          <li>promote violence, terrorism or hatred against people;</li>
          <li>send spam, scams or unsolicited bulk messages;</li>
          <li>send malware or anything designed to damage devices or data;</li>
          <li>impersonate someone or mislead people about who you are;</li>
          <li>
            break or get around Sekro's security, rate limits or moderation, access other people's accounts, overload our
            servers, or scrape or reverse-engineer the service except where the law allows it.
          </li>
        </UL>
        <H3>Zero tolerance for child exploitation</H3>
        {/* TODO(legal): confirm our reporting obligations and process (NCA, IWF; Online Safety Act 2023 s.66 CSEA
            reporting duty) and how reported material is preserved and handed over. */}
        <p>
          We permanently ban any account we find sharing child sexual abuse material or exploiting children, and we
          report it to the relevant authorities, including the National Crime Agency (NCA) and the Internet Watch
          Foundation (IWF) in the UK.
        </p>
      </>
    ),
  },
  {
    id: "moderation",
    title: "Reporting and moderation",
    body: (
      <>
        <UL>
          <li>
            You can report any message or Sekro you receive from the app. You can choose a reason (abuse or harassment,
            illegal content, spam, or other), add a note, and block the sender at the same time.
          </li>
          <li>
            When you report, your device decrypts the content and sends it to us, with the Sekro file and details of who
            sent it and when. This is the only way we can see encrypted content. We review only what's reported to us.
          </li>
          <li>
            If we find a breach of these terms, we may suspend your account for a period or ban it permanently, depending
            on how serious it is. A suspended or banned account is signed out of every device.
          </li>
          <li>
            We may also act on information from outside the app (for example, a valid request from the authorities).
          </li>
        </UL>
        <H3>Appeals</H3>
        {/* TODO(legal): decide and state a response time for appeals. */}
        <p>
          If you think we've made a mistake, email <Mail /> from the address on your account, with your username and why
          you think the decision was wrong. A person will review it and tell you the outcome.
        </p>
      </>
    ),
  },
  {
    id: "law-enforcement",
    title: "Law enforcement",
    body: (
      <>
        {/* TODO(legal): add the process for verifying and responding to law-enforcement requests. */}
        <p>
          We respond to valid legal requests under UK law. We can only provide data we hold: account data (such as your
          username, email address and when you signed up) and metadata (such as who you're connected to and when messages
          were sent and delivered), plus anything that was reported to us. We can't provide the content of your Sekros or
          messages, because we don't have the keys to decrypt it, and we won't build a way to.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    title: "Availability and changes to Sekro",
    body: (
      <>
        <p>
          We work to keep Sekro running and secure, but we can't promise it will always be available or free of errors.
          We may need to pause it for maintenance or security. We may add, change or remove features. If a change
          significantly affects you, we'll tell you in advance where we reasonably can.
        </p>
        <p>
          Sekro doesn't replace a backup. Keep your passphrase safe; see “Your Sekro passphrase” above.
        </p>
      </>
    ),
  },
  {
    id: "as-is",
    title: "Sekro is provided “as is”",
    body: (
      <p>
        Sekro is provided “as is” and “as available”. As far as the law allows, we don't give any promises about Sekro
        beyond those in these terms. Nothing in these terms affects your legal rights as a consumer.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Our liability",
    body: (
      <>
        {/* TODO(legal): the £100 cap is a placeholder figure: set it (e.g. tied to what the user paid if Sekro becomes paid) and the consumer-law wording. */}
        <UL>
          <li>
            We don't exclude or limit our liability where it would be unlawful to, including for death or personal
            injury caused by our negligence, or for fraud.
          </li>
          <li>
            We're not responsible for losses that weren't foreseeable, for business losses, or for losses caused by
            things outside our reasonable control, by content other users send you, or by you losing your passphrase,
            password or device.
          </li>
          <li>
            Otherwise, as far as the law allows, our total liability to you is limited to £100.
          </li>
        </UL>
      </>
    ),
  },
  {
    id: "termination",
    title: "Ending this agreement",
    body: (
      <>
        <p>
          You can stop using Sekro at any time and ask us to delete your account (see the{" "}
          <A href={`${SEKRO_PATHS.privacy.en}#delete-account`}>Privacy Policy</A>).
        </p>
        <p>
          We may suspend or close your account if you seriously or repeatedly break these terms, if the law requires it,
          or if we stop providing Sekro. Where we reasonably can, we'll tell you why and give you notice.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms. We'll change the “Last updated” date and, for significant changes, tell you in the app
        or by email before they take effect. If you keep using Sekro after that, the new terms apply. If you don't agree,
        you can stop using Sekro and delete your account.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <>
        {/* TODO(legal): confirm wording for consumers in Scotland, Northern Ireland, the EU and Latin America. */}
        <p>
          These terms are governed by the law of England and Wales, and the courts of England and Wales have jurisdiction.
          If you live elsewhere in the UK or in another country, you keep the protection of the mandatory consumer laws
          where you live, and may also bring proceedings in your local courts.
        </p>
      </>
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
