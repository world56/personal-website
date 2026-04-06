"use client";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { promptError } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import Container from "@/components/Container";
import LoadButton from "@/components/LoadButton";
import { SendOutlined } from "@ant-design/icons";
import { insertMessage } from "@/actions/message";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import { REG_RULES } from "@/config/rules";

function Contact() {
  const t = useTranslations("message");

  const [load, setLoad] = useState(false);

  const schema = z.object({
    name: z
      .string({ message: t("formNameNotEmpty") })
      .min(2, { message: t("formNameTooShort") })
      .max(20, { message: t("formNameTooLong") }),
    telephone: z.string().refine((v) => !v || REG_RULES.PHONE_NUMBER.test(v), {
      message: t("formPhone"),
    }),
    email: z
      .email({ message: t("formEmail") })
      .or(z.literal(""))
      .optional(),
    content: z
      .string({ message: t("formMessage") })
      .min(5, { message: t("formMessageTooShort") })
      .max(500, { message: t("formMessageTooLong") }),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", telephone: "", content: "" },
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      setLoad(true);
      await insertMessage(values);
      form.reset();
      toast.message(t("submitSuccessTitle"), {
        description: t("submitSuccessContent"),
      });
      setLoad(false);
    } catch (e) {
      promptError(e);
      setLoad(false);
    }
  }

  return (
    <Container>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("name")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("namePlaceholder")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="telephone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("phone")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("phonePlaceholder")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("emailPlaceholder")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="content"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("message")}</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder={t("messagePlaceholder")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadButton loading={load} icon={SendOutlined} type="submit">
            {t("submit")}
          </LoadButton>
        </form>
      </Form>
    </Container>
  );
}

export default Contact;
