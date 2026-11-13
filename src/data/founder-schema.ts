import { ABOUT_PATH, FOUNDER_JOB_TITLE, FOUNDER_LEGAL_NAME, FOUNDER_NAME, SITE_URL } from "../config";

// ponytail: no sameAs on purpose. The site carries no personal links (Zack's rule), and the company's social accounts are not Zack.
export const FOUNDER_PERSON = {
  "@type": "Person",
  "name": FOUNDER_NAME,
  "alternateName": FOUNDER_LEGAL_NAME,
  "url": `${SITE_URL}${ABOUT_PATH}`,
  "jobTitle": FOUNDER_JOB_TITLE,
  "worksFor": { "@type": "Organization", "name": "Cleanmail", "url": SITE_URL },
};
