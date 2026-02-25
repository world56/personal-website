import { ENUM_COMMON } from "@/enum/common";

import type { Cacheable } from "cacheable";
import type { EditorManager } from "tinymce";
import type { PrismaClient } from "generated/prisma/client";
import type { Message, Post, Tag } from "model";

declare global {
  interface Window {
    tinymce?: EditorManager;
  }
  var prisma: PrismaClient;
  var cacheable: Cacheable & {
    incr(params: {
      ttl?: string;
      maximum?: number;
      key: string | null | undefined;
    }): Promise<number | false>;
    decr(key: string): Promise<void>;
  };
  var DBlocal: {
    FOLDER_PATH: string;
    set(data: object): Record<string, string>;
    get(): Omit<TypeCommon.ProfileDTO, "items" | "skills"> & {
      language: string;
    };
    remove(path: string): boolean;
    language(): string;
  };
}

export namespace TypeCommon {
  /**
   * @name TypePrimaryID 主键
   */
  export interface PrimaryID {
    id?: string | number;
  }

  export interface Sign extends Record<"account" | "password", string> {}

  /**
   * @name PageTurning 翻页参数
   * @param current 当前页码
   * @param pageSize 每页数量
   */
  export type PageTurning = Record<"current" | "pageSize", number>;

  /**
   * @name Response 返回列表
   */
  export interface Response<T> extends PageTurning {
    list: T[];
    /** @param total 总数量 */
    readonly total: number;
  }

  /**
   * @name Basis 网站、个人基本信息
   * @param title 网站标题
   * @param favicon 网站图标
   * @param icon 您的头像
   * @param name 您的姓名
   * @param position 您的岗位
   * @param profile 个人简介
   */
  export interface ProfileDTO extends Record<
    | "icon"
    | "name"
    | "title"
    | "profile"
    | "favicon"
    | "position"
    | "description",
    string
  > {
    /** @param forTheRecord 网站备案号 */
    forTheRecord?: string;
    /**
     * @param items 用户联系面板
     * @description 固定五个
     */
    items: Tag[];
    /** @param skills 个人技能 */
    skills: Tag[];
  }

  /**
   * @name QueryPosts 查询 “文本” 列表
   */
  export interface QueryPosts
    extends PageTurning, Partial<Pick<Post, "title" | "status">> {
    type: ENUM_COMMON.POST_TYPE;
  }

  /**
   * @name UpdatePost 编辑 “文本”
   */
  export interface UpdatePost
    extends
      Partial<Pick<Post, "id">>,
      Pick<Post, "icon" | "title" | "type" | "content"> {
    footer?: string;
    description?: string;
  }

  /**
   * @name DeletePost 删除 “文本”
   */
  export interface DeletePost extends Pick<Post, "id" | "type"> {}

  /**
   * @name QueryMessages 查询 “消息” 列表
   */
  export interface QueryMessages
    extends PageTurning, Partial<Pick<Message, "read">> {
    /** @param startTime 开始时间 */
    startTime?: Date;
    /** @param endTime 结束时间 */
    endTime?: Date;
  }

  /**
   * @name ISR 按需渲染
   */
  export interface ISR {
    /**
     * @param path 路径
     */
    path: string;
    /**
     * @param 类型
     */
    type?: "layout" | "page";
    /**
     * @param key 内部验证
     */
    key: string;
  }

  /**
   * @name DeepPartial 嵌套对象也可以为选空
   */
  export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
      ? DeepPartial<U>[]
      : T[P] extends object
        ? DeepPartial<T[P]>
        : T[P];
  };

  /**
   * @name Valueof 取对象的value
   */
  export type ValueOf<T> = T[keyof T];
}
