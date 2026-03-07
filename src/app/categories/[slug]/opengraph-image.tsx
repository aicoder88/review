import { ImageResponse } from 'next/og';
import {
  SocialImage,
  socialImageContentType,
  socialImageSize,
} from '@/components/seo/SocialImage';
import { getCategoryPageConfig, getCategoryPageStats } from '@/lib/category-pages';

export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage({ params }: { params: { slug: string } }) {
  const config = getCategoryPageConfig(params.slug);
  const stats = getCategoryPageStats(params.slug);

  return new ImageResponse(
    (
      <SocialImage
        eyebrow="Category Roundup"
        title={config?.title ?? 'Category Reviews'}
        description={config?.description ?? 'Roundups of the strongest product picks in this review category.'}
        primaryStat={stats ? `${stats.tested} reviewed picks` : 'ReviewCatLitter'}
        secondaryStat={stats?.reviewedThrough ? `Updated ${stats.reviewedThrough}` : 'Current roundup'}
      />
    ),
    size,
  );
}
