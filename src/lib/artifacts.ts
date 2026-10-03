export const ARTIFACT_SLUGS = ['deck', 'apparel', 'prints', 'album'] as const;

export type ArtifactSlug = (typeof ARTIFACT_SLUGS)[number];

export function isArtifactSlug(value: string): value is ArtifactSlug {
  return (ARTIFACT_SLUGS as readonly string[]).includes(value);
}

export const ARTIFACT_MEDIA: Record<
  ArtifactSlug,
  { image: string; width: number; height: number }
> = {
  deck: { image: '/media/pack.png', width: 1536, height: 1024 },
  apparel: { image: '/media/partner-apparel.jpg', width: 704, height: 1024 },
  prints: { image: '/media/partner-print.jpg', width: 713, height: 1024 },
  album: { image: '/media/album-cover.jpg', width: 724, height: 1024 },
};

/** Secondary product shots used on shop stages (not the artifact card thumb). */
export const ARTIFACT_STAGE_MEDIA: Partial<
  Record<ArtifactSlug, { image: string; width: number; height: number }>
> = {
  album: { image: '/media/album-spread.jpg', width: 1024, height: 724 },
};
