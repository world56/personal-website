"use client";

import { usePosts } from "@/hooks";
import Post from "@/components/Post";
import Empty from "@/components/Empty";
import Container from "@/components/Container";
import { LoadingOutlined } from "@ant-design/icons";

import { ENUM_COMMON } from "@/enum/common";

const Posts = () => {
  const { data, path, loading } = usePosts(ENUM_COMMON.STATUS.ENABLE);

  const list = data?.list;

  return (
    <Container className="flex flex-wrap gap-3 content-start relative">
      {loading ? (
        <LoadingOutlined className="text-2xl absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
      ) : list?.length ? (
        list?.map?.((v) => <Post key={v.id} {...v} url={`/${path}/${v.id}`} />)
      ) : (
        <Empty />
      )}
    </Container>
  );
};

export default Posts;
