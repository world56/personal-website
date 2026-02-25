import Prism from "prismjs";
import { prisma } from "@/lib/db";
import Empty from "@/components/Empty";
import { unstable_cache } from "next/cache";
import PostTools from "./_components/Tools";
import Container from "@/components/Container";

import "prismjs/components/prism-c.min.js";
import "prismjs/components/prism-go.min.js";
import "prismjs/components/prism-php.min.js";
import "prismjs/components/prism-sql.min.js";
import "prismjs/components/prism-cpp.min.js";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-java.min.js";
import "prismjs/components/prism-rust.min.js";
import "prismjs/components/prism-dart.min.js";
import "prismjs/components/prism-swift.min.js";
import "prismjs/components/prism-nginx.min.js";
import "prismjs/components/prism-scala.min.js";
import "prismjs/components/prism-docker.min.js";
import "prismjs/components/prism-kotlin.min.js";
import "prismjs/components/prism-python.min.js";
import "prismjs/components/prism-csharp.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-markup-templating.min.js";

import { ENUM_COMMON } from "@/enum/common";
import { POST_PATH, POST_TYPE } from "@/config/common";

import type { Post } from "model";

interface TypePostProps {
  params: Promise<{
    id: Post["id"];
    type: keyof typeof POST_TYPE;
  }>;
}

function formatEntities(encodedString: string) {
  const translate_re = /&(nbsp|amp|quot|lt|gt|ldquo|rdquo|#\d+);/g;
  const translate = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">",
    ldquo: "“",
    rdquo: "”",
    "#39": "'",
  };
  return encodedString.replace(translate_re, (match, entity) => {
    if (entity.startsWith("#")) {
      return String.fromCharCode(entity.slice(1));
    } else {
      return translate[entity as keyof typeof translate];
    }
  });
}

function highlightCodeInRichText(richText: string) {
  const codeBlockRegex =
    /<pre class="language-(\w+)"><code>([\s\S]*?)<\/code><\/pre>/g;
  let highlightedRichText = richText;
  let match;
  while ((match = codeBlockRegex.exec(richText)) !== null) {
    const [text, language, code] = match;
    const grammar = Prism.languages?.[language];
    if (grammar) {
      const beautifyCode = Prism.highlight(
        formatEntities(code),
        grammar,
        language,
      );
      highlightedRichText = highlightedRichText.replace(
        text,
        `<pre class="language-${language}">${beautifyCode}</pre>`,
      );
    }
  }
  return highlightedRichText;
}

const requestPost = (id: number, type: number) =>
  unstable_cache(
    () =>
      prisma.post.findUnique({
        where: { id: Number(id), type, status: ENUM_COMMON.STATUS.ENABLE },
      }),
    [`post-${id}-${type}`],
    { tags: [`post-${id}`], revalidate: false },
  )();

export async function generateMetadata({ params }: TypePostProps) {
  const { id, type } = await params;
  const res = await requestPost(id, POST_TYPE[type]);
  return {
    title: res?.title ? res.title : "not found",
    description: res?.description,
  };
}

export async function generateStaticParams() {
  const res = await prisma.post.findMany({
    where: { status: ENUM_COMMON.STATUS.ENABLE },
  });
  return res.map((v) => ({
    id: String(v.id),
    type: POST_PATH[v.type as ENUM_COMMON.POST_TYPE],
  }));
}

const Post: React.FC<TypePostProps> = async ({ params }) => {
  const { id, type } = await params;
  const res = await requestPost(id, POST_TYPE[type]);
  return (
    <Container>
      {res ? (
        <>
          <article>
            <header>
              <h1 className="text-3xl font-bold md:mt-2.5 mb-[22px] wrap-break-word whitespace-normal">
                {res.title}
              </h1>
              <PostTools title={res.title} date={res.createTime} />
            </header>
            <section
              dangerouslySetInnerHTML={{
                __html: highlightCodeInRichText(res.content),
              }}
              className="mce-content-body no-tailwindcss mb-7 h-104.5"
            />
            {res?.footer ? (
              <footer>
                <p className="text-sm text-gray-400 text-center select-none">
                  {res.footer}
                </p>
              </footer>
            ) : null}
          </article>
        </>
      ) : (
        <Empty />
      )}
    </Container>
  );
};

export default Post;
