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
import { useProfile } from "@/hooks";
import Card from "@/components/Card";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import LoadButton from "@/components/LoadButton";
import UploadImage from "@/components/Upload/Image";
import { zodResolver } from "@hookform/resolvers/zod";

const Website = () => {
  const t = useTranslations();

  const schema = z.object({
    title: z.string().min(2, { message: t("basic.siteTitle") }),
    favicon: z.string(),
    description: z.string(),
    forTheRecord: z.string(),
  });

  const { data, loading, syncing, onUpdate } = useProfile();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    values: data as z.infer<typeof schema>,
    defaultValues: {
      title: "",
      favicon: "",
      description: "",
      forTheRecord: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((e) => onUpdate(e))}>
        <Card
          className="mb-3"
          loading={loading}
          title={t("website.title")}
          description={t("website.description")}
        >
          <FormField
            name="favicon"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("website.icon")}</FormLabel>
                <FormControl>
                  <UploadImage {...field} noSvgDark />
                </FormControl>
                <FormMessage />
                <FormDescription>{t("website.iconDesc")}</FormDescription>
              </FormItem>
            )}
          />

          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("website.siteTitle")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("website.siteTitlePh")} />
                </FormControl>
                <FormMessage />
                <FormDescription>{t("website.siteTitleDesc")}</FormDescription>
              </FormItem>
            )}
          />

          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("website.desc")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("website.descPlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>{t("website.descDesc")}</FormDescription>
              </FormItem>
            )}
          />

          <FormField
            name="forTheRecord"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("website.recorded")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("website.recordedPh")} />
                </FormControl>
                <FormMessage />
                <FormDescription>{t("website.recordedDesc")}</FormDescription>
              </FormItem>
            )}
          />
        </Card>
        <LoadButton
          type="submit"
          loading={loading || syncing}
          className="block m-auto mt-5"
        >
          {t("common.submit")}
        </LoadButton>
      </form>
    </Form>
  );
};

export default Website;
