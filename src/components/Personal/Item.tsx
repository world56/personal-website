import Link from "next/link";
import Image from "next/image";

import { API_RESOURCE } from "@/app/api";

import type { Tag } from "@prisma/client";

interface TypeItemProps
  extends Pick<Tag, "name" | "icon" | "url" | "description"> {
  last?: boolean;
  children?: React.ReactNode;
}

/**
 * @name Item 个人简介标签
 */
const Item: React.FC<TypeItemProps> = ({
  url,
  last,
  name,
  icon,
  description,
}) => (
  <li className={`flex ${last ? `mb-0` : `md:mb-6 mb-3`}`}>
    <div className="w-[46px] h-[46px] rounded-full select-none flex items-center justify-center bg-black/[0.06] dark:bg-[#27272A]">
      <Image
        alt="#"
        width={30}
        height={30}
        draggable="false"
        className="dark:dark-icon"
        src={`${API_RESOURCE}${icon}`}
      />
    </div>
    <div
      className="ml-5 leading-0 truncate"
      style={{ width: "calc(100% - 66px)" }}
    >
      <p className="mt-[5px] text-[13px] truncate text-zinc-600 dark:text-white">
        {name}
      </p>
      {url ? (
        <Link
          href={url}
          target="_blank"
          className="text-sm display-inherit truncate dark:text-[#A1A1AA]"
        >
          {description}
        </Link>
      ) : (
        <p className="text-sm truncate dark:text-[#A1A1AA]">{description}</p>
      )}
    </div>
  </li>
);

export default Item;
