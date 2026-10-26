# Privacy Policy

**Last updated:** October 26, 2026

Calibrate LLC ("we," "our," or "us") operates Cleanmail, an AI-powered email digest service available on iOS. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using Cleanmail, you agree to the practices described here.

This policy is hosted at https://cleanmailapp.com/privacy and is referenced from our OAuth consent screen and in-app Settings.

---

## 1. Information We Collect

We collect only the information needed to provide and improve Cleanmail.

**Information you provide directly:**
- Your name and email address, obtained from your Google account when you sign in.
- People, activities, and sender lists you configure in onboarding.
- Profile photos you upload for each person (optional).
- Information about your children and other household members that you choose to add, such as their names, schools, grades, teachers, activities and photos. You add this so we can sort your digest and events by person. We use it only to provide Cleanmail to you and your household.
- Notes and emoji reactions you leave on cards and events. Everyone in your household can see them.
- Subscription purchases are processed by Apple through in-app purchase. We never see or store your payment card details; we receive only your subscription status from Apple.

**Information collected from Google APIs (with your authorization):**
- The email address of your Google account.
- For each email sender you have explicitly selected: sender email, subject line, date, and message body, used to generate your digest summaries.
- When you tap "View Email" on a digest item, the full original message (subject, sender, date, and body) of that specific email, fetched on demand at the moment you open it so we can display it inside the app. See Section 2 for how that message is located, including in your Trash or Spam.
- Calendar event metadata for events we create, update, or delete on your behalf.
- If someone shares a Google Calendar with you: the calendar's name, its identifier, and the sharer's email address, from Google's sharing notice. We do not store the notice itself.

**Information about other people in your emails:** The emails you choose to include often mention other people, such as teachers, coaches, and other parents. That information is used only to write your digest and events, is visible only to you and your household, and is never used for any other purpose.

