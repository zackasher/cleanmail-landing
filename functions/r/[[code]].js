// Link previews (iMessage, WhatsApp, Facebook) never run JavaScript, so the inviter's first name
// has to be in the HTML the server sends. This serves the static /r page with the preview title
// rewritten. The name is never logged or stored: it rides the URL and only shapes the title.

// These mirror the app repo's supabase/functions/_shared/referral-constants.ts (IN1).
const INVITER_NAME_PARAM = "n";
const INVITER_NAME_PATTERN = /^\p{L}[\p{L}' -]*$/u;
const INVITER_NAME_MAX_LENGTH = 12;
const NAMED_INVITE_TITLE_SUFFIX = " invited you to Cleanmail";
const ANONYMOUS_INVITE_TITLE = "A friend invited you to Cleanmail";

const STATIC_INVITE_PAGE_PATH = "/r";
const OPEN_GRAPH_TITLE_SELECTOR = 'meta[property="og:title"]';
const DOCUMENT_TITLE_SELECTOR = "title";
const CLOUDFLARE_BEACON_SCRIPT_SELECTOR = 'script[src*="cloudflareinsights.com"]';
const CLOUDFLARE_BEACON_ATTRIBUTE_SELECTOR = "[data-cf-beacon]";
const INVITE_PAGE_CACHE_CONTROL = "public, max-age=3600";
const WHITESPACE_PATTERN = /\s+/u;

function inviterFirstName(rawValue) {
  if (!rawValue) return "";
  const firstWord = rawValue.trim().split(WHITESPACE_PATTERN)[0];
  if (!INVITER_NAME_PATTERN.test(firstWord)) return "";
  const characters = Array.from(firstWord);
  if (characters.length > INVITER_NAME_MAX_LENGTH) return "";
  return characters[0].toUpperCase() + characters.slice(1).join("");
}

function inviteTitle(firstName) {
  if (!firstName) return ANONYMOUS_INVITE_TITLE;
  return `${firstName}${NAMED_INVITE_TITLE_SUFFIX}`;
}

export async function onRequest(context) {
  const requestUrl = new URL(context.request.url);
  const assetResponse = await context.env.ASSETS.fetch(new URL(STATIC_INVITE_PAGE_PATH, requestUrl));
  const title = inviteTitle(inviterFirstName(requestUrl.searchParams.get(INVITER_NAME_PARAM)));

  const rewritten = new HTMLRewriter()
    .on(OPEN_GRAPH_TITLE_SELECTOR, {
      element(element) {
        element.setAttribute("content", title);
      },
    })
    .on(DOCUMENT_TITLE_SELECTOR, {
      element(element) {
        element.setInnerContent(title);
      },
    })
    .on(CLOUDFLARE_BEACON_SCRIPT_SELECTOR, {
      element(element) {
        element.remove();
      },
    })
    .on(CLOUDFLARE_BEACON_ATTRIBUTE_SELECTOR, {
      element(element) {
        element.remove();
      },
    })
    .transform(assetResponse);

  const response = new Response(rewritten.body, rewritten);
  response.headers.set("Cache-Control", INVITE_PAGE_CACHE_CONTROL);
  return response;
}
