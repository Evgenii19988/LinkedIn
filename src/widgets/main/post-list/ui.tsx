import React, { FC, useEffect } from "react";
import { Post } from "../../../features/post";
import GetPostsQuery from "./model/get-posts-query";
import { Post as PostType } from "../../../shared/model/types/posts.types";
import { PostListProps } from "./model/post-list.types";

const PostList: FC<PostListProps> = (props) => {
  const { data } = GetPostsQuery();

  return (
    <div className="flex flex-col gap-[16px]">
      {data?.posts?.map((post: PostType) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
