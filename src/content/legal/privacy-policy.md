# Privacy Policy

**Last updated:** September 8, 2026

Calibrate LLC ("we," "our," or "us") operates Cleanmail, an AI-powered email digest service available on iOS. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using Cleanmail, you agree to the practices described here.

This policy is hosted at https://cleanmailapp.com/privacy and is referenced from our OAuth consent screen and in-app Settings.

---

## 1. Information We Collect

We collect only the information necessary to provide the Cleanmail service.

**Information you provide directly:**
- Your name and email address, obtained from your Google account when you sign in.
- People, activities, and sender lists you configure in onboarding.
- Profile photos you upload for each person (optional).
- Subscription purchases are processed by Apple through in-app purchase. We never see or store your payment card details; we receive only your subscription status from Apple.

**Information collected from Google APIs (with your authorization):**
- The email address of your Google account.
- For each email sender you have explicitly selected: sender email, subject line, date, and message body, used to generate your digest summaries.
- When you tap "View Email" on a digest item, the full original message (subject, sender, date, and body) of that specific email, fetched on demand at the moment you open it so we can display it inside the app. See Section 2 for how that message is located, including in your Trash or Spam.
- Calendar event metadata for events we create, update, or delete on your behalf.

**Information collected automatically:**
- Your selected time zone (used to schedule digest generation in your local time).
- Server-side diagnostic logs recording account identifiers, timestamps, and whether an operation succeeded or failed. These contain no email content. Cleanmail uses no third-party analytics, advertising, or crash-reporting service.

---

## 2. Google API Services and Limited Use

Cleanmail uses the following Google API scopes:

- `openid`, `profile`, `email` — to identify your Google account and sign you in.
- `https://www.googleapis.com/auth/gmail.readonly` — used in two ways: (a) to read emails from senders you have explicitly added to your digest, in order to generate your digest summaries; and (b) when you tap "View Email" on a digest item, to retrieve that one specific message so we can display the full original email inside the app. To locate the message you tapped, we search your Gmail account by its message identifier across all folders, **including Trash and Spam**, so an email you have deleted (but not permanently removed) can still be opened from your digest. We do not browse, index, or bulk-collect your mailbox; we read selected senders' mail for digests, and we fetch a single message only when you explicitly open it.
- `https://www.googleapis.com/auth/calendar.events` — to create, update, and delete calendar events extracted from your digest emails, and to read your existing calendar events so we can display them alongside your Cleanmail events in the app. Google's consent screen describes this permission as "View and edit events on all calendars you have access to in Google Calendar." In practice, Cleanmail only writes to your primary calendar, only creates, updates, and deletes events it extracted for you, and never modifies or deletes an event that Cleanmail did not create.

**Google API Services Limited Use disclosure:** Cleanmail's use and transfer of information received from Google APIs to any other app will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. Specifically:

- We use Gmail data only to provide and improve user-facing features that are prominent in Cleanmail's user interface (the email digest, the in-app email viewer, and calendar sync features).
- We do not use Gmail data for serving advertisements.
- We do not allow humans to read your Gmail data, except (a) with your explicit consent, (b) when necessary for security purposes such as investigating abuse, (c) to comply with applicable law, or (d) when the data has been aggregated and anonymized for internal operations.
- We do not transfer Gmail data to others unless necessary to provide Cleanmail's user-facing features (see Section 4 below).
- We do not sell Gmail data.

---

## 3. How We Use Your Information

We use your information solely to provide Cleanmail:

- Generate digest summaries from emails sent by senders you have selected.
- Display the full original email inside the app when you choose to open a digest item.
- Extract event dates and times from those emails and create corresponding entries on your Google Calendar.
- Deliver push notifications when a new digest is ready.
- Process subscription payments and manage your account.
- Diagnose and resolve technical issues.

We do not sell, rent, or share your personal information with third parties for marketing purposes.

---

## 4. Third-Party Sub-Processors

