import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Me } from "../types/auth.types";
import { ListResponse } from "../types/response.types";

export const authApi = createApi({
  reducerPath: "auth-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (build) => ({
    authMe: build.query<ListResponse<Me>, null>({
      query: () => `/me`,
    }),
    changeMe: build.mutation<ListResponse<Me>, Me>({
      query: (body) => ({
        url: `/me`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAuthMeQuery, useChangeMeMutation } = authApi;
