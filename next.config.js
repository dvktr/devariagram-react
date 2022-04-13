/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includedPaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = nextConfig
