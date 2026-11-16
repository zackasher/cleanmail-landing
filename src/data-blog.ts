// Posts are Markdown files in src/content/blog. A post with `draft: true` is never built.
export type BlogFaq = { q: string; a: string };
export type BlogFrontmatter = { title: string; seoTitle?: string; description: string; date: string; updated?: string; author: string; keyword?: string; faqs?: BlogFaq[]; draft?: boolean };
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

// Words too common in our titles to say two posts share a topic.
const TOPIC_STOP_WORDS = new Set(["a", "an", "and", "app", "apps", "best", "for", "from", "how", "in", "into", "is", "it", "of", "on", "or", "the", "to", "what", "with", "your", "you", "cleanmail", "family", "school", "email", "emails"]);
const TOPIC_WORD_PATTERN = /[a-z]+/g;

function topicWords(post: BlogPost): Set<string> {
  const { title, keyword = "", description } = post.frontmatter;
  const words = `${title} ${keyword} ${description}`.toLowerCase().match(TOPIC_WORD_PATTERN) ?? [];
  return new Set(words.filter((word) => !TOPIC_STOP_WORDS.has(word)));
}

function sharedWordCount(first: Set<string>, second: Set<string>): number {
  return [...first].filter((word) => second.has(word)).length;
}

// Related posts are picked by shared topic words, so each post links to its closest few instead of listing every post.
export function relatedPosts(post: BlogPost, count: number): BlogPost[] {
  const postWords = topicWords(post);
  return publishedPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({ candidate, score: sharedWordCount(postWords, topicWords(candidate)) }))
    .sort((first, second) => second.score - first.score)
    .slice(0, count)
    .map(({ candidate }) => candidate);
}
