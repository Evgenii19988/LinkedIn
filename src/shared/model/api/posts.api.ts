import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ListResponse } from "../types/response.types";
import { Post } from "../types/posts.types";

export const postsApi = createApi({
  reducerPath: "posts-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query<{ posts: Post[] }, null>({
      query: () => `/posts`,
      providesTags: ["Posts"],
    }),
    addPost: build.mutation<Post, Partial<Post>>({
      query(body) {
        return {
          url: `/posts`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;
