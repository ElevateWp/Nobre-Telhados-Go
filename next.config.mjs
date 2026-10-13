/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/dental-implants', destination: '/roof-repairs/', permanent: true },
      { source: '/root-canal', destination: '/gutter-cleaning/', permanent: true },
      { source: '/teeth-whitening', destination: '/roof-renovation/', permanent: true },
      { source: '/dental-cleaning', destination: '/waterproofing/', permanent: true },
      { source: '/braces', destination: '/roof-cleaning/', permanent: true },
      { source: '/cosmetic-dentistry', destination: '/storm-damage/', permanent: true },
      { source: '/dentists/:path*', destination: '/about/', permanent: true },
      { source: '/book-appointment', destination: '/request-quote/', permanent: true },
      { source: '/blog/planning-a-building-materials-order', destination: '/blog/roof-leak-signs/', permanent: true },
      { source: '/blog/concrete-pipes-for-projects', destination: '/blog/gutter-maintenance/', permanent: true },
      { source: '/blog/decorative-concrete-blocks', destination: '/blog/when-to-renovate-a-roof/', permanent: true },
      { source: '/blog/arranging-materials-delivery', destination: '/blog/storm-damage-safety/', permanent: true },
    ];
  },
};

export default nextConfig;
