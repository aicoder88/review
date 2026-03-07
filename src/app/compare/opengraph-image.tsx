import { ImageResponse } from 'next/og';
import {
  SocialImage,
  socialImageContentType,
  socialImageSize,
} from '@/components/seo/SocialImage';
import { getComparisonPageCount } from '@/lib/site';

export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  const comparisonPageCount = getComparisonPageCount();

  return new ImageResponse(
    (
      <SocialImage
        eyebrow="Compare Hub"
        title="Compare Cat Litters Side-by-Side"
        description="Open permanent head-to-head matchup pages or use the interactive comparison tool to weigh the tradeoffs quickly."
        primaryStat={`${comparisonPageCount}+ matchups`}
        secondaryStat="Interactive compare tool"
      />
    ),
    size,
  );
}
