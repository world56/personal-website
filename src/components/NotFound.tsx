"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ApiOutlined } from "@ant-design/icons";

const NotFound = () => {
  const t = useTranslations("hint");
  return (
    <div className="w-full md:h-118 h-90 flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
        <ApiOutlined className="text-5xl" />
        <p className="font-normal md:my-8 my-5 text-gray-500">{t("notFound")}</p>
        <Link className="underline" href="/">
          {t("notFoundGoBack")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
