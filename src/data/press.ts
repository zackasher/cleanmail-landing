// Zack 11/17 8:20 AM CT: feature the paper by name and quote only. The headline names his town, which stays off the site.
export const PRESS_FEATURE = {
  eyebrow: "As featured in The Record",
  quote: "It’s totally automatic.",
  attribution: "Zack Asher, founder",
  byline: "Story by Zoe Engels, The Record, Nov.\u00a016,\u00a02026",
  reporter: "Zoe Engels",
  linkLabel: "Read the article",
  heroLabel: "As featured in The Record",
  // The preview shows our own founder photo, never the paper's images, and the paper's domain, never its headline (which names Zack's town).
  previewDomain: "therecordnorthshore.org",
  previewImage: "/founder-zack.webp",
  previewImageAlt: "Zack Asher, Cleanmail's founder, with his two kids.",
  url: "https://www.therecordnorthshore.org/2026/11/16/youve-got-mail-highland-park-dad-builds-app-to-help-parents-keep-up/",
};

// The article for search engines and AI answers. ponytail: no headline field, because the paper's headline names Zack's town and the site never does.
export const PRESS_NEWS_ARTICLE = {
  "@type": "NewsArticle",
  "url": PRESS_FEATURE.url,
  "datePublished": "2026-11-16",
  "author": { "@type": "Person", "name": PRESS_FEATURE.reporter },
  "publisher": { "@type": "NewsMediaOrganization", "name": "The Record", "url": "https://www.therecordnorthshore.org" },
};
