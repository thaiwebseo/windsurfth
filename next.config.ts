import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.windsurfth.com" }],
        destination: "https://windsurfth.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
