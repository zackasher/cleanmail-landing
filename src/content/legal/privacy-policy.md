# Privacy Policy

**Last updated:** June 23, 2026

Calibrate LLC ("we," "our," or "us") operates CleanMail, an AI-powered email digest service available on iOS. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using CleanMail, you agree to the practices described here.

This policy is hosted at https://cleanmailapp.com/privacy and is referenced from our OAuth consent screen and in-app Settings.

---

## 1. Information We Collect

We collect only the information necessary to provide the CleanMail service.

**Information you provide directly:**
- Your name and email address, obtained from your Google account when you sign in.
- People, activities, and sender lists you configure in onboarding.
- Profile photos you upload for each person (optional).
- Subscription and payment information you provide to Stripe at checkout. We do not store or have access to your full payment card details — only the subscription status returned by Stripe.

**Information collected from Google APIs (with your authorization):**
- The email address of your Google account.
- For each email sender you have explicitly selected: sender email, subject line, date, and message body, used to generate your digest summaries.
- When you tap "View Email" on a digest item, the full original message (subject, sender, date, and body) of that specific email, fetched on demand at the moment you open it so we can display it inside the app. See Section 2 for how that message is located, including in your Trash or Spam.
- Calendar event metadata for events we create, update, or delete on your behalf.

**Information collected automatically:**
- Your selected time zone (used to schedule digest generation in your local time).
- Anonymous error logs containing no email content (used to diagnose app problems).

---

## 2. Google API Services and Limited Use

CleanMail uses the following Google API scopes:

- `openid`, `profile`, `email` — to identify your Google account and sign you in.
- `https://www.googleapis.com/auth/gmail.readonly` — used in two ways: (a) to read emails from senders you have explicitly added to your digest, in order to generate your digest summaries; and (b) when you tap "View Email" on a digest item, to retrieve that one specific message so we can display the full original email inside the app. To locate the message you tapped, we search your Gmail account by its message identifier across all folders, **including Trash and Spam**, so an email you have deleted (but not permanently removed) can still be opened from your digest. We do not browse, index, or bulk-collect your mailbox; we read selected senders' mail for digests, and we fetch a single message only when you explicitly open it.
- `https://www.googleapis.com/auth/calendar.events` — to create, update, and delete calendar events extracted from your digest emails, and to read your existing calendar events so we can display them alongside your Cleanmail events in the app. Google's consent screen describes this permission as "View and edit events on all calendars you have access to in Google Calendar." In practice, Cleanmail only writes to your primary calendar, only creates, updates, and deletes events it extracted for you, and never modifies or deletes an event that Cleanmail did not create.

**Google API Services Limited Use disclosure:** CleanMail's use and transfer of information received from Google APIs to any other app will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. Specifically:

- We use Gmail data only to provide and improve user-facing features that are prominent in CleanMail's user interface (the email digest, the in-app email viewer, and calendar sync features).
- We do not use Gmail data for serving advertisements.
- We do not allow humans to read your Gmail data, except (a) with your explicit consent, (b) when necessary for security purposes such as investigating abuse, (c) to comply with applicable law, or (d) when the data has been aggregated and anonymized for internal operations.
- We do not transfer Gmail data to others unless necessary to provide CleanMail's user-facing features (see Section 4 below).
- We do not sell Gmail data.

---

## 3. How We Use Your Information

We use your information solely to provide CleanMail:

- Generate digest summaries from emails sent by senders you have selected.
- Display the full original email inside the app when you choose to open a digest item.
- Extract event dates and times from those emails and create corresponding entries on your Google Calendar.
- Deliver push notifications when a new digest is ready.
- Process subscription payments and manage your account.
- Diagnose and resolve technical issues.

We do not sell, rent, or share your personal information with third parties for marketing purposes.

---

## 4. Third-Party Sub-Processors

CleanMail relies on the following third parties to provide its service. Each receives only the data necessary for its function:

| Service | Purpose | Data shared |
|---|---|---|
| **Supabase** (Supabase Inc., hosted in US East — Ohio) | Database and serverless functions | Your profile, digest content, events, subscription state |
| **Anthropic** (Anthropic PBC) | AI digest generation via Claude API | Email subject + body for emails you have authorized, sent at request time and not stored at Anthropic per their API terms |
| **Google** (Google LLC) | Sign-in, Gmail access, Calendar sync | OAuth tokens; Gmail messages from selected senders; the individual message you open via "View Email"; Calendar event metadata |
| **Stripe** (Stripe, Inc.) | Subscription billing | Email address, subscription status, payment status (we never see card numbers) |
| **Resend** (Resend, Inc.) | Transactional email delivery (partner invitations) | The recipient email address you enter when inviting a partner, and the inviter's display name |
| **Apple Push Notification service** | Delivery of push notifications | Anonymous device token |
| **Trigger.dev** | Scheduled job execution for digest delivery | User ID and digest ID at scheduled times — no email content |

We do not transfer Gmail data to any sub-processor other than Anthropic (for digest generation) and Supabase (for storage of the AI-generated summary, not the raw email). The full body of an email you open via "View Email" is retrieved from Google and rendered on your device; it is not stored on our servers (see Section 5).

---

## 5. Data Storage and Location

