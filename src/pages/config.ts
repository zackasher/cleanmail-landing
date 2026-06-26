// Single source of truth for the site's lifecycle stage.
// Flip this one value to switch every CTA across the site:
//   'waitlist'  -> email capture (current)
//   'beta'      -> request beta access
//   'launched'  -> Download on the App Store
export type SiteStage = "waitlist" | "beta" | "launched";
export const SITE_STAGE: SiteStage = "waitlist";

// Used only when SITE_STAGE === "launched".
export const APP_STORE_URL = "https://apps.apple.com/app/id6777857105";
