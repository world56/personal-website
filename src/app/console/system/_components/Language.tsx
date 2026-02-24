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
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";
import { z } from "zod";
import { toast } from "sonner";
import Card from "@/components/Card";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { getLanguage, updateLanguage } from "@/actions/settings";

import { ENUM_COMMON } from "@/enum/common";

const Language = () => {
  const t = useTranslations("language");

  const schema = z.object({ language: z.string().min(1) });

  const { data, isFetching } = useQuery({
    queryFn: getLanguage,
    queryKey: ["language"],
    placeholderData: "",
    // initialData: () => "",
  });

  const form = useForm<z.infer<typeof schema>>({
    mode: "onSubmit",
    values: { language: data! },
    resolver: zodResolver(schema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: updateLanguage,
    onSuccess() {
      toast.success(t("success"));
      setTimeout(() => location.reload(), 1000);
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((e) => mutate(e))} className="mt-3">
        <Card
          gap={4}
          title={t("title")}
          description={t("description")}
          loading={isFetching || isPending}
        >
          <FormField
            name="language"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder={t("select")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={ENUM_COMMON.LANG.ZH_HANS}>
                        简体中文
                      </SelectItem>
                      <SelectItem value={ENUM_COMMON.LANG.ZH_HANT}>
                        繁體中文
                      </SelectItem>
                      <SelectItem value={ENUM_COMMON.LANG.EN}>
                        English
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
                <FormDescription>{t("desc")}</FormDescription>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-max">
            {t("submit")}
          </Button>
        </Card>
      </form>
    </Form>
  );
};

export default Language;
