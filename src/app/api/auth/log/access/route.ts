import { getMonth } from "date-fns";
import { NextResponse } from "next/server";
import { prisma, cacheable } from "@/lib/db";

import { ENUM_COMMON } from "@/enum/common";

export async function DELETE() {
  await prisma.log.deleteMany({ where: { type: ENUM_COMMON.LOG.ACCESS } });
  const date = new Date();
  await Promise.all([
    cacheable.set("visit_count", 0),
    cacheable.set(`visit_${date.getDate()}`, 0),
    cacheable.set(`visit_${getMonth(date)}`, 0),
  ]);
  return NextResponse.json(true);
}
