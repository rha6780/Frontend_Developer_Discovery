/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    domains: ['127.0.0.1'],
  },
}

module.exports = nextConfig
