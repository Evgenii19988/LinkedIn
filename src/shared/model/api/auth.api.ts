import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Me } from "../types/auth.types";
import { ListResponse } from "../types/response.types";
import { User } from "../types/users.types";

export const authApi = createApi({
  reducerPath: "auth-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (build) => ({
    // authMe: build.query<ListResponse<User>, null>({
    //   query: () => `/me`,
    // }),
    // changeMe: build.mutation<ListResponse<User>, User>({
    //   query: (body) => ({
    //     url: `/me`,
    //     method: "POST",
    //     body,
    //   }),
    // }),
    logIn: build.mutation<
      ListResponse<User | null>,
      { login: string; password: string }
    >({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLogInMutation } = authApi;
