import { toast } from "sonner";
import { filesize } from "filesize";
import getClientI18n from "@/lib/language";

import { ENUM_COMMON } from "@/enum/common";
import { UPLOAD_MAX_SIZE } from "@/config/common";

import { TypeCommon } from "@/interface/common";

/**
 * @name getFileType 获取资源类型
 */
export function getFileType(fileName: string) {
  const suffix = fileName.split(".")?.pop()?.toLocaleUpperCase()!;
  if (["SVG", "JPG", "JPEG", "PNG", "WEBP"].includes(suffix)) {
    return ENUM_COMMON.RESOURCE.IMAGE;
  } else if (["MP4"].includes(suffix)) {
    return ENUM_COMMON.RESOURCE.VIDEO;
  } else if (["MP3", "ACC", "M4A"].includes(suffix)) {
    return ENUM_COMMON.RESOURCE.AUDIO;
  } else {
    return ENUM_COMMON.RESOURCE.UNKNOWN;
  }
}

/**
 * @name verifyFile 校验文件格式
 * @param file 文件对象
 * @param type 校验文件类型
 */
function verifyFile(file: File) {
  if (file.size > UPLOAD_MAX_SIZE) {
    getClientI18n().then((t) => {
      toast.error(t("hint.fileLimit"), {
        description: t("hint.fileTooLarge", {
          fileName: file.name,
          maxSize: filesize(UPLOAD_MAX_SIZE, { base: 2 }),
        }),
      });
    });
    return false;
  } else {
    return true;
  }
}

/**
 * @name getUploadFiles 客户端创建一个上传任务
 * @description 用户拿到选择对应的文件列表，支持校验
 */
export function getUploadFiles(
  /**
   * @param accept 文件格式
   * @description .svg, .jpg, .jpeg, .png, .ico, .webp
   */
  accept: string,
  /**
   * @param multiple 是否上传多个
   */
  multiple?: boolean,
) {
  return new Promise<FormData[]>((resolve, reject) => {
    const btn = document.createElement("input");
    btn.setAttribute("type", "file");
    multiple && btn.setAttribute("multiple", "true");
    accept && btn.setAttribute("accept", accept);
    btn.click();
    btn.onchange = async (e) => {
      try {
        const { files } = e.target as HTMLInputElement;
        const chunks: FormData[] = [];
        Array.prototype.forEach.call(files, async (file: File) => {
          if (verifyFile(file)) {
            const body = new FormData();
            body.append("file", file);
            chunks.push(body);
          }
        });
        return chunks.length ? resolve(chunks) : reject();
      } catch (error) {
        reject(error);
      }
    };
  });
}

/**
 * @name upload 上传资源
 */
export async function upload(body: FormData) {
  const res = await fetch(`/api/auth/upload`, { body, method: "POST" });
  const data = await res.json();
  return data?.path ? (data as TypeCommon.FileDTO) : Promise.reject();
}
