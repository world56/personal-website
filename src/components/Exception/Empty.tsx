"use client";

import { useTranslations } from "next-intl";
import { CoffeeOutlined } from "@ant-design/icons";

interface TypeEmpty {}

const Empty: React.FC<TypeEmpty> = () => {
  const t = useTranslations("common");
  return (
    <div className="w-full md:h-130 min-h-90 flex justify-center flex-col items-center select-none">
      <CoffeeOutlined className="text-3xl" />
      <p className="mt-2">{t("empty")}</p>
    </div>
  );
};

export default Empty;
