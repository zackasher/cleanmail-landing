import type { APIRoute } from "astro";

const LOCAL_BUILD_ID = "local";

// Cloudflare Pages sets CF_PAGES_COMMIT_SHA during its build; the IndexNow workflow polls this file to know the new deploy is live.
export const GET: APIRoute = () => new Response(process.env.CF_PAGES_COMMIT_SHA ?? LOCAL_BUILD_ID);
