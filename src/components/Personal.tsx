import Link from "next/link";
import { cache } from "react";
import Image from "next/image";
import { prisma, DBlocal } from "@/lib/db";
import { DownCircleOutlined } from "@ant-design/icons";

import { ENUM_COMMON } from "@/enum/common";
import { API_RESOURCE } from "@/config/common";

export const getPersonInfo = cache(async (type: ENUM_COMMON.TAG) => {
  const local = DBlocal.get();
  const items = await prisma.tag.findMany({
    where: { type },
    orderBy: { index: "asc" },
  });
  return { local, items };
});

const Personal = async () => {
  const { local, items } = await getPersonInfo(ENUM_COMMON.TAG.PANEL);
  const length = items?.length;

  return (
    <aside className="md:w-75 md:float-left md:leading-normal md:m-0 md:p-7.5 m-3 h-full p-4 md:h-max min-[1300px]:float-none min-[1300px]:fixed min-[1300px]:top-14 min-[1300px]:mt-0 text-center shadow-custom rounded-3xl bg-white dark:bg-card">
      <Image
        alt="#"
        priority
        width={152}
        height={152}
        draggable="false"
        src={`${API_RESOURCE}${local?.icon}`}
        className="md:m-auto md:float-none md:w-38 md:h-38 w-23 h-23 mr-4 block rounded-full object-cover float-left"
      />
      <h1 className="md:my-6 md:text-center text-left mt-4 mb-2.5 text-2xl font-bold">
        {local.name}
      </h1>

      <span className="md:py-1.5 md:px-2.5 md:bg-black/6 md:dark:bg-zinc-800 md:inline flex mb-3.5 rounded-md text-sm select-none">
        {local.position}
      </span>

      <input type="checkbox" id="personal-toggle" className="hidden peer" />

      <label
        htmlFor="personal-toggle"
        className="md:hidden absolute right-7 top-4 cursor-pointer select-none"
      >
        <DownCircleOutlined className="text-xl duration-200 transform [input:checked~label_&]:rotate-180 rotate-0" />
      </label>

      <div id="personal" className="hidden peer-checked:block md:block">
        <hr className="mt-9 mb-5 md:my-8 border-t! border-t-gray-100! dark:border-t-zinc-800!" />
        <ul className="text-left mt-4">
          {items.map((v, i) => (
            <li
              key={v.id}
              className={`flex ${i + 1 === length ? `mb-0` : `md:mb-6 mb-3`}`}
            >
              <div className="w-11.5 h-11.5 rounded-full select-none flex items-center justify-center bg-black/6 dark:bg-zinc-800">
                <Image
                  alt="#"
                  width={30}
                  height={30}
                  className="icon"
                  draggable="false"
                  src={`${API_RESOURCE}${v.icon}`}
                />
              </div>
              <div className="ml-5 leading-0 truncate">
                <p className="text-[13px]/6 text-zinc-600 truncate dark:text-white">
                  {v.name}
                </p>
                {v.url ? (
                  <Link
                    href={v.url}
                    target="_blank"
                    className="text-sm display-inherit truncate dark:text-zinc-400"
                  >
                    {v.description}
                  </Link>
                ) : (
                  <p className="text-sm truncate dark:text-zinc-400">
                    {v.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Personal;
