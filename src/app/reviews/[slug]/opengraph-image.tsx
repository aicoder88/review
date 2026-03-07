import { ImageResponse } from 'next/og';
import {
  SocialImage,
  socialImageContentType,
  socialImageSize,
} from '@/components/seo/SocialImage';
import { formatCatalogDate, getCatalogProductBySlug } from '@/lib/product-catalog';

export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage({ params }: { params: { slug: string } }) {
  const product = getCatalogProductBySlug(params.slug);

  return new ImageResponse(
    (
      <SocialImage
        eyebrow={product?.category ?? 'Product Review'}
        title={product?.name ?? 'Cat Litter Review'}
        description={product?.summary ?? 'Independent product review with score breakdowns, tradeoffs, and buying guidance.'}
        primaryStat={product ? `${product.overallScore}/10 overall` : 'ReviewCatLitter'}
        secondaryStat={product ? `Reviewed ${formatCatalogDate(product.lastReviewedAt)}` : 'Current review'}
      />
    ),
    size,
  );
}
