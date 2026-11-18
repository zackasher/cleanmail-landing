// "Switching from" pages (Marketing spec marketing-to-web-1795043900000, Counsel ruling counsel-to-web-1795036726853).
// Every rival line is a fact from that company's own page, listed in claude/marketing/switching-from-sources_2026-11-18.md.
// Rival cells say what the app does; they never say what it lacks.

export type SwitchingRow = { label: string; cleanmail: string; rival: string };
export type SwitchingSource = { label: string; url: string };
export type SwitchingScreenshot = { src: string; width: number; height: number; alt: string };
export type SwitchingPage = {
  slug: string;
  name: string;
  lede: string;
  doesWell: string;
  rows: SwitchingRow[];
  keepNote: string;
  screenshot: SwitchingScreenshot;
  sources: SwitchingSource[];
};

export const SWITCHING_FORWARDING_CLEANMAIL = "Not needed. Cleanmail reads the senders you choose in your Gmail.";
export const SWITCHING_GOOGLE_CLEANMAIL = "Two-way sync of the events Cleanmail adds.";
export const SWITCHING_TRADEMARK_LINE = "TimeTree, Cozi and Skylight are trademarks of their owners. Cleanmail is not affiliated with them.";

// Real app screenshots of the test account (invented family), already public on the site.
const DIGEST_SCREENSHOT: SwitchingScreenshot = { src: "/Digest_Sample.webp", width: 886, height: 1920, alt: "A Cleanmail digest sorted by kid, with school events" };
const CALENDAR_SCREENSHOT: SwitchingScreenshot = { src: "/feat-weekly-1018.webp", width: 520, height: 1127, alt: "The Cleanmail Events tab in Month view, with event dots on the calendar" };

export const SWITCHING_PAGES: SwitchingPage[] = [
  {
    slug: "cozi",
    name: "Cozi",
    lede: "Stop forwarding school and activity emails to another app. Cleanmail finds them in your Gmail.",
    doesWell: "Cozi is great for lists, meals and a shared calendar.",
    rows: [
      { label: "School email to calendar", cleanmail: SWITCHING_FORWARDING_CLEANMAIL, rival: "Forward each email to your AI Event Import address (Cozi Max)." },
      { label: "Google Calendar", cleanmail: SWITCHING_GOOGLE_CLEANMAIL, rival: "Shows Google events in Cozi, and Cozi events in Google, read-only." },
    ],
    keepNote: "Events you keep only in Cozi stay in Cozi.",
    screenshot: DIGEST_SCREENSHOT,
    sources: [
      { label: "Cozi: Introducing Cozi Max", url: "https://www.cozi.com/?p=44028" },
      { label: "Cozi: Using Cozi with other calendars", url: "https://cozi.com/using-cozi-with-other-calendars/" },
    ],
  },
  {
    slug: "skylight",
    name: "Skylight",
    lede: "Stop forwarding school and activity emails to another app. Cleanmail finds them in your Gmail.",
    doesWell: "Skylight is great for a family calendar on the wall.",
    rows: [
      { label: "School email to calendar", cleanmail: SWITCHING_FORWARDING_CLEANMAIL, rival: "Forward each email to your @ourskylight.com address (Calendar Plus)." },
      { label: "Google Calendar", cleanmail: SWITCHING_GOOGLE_CLEANMAIL, rival: "Two-way sync." },
    ],
    keepNote: "Events you keep only in Skylight stay in Skylight.",
    screenshot: DIGEST_SCREENSHOT,
    sources: [
      { label: "Skylight Help: How To Use Skylight Magic Import", url: "https://skylight.zendesk.com/hc/en-us/articles/18039340445211-How-To-Use-Skylight-Magic-Import" },
      { label: "Skylight Help: What does Skylight Calendar sync with?", url: "https://skylight.zendesk.com/hc/en-us/articles/35986090425627" },
    ],
  },
  {
    slug: "timetree",
    name: "TimeTree",
    lede: "Cleanmail finds your school and activity emails in your Gmail and puts the dates on your Google Calendar.",
    doesWell: "TimeTree is great for sharing calendars with family and friends.",
    rows: [
      { label: "Google Calendar", cleanmail: SWITCHING_GOOGLE_CLEANMAIL, rival: "Shows your phone's Google events. Adding TimeTree events to Google is by hand." },
    ],
    keepNote: "Events you keep only in TimeTree stay in TimeTree.",
    screenshot: CALENDAR_SCREENSHOT,
    sources: [
      { label: "TimeTree Help: showing your phone's calendars in TimeTree", url: "https://support.timetreeapp.com/hc/en-us/articles/360000629341" },
    ],
  },
];
