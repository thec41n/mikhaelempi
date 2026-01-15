import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 

  basePath: "/mikhaelempi",
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;