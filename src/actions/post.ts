"use server";

import { prisma } from "@/lib/db";
import { authAction } from "@/lib/auth";
import { revalidateTag } from "next/cache";

import { ENUM_COMMON } from "@/enum/common";

import type { Post } from "model";
import type { TypeCommon } from "@/interface/common";

const POST_TYPE = [
  ENUM_COMMON.POST_TYPE.LIFE,
  ENUM_COMMON.POST_TYPE.NOTE,
  ENUM_COMMON.POST_TYPE.PROJECT,
];

/**
 * @name getPosts 获取博文列表
 */
export const getPosts = authAction(
  async ({
    type,
    title,
    status,
    current,
    pageSize,
  }: Pick<Post, "type"> &
    Partial<Pick<Post, "title" | "status">> &
    TypeCommon.PageTurning) => {
    const where = { type, status, title: { contains: title } };
    const [total, list] = await Promise.all([
      prisma.post.count({ where }),
      prisma.post.findMany({
        where,
        take: pageSize,
        skip: (current - 1) * pageSize,
        orderBy: { createTime: "desc" },
        select: {
          id: true,
          type: true,
          icon: true,
          title: true,
          status: true,
          createTime: true,
          description: true,
        },
      }),
    ]);
    return { total, list };
  },
);

/**
 * @name getPost 查询博文
 */
export const getPost = authAction((where: Pick<Post, "id">) => {
  return prisma.post.findUnique({
    where,
    select: {
      id: true,
      icon: true,
      title: true,
      footer: true,
      content: true,
      description: true,
    },
  });
});

/**
 * @name updatePost 新增博文
 */
export const insertPost = authAction(
  async (data: Omit<Post, "id" | "status" | "updateTime" | "createTime">) => {
    const { type, id } = await prisma.post.create({
      data,
      select: { id: true, type: true },
    });
    revalidateTag(`post-${id}`, { expire: 0 });
    return true;
  },
);

/**
 * @name updatePost 编辑博文
 */
export const updatePost = authAction(
  async ({
    id,
    ...data
  }: Omit<Post, "status" | "updateTime" | "createTime">) => {
    await prisma.post.update({
      data,
      where: { id },
      select: { type: true },
    });
    revalidateTag(`post-${id}`, { expire: 0 });
    return true;
  },
);

/**
 * @name deletePost 删除博文
 */
export const deletePost = authAction(async ({ id }: Pick<Post, "id">) => {
  await prisma.post.delete({ where: { id } });
  revalidateTag(`post-${id}`, { expire: 0 });
  return true;
});

/**
 * @name updatePostStatus 编辑博文预览状态
 */
export const updatePostStatus = authAction(
  async ({ id, status }: Pick<Post, "id" | "status">) => {
    await prisma.post.update({
      where: { id },
      data: { status },
      select: { type: true },
    });
    revalidateTag(`post-${id}`, { expire: 0 });
    return true;
  },
);

/**
 * @name getClientPosts 获取博文列表（客户端）
 */
export async function getClientPosts({
  type,
  current,
  pageSize = 1,
}: Pick<Post, "type"> & TypeCommon.PageTurning) {
  if (!POST_TYPE.includes(type)) return Promise.reject("Parameter exception");
  const where = { type, status: ENUM_COMMON.STATUS.ENABLE };
  const [total, list] = await Promise.all([
    prisma.post.count({ where }),
    prisma.post.findMany({
      take: pageSize,
      skip: (current - 1) * pageSize,
      orderBy: { createTime: "desc" },
      where: { type, status: ENUM_COMMON.STATUS.ENABLE },
      select: { id: true, icon: true, title: true, description: true },
    }),
  ]);
  return { total, list };
}
