import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
};

export default nextConfig;
