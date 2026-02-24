import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import getClientI18n from "@/lib/language";

import type { ClassValue } from "clsx";

import type { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isVoid(value: any) {
  return ["", undefined, null, NaN].includes(value);
}

export function loadStylesheet(href: string, id: string) {
  if (id) {
    var exists = document.getElementById(id);
    exists && exists.remove();
  }
  var link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;
  link.media = "all";
  link.onerror = () => console.error(`Failed to load stylesheet: ${href}`);
  document.head.appendChild(link);
}

export function keepAliveSignin() {
  const [, prefix] = location.pathname.split("/");
  if (prefix === "console") {
    window.open("/signin?K=1", "", `width=500,height=500,top=300,left=200`);
  }
}

export function getClientIP(h: Headers | ReadonlyHeaders) {
  const ip =
    h.get("cf-connecting-ip") ||
    h.get("x-real-ip") ||
    h.get("x-forwarded-for")?.split?.(",")?.[0] ||
    "UNKNOWN";
  return ip.trim();
}

export async function promptError(error: unknown) {
  if (error instanceof Error && error.message) {
    const t = await getClientI18n();
    const { toast } = await import("sonner");
    switch (parseInt(error.message)) {
      case 429:
        return toast.warning(t("hint.req429"));
      case 401:
        keepAliveSignin();
        return toast.warning(t("hint.req401"));
      default:
        return toast.error(t("hint.reqError"));
    }
  }
}
