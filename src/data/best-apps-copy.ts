import { ICON_PATHS } from "../data-icons";

// Copy for /best-school-and-activity-email-apps: Marketing, claude/marketing/best-school-activity-email-apps_copy_2026-11-23.md.
// This is the only page that names small rivals (Zack 11/23). Every rival fact is dated and sourced, and is re-checked the day before any edit.

export const BEST_APPS_TITLE = "The best apps for school and activity emails in 2026";
export const BEST_APPS_DESCRIPTION =
  "Six apps that turn school and activity emails into calendar events, compared on how they get your email, who sees it, and what they cost.";
export const BEST_APPS_HEADING = "The best apps for school and activity emails in 2026";
export const BEST_APPS_EYEBROW = "How to choose";

export const BEST_APPS_ANSWER =
  "The best app for school and activity emails is one that reads the senders you choose straight from your inbox, so you never forward anything, and puts the dates on the calendar your household already checks. If you have more than one kid, look for one that sorts by child. Try it on a real week of school and activity email before you pay.";

export const BEST_APPS_CRITERIA_HEADING = "How to choose";
export const BEST_APPS_CRITERIA = [
  { icon: ICON_PATHS.email, label: "Inbox connection or forwarding", question: "does it read your email, or do you forward every message?" },
  { icon: ICON_PATHS.digest, label: "Sorted by kid", question: "can you see each child's week on its own?" },
  { icon: ICON_PATHS.calendarCheck, label: "Your calendar", question: "does it write to the calendar you already use, or ask you to switch?" },
  { icon: ICON_PATHS.household, label: "The whole household", question: "can the other parent see the same plan without forwarding?" },
  { icon: ICON_PATHS.checkCircle, label: "Read-only", question: "can it send, delete or change anything in your inbox?" },
  { icon: ICON_PATHS.tag, label: "Price after the trial", question: "what does it cost once the free period ends?" },
];

export const BEST_APPS_LIST_HEADING = "The apps";
export const BEST_APPS_DISCLOSURE =
  "We make Cleanmail. It's listed with the others, on the same criteria, and marked \"ours\". Nothing here is ranked.";
export const BEST_APPS_OURS_LABEL = "ours";

export const BEST_APPS_ROW_LABELS = {
  whatItDoes: "What it does",
  howDatesReach: "How dates reach your calendar",
  price: "Price",
  doesNotDo: "What it doesn't do",
  source: "Source",
};

// How email gets in, taken from each app's approved "how dates reach your calendar" line.
export const EMAIL_ACCESS = {
  connects: { icon: ICON_PATHS.email, label: "Connects to your inbox" },
  forward: { icon: ICON_PATHS.emailFast, label: "You forward emails" },
  either: { icon: ICON_PATHS.inboxes, label: "Connect or forward" },
  notStated: { icon: ICON_PATHS.email, label: "Not stated" },
};
export type EmailAccessKind = keyof typeof EMAIL_ACCESS;

export const BEST_APPS_TABLE_HEADERS = { app: "App", access: "How email gets in", what: "What it does", price: "Price" };
export const BEST_APPS_SOURCES_HEADING = "Sources";

export interface BestAppEntry {
  emailAccess: EmailAccessKind;
  name: string;
  ours?: boolean;
  // Initial square color, taken from each app's own site or App Store page 11/23/2026 (Zack 11/23: "give the other apps squares a color based on their brand"). A color square with a letter, never their logo.
  brandColor?: string;
  whatItDoes: string;
  howDatesReach?: string;
  price: string;
  doesNotDo?: string;
  source: string;
}

