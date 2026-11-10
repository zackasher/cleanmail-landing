// Laptop hero copy box (Marketing 11/10, held for Zack's OK).
// The middle word follows the phone screen (Zack 11/10): digest, schedule, calendar.
export const HERO_BOX_HEADING_START = "One";
export const HERO_BOX_HEADING_END = "for the whole family.";
export const HERO_BOX_POINTS = [
  { text: "School and activity email, sorted by kid." },
  { text: "Dates land on your shared Google Calendar automatically." },
  { text: "Your digest summarizes only the senders you pick." },
];
export const HERO_TRIAL_LEAD = "Preview your digest before you pay.";
// Real app screenshots of the test account (invented family), all already public on the site.
// Same order as the app: Events (Month, List) to the left of Home (Digest), which shows first.
export const HERO_PREVIEW_SLIDES = [
  { label: "Month", headingWord: "calendar", src: "/feat-weekly-1018.jpg", width: 520, height: 1127, alt: "The Cleanmail Events tab in Month view, with event dots on the calendar" },
  { label: "List", headingWord: "schedule", src: "/feat-cancel-1018.jpg", width: 520, height: 1127, alt: "The Cleanmail Events tab in List view, with a cancelled soccer practice" },
  { label: "Digest", headingWord: "digest", src: "/Digest_Sample.png", width: 886, height: 1920, alt: "The Cleanmail app showing a digest sorted by kid, with school events for Liam", collapsedSrc: "/hero-preview-poster.jpg", collapsedAlt: "The same digest with every banner folded, showing Liam and Sara at a glance" },
];
export const HERO_PREVIEW_AUTO_ADVANCE_MS = 4000;
export const HERO_PREVIEW_PEEK_DELAY_MS = 1200;
export const HERO_PREVIEW_SWIPE_THRESHOLD_PX = 40;
export const HERO_HEADING_SWAP_EVENT = "cleanmail:hero-slide";
export const HERO_HEADING_FADE_MS = 220;
