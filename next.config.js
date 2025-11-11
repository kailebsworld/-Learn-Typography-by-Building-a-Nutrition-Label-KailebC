/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdn.sanity.io'
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com'
      }
    ]
  },
  experimental: {
    typedRoutes: true
  }
}

module.exports = nextConfig
