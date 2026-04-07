"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

/**
 * @name MainNavigation main 内容页面导航
 */
const MainNavigation = () => {
  const path = usePathname();

  const t = useTranslations("navigation");

  const routes = [
    { url: "/", menu: t("about"), title: "Welcome" },
    { url: "/life", menu: t("life"), title: "My Life" },
    {
      url: "/projects",
      menu: t("project"),
      title: t("projectTitle"),
    },
    { url: "/notes", menu: t("note"), title: "Notes" },
    { url: "/message", menu: t("message"), title: "Leave a Message" },
  ];

  const name = routes.find(
    (v) => v.url === `/${path?.split("/")?.at(1) || ""}`,
  )?.title;

  return (
    <nav className="md:h-19 md:absolute md:z-10 md:top-0 md:pl-7.5 left-0 w-full h-13.5 z-50 fixed bottom-3 flex md:justify-between justify-center items-center">
      <span className="md:inline hidden font-bold text-2xl select-none">
        {name}
      </span>
      <ul className="md:px-0 mx-5 md:shadow-none md:items-center md:w-max w-full h-full rounded-3xl px-2.5 z-10 flex justify-between items-center bg-white dark:bg-black shadow-light md:dark:bg-transparent">
        {routes.map((v, i) => (
          <li key={v.url}>
            <Link
              href={v.url}
              draggable="false"
              className={`
              ${i === 0 ? "" : "md:ml-2 ml-0"}
              ${
                v.title === name
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : ""
              }
               py-2.5 px-3 font-medium rounded-full cursor-pointer
              md:hover:text-white md:hover:bg-black md:dark:hover:bg-white md:dark:hover:text-black`}
            >
              {v.menu}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