Cleanmail relies on the following third parties to provide its service. Each receives only the data necessary for its function:

| Service | Purpose | Data shared |
|---|---|---|
| **Supabase** (Supabase Inc., hosted in US East — Ohio) | Database and serverless functions | Your profile, digest content, events, subscription state |
| **Anthropic** (Anthropic PBC) | AI summarization and event extraction via the Claude API | (a) the subject line and message body of emails from senders you have selected; (b) photos and PDFs you choose to scan; (c) the text of voice notes you record, which your device transcribes before anything is sent. Sent at the time of the request and not used to train Anthropic's models. |
| **Google** (Google LLC) | Sign-in, Gmail access, Calendar sync | OAuth tokens; Gmail messages from selected senders; the individual message you open via "View Email"; Calendar event metadata |
| **Apple** (Apple Inc.) | Subscription billing via in-app purchase | Purchase and subscription status (we never see card numbers or your Apple Account details) |
| **Resend** (Resend, Inc.) | Transactional email delivery (household invitations) | The recipient email address you enter when inviting a household member, and the inviter's display name |
| **Apple Push Notification service** | Delivery of push notifications | Anonymous device token |
| **Trigger.dev** | Scheduled job execution for digest delivery | User ID and digest ID at scheduled times — no email content |

Anthropic is the only third party that receives your email content, your scanned documents, or the text of your voice notes, and it receives them only to produce the summaries and events you asked for. We do not send any of that content to any other AI service. Supabase stores the resulting summaries and events, not the raw email. The full body of an email you open via "View Email" is retrieved from Google and rendered on your device; it is not stored on our servers (see Section 5).

Every sub-processor listed above is bound by its agreement with us to protect the data it receives to a standard equal to or greater than the protections described in this policy, and to use that data only to provide the service described in its row.

---

## 5. Data Storage and Location

All data is stored in the Supabase region US East (Ohio). Raw email content is not stored at rest — emails are fetched from Gmail at digest-generation time, sent to Anthropic's API for summarization, and discarded after the AI-generated summary is written to our database. Likewise, when you open an email via "View Email," its full body is fetched from Gmail and rendered on your device for that viewing session only; it is not written to our database.

Photos and PDFs you scan are uploaded to a private storage area on our servers only for as long as it takes to read them, then deleted as the final step of the scan, whether it succeeded or failed. Voice notes are transcribed to text on your device; the audio recording itself is never uploaded and is never stored.

The following are stored persistently:
- Your profile (name, email, time zone, subscription state).
- AI-generated digest summaries (text only, no raw email bodies).
- Calendar event records linked to your account.
- People, activities, and sender configurations you set up.

---

## 6. Shared Digests (Household)

Cleanmail lets a household share one digest: up to four people in total. The person who creates the digest is the **Primary**. The Primary can invite up to three other people to join. Any other adults the Primary designates are **Household Leads**, who can help manage the digest and the permissions of the other people in it; everyone else is a **Household Member**. Everyone in the household sees the same shared digest. This is different from linking an additional Gmail inbox to your *own* account (a "linked inbox"), which pools your own mailboxes and does not involve anyone else; this section concerns shared household digests only.

**Each person connects their own Google account, and no one can read anyone else's mailbox.** Sender discovery, the search that finds senders to add to a digest, only ever searches the mailbox of the person performing the search. As a result:

- Each person can only add senders that appear in **their own** connected mailbox. No one in the household can search, browse, list, or otherwise enumerate another person's inbox.
- Because every sender in a shared digest was added by the person whose mailbox it came from, each person has, by adding a sender, consented to that sender's emails being summarized into the shared digest.
- Emails that are summarized into the shared digest can be opened by anyone in the household via "View Email," including emails sourced from another person's mailbox. This is limited to emails that have been surfaced in the shared digest through a sender someone added; it does not allow anyone to retrieve arbitrary mail from another person's inbox.

