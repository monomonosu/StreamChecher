import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"placehold.jp"
      },
      {
        protocol:"https",
        hostname:"i.scdn.co"
      }
    ]
  }
};

export default nextConfig;
