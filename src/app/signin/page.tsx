"use client";

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import md5 from "md5";
import { z } from "zod";
import { useState } from "react";
import { promptError } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoadButton from "@/components/LoadButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { hasAdmin, register, signin } from "@/actions/auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const schema = z.object({
  account: z.string().regex(/^[a-zA-Z0-9_]{5,12}$/, {
    message:
      "Supports 5 to 12 characters, including numbers, letters, and underscores.",
  }),
  password: z.string().regex(/^[a-zA-Z0-9_]{5,12}$/, {
    message:
      "Supports 5 to 12 characters, including numbers, letters, and underscores.",
  }),
});

const SignIn = () => {
  const router = useRouter();
  const t = useTranslations("signin");
  const queryClient = useQueryClient();

  const [loading, setLoading] = useState(false);

  const { data, refetch, isLoading } = useQuery({
    queryFn: hasAdmin,
    queryKey: ["hasAdmin"],
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { account: "", password: "" },
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      setLoading(true);
      queryClient.removeQueries({ queryKey: ["hasAdmin"] });
      const exist = await refetch();
      values.password = md5(values.password);
      !exist.data && (await register(values));
      await signin(values);
      const HAS_K = new URLSearchParams(window.location.search)?.get("K");
      HAS_K === "1" ? window.close() : router.push("/console");
      setLoading(false);
    } catch (error) {
      promptError(error);
      setLoading(false);
    }
  }

  function toMainPage(e: React.MouseEvent<HTMLButtonElement>) {
    router.push("/");
  }

  return (
    <Card className="fixed w-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <CardHeader className="pt-4 pb-1 select-none">
        <h1 className="text-4xl font-bold text-center">Welcome</h1>
        <p className="mt-2 text-sm text-gray-400 text-center">
          {data === false ? t("init") : t("login")}
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              name="account"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("account")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder={t("password")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <LoadButton
                type="submit"
                className="w-full"
                loading={loading || isLoading}
              >
                {loading || isLoading
                  ? t("loading")
                  : data
                    ? t("signin")
                    : t("register")}
              </LoadButton>

              <Button
                type="button"
                variant="outline"
                onClick={toMainPage}
                className="w-full mt-5"
              >
                {t("back")}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignIn;
