import type { MetadataRoute } from "next";

import { prisma } from "@/lib/db";
import { getSiteOrigin } from "@/lib/origin";

import { POST_PATH } from "@/config/common";
import { ENUM_COMMON } from "@/enum/common";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = getSiteOrigin();

  const posts = await prisma.post.findMany({
    where: { status: ENUM_COMMON.STATUS.ENABLE },
    select: { id: true, type: true, updateTime: true },
  });

  const staticEntries: MetadataRoute.Sitemap = [
    { url: origin, lastModified: new Date() },
    { url: `${origin}/life`, lastModified: new Date() },
    { url: `${origin}/notes`, lastModified: new Date() },
    { url: `${origin}/projects`, lastModified: new Date() },
  ];

  const postEntries: MetadataRoute.Sitemap = posts
    .map((post) => {
      const segment = POST_PATH[post.type as keyof typeof POST_PATH];
      if (segment === undefined) return null;
      return {
        url: `${origin}/${segment}/${post.id}`,
        lastModified: post.updateTime,
      };
    })
    .filter((v): v is NonNullable<typeof v> => v !== null);

  return [...staticEntries, ...postEntries];
}
