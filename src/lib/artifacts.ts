export const ARTIFACT_SLUGS = ['deck', 'apparel', 'prints', 'album'] as const;

export type ArtifactSlug = (typeof ARTIFACT_SLUGS)[number];

export function isArtifactSlug(value: string): value is ArtifactSlug {
  return (ARTIFACT_SLUGS as readonly string[]).includes(value);
}

export type ArtifactMedia = { image: string; width: number; height: number };

/** Homepage / artifacts grid thumbs. */
export const ARTIFACT_MEDIA: Record<ArtifactSlug, ArtifactMedia> = {
  deck: { image: '/media/deck-lifestyle.jpg', width: 1024, height: 672 },
  apparel: { image: '/media/partner-apparel.jpg', width: 764, height: 1024 },
  prints: { image: '/media/partner-print.jpg', width: 704, height: 1024 },
  album: { image: '/media/album-cover.jpg', width: 724, height: 1024 },
};

/** Detail-page heroes (overrides ARTIFACT_MEDIA when set). */
export const ARTIFACT_DETAIL_HERO: Partial<Record<ArtifactSlug, ArtifactMedia>> = {
  apparel: { image: '/media/merch-apparel-hero.jpg', width: 704, height: 1024 },
  prints: { image: '/media/prints-detail-hero.jpg', width: 713, height: 1024 },
};

/** Secondary product shots used on shop stages (not the artifact card thumb). */
export const ARTIFACT_STAGE_MEDIA: Partial<Record<ArtifactSlug, ArtifactMedia>> = {
  album: { image: '/media/album-spread.jpg', width: 1024, height: 724 },
};
