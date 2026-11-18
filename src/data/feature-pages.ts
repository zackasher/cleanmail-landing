// "Add dates from" feature pages (Zack 11/18, Marketing marketing-to-web-1795044000000 and -1795044100001).
// Facts: encyclopedia entry 51 (scan: up to six photos or PDFs, the parent picks the kid and activity,
// events go through the same insert path as email events; voice adds, edits a time, or cancels) and entries 13 and 31 (a flyer attached to a
// picked sender's email is read with the digest). Never "school" without "activity" (Zack 11/18).
// No "audio never leaves your phone" here: on older Android and in a browser the platform's speech
// service may process audio online (entry 51, corrected 2026-11-04).
import { ICON_PATHS } from "../data-icons";

export const FEATURE_PAGES_PATH_PREFIX = "/features/";

export type FeatureTile = { icon: string; tone: string; title: string; body: string };
export type FeatureStep = { title: string; body: string };
export type FeatureScreenshot = { src: string; width: number; height: number; alt: string; waveform?: boolean };
export type FeaturePage = {
  slug: string;
  menuLabel: string;
  title: string;
  eyebrow: string;
  headline: string;
  lede: string;
  tiles: FeatureTile[];
  steps: FeatureStep[];
  screenshot: FeatureScreenshot;
  footnote?: string;
  afterLede?: string;
};

const SENDERS_SCREENSHOT: FeatureScreenshot = { src: "/hiw107-senders.webp", width: 520, height: 1127, alt: "Cleanmail setup, picking the school and activity senders to follow" };
const VOICE_SCREENSHOT: FeatureScreenshot = { src: "/feat-voice.webp", width: 520, height: 1127, alt: "Adding an event by voice, with a live waveform", waveform: true };
const ADD_MENU_SCREENSHOT: FeatureScreenshot = { src: "/feat-add-1018.webp", width: 520, height: 1127, alt: "The add menu open on Home: add event, photos, camera, and voice" };

