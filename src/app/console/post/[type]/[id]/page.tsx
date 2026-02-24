"use client";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { z } from "zod";
import { toast } from "sonner";
import Card from "@/components/Card";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import Upload from "@/components/Upload/Image";
import TxtEditor from "@/components/TextEditor";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadButton";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { getPost, insertPost, updatePost } from "@/actions/post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { POST_TYPE } from "@/config/common";

const Edit = () => {
  const t = useTranslations();

  const schema = z.object({
    icon: z.string().min(1, { message: t("postEdit.formIcon") }),
    title: z.string().min(2, { message: t("postEdit.formTitle") }),
    footer: z.string().max(50, { message: t("postEdit.formFooter") }),
    content: z.string().min(1, { message: t("postEdit.formContent") }),
    description: z.string().max(100, { message: t("postEdit.formDesc") }),
  });

  const query = useQueryClient();

  const router = useRouter();
  const params = useParams<Record<"id" | "type", string>>();

  const id = params?.id === "-1" ? undefined : Number(params?.id);
  const type = POST_TYPE[params?.type! as keyof typeof POST_TYPE];

  const { data, isLoading } = useQuery({
    enabled: Boolean(id),
    queryKey: ["post-edit", id],
    queryFn: () => getPost({ id: id! }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (v: z.infer<typeof schema>) =>
      id ? updatePost({ ...v, id, type }) : insertPost({ ...v, type }),
    onSuccess: () => {
      toast.success(t("common.saveSuccess"));
      query.invalidateQueries({ queryKey: ["posts", type] });
      query.invalidateQueries({ queryKey: ["post-post", id] });
      onBack();
    },
  });

  const form = useForm({
    mode: "onSubmit",
    resolver: zodResolver(schema),
    values: data as z.infer<typeof schema>,
    defaultValues: {
      icon: "",
      title: "",
      description: "",
      footer: t("postEdit.footerDefContent"),
    },
  });

  function onBack() {
    router.back();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((e) => mutate(e))}>
        <Card
          onBack={onBack}
          className="mb-3.5"
          loading={isLoading}
          title={t("postEdit.basicInfo")}
        >
          <FormField
            name="icon"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("postEdit.cover")}</FormLabel>
                <FormControl>
                  <Upload radius={false} {...field} size="large" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("postEdit.title")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("postEdit.titlePh")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("postEdit.abstract")}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t("postEdit.abstractPh")} {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>{t("postEdit.abstractDesc")}</FormDescription>
              </FormItem>
            )}
          />

          <FormField
            name="footer"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("postEdit.footer")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("postEdit.footerPh")} {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>{t("postEdit.footerDesc")}</FormDescription>
              </FormItem>
            )}
          />
        </Card>

        <Card title={t("postEdit.textContent")}>
          <FormField
            name="content"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TxtEditor {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Card>

        <div className="text-center">
          <LoadingButton loading={isLoading || isPending} type="submit">
            {t("common.submit")}
          </LoadingButton>
          <Button
            type="button"
            onClick={onBack}
            variant="outline"
            className="ml-5 my-5 dark:bg-black cursor-pointer bg-white"
          >
            {t("common.back")}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Edit;
