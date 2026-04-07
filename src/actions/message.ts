"use server";

import type { z } from "zod";
import { headers } from "next/headers";
import { authAction } from "@/lib/auth";
import { getClientIP } from "@/lib/utils";
import { prisma, cacheable } from "@/lib/db";
import { messageSchema } from "@/schema/message";

import type { Message } from "model";
import type { TypeCommon } from "@/interface/common";

/**
 * @name getMessages 查询 留言消息列表
 */
export const getMessages = authAction(
  async ({
    read,
    current,
    endTime,
    pageSize,
    startTime,
  }: TypeCommon.PageTurning &
    Partial<Record<"startTime" | "endTime", string>> & { read?: boolean }) => {
    const where = {
      read,
      createTime: startTime
        ? {
            gte: new Date(startTime!),
            lte: new Date(endTime!),
          }
        : undefined,
    };
    const [total, list] = await Promise.all([
      prisma.message.count({ where }),
      prisma.message.findMany({
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
 * @name insertMessage 提交一条留言
 */
export async function insertMessage(
  data: z.infer<typeof messageSchema>,
) {
  const result = messageSchema.safeParse(data);
  if (!result.success) {
    return Promise.reject(400);
  }

  const header = await headers();
  const ip = getClientIP(header);
  const bol = await cacheable.incr({
    maximum: 3,
    ttl: "10m",
    key: `msg_${ip}`,
  });
  if (!bol) return Promise.reject(429);
  await prisma.message.create({ data: result.data });
  return true;
}

/**
 * @name messageRead 留言消息 标记为已读
 */
export const messageRead = authAction(async ({ id }: Pick<Message, "id">) => {
  await prisma.message.update({
    where: { id },
    data: { read: true },
  });
  return true;
});

/**
 * @name deleteMessage 删除留言
 */
export const deleteMessage = authAction(async ({ id }: Pick<Message, "id">) => {
  await prisma.message.delete({ where: { id } });
  return true;
});
