"""Builds the share card (og:image) for every blog post: public/og/blog/<slug>.png.

Run after adding or retitling a post: python3 scripts/generate-blog-share-images.py
Needs Pillow and the Liberation Sans Bold font.
"""
import glob
import os
import re

from PIL import Image, ImageDraw, ImageFont

CARD_WIDTH = 1200
CARD_HEIGHT = 630
CARD_MARGIN = 80
LOGO_SIZE = 230
LOGO_TEXT_GAP = 64
TITLE_FONT_SIZE = 60
TITLE_MIN_FONT_SIZE = 44
TITLE_MAX_LINES = 4
TITLE_LINE_SPACING = 1.18
DOMAIN_FONT_SIZE = 30
DOMAIN_TEXT = "cleanmailapp.com"
NAVY = (27, 34, 54)
PURPLE = (74, 111, 227)
CORNER_LAVENDER = (223, 229, 247)
CORNER_PEACH = (245, 230, 214)
CENTER_WHITE = (252, 252, 253)
BOLD_FONT_PATH = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
REGULAR_FONT_PATH = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
BLOG_CONTENT_DIRECTORY = "src/content/blog"
LOGO_PATH = "public/logo.png"
OUTPUT_DIRECTORY = "public/og/blog"
TITLE_PATTERN = re.compile(r'^title:\s*"?(.*?)"?\s*$', re.M)


def blend(color_a, color_b, weight):
    return tuple(round(a + (b - a) * weight) for a, b in zip(color_a, color_b))


def draw_background():
    top = Image.new("RGB", (CARD_WIDTH, 1))
    bottom = Image.new("RGB", (CARD_WIDTH, 1))
    for x in range(CARD_WIDTH):
        distance_from_center = abs(x - CARD_WIDTH / 2) / (CARD_WIDTH / 2)
        top.putpixel((x, 0), blend(CENTER_WHITE, CORNER_LAVENDER, distance_from_center))
        bottom.putpixel((x, 0), blend(CENTER_WHITE, CORNER_PEACH, distance_from_center))
    background = Image.new("RGB", (CARD_WIDTH, CARD_HEIGHT))
    for y in range(CARD_HEIGHT):
        weight = y / (CARD_HEIGHT - 1)
        row = Image.blend(top, bottom, weight)
        background.paste(row, (0, y))
    return background


def wrap_title(draw, title, font, max_width):
    lines = []
    current = ""
    for word in title.split():
        candidate = f"{current} {word}".strip()
        if draw.textlength(candidate, font=font) <= max_width:
            current = candidate
            continue
        lines.append(current)
        current = word
    lines.append(current)
    return lines


def fit_title(draw, title, max_width):
    for size in range(TITLE_FONT_SIZE, TITLE_MIN_FONT_SIZE - 1, -2):
        font = ImageFont.truetype(BOLD_FONT_PATH, size)
        lines = wrap_title(draw, title, font, max_width)
        if len(lines) <= TITLE_MAX_LINES:
            return font, lines
    return font, lines


def build_card(title, logo):
    card = draw_background()
    draw = ImageDraw.Draw(card)
    logo_top = (CARD_HEIGHT - LOGO_SIZE) // 2
    card.paste(logo, (CARD_MARGIN, logo_top), logo)
    text_left = CARD_MARGIN + LOGO_SIZE + LOGO_TEXT_GAP
    text_width = CARD_WIDTH - text_left - CARD_MARGIN
    title_font, lines = fit_title(draw, title, text_width)
    line_height = round(title_font.size * TITLE_LINE_SPACING)
    domain_font = ImageFont.truetype(REGULAR_FONT_PATH, DOMAIN_FONT_SIZE)
    block_height = line_height * len(lines) + DOMAIN_FONT_SIZE * 2
    y = (CARD_HEIGHT - block_height) // 2
    for line in lines:
        draw.text((text_left, y), line, font=title_font, fill=NAVY)
        y += line_height
    draw.text((text_left, y + DOMAIN_FONT_SIZE), DOMAIN_TEXT, font=domain_font, fill=PURPLE)
    return card


def main():
    os.makedirs(OUTPUT_DIRECTORY, exist_ok=True)
    logo = Image.open(LOGO_PATH).convert("RGBA").resize((LOGO_SIZE, LOGO_SIZE), Image.LANCZOS)
    for path in sorted(glob.glob(f"{BLOG_CONTENT_DIRECTORY}/*.md")):
        slug = os.path.basename(path)[:-3]
        title = TITLE_PATTERN.search(open(path, encoding="utf-8").read()).group(1)
        build_card(title, logo).save(f"{OUTPUT_DIRECTORY}/{slug}.png", optimize=True)
        print(slug)


if __name__ == "__main__":
    main()
