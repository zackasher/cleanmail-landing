// Posts are Markdown files in src/content/blog. A post with `draft: true` is never built.
export type BlogFaq = { q: string; a: string };
export type BlogFrontmatter = { title: string; description: string; date: string; author: string; keyword?: string; faqs?: BlogFaq[]; draft?: boolean };
export type BlogPost = { slug: string; frontmatter: BlogFrontmatter; Content: any };

const postModules = import.meta.glob("./content/blog/*.md", { eager: true }) as Record<string, { frontmatter: BlogFrontmatter; Content: any }>;

function slugFromPath(path: string) {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

export function publishedPosts(): BlogPost[] {
  return Object.entries(postModules)
    .map(([path, module]) => ({ slug: slugFromPath(path), frontmatter: module.frontmatter, Content: module.Content }))
    .filter((post) => !post.frontmatter.draft)
    .sort((first, second) => second.frontmatter.date.localeCompare(first.frontmatter.date));
}

export function formatPostDate(isoDate: string) {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
