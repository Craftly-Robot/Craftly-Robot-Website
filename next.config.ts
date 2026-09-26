import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "craftlyrobot.com",
      },
    ],
  },
  turbopack: {},
  experimental: {
    cpus: 2,
  },
};

export default nextConfig;
