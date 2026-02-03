import type { Metadata } from "next";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ComparisonProvider } from "@/context/ComparisonContext";
import { ComparisonBar } from "@/components/compare/ComparisonBar";
import { ExitIntentOffer } from "@/components/marketing/ExitIntentOffer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.reviewcatlitter.com";
const siteName = "ReviewCatLitter.com";
const defaultImage = `${siteUrl}/images/og-default.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ReviewCatLitter.com - Data-Driven Cat Litter Reviews & Ratings",
    template: "%s | ReviewCatLitter.com",
  },
  description: "Independent, data-driven cat litter reviews for discerning cat parents. 500+ products tested with scientific methodology. Find the best cat litter for odor control, clumping, and value.",
  keywords: ["cat litter reviews", "best cat litter for odor control", "litter comparison", "cat litter ratings", "clumping cat litter", "natural cat litter", "dust free cat litter"],
  authors: [{ name: "ReviewCatLitter Team" }],
  creator: "ReviewCatLitter.com",
  publisher: "ReviewCatLitter.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-CA": "/",
      "fr-CA": "/",
      "en": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: siteName,
    title: "ReviewCatLitter.com - Data-Driven Cat Litter Reviews & Ratings",
    description: "Independent, data-driven cat litter reviews for discerning cat parents. 500+ products tested with scientific methodology.",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "ReviewCatLitter.com - Data-Driven Cat Litter Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReviewCatLitter.com - Data-Driven Cat Litter Reviews & Ratings",
    description: "Independent, data-driven cat litter reviews for discerning cat parents. 500+ products tested with scientific methodology.",
    images: [defaultImage],
    creator: "@reviewcatlitter",
    site: "@reviewcatlitter",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "msvalidate.01": "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hreflang tags for Canadian audience */}
        <link rel="alternate" hrefLang="en-CA" href={siteUrl} />
        <link rel="alternate" hrefLang="fr-CA" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="CA" />
        <meta name="geo.placename" content="Canada" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0d9488" />
        <meta name="msapplication-TileColor" content="#0d9488" />
      </head>
      <body className={`${outfit.variable} ${fraunces.variable} ${jetbrainsMono.variable} antialiased`}>
        <ComparisonProvider>
          {children}
          <ComparisonBar />
          <ExitIntentOffer />
        </ComparisonProvider>
      </body>
    </html>
  );
}
