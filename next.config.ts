import createNextIntlPlugin from "next-intl/plugin";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    proxyClientMaxBodySize: "20mb",
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        pathname: "/api/resource/**",
        port: process.env.PORT || "3000",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/api/resource/**",
        port: process.env.PORT || "3000",
      },
    ],
  },
  headers() {
    return [
      {
        source: "/lib/welcome",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=900, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default createNextIntlPlugin()(nextConfig);