**Information collected automatically:**
- Your selected time zone (used to schedule digest generation in your local time).
- Server-side diagnostic logs recording account identifiers, timestamps, and whether an operation succeeded or failed. These contain no email content. The Cleanmail app uses no third-party analytics, advertising, or crash-reporting service.
- Setup progress: which setup steps you reached, whether you viewed or started a plan, whether sign-in completed (and if it did not, Apple's error code, your iOS version, and whether you are on an iPhone or iPad), and, if you choose to answer, a reason for stopping picked from a short fixed list, recorded with a random install identifier and, once you sign in, your account. It never includes email content, names, or search terms.
- Error reports: when the app hits an error, a short technical description of where it happened and what went wrong in the code, the app and update version, and your device platform, recorded with a random install identifier and, once you sign in, your account. They never include email content, names, event details, or sign-in tokens. Error reports are deleted after 30 days.
- App version and activity: the app and update version you are running, your device platform, and when you last opened the app or returned to it, kept with your account so we can see whether a fix has reached you and how many people use the app. It is one record per account, replaced each time, and never includes email content.
- Referrals: if you sign up with another member's referral code, we record the link between your account and theirs so we can reward them. They are notified when a friend they invited gets a first digest and first subscribes, and receive their reward if you stay subscribed. These notifications never include your name, email, or any of your content. Each member's referral code is a random six-character code.

**Our website:** Our website can use Microsoft Clarity (to understand how visitors use the site, such as clicks and scrolling), Google Analytics (to count visits and see which pages people read), and the Reddit and Meta pixels (to measure how our ads perform, such as page visits and taps on the App Store button). None of these load unless you choose Accept on the cookie banner, and none load if your browser sends a Global Privacy Control signal. You can change your choice at any time from the Cookie settings link at the bottom of every page. None of them load for visitors in the European Economic Area, the United Kingdom or Switzerland, or when we cannot tell where a visitor is. See [Microsoft's privacy statement](https://privacy.microsoft.com/privacystatement), [Google's privacy policy](https://policies.google.com/privacy), [Reddit's privacy policy](https://www.reddit.com/policies/privacy-policy) and [Meta's privacy policy](https://www.facebook.com/privacy/policy/). These website tools never receive anything from the Cleanmail app, your email, or your account.

---

## 2. Google API Services and Limited Use

Cleanmail uses the following Google API scopes:

- `openid`, `profile`, `email`: to identify your Google account and sign you in.
- `https://www.googleapis.com/auth/gmail.readonly`: used in three ways: (a) to read emails from senders you have explicitly added to your digest, in order to generate your digest summaries; (b) when you tap "View Email" on a digest item, to retrieve that one specific message so we can display the full original email inside the app; and (c) to find Google Calendar's sharing notices, the messages Google sends when someone shares a calendar with you, so we can offer to show that calendar in Cleanmail. From a sharing notice we keep only the calendar's name, its identifier, and the sharer's email address. To locate the message you tapped, we search your Gmail account by its message identifier across all folders, **including Trash and Spam**, so an email you have deleted (but not permanently removed) can still be opened from your digest. We do not browse, index, or bulk-collect your mailbox; we read selected senders' mail for digests, look only for Google's calendar-sharing notices, and fetch a single message only when you explicitly open it.
- `https://www.googleapis.com/auth/calendar.events`: to create, update, and delete calendar events extracted from your digest emails, and to read events on your calendars, including calendars shared with you that you choose to show, so we can display them alongside your Cleanmail events in the app. Google's consent screen describes this permission as "View and edit events on all calendars you have access to in Google Calendar." In practice, Cleanmail writes only to one calendar you choose (your primary calendar, unless you pick a shared calendar you can edit), only creates, updates, moves, and deletes events it extracted for you, and never modifies or deletes an event that Cleanmail did not create. If you choose a different calendar, Cleanmail moves your upcoming Cleanmail events there; past events stay where they are. To keep Cleanmail in step with your calendar, we also subscribe to Google's change notices for the calendars that hold your Cleanmail events. When you edit or delete a Cleanmail event in Google Calendar, Cleanmail applies that change in the app. We read these changes only to recognize edits to Cleanmail's own events; changes to other events are ignored and nothing from them is stored.

**Google API Services Limited Use disclosure:** Cleanmail's use and transfer of information received from Google APIs to any other app will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. Specifically:

- We use Gmail data only to provide and improve user-facing features that are prominent in Cleanmail's user interface (the email digest, the in-app email viewer, calendar sync features, and offering calendars shared with you).
- We do not use Gmail data for serving advertisements.
- We do not allow humans to read your Gmail data, or anything derived from it such as your digest summaries and events, except (a) with your explicit consent to view specific messages or data, (b) when necessary for security purposes, such as investigating a bug or abuse, (c) to comply with applicable law, or (d) when the data has been aggregated and anonymized for internal operations.
- We do not transfer Gmail data to others unless necessary to provide Cleanmail's user-facing features (see Section 4 below).
- We do not sell Gmail data.
- We do not use Google user data, including Gmail and Google Calendar data, to develop, improve, or train generalized or non-personalized artificial intelligence or machine learning models.
- Before we change how we use Google user data, we will tell you and ask for your consent.

---

## 3. How We Use Your Information

We use your information solely to provide and improve Cleanmail:

- Generate digest summaries from emails sent by senders you have selected.
- Display the full original email inside the app when you choose to open a digest item.
- Extract event dates and times from those emails and create corresponding entries on your Google Calendar.
- Offer to show calendars other people have shared with you, and add your events to the calendar you choose.
- Keep your Cleanmail events in step with Google Calendar: when you edit or delete one in Google Calendar, the app reflects it.
- Deliver push notifications when a new digest is ready.
- Process subscription payments and manage your account.
- Diagnose and resolve technical issues.
- Understand where people get stuck during setup, so we can make it easier.
- Count how many people use the app.

We do not sell, rent, or share your personal information with third parties for marketing purposes.

---

## 4. Third-Party Sub-Processors

Cleanmail relies on the following third parties to provide its service. Each receives only the data necessary for its function:

| Service | Purpose | Data shared |
|---|---|---|
| **Supabase** (Supabase Inc., hosted in US East, Ohio) | Database and serverless functions | Your profile, digest content, events, subscription state |
| **Anthropic** (Anthropic PBC) | AI summarization and event extraction via the Claude API | (a) the subject line and message body of emails from senders you have selected; (b) photos and PDFs you choose to scan; (c) the text of voice notes you record, which your device transcribes before anything is sent; (d) images and PDF attachments inside emails from senders you have selected, read to find dates and events; not stored. Sent at the time of the request and not used to train Anthropic's models. |
| **Google** (Google LLC) | Sign-in, Gmail access, Calendar sync | OAuth tokens; Gmail messages from selected senders; the individual message you open via "View Email"; Calendar event metadata |
| **Apple** (Apple Inc.) | Subscription billing via in-app purchase | Purchase and subscription status (we never see card numbers or your Apple Account details) |
| **Resend** (Resend, Inc.) | Transactional email delivery (household invitations) | The recipient email address you enter when inviting a household member, and the inviter's display name |
| **Expo** (650 Industries, Inc.) | Push notification relay to Apple | Your device push token and the notification text, such as an event title in a reminder |
| **Apple Push Notification service** | Delivery of push notifications | Device push token and the notification text |
| **Trigger.dev** | Scheduled job execution for digest delivery | User ID and digest ID at scheduled times: no email content |

Under our agreement with Anthropic, Anthropic does not use the content we send it through its commercial API to train its models, and it keeps that content only for the limited period its commercial terms allow. We do not use AI to make decisions about you that have legal, financial, or similarly significant effects. Anthropic is the only third party that receives your email content, your scanned documents, or the text of your voice notes, and it receives them only to produce the summaries and events you asked for. We do not send any of that content to any other AI service. Supabase stores the resulting summaries and events, not the raw email. The full body of an email you open via "View Email" is retrieved from Google and rendered on your device; it is not stored on our servers (see Section 5).

Every sub-processor listed above is bound by its agreement with us to protect the data it receives to a standard equal to or greater than the protections described in this policy, and to use that data only to provide the service described in its row.

---

## 5. Data Storage and Location

All data is stored in the Supabase region US East (Ohio). Raw email content is not stored at rest: emails are fetched from Gmail at digest-generation time, sent to Anthropic's API for summarization, and discarded after the AI-generated summary is written to our database. Likewise, when you open an email via "View Email," its full body is fetched from Gmail and rendered on your device for that viewing session only; it is not written to our database. Images and PDF attachments inside emails from your selected senders are fetched at digest-generation time only so they can be read for dates and events, and are never saved.

Photos and PDFs you scan are uploaded to a private storage area on our servers only for as long as it takes to read them, then deleted as the final step of the scan, whether it succeeded or failed. Voice notes are transcribed to text on your device; the audio recording itself is never uploaded and is never stored.

The following are stored persistently:
- Your profile (name, email, time zone, subscription state).
- AI-generated digest summaries (text only, no raw email bodies).
- Calendar event records linked to your account.
- A record of each change we applied from Google Calendar (which event, which fields changed, and when), and the notice channel and sync bookmark Google provides so we only read what changed.
- For calendars shared with you: the calendar's name, identifier, sharer's email address, and whether you chose to show it. Events on those calendars are read live and never stored. A calendar you show is visible to your household only if you turn on sharing your calendar with your household.
- People, activities, and sender configurations you set up.
- Notes and emoji reactions left on cards and events by you and your household.

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

You may permanently delete your account and all associated data at any time from within the app: Settings → Delete Account. If you have not started a subscription or free trial yet, you can also tap Leave and delete on the plan screen. Account deletion is immediate and removes:
- Your profile and all in-app data (people, activities, senders, digest history, events) for digests you own.
- Profile photos from our storage.
- Your billing records held by us. Subscriptions purchased through Apple must be canceled in your Apple Account settings; deleting your Cleanmail account does not cancel an Apple subscription.
- Your stored Google refresh token (revoked with Google), and the credentials for any additional inboxes you have linked (each revoked with Google and deleted).

**If you are part of a shared digest:**
- If you are a **Household Lead** or **Household Member** (you joined someone else's digest), deleting your account removes you from that shared digest. The shared digest itself, and the content you contributed to it, remain for the Primary and the rest of the household. Your own profile and personal data are deleted, including the notes you left. Emoji reactions you left stay on the shared digest without your name.
- If you are the **Primary** (you created the shared digest), deleting your account deletes the shared digest and all of its content for everyone in the household. Everyone else is removed and, on their next use of Cleanmail, would need to start their own digest and subscription.

**If you never subscribe:** if you sign in and set up Cleanmail but never start a subscription or free trial, we may delete your account and everything set up in it after 30 days without use. This works the same way as deleting your account yourself, including revoking our access to your Google account.

**What we keep after deletion:**
- If your account ever received a free first digest, we keep a hashed (one-way scrambled) copy of your Google account's email address, so the same address does not get a second free first digest. We use it for nothing else.
- If you told us why you were leaving, or sent us feedback in the app, we keep what you sent along with the app version and build, operating system and version, device model and time zone recorded with it, but we remove its link to your account. We use it only to improve Cleanmail.

After deletion, no recovery is possible. You can also ask us to delete your account without using the app: email support@cleanmailapp.com from the address on your account, and we will delete it within 30 days.

---

## 8. Your Rights

Depending on your jurisdiction, you may have the right to:
- **Access** the personal data we hold about you.
- **Correct** inaccurate data (you can edit most of this yourself in Settings).
- **Delete** your account and associated data (see Section 7).
- **Export** your data in a portable format: contact support@cleanmailapp.com.
- **Withdraw consent** for Google API access at any time via [Google account permissions](https://myaccount.google.com/permissions). Revoking access will stop Cleanmail from generating new digests.

- **Remove** your information, or your child's, that appears in another Cleanmail user's account: contact support@cleanmailapp.com and we will review and act on the request.

**We do not sell your personal information.** The Cleanmail app sends nothing to advertisers. The only advertising tools we use are the Reddit and Meta pixels on our website. They load only if you choose Accept (see "Our website" in Section 1), and they never receive anything from the app or your account. When they load, they tell Reddit and Meta about your visit to our website, which those companies may use for advertising; some state laws call this "sharing." You can turn it off at any time with the Cookie settings link or a Global Privacy Control signal.

**U.S. state privacy rights (including California).** Depending on where you live, you may have the right to know what personal information we collect, use and disclose; to get a copy; to correct or delete it; and to opt out of any sale or sharing (we do not sell; website sharing is off unless you choose Accept, and you can turn it off with Cookie settings or a Global Privacy Control signal). To make a request, email support@cleanmailapp.com from the address on your account. We will confirm your request and respond within 45 days, and tell you if we need up to 45 more. If we decline your request, you can appeal by replying to our answer with "Appeal" in the subject line; we will respond to an appeal within 45 days. We will not treat you differently for using any of these rights.

If you are in the European Economic Area, the United Kingdom or Switzerland, Section 13 explains your rights under the GDPR and how to use them.

---

## 9. Security

We use industry-standard security measures including TLS-encrypted data transmission, encrypted storage via Supabase, and access controls on our serverless functions. OAuth tokens are stored encrypted at rest and never exposed to client devices.

No system is 100% secure. If we become aware of a data breach affecting your personal information, we will notify you by email within 72 hours and report the incident as required by applicable law.

---

## 10. Children's Privacy

Cleanmail is for parents and guardians. It is not directed at children under 13, and we do not knowingly collect personal information directly from anyone under 13. You must be 16 or older to have your own Cleanmail account (or older, if the age of digital consent where you live is higher), and 18 or older to subscribe. Someone younger may use Cleanmail only with a parent's or guardian's consent, for example as a household member a parent invites.

Parents add information about their children (such as names, schools, activities and photos) so Cleanmail can organize the family's email and calendar. That information comes from the parent's account, is visible only to the parent's household, and is used only to provide Cleanmail. A parent can edit or delete it at any time in the app, or delete it all by deleting the account (Section 7).

If you believe a child under 13 has provided personal information to us, contact support@cleanmailapp.com and we will delete it.

---

## 11. Legal Requests

We may disclose personal information when required to do so by law, such as in response to a subpoena, court order, or other legal process. We will notify you of any such request unless prohibited by law.

---

## 12. Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be communicated by email and by updating the date at the top of this policy. If a change affects how we use your Google user data, we will ask for your consent in the app before the change applies to that data. For other changes, continued use of Cleanmail after they take effect constitutes acceptance of the updated policy.

---

## 13. If You Are in the EEA, the UK or Switzerland (GDPR)

**Who is responsible for your data.** Calibrate LLC, a United States company, is the controller of the personal data described in this policy.

**Who processes it for us.** The main companies that process your data on our behalf are Google (Gmail and Google Calendar), Supabase (storage and our servers), Anthropic (reading the emails from senders you pick, and the photos, PDFs and voice notes you send, to write your digest and find events) and Apple (payments and push notifications). Section 4 lists every company we use and exactly what each one receives.

**Where your data is stored and processed.** In the United States. Our database runs in Supabase's US East (Ohio) region, and the companies above process data in the United States. Your data is transferred to the United States because that is where the service you signed up for runs.

**Why we are allowed to use it (legal basis).**
- **The service you signed up for.** We use your account details, the people, activities and senders you set up, your digests, your events and your subscription status to provide Cleanmail to you and your household.
- **Your consent.** We read your Gmail and use your Google Calendar only after you allow it on Google's sign-in screen, and we send email content to Anthropic only after you agree on Cleanmail's AI screen. You can withdraw consent at any time: turn off AI in Settings, remove Cleanmail's access in your [Google account permissions](https://myaccount.google.com/permissions), or delete your account. Withdrawing consent stops future processing; it does not affect processing done before.
- **The law.** We keep or disclose information when the law requires it (Section 11).

**How long we keep it.** Digest history is kept for the period you choose in Settings, up to 60 days, and deleted automatically within a few days after that. Items you delete go to Trash and leave it after 3 days. Your profile, setup, and calendar events stay until you delete them or delete your account. If you never start a subscription or free trial, your account may be deleted after 30 days without use. After deletion we keep only what Section 7 lists under "What we keep after deletion." Section 7 describes deletion in full.

**Your rights.** You can ask for a copy of your data, ask us to correct or delete it, ask us to limit or stop using it, and withdraw your consent. You also have the right to complain to the data protection authority in your country.

**How to get a copy of your data or delete it.**
- **Delete:** open Cleanmail, go to Settings, then Delete Account. Deletion is immediate and covers everything listed in Section 7.
- **Get a copy, or anything else:** email support@cleanmailapp.com from the address on your account. We reply within one month.

---

## 14. Contact

Questions about this Privacy Policy:

**Calibrate LLC**
support@cleanmailapp.com

For privacy-specific inquiries, please include "Privacy" in the subject line.
