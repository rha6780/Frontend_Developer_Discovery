/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    domains: ['ec2-43-200-202-244.ap-northeast-2.compute.amazonaws.com'],
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
