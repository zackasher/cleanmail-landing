import { APP_STORE_NAME } from "./config";

// Google cuts search titles off at about 60 characters, so the brand suffix shrinks before the page name does.
const SEARCH_TITLE_MAX_LENGTH = 60;
const SHORT_BRAND_NAME = "Cleanmail";
const TITLE_SEPARATOR = " | ";

export function pageTitle(pageName: string) {
  const fullTitle = `${pageName}${TITLE_SEPARATOR}${APP_STORE_NAME}`;
  if (fullTitle.length <= SEARCH_TITLE_MAX_LENGTH) return fullTitle;
  const shortTitle = `${pageName}${TITLE_SEPARATOR}${SHORT_BRAND_NAME}`;
  if (shortTitle.length <= SEARCH_TITLE_MAX_LENGTH) return shortTitle;
  return pageName;
}