**Each person's Gmail credentials remain private to them.** Each person's mailbox feeds the shared digest using that person's own live authorization; we do not copy one person's Google access to anyone else.

**Leaving or being removed from a shared digest.** The Primary can remove any Household Lead or Household Member, and anyone can leave on their own, at any time. When someone leaves or is removed:
- Their access to the shared digest ends immediately, and their own mailbox stops contributing new emails to it.
- The email senders that the departing person had added are automatically removed from the shared digest, so their mailbox no longer feeds it in any form. The digest summaries and calendar events already created from those emails **remain in the shared digest** for the rest of the household; leaving does not delete the shared digest's existing summaries or events.
- Only the Primary is charged for the household; Household Leads and Household Members share the digest at no additional cost. Someone who leaves and later wants their own digest would start their own subscription.

To permanently delete your own personal data, see Section 7 (Account Deletion).

---

## 7. Data Retention and Account Deletion

Digest history is retained for the period you select in Settings (default 30 days; configurable up to 60 days). Older history is automatically deleted.

You may permanently delete your account and all associated data at any time from within the app: Settings → Delete Account. Account deletion is immediate and removes:
- Your profile and all in-app data (people, activities, senders, digest history, events) for digests you own.
- Profile photos from our storage.
- Your billing records held by us. Subscriptions purchased through Apple must be canceled in your Apple Account settings; deleting your Cleanmail account does not cancel an Apple subscription.
- Your stored Google refresh token (revoked with Google), and the credentials for any additional inboxes you have linked (each revoked with Google and deleted).

**If you are part of a shared digest:**
- If you are a **Household Lead** or **Household Member** (you joined someone else's digest), deleting your account removes you from that shared digest. The shared digest itself, and the content you contributed to it, remain for the Primary and the rest of the household. Your own profile and personal data are deleted.
- If you are the **Primary** (you created the shared digest), deleting your account deletes the shared digest and all of its content for everyone in the household. Everyone else is removed and, on their next use of Cleanmail, would need to start their own digest and subscription.

After deletion, no recovery is possible. If you have trouble deleting your account in the app, contact support@cleanmailapp.com and we will delete it manually within 30 days.

---

## 8. Your Rights

Depending on your jurisdiction, you may have the right to:
- **Access** the personal data we hold about you.
- **Correct** inaccurate data (you can edit most of this yourself in Settings).
- **Delete** your account and associated data (see Section 7).
- **Export** your data in a portable format — contact support@cleanmailapp.com.
- **Withdraw consent** for Google API access at any time via [Google account permissions](https://myaccount.google.com/permissions). Revoking access will stop Cleanmail from generating new digests.

Residents of California (CCPA) and the European Union (GDPR) have additional rights under applicable law. To exercise any of these rights, contact support@cleanmailapp.com.

---

## 9. Security

We use industry-standard security measures including TLS-encrypted data transmission, encrypted storage via Supabase, and access controls on our serverless functions. OAuth tokens are stored encrypted at rest and never exposed to client devices.

No system is 100% secure. If we become aware of a data breach affecting your personal information, we will notify you by email within 72 hours and report the incident as required by applicable law.

---

## 10. Children's Privacy

Cleanmail is not directed at children under 13, and we do not knowingly collect personal information from anyone under 13. If you believe a child under 13 has provided personal information to us, contact support@cleanmailapp.com and we will delete it.

---

## 11. Legal Requests

We may disclose personal information when required to do so by law, such as in response to a subpoena, court order, or other legal process. We will notify you of any such request unless prohibited by law.

---

## 12. Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be communicated by email and by updating the date at the top of this policy. Continued use of Cleanmail after changes take effect constitutes acceptance of the updated policy.

---

## 13. Contact

Questions about this Privacy Policy:

**Calibrate LLC**
support@cleanmailapp.com

For privacy-specific inquiries, please include "Privacy" in the subject line.
