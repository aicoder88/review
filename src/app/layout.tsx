import type { Metadata } from "next";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ComparisonProvider } from "@/context/ComparisonContext";
import { ComparisonBar } from "@/components/compare/ComparisonBar";
import { ExitIntentOffer } from "@/components/marketing/ExitIntentOffer";
import { SiteSchema } from "@/components/seo/SiteSchema";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

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

const defaultImage = `${siteUrl}/images/og-default.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ReviewCatLitter.com - Data-Driven Cat Litter Reviews & Ratings",
    template: "%s | ReviewCatLitter.com",
  },
  description: siteDescription,
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
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "ReviewCatLitter.com - Data-Driven Cat Litter Reviews & Ratings",
    description: siteDescription,
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
    description: siteDescription,
    images: [defaultImage],
    creator: "@reviewcatlitter",
    site: "@reviewcatlitter",
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
        <meta name="theme-color" content="#0d9488" />
        <meta name="msapplication-TileColor" content="#0d9488" />
        <script defer src="/_vercel/insights/script.js"></script>
      </head>
      <body className={`${outfit.variable} ${fraunces.variable} ${jetbrainsMono.variable} antialiased`}>
        <SiteSchema />
        <ComparisonProvider>
          {children}
          <ComparisonBar />
          <ExitIntentOffer />
        </ComparisonProvider>
      </body>
    </html>
  );
}
