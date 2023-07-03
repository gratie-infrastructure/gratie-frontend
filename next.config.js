/** @type {import('next').NextConfig} */
require("dotenv").config({
  path: `.env`,
})
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  
}

module.exports = nextConfig
