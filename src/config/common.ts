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
