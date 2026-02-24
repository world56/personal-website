"use server";

import sharp from "sharp";
import * as uuid from "uuid";
import { stat } from "fs/promises";
import { isVoid } from "@/lib/utils";
import { writeFile } from "fs/promises";
import { authAction } from "@/lib/auth";
import { DBlocal, prisma } from "@/lib/db";
import { getFileType } from "@/lib/filter";

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
 * @name deleteResoruce 删除资源
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

/**
 * @name upload 上传资源
 */
export const upload = authAction(async (formData: FormData) => {
  const file = formData.get("file") as File;
  let suffix = file.name.split(".").at(-1)?.toLocaleLowerCase();
  if (!suffix) return Promise.reject("Missing file extension");
  let buffer = Buffer.from(new Uint8Array(await file.arrayBuffer())) as Buffer;
  if (["jpg", "jpeg", "png"].includes(suffix)) {
    buffer = await sharp(buffer).webp().toBuffer();
    suffix = "webp";
  }
  const { name } = file;
  const path = `${uuid.v1()}.${suffix}`;
  const filePath = `${DBlocal.FOLDER_PATH}/${path}`;
  await writeFile(filePath, new Uint8Array(buffer));
  const { size } = await stat(filePath);
  const type = getFileType(name);
  await prisma.resource.create({ data: { name, path, size, type } });
  return { name, path, size, type };
});
