import Link from "next/link";
import Image from "next/image";
import Tooltip from "@/components/Tooltip";
import Container from "@/components/Container";
import { getTranslations } from "next-intl/server";
import { getPersonInfo } from "@/components/Personal";

import { ENUM_COMMON } from "@/enum/common";
import { API_RESOURCE } from "@/config/common";

const Page = async () => {
  const t = await getTranslations("main");

  const { local, items } = await getPersonInfo(ENUM_COMMON.TAG.SKILL);

  return (
    <Container>
      <div
        className="mce-content-body about-me"
        dangerouslySetInnerHTML={
          local.profile ? { __html: local.profile } : undefined
        }
      />
      {items?.length ? (
        <>
          <h2 className="title">{t("skill")}</h2>
          <div className="md:pb-0 md:flex-wrap md:overflow-auto flex gap-7 pb-4 overflow-x-auto flex-nowrap">
            {items.map((v) => (
              <Tooltip
                className="shrink-0"
                key={v.name}
                title={
                  <div className="max-w-56 text-sm">
                    {v.name ? <p className="font-bold mb-1">{v.name}</p> : null}
                    {v.description ? (
                      <p className="mb-1">{v.description}</p>
                    ) : null}
                  </div>
                }
              >
                {v.url ? (
                  <Link target="_blank" href={v.url}>
                    <Image
                      alt="#"
                      width={60}
                      height={50}
                      draggable="false"
                      src={`${API_RESOURCE}${v.icon}`}
                      className="cursor-pointer icon h-12.5 w-auto"
                    />
                  </Link>
                ) : (
                  <Image
                    alt="#"
                    width={60}
                    height={50}
                    draggable="false"
                    src={`${API_RESOURCE}${v.icon}`}
                    className="cursor-default icon h-12.5 w-auto"
                  />
                )}
              </Tooltip>
            ))}
          </div>
        </>
      ) : null}
    </Container>
  );
};

export default Page;
