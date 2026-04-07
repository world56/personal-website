"use server";

import * as jose from "jose";
import { authAction } from "@/lib/auth";
import { getClientIP } from "@/lib/utils";
import { redirect } from "next/navigation";
import { prisma, cacheable } from "@/lib/db";
import { cookies, headers } from "next/headers";

import { ENUM_COMMON } from "@/enum/common";
import { TOKEN_NAME } from "@/config/common";
import { RedirectType } from "next/navigation";

import type { User } from "model";

/**
 * @name hasAdmin 检查是否存在管理员
 */
export async function hasAdmin() {
  const admin = await prisma.user.findFirst({
    select: { id: true },
    where: { type: ENUM_COMMON.USER_TYPE.ADMIN },
  });
  return Boolean(admin);
}

/**
 * @name register 注册管理员
 * @description 仅在系统初始化时使用
 */
export async function register(data: Pick<User, "account" | "password">) {
  const admin = await prisma.user.findFirst({
    where: { type: ENUM_COMMON.USER_TYPE.ADMIN },
  });
  if (admin) return Promise.reject(409);
  await prisma.user.create({
    data: { ...data, type: ENUM_COMMON.USER_TYPE.ADMIN },
  });
  return true;
}

/**
 * @name signin 用户登录
 */
export async function signin(data: Pick<User, "account" | "password">) {
  const header = await headers();
  const ip = getClientIP(header);
  const bol = await cacheable.incr({
    maximum: 3,
    ttl: "10m",
    key: `signin_${ip}`,
  });
  if (!bol) return Promise.reject(429);
  const admin = await prisma.user.findFirst({
    where: { ...data, type: ENUM_COMMON.USER_TYPE.ADMIN },
  });
  if (admin) {
    const token = await new jose.SignJWT({
      id: admin.id,
      account: admin.account,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(new TextEncoder().encode(process.env.SECRET));
    const [cookie] = await Promise.all([
      cookies(),
      cacheable.delete(`signin_${ip}`),
      prisma.log.create({
        data: { ip, type: ENUM_COMMON.LOG.LOGIN, description: "200" },
      }),
    ]);
    cookie.set(TOKEN_NAME, token, {
      path: "/",
      maxAge: 86400,
      httpOnly: true,
      sameSite: "lax",
    });
    return true;
  }
  await prisma.log.create({
    data: { ip, type: ENUM_COMMON.LOG.LOGIN, description: "401" },
  });
  return Promise.reject("User authentication failed");
}

/**
 * @name AdministratorLogout 管理员退出登录
 */
export const AdministratorLogout = authAction(async () => {
  const cookie = await cookies();
  cookie.delete(TOKEN_NAME);
  return redirect("/", RedirectType.replace);
});
