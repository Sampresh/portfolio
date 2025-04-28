/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/portfolio/',
  trailingSlash: true,
}

module.exports = nextConfig 