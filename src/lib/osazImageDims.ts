// Intrinsic pixel dimensions of every OSAZ source image, read directly from
// the files. Used to cap display width at <=50% of intrinsic width so
// nothing is ever upscaled past native resolution.
export const IMG_DIMS: Record<string, { w: number; h: number }> = {
  "/images/osaz/redesign/account.png": { w: 305, h: 661 },
  "/images/osaz/redesign/acne.png": { w: 305, h: 658 },
  "/images/osaz/redesign/age.png": { w: 375, h: 812 },
  "/images/osaz/redesign/cart.png": { w: 375, h: 747 },
  "/images/osaz/redesign/components.png": { w: 1522, h: 642 },
  "/images/osaz/redesign/consent.png": { w: 383, h: 820 },
  "/images/osaz/redesign/new-dash-desktop.png": { w: 798, h: 787 },
  "/images/osaz/redesign/old-dash.png": { w: 1267, h: 760 },
  "/images/osaz/redesign/old-pain.png": { w: 1512, h: 698 },
  "/images/osaz/redesign/pricing.png": { w: 262, h: 1114 },
  "/images/osaz/redesign/retake.png": { w: 282, h: 559 },
  "/images/osaz/redesign/revisit.png": { w: 383, h: 820 },
  "/images/osaz/redesign/skintype-expanded.png": { w: 811, h: 1785 },
  "/images/osaz/results.png": { w: 383, h: 755 },
  "/images/osaz/selfie.png": { w: 375, h: 812 },
  "/images/osaz/shade-match.png": { w: 375, h: 812 },
  "/images/osaz/thumb.png": { w: 1600, h: 1200 },
};

export function dims(src: string) {
  return IMG_DIMS[src] ?? { w: 1000, h: 1000 };
}

/** CSS max-width that never exceeds half the source's intrinsic width (>=2x density). */
export function safeCapPx(src: string, specCapPx: number): number {
  return Math.min(specCapPx, Math.floor(dims(src).w / 2));
}
