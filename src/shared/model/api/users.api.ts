import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { User } from "../types/users.types";
import { ListResponse } from "../types/response.types";

export const userApi = createApi({
  reducerPath: "users-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (build) => ({
    getUser: build.query<ListResponse<User[]>, null>({
      query: () => `/users`,
    }),
  }),
});

export const { useLazyGetUserQuery } = userApi;
