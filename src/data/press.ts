// Zack 11/17 8:20 AM CT: feature the paper by name and quote only. The headline names his town, which stays off the site.
export const PRESS_FEATURE = {
  eyebrow: "As featured in The Record",
  quote: "It’s totally automatic.",
  attribution: "Zack Asher, founder, in The Record, Nov.\u00a016,\u00a02026",
  linkLabel: "Read the article",
  heroLabel: "As featured in The Record",
  url: "https://www.therecordnorthshore.org/2026/11/16/youve-got-mail-highland-park-dad-builds-app-to-help-parents-keep-up/",
};

// The article for search engines and AI answers. ponytail: no headline field, because the paper's headline names Zack's town and the site never does.
export const PRESS_NEWS_ARTICLE = {
  "@type": "NewsArticle",
  "url": PRESS_FEATURE.url,
  "datePublished": "2026-11-16",
  "publisher": { "@type": "NewsMediaOrganization", "name": "The Record", "url": "https://www.therecordnorthshore.org" },
};
