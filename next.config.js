/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
    domains: ['sampresh.github.io'],
  },
  assetPrefix: '/portfolio/',
  trailingSlash: true,
  // Ensure static assets are copied to the output directory
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig 