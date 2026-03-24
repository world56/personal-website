import createNextIntlPlugin from "next-intl/plugin";

import type { NextConfig } from "next";

function serverActionsAllowedOrigins() {
  const fromEnv = process.env.SERVER_ACTIONS_ALLOWED_ORIGINS;
  if (fromEnv?.trim()) {
    return fromEnv
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  if (site?.trim()) {
    try {
      const host = new URL(site.startsWith("http") ? site : `https://${site}`)
        .hostname;
      return host ? [host] : [];
    } catch {
      return [];
    }
  }
  return [];
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
