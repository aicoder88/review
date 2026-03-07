import { ImageResponse } from 'next/og';
import {
  SocialImage,
  socialImageContentType,
  socialImageSize,
} from '@/components/seo/SocialImage';
import { formatCatalogDate, getComparisonMatchupBySlug } from '@/lib/product-catalog';

export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage({ params }: { params: { slug: string } }) {
  const matchup = getComparisonMatchupBySlug(params.slug);
  const title = matchup
    ? `${matchup.products[0].name} vs ${matchup.products[1].name}`
    : 'Cat Litter Comparison';

  return new ImageResponse(
    (
      <SocialImage
        eyebrow="Head-to-Head"
        title={title}
        description={matchup?.insight.summary ?? 'Side-by-side cat litter comparison with score breakdowns and key tradeoffs.'}
        primaryStat={matchup ? `Winner: ${matchup.insight.winner.name}` : 'Compare litters'}
        secondaryStat={matchup ? `Updated ${formatCatalogDate(matchup.updatedAt)}` : 'Current matchup'}
      />
    ),
    size,
  );
}
