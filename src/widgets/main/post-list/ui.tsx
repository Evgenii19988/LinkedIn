import React, { FC, useEffect } from "react";
import { Post } from "../../../features/post";
import GetPostsQuery from "./model/get-posts-query";
import { Post as PostType } from "../../../shared/model/types/posts.types";
import { postsApi } from "../../../shared/model/api/posts.api";
import { PostListProps } from "./model/post-list.types";

const PostList: FC<PostListProps> = (props) => {
  const { isLoadingAddPost } = props;
  const { refetch, data } = GetPostsQuery();
  useEffect(() => {
    refetch();
  }, [isLoadingAddPost]);

  return (
    <div className="flex flex-col gap-[16px]">
      {data?.posts?.map((post: PostType) => (
        <div key={post.id}>
          <Post name={post.name} text={post.text} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
