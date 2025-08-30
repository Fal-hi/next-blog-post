import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    globalNotFound: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
