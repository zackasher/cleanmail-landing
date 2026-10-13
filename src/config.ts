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
// EEA, UK and Switzerland. Ad and analytics tags never load for visitors here (no cookie consent banner).
export const TRACKING_BLOCKED_COUNTRY_CODES = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];
export const TRACKING_BLOCKED_TIME_ZONE_PREFIXES = ["Europe/", "Atlantic/Reykjavik", "Atlantic/Canary", "Atlantic/Madeira", "Atlantic/Azores", "Atlantic/Faroe"];
export const VISITOR_COUNTRY_LOOKUP_PATH = "/cdn-cgi/trace";
