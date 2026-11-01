export type SiteStage = "waitlist" | "beta" | "launched";
export const SITE_STAGE: SiteStage = "launched";
export const APP_STORE_URL = "https://apps.apple.com/app/id6777857105";

export const PRICE_MONTHLY = "$6.99";
export const PRICE_YEARLY = "$68.99";
export const PRICE_YEARLY_PER_MONTH = "$5.75";
export const TRIAL_DAYS = 14;
export const HOUSEHOLD_SIZE = 4;
export const COMPETITOR_FACTS_CHECKED_ON = "October 2, 2026";
export const FOUNDER_NAME = "Zack Asher";

export const REFERRAL_CODE_PATTERN = "^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$";
export const REFERRAL_PATH_PREFIX = "/r/";
export const STORE_BADGE_LABEL = "Download on the";
export const MAPLE_FACTS_CHECKED_ON = "October 9, 2026";
export const MAPLE_SHUTDOWN_DATE = "December 31, 2026";
export const FAMBOT_FACTS_CHECKED_ON = "October 9, 2026";
export const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=WnpRfSZfQ8o";
export const SITE_URL = "https://cleanmailapp.com";
export const CLARITY_PROJECT_ID = "yvohvnfbnr";
export const GOOGLE_TAG_ID = "G-26T2RXTR56";

export const BLOG_READS_HEADING = "From the blog";
export const BLOG_SLUG_SCHOOL_EVENTS_CALENDAR = "add-school-events-to-google-calendar-automatically";
export const BLOG_SLUG_STOP_MISSING_EMAILS = "how-to-stop-missing-school-emails";
export const APP_STORE_NAME = "Cleanmail: Family Inbox";
export const SOCIAL_PROFILE_URLS = [
  "https://www.instagram.com/cleanmailapp/",
  "https://www.facebook.com/cleanmailapp",
  "https://www.threads.com/@cleanmailapp",
  "https://www.youtube.com/@getcleanmailapp",
];
// EEA, UK and Switzerland. Ad and analytics tags never load for visitors here, consent or not.
export const TRACKING_BLOCKED_COUNTRY_CODES = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];
export const TRACKING_BLOCKED_TIME_ZONE_PREFIXES = ["Europe/", "Atlantic/Reykjavik", "Atlantic/Canary", "Atlantic/Madeira", "Atlantic/Azores", "Atlantic/Faroe"];
export const VISITOR_COUNTRY_LOOKUP_PATH = "/cdn-cgi/trace";
// Cookie consent (Zack, 2026-10-26). Ad and analytics tags load only after the visitor taps Accept.
export const COOKIE_CONSENT_STORAGE_KEY = "cleanmail-cookie-consent";
export const COOKIE_CONSENT_ACCEPTED = "accepted";
export const COOKIE_CONSENT_REJECTED = "rejected";
export const COOKIE_CONSENT_MESSAGE = "We use cookies to measure our ads and improve the site.";
export const COOKIE_CONSENT_REGION_OFF_MESSAGE = "Ad and analytics cookies are off for your location or browser setting.";
export const COOKIE_SETTINGS_LABEL = "Cookie settings";
export const SUPABASE_PROJECT_URL = "https://cxnxjnuvbsyymhxkrmpw.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_SicQ5RchA4Q5YI3DevGMlQ_1XWOPRjy";
export const LIVE_STATS_FUNCTION_PATH = "/rest/v1/rpc/site_live_stats";
// Zack's ruling (2026-10-16): time saved is an estimate, labeled as one, at 4 minutes per email.
export const MINUTES_SAVED_PER_EMAIL = 4;
export const BLOG_SLUG_ORGANIZE_GMAIL = "how-to-organize-school-emails-in-gmail";

// Earlier Terms stay published so anyone can see what they agreed to; wording from Head Counsel, 2026-11-01.
export const CURRENT_TERMS_PATH = "/terms";
export const CURRENT_TERMS_NOTICE = "These Terms took effect November 1, 2026. They add Android and Google Play billing; nothing changed for iPhone subscribers. Earlier versions:";
export const ARCHIVED_TERMS_NOTICE_BEFORE = "This is an earlier version of our Terms, in effect from";
export const ARCHIVED_TERMS_NOTICE_AFTER = "The current Terms are at";
export const TERMS_ARCHIVE = {
  "2026-10-26": { path: "/terms/2026-10-26", label: "October 26, 2026", effectiveRange: "October 26 to October 31, 2026" },
  "2026-10-09": { path: "/terms/2026-10-09", label: "October 9, 2026", effectiveRange: "October 9 to October 25, 2026" },
};

// Account deletion page, linked from the FAQ and footer, not the top nav (Zack, 2026-10-26). Google Play requires a web deletion link.
export const DELETE_ACCOUNT_PATH = "/delete-account";
export const DELETE_ACCOUNT_LINK_LABEL = "Delete account";
export const DELETE_ACCOUNT_SUPPORT_EMAIL = "support@cleanmailapp.com";
export const DELETE_ACCOUNT_EMAIL_SUBJECT = "Delete my Cleanmail account";
// The section 7 text comes from the synced Privacy Policy so this page never drifts from it.
export const PRIVACY_DELETION_SECTION_ID = "7-data-retention-and-account-deletion";

// One link for both stores, used by the household invite email (Senior Versions Designer, 2026-11-01). Phones go straight to their store.
export const GET_APP_PATH = "/get";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.zackasher.cleanmail";
// The query string makes browsers fetch the trimmed badge instead of the untrimmed one they cached.
export const PLAY_BADGE_IMAGE_PATH = "/google-play-badge.png?v=2";
export const PLAY_BADGE_ALT = "Get it on Google Play";