All data is stored in the Supabase region US East (Ohio). Raw email content is not stored at rest — emails are fetched from Gmail at digest-generation time, sent to Anthropic's API for summarization, and discarded after the AI-generated summary is written to our database. Likewise, when you open an email via "View Email," its full body is fetched from Gmail and rendered on your device for that viewing session only; it is not written to our database.

The following are stored persistently:
- Your profile (name, email, time zone, subscription state).
- AI-generated digest summaries (text only, no raw email bodies).
- Calendar event records linked to your account.
- People, activities, and sender configurations you set up.

---

## 6. Shared Digests (Partner Accounts)

CleanMail lets two people — for example, two parents — share one digest as co-equal participants. The account that creates the digest is the **primary account**; a second person who joins is a **partner account**. Both see and manage the same shared digest. This is different from linking an additional Gmail inbox to your *own* account (a "linked inbox"), which pools your own mailboxes and does not involve a second person; this section concerns partner accounts only.

**Each person connects their own Google account, and neither can read the other's mailbox.** Sender discovery — the search that finds senders to add to a digest — only ever searches the mailbox of the person performing the search. As a result:

- A partner can only add senders that appear in **their own** connected mailbox. Neither participant can search, browse, list, or otherwise enumerate the other participant's inbox.
- Because every sender in a shared digest was added by the person whose mailbox it came from, each participant has, by adding a sender, consented to that sender's emails being summarized into the shared digest.
- Emails that are summarized into the shared digest can be opened by either participant via "View Email," including emails sourced from the other participant's mailbox. This is limited to emails that have been surfaced in the shared digest through a sender one of you added; it does not allow either participant to retrieve arbitrary mail from the other's inbox.

**Each participant's Gmail credentials remain private to them.** A partner's mailbox feeds the shared digest using that partner's own live authorization; we do not copy one participant's Google access to the other.

**Leaving or being removed from a shared digest.** A primary account can remove a partner, and a partner can leave on their own, at any time. When a partner leaves or is removed:
- Their access to the shared digest ends immediately, and their own mailbox stops contributing new emails to it.
- The email senders that the departing participant had added are automatically removed from the shared digest, so that participant's mailbox no longer feeds it in any form. The digest summaries and calendar events already created from those emails **remain in the shared digest** for the remaining participant; leaving does not delete the shared digest's existing summaries or events.
- The departing partner is no longer charged anything for the shared digest; to continue using CleanMail with their own digest, they would start their own subscription.

To permanently delete your own personal data, see Section 7 (Account Deletion).

---

## 7. Data Retention and Account Deletion

Digest history is retained for the period you select in Settings (default 30 days; configurable up to 60 days). Older history is automatically deleted.

You may permanently delete your account and all associated data at any time from within the app: Settings → Delete Account. Account deletion is immediate and removes:
- Your profile and all in-app data (people, activities, senders, digest history, events) for digests you own.
- Profile photos from our storage.
- Your Stripe customer record (subscriptions are canceled automatically).
- Your stored Google refresh token (revoked with Google), and the credentials for any additional inboxes you have linked (each revoked with Google and deleted).

**If you are part of a shared digest:**
- If you are a **partner** (you joined someone else's digest), deleting your account removes you from that shared digest. The shared digest itself, and the content you contributed to it, remain for the primary account. Your own profile and personal data are deleted.
- If you are the **primary** (you own the shared digest), deleting your account deletes the shared digest and all of its content for every participant. Any partner is removed and, on their next use of CleanMail, would need to start their own digest and subscription.

After deletion, no recovery is possible. If you have trouble deleting your account in the app, contact support@cleanmailapp.com and we will delete it manually within 30 days.

---

## 8. Your Rights

Depending on your jurisdiction, you may have the right to:
- **Access** the personal data we hold about you.
- **Correct** inaccurate data (you can edit most of this yourself in Settings).
- **Delete** your account and associated data (see Section 7).
- **Export** your data in a portable format — contact support@cleanmailapp.com.
- **Withdraw consent** for Google API access at any time via [Google account permissions](https://myaccount.google.com/permissions). Revoking access will stop CleanMail from generating new digests.

Residents of California (CCPA) and the European Union (GDPR) have additional rights under applicable law. To exercise any of these rights, contact support@cleanmailapp.com.

---

## 9. Security

We use industry-standard security measures including TLS-encrypted data transmission, encrypted storage via Supabase, and access controls on our serverless functions. OAuth tokens are stored encrypted at rest and never exposed to client devices.

No system is 100% secure. If we become aware of a data breach affecting your personal information, we will notify you by email within 72 hours and report the incident as required by applicable law.

---

## 10. Children's Privacy

CleanMail is not directed at children under 13, and we do not knowingly collect personal information from anyone under 13. If you believe a child under 13 has provided personal information to us, contact support@cleanmailapp.com and we will delete it.

---

## 11. Legal Requests

We may disclose personal information when required to do so by law, such as in response to a subpoena, court order, or other legal process. We will notify you of any such request unless prohibited by law.

---

## 12. Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be communicated by email and by updating the date at the top of this policy. Continued use of CleanMail after changes take effect constitutes acceptance of the updated policy.

---

## 13. Contact

Questions about this Privacy Policy:

**Calibrate LLC**
support@cleanmailapp.com

For privacy-specific inquiries, please include "Privacy" in the subject line.
