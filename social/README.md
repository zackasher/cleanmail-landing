# Social art

Source art for Cleanmail's Facebook and Instagram posts. Not served by the site (this folder is outside `public/`).

## country-scene.png
The whimsical country scene from the app's welcome screen (app repo `assets/images/welcome-illustration.png`, 1290x2796). It is the style reference: every post gets its own scene redrawn in this style so the art shows that post's subject (for example a mailbox overflowing with "PICTURE DAY" envelopes).

## Palette
- Sky: #d3dffb to #e3e8fc
- Navy: #1b2236
- Blue: #4A6FE3
- Orange: #E88C30
- Teal: #5dc4b8
- Greens: #b2e0d3, #8fd0be, #7cc4b0
- Path: #f8e0c4

## Post card (1080x1350)
1. Scene across the top, full width.
2. Orange kicker line.
3. Headline, 76px bold, navy, with the last 2 or 3 words in blue.
4. Subline.
5. Footer pill: logo plus cleanmailapp.com (or cleanmailapp.com/blog for a blog promo).

## How posts are made
The "Cleanmail weekly blog draft" scheduled task writes 3 posts a week to `claude/social-drafts/<date>.md` (1 blog promo, 2 quick tips), each with headline, subline, a Scene note, and FB and IG captions. When Zack replies "approve <slug>", the Director of Web draws the scene and renders the card. Zack posts through Meta Business Suite; nothing auto-posts.
