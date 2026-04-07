import { DateTime } from "luxon";

/**
 * @name dateToTime 转换时间（自动适配用户的本地时区和语言）
 * @description 客户端方法
 */
export function dateToTime(isoDateString?: string | Date) {
  if (!isoDateString) return "-";
  const date = new Date(isoDateString);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const userLocale = navigator.language || "zh-CN";
  return date.toLocaleString(userLocale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: userTimeZone,
  });
}

/**
 * @name getUTCTime 根据UTC获取时间
 */
export function getUTCTime(timeZone: string) {
  const date = DateTime.now().setZone(timeZone);
  return {
    date,
    KEY_COUNT: `visit_count`,
    KEY_TODAY: `visit_${date.day}`,
    KEY_MONTH: `visit_${date.month}`,
  };
}
