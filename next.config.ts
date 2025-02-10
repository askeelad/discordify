import type { NextConfig } from "next";
import Image from "next/image";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
};

export default nextConfig;
