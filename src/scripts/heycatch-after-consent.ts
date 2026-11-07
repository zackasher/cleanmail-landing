import { HEYCATCH_FRAMEWORK, HEYCATCH_FRAMEWORK_MAJOR_VERSION, HEYCATCH_PROJECT_KEY, TRACKING_TAGS_ACCEPTED_EVENT, TRACKING_TAGS_ACCEPTED_FLAG } from "../config";

// ponytail: the SDK is imported lazily so nothing from HeyCatch loads before Accept. HeyCatch prefers a static
// import, but that would run the SDK for every visitor; their short links are covered by public/_redirects instead.
let heyCatchStarted = false;

async function startHeyCatch() {
  if (heyCatchStarted) return;
  heyCatchStarted = true;
  const { analytics } = await import("@heycatch/sdk");
  analytics.init({
    projectKey: HEYCATCH_PROJECT_KEY,
    site: "landing",
    // Counsel 11/7: the Privacy Policy says we do not record IP addresses. Call Counsel before changing this.
    collectIp: false,
    install: { framework: HEYCATCH_FRAMEWORK, frameworkVersion: HEYCATCH_FRAMEWORK_MAJOR_VERSION },
  });
}

const trackingAlreadyAccepted = (window as unknown as Record<string, unknown>)[TRACKING_TAGS_ACCEPTED_FLAG] === true;
if (trackingAlreadyAccepted) startHeyCatch();
window.addEventListener(TRACKING_TAGS_ACCEPTED_EVENT, startHeyCatch);
