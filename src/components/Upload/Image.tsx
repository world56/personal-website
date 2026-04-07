import { toast } from "sonner";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, forwardRef } from "react";
import { getUploadFiles, upload } from "@/lib/file";
import { useQueryClient } from "@tanstack/react-query";
import { CameraFilled, LoadingOutlined } from "@ant-design/icons";

import { API_RESOURCE } from "@/config/common";

import type { ForwardRefRenderFunction } from "react";

type TypeUploadImageRefProps<T = string> = ForwardRefRenderFunction<
  HTMLDivElement,
  {
    radius?: boolean;
    size?: keyof typeof SIZE;
    readonly value?: T;
    onChange?(value?: T): void;
    className?: string;
    noSvgDark?: boolean;
  }
>;

const SIZE = {
  small: { IMG: `w-11 h-11`, NAME: undefined, SIZE: 80 },
  middle: { IMG: `w-20 h-20`, NAME: `text-xs`, SIZE: 108 },
  large: { IMG: `w-36 h-36`, NAME: `text-sm`, SIZE: 140 },
};

/**
 * @name UploadImage 上传图片
 */
const UploadImage: TypeUploadImageRefProps = (
  {
    value,
    onChange,
    noSvgDark,
    radius = true,
    className = "",
    size = "middle",
  },
  ref,
) => {
  const t = useTranslations();

  const queryClient = useQueryClient();

  const [load, setLoad] = useState(false);
  const [val, setVal] = useState<string>();

  async function onStart() {
    try {
      const [file] = await getUploadFiles(
        ".svg, .jpg, .jpeg, .png, .ico, .webp",
      );
      setLoad(true);
      const { path } = await upload(file);
      queryClient.invalidateQueries({ queryKey: ["resource"] });
      updateValue(path);
      setLoad(false);
    } catch (error) {
      toast.message(t("textEditor.uploadError"), {
        description: t("hint.error"),
      });
      setLoad(false);
    }
  }

  function updateValue(val?: string) {
    onChange ? onChange(val) : setVal(val);
  }

  const STYLE = SIZE[size];

  const RESOURCE_URL = value || val || "";

  const TO_WHITE = size === "small" ? "dark:dark-icon" : "";

  const BORDER_RADIUS = radius ? "rounded-full" : "rounded-md";

  const IS_SVG = noSvgDark
    ? false
    : RESOURCE_URL?.split(".")?.at?.(-1) === "svg";

  return (
    <div
      ref={ref}
      onClick={onStart}
      className={`
       dark:text-white dark:hover:border-white
         relative flex justify-center items-center flex-col ${STYLE.IMG} 
         cursor-pointer border border-dashed overflow-hidden select-none ${className}
       border-gray-400 text-gray-600 hover:border-black hover:text-black ${BORDER_RADIUS}
      `}
    >
      {RESOURCE_URL ? (
        <>
          <Image
            alt="#"
            priority
            width={STYLE.SIZE}
            height={STYLE.SIZE}
            src={`${API_RESOURCE}${RESOURCE_URL}`}
            className={`w-full h-full object-cover ${TO_WHITE} 
            ${radius ? "rounded-full" : "rounded-md"} ${IS_SVG ? "icon" : ""}`}
          />
          {load ? (
            <LoadingOutlined className="text-sm absolute text-black dark:text-white" />
          ) : (
            <CameraFilled className="text-sm absolute text-black dark:text-white" />
          )}
        </>
      ) : (
        <>
          {load ? <LoadingOutlined /> : <CameraFilled />}
          {STYLE?.NAME ? (
            <span className={`mt-1 ${STYLE.NAME}`}>
              {load ? t("common.upLoading") : t("common.lickUpload")}
            </span>
          ) : null}
        </>
      )}
    </div>
  );
};

export default forwardRef(UploadImage);
