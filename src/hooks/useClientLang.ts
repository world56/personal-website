import { useEffect, useState } from "react";
import { getHtmlLanguage } from "@/lib/language";

import { ENUM_COMMON } from "@/enum/common";

/**
 * @name useClientLang 当前客户端的语言类型
 */
export default function useClientLang() {
  const [lang, setLang] = useState<ENUM_COMMON.LANG>();

  useEffect(() => {
    setLang(getHtmlLanguage());
  }, []);

  return lang;
}
