/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    // 'developerdiscovery.com'
    domains: ['localhost:8000', 'developerdiscovery.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // dev 에선 주석처리
  // https://stackoverflow.com/questions/29576341/what-does-the-code-generator-has-deoptimised-the-styling-of-some-file-as-it-e
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
