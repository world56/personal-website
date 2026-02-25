import {
  useParams,
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import useDebounceValue from "./useDebounceValue";
import { getClientPosts, getPosts } from "@/actions/post";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { POST_TYPE } from "@/config/common";

import { ENUM_COMMON } from "@/enum/common";

/**
 * @name usePosts 帖子列表
 */
export default function usePosts(defaultStatus?: ENUM_COMMON.STATUS) {
  const t = useTranslations("menu");

  const params = useParams<{ type: keyof typeof POST_TYPE }>();

  const postType = POST_TYPE[params!.type];

  const postTitle = {
    life: t("life"),
    notes: t("notes"),
    projects: t("projects"),
  }[params!.type];

  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  const queryClient = useQueryClient();

  const IS_CONSOLE = pathname?.includes("/console");

  const [query, setQuery] = useState({
    type: postType,
    pageSize: IS_CONSOLE ? 15 : 9,
    current: Number(search?.get("current")) || 1,
    status: IS_CONSOLE ? getDefaultStatus() : defaultStatus,
    title: IS_CONSOLE ? search?.get("title") || undefined : undefined,
  });

  const deferredQuery = useDebounceValue(query, IS_CONSOLE ? 200 : 0);
  const { type, status, title, current, pageSize } = deferredQuery;

  const { data, isFetching } = useQuery({
    placeholderData: (p) => p,
    queryKey: ["posts", type, status, title, current, pageSize],
    queryFn: () => (IS_CONSOLE ? getPosts(query) : getClientPosts(query)),
  });

  function getDefaultStatus() {
    const status = search?.get("status");
    return ["0", "1"].includes(status!) ? Number(status) : undefined;
  }

  function onRefresh() {
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  }

  useEffect(() => {
    const { title, current, status } = query;
    const search = new URLSearchParams(location.search);
    title ? search.set("title", title) : search.delete("title");
    current && search.set("current", String(current));
    if (IS_CONSOLE) {
      typeof status === "number"
        ? search.set("status", String(status))
        : search.delete("status");
    }
    router.replace(`${pathname}?${search.toString()}`);
  }, [deferredQuery]);

  useEffect(() => {
    const total = data?.total;
    if (
      total !== undefined &&
      current > 1 &&
      current > Math.ceil(total / pageSize)
    ) {
      setQuery((v) => ({ ...v, current: 1 }));
    }
  }, [data, current, pageSize]);

  return {
    data,
    query,
    setQuery,
    onRefresh,
    title: postTitle,
    path: params!.type,
    loading: isFetching,
  };
}
