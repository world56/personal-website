import { ENUM_COMMON } from "@/enum/common";

export const POST_TYPE = {
  life: ENUM_COMMON.POST_TYPE.LIFE,
  notes: ENUM_COMMON.POST_TYPE.NOTE,
  projects: ENUM_COMMON.POST_TYPE.PROJECT,
};

export const POST_PATH = {
  [ENUM_COMMON.POST_TYPE.LIFE]: "life",
  [ENUM_COMMON.POST_TYPE.NOTE]: "notes",
  [ENUM_COMMON.POST_TYPE.PROJECT]: "projects",
};

export const TOKEN_NAME = "Authorization";

export const KEY_TIME_ZONE = "time-zone";

export const BASE_URL = `http://127.0.0.1:${process.env.PORT || 3000}`;

export const UPLOAD_MAX_SIZE = 20 * 1024 * 1024;

export const API_RESOURCE = `${typeof window ? "" : BASE_URL}/api/resource/`;
