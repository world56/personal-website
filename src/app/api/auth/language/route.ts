import { DBlocal } from "@/lib/db";
import { pageRevalidate } from "../..";
import { NextResponse } from "next/server";
import { checkLanguage } from "@/lib/language";

import type { NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json(DBlocal.language());
}

/**
 * @see https://github.com/vercel/next.js/issues/66647
 */
export async function POST() {
  return NextResponse.json(true);
}

export async function PUT(request: NextRequest) {
  const { language } = await request.json();
  if (checkLanguage(language)) {
    DBlocal.set({ language });
    await pageRevalidate({
      path: "/",
      type: "layout",
      key: process.env.SECRET!,
    });
    return NextResponse.json(true);
  } else {
    return NextResponse.json(false, { status: 400 });
  }
}
