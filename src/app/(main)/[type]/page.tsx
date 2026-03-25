"use client";

import { usePosts } from "@/hooks";
import Post from "@/components/Post";
import Container from "@/components/Container";
import Empty from "@/components/Exception/Empty";
import PageTurning from "@/components/PageTurning";
import { LoadingOutlined } from "@ant-design/icons";

import { ENUM_COMMON } from "@/enum/common";

const Posts = () => {
  const { query, data, path, loading, setQuery } = usePosts(
    ENUM_COMMON.STATUS.ENABLE,
  );

  const list = data?.list;

  function onPageTurningChange(current: number) {
    setQuery((v) => ({ ...v, current }));
  }

  return (
    <Container className="flex flex-wrap gap-3 content-start relative">
      {loading ? (
        <div className="min-h-120">
          <LoadingOutlined className="text-2xl absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      ) : list?.length ? (
        <>
          {list?.map?.((v) => (
            <Post key={v.id} {...v} url={`/${path}/${v.id}`} />
          ))}
          <PageTurning
            radius
            total={data?.total}
            className="md:mt-4.5"
            current={query.current}
            pageSize={query.pageSize}
            onChange={onPageTurningChange}
          />
        </>
      ) : (
        <Empty />
      )}
    </Container>
  );
};

export default Posts;
