import { NextResponse } from "next/server";
import { prisma, cacheable } from "@/lib/db";

import { KEY_TIME_ZONE } from "@/config/common";

import { ENUM_COMMON } from "@/enum/common";

export async function DELETE() {
  await prisma.log.deleteMany({ where: { type: ENUM_COMMON.LOG.ACCESS } });
  cacheable.delete(KEY_TIME_ZONE);
  return NextResponse.json(true);
}
