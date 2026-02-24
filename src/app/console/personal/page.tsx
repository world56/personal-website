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
import Card from "@/components/Card";
import { useProfile } from "@/hooks";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import TextEditor from "@/components/TextEditor";
import LoadButton from "@/components/LoadButton";
import UploadImage from "@/components/Upload/Image";
import TableEdit from "@/components/Table/TableEdit";
import { zodResolver } from "@hookform/resolvers/zod";

const Personal = () => {
  const t = useTranslations();

  const { data, loading, syncing, onUpdate } = useProfile();

  const tagSchema = z.array(
    z.object({
      id: z.string().optional(),
      type: z.number().optional(),
      index: z.number().optional(),
      icon: z.string().min(1, { message: t("basic.icon") }),
      name: z.string().min(1, { message: t("basic.name") }),
      description: z.string().min(1, { message: t("basic.description") }),
      url: z.string().refine((v) => !v || /^(https?:\/\/)/i.test(v), {
        message: t("basic.url"),
      }),
    }),
  );

  const schema = z.object({
    icon: z.string(),
    name: z.string().min(2, { message: t("basic.fullName") }),
    position: z.string().min(2, { message: t("basic.position") }),
    profile: z.string(),
    items: tagSchema,
    skills: tagSchema,
  });

  const form = useForm<z.infer<typeof schema>>({
    values: data,
    resolver: zodResolver(schema),
    defaultValues: {
      icon: "",
      name: "",
      items: [],
      skills: [],
      profile: "",
      position: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((e) => onUpdate(e))}>
        <Card
          className="mb-3"
          loading={loading}
          title={t("personal.title")}
          description={t("personal.description")}
        >
          <FormField
            name="icon"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("personal.avatar")}</FormLabel>
                <FormControl>
                  <UploadImage {...field} size="large" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("personal.name")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("personal.namePh")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="position"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("personal.position")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("personal.positionPh")} />
                </FormControl>
                <FormMessage />
                <FormDescription>{t("personal.positionDesc")}</FormDescription>
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>{t("personal.tag")}</FormLabel>
            <FormControl>
              <TableEdit name="items" />
            </FormControl>
          </FormItem>
        </Card>
        <Card
          className="mb-3"
          loading={loading}
          title={t("intro.title")}
          description={t("intro.description")}
        >
          <FormField
            name="profile"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TextEditor {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Card>
        <Card
          loading={loading}
          title={t("skill.title")}
          description={t("skill.description")}
        >
          <FormItem>
            <FormControl>
              <TableEdit name="skills" />
            </FormControl>
          </FormItem>
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

export default Personal;
