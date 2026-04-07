"use server";

import { filterCUD } from "@/lib/filter";
import { DBlocal, prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { authAction, log } from "@/lib/auth";
import { checkLanguage } from "@/lib/language";

import { ENUM_COMMON } from "@/enum/common";

import type { Tag } from "model";
import type { TypeCommon } from "@/interface/common";

/**
 * @name getProfile 获取个人主页信息
 */
export const getProfile = authAction(async () => {
  const data = DBlocal.get();
  const [items, skills] = await Promise.all([
    prisma.tag.findMany({
      where: { type: ENUM_COMMON.TAG.PANEL },
      orderBy: { index: "asc" },
    }),
    prisma.tag.findMany({
      where: { type: ENUM_COMMON.TAG.SKILL },
      orderBy: { index: "asc" },
    }),
  ]);
  return { ...data, items, skills };
});

/**
 * @name updateProfile 编辑个人主页信息
 */
export const updateProfile = authAction(
  async ({
    items,
    skills,
    ...data
  }: TypeCommon.DeepPartial<TypeCommon.ProfileDTO>) => {
    const db = await prisma.tag.findMany({
      where: { type: { in: [ENUM_COMMON.TAG.PANEL, ENUM_COMMON.TAG.SKILL] } },
    });
    if (Array.isArray(items) && Array.isArray(skills)) {
      const tagCUD = filterCUD(
        [
          ...items.map((v, index) => ({
            ...v,
            index,
            type: ENUM_COMMON.TAG.PANEL,
          })),
          ...skills.map((v, index) => ({
            ...v,
            index,
            type: ENUM_COMMON.TAG.SKILL,
          })),
        ],
        db,
      );
      await prisma.$transaction([
        prisma.tag.createMany({ data: tagCUD.INSERT as Tag[] }),
        prisma.tag.deleteMany({ where: { id: { in: tagCUD.DELETE as [] } } }),
        ...tagCUD.UPDATE.map((v) =>
          prisma.tag.update({ data: v, where: { id: v.id } }),
        ),
      ]);
    }
    DBlocal.set(data);
    revalidatePath("/", "layout");
    return true;
  },
);

/**
 * @name getLanguage 获取 系统语言
 */
export async function getLanguage() {
  return DBlocal.language();
}

/**
 * @name updateLanguage 更新 系统语言
 */
export const updateLanguage = authAction(
  async ({ language }: { language: ENUM_COMMON.LANG }) => {
    if (checkLanguage(language)) {
      DBlocal.set({ language });
      revalidatePath("/", "layout");
      return true;
    } else {
      return Promise.reject(false);
    }
  },
);

/**
 * @name updatePassword 更新 管理员登录密码
 */
export const updatePassword = authAction(
  async ({
    password,
    newPassword,
  }: Record<"password" | "newPassword", string>) => {
    const admin = await prisma.user.findFirst({
      select: { password: true, id: true },
    });
    if (admin && password === admin?.password) {
      await prisma.user.update({
        where: { id: admin.id },
        data: { password: newPassword },
      });
      await log(ENUM_COMMON.LOG.PASSWORD, "200");
      return true;
    } else {
      await log(ENUM_COMMON.LOG.PASSWORD, "400");
      return Promise.reject("400");
    }
  },
);
