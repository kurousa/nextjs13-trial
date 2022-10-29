/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // enable appDir
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
