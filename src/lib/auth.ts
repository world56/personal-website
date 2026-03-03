import { jwtVerify } from "jose";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { getClientIP, isVoid } from "@/lib/utils";

import { ENUM_COMMON } from "@/enum/common";
import { BASE_URL, TOKEN_NAME } from "@/config/common";

/**
 * @name authAction 针对 action 鉴权
 */
export function authAction<P extends unknown[], R>(
  fn: (...args: P) => Promise<R>,
) {
  return async (...args: P): Promise<R> => {
    const cookie = await cookies();
    const token = cookie.get("Authorization")?.value;
    if (!token) {
      await log(ENUM_COMMON.LOG.UNAUTHORIZED, "403");
      cookie.delete(TOKEN_NAME);
      return redirect("/");
    }
    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.SECRET));
    } catch (error) {
      return Promise.reject(401);
    }
    return await fn(...args);
  };
}

async function log(type: ENUM_COMMON.LOG, description?: string) {
  const header = await headers();
  const ip = getClientIP(header);
  return prisma.log.create({ data: { ip, type, description } });
}

export async function writelog(params: object) {
  let query = new URLSearchParams(
    Object.fromEntries(Object.entries(params).filter(([_k, v]) => !isVoid(v))),
  ).toString();
  await fetch(`${BASE_URL}/api/access?${query}`);
}
