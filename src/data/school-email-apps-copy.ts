// Facts from Marketing's draft, claude/marketing/comparison-page-draft_2026-11-15.md, split into short lines.
// Change words only through Marketing. Nothing here may claim what a rival lacks.
import { ICON_PATHS } from "../data-icons";

export const SCHOOL_EMAIL_APPS_TITLE = "Cleanmail vs Cozi, Skylight and TimeTree";
export const SCHOOL_EMAIL_APPS_HEADING = "Which one fits your family?";
export const SCHOOL_EMAIL_APPS_DESCRIPTION =
  "How Cleanmail, Cozi, Skylight and TimeTree each get school and activity dates onto your family calendar, as of November 2026.";
export const SCHOOL_EMAIL_APPS_INTRO =
  "Four apps, one goal: fewer missed dates and less copying school email into a calendar. Here's how each one gets there, as of November 2026.";
export const BEST_FOR_LABEL = "Best for";

// Only Cleanmail shows a logo: Counsel's standing rule is that other apps are named in plain text, never with their logos.
export const CLEANMAIL_APP_ICON = "/icon.png";
export const CLEANMAIL_APP_ICON_SIZE = 40;
export const CLEANMAIL_SCREEN = "/Digest_Sample.webp";
export const CLEANMAIL_SCREEN_ALT = "A Cleanmail digest sorted by kid, with school events";

export interface AppFact {
  icon: string;
  text: string;
}

export interface ComparedApp {
  name: string;
  bestFor: string;
  facts: AppFact[];
}

export const CLEANMAIL_APP: ComparedApp = {
  name: "Cleanmail: Family Inbox",
  bestFor: "Families whose week lives in Gmail",
  facts: [
    { icon: ICON_PATHS.email, text: "Reads the school email already in your Gmail. Nothing to forward." },
    { icon: ICON_PATHS.digest, text: "One digest, sorted by kid and activity." },
    { icon: ICON_PATHS.calendarCheck, text: "The dates land on your Google Calendar." },
    { icon: ICON_PATHS.household, text: "Up to 4 people share one household." },
    { icon: ICON_PATHS.cellphone, text: "iPhone, Android and web." },
  ],
};

export const OTHER_APPS: ComparedApp[] = [
  {
    name: "Cozi",
    bestFor: "A shared calendar and lists",
    facts: [
      { icon: ICON_PATHS.calendarHeart, text: "Long-running shared family calendar, lists and meal planning." },
      { icon: ICON_PATHS.email, text: "Cozi Max ($79.99/yr) adds AI Event Import from email." },
    ],
  },
  {
    name: "Skylight",
    bestFor: "A calendar screen on the wall",
    facts: [
      { icon: ICON_PATHS.calendarHeart, text: "A touchscreen family calendar for the wall or counter, with a mobile app." },
      { icon: ICON_PATHS.calendarImport, text: "Syncs Google, Outlook, Apple, Cozi and Yahoo calendars." },
      { icon: ICON_PATHS.email, text: "Calendar Plus adds Magic Import: forward school emails or PDFs and it turns them into events." },
      { icon: ICON_PATHS.tag, text: "Plus is $79/yr after a free first month; the device is bought separately." },
    ],
  },
  {
    name: "TimeTree",
    bestFor: "A simple free shared calendar",
    facts: [
      { icon: ICON_PATHS.calendarHeart, text: "A shared calendar app for families and groups, free with ads." },
      { icon: ICON_PATHS.calendarImport, text: "Free plan covers shared calendars, comments, photos and importing other calendars." },
      { icon: ICON_PATHS.tag, text: "Premium is $4.49/mo or $44.99/yr." },
    ],
  },
];

// Counsel 11/15: required under the rival cards, word for word.
export const COMPETITOR_TRADEMARK_NOTICE =
  "Cozi, Skylight and TimeTree are trademarks of their respective owners. Cleanmail is not affiliated with or endorsed by them.";

export const SCHOOL_EMAIL_APPS_CLOSE = "Your week lives in Gmail? Know what tomorrow brings, with nothing to forward.";
export const SCHOOL_EMAIL_APPS_CTA_LABEL = "Try Cleanmail free";
