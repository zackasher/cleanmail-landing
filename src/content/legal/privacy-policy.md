# Privacy Policy

**Last updated:** June 8, 2026

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
- For each email sender you have explicitly selected: sender email, subject line, date, and message body.
- Calendar event metadata for events we create or update on your behalf.

**Information collected automatically:**
- Your selected time zone (used to schedule digest generation in your local time).
- Anonymous error logs containing no email content (used to diagnose app problems).

---

## 2. Google API Services and Limited Use

CleanMail uses the following Google API scopes:

- `openid`, `profile`, `email` — to identify your Google account and sign you in.
- `https://www.googleapis.com/auth/gmail.readonly` — to read emails from senders you have explicitly added to your digest. We do not read emails from any other sender.
- `https://www.googleapis.com/auth/calendar` — to create and update calendar events extracted from your digest emails.

**Google API Services Limited Use disclosure:** CleanMail's use and transfer of information received from Google APIs to any other app will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. Specifically:

- We use Gmail data only to provide and improve user-facing features that are prominent in CleanMail's user interface (the email digest and calendar sync features).
- We do not use Gmail data for serving advertisements.
- We do not allow humans to read your Gmail data, except (a) with your explicit consent, (b) when necessary for security purposes such as investigating abuse, (c) to comply with applicable law, or (d) when the data has been aggregated and anonymized for internal operations.
- We do not transfer Gmail data to others unless necessary to provide CleanMail's user-facing features (see Section 4 below).
- We do not sell Gmail data.

---

## 3. How We Use Your Information

We use your information solely to provide CleanMail:

- Generate digest summaries from emails sent by senders you have selected.
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
| **Google** (Google LLC) | Sign-in, Gmail access, Calendar sync | OAuth tokens, Gmail messages from selected senders, Calendar event metadata |
| | **Stripe** (Stripe, Inc.) | Subscription billing | Email address, subscription status, payment status (we never see card numbers) |
| **Apple Push Notification service** | Delivery of push notifications | Anonymous device token |
| **Trigger.dev** | Scheduled job execution for digest delivery | User ID and digest ID at scheduled times — no email content |

We do not transfer Gmail data to any sub-processor other than Anthropic (for digest generation) and Supabase (for storage of the AI-generated summary, not the raw email).

---

## 5. Data Storage and Location

All data is stored in the Supabase region US East (Ohio). Raw email content is not stored at rest — emails are fetched from Gmail at digest-generation time, sent to Anthropic's API for summarization, and discarded after the AI-generated summary is written to our database.

The following are stored persistently:
- Your profile (name, email, time zone, subscription state).
- AI-generated digest summaries (text only, no raw email bodies).
- Calendar event records linked to your account.
- People, activities, and sender configurations you set up.

---

## 6. Data Retention and Account Deletion

Digest history is retained for the period you select in Settings (default 30 days; configurable up to 60 days). Older history is automatically deleted.

You may permanently delete your account and all associated data at any time from within the app: Settings → Delete Account. Account deletion is immediate and removes:
- Your profile and all in-app data (people, activities, senders, digest history, events).
- Profile photos from our storage.
- Your Stripe customer record (subscriptions are canceled automatically).
- Your stored Google refresh token (revoked with Google).

After deletion, no recovery is possible. If you have trouble deleting your account in the app, contact support@cleanmailapp.com and we will delete it manually within 30 days.

---

## 7. Your Rights

Depending on your jurisdiction, you may have the right to:
- **Access** the personal data we hold about you.
- **Correct** inaccurate data (you can edit most of this yourself in Settings).
- **Delete** your account and associated data (see Section 6).
- **Export** your data in a portable format — contact support@cleanmailapp.com.
- **Withdraw consent** for Google API access at any time via [Google account permissions](https://myaccount.google.com/permissions). Revoking access will stop CleanMail from generating new digests.

Residents of California (CCPA) and the European Union (GDPR) have additional rights under applicable law. To exercise any of these rights, contact support@cleanmailapp.com.

---

## 8. Security

We use industry-standard security measures including TLS-encrypted data transmission, encrypted storage via Supabase, and access controls on our serverless functions. OAuth tokens are stored encrypted at rest and never exposed to client devices.

No system is 100% secure. If we become aware of a data breach affecting your personal information, we will notify you by email within 72 hours and report the incident as required by applicable law.

---

## 9. Children's Privacy

CleanMail is not directed at children under 13, and we do not knowingly collect personal information from anyone under 13. If you believe a child under 13 has provided personal information to us, contact support@cleanmailapp.com and we will delete it.

---

## 10. Legal Requests

We may disclose personal information when required to do so by law, such as in response to a subpoena, court order, or other legal process. We will notify you of any such request unless prohibited by law.

---

## 11. Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be communicated by email and by updating the date at the top of this policy. Continued use of CleanMail after changes take effect constitutes acceptance of the updated policy.

---

## 12. Contact

Questions about this Privacy Policy:

**Calibrate LLC**
support@cleanmailapp.com

For privacy-specific inquiries, please include "Privacy" in the subject line.
