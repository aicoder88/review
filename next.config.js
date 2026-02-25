/** @type {import('next').NextConfig} */

const nextConfig = {
    // Ignore ESLint errors during builds
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Ignore TypeScript errors during builds
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['images.unsplash.com'],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Enable compression
    compress: true,
    // Enable SWC minification
    swcMinify: true,
    // Redirects for www redirection
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "reviewcatlitter.com" }],
                destination: "https://www.reviewcatlitter.com/:path*",
                permanent: true,
            },
        ];
    },
    // Headers for caching
    async headers() {
        return [
            {
                source: '/_next/image/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
