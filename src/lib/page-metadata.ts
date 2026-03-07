import type { Metadata } from 'next';
import { siteName, toAbsoluteUrl } from '@/lib/site';

interface BuildPageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: 'website' | 'article';
  robots?: Metadata['robots'];
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  type = 'website',
  robots,
  openGraphTitle,
  openGraphDescription,
  twitterTitle,
  twitterDescription,
  publishedTime,
  modifiedTime,
  section,
  tags,
}: BuildPageMetadataOptions): Metadata {
  const absoluteUrl = toAbsoluteUrl(path);
  const socialTitle = openGraphTitle ?? title;
  const socialDescription = openGraphDescription ?? description;

  return {
    title,
    description,
    keywords,
    robots,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: absoluteUrl,
      siteName,
      title: socialTitle,
      description: socialDescription,
      ...(type === 'article'
        ? {
            publishedTime,
            modifiedTime,
            section,
            tags,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle ?? socialTitle,
      description: twitterDescription ?? socialDescription,
    },
  };
}
