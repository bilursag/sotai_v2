import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "images.unsplash.com",
      port: "",
      pathname: "/assets/**"
    }]
  }
};

export default nextConfig;
