import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roriks22.github.io",
      },
      {
        protocol: "https",
        hostname: "img.magnific.com",
      },
      {
        protocol: "https",
        hostname: "faire-part-mariage-marie-paul.vercel.app",
      },
      {
        protocol: "https",
        hostname: "www.socratea.net",
      },
      {
       protocol: 'https',
       hostname: 'oc-static.imgix.net',
     },
    ],
  },
};

export default nextConfig;
