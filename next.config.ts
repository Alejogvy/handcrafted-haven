/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Correct configuration for Server Actions
    serverActions: {}, // Empty object or object with specific settings
    optimizeCss: false
  }
}