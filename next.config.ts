import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: false, // Disable strict mode to reduce hydration warnings

  typescript: {
    ignoreBuildErrors: true,
  },

};

export default nextConfig;