// Alphabetical; Cleanmail is first only because of the alphabet, never as a pick. Change $68.99 to $49.99 only on the day the 1.1.3 price goes live.
export const BEST_APPS: BestAppEntry[] = [
  {
    name: "Cleanmail: Family Inbox",
    emailAccess: "connects",
    ours: true,
    whatItDoes: "turns the school and activity senders you pick into one short digest sorted by kid.",
    howDatesReach:
      "connects to Gmail (read-only); dates from emails, flyers and PDFs go on your Google Calendar; up to 4 people in the household share one plan.",
    price: "2 weeks free for new subscribers, then $6.99/mo or $68.99/yr. Renews automatically; cancel in App Store or Google Play settings. iPhone and Android.",
    doesNotDo: "no chores, grocery lists or meal plans.",
    source: "cleanmailapp.com/pricing, checked 11/23/2026",
  },
  {
    name: "HappyParent HQ",
    brandColor: "#5A7868",
    emailAccess: "either",
    whatItDoes: "a family timeline built from school email, with a 14-day free trial.",
    howDatesReach: "connects Gmail, Outlook, Apple Mail or IMAP, or by forwarding.",
    price: "$7.99/mo or $79.90/yr.",
    source: "happyparenthq.com, checked 11/23/2026",
  },
  {
    name: "Leto",
    brandColor: "#5302EB",
    emailAccess: "connects",
    whatItDoes: "turns school emails into tasks and events; free for families whose PTA or school partners with Leto.",
    howDatesReach: "connects to Gmail (view-only), processes the senders you choose, adds events to the calendar you use.",
    price: "Premium Family $12/yr (early access pricing); 21-day free trial.",
    source: "helloleto.com/pricing and helloleto.com/for-parents, checked 11/23/2026",
  },
  {
    name: "NUET",
    brandColor: "#1A5E4B",
    emailAccess: "connects",
    whatItDoes: "pulls events from selected emails, photos and messages into one place.",
    howDatesReach: "connects your email; keeps your calendar in sync.",
    price: "free download with in-app purchases; iPhone.",
    source: "App Store listing (apps.apple.com/app/id6747891128), checked 11/23/2026",
  },
  {
    name: "SchoolMail: Parent Calendar",
    brandColor: "#2E8F8B",
    emailAccess: "notStated",
    whatItDoes: "turns school emails into calendar events you can add or skip with one tap.",
    howDatesReach: "not stated on its App Store listing.",
    price: "free; iPhone and iPad.",
    source: "App Store listing (apps.apple.com/us/app/id6761088774), checked 11/23/2026",
  },
  {
    name: "Sense",
    brandColor: "#2D3265",
    emailAccess: "forward",
    whatItDoes: "a family calendar and organizer with lists, chores, meals and reminders.",
    howDatesReach:
      "you forward emails to Sense's address (or set an auto-forward rule); also takes photos, PDFs and WhatsApp messages.",
    price: "free to download; iPhone and Android.",
    source: "getsense.ai, checked 11/23/2026",
  },
];

export const BEST_APPS_FAQ_HEADING = "Questions";
export const BEST_APPS_FAQS = [
  {
    q: "Can I get school and activity emails onto my calendar without an app?",
    a: "Yes. Gmail can show some events on Google Calendar, and a Gmail filter can label school and activity senders so they're in one place. It works for confirmations; most school newsletters still need someone to copy the dates.",
  },
  {
    q: "Forwarding or inbox connection: which is better?",
    a: "Forwarding means you never grant inbox access, but someone has to forward every email or set up auto-forward rules. A read-only inbox connection catches emails without anyone remembering to forward them.",
  },
  {
    q: "What if both parents get the school and activity emails?",
    a: "Pick an app where the household shares one plan, so you're not both copying the same dates.",
  },
  {
    q: "Do these apps replace Cozi or Skylight?",
    a: "Not always. Cozi and Skylight are family calendars; the apps above focus on getting school and activity email onto a calendar. Some families use both.",
  },
];

export const BEST_APPS_TRADEMARK_NOTICE =
  "Leto, NUET, Sense, SchoolMail, HappyParent HQ, Cozi and Skylight are trademarks of their owners. Cleanmail is not affiliated with them. Prices and features as of November 23, 2026, from each app's own site or store page.";

export const BEST_APPS_LINK_LEAD = "Looking past the big names?";
export const BEST_APPS_LINK_LABEL = "See the best apps for school and activity emails";
