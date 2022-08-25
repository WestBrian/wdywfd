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

module.exports = nextConfig
