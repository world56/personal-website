import { jwtVerify } from "jose";
import { writeLog } from "./lib/auth";
import { getClientIP } from "./lib/utils";
import { NextResponse } from "next/server";

import { ENUM_COMMON } from "@/enum/common";
import { TOKEN_NAME } from "./config/common";

import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/console/:path*", "/api/auth/:path*", "/lib/welcome"],
};

/**
 * @name proxy page 场景
 */
export async function proxy(request: NextRequest) {
  const {
    url,
    method,
    headers,
    cookies,
    nextUrl: { pathname },
  } = request;
  if (method === "POST" && headers.get("next-action")) {
    return NextResponse.next();
  }
  const key = process.env.SECRET;
  const ip = getClientIP(headers);
  if (pathname === "/lib/welcome") {
    writeLog({ key, ip, type: ENUM_COMMON.LOG.ACCESS });
    return NextResponse.next();
  }
  try {
    const token = cookies.get(TOKEN_NAME)?.value;
    if (!token) {
      writeLog({ ip, desc: pathname });
      throw new Error("No token");
    }
    await jwtVerify(token, new TextEncoder().encode(key));
    return NextResponse.next();
  } catch (e) {
    const redirect = NextResponse.redirect(new URL("/", url));
    redirect.cookies.delete(TOKEN_NAME);
    return redirect;
  }
}
