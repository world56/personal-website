"use client";

import {
  UpOutlined,
  LockOutlined,
  UserOutlined,
  PictureOutlined,
  MessageOutlined,
  DesktopOutlined,
  CompassOutlined,
  PoweroffOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { AdministratorLogout } from "@/actions/auth";

const CLS_ITEM_DEF = `flex items-center w-full h-10 px-2 mt-1 mb-2 text-sm cursor-pointer rounded-xl leading-`;

const CLS_ITEM_SELECTED = "bg-black text-white dark:bg-white dark:text-black";

const CLS_ITEM_HOVER = `hover:bg-black/5 dark:hover:bg-white dark:hover:text-black`;

/**
 * @name ConsoleNavigation 导航-控制台
 */
const Console = () => {
  const router = useRouter();
  const path = usePathname()!;
  const t = useTranslations("menu");

  const [expand, setExpand] = useState(() =>
    path.split("/").slice(0, 3).join("/"),
  );

  function onChange(item: Partial<(typeof MENU)[number]>) {
    if (item.children?.length) {
      setExpand((v) => (v === item.path ? "" : item.path!));
    } else {
      router.push(item.path!);
    }
  }

  function onLogout() {
    AdministratorLogout();
  }

  const MENU = [
    {
      title: t("website"),
      path: "/console",
      icon: <CompassOutlined />,
    },
    {
      title: t("personal"),
      path: "/console/personal",
      icon: <UserOutlined />,
    },
    {
      title: t("post"),
      path: "/console/post",
      icon: <HighlightOutlined />,
      children: [
        {
          title: t("life"),
          path: "/console/post/life",
        },
        {
          title: t("projects"),
          path: "/console/post/projects",
        },
        {
          title: t("notes"),
          path: "/console/post/notes",
        },
      ],
    },
    {
      title: t("message"),
      path: "/console/message",
      icon: <MessageOutlined />,
    },
    {
      title: t("resource"),
      path: "/console/resource",
      icon: <PictureOutlined />,
    },
    {
      title: t("log"),
      path: "/console/log",
      icon: <DesktopOutlined />,
    },
    {
      title: t("system"),
      path: "/console/system",
      icon: <LockOutlined />,
    },
  ];

  const routePath = path.split("/").splice(0, 4).join("/");

  useEffect(() => {
    document.title = t("title");
  }, []);

  return (
    <aside className="w-60 h-max px-4 py-1 rounded-3xl overflow-hidden shadow-custom fixed top-14 select-none bg-white dark:bg-card">
      <div className="h-16.5 flex items-center">
        <div className="p-1 rounded-full inline-block my-4 bg-black/5 dark:bg-zinc-800">
          <HighlightOutlined className="text-2xl m-1 flex" />
        </div>
        <h3 className="ml-2 font-bold">{t("title")}</h3>
      </div>
      <hr className="m-auto mt-0.5 mb-3.5 border-t border-t-gray-100! dark:border-t-zinc-800!" />
      <ul>
        {MENU.map((v) => {
          const EXPAND = expand === v.path;
          const HAS_CHILD = Boolean(v.children?.length);
          return (
            <li key={v.path}>
              <p
                onClick={() => onChange(v)}
                className={`${CLS_ITEM_DEF} ${(!HAS_CHILD && routePath) === v.path ? CLS_ITEM_SELECTED : CLS_ITEM_HOVER}`}
              >
                {v.icon} &nbsp; {v.title}
                {HAS_CHILD && (
                  <UpOutlined
                    className={`absolute right-5.5 text-[11px] duration-300 ${EXPAND ? "rotate-180" : ""}`}
                  />
                )}
              </p>
              {HAS_CHILD && (
                <div
                  className={`grid transition-all duration-300 ease-in-out -mt-1 ${
                    EXPAND
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="overflow-hidden ">
                    {v.children?.map((v) => (
                      <li
                        key={v.path}
                        onClick={() => onChange(v)}
                        className={`pl-7.5 ${CLS_ITEM_DEF} ${routePath === v.path ? CLS_ITEM_SELECTED : CLS_ITEM_HOVER}`}
                      >
                        {v.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}

        <li
          onClick={onLogout}
          className={`${CLS_ITEM_DEF} hover:bg-black/5 dark:hover:bg-white dark:hover:text-black`}
        >
          <PoweroffOutlined /> &nbsp; {t("logout")}
        </li>
      </ul>
    </aside>
  );
};

export default Console;
