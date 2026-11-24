import type { APIRoute } from "astro";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  PRICE_MONTHLY,
  PRICE_YEARLY,
  PRICE_YEARLY_PER_MONTH,
  HOUSEHOLD_SIZE,
  TRIAL_TERMS,
  TRIAL_FIRST_TIME_NOTE,
  SITE_ORIGIN,
  PRICING_MARKDOWN_PATH,
} from "../config";

// Built from the same constants as /pricing, so the plain-text copy AI tools read can never drift from the page parents see.
const pricingMarkdown = [
  "# Cleanmail: Family Inbox pricing",
  "",
  `${TRIAL_TERMS} ${TRIAL_FIRST_TIME_NOTE}`,
  "",
  "| Plan | Price |",
  "| --- | --- |",
  `| Monthly | ${PRICE_MONTHLY} a month |`,
  `| Yearly | ${PRICE_YEARLY} a year (${PRICE_YEARLY_PER_MONTH}/month) |`,
  "",
  `- One parent pays. Up to ${HOUSEHOLD_SIZE} people at home share one plan, you included.`,
  "- For iPhone and Android.",
  `- App Store: ${APP_STORE_URL}`,
  `- Google Play: ${PLAY_STORE_URL}`,
  `- Pricing page: ${SITE_ORIGIN}/pricing`,
  `- This file: ${SITE_ORIGIN}${PRICING_MARKDOWN_PATH}`,
  "",
].join("\n");

export const GET: APIRoute = () =>
  new Response(pricingMarkdown, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
