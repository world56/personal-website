import { DateTime } from "luxon";
import { getUTCTime } from "@/lib/format";
import { NextResponse } from "next/server";
import { prisma, cacheable } from "@/lib/db";

import { ENUM_COMMON } from "@/enum/common";

import { KEY_TIME_ZONE } from "@/config/common";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const TIME_ZONE = request.headers.get("time-zone")!;
  if (!TIME_ZONE) {
    return NextResponse.json("missing required parameter", { status: 400 });
  }
  const { date, KEY_COUNT, KEY_TODAY, KEY_MONTH } = getUTCTime(TIME_ZONE);
  let [count, today, month, TIME_ZONE_VALUE] = await Promise.all([
    cacheable.get(KEY_COUNT),
    cacheable.get(KEY_TODAY),
    cacheable.get(KEY_MONTH),
    cacheable.get(KEY_TIME_ZONE),
  ]);
  if (TIME_ZONE && TIME_ZONE !== TIME_ZONE_VALUE) {
    const startOfToday = date.startOf("day").toUTC().toJSDate();
    const endOfToday = date.endOf("day").toUTC().toJSDate();
    const startOfMonth = date.startOf("month").toUTC().toJSDate()!;
    [count, today, month] = await Promise.all([
      prisma.log.count({ where: { type: ENUM_COMMON.LOG.ACCESS } }),
      prisma.log.count({
        where: {
          type: ENUM_COMMON.LOG.ACCESS,
          createTime: { gte: startOfToday, lte: endOfToday },
        },
      }),
      prisma.log.count({
        where: {
          type: ENUM_COMMON.LOG.ACCESS,
          createTime: { gte: startOfMonth, lte: endOfToday },
        },
      }),
    ]);
    cacheable.set(KEY_COUNT, count);
    cacheable.set(KEY_TODAY, today, "24m");
    cacheable.set(KEY_MONTH, month, "32d");
  }
  return NextResponse.json({ today, month, count });
}

export async function DELETE(request: NextRequest) {
  const TIME_ZONE = request.headers.get("time-zone")!;
  if (!TIME_ZONE) {
    return NextResponse.json("missing required parameter", { status: 400 });
  }
  const { searchParams } = request.nextUrl;
  const id = Number(searchParams.get("id"));
  const res = await prisma.log.findUnique({
    where: { id },
    select: { type: true, createTime: true },
  });
  if (res?.type !== ENUM_COMMON.LOG.ACCESS) {
    return NextResponse.json("Not deletable", { status: 400 });
  }
  const date = DateTime.fromISO(res.createTime.toISOString()).setZone(
    TIME_ZONE,
  );
  await Promise.all([
    cacheable.decr("visit_count"),
    cacheable.decr(`visit_${date.day}`),
    cacheable.decr(`visit_${date.month}`),
  ]);
  await prisma.log.delete({ where: { id } });
  return NextResponse.json(true);
}
