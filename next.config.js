/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['spoonacular.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    scrollRestoration: true,
  },
}

const withBundleAnalyzer =
  process.env.ANALYZE === 'true' ? require('@next/bundle-analyzer')() : (x) => x

module.exports = withBundleAnalyzer(nextConfig)
