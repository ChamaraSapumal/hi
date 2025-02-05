import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  basePath: "/hi", // Replace with your GitHub repo name
  assetPrefix: "/hi/", 
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "assets.aceternity.com"],
  },
};

export default nextConfig;
