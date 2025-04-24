import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { _pageRevalidate } from "@/app/api";

import { POST_PATH } from "@/config/common";

import type { Post } from "@prisma/client";
import type { NextRequest } from "next/server";

interface TypeParams {
  params: Pick<Post, "id">;
}

async function clearCache(type: Post["type"], id: Post["id"]) {
  const path = `/main/post/${POST_PATH[type as keyof typeof POST_PATH]}/${id}`;
  return await _pageRevalidate({ path, key: process.env.SECRET! });
}

export async function PUT(request: NextRequest, params: TypeParams) {
  const id = Number(params.params.id);
  const { status } = await request.json();
  const { type } = await prisma.post.update({
    where: { id },
    data: { status },
  });
  await clearCache(type, id);
  return NextResponse.json(true);
}
