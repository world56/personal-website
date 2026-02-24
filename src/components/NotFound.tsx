"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ApiOutlined } from "@ant-design/icons";

const NotFound = () => {
  const t = useTranslations("hint");
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-10 select-none">
      <div className="flex flex-col items-center justify-center p-10">
        <ApiOutlined className="text-5xl" />
        <p className="font-normal my-8 mb-4 text-gray-500">{t("notFound")}</p>
        <Link className="underline" href="/">
          {t("notFoundGoBack")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
