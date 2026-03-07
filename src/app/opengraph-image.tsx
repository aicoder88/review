import { ImageResponse } from 'next/og';
import {
  SocialImage,
  socialImageContentType,
  socialImageSize,
} from '@/components/seo/SocialImage';
import { getComparisonPageCount, getReviewedProductCount } from '@/lib/site';

export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  const reviewedProductCount = getReviewedProductCount();
  const comparisonPageCount = getComparisonPageCount();

  return new ImageResponse(
    (
      <SocialImage
        eyebrow="ReviewCatLitter"
        title="Cat Litter Reviews and Comparisons"
        description="Independent product reviews, side-by-side matchups, and current editorial picks for cleaner litter boxes."
        primaryStat={`${reviewedProductCount} reviews`}
        secondaryStat={`${comparisonPageCount}+ matchups`}
      />
    ),
    size,
  );
}
