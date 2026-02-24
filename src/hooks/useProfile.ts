import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { getProfile, updateProfile } from "@/actions/settings";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { API_RESOURCE } from "@/config/common";

/**
 * @name useProfile 编辑 个人、站点信息
 */
export default function useProfile() {
  const t = useTranslations();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const profile = await getProfile();
      if (profile.title) {
        document.title = profile.title;
      }
      if (profile.favicon) {
        let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
        if (!link) {
          link = document.createElement("link");
          link.rel = "icon";
          document.getElementsByTagName("head")[0].appendChild(link);
        }
        link.href = `${API_RESOURCE}${profile.favicon}`;
      }
      return profile;
    },
    queryKey: ["profile"],
    refetchOnWindowFocus: false,
  });

  const { isPending, mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success(t("common.saveSuccess"), {
        description: t("common.saveSuccessContent"),
      });
    },
  });

  return {
    data,
    onUpdate: mutate,
    syncing: isPending,
    loading: isLoading,
  };
}
