/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    domains: ['127.0.0.1'],
  },
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: "raw-loader"
      }
    )
    return config
  }
}

// react-md-editor
const removeImports = require('next-remove-imports')();
module.exports = removeImports({ nextConfig });

// module.exports = nextConfig
