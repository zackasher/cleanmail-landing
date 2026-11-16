// Prints, one per line, the live URLs a commit changed, for the IndexNow workflow.
// Usage: node scripts/indexnow-changed-urls.mjs <changed-files.txt> <live-sitemap.xml>
import { readFileSync } from "node:fs";

const SITE_URL = "https://cleanmailapp.com";
const BLOG_POST_PATTERN = /^src\/content\/blog\/([^/]+)\.md$/;
const BLOG_SHARE_IMAGE_PATTERN = /^public\/og\/blog\/([^/]+)\.png$/;
const PAGE_PATTERN = /^src\/pages\/([^\[\]]+)\.astro$/;
const BLOG_TEMPLATE_PATH = "src/pages/blog/[slug].astro";
const LLMS_FILE_PATH = "public/llms.txt";
const SITE_WIDE_PREFIXES = ["src/components/", "src/layouts/", "src/data/", "src/styles/", "src/config.ts", "src/data-blog.ts", "src/page-title.ts", "astro.config.mjs", "public/og.png"];
const LEGAL_FILE_PAGES = {
  "src/content/legal/privacy-policy.md": ["/privacy", "/delete-account"],
  "src/content/legal/terms-of-service.md": ["/terms"],
  "src/content/legal/consumer-health-data-policy.md": ["/health-data"],
  "src/content/legal/support.md": ["/support"],
};

const [changedFilesPath, sitemapPath] = process.argv.slice(2);
const changedFiles = readFileSync(changedFilesPath, "utf8").split("\n").filter(Boolean);
const sitemapUrls = [...readFileSync(sitemapPath, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const sitemapUrlSet = new Set(sitemapUrls);
const blogPostUrls = sitemapUrls.filter((url) => url.startsWith(`${SITE_URL}/blog/`));

function pathsForFile(file) {
  if (SITE_WIDE_PREFIXES.some((prefix) => file.startsWith(prefix))) return sitemapUrls.map((url) => url.slice(SITE_URL.length) || "/");
  if (file === BLOG_TEMPLATE_PATH) return blogPostUrls.map((url) => url.slice(SITE_URL.length));
  if (file === LLMS_FILE_PATH) return ["/llms.txt"];
  if (LEGAL_FILE_PAGES[file]) return LEGAL_FILE_PAGES[file];
  const blogPost = file.match(BLOG_POST_PATTERN);
  if (blogPost) return [`/blog/${blogPost[1]}`, "/blog"];
  const shareImage = file.match(BLOG_SHARE_IMAGE_PATTERN);
  if (shareImage) return [`/blog/${shareImage[1]}`];
  const page = file.match(PAGE_PATTERN);
  if (page) return [page[1] === "index" ? "/" : `/${page[1].replace(/\/index$/, "")}`];
  return [];
}

const isSubmittable = (url) => sitemapUrlSet.has(url) || url.endsWith("/llms.txt");
const changedUrls = new Set(
  changedFiles.flatMap(pathsForFile).map((path) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`)).filter(isSubmittable),
);
// An empty print would still write a newline, and the workflow would then send IndexNow a blank URL.
if (changedUrls.size > 0) console.log([...changedUrls].join("\n"));
