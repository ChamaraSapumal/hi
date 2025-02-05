import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export for GitHub Pages
  basePath: "/hi", // Change "hi" to your actual GitHub repo name
  assetPrefix: "/hi/", // Must match basePath
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static export
  },
};

export default nextConfig;
