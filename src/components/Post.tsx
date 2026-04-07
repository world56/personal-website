import Link from "next/link";
import Image from "next/image";

import { Post } from "model";
import { API_RESOURCE } from "@/config/common";

interface TypePostProps extends Pick<
  Post,
  "icon" | "title" | "id" | "description"
> {
  url: string;
}

/**
 * @name PostDetail 文本列表
 */
const PostDetail: React.FC<TypePostProps> = ({
  url,
  icon,
  title,
  description,
}) => (
  <article className="group relative text-content md:w-[calc(33.33%-8px)] w-full p-2.5 rounded-md border border-gray-100 overflow-hidden hover:shadow-post duration-75 dark:border-zinc-800">
    <figure className="overflow-hidden rounded-md w-full">
      <Image
        priority
        alt={title}
        width={280}
        height={180}
        draggable="false"
        src={`${API_RESOURCE}${icon}`}
        className="h-45 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
    </figure>

    <h2 className="mt-2.5 text-[16px] font-bold truncate">
      <Link href={url} draggable="false">
        <span className="absolute inset-0 z-10" aria-hidden="true" />
        {title}
      </Link>
    </h2>

    <p className="mt-1 truncate text-black/50 dark:text-zinc-400">
      {description}
    </p>
  </article>
);

export default PostDetail;
