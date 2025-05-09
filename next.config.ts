import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }],
  },

  experimental: {
    serverActions: {},
  },
};

export default nextConfig;
