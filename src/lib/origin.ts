export function getSiteOrigin(): string {
  const raw = process.env.SITE_URL?.trim();
  if (!raw) return "http://localhost:3000";
  try {
    return raw.startsWith("http")
      ? new URL(raw).origin
      : new URL(`https://${raw}`).origin;
  } catch {
    return "http://localhost:3000";
  }
}

export function getSiteHost(): string {
  try {
    return new URL(getSiteOrigin()).host;
  } catch {
    return "localhost:3000";
  }
}
