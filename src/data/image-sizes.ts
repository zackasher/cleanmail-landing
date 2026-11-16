// Intrinsic pixel sizes of the site's images, so every <img> can carry width and height and the page does not jump as images load.
export interface ImageSize {
  width: number;
  height: number;
}

const IMAGE_SIZES: Record<string, ImageSize> = {
  "/icon.webp": { width: 160, height: 160 },
  "/logo.webp": { width: 900, height: 900 },
  "/iphone-frame.webp": { width: 322, height: 674 },
  "/hiw-digest.webp": { width: 720, height: 1561 },
  "/mq-digest-1018.webp": { width: 520, height: 1127 },
  "/hiw109-welcome.webp": { width: 720, height: 1522 },
  "/hiw107-who.webp": { width: 720, height: 1558 },
  "/hiw107-activities.webp": { width: 720, height: 1558 },
  "/hiw107-senders.webp": { width: 720, height: 1558 },
  "/hiw107-building.webp": { width: 720, height: 1558 },
  "/hiw107-teaser.webp": { width: 720, height: 1558 },
  "/hiw107-plan.webp": { width: 720, height: 1558 },
  "/feat-weekly-1018.webp": { width: 520, height: 1127 },
  "/feat-add-1018.webp": { width: 520, height: 1127 },
  "/feat-calendar-sync-1018.webp": { width: 520, height: 1127 },
  "/feat-cancel-1018.webp": { width: 520, height: 1127 },
  "/feat-household.webp": { width: 520, height: 1127 },
  "/feat-notes-1018.webp": { width: 520, height: 1127 },
  "/feat-reminders.webp": { width: 520, height: 1127 },
  "/feat-voice.webp": { width: 520, height: 1127 },
  "/Digest_Sample.webp": { width: 886, height: 1920 },
};

export function imageSize(path: string): ImageSize | undefined {
  return IMAGE_SIZES[path];
}
