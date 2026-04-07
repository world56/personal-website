"use server";

import { isVoid } from "@/lib/utils";
import { authAction } from "@/lib/auth";
import { DBlocal, prisma } from "@/lib/db";

import { SortOrder } from "generated/prisma/internal/prismaNamespace";

import type { Resource } from "model";
import type { TypeCommon } from "@/interface/common";

/**
 * @name getResources 查询 资源列表
 */
export const getResources = authAction(
  async ({
    name,
    type,
    size,
    current,
    pageSize,
  }: Partial<Pick<Resource, "name" | "type"> & { size: SortOrder }> &
    TypeCommon.PageTurning) => {
    const where = {
      name: name ? { contains: name } : undefined,
      type: isVoid(type) ? undefined : Number(type),
    };
    const [total, list] = await Promise.all([
      prisma.resource.count({ where }),
      prisma.resource.findMany({
        where,
        take: pageSize,
        skip: (current - 1) * pageSize,
        orderBy: size ? { size } : { createTime: "desc" },
      }),
    ]);
    return { total, list };
  },
);

/**
 * @name deleteResource 删除资源
 */
export const deleteResource = authAction(
  async ({ id }: Pick<Resource, "id">) => {
    const { path } = await prisma.resource.delete({
      where: { id },
      select: { path: true },
    });
    DBlocal.remove(path);
    return true;
  },
);
