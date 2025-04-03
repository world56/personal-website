"use client";

import Link from "next/link";
import Card from "@/components/Card";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const About = () => {
  const t = useTranslations("about");

  return (
    <Card className="mt-3" title={t("title")} description={t("description")}>
      <Button type="submit">
        <Link
          target="_blank"
          href="https://github.com/world56/personal-website"
        >
          {t("button")}
        </Link>
      </Button>
    </Card>
  );
};

export default About;
