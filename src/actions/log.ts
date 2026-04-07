"use server";

import { authAction } from "@/lib/auth";
import { getUTCTime } from "@/lib/format";
import { prisma, cacheable } from "@/lib/db";

import { ENUM_COMMON } from "@/enum/common";
import { KEY_TIME_ZONE } from "@/config/common";

import type { Log } from "model";
import type { TypeCommon } from "@/interface/common";

/**
 * @name getStatLog 获取 访客统计日志
 */
export const getStatLog = authAction(async (timeZone: string) => {
  const { date, KEY_COUNT, KEY_TODAY, KEY_MONTH } = getUTCTime(timeZone);
  let [count, today, month, TIME_ZONE_VALUE] = await Promise.all([
    cacheable.get<number>(KEY_COUNT),
    cacheable.get<number>(KEY_TODAY),
    cacheable.get<number>(KEY_MONTH),
    cacheable.get<string>(KEY_TIME_ZONE),
  ]);
  if (timeZone && timeZone !== TIME_ZONE_VALUE) {
    const startOfToday = date.startOf("day").toUTC().toJSDate();
    const endOfToday = date.endOf("day").toUTC().toJSDate();
    const startOfMonth = date.startOf("month").toUTC().toJSDate()!;
    const type = ENUM_COMMON.LOG.ACCESS;
    [count, today, month] = await Promise.all([
      prisma.log.count({ where: { type } }),
      prisma.log.count({
        where: { type, createTime: { gte: startOfToday, lte: endOfToday } },
      }),
      prisma.log.count({
        where: { type, createTime: { gte: startOfMonth, lte: endOfToday } },
      }),
    ]);
    cacheable.set(KEY_COUNT, count);
    cacheable.set(KEY_TODAY, today, "24m");
    cacheable.set(KEY_MONTH, month, "32d");
    cacheable.set(KEY_TIME_ZONE, timeZone);
  }
  return { today, month, count };
});

/**
 * @name getLogs 查询 日记列表
 */
export const getLogs = authAction(
  async ({
    ip,
    type,
    endTime,
    current,
    pageSize,
    startTime,
  }: Partial<
    Pick<Log, "ip" | "type"> & Record<"startTime" | "endTime", string>
  > &
    TypeCommon.PageTurning) => {
    const where = {
      type,
      ip: ip || undefined,
      createTime: startTime
        ? { gte: new Date(startTime!), lte: new Date(endTime!) }
        : undefined,
    };
    const [total, list] = await Promise.all([
      prisma.log.count({ where }),
      prisma.log.findMany({
        where,
        take: pageSize,
        skip: (current - 1) * pageSize,
        orderBy: { createTime: "desc" },
      }),
    ]);
    return { total, list };
  },
);

/**
 * @name deleteLog 删除 日志
 */
export const deleteLog = authAction(
  async ({ id, timeZone }: Record<"timeZone", string> & Pick<Log, "id">) => {
    const res = await prisma.log.findUnique({
      where: { id },
      select: { type: true, createTime: true },
    });
    if (res?.type !== ENUM_COMMON.LOG.ACCESS) {
      return Promise.reject("Not deletable");
    }
    const { KEY_COUNT, KEY_TODAY, KEY_MONTH } = getUTCTime(timeZone);
    await Promise.all([
      cacheable.delete(KEY_COUNT),
      cacheable.delete(KEY_TODAY),
      cacheable.delete(KEY_MONTH),
      prisma.log.delete({ where: { id } }),
    ]);
    return true;
  },
);

/**
 * @name clearAllVisLogs 删除全部访客日志
 */
export const clearAllVisLogs = authAction(async () => {
  await prisma.log.deleteMany({ where: { type: ENUM_COMMON.LOG.ACCESS } });
  cacheable.delete(KEY_TIME_ZONE);
  return true;
});