export const FEATURE_PAGES: FeaturePage[] = [
  {
    slug: "school-email-to-google-calendar",
    menuLabel: "Email",
    title: "School and Activity Email to Google Calendar",
    eyebrow: "Email to calendar",
    headline: "Stop forwarding school and activity emails to another app. Cleanmail finds them in your Gmail.",
    lede: "Pick the school and activity senders once. Their dates go onto your Google Calendar, and one short digest sums up the rest by kid.",
    tiles: [
      { icon: ICON_PATHS.inboxes, tone: "", title: "Pick your senders once", body: "The school, the coach, the camp. Your digest covers only those." },
      { icon: ICON_PATHS.calendarCheck, tone: "teal", title: "Dates on Google Calendar", body: "Two-way sync of the events Cleanmail adds." },
      { icon: ICON_PATHS.digest, tone: "orange", title: "Sorted by kid", body: "One short digest for the whole household." },
      { icon: ICON_PATHS.camera, tone: "", title: "Flyers come along", body: "A flyer attached to one of those emails is read too." },
    ],
    steps: [
      { title: "Sign in with Google", body: "Use the Gmail your school and activities email." },
      { title: "Pick your senders", body: "School and activities, once." },
      { title: "Turn on Sync", body: "The dates show up on your Google Calendar." },
    ],
    screenshot: SENDERS_SCREENSHOT,
  },
  {
    slug: "flyer-to-calendar",
    menuLabel: "Flyers",
    title: "Flyer to Calendar",
    eyebrow: "Flyer to calendar",
    headline: "Snap the flyer. Get the dates.",
    lede: "That flyer at the bottom of the backpack. A sign you saw at a coffee shop. Take a photo on Cleanmail's add-event screen, and Cleanmail reads it and adds the events.",
    tiles: [
      { icon: ICON_PATHS.camera, tone: "", title: "Camera or photos", body: "Up to six at a time." },
      { icon: ICON_PATHS.household, tone: "teal", title: "Pick who it's for", body: "Choose the kid and the activity for each one." },
      { icon: ICON_PATHS.calendarCheck, tone: "orange", title: "On your calendar", body: "The events sync to your Google Calendar." },
      { icon: ICON_PATHS.email, tone: "", title: "Flyers in email too", body: "A flyer attached to a sender you picked is read with the email." },
    ],
    steps: [
      { title: "Open the add-event screen", body: "Tap the + button." },
      { title: "Snap or pick the flyer", body: "Camera or photos." },
      { title: "Choose the kid", body: "Cleanmail adds the events." },
    ],
    screenshot: ADD_MENU_SCREENSHOT,
  },
  {
    slug: "pdf-to-calendar",
    menuLabel: "PDFs",
    title: "PDF to Calendar",
    eyebrow: "PDF to calendar",
    headline: "Got a PDF schedule? Put it on your calendar.",
    lede: "Pick the PDF on Cleanmail's add-event screen. Cleanmail reads the dates out of it and adds the events.",
    tiles: [
      { icon: ICON_PATHS.calendarImport, tone: "", title: "PDFs and photos", body: "Up to six files at a time." },
      { icon: ICON_PATHS.household, tone: "teal", title: "Pick who it's for", body: "Choose the kid and the activity for each file." },
      { icon: ICON_PATHS.calendarCheck, tone: "orange", title: "On your calendar", body: "The events sync to your Google Calendar." },
      { icon: ICON_PATHS.email, tone: "", title: "PDFs in email too", body: "A PDF attached to a sender you picked is read with the email." },
    ],
    steps: [
      { title: "Open the add-event screen", body: "On your phone or on the web." },
      { title: "Pick the PDF", body: "A schedule, a calendar, a form." },
      { title: "Choose the kid", body: "Cleanmail adds the events." },
    ],
    screenshot: ADD_MENU_SCREENSHOT,
  },
  {
    slug: "voice-to-calendar",
    menuLabel: "Voice",
    title: "Add Events by Voice",
    eyebrow: "Voice to calendar",
    headline: "Say it. It's on the calendar.",
    lede: "Tap the mic and say it the way you'd tell your partner: soccer moved to 5 on Thursday, pizza night at the Smiths' on Saturday at 6. Cleanmail adds it, changes it or cancels it.",
    tiles: [
      { icon: ICON_PATHS.microphone, tone: "", title: "Add by talking", body: "Say the what and the when." },
      { icon: ICON_PATHS.pencil, tone: "teal", title: "Change it out loud", body: "Move an event's time by saying so." },
      { icon: ICON_PATHS.delete, tone: "orange", title: "Cancel it out loud", body: "Say it's cancelled and Cleanmail marks it." },
      { icon: ICON_PATHS.calendarCheck, tone: "", title: "On your calendar", body: "The events sync to your Google Calendar." },
    ],
    steps: [
      { title: "Open the add-event screen", body: "Tap + then Voice." },
      { title: "Say it", body: "Like you'd say it to anyone at home." },
      { title: "Done", body: "It's on your calendar." },
    ],
    screenshot: VOICE_SCREENSHOT,
  },
  {
    // Chief Architect 11/18: ParentSquare sends from 2 to 3 relay addresses per school or teacher and Cleanmail
    // matches the sender NAME, so "pick by name" is true; an Instant email carries the full post (checked on a
    // real one). Digest verified 11/18 5:00 PM CT from a real one: it arrives under the SCHOOL's name, carries
    // the full posts and is read, but comes in the evening, so same-day notices can arrive late.
    // Counsel 11/18 6 PM CT: no "Digest comes once a day" line. On Digest, ParentSquare still emails other
    // messages all day, so that line read as if everything waits a day.
    // Settings path verified on Zack's own ParentSquare app 11/16 (claude/research/email-setup-steps_recheck_2026-11-16.md);
    // sources in claude/marketing/parentsquare-page-sources_2026-11-18.md, re-check every 90 days (Counsel).
    slug: "parentsquare-to-google-calendar",
    menuLabel: "ParentSquare",
    title: "ParentSquare to Google Calendar",
    eyebrow: "ParentSquare to calendar",
    headline: "Get ParentSquare dates on your Google Calendar.",
    lede: "Have ParentSquare email you each post, then pick your school and teachers in Cleanmail. Cleanmail reads the posts and puts the dates on your Google Calendar.",
    tiles: [
      { icon: ICON_PATHS.email, tone: "", title: "The whole post by email", body: "ParentSquare emails carry the full post, so Cleanmail can read it." },
      { icon: ICON_PATHS.inboxes, tone: "teal", title: "One pick per name", body: "On Instant, pick your school and each teacher by name. On Digest, the school is enough." },
      { icon: ICON_PATHS.calendarCheck, tone: "orange", title: "Dates on Google Calendar", body: "Two-way sync of the events Cleanmail adds." },
      { icon: ICON_PATHS.digest, tone: "", title: "Sorted by kid", body: "One short digest for the whole household." },
    ],
    steps: [
      { title: "Turn on email in ParentSquare", body: "In the app: Menu, Account, Notifications. Under Posts, turn on Email Notifications." },
      { title: "Choose Instant", body: "Cleanmail sees each post when it is sent." },
      { title: "Pick them in Cleanmail", body: "Your school and each teacher, by name." },
    ],
    screenshot: SENDERS_SCREENSHOT,
    // Zack 11/18: not the only app. The "if it emails you the full message" condition must stay (Marketing).
    afterLede: "Not on ParentSquare? Any school or activity app works the same way if it emails you the full message.",
    footnote: "ParentSquare is a trademark of its owner. Cleanmail is not affiliated with ParentSquare.",
  },
];
