import { NextResponse } from "next/server";
import { prisma, cacheable } from "@/lib/db";

import { ENUM_COMMON } from "@/enum/common";

export async function DELETE() {
  await prisma.log.deleteMany({ where: { type: ENUM_COMMON.LOG.ACCESS } });
  cacheable.delete("time-zone");
  return NextResponse.json(true);
}
