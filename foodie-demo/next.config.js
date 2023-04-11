/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.contentstack.io',],
  }
}

module.exports = nextConfig
