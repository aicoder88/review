import { ImageResponse } from 'next/og';
import {
  SocialImage,
  socialImageContentType,
  socialImageSize,
} from '@/components/seo/SocialImage';
import { formatSiteDate, getLatestReviewedDate, getReviewedProductCount } from '@/lib/site';

export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  const reviewedProductCount = getReviewedProductCount();
  const latestReviewedDate = getLatestReviewedDate();

  return new ImageResponse(
    (
      <SocialImage
        eyebrow="Review Archive"
        title="All Cat Litter Reviews"
        description="Browse the full review catalog with dust, clumping, odor, tracking, and value notes for every product."
        primaryStat={`${reviewedProductCount} reviews`}
        secondaryStat={`Updated ${formatSiteDate(latestReviewedDate)}`}
      />
    ),
    size,
  );
}
