/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://reviewcatlitter.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/reviews/purrify')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/reviews/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('/categories/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('/guides/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
