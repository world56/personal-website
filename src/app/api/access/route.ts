import { getUTCTime } from "@/lib/format";
import { notFound } from "next/navigation";
import { prisma, cacheable } from "@/lib/db";

import { ENUM_COMMON } from "@/enum/common";
import { KEY_TIME_ZONE } from "@/config/common";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;
  const type = Number(searchParams.get("type"));
  const ip = searchParams.get("ip");
  if (
    searchParams.get("key") === String(process.env.SECRET) &&
    type === ENUM_COMMON.LOG.ACCESS
  ) {
    const timeZone = await cacheable.get<string>(KEY_TIME_ZONE);
    if (timeZone) {
      const { KEY_COUNT, KEY_TODAY, KEY_MONTH } = getUTCTime(timeZone);
      cacheable.incr({ key: KEY_COUNT });
      cacheable.incr({ key: KEY_TODAY, ttl: "24h" });
      cacheable.incr({ key: KEY_MONTH, ttl: "32d" });
    }
    await prisma.log.create({
      data: { ip, type: ENUM_COMMON.LOG.ACCESS, description: "200" },
    });
  } else {
    await prisma.log.create({
      data: {
        ip,
        type: ENUM_COMMON.LOG.UNAUTHORIZED, // 没有系统密钥 或 参数异常
        description: searchParams.get("desc") || pathname,
      },
    });
  }
  return notFound();
}
