/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  exportPathMap: function () {
    return {
      "/locales/de-DE/summer-dress-f": {
        page: "/locales/[locale]/[slug]",
        query: { locale: "de-DE", slug: "summer-dress-f" },
      },
    };
  },
};

module.exports = nextConfig;
