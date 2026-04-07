import createNextIntlPlugin from "next-intl/plugin";

import type { NextConfig } from "next";

function serverActionsAllowedOrigins() {
  const source =
    process.env.SERVER_ACTIONS_ALLOWED_ORIGINS?.trim() ||
    process.env.SITE_URL?.trim();
  if (!source) return [];

  const toHost = (value: string): string | null => {
    try {
      const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;
      return new URL(url).host || null;
    } catch {
      return null;
    }
  };

  return [
    ...new Set(
      source
        .split(",")
        .map((v) => toHost(v.trim()))
        .filter(Boolean),
    ),
  ] as string[];
}

const allowedOrigins = serverActionsAllowedOrigins();

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  reactCompiler: true,
  experimental: {
    proxyClientMaxBodySize: "20mb",
    serverActions: {
      bodySizeLimit: "20mb",
      ...(allowedOrigins.length > 0 ? { allowedOrigins } : {}),
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
