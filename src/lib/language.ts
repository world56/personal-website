import { createTranslator } from "next-intl";
import { zhCN, zhTW } from "date-fns/locale";

import { ENUM_COMMON } from "@/enum/common";

export function checkLanguage(language: any) {
  return Object.values(ENUM_COMMON.LANG).includes(language);
}

export function getHtmlLanguage() {
  return document?.getElementsByTagName("html")[0].lang as ENUM_COMMON.LANG;
}

export default async function getClientI18n() {
  let locale = getHtmlLanguage();
  const messages = await import(`../../language/${locale}.json`);
  return createTranslator({ locale, messages: messages.default });
}

export function getTinymceLanguage() {
  const language = getHtmlLanguage();
  switch (language) {
    case ENUM_COMMON.LANG.ZH_HANS:
      return { language: "zh_CN", language_url: "/lib/tinymce/langs/zh_CN.js" };
    case ENUM_COMMON.LANG.ZH_HANT:
      return { language: "zh_TW", language_url: "/lib/tinymce/langs/zh_TW.js" };
    default:
      return {};
  }
}

export function getTimeLanguage() {
  const language = getHtmlLanguage();
  switch (language) {
    case ENUM_COMMON.LANG.ZH_HANS:
      return zhCN;
    case ENUM_COMMON.LANG.ZH_HANT:
      return zhTW;
    default:
      return;
  }
}
