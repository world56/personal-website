"use client";

import { useTranslations } from "next-intl";
import { MehOutlined } from "@ant-design/icons";

interface TypeError {}

const Error: React.FC<TypeError> = () => {
  const t = useTranslations("hint");
  return (
    <div className="w-full md:h-130 min-h-90 flex justify-center flex-col items-center select-none">
      <MehOutlined className="text-3xl mb-2" />
      <p className="mt-2">{t("error")}</p>
    </div>
  );
};

export default Error;
